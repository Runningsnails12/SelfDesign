<template>
	<div class="attrStyle">
		<div class="text">
			<h4 class="title">文本</h4>
			<div class="core">
				<div>
					<div class="fontFamily"></div>
					<div class="color"></div>
				</div>
				<div>
					<div class="fontWeight"></div>
					<div class="fontSize"></div>
				</div>
				<div>
					<span class="b"><i></i></span>
					<span class="i"><i></i></span>
					<span class="u"><i></i></span>
					<span class="s"><i></i></span>
					<span class="a"><i></i></span>
				</div>
				<div class="align">
					<span class="left"><i></i></span>
					<span class="center"><i></i></span>
					<span class="right"><i></i></span>
				</div>
			</div>
		</div>
		<div class="change">
			<h4 class="title">变换</h4>
			<div class="core">
				<div>形状</div>
				<div class="whole">
					<span class="topBottom"><i></i></span>
					<span class="leftRight"><i></i></span>

					<span class="scale"><i></i></span>
				</div>
			</div>
		</div>
		<div class="appearance">
			<h4 class="title">外观</h4>
			<div class="core">
				<div>
					<span class="square"><i></i></span>
					<span class="foursquare"><i></i></span>
				</div>
				<div></div>
				<div></div>
				<div class="alaph">
					<!-- <i></i> -->
				</div>
			</div>
		</div>
		<div class="special WholeLayout">
			<h4 class="title">
				<span>特有 | </span><span>HorizontalLayout VerticalLayout</span>
			</h4>
			<div class="core">
				<div class="vertical">
					<b>垂直方向</b>
					<span class="v-top"><i></i></span>
					<span class="v-center"><i></i></span>
					<span class="v-bottom"><i></i></span>
					<span class="v-justify"><i></i></span>
				</div>
				<div class="align">
					<b>水平方向</b>
					<span class="a-left"><i></i></span>
					<span class="a-center"><i></i></span>
					<span class="a-right"><i></i></span>
					<span class="a-justify"><i></i></span>
				</div>
			</div>
		</div>
		<div class="special childLayout">
			<h4 class="title">
				<span>特有 | </span
				><span>HorizontalLayout-childNode VerticalLayout-childNode</span>
			</h4>
			<div class="core">
				<div>
					<button class="tobefore">次序前移</button>
					<button class="toafter">次序后移</button>
				</div>
				<div>
					<button class="tofirst">置于首位</button>
					<button class="tolast">置于末位</button>
				</div>
			</div>
		</div>
		<div class="special childPosition">
			<h4 class="title">
				<span>特有 | </span><span>PositionLayout-childNode</span>
			</h4>
			<div class="core">
				<div><b>位置</b></div>
				<div>
					<button class="toup">上移一层</button>
					<button class="todown">下移一层</button>
				</div>
				<div>
					<button class="totopmost">置于顶层</button>
					<button class="tobottommost">置于底层</button>
				</div>
			</div>
		</div>
		<div class="special image">
			<h4 class="title"><span>特有 | </span><span>Image</span></h4>
			<div class="core">
				<div class="i-percentage">
					<b>比例</b>
					<span class="11"><b>1 : 1</b></span>
					<span class="43"><b>4 : 3</b></span>
					<span class="169"><b>16 : 9</b></span>
				</div>
				<div><b>图片地址[网络]</b></div>
				<div>
					<input class="i-url" type="text" />
				</div>
				<div>
					<button class="i-uploading">图片上传</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
	name: "AttrStyle",
	setup() {
		let text = reactive({});
	},
};
</script>

<style scoped>
.attrStyle {
	padding-bottom: 100px;
}
.attrStyle > div {
	width: 100%;
	background-color: #fafafb;
	border: 1px solid #e8e8e8;
	border-top: 0;
	border-right: 0;
	padding: 0.9375rem 0;
}
.attrStyle > div .title {
	width: 90%;
	margin: 0 auto;
	font-size: 0.875rem;
	position: relative;
}
.attrStyle > div .title > span {
	display: block;
	/* float: left; */
	width: 43px;
}
.attrStyle > div.special .title {
	margin-bottom: 1.25rem;
}

.attrStyle > div .title > span:nth-of-type(2) {
	width: calc(100% - 45px);
	font-size: 0.625rem;
	position: absolute;
	top: -5px;
	left: 43px;
	font-weight: 400;
}
.attrStyle > div.childPosition .title > span:nth-of-type(2),
.attrStyle > div.image .title > span:nth-of-type(2) {
	top: 3px;
}
.attrStyle > div .core {
	width: 12rem;
	margin: 0 auto;
	/* background-color: #fff; */
	font-size: 0.75rem;
}
.core div {
	display: flex;
	margin-top: 10px;
	align-items: center;
}
.core div > span {
	width: 14px;
	height: 15px;
	background: #ffffff;
	border: 1px solid #dddddd;
	border-right: 0;
	padding: 4px 9px;
	/* box-sizing: border-box; */
	cursor: pointer;
}
.core div > span:nth-of-type(1) {
	border-radius: 2px 0px 0px 2px;
}
.core div > span:nth-last-of-type(1) {
	border-radius: 0 2px 2px 0;
	border-right: 1px solid #dddddd;
}

.core div > span i {
	overflow: hidden;
	display: block;
	width: 100%;
	height: 100%;
	background: url("/img/EditIcons/text.png") no-repeat 0px 1px;
	background-size: 502%;
}
/* 字体形状 */
.text .core div > span:hover i,
.text .core div > span.active i {
	background-position-y: -13px;
}

.text .core div > span:nth-of-type(2) i {
	background-position-x: -13px;
}
.text .core div > span:nth-of-type(2):hover i,
.text .core div > span:nth-of-type(2).active i {
	background-position-y: -12px;
}
.text .core div > span:nth-of-type(3) i {
	background-position-x: -28px;
}
.text .core div > span:nth-of-type(3):hover i,
.text .core div > span:nth-of-type(3).active i {
	background-position-y: -13px;
}
.text .core div > span:nth-of-type(4) i {
	background-position-x: -41px;
}
.text .core div > span:nth-of-type(4):hover i,
.text .core div > span:nth-of-type(4).active i {
	background-position-y: -13px;
}
.text .core div > span:nth-of-type(5) i {
	background-position-x: -56px;
}
.text .core div > span:nth-of-type(5):hover i,
.text .core div > span:nth-of-type(5).active i {
	background-position-y: -14px;
}

/* 对齐 */
.text .core div.align > span i {
	background-position-y: -28px;
}
.text .core div.align > span:hover i,
.text .core div.align > span.active i {
	background-position-y: -41px;
}
.text .core div.align > span:nth-of-type(2) i {
	background-position-y: -27px;
}
.text .core div.align > span:nth-of-type(2):hover i,
.text .core div.align > span:nth-of-type(2).active i {
	background-position-y: -41px;
}
.text .core div.align > span:nth-of-type(3) i {
	background-position-y: -28px;
}
.text .core div.align > span:nth-of-type(3):hover i,
.text .core div.align > span:nth-of-type(3).active i {
	background-position-y: -42px;
}

/* 变换 */
.change .core div.whole > span i {
	background-image: url("/img/EditIcons/change.png");
	background-position-y: -55px;
}
.change .core div.whole > span:hover i,
.change .core div.whole > span.active i {
	background-position-y: -70px;
}
.change .core div.whole > span:nth-of-type(2) i {
	background-position-x: -14px;
}
.change .core div.whole > span:nth-of-type(2) {
	border-right: 1px solid #e8e8e8;
}
/* 1:1 */
.change .core div.whole > span:nth-last-of-type(1) {
	border-radius: 2px;
	margin-left: 0.9375rem;
}
.change .core div.whole > span:nth-last-of-type(1) i {
	background-position: -61px -31px;
	background-size: 540%;
}
.change .core div.whole > span:nth-last-of-type(1):hover i,
.change .core div.whole > span:nth-last-of-type(1).active i {
	background-position: -61px -45px;
}

/* 外观 */
.appearance .core div > span i {
	width: 15px;
	background-image: url("/img/EditIcons/appearance.png");
	background-position: 0 0;
	background-size: 281%;
}
.appearance .core div > span:hover i,
.appearance .core div > span.active i {
	background-position-y: -14px;
}
.appearance .core div > span:nth-of-type(2) i {
	background-position-x: -14px;
}

/* 特有1 WholeLayout */
.core div > b {
	font-weight: normal;
	margin-right: 10px;
}
.WholeLayout .core div > span i {
	background-image: url("/img/EditIcons/change.png");
	background-size: 700%;
	background-position: -2px -2px;
}
.WholeLayout .core div > span:hover i,
.WholeLayout .core div > span.active i {
	background-position-y: -21px;
}
.WholeLayout .core div:nth-of-type(1) > span i {
	background-position-y: -41px;
}
.WholeLayout .core div:nth-of-type(1) > span:hover i,
.WholeLayout .core div:nth-of-type(1) > span.active i {
	background-position-y: -61px;
}
.WholeLayout .core div > span:nth-of-type(2) i {
	background-position-x: -22px;
}
.WholeLayout .core div > span:nth-of-type(3) i {
	background-position-x: -42px;
}
.WholeLayout .core div > span:nth-of-type(4) i {
	background-position: -52px -1px;
	background-size: 600%;
}
.WholeLayout .core div > span:nth-of-type(4):hover i,
.WholeLayout .core div > span:nth-of-type(4).active i {
	background-position-y: -17px;
}
.WholeLayout .core div:nth-of-type(2) > span:nth-of-type(4) i {
	background-position: -52px -34px;
	background-size: 600%;
}

.WholeLayout .core div:nth-of-type(2) > span:nth-of-type(4):hover i,
.WholeLayout .core div:nth-of-type(2) > span:nth-of-type(4).active i {
	background-position: -52px -51px;
	background-size: 600%;
}

/* 特有2 childLayout 4个btn */
.core div button {
	padding: 0.3125rem 0.625rem;
	background-color: #4a8af4;
	outline: none;
	border: none;
	border-radius: 2px;
	font-size: 0.8125rem;
	color: #fff;
	margin-right: 0.625rem;
}
.core div button:nth-last-of-type(1) {
	margin-right: 0;
}

/* 特有4 image */
.image .core div span {
	width: auto;
	height: auto;
	padding: 0.3125rem 0.1875rem;
	border: 1px solid #dddddd;
	border-radius: 2px;
	margin-right: 0.625rem;
}
.image .core div span b {
	font-weight: normal;
	font-size: 0.75rem;
}
.image .core div:nth-last-of-type(1) {
	text-align: center;
}
.image .core div input.i-url {
	outline: none;
	border: 1px solid #dddddd;
	background-color: #fff;
	width: 100%;
	height: 1.5625rem;
	padding: 0 0.625rem;
}
.image .core div button.i-uploading {
	padding: 0.3125rem 1.25rem;
	margin: 0 auto;
}
</style>