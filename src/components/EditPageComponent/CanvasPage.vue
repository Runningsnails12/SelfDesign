<template>
  <div id="canvas-page">
    比例系数：{{ parseInt(scaleCoefficient) * 0.01 }}
  </div>
</template>

<script>
import { watch, inject } from "vue";

export default {
  name: "CanvasPage",
  setup() {
    // 比例系数
    let scaleCoefficient = inject("scaleNum");
    const modifyCoefficient = () => {
      let canvasPage = document.getElementById("canvas-page");
      canvasPage.style.transform = `scale(${parseInt(scaleCoefficient.value) * 0.01})`;
    };

    // 监听修改
    watch(scaleCoefficient, () => {
      modifyCoefficient();
    });

    return {
      scaleCoefficient,
      modifyCoefficient,
    };
  },
};
</script>

<style scoped>
/* 画布比值为：0.5625，1280*960 */
#canvas-page {
  /* margin: 45px; */
  width: 786px;
  min-height: 432px;
  /* height: 600px; */
  background: #ffffff;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.25098039215686274);
  transform-origin: 0% 0%;
  transform: scale(1.0);
  transition: all ease-in-out .4s;
  border: 1px solid #aaaaaa;
}

</style>
