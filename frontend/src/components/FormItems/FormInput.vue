<template>
<input
  :type="type"
  :placeholder="placeholder"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  :class="{ 'input-error': error }"
/>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
  background-color: #fafafa;
  margin: 0.4em auto;
  padding: 0.6em 0.6em;
  border-radius: 0.8em;
}
</style>