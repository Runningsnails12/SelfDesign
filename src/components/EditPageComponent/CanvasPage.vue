<template>
  <div id="canvas-page">
    中间画布
  </div>
</template>

<script>
export default {
  name: 'CanvasPage'
};

</script>

<style scoped>
/* 画布比值为：0.5625，1280*960 */
  #canvas-page {
    margin-top: 45px;
    width: 786px;
    height: 432px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.25098039215686274);
    border: 1px solid #aaaaaa;
  }
</style>