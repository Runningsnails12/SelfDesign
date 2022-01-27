import { createStore } from "vuex"
import mutations from './mutations.js'
const state = {
  jsonMap: new Map()
}

export default createStore({
  state,
  mutations
})
