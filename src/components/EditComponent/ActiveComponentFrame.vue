<template>
  <div>
    <teleport :to="activeComponentId">
      <div
        v-show="isShow"
        class="frame"
        @mousedown="startDragComponent"
        @mousemove="dragComponent"
        @mouseup="putDownComponent"
        @click.stop
        draggable="false"
      >
        <button @click.stop="deleteNode">删除</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    let activeComponentId = computed(() =>
      store.state.activeComponentId !== -1
        ? '#component' + store.state.activeComponentId
        : 'body'
    )
    let isShow = computed(() => store.state.activeComponentId !== -1)

    return { activeComponentId, isShow }
  },
  methods: {
    deleteNode() {
      this.$store.commit('deleteComponent');
    },
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

<style scoped>
.frame {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>