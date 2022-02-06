<template>
  <div>
    <drawing-board/>
    <component-pane/>
  </div>
</template>

<script>
import ComponentPane from '../components/ComponentPane.vue'
import DrawingBoard from '../components/DrawingBoard.vue'


  export default {
  components: {DrawingBoard, ComponentPane}
  }
</script>

<style lang="scss" scoped>

</style>