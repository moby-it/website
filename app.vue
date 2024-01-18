<script setup>
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://moby-it.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: '/style.css'
    },
    {
      rel: 'icon',
      type: 'ico',
      href: '/favicon.ico'
    }
  ],
  meta: [
    {
      charset: 'utf-8',
    },
    {
      "http-equiv": 'x-ua-compatible',
      content: 'IE=edge'
    },
    {
      name: "viewport",
      content: 'width=device-width,initial-scale=1.0'
    }
  ],
  script: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      "data-domain": 'moby-it.com'
    }
  ]
});
</script>
<template>
  <Header />
  <section class="page">
    <NuxtPage />
  </section>
  <Footer />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>