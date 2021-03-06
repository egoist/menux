'use strict'
const fs = require('fs')
const path = require('path')
const {ipcRenderer} = require('electron')
const event = require('../utils/event')
const css = fs.readFileSync(path.join(__dirname, '../css/insert.css'), 'utf8')

module.exports = {
  template: `<webview
    v-el:main-view
    class="main-view"
    useragent="Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
    :src="url">
  </webview>`,
  vuex: {
    getters: {
      url: state => state.bar.url
    }
  },
  ready() {
    ipcRenderer.on('refresh', () => {
      this.$els.mainView.reload()
    })

    event.on('view-reload', () => {
      this.$els.mainView.reload()
    })

    event.on('view-stop', () => {
      this.$els.mainView.stop()
    })

    event.on('view-go-back', () => {
      if (this.$els.mainView.canGoBack()) {
        this.$els.mainView.goBack()
      } else {
        alert('No previous page')
      }
    })

    event.on('view-go-forward', () => {
      if (this.$els.mainView.canGoForward()) {
        this.$els.mainView.goForward()
      } else {
        alert('No next page')
      }
    })

    this.$els.mainView.addEventListener('did-navigate', this.didNavigate)
    this.$els.mainView.addEventListener('dom-ready', () => {
      this.$els.mainView.insertCSS(css)
    })
    this.$els.mainView.addEventListener('did-start-loading', () => {
      this.$store.dispatch('START_LOADING')
    })
    this.$els.mainView.addEventListener('did-stop-loading', () => {
      this.$store.dispatch('STOP_LOADING')
    })
  },
  methods: {
    didNavigate(e) {
      document.querySelector('#search').value = e.url
    }
  }
}
