<script setup >
const props = defineProps({
  white: {
    type: Boolean,
    default: false
  }
});
</script>
<template>
  <address>
    <a href="https://www.linkedin.com/company/moby-it" target="_blank">
      <NuxtImg class="icon-link" :src="`/linkedin${$props.white ? '-white' : ''}.svg`" alt="linkedin-icon" :width="30"
        title="LinkedIn" />
    </a>
    <a href="https://github.com/moby-it" target="_blank">
      <NuxtImg class="icon-link" :src="`/github-circle${$props.white ? '-white' : ''}.svg`" alt="github-icon" :width="30"
        title="Github" />
    </a>
    <a href="mailto:contact@moby-it.com" target="_blank">
      <NuxtImg class="icon-link" :src="`/mail${$props.white ? '-white' : ''}.svg`" alt="email" :width="30"
        title="Email" />
    </a>
  </address>
</template>