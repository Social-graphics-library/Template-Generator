import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
        },
        minWidth: 800,
        minHeight: 600,
        icon: './static/assets/sgl.ico',
    })

    win.loadFile('./static/index.html')

    // Open the DevTools.
    // win.webContents.openDevTools({ mode: 'detach' })
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