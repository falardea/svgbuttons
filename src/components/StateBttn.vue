<template>
  <rect @click="toggleState"
        :x=x :y=y
        :width=width :height=height
        :fill="color"
        :stroke="stroke_color" :stroke-width="stroke"><a href="">theta</a></rect>
</template>

<script>
export default {
  name: "StateButton",
  props: {
    x_center: Number,
    y_center: Number,
    button_width: Number,
    button_height: Number,
    theta: String
  },
  data: function () {
    return {
      color: 'gray',
      width: this.button_width.toString(),
      height: this.button_height.toString(),
      stroke: 0,
      stroke_color: 'blue',
      x: (this.x_center - this.button_width/2).toString(),
      y: (this.y_center - this.button_height/2).toString()
    }
  },
  methods: {
    toggleState() {
      console.log("clickity clackety")
      this.stroke == 0 ? this.stroke = 5 : this.stroke = 0
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theta: this.theta })
      };
      var url = "http://localhost:12345/" + this.theta
      console.log(url)
      fetch(url, requestOptions)
          .then(response => { console.log(response.json()); return response.json()})
          .then(data => (this.postId = data.id));
    }
  }
}
</script>

<style scoped>

</style>
