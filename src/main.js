import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'

import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'

require('dotenv').config()

Vue.config.productionTip = false

router.afterEach(() => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
