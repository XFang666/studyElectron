const { ipcRenderer } = require('electron');

document.getElementById('openNewWindowBtn').addEventListener('click', () => {
  ipcRenderer.send('open-new-window', 'Data to be sent to new window');
});

ipcRenderer.on('new-window-closed', (event, message) => {
  console.log(message);
});
