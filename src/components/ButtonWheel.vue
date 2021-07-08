<template>
  <div>
    <button @click="backButton">Back</button>
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
import router from "../router";
import VIEW_NAMES from "../ViewNames";

export default {
  name: VIEW_NAMES.TEST_EXECUTION_NAME,
  created() {
    try{
      this.testState = this.getTestState()
      if (this.testState.n_buttons){
        this.n = parseInt(this.testState.n_buttons)
      } else {
        this.n = 4
      }

    } catch (err) {
      this.n = 4
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
    },
    backButton() {
      router.push(VIEW_NAMES.toPath(VIEW_NAMES.TEST_CONFIG_NAME))
    }
  }
}
</script>
