'use strict'
const topbar = require('../../vendor/topbar')

const showToolbar = JSON.parse(localStorage.getItem('mx:showToolbar') || 'null')
const state = {
  url: 'https://www.baidu.com',
  loading: false,
  showToolbar
}

const mutations = {
  UPDATE_URL(state, url) {
    state.url = url
  },
  TOGGLE_TOOLBAR(state) {
    localStorage.setItem('mx:showToolbar', JSON.stringify(!state.showToolbar))
    state.showToolbar = !state.showToolbar
  },
  START_LOADING(state) {
    topbar.show()
    state.loading = true
  },
  STOP_LOADING(state) {
    topbar.hide()
    state.loading = false
  }
}

module.exports = {
  state,
  mutations
}
