<template>
  <div>
    {{activeComponent}}
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex'
export default {
  setup () {
    const store = useStore();
    return {
      activeComponent: computed(() => store.getters['editPage/activeComponent']) 
    }
  }
}
</script>

<style lang="scss" scoped>

</style>