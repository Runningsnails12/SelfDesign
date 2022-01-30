<template>
  <div
    class="moveIcon"
    @dragstart="startDragComponent"
    @drag="dragComponent"
    @dragend="putDownComponent"
    draggable="false"
  >
    移动
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  data() {
    return {
     beginLeft:0,
     beginTop:0,
     screenX:0,
     screenY:0
    }
  },
  methods: {
    startDragComponent(e) {
      // 第一次执行让组件从原有容器中移动到root 中，并且 position 属性这是为 absolute，left 和 right 值随着光标移动
      //修改 target 的 style 的 position:fix, 并且 left 和 top 的值为 srcree - offset
      console.log('开始')
      // this.isMouseDown = true;
      // this.$store.commit("moveComponent", 0); // 移动到 root上
      console.log(e)
      console.log(e.clientX, e.offsetX, e.target.parentElement.offsetLeft);
      this.beginLeft = e.clientX - e.offsetX - e.target.parentElement.offsetLeft;
      // console.log(this.beginLeft);
      // console.log(e.clientY, e.offsetY, e.target.parentElement.offsetTop);
      this.beginTop = e.clientY - e.offsetY - e.target.parentElement.offsetTop;
      // console.log(this.beginTop);
      this.screenX = e.screenX;
      this.screenY = e.screenY;

      const style = {
        position: 'fixed',
        left: this.beginLeft + 'px',
        top: this.beginTop + 'px',
      }
      console.log(style)
      this.$store.commit('setActiveComponentStyle', style)
    },
    dragComponent(e) {
      // if(!this.isMouseDown){return}
      // 动态修改 left 和 top 的值
      const changeX = e.screenX - this.screenX;
      const changeY = e.screenY - this.screenY;

      const newLeft = (this.beginLeft + changeX) > 0 ? this.beginLeft + changeX : 0;
      const newTop = (this.beginTop + changeY) > 0 ? this.beginTop + changeY : 0;
      const style = {
        left: newLeft + 'px',
        top: newTop + 'px',
      }

      // console.log(style)
      console.log('移动');
      this.$store.commit('setActiveComponentStyle', style)
      // console.log(e)
    },
    putDownComponent(e) {
      // 放下后，让组件添加到当前鼠标执行容器
      const style = {
        position: 'relative',
        left: 0,
        top: 0,
      }
      // this.isMouseDown = false;
      this.$store.commit('setActiveComponentStyle', style)
      console.log('放下')
    },
  },
}
</script>

<style  scoped>
.moveIcon {
  position: absolute;
  top:0;
  right:0;
  width: 50px;
  height: 50px;
  background-color: brown;
}
.moveIcon:hover{
  cursor:move
}
</style>