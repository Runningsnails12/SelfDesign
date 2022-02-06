<template>
  <div id="outsidebox">
    <div id="canvas-page">比例系数：{{ parseInt(scaleCoefficient) * 0.01 }}</div>
  </div>
</template>

<script>
import {watch, inject} from 'vue';

export default {
  name: 'CanvasPage',
  setup() {
    // 比例系数
    let scaleCoefficient = inject('scaleNum');
    const modifyCoefficient = () => {
      // let canvasPage = document.getElementById('canvas-page');
      let canvasPage = document.getElementById('outsidebox');
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
#outsidebox {
  padding: 50px 50px 0;
  transform-origin: 0 0;
  transform: scale(1);
}

#canvas-page {
  width: 786px;
  min-height: 432px;
  background: #ffffff;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.25098039215686274);
  transition: all ease-in-out 0.4s;
  border: 1px solid #aaaaaa;
}
</style>
