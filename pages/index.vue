<script setup>
useSeoMobyHead(
  {
    title: 'Moby IT - Sofware Services',
    description: 'Digitizing businesses workflows for small to medium enterprises at predictable prices.'
  });
</script>
<template>
  <main>
    <Banner title="Lean Software Solutions" image-url="/img/fofos.jpg">
      <template #subtitle>
        <h4>Enhancing <abbr title="Small and Medium Enterprises"> SMEs</abbr>
          at <NuxtLink to="/services-and-pricing"> predictable prices.</NuxtLink>
        </h4>
        <h4>Your tech ally in a digital era.</h4>
      </template>
      <div style="padding: var(--gap-2);">
        <Button @clicked="() => navigateTo('/contact')">
          Contact Us
        </Button>
      </div>
    </Banner>
    <section>
      <article id="what-we-do" class="what-we-do">
        <h2>We provide</h2>
        <div>
          <Card minHeight="565px" max-width="390px">
            <template #header>
              <NuxtImg src="/icons/consulting_and_analysis.png" alt="communication" aria-hidden="true" :width="80" />
              <h4>Consulting & Analysis</h4>
            </template>
            <template #content>
              <ul>
                <li>
                  <em>You bring </em>an intricate business problem that could be digitized for cost-savings and/or
                  scaling profits.
                </li>
                <li><em>We bring </em>our analytical skills and and years of experience in digitizing business
                  workflows. We verify that there <span class="italic">is</span> space for a digital solution. If that's
                  the case, we structure a well-rounded, cost-efficient solution.</li>
                <li><em>You get </em> a documented strategic technical evaluation of your problems and its
                  cost-to-benefit
                  ratio.</li>
              </ul>
            </template>
          </Card>
          <Card max-width="390px" min-height="600px">
            <template #header>
              <NuxtImg src="/icons/design_and_development.png" alt="light bulb on" aria-hidden="true" :width="80" />
              <h4 class="title">Design & Development</h4>
            </template>
            <template #content>
              <ul style="margin-bottom: var(--gap-1);">
                <li><em>You bring</em> a specific business problem that can be solved digitally.
                </li>
                <li><em>We bring</em> our hands and minds in order to bring the above solution to life. Leveraging
                  our in-house design team and experience in working closely with SMEs, we deliver a hand-crafted
                  solution that exactly matches your needs and business model.</li>
                <li><em>You get</em> a digital product that addresses the problems, helps your company cut costs/scale
                  and reach its next milestones.</li>
              </ul>
            </template>
          </Card>
          <Card minHeight="565px" max-width="390px">
            <template #header>
              <NuxtImg src="/icons/development_support.png" alt="code-brackets" aria-hidden="true" :width="80" />
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
            <NuxtImg :width="200" :src="'/icons/nrb.svg'" style="filter: grayscale(1);"></NuxtImg>
          </NuxtLink>
        </div>
      </article>
    </section>
    <div>
      <ScrollToTop selector="#what-we-do, footer, .customers" />
    </div>
  </main>
</template>
<style scoped>
::root {
  margin: 0 var(--gap-1);
}

h2 {
  text-align: center;
  margin-bottom: var(--gap-2);
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
  margin-bottom: var(--gap-4);
}

.what-we-do header,
.customers header {
  text-align: center;
  margin-bottom: var(--gap-2);
}

.what-we-do>h4 {
  text-align: center;
  margin-bottom: var(--gap-4);
}

.what-we-do ul {
  padding-inline-start: var(--gap-1);
}
</style>