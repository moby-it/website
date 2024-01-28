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
        <h4>Digitizing workflows for small and medium enterprises at predictable costs.</h4>
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
          <Card>
            <template #header>
              <NuxtImg src="/icons/community.svg" alt="communication" aria-hidden="true" :width="80" />
              <h4>Consulting & Analysis</h4>
            </template>
            <template #content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </template>
          </Card>
          <Card>
            <template #header>
              <NuxtImg src="/icons/light-bulb-on.svg" alt="light bulb on" aria-hidden="true" :width="80" />
              <h4 class="title">Design & Development</h4>
            </template>
            <template #content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </template>
          </Card>
          <Card>
            <template #header>
              <NuxtImg src="/icons/code-brackets-square.svg" alt="code-brackets" aria-hidden="true" :width="80" />
              <h4 class="title">Development Support</h4>
            </template>
            <template #content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </template>
          </Card>
        </div>
      </section>
      <section class="what-we-value">
        <h2>We value</h2>
        <div>
          <Card>
            <template #header>
              <NuxtImg src="/icons/user-scan.svg" alt="user-target" aria-hidden="true" />
              <h4>Transparency</h4>
            </template>
            <template #content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </template>
          </Card>
          <Card>
            <template #header>
              <NuxtImg src="/icons/multi-bubble.svg" alt="chat-bubbles" aria-hidden="true" />
              <h4>Close Collaboration</h4>
            </template>
            <template #content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </template>
          </Card>
          <Card>
            <template #header>
              <NuxtImg src="/icons/packages.svg" alt="packaging" aria-hidden="true" />
              <h4>Working Iteratively</h4>
            </template>
            <template #content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </template>
          </Card>
          <Card>
            <template #header>
              <NuxtImg src="/icons/3d-bridge.svg" alt="bridge" aria-hidden="true" />
              <h4>Open-ended</h4>
            </template>
            <template #content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </template>
          </Card>
        </div>
      </section>
    </section>
    <div>
      <ScrollToTop :selector="'main > section:last-child'" />
    </div>
  </main>
</template>
<style>
.banner {
  background-color: lightcoral;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  padding: var(--gap-3);
  gap: var(--gap-1);
}

.banner hgroup {
  max-width: 60%;
  margin-bottom: var(--gap-3);
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

.what-we-value>div,
.what-we-do>div {
  display: flex;
  flex: 1;
  gap: var(--gap-1);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--gap-3);
}

.what-we-do h2,
.what-we-value h2 {
  text-align: center;
  margin-bottom: var(--gap-2);
}
</style>