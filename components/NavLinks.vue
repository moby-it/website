<script setup>
defineEmits(['linkClicked']);
</script>
<template>
  <ul class="nav-links">
    <li>
      <NuxtLink active-class="active" to="/" @click="(e) => $emit('linkClicked', e)">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink active-class="active" to="/services-and-pricing" @click="() => $emit('linkClicked', e)">Services & Pricing
      </NuxtLink>
    </li>
    <li>
      <NuxtLink active-class="active" to="/about-us" @click="() => $emit('linkClicked', e)">About Us</NuxtLink>
    </li>
    <li>
      <NuxtLink active-class="active" to="https://gspanos.tech" target="_blank" @click="() => $emit('linkClicked', e)">Blog</NuxtLink>
    </li>
    <li>
      <NuxtLink active-class="active" to="/contact" @click="() => $emit('linkClicked', e)">Contact</NuxtLink>
    </li>
  </ul>
</template>