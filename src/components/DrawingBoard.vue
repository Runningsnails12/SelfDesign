<template>
  <div class="drawing-board" @click.stop="cancelComponentSelect">
    <component :is="root.tag" :component-id="0" />
    <div><button @click="setComponentStyle">修改样式</button></div>
    <active-component-frame />
  </div>
</template>

<script>

import { useStore } from 'vuex'
import ActiveComponentFrame from './EditComponent/ActiveComponentFrame.vue'
export default {
  components: { ActiveComponentFrame },
  setup() {
   
    const store = useStore()
    store.commit('addComponent', {componentType: 'ContainerColumn', parentId: -1});
    const root = store.state.components.get(0);
    return {
      root
    }
  },
  methods:{
    // 取消组件的选中
    cancelComponentSelect(){
      this.$store.commit('resetActiveComponent');
    },
    // 设置激活组件样式
    setComponentStyle(){
      this.$store.commit('setActiveComponentStyle',{position:'fixed',left:0, top:0})
    }
  }
}
</script>

<style  scoped>
.drawing-board{
  width: 96vw;
  height: 80vh;
  background-color: aliceblue;
}
</style>