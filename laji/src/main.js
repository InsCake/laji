import Vue from 'vue'
import App from './App'
import router from './_router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
