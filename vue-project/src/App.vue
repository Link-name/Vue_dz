<template>
  <div id="app">
    
<!--     <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CalcComponet></CalcComponet> -->
  </div>
</template>

<script>

import CalcComponet from './components/CalcComponet'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    /* CalcComponet,
    HelloWorld */
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
