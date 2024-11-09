<script setup>
useSeoMobyHead({
  title: "Moby IT - Software Reimagined",
  description:
    "Moby IT is a hub of designers, developers and product managers, with the single goal of creating joyful digital experiences.",
});
</script>
<template>
  <main class="min-h-screen flex flex-col items-center justify-center px-6 lg:px-24">
    <UCard class="my-2">
      <template #header>
        <h1 class="text-center text-2xl">Moby IT - George Spano</h1>
      </template>
      <section class="bg-light max-w-2xl">
        <NuxtImg class="float-left self-start mr-6 mb-2 rounded-md shadow-md shadow-black w-28 md:w-52"
          src="/img/george.jpg" preload />

        <section>
          <header class="lg:text-lg">
            Hello! I'm George Spanos, the face behind Moby IT.
          </header>
          <p class="my-2 font-body text-sm lg:text-base">
            Over the past 10 years, I've been providing software services to
            enterprises, primarily through developing software and managing
            teams, both in Greece and the EU.
          </p>
          <p class="my-2 font-body text-sm lg:text-base">
            Through Moby IT, I'm trying to reinvent myself in the digital age,
            both as a professional and as a human being. My wish is to build a
            team of people that do care about creating products that provide
            sociocultural value.
          </p>
          <p class="my-2 font-body text-sm lg:text-base">
            I'm still very much in my exploratory phase. If you'd like to learn
            more about me, you can check out my blog at
            <a class="text-primary" href="https://gspanos.tech" target="_blank">gspanos.tech</a> or directly reach out
            at <span class="italic">gspanos[at]moby-it[dot]com.</span>
          </p>
        </section>
      </section>
    </UCard>
  </main>
</template>
<style scoped>
main {
  background-size: cover;
  background-position: left;
  background-image: url(/img/fofos.jpg);
}
</style>
