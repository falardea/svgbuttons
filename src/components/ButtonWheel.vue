<template>
  <div>
    <button>
      <router-link to="/AxialRatio/TestSetup">Back</router-link>
    </button>
  </div>
  <div>
    <svg-viewport
        :width="width" :height="height"
        :n_buttons="n">
    </svg-viewport>
  </div>
</template>

<script>
import SvgViewport from '@/components/SvgViewport.vue';

export default {
  name: 'ButtonWheel',
  created() {
    this.testState = this.getTestState()
    if (this.testState && this.testState.n_buttons){
      this.n = parseInt(this.testState.n_buttons)
      console.log("n: ", this.testState.n_buttons)
    } else {
      this.n = 4
      console.log("no buttons passed to page, setting to: ", this.n)
    }
  },
  components: {
    SvgViewport,
  },
  data: function(){
    return {
      n: this.n,
      width: 600,
      height: 600
    }
  },
  methods: {
    getTestState(){
      return JSON.parse(localStorage.getItem('testState'))
    }
  }
}
</script>
