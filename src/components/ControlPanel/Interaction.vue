<template>
	<div class="interaction">
		<ul>
			<li v-for="item in options" class="item" :key="item.name">
				<h4 class="itemTitle">{{ item.title }}</h4>
				<el-select v-model="item.value" placeholder="请选择">
					<el-option
						class="select"
						v-for="data in item.data"
						:key="data.value"
						:label="data.label"
						:value="data.value"
					>
					</el-option>
				</el-select>
			</li>
			<!-- <li class="triggleWay">
				<h4 class="itemTitle">触发方式</h4>
				<el-select v-model="value" placeholder="请选择">
					<el-option
						class="select"
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					>
					</el-option>
				</el-select>
			</li>
			<li class="item interactionFunction"></li>
			<li class="item targetType"></li>
			<li class="item targetPage"></li> -->
		</ul>
		<button class="cancel">取 消</button>
		<button class="comfirm">确 定</button>
	</div>
</template>

<script>
export default {
	name: "interaction",
	data() {
		return {
			options: [
				{
					name: "triggleWay",
					title: "触发方式",
					value: "",
					data: [
						{
							value: "mouse",
							label: "鼠标",
						},
						{
							value: "keydow",
							label: "键盘按下",
						},
						{
							value: "keyup",
							label: "键盘弹起",
						},
					],
				},
				{
					name: "interactionFunction",
					title: "交互功能",
					value: "",
					data: [
						{
							value: "jump",
							label: "页面跳转",
						},
						{
							value: "key",
							label: "键盘",
						},
					],
				},
				{
					name: "targetType",
					title: "打开类型",
					value: "",
					data: [
						{
							value: "mouse",
							label: "新窗口",
						},
						{
							value: "key",
							label: "键盘",
						},
					],
				},
				{
					name: "targetPage",
					title: "目标页面",
					value: "",
					data: [
						{
							value: "mouse",
							label: "首页",
						},
						{
							value: "key",
							label: "键盘",
						},
					],
				},
			],
		};
	},
};
</script>

<style>
li {
	list-style-type: none;
}
.interaction .el-input__inner {
	height: 1.5rem;
	font-size: 0.8125rem;
	border-color: #cacaca;
}
.interaction .el-scrollbar .el-select-dropdown__list .el-select-dropdown__item {
	padding: 0 1.25rem;
	box-sizing: border-box;
	height: 1.5625rem;
}
</style>
<style scoped>
.interaction {
	padding: 0.3125rem 0;
	margin: 0;
	padding: 0;
}
.interaction ul {
	padding-inline-start: 0;
}
.interaction .item {
	margin-bottom: 1.875rem;
}
.interaction .item:nth-last-of-type(1) {
	margin-bottom: 2.5rem;
}
.interaction .itemTitle {
	font-size: 0.9rem;
	margin-bottom: 0.9375rem;
}
.interaction > button {
	width: 5rem;
	height: 2rem;
	float: left;
	display: block;
	background-color: #f0f3f4;
	border: 1px #dddddd solid;
	font-size: 0.825rem;
	color: #000;
	border-radius: 0.375rem;
}
.interaction > button.comfirm {
	background-color: #4a8af4;
	float: right;
	color: #fff;
	border: px #4a8af4 solid;
}
</style>