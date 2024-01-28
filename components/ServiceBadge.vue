<script setup lang="ts">
import type { Service } from '~/pages/services-and-pricing.vue';
const props = defineProps<{ service: Service; discount: boolean; discountPrice?: string; }>();
</script>
<template>
  <NuxtLink :to="'#' + $props.service.id">
    <section class="badge">
      <NuxtImg :src="$props.service.imgUrl" alt="Consulting & Analysis" :width="150"></NuxtImg>
      <h4>{{ $props.service.title }}</h4>
      <p>
        <Price :has-discount="$props.discount" :original-price="$props.service.price"
          :discounted-price="$props.discountPrice"></Price>
      </p>
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