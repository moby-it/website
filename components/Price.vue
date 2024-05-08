<script setup lang="ts">
defineProps<{
  hasDiscount: boolean;
  originalPrice: number;
  discountedPrice?: number;
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
  & +.price {
    color: red;
    margin-left: 4px;
  }
}

</style>