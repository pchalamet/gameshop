import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


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

export default store
