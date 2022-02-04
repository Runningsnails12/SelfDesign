<template>
  <div>
     <button @click.stop="deleteNode" @mousedown.stop>删除</button>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  },
  methods:{
     deleteNode() {
      this.$store.commit('deleteComponent');
     }
  }
}
</script>

<style lang="scss" scoped>

</style>