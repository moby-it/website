<script setup>
useSeoMobyHead(
  {
    title: 'Moby IT - Sofware Services',
    description: 'Digitizing businesses workflows for small to medium enterprises at predictable prices.'
  });
</script>
<template>
  <main>
    <Banner title="Tailor-made <br> Software Solutions">
      <template #subtitle>
        <h5>Digitizing workflows for <abbr title="Small and Medium Enterprises"> SMEs</abbr>
          at <NuxtLink to="/services-and-pricing"> predictable prices.</NuxtLink>
        </h5>
        <h5>Your tech ally in a digital era.</h5>
      </template>
      <Button @clicked="() => navigateTo('/contact')">
        Contact Us
      </Button>
    </Banner>
    <section>
      <article id="what-we-do" class="what-we-do" aria-hidden="true">
        <h2>We provide</h2>
        <div>
          <Card minHeight="565px" max-width="390px">
            <template #header>
              <NuxtImg src="/icons/consulting.svg" alt="communication" aria-hidden="true" :width="80" />
              <h4>Consulting & Analysis</h4>
            </template>
            <template #content>
              <ul>
                <li>
                  <em>You bring </em>an intricate business problem that could be digitized for cost-savings and/or
                  scaling
                  profits.
                </li>
                <li><em>We bring </em>our analytical skills and and years of experience in digitizing business
                  workflows. We verify that there <span class="italic">is</span> space for a digital solution. If that's
                  the case, we structure a well-rounded, cost-efficient solution in the form of a <em>Functional
                    Specification Document </em>.</li>
                <li><em>You get </em> a documented strategic technical evaluation of your problems and its cost-to-benefit
                  ratio</li>
              </ul>
            </template>
          </Card>
          <Card max-width="390px" min-height="600px">
            <template #header>
              <NuxtImg src="/icons/design-and-development.svg" alt="light bulb on" aria-hidden="true" :width="80" />
              <h4 class="title">Design & Development</h4>
            </template>
            <template #content>
              <ul style="margin-bottom: var(--gap-1);">
                <li><em>You bring</em> a Functional Specification Document of a specific business problem.
                </li>
                <li><em>We bring</em> our hands and minds in order to bring the above specification to life. Leveraging
                  our strong in-house design team and experience in working closely with SMEs, we deliver a hand-crafted
                  solution that exactly matches your needs and business model.</li>
                <li><em>You get</em> a digital product that addresses the problems described in the functional
                  specification document.</li>
              </ul>
            </template>
          </Card>
          <Card minHeight="565px" max-width="390px">
            <template #header>
              <NuxtImg src="/icons/staffing.svg" alt="code-brackets" aria-hidden="true" :width="80" />
              <h4 class="title">Development Support</h4>
            </template>
            <template #content>
              <ul>
                <li>
                  <em>You bring </em> a developer team that's tackles a tough deadline.
                </li>
                <li><em>We bring </em>our years of experience in staffing enteprise software teams and delivering under
                  pressure.</li>
                <li><em>You get </em>competent software craftsmanship at affordable prices.</li>
              </ul>
            </template>
          </Card>
        </div>
        <h4>All of our services come at a <NuxtLink to="/services-and-pricing"> fixed montly price!
          </NuxtLink>
        </h4>
      </article>
      <article class="customers">
        <h2>Customers</h2>
        <div>
          <NuxtLink target="_blank" to="https://www.nrb.be/en/">
            <NuxtImg :width="200" :src="'/nrb.svg'" style="filter: grayscale(1);"></NuxtImg>
          </NuxtLink>
        </div>
      </article>
    </section>
    <div>
      <ScrollToTop selector="#what-we-do" />
    </div>
  </main>
</template>
<style scoped>
h2 {
  text-align: center;
}

.card ul {
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
}

.customers>div,
.what-we-do>div {
  display: flex;
  flex: 1;
  gap: var(--gap-2);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--gap-3);
}

.what-we-do header,
.customers header {
  text-align: center;
  margin-bottom: var(--gap-2);
}

.what-we-do>h4 {
  text-align: center;
  margin-bottom: var(--gap-3);
}
</style>