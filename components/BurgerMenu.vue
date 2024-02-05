<script setup >
const expanded = ref(null);
watchEffect(() => {
  if (expanded.value) {
    document.body.style.overflowY = 'hidden';
    document.querySelector('html').style.overflowY = 'hidden';
  }
  else if (expanded.value === false) {
    document.body.style.overflow = 'auto';
    document.querySelector('html').style.overflowY = 'auto';
  }
});
</script>
<template>
  <section id="menu">
    <NuxtImg src="/icons/menu.svg" width="24" @click="() => expanded = !expanded">
    </NuxtImg>
  </section>
  <Teleport to="body">
    <nav class="mobile" v-if="expanded">
      <header>
        <img src="/logo.png" alt="moby-it logo" width="150" height="34" />
        <NuxtImg src="/icons/x.svg" width="28" @click="() => expanded = !expanded" />
      </header>
      <section class="links">
        <nav>
          <NavLinks @link-clicked="() => expanded = false" />
        </nav>
        <address>
          <a href="https://www.linkedin.com/company/moby-it" target="_blank">
            <NuxtImg class="icon-link" src="/linkedin.svg" alt="linkedin-icon" :width="40" title="LinkedIn" />
          </a>
          <a href="https://github.com/moby-it" target="_blank">
            <NuxtImg class="icon-link" src="/github-circle.svg" alt="github-icon" :width="40" title="Github" />
          </a>
          <a href="mailto:contact@moby-it.com" target="_blank">
            <NuxtImg class="icon-link" src="/mail.svg" alt="email" :width="40" title="Email" />
          </a>
        </address>
      </section>
    </nav>
  </Teleport>
</template>
<style scoped>
.mobile {
  position: absolute;
  z-index: 10;
  width: calc(100vw - var(--gap-2) - var(--gap-2));
  height: calc(100vh - var(--gap-2) - var(--gap-2));
  background-color: rgba(255, 255, 255, 0.98);
  padding: var(--gap-2);
}

.mobile header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--gap-4);
}

address {
  display: flex;
  gap: var(--gap-1);
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-2);
}

.links ul {
  font-family: "Aeonik Pro";
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--gap-3);
  list-style: none;
  flex-wrap: wrap;
  row-gap: var(--gap-1);
  font-size: 1.4rem;
  text-align: center;
}

.links a:hover {
  color: black;
  transition: color 0.5s ease;
}
</style>