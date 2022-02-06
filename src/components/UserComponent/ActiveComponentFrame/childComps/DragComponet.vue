<template>
  <div class="moveIcon"  @mousedown.stop="startDragComponent">
    
  </div>
</template>

<script>
import throttle from '../../../../utils/throttle'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    function startDragComponent(e) {
      console.log('开始')
      const clientX = e.clientX
      const clientY = e.clientY
      let isMouseDown = true;
      const style = {
        'z-index': 100,
      }
      store.commit('setActiveComponentStyle', style)
      document.onmousemove = throttle( function (e) {
        if (!isMouseDown) {
          return false
        }
        const changeX = e.clientX - clientX
        const changeY = e.clientY - clientY

        const style = {
          transform: `translate(${changeX}px, ${changeY}px)`,
        }

        console.log('移动')
        store.commit('setActiveComponentStyle', style)
      })

      document.onmouseup = function () {
        // 放下后，让组件添加到当前鼠标执行容器
        if (!isMouseDown) {
          return false
        }
        isMouseDown = false
        const style = {
          transform: `translate(0,0)`,
          'z-index': 0
        }
        store.commit('setActiveComponentStyle', style)
        document.onmousemove = null
        console.log('放下')
      }
    }

    return {
      startDragComponent,
    }
  }
}
</script>

<style  scoped>
.moveIcon {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: brown;
}
.moveIcon:hover {
  cursor: move;
}
</style>