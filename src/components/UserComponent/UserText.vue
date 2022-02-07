<script setup>
import {computed} from 'vue';

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
});

const value = computed(() => props.value);
</script>

<script>
export default {
  name: 'UserText',
};
</script>

<template>
  <p>{{ value }}</p>
</template>

<style scoped>
p {
  width: 100px;
  height: 30px;
  outline: 1px dashed #aaaaaa;
}
</style>
