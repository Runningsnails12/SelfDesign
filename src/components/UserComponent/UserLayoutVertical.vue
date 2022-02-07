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
      v-slot="{ data }"
    >
      <component
        @click.stop
        :is="componentMap.get(child.tag)"
        v-bind="data"
        :id="'component' + child.id"
        style="position: relative; user-select: none"
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
    myChildren: {
      type: Array,
      default: [],
    },
    width: {
      type: [String, Number, null],
      default: '200px'
    },
    height: {
      type: [String, Number, null],
      default: '400px'
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
      componentMap,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: v-bind(height);
  width: v-bind(width);
  outline: dashed #aaa;
}
.active {
  outline: #4A8AF4 solid 2px;
}
</style>
