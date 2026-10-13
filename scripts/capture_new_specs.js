const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9339;

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

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function run() {
  await sleep(1500);
  const versionRes = await fetch(`http://127.0.0.1:${port}/json/version`);
  const versionData = await versionRes.json();
  const cdp = await createCdpConnection(versionData.webSocketDebuggerUrl);

  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
  const pageRes = await fetch(`http://127.0.0.1:${port}/json`);
  const pages = await pageRes.json();
  const targetPage = pages.find(p => p.id === targetId);
  const pageCdp = await createCdpConnection(targetPage.webSocketDebuggerUrl);

  await pageCdp.send('Page.enable');
  await pageCdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  await pageCdp.send('Page.navigate', { url: 'http://localhost:3000/index.html?t=' + Date.now() });
  await sleep(2500);

  // Scroll to CompanyOS
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('companyos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shot1 = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/new_card_companyos.png', Buffer.from(shot1.data, 'base64'));
  console.log('Saved /tmp/new_card_companyos.png');

  // Scroll to TravelOS
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('travelos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shot2 = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/new_card_travelos.png', Buffer.from(shot2.data, 'base64'));
  console.log('Saved /tmp/new_card_travelos.png');

  // Scroll to FitOS
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('fitos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shot3 = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/new_card_fitos.png', Buffer.from(shot3.data, 'base64'));
  console.log('Saved /tmp/new_card_fitos.png');

  // Mobile viewport
  await pageCdp.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await sleep(1000);
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('companyos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shot4 = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/new_card_mobile.png', Buffer.from(shot4.data, 'base64'));
  console.log('Saved /tmp/new_card_mobile.png');

  const overflowCheck = await pageCdp.send('Runtime.evaluate', {
    expression: `JSON.stringify({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      overflow: document.documentElement.scrollWidth > window.innerWidth
    })`
  });
  console.log('Mobile overflow result:', overflowCheck.result.value);

  pageCdp.close();
  cdp.close();
  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  chrome.kill();
  process.exit(1);
});
