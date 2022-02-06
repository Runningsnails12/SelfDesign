<template>
  <div
    class="container"
    :class="{ active: isActive }"
    style="position: relative"
  >
    <component-decorator
      v-for="child in myChildren"
      :key="child.id"
      :id="child.id"
      v-slot="{data}"
    >
      <component
        @click.stop
        :is="componentMap.get(child.tag)"
        v-bind = "data"
        :id="'component' + child.id"
        style="position:relative"
        :style="child.tempStyle"
      />
    </component-decorator>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from 'vue'
import componentMap from './componentMap'
export default {
  name: 'UserLayoutVertical',
  // tag
  props: {
    componentId: {
      type: Number,
      required: true,
    },
    myChildren:{
      type:Array,
      default: []
    }
  },

  setup(props) {

    const { componentId } = toRefs(props)
    const store = useStore()
    let isActive = computed(
      () => componentId.value === store.state.editPage.activeContainerId
    )
    return {
      isActive,
      componentMap
    }
  },
}
</script>

<style  scoped>
.container {
  display: flex;
  border: 1px solid #000;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 30px;
  height: 200px;
}
.active {
  outline: #00f solid 2px;
}
</style>