<template>
  <component-decorator :id="rootNode.id" v-slot="{data}">
    <component
      :is="componentMap.get(rootNode.tag)"
      v-bind="data"
      :component-id="rootNode.id"
      :id="'component' + rootNode.id"
    />
  </component-decorator>
  <active-component-frame />
</template>

<script>
import {useStore} from 'vuex';
import ActiveComponentFrame from './ActiveComponentFrame/ActiveComponentFrame.vue';
import componentMap from './componentMap';
import useUserComponentTransformer from './transformers';
export default {
  components: {ActiveComponentFrame},
  props: {
    rootNode: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    useUserComponentTransformer();
    const store = useStore();
    store.commit('editPage/addComponent', {node: props.rootNode, parentId: 0}); // 初始化组件
    return {
      componentMap,
    };
  },
};
</script>

<style scoped></style>
