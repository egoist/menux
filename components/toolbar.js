'use strict'
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
    </div>
  `,
  methods: {
    goBack() {
      event.emit('view-go-back')
    },
    goForward() {
      event.emit('view-go-forward')
    }
  }
}
