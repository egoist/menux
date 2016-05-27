'use strict'
const toolbar = require('./toolbar')

function ensureURL(url) {
  if (/^https?:\/\//.test(url)) {
    return url
  }
  return 'http://' + url
}

module.exports = {
  template: `
    <header class="bar toolbar toolbar-header">
      <div class="topbar">
        <input
          class="form-control"
          @keydown.enter="updateURL"
          @focus="select"
          id="search"
          type="text"
          placeholder="Enter URL here..." />
        <button
          class="btn btn-mini btn-default"
          @click="toggleToolbar">
          <span class="icon icon-menu"></span>
        </button>
      </div>
      <toolbar v-show="showToolbar"></toolbar>
    </header>`,
  vuex: {
    getters: {
      url: state => state.bar.url,
      showToolbar: state => state.bar.showToolbar
    },
    actions: {
      toggleToolbar({dispatch}) {
        dispatch('TOGGLE_TOOLBAR')
      }
    }
  },
  methods: {
    updateURL(e) {
      this.$store.dispatch('UPDATE_URL', ensureURL(e.target.value))
    },
    select(e) {
      e.target.select()
    }
  },
  components: {
    toolbar
  }
}
