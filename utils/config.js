'use strict'
const Config = require('electron-config')

module.exports = new Config({
  defaults: {
    lastWindowState: {
      width: 360,
      height: 600
    }
  }
})
