import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false


const router = new VueRouter()

const store = new Vuex.Store({
  state: {
    volume: 5
  },
  mutations: {
    updateVolume(state, nv) {
      state.volume = nv
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
