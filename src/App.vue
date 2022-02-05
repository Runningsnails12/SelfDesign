<script setup>
import "normalize.css/normalize.css";
import { useStore } from "vuex";
import { onMounted } from "vue";
import LoginForm from "@/components/LoginForm/LoginForm.vue";
import NavBar from "./components/NavBar.vue";
import Message from "./components/ShowMessage";
import api from "./api";
import ProjectEditNav from "@/components/EditPageComponent/ProjectEditNav.vue";

const store = useStore();
onMounted(async () => {
  store.commit("setToken", localStorage.getItem("token"));
  const { data } = await api.getUserInfo();
  if (data) {
    store.commit("setUsername", data.username);
  } else {
    Message.error("登录过期了，请重新登录");
    store.commit("setToken", undefined);
    store.commit("handleLoginFormClose");
  }
});

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

// import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let path = route.path;
// let isShow = ref(false);

// // watch(() =>
// route.beforeEach((to, form, next) => {
//   console.log(to.path);
//   console.log(to.path === "/projectEdit");
//   console.log("isShow: " + isShow);
//   if (to.path === "/projectEdit") {
//     isShow.value = true;
//   } else {
//     isShow.value = false;
//   }
// });
// // );
</script>

<template>
  <div class="container">
    <NavBar v-show="route.path !== '/projectEdit'" />
    <!-- <ProjectEditNav v-show="route.path === '/projectEdit'" /> -->
    <!-- <NavBar v-show="!isShow" /> -->
    <ProjectEditNav />
    <LoginForm v-if="store.state.loginFormClose" />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
}
</style>
