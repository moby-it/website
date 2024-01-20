<script setup>
useHead({
  title: 'Team'
});
</script>
<template>
  <main>
    <h2>Meet the Team</h2>
    <article id="team">
      <article class="team-member">
        <NuxtImg src="/team/george.jpg" alt="George Spanos profile image":width="274" :height="274" />
        <section>
          <h4>George Spanos</h4>
          <h5>Founder/Software Engineer</h5>
          <aside>Obsessed with Software</aside>
        </section>
        <section>
          <a href="https://www.linkedin.com/in/george-spanos/" target="_blank">
            <NuxtImg src="/linkedin.svg" alt="linkedin icon" :width="30" />
          </a>
          <a href="https://github.com/George-Spanos" target="_blank">
            <NuxtImg src="/github-circle.svg" alt="github icon" :width="30" />
          </a>
        </section>
      </article>
      <article class="team-member">
        <NuxtImg src="/team/mado.jpg" alt="Mado Profile Picture" :width="274" :height="274" />
        <section>
          <h4>Mado Kallivoka</h4>
          <h5>Operations Manager</h5>
          <aside>Wears weird shoes</aside>
        </section>
        <section>
          <a href="https://www.linkedin.com/in/adamantia-kallivoka-112933a3/" target="_blank">
            <NuxtImg src="/linkedin.svg" alt="linkedin icon" :width="30" />
          </a>
        </section>
      </article>
      <article class="team-member">
        <NuxtImg src="/team/katerina.jpeg" alt="Katerina Profile Picture" :width="274" :height="274" />
        <section>
          <h4>Katerina Spatharou</h4>
          <h5>Designer</h5>
          <aside>Ghost</aside>
        </section>
        <section>
          <a href="https://www.linkedin.com/in/katerina-spatharou-1507991b8/" target="_blank">
            <NuxtImg src="/linkedin.svg" alt="linkedin icon" :width="30" />
          </a>
          <a href="https://github.com/katspatharou" target="_blank">
            <NuxtImg src="/github-circle.svg" alt="github icon" :width="30" />
          </a>
        </section>
      </article>
    </article>
    <NuxtImg src="/yay.png" alt="" />
  </main>
</template>
<style >
#team {
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: var(--gray);
  flex-wrap: wrap;
}

.team-member>img {
  object-fit: cover;
  border-radius: 2rem;
}
</style>