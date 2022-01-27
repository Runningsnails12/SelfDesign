export default {
  // 添加组件
  addComponent(state, {key, value}){
    state.jsonMap.set(key, value);
  },
  // 修改当前活动组件
  setActiveComponentId(state, id){
    state.setActiveComponentId = id;
  }
}