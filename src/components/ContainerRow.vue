<template>
  <div class="container">
    <!-- 动态组件 -->
    <component v-for="child in myChildren" :is="child.tag" :key="child.id" :my-children="child.children"/>
  </div>
</template>

<script>
export default {
  // tag
  name: 'ContainerRow',
  props: {
    style: {
      type: Object,
      // 调整容器大小，背景，边框，圆角
      default: {},
    },
    myChildren: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style  scoped>
.container {
  display: flex;
  border:1px solid #000;
  justify-content: flex-start;
  height: 200px;
}
</style>