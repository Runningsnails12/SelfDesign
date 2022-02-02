<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sizeChange']);

const lastCoord = ref(null);

const isDragging = ref(false);

const onMouseDown = (e) => {
  isDragging.value = true;
  lastCoord.value = { x: e.clientX, y: e.clientY };

  console.log('mousedown:');
  console.log(e);
};

const onMouseMove = (e) => {
  if (!isDragging.value) return;
  console.log('mousemove:');
  console.log(e);
  const deltaX = e.clientX - lastCoord.value.x;
  const deltaY = e.clientY - lastCoord.value.y;

  lastCoord.value = { x: e.clientX, y: e.clientY };

  emit('sizeChange', { deltaX, deltaY });
};

const onMouseUp = (e) => {
  isDragging.value = false;
  console.log('mouseup:');
  console.log(e);
};
</script>

<template>
  <div
    class="resizer"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
  />
</template>

<style>
.resizer {
  box-sizing: border-box;
  position: absolute;

  width: 25px;
  height: 25px;

  background-color: black;
  border-radius: 50%;

  cursor: all-scroll;
}
</style>