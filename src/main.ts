import { app, BrowserWindow } from 'electron'

const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('./static/index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})