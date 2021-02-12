import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes.js'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
