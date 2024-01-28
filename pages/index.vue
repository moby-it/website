<script setup>
useSeoMobyHead(
  {
    title: 'Moby IT - Sofware Services',
    description: 'Digitizing businesses workflows at predictable costs.'
  });
</script>
<template>
  <main>
    <section class="banner">
      <hgroup>
        <h1>
          Tailor-made Software Solutions
        </h1>
        <h4>Digitizing workflows for <abbr title="Small and Medium Enterprises"> SMEs</abbr> at predictable costs.</h4>
        <h4>Your tech ally in a digital era.</h4>
      </hgroup>
      <Button @clicked="() => navigateTo('/contact')">
        Contact Us
      </Button>
    </section>
    <section>
      <section class="what-we-do" aria-hidden="true">
        <h2>We provide</h2>

        <div>
          <Card :minHeight="'445px'">
            <template #header>
              <NuxtImg src="/icons/community.svg" alt="communication" aria-hidden="true" :width="80" />
              <h4>Consulting & Analysis</h4>
            </template>
            <template #content>
              <ul>
                <li>
                  <em>You bring </em>an intricate business problem that could be digitized for cost-savings and/or scaling
                  profits.
                </li>
                <li><em>We bring </em>our years of experience in digitizing business workflows across many domains. We
                  analyze your problem and structure a well-rounded, cost-efficient solution.</li>
                <li><em>You get </em>a functional specification document that describes several solutions to your
                  problems.</li>
              </ul>
            </template>
          </Card>
          <Card>
            <template #header>
              <NuxtImg src="/icons/light-bulb-on.svg" alt="light bulb on" aria-hidden="true" :width="80" />
              <h4 class="title">Design & Development</h4>
            </template>
            <template #content>
              <ul style="margin-bottom: var(--gap-1);">
                <li><em>You bring</em> a functional specification document of a specific business problem.</li>
                <li><em>We bring</em> our hands and minds in order to bring the above specification to life. We utilize
                  UX Driven Development and Lean Practices to provide the best bang for buck software in the market.</li>
                <li><em>You get</em> a digital platform that addresses the problems desribed in the functional
                  specification document.</li>
              </ul>
              <p style="font-style: italic;">This package is a natural sequence of the <em> Consulting & Analysis
                </em>package</p>
            </template>
          </Card>
          <Card :minHeight="'445px'">
            <template #header>
              <NuxtImg src="/icons/code-brackets-square.svg" alt="code-brackets" aria-hidden="true" :width="80" />
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
        <h4>Forget about unexpected costs. All of our services come at a <NuxtLink to="/services-and-pricing"> fixed montly price!
          </NuxtLink>
        </h4>
      </section>
      <section class="customers">
        <h2>Customers</h2>
        <div>
          <NuxtLink target="_blank" to="https://www.nrb.be/en/">
            <NuxtImg :width="200" :src="'/nrb.svg'" style="filter: grayscale(1);"></NuxtImg>
          </NuxtLink>
        </div>
      </section>
    </section>
    <div>
      <ScrollToTop :selector="'main > section:last-child'" />
    </div>
  </main>
</template>
<style scoped>
.banner {
  background-color: lightcoral;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  padding: var(--gap-3);
  gap: var(--gap-1);
}

.card ul {
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
}

.banner hgroup {
  max-width: 60%;
  margin-bottom: var(--gap-3);
}

a {
  color: var(--secondary);
}

hgroup h1 {
  margin-bottom: var(--gap-2);
}

@media screen and (max-width: 425px) {
  .banner {
    padding: var(--gap-2);
    padding-top: var(--gap-1);
    max-width: 40%;
  }
}

main>section:nth-child(2) {
  background-image: url("/background.png");
  background-size: cover;
  color: white;
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 4rem;
}

.customers>div,
.what-we-do>div {
  display: flex;
  flex: 1;
  gap: var(--gap-1);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--gap-3);
}
/* .customers { 
  background-color: white;
} */
.what-we-do h2,
.what-we-do h4,
.customers h2,
.customers h4 {
  text-align: center;
  margin-bottom: var(--gap-2);
}
</style>