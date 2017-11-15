import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './js/router.js'
Vue.use(VueRouter)
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
