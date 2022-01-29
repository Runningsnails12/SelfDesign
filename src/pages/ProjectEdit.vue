<template>
  <div class="edit-page">
    <component-panel />
  </div>
</template>
<script>
// import ProjectEditNav from '@/components/EditPageComponent/ProjectEditNav.vue';
import ComponentPanel from '@/components/EditPageComponent/ComponentPanel.vue';

export default {
  name: 'ProjectEdit',
  components: {
    ComponentPanel
  },
  setup() {}
};
</script>

<style scoped>
  .edit-page {
    height: calc(100%);
    background: #e9ebed;
  }
</style>