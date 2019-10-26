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


export default {
  name: 'app',
  components: {
    NavBar
  }
}

</script>
