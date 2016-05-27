'use strict'

const showToolbar = JSON.parse(localStorage.getItem('mx:showToolbar') || 'null')

const state = {
  url: 'https://duckduckgo.com',
  showToolbar
}

const mutations = {
  UPDATE_URL(state, url) {
    state.url = url
  },
  TOGGLE_TOOLBAR(state) {
    localStorage.setItem('mx:showToolbar', JSON.stringify(!state.showToolbar))
    state.showToolbar = !state.showToolbar
  }
}

module.exports = {
  state,
  mutations
}
