<template>
  <div
    style="position: relative; height: 200px; user-select: none"
    :style="[componentStyle, tempStyle]"
  >
    文本文本文本
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { toRefs,computed } from 'vue'
export default {
  name: 'BaseText',
  props: {
    componentId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()
    const { componentId } = toRefs(props)
    const componentStyle = store.state.editPage.components.get(componentId.value).style
    const tempStyle = computed(
      () => store.state.editPage.components.get(componentId.value).tempStyle
    )
    return {
      componentStyle,
      tempStyle,
    }
  },
}
</script>

<style scoped>
</style>