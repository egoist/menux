'use strict'
const menubar = require('menubar')

const mb = menubar({
  dir: process.cwd(),
  wdith: 360,
  height: 600
})

mb.on('ready', function ready() {
  console.log('app is ready')
  // your app code here
})

mb.on('after-create-window', function created() {
  mb.window.openDevTools()
})