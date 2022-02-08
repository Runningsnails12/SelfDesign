<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sizeChange', 'resizeEnd']);

const lastCoord = ref(null);

const isDragging = ref(false);

const onMouseDown = (e) => {
  isDragging.value = true;
  lastCoord.value = { x: e.clientX, y: e.clientY };

  console.log('mousedown:');
  console.log(e);

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', function f(e) {
    onMouseUp(e);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', f);
  });
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

  emit('resizeEnd');
};
</script>

<template>
  <div
    class="resizer"
    @mousedown="onMouseDown"
  />
</template>

<style>
.resizer {
  box-sizing: border-box;
  position: absolute;

  width: 10px;
  height: 10px;

  background-color: white;
  border: 1px solid black;

  cursor: nw-resize;
}
</style>