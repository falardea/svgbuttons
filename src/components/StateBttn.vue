<template>
	<g>
		<rect @click="toggleState"
		      :x=x :y=y
		      :width=width :height=height
		      :fill="color"
		      :stroke="stroke_color" :stroke-width="stroke"><a href="">theta</a>
		</rect>
		<text @click="toggleState"
		      :x=x_center :y=y_center
		      text-anchor="middle"
		      dominant-baseline="middle"
		      class="button-text">{{ theta }}
		</text>
	</g>
</template>

<script>
export default {
	name: 'StateButton',
	props: {
		x_center: Number,
		y_center: Number,
		button_width: Number,
		button_height: Number,
		theta: String,
		onClick: Function
	},
	data: function () {
		return {
			color: 'gray',
			width: this.button_width.toString(),
			height: this.button_height.toString(),
			stroke: 0,
			stroke_color: 'blue',
			x: (this.x_center - this.button_width / 2).toString(),
			y: (this.y_center - this.button_height / 2).toString()
		};
	},
	methods: {
		toggleState() {
			this.stroke === 0 ? this.stroke = 5 : this.stroke = 0;
			this.onClick(this.theta);
		}
	}
};
</script>

<style scoped>
.button-text {
	cursor: default;
}
</style>
