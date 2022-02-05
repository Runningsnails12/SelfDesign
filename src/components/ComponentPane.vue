<template>
  <div class="componentPane">
    <button
      v-for="comp in components"
      :key="comp.tag"
      @click="addNode(comp)"
    >
      {{ comp.text }}
    </button>
    插入容器：<input v-model.number="parentId" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const components = ref([
      {
        tag: 'Button',
        text: '按钮',
        children: [],
        style: {},
        events: [],
        values:{}
      },
      {
        tag: 'Image',
        text: '图片',
        children: [],
        style: {},
        events: [],
        values:{}
      },
      {
        tag: 'HorizontalLayout',
        text: '横向容器',
        children: [],
        style: {},
        events: [],
      },
      {
        tag: 'VerticalLayout',
        text: '纵向容器',
        children: [],
        style: {},
        events: [],
      },
    ])
    const parentId = ref(1)
    return { components, parentId }
  },
  methods: {
    addNode(node) {
      const parentId = this.parentId
      this.$store.commit('editPage/addComponent', { node, parentId })
    },
  },
}
</script>

<style  scoped>
.componentPane {
  width: 300px;
  border: 1px solid #000;
}
</style>