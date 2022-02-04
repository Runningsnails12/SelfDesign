import { createStore } from "vuex"
import mutations from './mutations.js'
const state = {
  components: new Map(),
  activeComponentId: -1,
  activeContainerId: -1
}

export default createStore({
  state,
  mutations
})
