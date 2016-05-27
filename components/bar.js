function ensureURL(url) {
  if (/^https?:\/\//.test(url)) {
    return url
  }
  return 'http://' + url
}

module.exports = {
  template: `
    <header class="bar">
      <input
        @keydown.enter="updateURL"
        id="search"
        type="text"
        placeholder="Enter URL here...">
    </header>`,
  vuex: {
    getters: {
      url: state => state.bar.url
    }
  },
  methods: {
    updateURL(e) {
      this.$store.dispatch('UPDATE_URL', ensureURL(e.target.value))
    }
  }
}