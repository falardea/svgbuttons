<template>
  <svg-viewport
      v-bind:width="width" v-bind:height="height"
      v-bind:n_buttons="n"></svg-viewport>
</template>

<script>
import SvgViewport from "./components/SvgViewport";


export default {
  name: 'App',
  components: {
    SvgViewport
  },
  data: function(){
    return {
      n: 12,
      width: 600,
      height: 600
    }
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
