<template>
    <div id="app">
      <NavBar />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
</template>


<script>

import NavBar from './components/NavBar.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Fizz from './components/Fizz.vue'
import Zoo from './components/Zoo.vue'


const routes = [
  { path: '/foo', name: 'Foo', component: Foo },
  { path: '/bar', name: 'Bar', component: Bar },
  { path: '/fizz', name: 'Fizz', component: Fizz },
  { path: '/zoo', name: 'Zoo', component: Zoo },
]

//$router.addRoutes(routes)
//window.Vue.addRoutes(routes)

export default {
  name: 'app',
  components: {
    NavBar
  },
  created() {
    this.$router.addRoutes(routes)
  }
}

</script>
