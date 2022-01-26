<template>
  <div>
    <component :is="root.tag" :my-children="root.children" />
    <div>
      <button @click="addButton(toBeAddedContainerID)">加 button</button>
      <button @click="addText(toBeAddedContainerID)">加 text</button>
      <button @click="addContainerRow(toBeAddedContainerID)">
        加 横向容器
      </button>
      添加进容器: <input v-model.number="toBeAddedContainerID" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  data() {
    return {
      newestID: 0,
      toBeAddedContainerID: 0,
    }
  },
  setup() {
    
    const root = reactive({
      id: 0,
      tag: 'ContainerRow',
      children: [],
    })
    // 节点 Map
    const nodeMap = new Map();
    nodeMap.set(0, root)

    return {
      root,
      nodeMap,
    }
  },
  methods: {
    addButton(targetId = 0) {
      this.newestID += 1
      const Node = reactive( {
        id: this.newestID,
        parentID: targetId,
        tag: 'BaseButton',
        children: [],
      })
      this.nodeMap.get(targetId).children.push(Node)
      this.nodeMap.set(this.newestID, Node)
    },
    addText(targetId = 0) {
      this.newestID += 1
      const Node = reactive( {
        id: this.newestID,
        parentID: targetId,
        tag: 'BaseText',
        children: [],
      })
      this.nodeMap.get(targetId).children.push(Node)
      this.nodeMap.set(this.newestID, Node)
    },
    addContainerRow(targetId = 0) {
      this.newestID += 1
      const Node = reactive({
        id: this.newestID,
        parentID: targetId,
        tag: 'ContainerRow',
        children: [],
      })
      this.nodeMap.get(targetId).children.push(Node)
      this.nodeMap.set(this.newestID, Node)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>