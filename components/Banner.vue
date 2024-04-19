<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  imageUrl: { type: String, default: 'https://placehold.co/1440x500' }
});
const isMobile = inject('isMobile');
</script>
<template>
  <picture>
    <section class="banner" :style="{ backgroundImage: isMobile ? 'none' : `url(${$props.imageUrl})` }">
      <hgroup>
        <h1 class="title" v-html="$props.title">
        </h1>
        <div class="content">
          <slot name="subtitle"></slot>
        </div>
      </hgroup>
      <NuxtImg v-if="isMobile" :src="$props.imageUrl" style="background-position: center ;object-fit: cover;"
        height="300" />
      <div style="padding:var(--gap-2)">
        <slot></slot>
      </div>
    </section>
  </picture>
</template>

<style scoped>
.banner {
  background-size: cover;
  background-position: top;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  padding: var(--gap-4);
  gap: var(--gap-1);
  margin-bottom: var(--gap-4);
}

.banner hgroup {
  width: fit-content;
  max-width: 45%;
  border-radius: var(--radius);
  padding: var(--gap-2)
}

hgroup h1:not(:only-child) {
  margin-bottom: var(--gap-2);
}

@media (width<=768px) {
  .banner {
    padding: var(--gap-2);
    padding-top: var(--gap-1);
  }

  .banner hgroup {
    max-width: 100%;
  }
}

@media (width <=1024px) and (width >=769px) {
  .banner hgroup {
    max-width: 50%;
  }
}
</style>