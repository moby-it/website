<script setup>
defineProps({
    minHeight: {
        type: String,
    },
    minWidth: {
        type: String,
        default: '390px',
    },
    maxWidth: {
        type: String,
        default: 'fit-content',
    },
});
</script>
<template>
    <article class="card" :style="{ minHeight, minWidth, maxWidth }">
        <header>
            <slot name="header"></slot>
        </header>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </article>
</template>
<style>
.card {
    box-sizing: border-box;
    background: var(--light--bg);
    display: flex;
    flex-direction: column;
    border-radius: 3rem;
    padding: var(--gap-2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-shadow:
        var(--secondary--opacity--weak) 0px 10px 20px,
        var(--secondary--opacity--strong) 0px 6px 6px;
}

.card > header {
    display: flex;
    gap: var(--gap-1);
    color: var(--dark--bg);
    margin-bottom: var(--gap-3);
    text-align: center;
    align-items: center;
    justify-content: center;
}

.card header img {
    width: 96px;
}

.content {
    color: var(--gray);
}
</style>
