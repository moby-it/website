<script setup lang="ts">
const isMobile = inject<ComputedRef<Boolean>>('isMobile');
</script>
<template>
  <article>
    <Banner title="It always starts with a story"></Banner>
    <section class="about-us">
      <section class="quote">
        <NuxtImg src="https://placehold.co/300x300" width="300" />
        <span>
          <p class="italic">
            Hello, my name is George Spanos, and I'm the driving force behind Moby IT.
          </p>
          <p class="italic">
            Programming is my hobby, and I feel blessed doing that for a job. Having studied Math, I'm a teacher at heart.
            Constantly learning new technologies and, through Moby IT, trying to cultivate a healthier and more inclusive
            work environment while providing top-notch software services.
          </p>
        </span>
      </section>
      <h2>About Me</h2>
      <p> Moby IT the embodiment of my efforts for trying create a company of highly automonous teams, that
        enjoy providing value to people. </p>
      <p class="italic">You don't need many people to make a difference. It's more about finding the right mix of people
        than bumping up the quantity.
      </p>
      <p>At the start of my career, I was blessed with incredibly insightful mentors and colleagues. They taught me how to
        work efficiently, while keeping a positive attitude about it. I believe it's my turn to do the same. You can read
        more about me over <a href="https://gspanos.tech" target="_parent">gspanos.tech</a>. </p>

      <h4 class="italic">&ldquo;After experiencing how a well-oiled machine works, it's tough to go back.&bdquo;</h4>

      <p>With a decade of experience in digitizing workflows for Enterprises of all scales, I believe I know how to
        cultivate an environment in which teams can provide high-value software without paying a high price. There
        are <em> millions of dollars wasted</em> annually on software projects that could've been saved for more efficient
        investments, with a higher ROI for everyone involved, if issues were foreseen earlier. I believe<em> most
          issues can be foreseen</em>.
      </p>
      <p>
        Moby IT works with <em> a network of experts</em>, which I have acquired through my career. Most of
        these people have over 13 years of experience in their respective fields. Through focus, discipline and
        dedication, we're able to provide quality services with predictable costs. We trust in our ability and experience
        to anticipate change enough, so that we can reflect it in our <NuxtLink to="/services-and-pricing#services">
          pricing
          model </NuxtLink>.
      </p>
    </section>
    <section class="values">
      <h2>Values</h2>
      <ul>
        <li>
          <em> Transparency</em>: A requirement when building trust, the most important ingredient of any successful
          collaboration.
        </li>
        <li>
          <em>Predictability</em>: No one wants to wake up to unexpected costs and side effects. For this:
          <ol>
            <li>
              We provide our services at fixed monthly prices, aligned with clearly defined, time-bound deliverables.
            </li>
            <li>
              We take full responsibility for any unforeseen challenges, ensuring our clients bear no unexpected burdens.
            </li>
          </ol>
        </li>
        <li>
          <em>Freedom of Choice</em>: We aim to be the preferred partner for businesses that align with our values and
          methods, focusing on quality rather than quantity. We enhance customer independence, ensuring that our
          collaboration is always a choice driven by value and mutual growth.
        </li>
        <li>
          <em>Personalization</em>: If you handpick your partners, you’re unique in your own manner. Every solution is as
          personalized as its collaborators’ relationships. We work inside the businesses and their problems, not around
          them.
        </li>
      </ul>
    </section>
    <div>
      <ScrollToTop selector=".about-us" />
    </div>
  </article>
</template>
<style scoped>
h2,
h3,
h4 {
  text-align: center;
  margin-top: var(--gap-2);
  margin-bottom: var(--gap-1);
}

.about-us,
.values {
  padding: 0 var(--gap-2);
}

.quote {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-1);
}

@media (width < 426px) {
  .quote {
    flex-direction: column;
    align-items: center;
  }
}

@media (width >=1024px) {

  .about-us,
  .values {
    max-width: 60%;
    margin: 0 auto var(--gap-1) auto;
  }
}
</style>