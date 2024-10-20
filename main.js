// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,  // Gör det möjligt att köra Node.js-moduler i renderer-processen
      contextIsolation: false // Tillåter Electron och Node.js API:er i renderer
    },
    autoHideMenuBar: false
  })

  // Load the index.html of the app
  mainWindow.loadFile(path.join(__dirname, 'pages', 'login.html'))

  // Open DevTools automatically (comment out if you don't want it)
  mainWindow.webContents.openDevTools()
}

// Called when Electron is ready to create browser windows.
app.whenReady().then(() => {
  createWindow()
})

// Example functions for communication between main and renderer (backend/frontend)
ipcMain.handle('get-stuff-from-main', () => 'Stuff from main!')
ipcMain.handle('send-stuff-to-main', async (event, data) => console.log(data))

app.on('window-all-closed', function () {
  app.quit()
})
