
<script setup>

const width = ref(1440); // something bigger than 768 so that the server renders the desktop
const isMobile = computed(() => width.value <= 768);
onMounted(() => {
  width.value = window.innerWidth;
  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
  });
});
</script>
<template>
  <header>
    <NuxtLink id="site-id" to="/">
      <img src="/logo.png" alt="moby-it logo" width="150" height="34" />
    </NuxtLink>
    <BurgerMenu v-if="isMobile" />
    <nav class="links" v-if="!isMobile">
      <NavLinks />
    </nav>
    <address>
      <a href="https://www.linkedin.com/company/moby-it" target="_blank" title="linkedIn">
        <NuxtImg class="icon-link" src="/linkedin.svg" alt="linkedin-icon" :width="30" />
      </a>
      <a href="https://github.com/moby-it" target="_blank" title="Github">
        <NuxtImg class="icon-link" src="/github-circle.svg" alt="github-icon" :width="30" />
      </a>
        <a href="mailto:contact@moby-it.com" target="_blank" title="Email">
        <NuxtImg class="icon-link" src="/mail.svg" alt="email" :width="30" />
      </a>
    </address>
  </header>
</template>
<style scoped>
#site-id {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: black;
  cursor: pointer;
}

#site-id img {
  object-fit: contain;
}

header:has(nav),
header:has(#menu) {
  min-height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-1);
  flex-wrap: wrap;
  padding: var(--gap-2);
}

address {
  display: flex;
  gap: var(--gap-1);
}

.links ul {
  font-family: "Aeonik Pro";
  flex: 1;
  display: flex;
  justify-content: center;
  gap: var(--gap-3);
  list-style: none;
  flex-wrap: wrap;
  row-gap: var(--gap-1);
}

.links a:hover {
  color: black;
  transition: color 0.5s ease;
}
</style>