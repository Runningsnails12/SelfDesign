// 删除组件
function  deleteComponent(state, key){
  const children = state.components.get(key).children;
  state.components.delete(key);
  // 递归删除
  children.forEach(child => {
    deleteComponent(state, child.id);
  });
}

export default {
  // 添加组件
  addComponent(state, {key, value}){
    state.components.set(key, value);
  },
  
  deleteComponent,

  // 修改当前活动组件
  setActiveComponent(state, id){
    state.activeComponentId = id;
  },

  // 重新当前活动组件
  resetActiveComponent(state){
    state.activeComponentId = null;
  }
}