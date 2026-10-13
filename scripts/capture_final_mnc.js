const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9340;

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
    height: 960,
    deviceScaleFactor: 2,
    mobile: false
  });

  await pageCdp.send('Page.addScriptToEvaluateOnNewDocument', {
    source: `
      try {
        localStorage.setItem('ojix_dpdp_cookie_consent', JSON.stringify({
          necessary: true,
          analytics: true,
          timestamp: new Date().toISOString(),
          version: '3.0'
        }));
      } catch (e) {}
    `
  });

  await pageCdp.send('Page.navigate', { url: 'http://localhost:3000/index.html?t=' + Date.now() });
  await sleep(2500);

  // Guarantee banner is removed from DOM for clean portfolio capture
  await pageCdp.send('Runtime.evaluate', {
    expression: `
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.remove();
    `
  });
  await sleep(300);

  // 1. Hub + Filters
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.querySelector('.portfolio-architecture-hub').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shotHub = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/mnc_architecture_hub.png', Buffer.from(shotHub.data, 'base64'));
  console.log('Saved /tmp/mnc_architecture_hub.png');

  // 2. CompanyOS Workflow (Tab 1)
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('companyos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shotComp = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/mnc_companyos_workflow.png', Buffer.from(shotComp.data, 'base64'));
  console.log('Saved /tmp/mnc_companyos_workflow.png');

  // 3. TravelOS (Tab 1 with orbital logo)
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('travelos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shotTravel = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/mnc_travelos_workflow.png', Buffer.from(shotTravel.data, 'base64'));
  console.log('Saved /tmp/mnc_travelos_workflow.png');

  // 4. FitOS (Tab 1 with biometric pulse logo)
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('fitos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(1000);
  const shotFit1 = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/mnc_fitos_workflow.png', Buffer.from(shotFit1.data, 'base64'));
  console.log('Saved /tmp/mnc_fitos_workflow.png');

  // 5. Test Tab Switching on FitOS -> Click Tab 3 (Hardware & API Mesh)
  await pageCdp.send('Runtime.evaluate', {
    expression: `
      const fitCard = document.getElementById('fitos');
      const meshBtn = fitCard.querySelector('.matrix-tab-btn[data-matrix-tab="integrations"]');
      if (meshBtn) meshBtn.click();
    `
  });
  await sleep(600);
  const shotFitMesh = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/mnc_fitos_mesh.png', Buffer.from(shotFitMesh.data, 'base64'));
  console.log('Saved /tmp/mnc_fitos_mesh.png');

  // 6. Test Filter Click -> Click "Fiscal & Legal Core (3)"
  await pageCdp.send('Runtime.evaluate', {
    expression: `
      const govFilter = document.querySelector('.filter-pill[data-filter="governance"]');
      if (govFilter) govFilter.click();
    `
  });
  await sleep(600);
  await pageCdp.send('Runtime.evaluate', {
    expression: `document.getElementById('companyos').scrollIntoView({ behavior: 'instant', block: 'center' });`
  });
  await sleep(600);
  const shotFilter = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/mnc_filter_governance.png', Buffer.from(shotFilter.data, 'base64'));
  console.log('Saved /tmp/mnc_filter_governance.png');

  // Reset filter back to 'all'
  await pageCdp.send('Runtime.evaluate', {
    expression: `
      const allFilter = document.querySelector('.filter-pill[data-filter="all"]');
      if (allFilter) allFilter.click();
    `
  });
  await sleep(600);

  // 7. Mobile Viewport (390px iPhone)
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
  const shotMobile = await pageCdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/tmp/mnc_mobile_companyos.png', Buffer.from(shotMobile.data, 'base64'));
  console.log('Saved /tmp/mnc_mobile_companyos.png');

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
