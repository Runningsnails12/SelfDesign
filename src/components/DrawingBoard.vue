<template>
  <div class="drawing-board" @click.stop="cancelComponentSelect">
    <the-root-component :root-node="root"/>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      root:{
        id: 1,
        tag: 'VerticalLayout',
        style: {
          width:'100%',
          height:'100%'
        },
        children:[]
      }
    }
  },
  methods: {
    // 取消组件的选中
    cancelComponentSelect() {
      this.$store.commit('editPage/resetActiveComponent')
    },
  }
}
</script>

<style  scoped>
.drawing-board {
  width: 96vw;
  height: 80vh;
  margin: auto;
  background-color: aliceblue;
}
</style>