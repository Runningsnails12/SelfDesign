
// 从map中删除组件
function deleteComponentFromMap(state, key) {
  const children = state.components.get(key).children;
  state.components.delete(key);
  // 递归删除
  children.forEach(child => {
    deleteComponentFromMap(state, child.id);
  });
}

// 从 json 中删除组件
function deleteComponentFromJson(state, { parentId, targetId }) {
  const children = state.components.get(parentId).children;
  let i = 0
  for (; i < children.length; i++) {
    if (children[i].id === targetId) {
      break
    }
  }
  return children.splice(i, 1)[0];
}


// 产生一个节点
function generateNode(id, parentId, tag) {
  return {
    id,
    parentId,
    tag,
    style: {},
    tempStyle: {}, // 前端操作的时候有用
    children: [],
  }
}

function generateNode()



// 最新节点 id
let newestId = -1;

// 重置 activeComponentId
function resetActiveComponent(state){
  state.activeComponentId = -1;
}

export default {
  namespaced: true,
  state: {
    components: new Map(),
    activeComponentId: -1,
    activeContainerId: -1
  },
  mutations: {
    // 添加组件
    addComponent(state, { componentType, parentId = 0 }) {
      newestId += 1;
      const node = generateNode(newestId, parentId, componentType);
      if (parentId !== -1) {// 非 root 节点
        state.components.get(parentId).children.push(node); // json 中添加树状关系
      }
      state.components.set(newestId, node); // map 中添加 映射关系
    },

    // 删除组件
    deleteComponent(state) {
      const activeComponentId = state.activeComponentId;
      if (activeComponentId === -1) {
        return;
      }
      const parentId = state.components.get(activeComponentId).parentId;
      resetActiveComponent(state) // 必须先置 -1
      deleteComponentFromMap(state, activeComponentId);
      deleteComponentFromJson(state, { parentId, targetId: activeComponentId });
    },

    // 移动组件
    moveComponent(state) {
      const to = state.activeContainerId;
      if (to === -1) { return }
      const activeComponentId = state.activeComponentId;
      const from = state.components.get(activeComponentId).parentId;
      console.log(from, to);
      if (to !== from) {
        const comp = deleteComponentFromJson(state, { parentId: from, targetId: activeComponentId })
        comp.parentId = to;
        state.components.get(to).children.push(comp);
      }
    },

    // 修改当前活动组件
    setActiveComponent(state, id) {
      state.activeComponentId = id;
    },

    // 重置活动组件
    resetActiveComponent,

    // 修改活动组件样式
    setActiveComponentStyle(state, style) {
      if (state.activeComponentId === -1) {
        return
      }
      const componentStyle = state.components.get(state.activeComponentId).style;
      // 覆盖 style 原有属性值
      for (let key in style) {
        componentStyle[key] = style[key];
      }
    },

    // 修改活动组件临时样式
    setActiveComponentTempStyle(state, style) {
      if (state.activeComponentId === -1) {
        return
      }
      const componentStyle = state.components.get(state.activeComponentId).tempStyle;
      // 覆盖 style 原有属性值
      for (let key in style) {
        componentStyle[key] = style[key];
      }
    },

    // 清空临时样式
    clearActiveComponentTempStyle(state) {
      if (state.activeComponentId === -1) {
        return
      }
      state.components.get(state.activeComponentId).tempStyle = {};
    },


    // 设置激活容器
    setActiveContainer(state, id) {
      state.activeContainerId = id;
    },

    // 重置激活容器
    resetActiveContainer(state) {
      state.activeContainerId = -1;
    }
  }
}