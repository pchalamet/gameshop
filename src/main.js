import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/foo', name: 'Foo', component: Foo },
  { path: '/bar', name: 'Bar', component: Bar }
]

const router = new VueRouter({
  routes
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
