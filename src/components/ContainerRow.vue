<template>
  <div class="container">
    <!-- 动态组件 -->
    <component v-for="child in children" :is="child.tag" :key="child.id" :parent-id="child.id"/>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity'
import {useStore} from 'vuex'

export default {
  // tag
  name: 'ContainerRow',
  props: {
    style: {
      type: Object,
      // 调整容器大小，背景，边框，圆角
      default: {},
    },
    parentId: {
      type: Number,
      default:0
    }

  },
  setup(props){
    const {parentId} = toRefs(props);
    console.log(parentId)
    const store = useStore();
    const children = store.state.jsonMap.get(parentId.value).children
    return {
      children
    }
  }
}
</script>

<style  scoped>
.container {
  display: flex;
  border:1px solid #000;
  justify-content: flex-start;
  height: 200px;
}
</style>