<<<<<<< HEAD
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // For Electron versions below 12
      contextIsolation: false, // For Electron versions below 12
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('open-new-window', (event, data) => {
  const newWindow = new BrowserWindow({
    width: 400,
    height: 300,
    parent: mainWindow, // Set the parent window
    modal: true, // Makes the new window modal
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  newWindow.loadFile('newWindow.html');

  newWindow.on('closed', () => {
    event.reply('new-window-closed', 'New window has been closed.');
  });
});
=======
const { app, BrowserWindow } = require("electron");

// 创建窗口
function createWindow() {
    let mainWindow = new BrowserWindow({
        x: 100, // 窗体显示位置距离x轴距离
        y: 100,         // 窗体显示位置距离y轴距离
        show: false,    // 窗体显示窗体 true: 显示 false: 隐藏  默认是true
        width: 600,     // 默认宽度
        height: 400,    // 默认高度
        maxHeight: 600, // 最大高度
        maxWidth: 1000, // 最大宽度
        minHeight: 200, // 最小高度
        minWidth: 300, // 最小宽度
        resizable: false, // 修改窗体大小缩放，true 允许拖拉修改大小缩放 false：禁止   默认值是true
    });
    // 监听窗体显示事件
    mainWindow.on('ready-to-show', ()=> {
        // 显示窗体
        mainWindow.show();
    })

    mainWindow.loadFile("index.html");

    // 监听窗口推出事件
    mainWindow.on('close', ()=> {
        mainWindow = null;
    })
};

app.on("ready", createWindow);

app.on('window-all-closed', ()=> {
    console.log('window-all-closed');
});

>>>>>>> cd090b119eeb1db1d15355be358ff19e4cec0113
