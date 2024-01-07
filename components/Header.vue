
<template>
  <header>
    <NuxtLink id="site-id" to="/">
      <NuxtImg src="/logo.png" alt="moby-it logo" :width="150" :height="34" />
    </NuxtLink>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/team">Team</NuxtLink>
        </li>
      </ul>
    </nav>
    <address>
      <a href="https://www.linkedin.com/company/moby-it" target="_blank">
        <NuxtImg class="icon-link" src="/linkedin.svg" alt="linkedin-icon" />
      </a>
      <a href="https://github.com/moby-it" target="_blank">
        <NuxtImg class="icon-link" src="/github-circle.svg" alt="github-icon" />
      </a>
      <a href="mailto:contact@moby-it.com" target="_blank">
        <NuxtImg class="icon-link" src="/mail.svg" alt="email" />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  gap: 1rem;
  flex-wrap: wrap;
}

address {
  display: flex;
  gap: 0.75rem;
}

header nav ul {
  font-family: "Aeonik Pro";
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

nav a:hover {
  color: black;
  transition: color 0.5s ease;
}

@media (width <=768px) {
  body>header {
    flex-direction: column;
    padding: 20px;
    position: relative;
  }

  header nav ul {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}
</style>