<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import ResizeWidget from './ResizeWidget.vue';

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['sizeChange']);

const store = useStore();

const activeComponent = computed(() => store.state.components.get(props.id) ?? null);

const widthInPx = computed(() => activeComponent.value?.style.width ?? 0);
const heightInPx = computed(() => activeComponent.value?.style.height ?? 0);

const resizerPosition = reactive({ left: widthInPx.value, top: heightInPx.value });

const changeComponentSizeTo = ({ width, height }) => {
  store.commit('setActiveComponentStyle', { width, height });
};

const onSizeChange = (delta) => {
  console.log('delta: ');
  console.log(delta);

  const { deltaX, deltaY } = delta;
  resizerPosition.left += deltaX;
  resizerPosition.top += deltaY;

  changeComponentSizeTo({ width: widthInPx.value + deltaX, height: heightInPx.value + deltaY });

  const nextLeft = resizerPosition.left + deltaX;
  const nextTop = resizerPosition.top + deltaY;

  console.log(`nextLeft: ${nextLeft}, nextTop: ${nextTop}`);

  emit('sizeChange', { nextLeft, nextTop });
};

</script>

<template>
  <ResizeWidget
    :style="resizerPosition"
    @size-change="onSizeChange"
  />
</template>