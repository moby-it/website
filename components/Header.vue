
<script setup lang="ts">
const isMobile = inject<ComputedRef<boolean>>('isMobile');
</script>
<template>
  <header>
    <NuxtLink id="site-id" to="/">
      <img src="/logo.png" alt="moby-it logo"  width="150" height="34" />
    </NuxtLink>
    <BurgerMenu v-if="isMobile" />
    <nav class="links" v-if="!isMobile">
      <NavLinks />
    </nav>
    <Address v-if="!isMobile"></Address>
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