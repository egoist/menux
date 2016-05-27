'use strict'

const state = {
  url: 'https://duckduckgo.com',
  fromBar: true
}

const mutations = {
  UPDATE_URL(state, url) {
    console.log(url)
    state.url = url
  }
}

module.exports = {
  state,
  mutations
}