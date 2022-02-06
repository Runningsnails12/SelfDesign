<template>
  <div>
    <drawing-board/>
    <component-pane/>
    <control-pane/>
  </div>
</template>

<script>
import ComponentPane from '../components/ComponentPane.vue'
import DrawingBoard from '../components/DrawingBoard.vue'
import ControlPane from '../components/ComponentPane.vue'

  export default {
  components: {DrawingBoard, ComponentPane, ControlPane}
  }
</script>

<style lang="scss" scoped>

</style>