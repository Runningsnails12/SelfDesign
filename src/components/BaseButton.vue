<template>
  <button style="position:relative" :style="componentStyle">按钮</button>
</template>

<script>

export default {
  name: 'BaseButton',
  props:{
    componentStyle:{
      type:Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>