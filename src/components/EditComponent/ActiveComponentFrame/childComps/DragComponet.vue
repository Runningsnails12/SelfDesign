<template>
  <div></div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  methods: {
    startDragComponent(e) {
      // 第一次执行让组件从原有容器中移动到root 中，并且 position 属性这是为 absolute，left 和 right 值随着光标移动
      //修改 target 的 style 的 position:fix, 并且 left 和 top 的值为 srcree - offset
      console.log('开始')
      console.log(e)
      const style = {
        position: 'fixed',
        left: e.clientX - e.offsetX + 'px',
        top: e.screenY - e.offsetY + 'px',
      }
      console.log(style)
      // this.$store.commit('setActiveComponentStyle', style)
    },
    dragComponent(e) {
      // 动态修改 left 和 top 的值
      const style = {
        left: e.clientX - e.offsetX + 'px',
        top: e.screenY - e.offsetY + 'px',
      }
      console.log(style)
      // this.$store.commit('setActiveComponentStyle', style)
      console.log(e)
    },
    putDownComponent() {
      // 放下后，让组件添加到当前鼠标执行容器
      const style = {
        position: 'relative',
        left: 0,
        top: 0,
      }
      // this.$store.commit('setActiveComponentStyle', style)
      console.log('放下')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>