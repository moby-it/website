<script setup lang="ts">
import type { Service } from '~/pages/services-and-pricing.vue';

const props = withDefaults(
    defineProps<{
        service: Service;
        discount: boolean;
        discountPrice?: number;
        monthly: boolean;
        star: boolean;
    }>(),
    { monthly: true, star: false },
);
</script>
<template>
    <NuxtLink :to="'#' + props.service.id">
        <section class="badge">
            <NuxtImg :src="props.service.imgUrl" :alt="props.service.imgAlt" :width="150"></NuxtImg>
            <h4>{{ props.service.title }}</h4>
            <slot>
                <p>
                    <span v-if="discount" class="original-price">{{ service.cost }} </span>
                    <span class="price">{{ discount ? discountPrice : service.cost }}</span>
                    €
                    <span v-if="props.monthly"> / per month</span>
                </p>
            </slot>
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

.original-price {
    text-decoration: line-through;

    & + .price {
        color: red;
        margin-left: 4px;
    }
}
</style>
