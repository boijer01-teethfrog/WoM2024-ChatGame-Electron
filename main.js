// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      icon: 'assets/images/pixels.ico',
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,  
      contextIsolation: true 
    },
    autoHideMenuBar: true
  })

  mainWindow.loadFile(path.join(__dirname, 'pages', 'login.html'))

}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.handle('get-stuff-from-main', () => 'Stuff from main!')
ipcMain.handle('send-stuff-to-main', async (event, data) => console.log(data))

app.on('window-all-closed', function () {
  app.quit()
})
