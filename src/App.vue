<script setup>
import 'normalize.css/normalize.css';
import { useStore } from 'vuex';
import LoginForm from '@/components/LoginForm/LoginForm.vue';
import NavBar from './components/NavBar.vue';
import ProjectEditNav from '@/components/EditPageComponent/ProjectEditNav.vue';

const store=useStore();

</script>

<template>
  <div class="container">
    <NavBar v-show="$route.path !== '/projectEdit'" />
    <ProjectEditNav v-show="$route.path == '/projectEdit'" />
    <component :is="store.state.loginFormClose?LoginForm:''" />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
}

</style>
