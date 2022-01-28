<template>
  <div>
    <teleport :to="activeComponentId">
      <div v-show="isShow" class="frame">
        <button @click.stop="deleteNode">删除</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import bus from 'vue3-eventbus'
export default {
  setup() {
    const store = useStore()
    let activeComponentId = computed(() =>
      store.state.activeComponentId !== null
        ? '#component' + store.state.activeComponentId
        : 'body'
    )
    let isShow = computed(() => store.state.activeComponentId !== null)
    return { activeComponentId, isShow }
  },
  methods:{
    deleteNode(){
      bus.emit('deleteNode')
    }
  }
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