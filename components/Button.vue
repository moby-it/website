
<script setup lang="ts">
defineEmits(['clicked']);
</script>
<template>
  <button class="cta" @click="$emit('clicked')">
    <slot></slot>
  </button>
</template>
<style>
.cta {
  align-self: start;
  background-color: var(--primary--opacity--strong);
  border-radius: var(--radius);
  border: 1px solid var(--primary);
  padding: var(--gap-1);
  color: white;
  cursor: pointer;
}

.cta:hover {
  background-color: var(--primary);
}
</style>