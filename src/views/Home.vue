<template>
  <div class="home">
    <svg-viewport
        v-bind:width="width" v-bind:height="height"
        v-bind:n_buttons="n"></svg-viewport>
  </div>
</template>

<script>
// @ is an alias to /src
import SvgViewport from '@/components/SvgViewport.vue';

export default {
  name: 'Home',
  components: {
    SvgViewport,
  },
  data: function(){
    return {
      n: 16,
      width: 600,
      height: 600
    }
  }
}


</script>
