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
  '.png': 'image/png'
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

server.listen(8097, async () => {
  console.log('Server running on http://localhost:8097');

  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9336',
    '--disable-gpu',
    '--user-data-dir=/tmp/c9336'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const list = await (await fetch('http://127.0.0.1:9336/json/list')).json();
  let target = list.find(t => t.type === 'page');
  if (!target) {
    target = await (await fetch('http://127.0.0.1:9336/json/new')).json();
  }
  const client = createCdpConnection(target.webSocketDebuggerUrl);
  await client.ready;

  await client.send('Page.enable');
  await client.send('Runtime.enable');

  const results = [];

  try {
    // 1. Mobile Menu Toggle Test on index.html (375px)
    await client.send('Emulation.setDeviceMetricsOverride', { width: 375, height: 667, deviceScaleFactor: 2, mobile: true });
    await client.send('Page.navigate', { url: 'http://localhost:8097/index.html' });
    await new Promise(r => setTimeout(r, 1000));

    const menuRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.getElementById('main-nav');
        if (!toggle || !nav) return { pass: false, error: 'toggle or nav missing' };
        
        const initialExpanded = toggle.getAttribute('aria-expanded');
        toggle.click();
        const openedExpanded = toggle.getAttribute('aria-expanded');
        const navIsOpen = nav.classList.contains('is-open');
        toggle.click();
        const closedExpanded = toggle.getAttribute('aria-expanded');
        const navIsClosed = !nav.classList.contains('is-open');

        return {
          pass: initialExpanded === 'false' && openedExpanded === 'true' && navIsOpen && closedExpanded === 'false' && navIsClosed,
          details: { initialExpanded, openedExpanded, navIsOpen, closedExpanded, navIsClosed }
        };
      })()`,
      returnByValue: true
    });
    results.push({ test: 'Mobile Nav Menu Toggle', ...menuRes.result.value });

    // 2. Tab Keyboard Navigation (Arrow Keys & Roving Tabindex)
    const tabRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const tabs = Array.from(document.querySelectorAll('.engine-tab'));
        if (tabs.length !== 3) return { pass: false, error: 'tabs not found' };
        
        // Focus first tab
        tabs[0].focus();
        
        // Dispatch ArrowRight
        tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
        const activeAfterRight = tabs[1].classList.contains('is-active') && tabs[1].getAttribute('aria-selected') === 'true';
        const viewLegalVisible = !document.getElementById('view-legal').hidden;

        // Dispatch ArrowRight again
        tabs[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
        const activeAfterRight2 = tabs[2].classList.contains('is-active') && tabs[2].getAttribute('aria-selected') === 'true';
        const viewProcureVisible = !document.getElementById('view-procure').hidden;

        // Dispatch ArrowLeft
        tabs[2].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
        const activeAfterLeft = tabs[1].classList.contains('is-active');

        // Dispatch Home
        tabs[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
        const activeAfterHome = tabs[0].classList.contains('is-active');

        // Dispatch End
        tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
        const activeAfterEnd = tabs[2].classList.contains('is-active');

        return {
          pass: activeAfterRight && viewLegalVisible && activeAfterRight2 && viewProcureVisible && activeAfterLeft && activeAfterHome && activeAfterEnd,
          details: { activeAfterRight, viewLegalVisible, activeAfterRight2, viewProcureVisible, activeAfterLeft, activeAfterHome, activeAfterEnd }
        };
      })()`,
      returnByValue: true
    });
    results.push({ test: 'Tabs APG Keyboard Navigation & Panels', ...tabRes.result.value });

    // 3. Solution Finder Interactivity Test
    const finderRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('.finder-option'));
        const resultTitle = document.getElementById('result-title');
        if (buttons.length === 0 || !resultTitle) return { pass: false, error: 'finder elements missing' };

        const initialTitle = resultTitle.textContent.trim();
        // Click second button
        buttons[1].click();
        
        return new Promise((resolve) => {
          setTimeout(() => {
            const updatedTitle = resultTitle.textContent.trim();
            const pass = updatedTitle !== initialTitle && buttons[1].classList.contains('is-selected');
            resolve({ pass, initialTitle, updatedTitle });
          }, 200);
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });
    results.push({ test: 'Solution Finder Cross-Fade & Selection', ...finderRes.result.value });

    // 4. Hero 3 Cursor Spotlight Properties on pointermove (desktop 1280x800)
    await client.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
    await client.send('Page.navigate', { url: 'http://localhost:8097/index.html' });
    await new Promise(r => setTimeout(r, 1000));

    const cursorRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const hero = document.querySelector('.hero');
        const card = document.querySelector('#hero-engine');
        if (!hero || !card) return { pass: false, error: 'hero or engine missing' };

        // Dispatch pointermove on hero
        hero.dispatchEvent(new PointerEvent('pointermove', { clientX: 300, clientY: 200, bubbles: true }));
        card.dispatchEvent(new PointerEvent('pointermove', { clientX: 350, clientY: 250, bubbles: true }));

        return new Promise((resolve) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const heroCursorX = hero.style.getPropertyValue('--cursor-x');
              const cardCursorX = card.style.getPropertyValue('--card-cursor-x');
              const pass = Boolean(heroCursorX && cardCursorX && heroCursorX.includes('%') && cardCursorX.includes('px'));
              resolve({ pass, heroCursorX, cardCursorX });
            });
          });
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });
    results.push({ test: 'Hero 3 Pointer Movement & CSS Var Updates', ...cursorRes.result.value });

    console.log('\n--- INTERACTIVE TEST RESULTS ---');
    results.forEach(r => console.log(`${r.pass ? 'PASS' : 'FAIL'} - ${r.test}:`, JSON.stringify(r)));

  } catch (e) {
    console.error('Interactive test error:', e);
  } finally {
    chrome.kill();
    server.close();
    process.exit(0);
  }
});
