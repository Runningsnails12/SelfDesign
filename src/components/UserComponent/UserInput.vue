<script setup>
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    required: true
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  dashed: Boolean
});

const emit = defineEmits({
  'update:value': (payload) => typeof payload === 'string'
});

const onInput = (e) => {
  emit('update:value', e.target.value);
};
</script>

<template>
  <input
    v-if="type == 'text'"
    type="text"
    class="dashed"

    :value="props.value"
    @input="onInput"
  >
  <textarea
    v-if="type == 'textarea'"
    cols="30"
    :rows="props.rows"
    :class="{ dashed: props.dashed }"

    :value="props.value"
    @input="onInput"
  />
</template>

<style scoped>
.dashed {
  border-style: dashed;
}

input {
  outline: none;
}

textarea {
  outline: none;
}
</style>