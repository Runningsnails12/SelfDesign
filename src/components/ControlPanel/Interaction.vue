<template>
	<div class="interaction">
		<CurEvent v-show="!isAdd.value"></CurEvent>
		<AddEvent v-show="isAdd.value" @triggleIsAdd="triggleIsAdd"></AddEvent>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import CurEvent from "./CurEvent.vue";
import AddEvent from "./AddEvent.vue";

export default {
	name: "interaction",
	components: {
		CurEvent,
		AddEvent,
	},
	setup() {
		let isAdd = ref(true);
		// console.log(this.isAdd.value);
		const triggleIsAdd = (val) => {
			console.log(1);
			console.log(this.isAdd.value);
			this.isAdd = ref(val);
		};
		return {
			isAdd,
			triggleIsAdd,
		};
	},
	// data() {
	// 	return {
	// 		isAdd: true,
	// 	};
	// },
	// methods: {
	// 	triggleIsAdd(val) {
	// 		// console.log(1);
	// 		this.isAdd = val;
	// 	},
	// },
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
.interaction {
	/* padding: 0.3125rem 0; */
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0;
}
.interaction .add .itemTitle,
.interaction .title {
	font-size: 0.9rem;
	margin-bottom: 0.9375rem;
}
.interaction ul {
	padding-inline-start: 0;
}
</style>
