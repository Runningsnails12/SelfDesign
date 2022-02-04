<template>
  <button style="position:relative; user-select: none" :style="[componentStyle,tempStyle]" >按钮</button>
</template>

<script>
import { toRefs, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'BaseButton',
  props:{
    componentId:{
      type:Number,
      required:true
    }
  },
  setup(props) {
    const store = useStore()
    const { componentId } = toRefs(props)
    const componentStyle = store.state.components.get(componentId.value).style
    const tempStyle = computed(() => store.state.components.get(componentId.value).tempStyle ) 
    return {
      componentStyle,
      tempStyle
    }
  },
}
</script>

<style lang="scss" scoped>
</style>