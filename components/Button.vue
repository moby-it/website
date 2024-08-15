<script setup lang="ts">
defineProps({
    minWidth: {
        type: String,
        default: '120px',
    },
});
defineEmits(['clicked']);
</script>
<template>
    <button class="cta" @click="$emit('clicked')" :style="{ minWidth: $props.minWidth }">
        <slot></slot>
    </button>
</template>
<style>
.cta {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: var(--gap-1);
    align-self: start;
    background-color: var(--primary--opacity--strong);
    border-radius: var(--radius);
    border: none;
    padding: 0.75rem 1rem;
    color: white;
    cursor: pointer;
}

.cta:hover {
    background-color: var(--primary);
}
.cta::after {
    content: attr();
}
button:disabled {
    background-color: var(--primary--opacity--weak);
    cursor: not-allowed;
}

button:disabled:hover {
    background-color: var(--primary--opacity--weak);
}
button {
    font-weight: 500;
}
</style>
