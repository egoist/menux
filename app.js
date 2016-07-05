'use strict'
const menubar = require('menubar')
const {globalShortcut, ipcMain} = require('electron')

const isDev = process.env.NODE_ENV === 'development'

const mb = menubar({
  dir: process.cwd(),
  wdith: 360,
  height: 600
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
