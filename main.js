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
