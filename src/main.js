import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: new VueRouter(),
  render: h => h(App)
}).$mount('#app')
