
<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  imageUrl: { type: String, default: 'https://placehold.co/1440x700' }
});
</script>
<template>
  <section class="banner" :style="{ backgroundImage: `url(${$props.imageUrl})` }">
    <hgroup>
      <h1 v-html="$props.title">
      </h1>
      <slot name="subtitle"></slot>
    </hgroup>
    <slot></slot>
  </section>
</template>

<style scoped>
.banner {
  background-size: cover;
  background-position: top;
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

@media (width<=425px) {
  .banner {
    padding: var(--gap-2);
    padding-top: var(--gap-1);
  }
}
</style>