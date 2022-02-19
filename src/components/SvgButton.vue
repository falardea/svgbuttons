<template>
	<rect @click="toggleStroke"
	      :x=x :y=y
	      :width=width :height=height
	      :fill="color"
	      stroke="blue" :stroke-width="stroke"></rect>
</template>

<script>
export default {
	name: 'SvgButton',
	props: {
		x_center: Number,
		y_center: Number,
		button_width: Number,
		button_height: Number
	},
	data: function () {
		return {
			color: 'gray',
			width: this.button_width.toString(),
			height: this.button_height.toString(),
			stroke: 0,
			x: (this.x_center - this.button_width / 2).toString(),
			y: (this.y_center - this.button_height / 2).toString()
		};
	},
	methods: {
		toggleStroke() {
			console.log('clickity clackety');
			this.stroke == 0 ? this.stroke = 5 : this.stroke = 0;
		}
	}
};
</script>

<style scoped>

</style>
