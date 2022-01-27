export default {
  // 添加组件
  addComponent(state, {key, value}){
    state.components.set(key, value);
  },
  // 修改当前活动组件
  setActiveComponent(state, id){
    state.activeComponentId = id;
  }
}