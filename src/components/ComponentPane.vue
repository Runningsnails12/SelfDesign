<template>
  <div class="componentPane">
    <button
      v-for="comp in components"
      :key="comp.tag"
      @click="addNode(comp.tag)"
    >
      {{ comp.text }}
    </button>
    插入容器：<input v-model.number="parentId"/>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const components = ref([
      {
        tag: 'BaseButton',
        text: '按钮',
      },
      {
        tag: 'BaseText',
        text: '文本',
      },
      {
        tag: 'ContainerRow',
        text: '横向容器',
      },
       {
        tag: 'ContainerColumn',
        text: '纵向容器',
      }
    ])
    const parentId = ref(0)
    return { components, parentId }
  },
  methods: {
    addNode(componentType) {
      const parentId = this.parentId;
      this.$store.commit('addComponent',{componentType, parentId})
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