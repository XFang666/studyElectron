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

