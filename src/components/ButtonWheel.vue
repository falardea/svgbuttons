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
  props: {
    testState: Object
  },
  created() {
    console.log("n: ", this.testState.n_buttons)
    this.n = parseInt(this.testState.n_buttons)
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
    backButton (){
      this.$emit("page-change", {
        source: "ButtonWheel"
      })
    }
  }
}
</script>
