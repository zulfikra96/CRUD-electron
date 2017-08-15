const electron = require('electron')
const { app, BrowserWindow } = electron


app.on('ready', function(){
    let win = new BrowserWindow({
        width:1366,
        height:768
    })
    win.loadURL(`file://${__dirname}/index.html`)
})