<template>
	<div class="controlPanel">
		<div class="trigglePanel">
			<button
				:class="['attr', trigglePanel == 1 ? 'active' : '']"
				@click="toTrigglePanel(1)"
			>
				属性样式
			</button>
			<button
				:class="['intera', trigglePanel == 0 ? 'active' : '']"
				@click="toTrigglePanel(0)"
			>
				交 互
			</button>
		</div>
		<div class="corePanel"></div>
	</div>
</template>

<script>
import AttrStyle from "./AttrStyle.vue";
import Interaction from "./Interaction.vue";

export default {
	name: "ControlPanel",
	components: {
		AttrStyle,
		Interaction,
	},
	data() {
		return {
			trigglePanel: 1, // 1 属性样式 0 交互
		};
	},
	methods: {
		toTrigglePanel(val) {
			this.trigglePanel = val;
		},
	},
	mounted() {
		// console.log(1);
	},
};
</script>

<style >
.controlPanel {
	margin: 0;
	padding: 0;
	letter-spacing: 0.0625rem;
	font-family: "Microsoft YaHei-Bold";
}
li {
	list-style-type: none;
}
.controlPanel button {
	cursor: pointer;
	border: none;
	outline: none;
	text-align: center;
}
</style>

<style scoped>
.controlPanel {
	position: absolute;
	width: 20rem;
	height: 100%;
	/* top: 0; */
	bottom: 0;
	right: 0;
	/* background-color: blanchedalmond; */
	background-color: #fff;
}
.controlPanel .trigglePanel {
	height: 5.5rem;
	margin: 0 auto;
	position: relative;
}
.controlPanel .trigglePanel button {
	width: 5.5rem;
	height: 2rem;
	background-color: #fff;
	box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
	border-radius: 6px 0px 0px 6px;
	line-height: 2rem;
	transition: all 0.3s;
	font-size: 0.8rem;
	font-weight: 700;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 50%;
}
.controlPanel .trigglePanel button:nth-of-type(2) {
	left: 50%;
	border-radius: 0px 6px 6px 0px;
	box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
}
.controlPanel .trigglePanel button.active {
	background-color: #4a8af4;
	color: #fff;
}
.controlPanel .corePanel {
	height: calc(100% - 5rem);
	/* background-color: blueviolet; */
	/* background-color: #fff; */
	width: 11rem;
	margin: 0 auto;
}
</style>