'use strict'
const menubar = require('menubar')
const {globalShortcut, ipcMain, BrowserWindow} = require('electron')
const config = require('./utils/config')

let settingsWindow
const isDev = process.env.NODE_ENV === 'development'
const lastWindowState = config.get('lastWindowState')

const mb = menubar({
  dir: process.cwd(),
  width: lastWindowState.width,
  height: lastWindowState.height
})

mb.on('ready', () => {
  console.log('app is ready')
})

mb.on('after-create-window', () => {
  if (isDev) mb.window.openDevTools()
  // refresh webview only
  globalShortcut.register('CommandOrControl+R', () => {
    mb.window.webContents.send('refresh')
  })
  // refresh whole window
  globalShortcut.register('CommandOrControl+Shift+R', () => {
    mb.window.reload()
  })
})

mb.app.on('before-quit', () => {
	if (!mb.window.isFullScreen()) {
		config.set('lastWindowState', mb.window.getBounds());
	}
})

ipcMain.on('open-settings', () => {
  console.log('open settings')
  settingsWindow = new BrowserWindow({
    width: 600,
    height: 300
  })
  settingsWindow.loadURL(`file://${__dirname}/settings.html`)
})
