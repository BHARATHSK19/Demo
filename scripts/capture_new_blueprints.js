const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9338;

const chrome = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--user-data-dir=/tmp/chrome-test-profile-' + Date.now(),
  'about:blank'
]);

async function createCdpConnection(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => {
    ws.onopen = res;
    ws.onerror = rej;
  });
  let id = 1;
  const callbacks = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const cb = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) cb.reject(new Error(msg.error.message));
      else cb.resolve(msg.result);
    }
  };
  return {
    send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const curId = id++;
        callbacks.set(curId, { resolve, reject });
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    },
    close() { ws.close(); }
  };
}

async function run() {
  await new Promise(r => setTimeout(r, 1500));
  const res = await fetch(`http://127.0.0.1:${port}/json`);
  const targets = await res.json();
  const pageTarget = targets.find(t => t.type === 'page');
  const client = await createCdpConnection(pageTarget.webSocketDebuggerUrl);

  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  await client.send('Page.navigate', { url: 'http://localhost:3000/#platforms' });
  await new Promise(r => setTimeout(r, 2000));

  // Dismiss cookie banner
  await client.send('Runtime.evaluate', {
    expression: `(() => {
      localStorage.setItem('ojix_dpdp_cookie_consent', JSON.stringify({ analytics: false, timestamp: new Date().toISOString() }));
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.remove();
    })()`
  });

  // Capture Platform section top with card 1
  const shot1 = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync('/tmp/blueprint_companyos.png', Buffer.from(shot1.data, 'base64'));
  console.log('Saved /tmp/blueprint_companyos.png');

  // Scroll to TravelOS (card 6)
  await client.send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('travelos');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  const shotTravel = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync('/tmp/blueprint_travelos.png', Buffer.from(shotTravel.data, 'base64'));
  console.log('Saved /tmp/blueprint_travelos.png');

  // Scroll to FitOS (card 7)
  await client.send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('fitos');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  const shotFit = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync('/tmp/blueprint_fitos.png', Buffer.from(shotFit.data, 'base64'));
  console.log('Saved /tmp/blueprint_fitos.png');

  client.close();
  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  chrome.kill();
  process.exit(1);
});
