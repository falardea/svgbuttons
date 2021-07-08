<template>
  <div>
    <select name="wheel-size" id="n-button-wheels"
            v-model="n_buttons">
      <option disabled value="">--Please choose an option--</option>
      <option value="4">4</option>
      <option value="8">8</option>
      <option value="12">12</option>
      <option value="16">16</option>
      <option value="20">20</option>
      <option value="3">3</option>
    </select>
    <button name="next-page" @click="nextPage">Next</button>
  </div>
</template>

<script>

import router from "../router";

export default {
  name: "TestSetup",
  data: function () {
    return {
      n_buttons: '',
    }
  },
  methods: {
    nextPage(){
      console.log("Next Clicked")
      this.updateState()
      router.push("/AxialRatio/ButtonWheel")
    },
    updateState(){
      this.testState = JSON.parse(localStorage.getItem('testState'))
      this.testState.n_buttons = this.n_buttons
      localStorage.setItem('testState', JSON.stringify(this.testState))
    }
  }
}
</script>

<style scoped>
.viewport {
  background-color: red;
  stroke-width: 0px
}
</style>
