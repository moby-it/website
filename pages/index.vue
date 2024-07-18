<script setup>
useSeoMobyHead({
  title: "Moby IT - Sofware Services",
  description:
    "Digitizing businesses workflows for small to medium enterprises at predictable prices.",
});
</script>
<template>
  <main>
    <Banner title="Ideate.Design.Code." image-url="/img/fofos.jpg">
      <template #subtitle>
        <h4>Next-Gen Software Products</h4>
      </template>
    </Banner>
    <section class="tagline">
      <h4>
        Moby IT is a hub of creatives and coders, with the single goal of
        creating joyful digital experiences.
      </h4>
    </section>
    <section>
      <article>
        <header>
          <h4>Our Products</h4>
        </header>
      </article>
      <article class="products">
        <div>
          <Card max-width="390px">
            <template #header>
              <NuxtImg src="/icons/consulting_and_analysis.png" alt="communication" aria-hidden="true" :width="80" />
              <h3>Learning</h3>
            </template>
            <template #content>
              <p>
                We're always exploring; exploring new tech stacks, new design
                frameworks and systems, new ways of working.
              </p>
              <p>And, ultimately, new ways of thinking.</p>
              <p>We wear many hats.</p>
            </template>
          </Card>
          <Card max-width="390px">
            <template #header>
              <NuxtImg src="/icons/design_and_development.png" alt="light bulb on" aria-hidden="true" :width="80" />
              <h3 class="title">Creating</h3>
            </template>
            <template #content>
              We want to apply what we learn. We test our ideas in production.
              We don't like having things in the lab for too long.
            </template>
          </Card>
          <Card max-width="390px">
            <template #header>
              <NuxtImg src="/icons/development_support.png" alt="code-brackets" aria-hidden="true" :width="80" />
              <h3 class="title">Sharing</h3>
            </template>
            <template #content>
              We aim to open source as much as possible: our code, our designs, and our processes. Moby IT consists of
              tech professionals with diverse skills who already have full-time jobs, collaborating in their spare time
              to create innovative solutions.
            </template>
          </Card>
        </div>
      </article>
    </section>
    <div>
      <ScrollToTop selector="#what-we-do, footer, .customers" />
    </div>
  </main>
</template>
<style>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: left;
  background-image: url(/img/fofos.jpg);
}
</style>
