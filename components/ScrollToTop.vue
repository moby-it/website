<script setup lang="ts">
const props = defineProps<{
  selector: string;
}>();

function scrollToTop() {
  window.scrollTo(0, 0);
}
const show = ref(false);
onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting)
        show.value = true;
      else
        show.value = false;
    }
  }, { root: null, threshold: 0.2 });
  const el = document.querySelector(props.selector);
  if (el)
    observer.observe(el);
});
</script>

<template>
  <NuxtImg v-show="show" ref="img" id="scroll-up" @click="scrollToTop" src="/icons/arrow-up.svg" alt="arrow up"
    aria-label="scroll to top" :width="30" />
</template>
<style scoped>
img {
  cursor: pointer;
  background-color: var(--primary--opacity--weak);
  position: fixed;
  right: var(--gap-3);
  bottom: var(--gap-3);
  border-radius: 50%;
  padding: var(--gap-1);
}
img:hover {
  background-color: var(--primary--opacity--strong);

}
</style>