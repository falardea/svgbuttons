<template>
	<div>
		<svg :width=width :height=height class="viewport">
			<state-button v-for="i in n_buttons" :key="i"
			              :x_center="points[i-1].x"
			              :y_center="points[i-1].y"
			              :button_width="b_width"
			              :button_height="b_height"
			              :theta="theta[i-1]"
			              :on-click="ChildClick"></state-button>
		</svg>
		<div v-if="responseRx">Datapoint {{ thetaRx }} Complete</div>
	</div>
</template>

<script>
import StateButton from './StateBttn';

const buttonWidth = 60;
const buttonHeight = 30;
const basemarg = 20;
const margx = 4 * basemarg;
const margy = 4 * basemarg;

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	x;
	y;
}

export default {
	name: 'SvgViewport',
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
		this.base_angle = 360 / this.n_buttons;
		this.theta = [];
		this.midpoints = [];
		for (let i of Array(this.n_buttons).keys()) {
			this.theta[i] = (i * this.base_angle).toString();
			this.midpoints[i] = new Point((this.width / 2 + hx * Math.cos((90 - this.theta[i]) * Math.PI / 180)),
				(this.height / 2 - hy * Math.cos(this.theta[i] * Math.PI / 180)));
		}

		return {
			x_value: 10,
			y_value: 10,
			b_width: buttonWidth,
			b_height: buttonHeight,
			points: this.midpoints,
			theta: this.theta,
			endpointResponse: '',
			thetaRx: '',
			responseRx: false
		};
	},
	methods: {
		ChildClick(theta) {
			console.log('button ', theta, ' pressed');
			this.responseRx = false;

			fetch(
				`http://127.0.0.1:5000/angle/${theta}`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ theta: theta })
				})
				.then(response => response.json())
				.then(data => {
					console.log('test point ', data.theta, ' reports completed from server');
					this.responseRx = true;
					this.thetaRx = data.theta;
					/////////////////////////////////////////////////////
					localStorage.removeItem('testState');
					/////////////////////////////////////////////////////
				})
				.catch(error => (console.error('error: ' + error)));
		}
	}
};
</script>

<style scoped>
.viewport {
	background-color: lightgrey;
	border: 5px solid black;
}
</style>
