const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) { app.quit(); process.exit(0); }

let win = null;
let isQuitting = false;

function toggle() {
  if (!win) return;
  if (win.isVisible()) { win.hide(); } else { win.show(); win.focus(); }
}

// 本地 HTTP 服务，接收 JS fetch 请求
require('http').createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/toggle') toggle();
  if (req.url === '/hide') { if (win) win.hide(); }
  res.writeHead(200); res.end('ok');
}).listen(19876, '127.0.0.1');

function createWindow() {
  win = new BrowserWindow({
    width: 1290, height: 680,
    minWidth: 600, minHeight: 400,
    title: 'BAT翻译',
    icon: path.join(__dirname, 'logo.png'),
    show: true,
    autoHideMenuBar: true,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile('main.html');

  // ESC 隐藏 + F9 备选
  win.webContents.on('before-input-event', (event, input) => {
    if ((input.key === 'Escape' || input.key === 'F9') && input.type === 'keyDown') {
      toggle();
      event.preventDefault();
    }
  });

  // X → 隐藏
  win.on('close', (e) => {
    if (!isQuitting) { e.preventDefault(); win.hide(); }
  });
}

function createTray() {
  const icon = nativeImage.createFromPath(path.join(__dirname, 'logo.png')).resize({ width: 22, height: 22 });
  const tray = new Tray(icon);
  tray.setToolTip('BAT翻译');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: '显示/隐藏', click: toggle },
    { type: 'separator' },
    { label: '退出', click: () => { isQuitting = true; app.quit(); } },
  ]));
  tray.on('click', toggle);
}

app.on('second-instance', () => { if (win) { win.show(); win.focus(); } });
app.whenReady().then(() => { createWindow(); createTray(); });
app.on('before-quit', () => { isQuitting = true; });
