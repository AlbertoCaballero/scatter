const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    //Create the browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    })

    win.loadURL(`file://${__dirname}/dist/scatter-app/index.html`)
    //win.webContents.openDevTools()

    //Close the window when closed
    win.on('closed', function() { 
        win = null 
    })
}


//Create window on electron instalation
app.on('ready', createWindow)

//Quit when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    //MacOS specific closing process
    if(win === null) {
        createWindow()
    }
})
