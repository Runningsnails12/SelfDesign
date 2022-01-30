<template>
  <div style="position:relative; height:200px" :style="componentStyle">
    文本文本文本
  </div>
</template>

<script>
  export default {
    name: 'BaseText',
    props:{
      componentStyle:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>

</style>