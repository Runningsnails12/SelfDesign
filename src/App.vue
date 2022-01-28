<script setup>
import 'normalize.css/normalize.css';
import { useStore } from 'vuex';
import LoginForm from '@/components/LoginForm/LoginForm.vue';
import NavBar from './components/NavBar.vue';

const store=useStore();

</script>

<template>
  <div class="container">
    <NavBar />
    <component :is="store.state.loginFormClose?LoginForm:''" />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>
