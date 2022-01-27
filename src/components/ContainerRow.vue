<template>
  <div class="container">
    <component-decorator   v-for="child in children"  :key="child.id" :id="child.id">
      <component
        @click.stop
        :is="child.tag"
        :parent-id="child.id"
      />
    </component-decorator>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity'
import {useStore} from 'vuex'
import ComponentDecorator from './ComponentDecorator.vue'

export default {
  // tag
  name: 'ContainerRow',
  components:{ComponentDecorator},
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
    const children = store.state.components.get(parentId.value).children
    return {
      children
    }
  }
}
</script>

<style  scoped>
.container {
  display: flex;
  border: 1px solid #000;
  justify-content: flex-start;
  height: 200px;
}
</style>