
<template>
  <footer>
    <nav>
      <h3>Company</h3>
      <NavLinks></NavLinks>
    </nav>
    <section class="services">
      <h3>Professional Services</h3>
      <ul>
        <li>
          <NuxtLink to="/services-and-pricing#consulting-and-analysis">Consulting & Analysis</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services-and-pricing#design-and-development">Design & Development</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services-and-pricing#development-support">Development Support</NuxtLink>
        </li>
      </ul>
    </section>
    <section class="partners">
      <h3>Partners</h3>
      <ul>
        <li>
          <NuxtLink target="_blank" to="https://www.linkedin.com/in/evangelia-litsa-mitsopoulou-5765135/">Evangelia
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section class="social">
      <h3>Links</h3>
      <Address white />
    </section>
    <p>© 2023 Moby IT. All rights reserved.</p>
  </footer>
</template>

<style scoped>
ul {
  list-style: none;
  padding-inline-start: 0;
}

footer {
  display: grid;
  grid-template-areas:
    "nav services partners links"
    "copyrights copyrights copyrights copyrights"
  ;
  background-image: url("/footer.png");
  background-size: cover;
  margin-top: var(--gap-3);
  padding: var(--gap-3) var(--gap-2);
  gap: var(--gap-1);
}

.services {
  grid-area: services;
  display: flex;
  flex-direction: column;
}

.partners {
  grid-area: partners;

}

.social {
  grid-area: links;
  display: flex;
  flex-direction: column;
}

footer nav {
  grid-area: nav;
  display: flex;
  flex-direction: column;
}

footer address {
  display: flex;
  gap: var(--gap-1);
}

footer h3 {
  color: var(--secondary);
  margin-bottom: var(--gap-1);
}

p {
  grid-area: copyrights;
  color: white;
  text-align: center;
}

a {
  color: white;
}

ul {
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
}

@media (width <=500px) {
  footer {
    grid-template-areas:
      "nav services"
      "partners links"
      "copyrights copyrights"
    ;
    gap: var(--gap-3);
  }

  .social,
  .services {
    text-align: right;
    align-items: flex-end;
  }
}
</style>