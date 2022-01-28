import { createStore } from "vuex"
import mutations from './mutations.js'
const state = {
  components: new Map(),
  activeComponentId: null
}

export default createStore({
  state,
  mutations
})
