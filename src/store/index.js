import { createStore } from 'vuex'
import editPage from './modules/editPage'
export default createStore({
  state: {
    loginFormClose: false,
    token: null,
    username: null
  },
  mutations: {
    handleLoginFormClose(state) {
      state.loginFormClose = !state.loginFormClose;
    },
    setToken(state, data) {
      state.token = data;
    },
    setUsername(state, data) {
      state.username = data;
    }
  },
  actions: {},
  modules: {
    editPage
  }
})

