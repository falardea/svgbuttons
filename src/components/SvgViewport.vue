<template>
  <svg :width=width :height=height class="viewport">
    <svg-button v-for="i in n_buttons" :key="i"
        v-bind:x_center="x_values[i-1]"
        v-bind:y_center="y_values[i-1]"
    v-bind:button_width="b_width"
    v-bind:button_height="b_height"></svg-button>
  </svg>
</template>

<script>
import SvgButton from "./SvgButton";

const buttonWidth = 60
const buttonHeight = 30
export default {
  name: "SvgViewport",
  props: {
    n_buttons: Number,
    width: Number,
    height: Number
  },
  components: {
    SvgButton
  },
  data: function(){
    return {
      x_value: 10,
      y_value: 10,
      x_values: [this.width/2, this.width-buttonWidth, this.width/2, this.width-(this.width-buttonWidth)],
      y_values: [this.height - (this.height-buttonHeight), this.height/2, this.height - buttonHeight, this.height/2],
      b_width: buttonWidth,
      b_height: buttonHeight
    }
  },
  created: function() {
    // If the number of buttons is not even, we'll have oddly shaped button wheels, but that's a problem for
    // another day
    this.base_angle = 360/this.n_buttons
    console.log("With " + this.n_buttons + " buttons, the circle is divided into " + this.base_angle + " degrees")
  }
}
</script>

<style scoped>
.viewport {
  background-color: red;
  stroke-width: 0px
}
</style>
