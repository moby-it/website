<script setup lang="ts">
import type { Service } from '~/pages/services-and-pricing.vue';
defineProps<{ service: Service; }>();
</script>
<template>
  <NuxtLink :to="'#' + $props.service.id">
    <section class="badge">
      <NuxtImg :src="$props.service.imgUrl" alt="Consulting & Analysis" :width="150"></NuxtImg>
      <h4>{{ $props.service.title }}</h4>
      <p>{{ $props.service.price }} € / month</p>
    </section>
  </NuxtLink>
</template>
<style scoped>
.badge {
  cursor: pointer;
}

h4 {
  max-width: 200px;
}
</style>