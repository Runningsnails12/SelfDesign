<template>
  <div>
    <teleport :to="activeComponentId">
      <div
        v-show="isShow"
        class="frame"
        @click.stop
        @mousedown.stop="startDragComponent"
      >
        <delete-component/>
      </div>
    </teleport>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import DeleteComponent from './childComps/DeleteComponent.vue'
import throttle from '../../../utils/throttle'
import getActiveContainer from './childComps/getActiveContainer'

export default {
  setup() {
    const store = useStore()
    let activeComponentId = computed(() =>
      store.state.editPage.activeComponentId !== -1
        ? '#component' + store.state.editPage.activeComponentId
        : 'body'
    )
    let isShow = computed(() => store.state.editPage.activeComponentId !== -1);

  
    function startDragComponent(e) {
      console.log('开始')
      console.log(e.target);
      const clientX = e.clientX
      const clientY = e.clientY
      let isMouseDown = true;
      let activeContainerId = -1;

      const style = {
        'z-index': 100,
        'pointer-events':'none'
      }
      store.commit('editPage/setActiveComponentTempStyle', style)
      document.onmousemove = throttle( function (e) {
        if (!isMouseDown) {
          return false
        }
        const changeX = e.clientX - clientX
        const changeY = e.clientY - clientY

        const style = {
          transform: `translate(${changeX}px, ${changeY}px)`,
        }

        const newActiveContainerId = getActiveContainer(e.target);
        // 变化了才提交
        if(newActiveContainerId !== activeContainerId){
          activeContainerId = newActiveContainerId;
          store.commit('editPage/setActiveContainer', newActiveContainerId);
        }

        store.commit('editPage/setActiveComponentTempStyle', style)
      })

      document.onmouseup = function () {
        // 放下后，让组件添加到当前鼠标执行容器
        if (!isMouseDown) {
          return false
        }
        isMouseDown = false
      
        store.commit('editPage/moveComponent')
        store.commit('editPage/clearActiveComponentTempStyle')
        store.commit('editPage/resetActiveContainer')
        store.commit('editPage/resetActiveComponent')
      
        document.onmousemove = null
        console.log('放下')
      }
    }

    return { activeComponentId, isShow,startDragComponent }
  },
  components:{ DeleteComponent},
 
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
.frame:hover{
  cursor: move;
}
</style>