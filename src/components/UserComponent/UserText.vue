<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
});

const value = computed(() => props.value);
</script>

<template>
  <p>{{ value }}</p>
</template>
