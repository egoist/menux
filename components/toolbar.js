'use strict'
const {ipcRenderer} = require('electron')
const event = require('../utils/event')

module.exports = {
 template: `
    <div class="header-toolbar toolbar-actions">
      <div class="btn-group">
        <button class="btn btn-default" @click="goBack">
          <span class="icon icon-left"></span>
        </button>
        <button class="btn btn-default" @click="goForward">
          <span class="icon icon-right"></span>
        </button>
      </div>

      <button class="btn btn-default" @click="refreshOrStop">
        <span class="icon icon-cancel" v-if="loading"></span>
        <span class="icon icon-cw" v-else></span>
      </button>

      <button class="btn btn-default" @click="openSettings">
        <span class="icon icon-cog"></span>
      </button>

      <button class="btn btn-default pull-right btn-list">
        <span class="icon icon-down-open"></span>
      </button>
    </div>
  `,
  vuex: {
    getters: {
      loading: state => state.bar.loading
    }
  },
  methods: {
    goBack() {
      event.emit('view-go-back')
    },
    goForward() {
      event.emit('view-go-forward')
    },
    refreshOrStop() {
      if (this.loading) event.emit('view-stop')
      else event.emit('view-reload')
    },
    openSettings() {
      ipcRenderer.send('open-settings')
    }
  }
}
