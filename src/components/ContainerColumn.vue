<template>
  <div class="container" style="position:relative" :style="componentStyle">
    <component-decorator   v-for="child in children"  :key="child.id" :id="child.id">
      <component
        @click.stop
        :is="child.tag"
        :id="'component' + child.id"
        :component-style="child.style"
        :component-id="child.id"
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
  name: "ContainerColumn",
  components:{ComponentDecorator},
  props: {
    componentStyle: {
      type: Object,
      // 调整容器大小，背景，边框，圆角
      default: {},
    },
    componentId: {
      type: Number,
      default:0
    }
  },
  setup(props){
    const {componentId} = toRefs(props);
    const store = useStore();
    const children = store.state.components.get(componentId.value).children
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
  flex-direction: column;
  justify-content: flex-start;
  padding:0 30px;
  height: 200px;
}
</style>