import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes.js'
import VueRouter from 'vue-router'
import AOS from 'aos'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuesax, {
  colors: {
    primary:'#01949A',
    success:'rgb(23, 201, 100)',
      warn: '#DB1F48',
     danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
       dark:'rgb(36, 33, 69)'
  }
})
Vue.config.productionTip = false;
AOS.init();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
