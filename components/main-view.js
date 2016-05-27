'use strict'
const fs = require('fs')
const path = require('path')
const topbar = require('../vendor/topbar')
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
    
    this.$els.mainView.addEventListener('did-navigate', this.didNavigate)
    this.$els.mainView.addEventListener('dom-ready', () => {
      this.$els.mainView.insertCSS(css)
    })
    this.$els.mainView.addEventListener('did-start-loading', topbar.show)
    this.$els.mainView.addEventListener('did-stop-loading', topbar.hide)
  },
  methods: {
    didNavigate(e) {
      document.querySelector('#search').value = e.url
    }
  }
}