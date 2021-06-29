<template>
  <svg :width=width :height=height class="viewport">
    <state-button v-for="i in n_buttons" :key="i"
                  :x_center="points[i-1].x"
                  :y_center="points[i-1].y"
                  :button_width="b_width"
                  :button_height="b_height"
                  :theta="theta[i-1]"></state-button>
  </svg>
</template>

<script>
import StateButton from "./StateBttn";

const buttonWidth = 60
const buttonHeight = 30
const basemarg = 20
const margx = 4 * basemarg
const margy = 4 * basemarg

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  x
  y
}

export default {
  name: "SvgViewport",
  props: {
    n_buttons: Number,
    width: Number,
    height: Number
  },
  components: {
    StateButton
  },
  data: function () {
    const hx = this.width / 2 - margx;
    const hy = this.height / 2 - margy;
    this.base_angle = 360 / this.n_buttons
    this.theta = []
    this.midpoints = []
    for (let i of Array(this.n_buttons).keys()) {
      this.theta[i] = i * this.base_angle;
      this.midpoints[i] = new Point((this.width / 2 + hx * Math.cos((90 - this.theta[i]) * Math.PI / 180)),
          (this.height / 2 - hy * Math.cos(this.theta[i] * Math.PI / 180)))
      console.log("Theta of: " + this.theta[i] + "deg = " + this.midpoints[i].x + ", " + this.midpoints[i].y)
    }

    return {
      x_value: 10,
      y_value: 10,
      x_values: [this.width / 2, this.width - buttonWidth, this.width / 2, this.width - (this.width - buttonWidth)],
      y_values: [this.height - (this.height - buttonHeight), this.height / 2, this.height - buttonHeight, this.height / 2],
      b_width: buttonWidth,
      b_height: buttonHeight,
      points: this.midpoints,
      theta: this.theta
    }
  },
  created: function () {
    // If the number of buttons is not even, we'll have oddly shaped button wheels, but that's a problem for
    // another day
    // const hx = this.width/2 - margx;
    // const hy = this.height/2 - margy;
    // this.base_angle = 360/this.n_buttons
    // this.theta = []
    // this.midpoints = []
    // for (let i of Array(this.n_buttons).keys()) {
    //   this.theta[i] = i * this.base_angle;
    //   this.midpoints[i] = new Point((this.width/2 - hx*Math.sin(this.theta[i] * Math.PI / 180)),
    //           (this.height/2 - hy*Math.cos(this.theta[i] * Math.PI / 180)))
    //   console.log("Theta of: " + this.theta[i] + "deg = " + this.midpoints[i].x + ", " + this.midpoints[i].y)
    // }
  }
}
</script>

<style scoped>
.viewport {
  background-color: red;
  stroke-width: 0px
}
</style>
