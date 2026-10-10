const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, '..', reqPath);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found: ' + reqPath);
  }
});

function createCdpConnection(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 1;
  const callbacks = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const cb = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) cb.reject(new Error(JSON.stringify(msg.error)));
      else cb.resolve(msg.result);
    }
  };

  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      callbacks.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  };

  const ready = new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  return { ws, send, ready };
}

server.listen(8099, async () => {
  console.log('Server started on http://localhost:8099');

  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9334',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--user-data-dir=/tmp/chrome-test-9334-' + Date.now()
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9334/json/list');
    const targets = await listRes.json();
    let target = targets.find(t => t.type === 'page');
    if (!target) {
      const newRes = await fetch('http://127.0.0.1:9334/json/new');
      target = await newRes.json();
    }

    const client = createCdpConnection(target.webSocketDebuggerUrl);
    await client.ready;

    await client.send('Page.enable');
    await client.send('DOM.enable');

    const pages = [
      'index.html',
      'campusos.html',
      'procureos.html',
      'legalos.html',
      'dpdp-compliance.html'
    ];

    const outDir = path.join(__dirname, 'renders');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    for (const pageName of pages) {
      console.log(`\n=================== PAGE: ${pageName} ===================`);
      // Viewport 440 (iPhone 16 Pro Max)
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: 440,
        height: 956,
        deviceScaleFactor: 2,
        mobile: true
      });

      await client.send('Page.navigate', { url: `http://localhost:8099/${pageName}` });
      await new Promise(r => setTimeout(r, 1000));

      // Dismiss consent banner so hero is visible
      await client.send('Runtime.evaluate', {
        expression: `(() => {
          localStorage.setItem('ojix_dpdp_cookie_consent', JSON.stringify({ analytics: false, timestamp: new Date().toISOString() }));
          const banner = document.getElementById('cookie-banner');
          if (banner) banner.remove();
        })()`
      });
      await new Promise(r => setTimeout(r, 500));

      // Take full hero screenshot
      const shot = await client.send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false
      });
      fs.writeFileSync(path.join(outDir, `${pageName.replace('.html', '')}_440_top.png`), Buffer.from(shot.data, 'base64'));

      // Now scroll to hero card / visual
      await client.send('Runtime.evaluate', {
        expression: `(() => {
          const visual = document.querySelector('.hero-visual, #hero-engine, #workspace-window');
          if (visual) {
            visual.scrollIntoView({ behavior: 'instant', block: 'center' });
          }
        })()`
      });
      await new Promise(r => setTimeout(r, 500));

      const cardShot = await client.send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false
      });
      fs.writeFileSync(path.join(outDir, `${pageName.replace('.html', '')}_440_card.png`), Buffer.from(cardShot.data, 'base64'));

      // Check card measurements
      const cardInfo = await client.send('Runtime.evaluate', {
        expression: `(() => {
          const winWidth = window.innerWidth;
          const card = document.querySelector('.hero-visual, #hero-engine, #workspace-window');
          if (!card) return { error: 'no card found' };
          const rect = card.getBoundingClientRect();
          return {
            winWidth,
            rectLeft: Math.round(rect.left),
            rectRight: Math.round(rect.right),
            rectWidth: Math.round(rect.width),
            cardScrollWidth: card.scrollWidth,
            fitsInViewport: rect.right <= winWidth && rect.left >= 0
          };
        })()`,
        returnByValue: true
      });
      console.log(`${pageName} 440px card info:`, cardInfo.result.value);

      // Now test 320px
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: 320,
        height: 600,
        deviceScaleFactor: 2,
        mobile: true
      });
      await client.send('Page.navigate', { url: `http://localhost:8099/${pageName}` });
      await new Promise(r => setTimeout(r, 1000));
      await client.send('Runtime.evaluate', {
        expression: `(() => {
          localStorage.setItem('ojix_dpdp_cookie_consent', JSON.stringify({ analytics: false, timestamp: new Date().toISOString() }));
          const banner = document.getElementById('cookie-banner');
          if (banner) banner.remove();
        })()`
      });
      await new Promise(r => setTimeout(r, 400));

      // Scroll to card at 320px and capture
      await client.send('Runtime.evaluate', {
        expression: `(() => {
          const visual = document.querySelector('.hero-visual, #hero-engine, #workspace-window');
          if (visual) {
            visual.scrollIntoView({ behavior: 'instant', block: 'center' });
          }
        })()`
      });
      await new Promise(r => setTimeout(r, 400));
      const cardShot320 = await client.send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false
      });
      fs.writeFileSync(path.join(outDir, `${pageName.replace('.html', '')}_320_card.png`), Buffer.from(cardShot320.data, 'base64'));

      const card320Info = await client.send('Runtime.evaluate', {
        expression: `(() => {
          const winWidth = window.innerWidth;
          const card = document.querySelector('.hero-visual, #hero-engine, #workspace-window');
          if (!card) return { error: 'no card found' };
          const rect = card.getBoundingClientRect();
          return {
            winWidth,
            rectLeft: Math.round(rect.left),
            rectRight: Math.round(rect.right),
            rectWidth: Math.round(rect.width),
            cardScrollWidth: card.scrollWidth,
            fitsInViewport: rect.right <= winWidth && rect.left >= 0,
            docScrollWidth: document.documentElement.scrollWidth,
            bodyScrollWidth: document.body.scrollWidth
          };
        })()`,
        returnByValue: true
      });
      console.log(`${pageName} 320px info:`, card320Info.result.value);
    }

    console.log('\nAll captures completed successfully.');
  } catch (err) {
    console.error('Error during verify_render:', err);
  } finally {
    chrome.kill();
    server.close();
    process.exit(0);
  }
});
