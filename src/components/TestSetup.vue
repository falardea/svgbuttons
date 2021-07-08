<template>
  <div>
    <select name="wheel-size" id="n-button-wheels"
            @change="selection"
            v-model="n_buttons">
      <option disabled value="">--Please choose an option--</option>
      <option value="4">4</option>
      <option value="8">8</option>
      <option value="12">12</option>
      <option value="16">16</option>
      <option value="20">20</option>
      <option value="3">3</option>
    </select>
    <button name="next-page"><router-link to="/AxialRatio/ButtonWheel">Next</router-link></button>
  </div>
</template>

<script>

export default {
  name: "TestSetup",
  props: {
    testState: Object
  },
  data: function () {
    return {
      n_buttons: '',
    }
  },
  methods: {
    selection() {
      this.$emit("page-change", {
        source: "TestSetup",
        config: {n_buttons: this.n_buttons}
        })
    },
    nextPage(){
      console.log("Next Clicked")
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
