<script setup lang="ts">
defineProps<{
  hasDiscount: boolean;
  originalPrice: string;
  discountedPrice?: string;
}>();
</script>
<template>
  <span v-if="hasDiscount" class="original-price">{{ originalPrice }} </span>
  <span class="price">{{ hasDiscount ? discountedPrice : originalPrice }}</span>
  € / per month
</template>
<style>
.original-price {
  text-decoration: line-through;
}

.original-price+.price {
  color: red
}
</style>