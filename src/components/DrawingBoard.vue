<template>
  <div  class="drawing-board" @click.stop="cancelComponentSelect">
    <component :is="root.tag" :component-id="0" />
    <active-component-frame />
  </div>
</template>

<script>

import { useStore } from 'vuex'
import ActiveComponentFrame from './EditComponent/ActiveComponentFrame/ActiveComponentFrame.vue'
export default {
  components: { ActiveComponentFrame },
  setup() {
   
    const store = useStore()
    store.commit('editPage/addComponent', {componentType: 'ContainerColumn', parentId: -1});
    const root = store.state.editPage.components.get(0);
    return {
      root
    }
  },
  methods:{
    // 取消组件的选中
    cancelComponentSelect(){
      this.$store.commit('editPage/resetActiveComponent');
    }
  }
}
</script>

<style  scoped>
.drawing-board{
  width: 96vw;
  height: 80vh;
  margin:auto;
  background-color: aliceblue;
}
</style>