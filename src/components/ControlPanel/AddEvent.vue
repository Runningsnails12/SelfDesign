<template>
	<div class="add">
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
		<button class="cancel" @click="cancel">取 消</button>
		<button class="comfirm" @click="comfirm">确 定</button>
	</div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
	name: "AddEvent",
	setup(props, { emit }) {
		let options = reactive({
			type: {
				name: "type",
				title: "触发方式", // 事件类型
				value: "mouse",
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
			action: {
				name: "action",
				title: "交互功能", // 事件动作
				value: "",
				data: [
					{
						value: "click",
						label: "单击",
					},
					{
						value: "dbClick",
						label: "双击",
					},
					{
						value: "key",
						label: "键盘",
					},
				],
			},
			handleType: {
				name: "handleType",
				title: "打开类型", // 如何处理事件
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
			argument: {
				name: "argument",
				title: "目标页面", // 传入事件处理器的参数
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
		});
		function comfirm() {
			// 添加事件

			this.triggleIsAdd("cur");
		}
		function cancel() {
			// 取消

			this.triggleIsAdd("cur");
		}
		const triggleIsAdd = (val) => {
			emit("triggleIsAdd", val);
		};
		return {
			options,
			comfirm,
			cancel,
			triggleIsAdd,
		};
	},
});
</script>

<style>
</style>


<style scoped>
.add {
	width: 11rem;
	margin: 0 auto;
	/* padding-right: 1.25rem; */
}
.add .item {
	margin-bottom: 1.5625rem;
}
.add .item:nth-last-of-type(1) {
	margin-bottom: 1.875rem;
}

.add > button {
	width: 5rem;
	height: 2rem;
	float: left;
	display: block;
	background-color: #f0f3f4;
	border: 1px #dddddd solid;
	font-size: 0.825rem;
	color: #000;
	border-radius: 0.375rem;
	outline: none;
	cursor: pointer;
}
.add > button.comfirm {
	background-color: #4a8af4;
	float: right;
	color: #fff;
	border: 1px #4a8af4 solid;
}
</style>