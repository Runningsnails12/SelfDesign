<template>
  <div
    class="container"
    :class="{ active: isActive }"
    style="position: relative"
    :style="[componentStyle, tempStyle]"
  >
    <component-decorator
      v-for="child in children"
      :key="child.id"
      :id="child.id"
      v-slot = "data"
    >
      <component
        @click.stop
        :is="child.tag"
        :data = "data"
        :id="'component' + child.id"
        :component-id="child.id"
      />
    </component-decorator>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from 'vue'
import ComponentDecorator from './ComponentDecorator.vue'

export default {
  // tag
  name: 'ContainerRow',
  components: { ComponentDecorator },
  props: {
    componentId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { componentId } = toRefs(props)
    const store = useStore()
    let isActive = computed(
      () => componentId.value === store.state.editPage.activeContainerId
    )
    const children = store.state.editPage.components.get(componentId.value).children
    const componentStyle = store.state.editPage.components.get(componentId.value).style
    const tempStyle = computed(
      () => store.state.editPage.components.get(componentId.value).tempStyle
    )
    return {
      children,
      isActive,
      componentStyle,
      tempStyle,
    }
  },
}
</script>

<style  scoped>
.container {
  display: flex;
  border: 1px solid #000;
  justify-content: flex-start;
  padding: 0 30px;
  height: 200px;
}

.active {
  outline: #00f solid 2px;
}
</style>