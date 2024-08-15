<script setup>
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
        },
        {
            rel: 'stylesheet',
            href: 'https://unpkg.com/vue-multiselect@2.1.6/dist/vue-multiselect.min.css',
        },
        {
            rel: 'stylesheet',
            href: '/style.css',
        },
        {
            rel: 'icon',
            type: 'ico',
            href: '/favicon.ico',
        },
    ],
    meta: [
        {
            charset: 'utf-8',
        },
        {
            'http-equiv': 'x-ua-compatible',
            content: 'IE=edge',
        },
        {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0',
        },
    ],
    script: [
        {
            src: 'https://moby-it.com/js/script.js',
            defer: true,
            'data-domain': 'services.moby-it.com',
        },
    ],
});
const width = ref(1440); // something bigger than 768 so that the server renders the desktop
const isMobile = computed(() => width.value <= 768);
provide('isMobile', isMobile);
onMounted(() => {
    width.value = window.innerWidth;
    window.addEventListener('resize', () => {
        width.value = window.innerWidth;
    });
});
</script>
<template>
    <Header />
    <NuxtLoadingIndicator />
    <section class="page">
        <NuxtPage />
    </section>
    <Footer />
</template>
