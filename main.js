const { app, BrowserWindow } = require("electron");

// 创建窗口
function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });

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

