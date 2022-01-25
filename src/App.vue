<script setup>
import 'normalize.css/normalize.css';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const navData = reactive([{
  id: 0,
  text: '新手教程',
  img: 'img/新手教程.png',
  path: '/tutorial'
}, {
  id: 1,
  text: '项目管理',
  img: 'img/项目管理.png',
  path: '/project'
}, {
  id: 2,
  text: '相关模板',
  img: 'img/相关模板.png',
  path: '/template'
}]);

const toggleTab = (item) => router.push(item.path);

</script>

<template>
  <div>
    <div class="nav">
      <div class="nav_left">
        <div 
          v-for="item in navData" 
          :key="item.id" 
          class="nav_item" 
          @click="toggleTab(item)"
        >
          <img
            :src="item.img"
            :alt="item.text"
            class="nav_img"
            :style="{ visibility: item.id === route.meta.id ? 'visible' : 'hidden' }"
          >
          <span class="nav_text">{{ item.text }}</span>
        </div>
      </div>
      <div class="nav_right">
        <div class="avatar">
          <img 
            src="img/默认头像.png" 
            alt="默认头像"
          >
        </div>
        <div class="action">
          <div>登录</div>
          <div>|</div>
          <div>注册</div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
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
  .nav_right{
    display: flex;
    margin-right: 90px;
    .avatar{
      display: flex;
      margin-right: 10px;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
      }
    }
    .action{
      display: flex;
      align-items: center;
      div{
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
