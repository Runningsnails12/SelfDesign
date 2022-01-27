<script>
import PageEdit from './pages/PageEdit.vue'
export default{
  components:{PageEdit}
}

</script>

<template>
  <div>hello</div>
  <page-edit/>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
  .nav_left {
    display: flex;
    margin-left: 180px;
    justify-content: center;
    transition: width 0.5s ease-in-out;
    .nav_item {
      display: flex;
      margin-right: 32px;
      align-items: center;
      .nav_img {
        width: 33px;
        height: 33px;
      }
      .nav_text {
        margin-left: 10px;
        font-size: 20px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
    }
  }
}
</style>
