<template>
  <div>
    <teleport :to="activeComponentId">
      <div
        v-show="isShow"
        class="frame"
        @click.stop
        draggable="false"
      >
        <component-resizer
          :id="$store.state.activeComponentId"
        />
        <delete-component/>
        <drag-component/>
      </div>
    </teleport>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import DragComponent from './childComps/DragComponet.vue'
import DeleteComponent from './childComps/DeleteComponent.vue'
import ComponentResizer from '../../ComponentResizer.vue'
export default {
  setup() {
    const store = useStore()
    let activeComponentId = computed(() =>
      store.state.activeComponentId !== -1
        ? '#component' + store.state.activeComponentId
        : 'body'
    )
    let isShow = computed(() => store.state.activeComponentId !== -1)
    return { activeComponentId, isShow }
  },
  components:{ DragComponent, DeleteComponent, ComponentResizer },
}
</script>

<style scoped>
.frame {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>