<template>
	<div id="c-panel">
		<div class="sidebar">
			<button @click="sideExtension">
				<img :src="'img/EditIcons/左右切换' + btnSrc + '.png'" />
			</button>
		</div>
		<div class="panel-content">
			<ul>
				<li
					@click="tabChange(index)"
					:class="checkedOne == index ? 'tabSelected' : ''"
					:key="item.id"
					v-for="(item, index) in panelSwitchOptions"
				>
					{{ item.tag }}
				</li>
			</ul>
			<div
				class="attributes-panel"
				:class="checkedOne == 0 ? 'panelSelected' : ''"
			>
				<AttrStyle></AttrStyle>
			</div>
			<div
				class="interact-panel"
				:class="checkedOne != 0 ? 'panelSelected' : ''"
			>
				<Interaction></Interaction>
			</div>
		</div>
		<div class="sidebar"></div>
	</div>
</template>

<script>
import { ref, reactive } from "vue";
import AttrStyle from "../ControlPanel/AttrStyle.vue";
import Interaction from "../ControlPanel/Interaction.vue";

export default {
	name: "ControlPanel",
	components: {
		AttrStyle,
		Interaction,
	},
	setup() {
		let btnSrc = ref("L");
		let checkedOne = ref(0);

		const sideExtension = () => {
			btnSrc.value = btnSrc.value == "L" ? "R" : "L";
			let cPanel = document.getElementById("c-panel");
			cPanel.style.left = cPanel.style.left != "0px" ? "0px" : "285px";
			cPanel.style.marginLeft =
				cPanel.style.marginLeft != "0px" ? "0px" : "-285px";
		};

		const panelSwitchOptions = reactive([
			{
				id: 1,
				tag: "属性样式",
			},
			{
				id: 2,
				tag: "交  互",
			},
		]);

		const tabChange = (index) => {
			checkedOne.value = index;
		};

		return {
			btnSrc,
			checkedOne,
			sideExtension,
			panelSwitchOptions,
			tabChange,
		};
	},
};
</script>
<style>
#c-panel button {
	transition: all 0.3s;
}
#c-panel button:hover {
	box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
}
</style>

<style scoped>
#c-panel {
	display: flex;
	margin-left: -285px;
	position: relative;
	width: 300px;
	height: 100%;
	left: 285px;
	background: #ffffff;
	box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
	border: 1px solid #eeeeee;
	box-sizing: border-box;
	transition: ease-in-out all 0.5s;
}

.sidebar {
	position: relative;
	width: 20px;
	height: 100%;
}

.sidebar > button {
	position: absolute;
	width: 25px;
	height: 100px;
	left: -25px;
	top: 45%;
	outline: none;
	background-color: #4a8af4;
	border-radius: 6px 0px 0px 6px;
	border: none;
	box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1607843137254902);
	cursor: pointer;
}

.sidebar > button img {
	width: 20px;
}
.panel-content {
	/* width: 100%; */
	overflow-y: scroll;
}
/* 选项啥啥的 */
.panel-content > ul {
	margin: 26px 30px 28px 30px;
	width: 11rem;
	height: 36px;
	list-style: none;
	border-radius: 6px;
	box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
	overflow: hidden;
}

.panel-content > ul li {
	float: left;
	width: 5.5rem;
	height: 36px;
	color: #333333;
	line-height: 36px;
	text-align: center;
	cursor: pointer;
	transition: all 0.3s;
}
.tabSelected {
	color: #ffffff !important;
	background: #4a8af4;
}

.panelSelected {
	display: block !important;
}

.attributes-panel,
.interact-panel {
	display: none;
	/* width: 11rem; */
	margin: 0 auto;
}
</style>