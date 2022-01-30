<template>
  <div class="drawing-board" @click.stop="cancelComponentSelect">
    <component :is="root.tag" :component-id="0" />
    <div>添加进容器: <input v-model.number="toBeAddedContainerId" /><button @click="setComponentStyle">修改样式</button></div>
    <active-component-frame />
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import bus from 'vue3-eventbus'
import ActiveComponentFrame from './ActiveComponentFrame.vue'

export default {
  components: { ActiveComponentFrame },
  setup() {
    let newestId = 0
    const toBeAddedContainerId = ref(0)
    // 根节点
    const root = reactive({
      id: 0,
      tag: 'ContainerColumn',
      children: [],
    })
    const store = useStore()
    store.commit('addComponent', { key: 0, value: root })

    // 产生一个节点
    function generateNode(id, parentId, tag) {
      return {
        id,
        parentId,
        tag,
        style:{},
        children: [],
      }
    }
    // 监听添加节点 event-bus
    // 添加节点是在
    bus.on('addNode', (nodeType) => {
      newestId += 1
      const parentId = toBeAddedContainerId.value
        ? toBeAddedContainerId.value
        : 0
      const node = generateNode(newestId, parentId, nodeType)
      store.state.components.get(parentId).children.push(node)
      store.commit('addComponent', { key: newestId, value: node })
    })

    // 从 Map 中删除指定节点
    function deleteNodeFromMap(targetId) {
      // 删除 map 中节点，在 mutaion 里递归删除
      store.commit('deleteComponent', targetId)
    }
    // 从 JSON 中删除指定节点
    function deleteNodeFromJson(parentId, targetId) {
      const children = store.state.components.get(parentId).children
      let i = 0
      for (; i < children.length; i++) {
        if (children[i].id === targetId) {
          break
        }
      }
      children.splice(i, 1)
    }

    // 删除节点
    bus.on('deleteNode', () => {
      const activeComponentId = store.state.activeComponentId;
      const parentId = store.state.components.get(activeComponentId).parentId;
      store.commit('resetActiveComponent'); // 必须先置 null
      deleteNodeFromMap(activeComponentId);
      deleteNodeFromJson(parentId, activeComponentId);
    })

    // 移动节点

    // 将一个组件从一个容器中移动到另一个容器

    // root 移动到 target 容器

    // 从父容器移动到 root

    // 


    return {
      root,
      toBeAddedContainerId,
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