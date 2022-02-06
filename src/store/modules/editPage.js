import deepCopy from "@/utils/deepCopy";


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


// 最新节点 id, 执行完 initialComponents
let newestId = -1;

/**
 * 根据模板 copy 一个节点
 * @param {*} nodeTemplate 节点模板
 * @param {*} parentId 
 * @returns 
 */
function generateNode(nodeTemplate, parentId) {
  // 没有 id 是 添加节点调用
  let id = -1;
  if(!nodeTemplate.id){
    newestId += 1;
    id = newestId;
  }else{
    // 有 id 是 初始化节点调用
    id = nodeTemplate.id;
    newestId = id > newestId ? id : newestId;
  }

  return {
    id,
    parentId,
    tag:nodeTemplate.tag,
    style: nodeTemplate.style? deepCopy(nodeTemplate.style) : {},
    values: nodeTemplate.values? deepCopy(nodeTemplate.values) : {},
    events: nodeTemplate.events? deepCopy(nodeTemplate.envents) : [],
    tempStyle: {}, // 前端操作的时候有用
    children: [],
  }
}




// 重置 activeComponentId
function resetActiveComponent(state) {
  state.activeComponentId = -1;
}

// 添加节点
function addComponent(state, {node, parentId = 1 }) {
  const copyNode = generateNode(node, parentId);
  state.components.set(copyNode.id, copyNode); // 往 map 中添加节点
  if(parentId !== 0){
    // 非根节点
    state.components.get(parentId).children.push(copyNode); // 构造树状数据
  }
  node.children.forEach(child => addComponent(state, { node: child, parentId: id }))
}


export default {
  namespaced: true,
  state: {
    components: new Map(),
    activeComponentId: -1,
    activeContainerId: -1
  },
  getters:{
    activeComponent(state){
      return state.activeComponentId !== -1 ? state.components.get(state.activeComponentId) : null;
    }
  },

  mutations: {
    // 添加组件
    addComponent,

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
    },

    // 修改活动组件 values
    setActiveComponentValues(state, values){
      if (state.activeComponentId === -1) {
        return
      }
      const componentValues = state.components.get(state.activeComponentId).values;
      // 覆盖 style 原有属性值
      for (let key in values) {
        componentValues[key] = values[key];
      }
    },

    // 修改活动组件 events, 还在写。。。。。
    setActiveComponentEvents(state, {events}){
      if (state.activeComponentId === -1) {
        return
      }
      const componentEvents = state.components.get(state.activeComponentId).events;
      // 覆盖 style 原有属性值
      // for (let key in events) {
      //   componentEvents[key] = events[key];
      // }

    }

  }
}