import Vue from 'vue'
import { Button, Select } from 'element-ui'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)

new Vue({
  // router: router,
  router,
  render: h => h(App)
}).$mount('#app')
