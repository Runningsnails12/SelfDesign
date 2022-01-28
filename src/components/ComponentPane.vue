<template>
  <div class="componentPane">
    <button v-for="comp in components" :key="comp.tag" @click="addNode(comp.tag)" >{{comp.text}}</button>
  </div>
</template>

<script>
import bus from 'vue3-eventbus'
import {ref} from 'vue'
export default {
  setup () {
    const components = ref([{
      tag: 'BaseButton',
      text:'按钮'
    },
    {
      tag: 'BaseText',
      text:'文本'
    },{
      tag: 'ContainerRow',
      text:'横向容器'
    }])
    return {components}
  },
  methods:{
    addNode(nodeType){
      bus.emit("addNode", nodeType)
    }
  }
}
</script>

<style  scoped>
  .componentPane{
    width:300px;
    border:1px solid #000;
  }
</style>