<script setup>
import 'normalize.css/normalize.css';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import LoginForm from '@/components/LoginForm/LoginForm.vue';
import NavBar from './components/NavBar.vue';
import Message from './components/ShowMessage';
import api from './api';

const store = useStore();
onMounted(async () => {
  store.commit('setToken',localStorage.getItem('token'));
  const { data } = await api.getUserInfo();
  if (data){
    store.commit('setUsername', data.username);
  }else{
    Message.error('登录过期了，请重新登录');
    store.commit('setToken',undefined);
    store.commit('handleLoginFormClose');
  }
});

</script>

<template>
  <div class="container">
    <NavBar />
    <component :is="store.state.loginFormClose ? LoginForm : ''" />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
