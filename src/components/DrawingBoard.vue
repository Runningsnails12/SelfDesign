<template>
  <div>
    <component :is="root.tag" :parent-id="0" />
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
import {useStore} from 'vuex'

export default {
  data() {
    return {
      newestID: 0,
      toBeAddedContainerID: 0,
    }
  },
  setup() {
    // 根节点
    const root = reactive({
      id: 0,
      tag: 'ContainerRow',
      children: [],
    })
    // 节点 Map
    const store = useStore();
    store.commit('addComponent', { key: 0, value: root });
    return {
      root
    }
  },
  methods: {
    addButton(targetId = 0) {
      this.newestID += 1
      const Node = {
        id: this.newestID,
        parentId: targetId,
        tag: 'BaseButton',
        children: [],
      }
      this.$store.state.jsonMap.get(targetId).children.push(Node)
      this.$store.commit('addComponent', { key: this.newestID, value: Node })
    },
    addText(targetId = 0) {
      this.newestID += 1
      const Node = {
        id: this.newestID,
        parentId: targetId,
        tag: 'BaseText',
        children: [],
      }
      this.$store.state.jsonMap.get(targetId).children.push(Node)
      this.$store.commit('addComponent', { key: this.newestID, value: Node })
    },
    addContainerRow(targetId = 0) {
      this.newestID += 1
      const Node = {
        id: this.newestID,
        parentId: targetId,
        tag: 'ContainerRow',
        children: [],
      }
      this.$store.state.jsonMap.get(targetId).children.push(Node)
      this.$store.commit('addComponent', { key: this.newestID, value: Node })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>