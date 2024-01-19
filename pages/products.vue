<script setup>

useHead({
  title: 'Products'
});

</script>
<template>
  <main>
    <h2>Products We Made</h2>
    <article>
      <section class="products">
        <article class="product">
          <header>
            <h4>Play Poker Odds</h4>
            <p class="description">
              Guess your winning odds in a given Texas Hold'em situation. No
              bets, just fun.
            </p>
          </header>
          <section class="metadata">
            <ul>
              <li>Angular</li>
              <li>Express</li>
              <li>Docker</li>
            </ul>
            <ul class="links">
              <li>
                <a href="https://playpokerodds.com/" target="_blank" title="website">
                  <img src="/link.svg" alt="" width="30" />
                </a>
              </li>
            </ul>
          </section>
        </article>
        <article class="product">
          <header>
            <h4>Scrum Poker Planning</h4>
            <p class="description">User Friendly, Open Source, Free Forever.</p>
          </header>
          <section class="metadata">
            <ul>
              <li>SolidJS</li>
              <li>Golang</li>
            </ul>
            <ul class="links">
              <li>
                <a href="https://github.com/moby-it/planning-poker" target="_blank" title="Github">
                  <img src="/github-circle.svg" alt="" width="30" />
                </a>
              </li>
              <li>
                <a href="https://poker-planning.net/" target="_blank" title="website">
                  <img src="/link.svg" alt="" width="30" />
                </a>
              </li>
            </ul>
          </section>
        </article>
      </section>
      <article class="labs">
        <header>
          <h3>Playgrounds Projects</h3>
        </header>
        <article class="product">
          <header>
            <h4>Boochat</h4>
            <p class="description">Meet and Chat Application</p>
          </header>
          <section class="metadata">
            <ul>
              <li>Flutter</li>
              <li>Nestjs</li>
              <li>Event Storming</li>
              <li>DDD</li>
            </ul>
            <ul class="links">
              <li>
                <a href="https://github.com/moby-it/boochat-server" target="_blank" title="Github">
                  <img src="/github-circle.svg" alt="" width="30" />
                </a>
              </li>
            </ul>
          </section>
        </article>
      </article>
    </article>
  </main>
</template>

<style>
main>h2 {
  padding: 1rem;
  text-align: center;
}

h3 {
  text-align: center;
}

.products {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 50px;
  padding: 1rem;
  max-width: 1150px;
  flex-wrap: wrap;
}

.product {
  background-color: var(--light--bg);
  border-radius: 2rem;
  min-height: 192px;
  display: flex;
  width: 556px;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.75rem;
  box-sizing: border-box;
}

.product header {
  color: var(--gray);
}

.metadata {
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.metadata>ul:first-child {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.metadata>ul:first-child li {
  padding: 6px 12px;
  font-size: smaller;
  color: black;
  background-color: var(--secondary);
  border-radius: 2rem;
}

.links {
  display: flex;
  gap: 1rem;
}

.labs {
  color: white;
  margin: 2rem;
}

.labs header {
  margin-bottom: 1rem;
}

@media (width <=1024px) {
  footer {
    padding: 1rem;
  }
}

@media (width <=600px) {
  .product {
    width: auto;
  }
}
</style>