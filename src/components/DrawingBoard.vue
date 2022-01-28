<template>
  <div>
    <component :is="root.tag" :parent-id="0" />
    <div>添加进容器: <input v-model.number="toBeAddedContainerId" /></div>
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
      tag: 'ContainerRow',
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

    return {
      root,
      toBeAddedContainerId,
    }
  },
}
</script>

<style  scoped>
</style>