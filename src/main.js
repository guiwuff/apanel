import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AdminPanel from './plugins/adminPanel'

Vue.config.productionTip = false
Vue.use(AdminPanel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
