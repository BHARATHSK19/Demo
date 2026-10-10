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

server.listen(8085, async () => {
  console.log('Server started on http://localhost:8085');

  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9333',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--user-data-dir=/tmp/chrome-test-9333-' + Date.now()
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9333/json/list');
    const targets = await listRes.json();
    let target = targets.find(t => t.type === 'page');
    if (!target) {
      const newRes = await fetch('http://127.0.0.1:9333/json/new');
      target = await newRes.json();
    }
    console.log('Target found:', target.id);

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

    const viewports = [
      { name: 'iPhone-16-Pro-Max', width: 440, height: 956 },
      { name: 'iPhone-14', width: 390, height: 844 },
      { name: 'Android-360', width: 360, height: 780 }
    ];

    for (const pageName of pages) {
      console.log(`\n=================== PAGE: ${pageName} ===================`);
      for (const vp of viewports) {
        await client.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 2,
          mobile: true
        });

        await client.send('Page.navigate', { url: `http://localhost:8085/${pageName}` });
        await new Promise(r => setTimeout(r, 1200));

        const evalRes = await client.send('Runtime.evaluate', {
          expression: `(() => {
            const winWidth = window.innerWidth;
            const docEl = document.documentElement;
            const body = document.body;

            // Check elements extending past winWidth
            const allElements = document.querySelectorAll('*');
            const bad = [];
            for (const el of allElements) {
              const r = el.getBoundingClientRect();
              if (r.right > winWidth + 0.5 || r.left < -0.5 || el.scrollWidth > winWidth + 0.5) {
                // Ignore elements that have hidden visibility or are non-rendered
                if (r.width > 0 && r.height > 0) {
                  const style = window.getComputedStyle(el);
                  if (style.display !== 'none' && style.visibility !== 'hidden' && style.position !== 'fixed') {
                    bad.push({
                      tag: el.tagName,
                      id: el.id,
                      cls: el.className ? (typeof el.className === 'string' ? el.className.slice(0, 40) : '') : '',
                      left: Math.round(r.left),
                      right: Math.round(r.right),
                      width: Math.round(r.width),
                      scrollWidth: el.scrollWidth,
                      clientWidth: el.clientWidth,
                      textSnippet: (el.innerText || el.textContent || '').trim().slice(0, 40)
                    });
                  }
                }
              }
            }

            return {
              winWidth,
              scrollWidth: docEl.scrollWidth,
              bodyScrollWidth: body.scrollWidth,
              badCount: bad.length,
              badElements: bad.slice(0, 8)
            };
          })()`,
          returnByValue: true
        });

        const info = evalRes.result.value;
        console.log(`[${vp.name} (${vp.width}px)] docScrollWidth=${info.scrollWidth} bodyScrollWidth=${info.bodyScrollWidth} badCount=${info.badCount}`);
        if (info.badElements && info.badElements.length > 0) {
          console.log('   Overhanging elements:');
          for (const b of info.badElements) {
            console.log(`   - <${b.tag} id="${b.id}" class="${b.cls}"> width=${b.width} right=${b.right} text="${b.textSnippet}"`);
          }
        }
      }
    }

  } catch (e) {
    console.error('Audit error:', e);
  } finally {
    chrome.kill();
    server.close();
    process.exit(0);
  }
});
