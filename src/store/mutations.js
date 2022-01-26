export default {
  // 添加组件
  addComponent(state, {key, value}){
    state.jsonMap.set(key, value);
  }
}