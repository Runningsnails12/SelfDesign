import { cloneDeep, cloneDeepWith, isMap } from 'lodash-es';

const onlyCloneRootComponent = (value) => {
  if (isMap(value)) {
    const clonedRoot = cloneDeep(value.get(1));
    return new Map([
      [1, clonedRoot]
    ]);
  }
};

// /**
//  * 根据id添加组件到Components Map
//  * @param {Record<string, string>} component 组件数据
//  * @param {Map<number, any>} map vuex中的componets Map
//  */
// const addComponentById = (component, map) => {
//   const { id, children } = component;
//   map.set(id, component);

//   for (const child of children) {
//     addComponentById(child, map);
//   }
// };

// /**
//  * 重建Components Map
//  * @param {Map<number, any>} map 
//  */
// const rebuildComponentMapFromRoot = (map) => {
//   const children = map.get(1).children;

//   for (const child of children) {
//     addComponentById(child, map);
//   }
// };

/** @typedef {import('vuex').Store<any>['subscribe']} Subscribe */

const history = [];
let i = -1;

const REPLACE_STATE_MUTATION_KEY = 'replaceEditPage';

/**
 * Action: 撤销，返回上一个状态
 * @type {import('vuex').Action<any, any>}
 */
const undo = ({ dispatch }) => {
  if (i <= 0) {
    console.log('no more earlier history');
    return;
  }

  const prev = history[i - 1];
  dispatch(REPLACE_STATE_MUTATION_KEY, { editPage: prev }, { root: true });
  // Object.assign(store.state, { editPage: prev });

  i -= 1;
};

/**
 * Action: 重做，回到下一个状态
 * @type {import('vuex').Action<any, any>}
 */
const redo = ({ dispatch }) => {
  if (i >= history.length - 1) {
    console.log('no more history');
    return;
  }
  
  const future = history[i + 1];
  dispatch(REPLACE_STATE_MUTATION_KEY, { editPage: future }, { root: true });
  // Object.assign(store.state, { editPage: future });

  i += 1;
};

const INTERNAL_FLAG_KEY = Symbol('isInternal');

/** @type {Parameters<Subscribe>[0]} */
const onEditPageMutation = (mutation, state) => {
  if (state[MODULE_KEY][INTERNAL_FLAG_KEY]) return; // 插件内部调用`editPage`，不做操作

  const prefixedMutationType = mutation.type;

  if (!prefixedMutationType.startsWith('editPage/')) return;

  const mutationType = prefixedMutationType.split('/')[1];

  console.log(`${mutationType}: `);
  console.log({ mutation, state });

  if (i !== history.length - 1) {
    // 指针后面有历史记录，指针之后的全部丢弃
    history.length = i + 1;
  }

  const clonedWithRootOnly = cloneDeepWith(state.editPage, onlyCloneRootComponent);

  history.push(clonedWithRootOnly);
  i += 1;

  console.log('plugin: ');
  console.log(history);
  console.log('pointer: ' + i);
};

const MODULE_KEY = 'history';

/**
 * 实现撤消重做的历史记录插件。
 * 前提是，Store的根中存在名为 `REPLACE_STATE_MUTATION_KEY_IN_ROOT` 的 Mutation。
 * 且这个 Mutation 接受 `{ editPage: editPage类型; }` 一样的对象
 * @param {import('vuex').Store} store Store实例
 */
const historyPlugin = (store) => {
  console.log('history plugin');
  store.subscribe(onEditPageMutation);

  console.log('register history module: ');
  store.registerModule(MODULE_KEY, {
    
    namespaced: true,
  
    state: () => (
      {
        [INTERNAL_FLAG_KEY]: false
      }
    ),

    mutations: {
      /**
       * 用于标记是否是插件内部调用`editPage`
       * 不重复调用`onEditPageMutation`
       */
      setInternalFlag(state, payload) {
        state[INTERNAL_FLAG_KEY] = payload;
      }
    },

    actions: {
      undo,
      redo
    }
  });

  console.log(store);
  console.log('history plugin installed');
};

/** 
 * 用于重置`editPage`中的`components`，
 * 因为`editPage`中没有提供这样的 Mutation
 * @type {import('vuex').Mutation<any>}
 */
const __resetEditPageComponentsMap = (state) => {
  state.editPage.components = new Map();
};

const historyGlobalMutations = {
  __resetEditPageComponentsMap
};

/**
 * 用于替换`editPage`的状态
 * @type {import('vuex').Action<any, any>}
 */
const replaceState = ({ state, commit }, { editPage }) => {
  // 标记是插件在调用`editPage`的 Mutation
  commit(SET_INTERNAL_FLAG_KEY, true);

  commit('editPage/setActiveComponent', editPage.activeComponentId);
  commit('editPage/setActiveContainer', editPage.activeContainerId);

  const root = editPage.components.get(1);

  commit('__resetEditPageComponentsMap');

  // 从根组件开始重建
  commit('editPage/addComponent', { node: root, parentId: 0 });

  commit(SET_INTERNAL_FLAG_KEY, false);

  console.log('after replaceState:');
  console.log(state.editPage);
};

const historyGlobalActions = {
  [REPLACE_STATE_MUTATION_KEY]: replaceState
};

const REDO_KEY = `${MODULE_KEY}/redo`;
const UNDO_KEY = `${MODULE_KEY}/undo`;

const SET_INTERNAL_FLAG_KEY = `${MODULE_KEY}/setInternalFlag`;

export {
  historyPlugin,
  historyGlobalActions,
  historyGlobalMutations,

  REPLACE_STATE_MUTATION_KEY,
  MODULE_KEY,
  REDO_KEY,
  UNDO_KEY,

  SET_INTERNAL_FLAG_KEY,
};