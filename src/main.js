import Vue from 'vue'
import App from './App.vue'
require("dotenv").config()
import './registerServiceWorker'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
