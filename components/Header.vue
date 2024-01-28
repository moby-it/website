
<template>
  <header>
    <NuxtLink id="site-id" to="/">
      <img src="/logo.png" alt="moby-it logo" width="150" height="34" />
    </NuxtLink>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services-and-pricing">Services & Pricing</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-us">About Us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
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

header:has(nav) {
  min-height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-2);
  gap: var(--gap-1);
  flex-wrap: wrap;
}

address {
  display: flex;
  gap: var(--gap-1);
}

header nav ul {
  font-family: "Aeonik Pro";
  flex: 1;
  display: flex;
  justify-content: center;
  gap: var(--gap-3);
}

nav a:hover {
  color: black;
  transition: color 0.5s ease;
}
</style>