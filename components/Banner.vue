
<script setup lang="ts">
const props = defineProps<{ title: string; }>();
</script>
<template>
  <section class="banner">
    <hgroup>
      <h1>
        {{ props.title }}
      </h1>
      <slot name="subtitle"></slot>
    </hgroup>
    <slot></slot>
  </section>
</template>

<style scoped>
.banner {
  background-color: lightcoral;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  padding: var(--gap-3);
  gap: var(--gap-1);
  margin-bottom: var(--gap-3);
}
.banner hgroup {
  max-width: 60%;
  margin-bottom: var(--gap-3);
}

hgroup h1 {
  margin-bottom: var(--gap-3);
}

@media screen and (max-width: 425px) {
  .banner {
    padding: var(--gap-2);
    padding-top: var(--gap-1);
    max-width: 40%;
  }
}
</style>