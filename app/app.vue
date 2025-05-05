<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
    },
  ],
  script: [
    {
      src: "https://moby-it.com/js/script.js",
      defer: true,
      "data-domain": "moby-it.com",
    },
    {
      type: "application/ld+json",
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Moby IT",
      url: "https://moby-it.com",
      image: "https://moby-it.com/ogImage.png",
    },
  ],
});
</script>
<template>
  <NuxtPage />
</template>
