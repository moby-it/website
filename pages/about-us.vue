<script setup lang="ts">
const isMobile = inject<ComputedRef<Boolean>>('isMobile');
</script>
<template>
  <article>
    <Banner title="It always starts with a story"></Banner>
    <section class="about-us">
      <section class="quote">
        <NuxtImg src="https://placeholder.co/300x300" width="300" />
        <span>
          <p class="italic">
            Hello, my name is George Spanos and I'm the face behind Moby IT.
          </p>
          <p class="italic">
            Programming is my hobby and I feel blessed doing that for a job. Having studied Math, I'm a teacher at heart.
            Constantly learning new technologies and trying to make the community better and more inclusive.
          </p>
        </span>
      </section>
      <h2>About Me</h2>
      <p> Moby IT the embodiment of my efforts for trying create a company of highly automonous units of people that
        enjoy providing value to people. </p>
      <p class="italic">You don't need much people to make a difference. It's more about fiding the right mix of people
        rather than straight quantity.
      </p>
      <p>At the start of my career I was blessed with increadibly insightful mentors as colegues. They taught me how to
        work efficiently, while keeping a positive attitude about it. I believe it's my turn to do the same. </p>

      <h4>After experiencing how a well-oiled machine works, it's tough to go back.</h4>

      <p>Through my 10 year experience in digitizing workflows for Enterprises of all scales, I believe I know how to
        cultivate such an environment in which teams can provides high value software without the high price. There are
        <em> millions of dollars wasted</em> yearly on software project that could've been saved for more efficient
        investments, with higher ROI for everyone involved, if issues were forseen earlier. I believe most issues
        <em>can</em> be forseen.
      </p>
      <p>Moby IT works with an <em> extensive network of experts</em>, which I have aquired through my career. Most of
        these people have over 13 years of experience in their respective fields. Through focus, discipline and
        dedication, we're able to provide quality services with predictable costs. We trust in our ability and experience
        to anticipate change enough, so that we reflect it on our <NuxtLink to="/services-and-pricing">pricing
          model </NuxtLink> .</p>
    </section>
    <section class="values">
      <h2>Values</h2>
      <ul>
        <li>
          <em>Transparency</em>: A requirement when building <em> trust</em>, the most important ingredient of any
          successful collaboration.
        </li>
        <li>
          <em>Predictability</em>: No one wants to wake up to unexpected costs and side-effects. For this we:
          <ol>
            <li>
              Provide our services at a fixed monthly prices, and
            </li>
            <li>
              We take full responsibility for any unforeseen challenges.
            </li>
          </ol>
        </li>
        <li>
          <em>Freedom of Choice</em>: We aim to be the preferred partner for businesses that align with our values and
          methods, focusing on quality matches rather than quantity. We enhance customer independence, ensuring that our
          collaboration is always a choice driven by value and mutual growth.
        </li>
        <li>
          <em>Personalization</em>: If you hand pick your partners, you’re unique in your own manner. Every
          solution is as personalized as its collaborators’ relationship. We work inside the businesses and their
          problems, not around them.
        </li>
      </ul>
    </section>
    <section class="team">
      <h2>Our Core Team</h2>
      <section class="members">
        <section class="member">
          <NuxtImg src="/team/george.jpg" width="200" height="200" />
          <small>George Spanos, Software Engineer / Founder</small>
        </section>
        <section class="member">
          <NuxtImg src="/team/katerina.jpeg" width="200" height="200" />
          <small>Katerina Spatharou, UI/UX Designer</small>
        </section>
      </section>
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

.quote {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-1);
}


.about-us>p,
.values,
.quote {
  max-width: 60%;
  font-size: larger;
  margin: 0 auto var(--gap-1) auto;
}

.members {
  display: flex;
  justify-content: center;
  gap: var(--gap-2);
  margin-bottom: var(--gap-2);
}

.member {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member img {
  border-radius: 12px;
}

.member p {
  font-weight: 300;
}

@media (width < 426px) {
  .quote {
    flex-direction: column;
    align-items: center;
  }
}
</style>