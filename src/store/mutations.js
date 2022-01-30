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
  // 删除组件
  deleteComponent,

  // 修改当前活动组件
  setActiveComponent(state, id){
    state.activeComponentId = id;
  },

  // 重置活动组件
  resetActiveComponent(state){
    state.activeComponentId = null;
  },

  // 修改活动组件样式
  setActiveComponentStyle(state, style){
    if(state.activeComponentId === null){
      return
    }
    const componentStyle = state.components.get(state.activeComponentId).style;
    // 覆盖 style 原有属性值
    for(let key in style){
      componentStyle[key] = style[key];
    }
  }
}