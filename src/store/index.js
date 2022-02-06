import { createStore } from 'vuex';

export default createStore({
  state:{
    loginFormClose:false,
    token:null,
    username:null
  },
  mutations:{
    handleLoginFormClose(state){
      state.loginFormClose=!state.loginFormClose;
    },
    setToken(state,data){
      state.token=data;
    },
    setUsername(state,data){
      state.username=data;
    }
  },
  actions:{

  }
});
