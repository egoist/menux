const bar = require('./modules/bar')

const store = new Vuex.Store({
  modules: {
    bar
  }
})
window.store = store
module.exports = store