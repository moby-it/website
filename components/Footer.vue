
<template>
  <footer>
    <address>
      <a href="https://www.linkedin.com/company/moby-it/" target="_blank">
        <NuxtImg  src="/linkedin-white.svg" alt="linkedin icon" :width="30" />
      </a>
      <a href="https://github.com/moby-it" target="_blank">
        <NuxtImg  src="/github-circle-white.svg" alt="github icon" :width="30" />
      </a>
      <a href="mailto:contact@moby-it.com">contact@moby-it.com</a>
    </address>
    <p>© 2023 Moby IT. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  background-image: url("/footer.png");
  background-size: cover;
  padding: var(--gap-3) var(--gap-2);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--gap-1);
  align-items: center;
}

address,
address a,
p {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-1);

  height: 30px;
}

footer,
footer img,
footer a {
  color: white;
}

@media (width<=425px) {
  footer {
    flex-direction: column;
    align-items: center;
    gap: var(--gap-1);
  }
}
</style>