<script setup lang="ts">
export type Service = {
  title: string;
  imgUrl: string;
  id: string;
  price: string;
};
const services: Service[] = [
  {
    title: 'Consulting & Analysis',
    imgUrl: 'https://placehold.co/150x150',
    id: 'consulting-and-analysis',
    price: '2.000'
  },
  {
    title: 'Design & Development',
    imgUrl: 'https://placehold.co/150x150',
    id: 'design-and-development',
    price: '8.000'

  },
  {
    title: 'Development Support',
    imgUrl: 'https://placehold.co/150x150',
    id: 'development-support',
    price: '6.000'
  },
];
const discountPrices: string[] = [
  '1.500',
  '6.000',
  '5.000'
];
const prices = services.map(s => s.price);
const model = defineModel<boolean>();
</script>
<template>
  <article>
    <Banner title="Services at Predicable Prices">
      <template #subtitle>
        <h4>
          In our efforts to simplify communication and boilerplate, we provide each of our services at a
          <NuxtLink to="#services"> fixed montly price, regardless of scope </NuxtLink>.
          We communicate exclusively through timeboxed deliverables and deadlines, focusing on what's immidiate and of
          value.
        </h4>
      </template>
    </Banner>
    <section class="services" id="services">
      <h2>Our Services</h2>
      <Card>
        <template #header>
          <h4>Purchasing Power Parity discounts</h4>
        </template>
        <template #content>
          <aside>
            <p>We noticed you're coming from Country. We want to help make our services accessible to everyone business
              around
              the world and we provide Purchasing Power Parity discounts.</p>
            <section class="regional-pricing">
              <label for="regional-pricing">Activate regional pricing</label>
              <Toggle v-model="model" id="regional-pricing"></Toggle>
            </section>
          </aside>
        </template>
      </Card>

      <section class="service-badges">
        <ServiceBadge v-for="(service, index) of services" :service="service" :discount="!!model"
          :discount-price="discountPrices[index]">
        </ServiceBadge>
      </section>
      <section class="service-descriptions">
        <section id="consulting-and-analysis">
          <hgroup>
            <h2>Consulting & Analysis</h2>
            <p class="italic">Not all problems are solved with software. We're here to help you figure this out.
            </p>
          </hgroup>
          <section class="description">
            <section>
              <h4>Problem Space</h4>
              <p>Are you a <em>business owner</em> or <em>operations manager</em>? Have you <em>identified bottlenecks in
                  your processes?</em>
                Or maybe you are ready to take your business to the next step and don't know how. In a digital era, every
                business managers has wonder weather a "program" will help them <em> cut costs and/or scale </em> at some
                point. In case you're wondering, we're here for you.</p>
            </section>
            <section>
              <h4>The process</h4>
              <p>
                With this <em> low-cost package</em> you have the ability to explore any possible digital solutions
                with us, leveraging our multi-year experience in digitizing business workflows. Below are
                some indicative steps of the process:
              </p>
              <ol>
                <li>
                  We <em> extract mandatory information </em>through a series of meetings. A total of 3-4 "casual" chats
                  is usually
                  enough. During the meeting we typically require some business workflow description diagrams.
                </li>
                <li>
                  We go into a <em>deep think</em> - having your needs in mind, we brainstorm around your issue and
                  evaluate how any digital solution could help your business scale, cut costs, achieve its goals, or
                  combination
                  thereof.
                </li>
              </ol>
            </section>
            <section>
              <h4>Outcome</h4>
              <p>You get a <em> Functional Specification Document (FSD)</em> that thoroughly describes the proposed
                solution(s). Alongside the FSD, we provide a <em> timeframe </em>in which we could deliver the proposed
                solution, if requested so. </p>
              <p>This package lives by our values of <em> open-ended relations</em> and <em>partnerships driven by
                  value</em>. You're free to choose weather you proceed with the implementation immidiately, or
                postpone it until the investment makes sense.
                At the end of the day, you get Tech Consulting at affordable prices, while still having the option to
                immidiately proceed with any action.</p>
              <em>
                Price:
                <Price :has-discount="!!model" :original-price="prices[0]" :discounted-price="discountPrices[0]" />
              </em>
            </section>
          </section>
          <div></div>
        </section>
        <section id="design-and-development">
          <section class="description">

            <h2>Design & Development</h2>
            <section>
              <h4>Problem Space</h4>
              <p>Are you an <em> entrepreneur gearing up to raise capital</em> or already in possession of it, now seeking
                technical
                co-founders? Or perhaps you're facing a business challenge that requires a <em> well-defined digital
                  solution?</em>
              </p>
              <p>Our Design & Development package is tailored specifically for you.</p>
              <p class="italic">
                This package follows naturally from our Consulting & Analysis package, catering to entrepreneurs, business
                owners, and operations managers who have a clear vision of the digital product their business needs.
              </p>
            </section>
            <section>
              <h4>The process</h4>
              <p>When purchasing this package, you get a unit of <em> 3 people dedicated to your project </em>- an
                analyst, a designer and a developer, for a specific duration. This unit operates autonomously within Moby
                IT and is responsible of addressing any possible need that might arise during the Product Development
                Cycle. Picture it as your own compact, high-functioning company. Every member <em> leverages modern
                  technology stacks</em>, Cloud infrastructure and efficient communcation methodologies, in order to
                deliver effective products at an impressive pace.</p>

              <p class="italic">As mentioned above, the unit is dedicated to you for a specific duration. This duration is
                agreed upon signing, impling any cost thereof, since each month has a fixed price. This makes sure that
                you know what you'll be billed ahead of time, eliminating unexpected costs that are typically associated
                with software projects. In Moby IT, we take full responsibility for any unforeseen challenges.
              </p>
            </section>
            <section>
              <h4>Outcome</h4>
              <p>You will receive a comprehensive software platform tailored to your needs. Additionally, we provide
                insights into maintenance and future scalability of the software, equipping you with knowledge for
                long-term success.</p>
              <em>Price:
                <Price :has-discount="!!model" :original-price="prices[1]" :discounted-price="discountPrices[1]" />
              </em>
            </section>
          </section>
          <div></div>
        </section>
        <section id="development-support">
          <section class="description">

            <h2>Development Support </h2>
            <section>
              <h4>Problem Space</h4>
              <p></p>
            </section>
            <section>
              <h4>The process</h4>
              <p></p>
            </section>
            <section>
              <h4>Outcome</h4>
              <p></p>
              <em>Price:
                <Price :has-discount="!!model" :original-price="prices[2]" :discounted-price="discountPrices[2]" />
              </em>
            </section>
          </section>
          <div></div>
        </section>
      </section>
    </section>
    <div>
      <ScrollToTop selector=".services" />
    </div>
  </article>
</template>
<style scoped>
.services {
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
}

.services aside {
  text-align: center;
}

.services .card {
  align-self: center;
}

.services aside p {
  margin-bottom: var(--gap-1);
}

.service-badges {
  display: flex;
  gap: var(--gap-3);
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}

.services>section {
  padding: 0 var(--gap-3);
}

.service-descriptions {
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
  margin: var(--gap-3) 0;
}

.service-descriptions>section {
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--gap-2);
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gap-2);
  grid-template-areas:
    "title image"
    "description image"
  ;
}

.service-descriptions #design-and-development {
  grid-template-areas:
    "image title"
    "image description"
}

.description {
  grid-area: description;
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
}

#design-and-development>.description {
  padding-right: var(--gap-1);
}

.description h4 {
  margin-bottom: var(--gap-1);
}

.service-descriptions>section>h2 {
  grid-area: title;
}

.service-descriptions>section>div {
  grid-area: image;
  background-image: url('https://placehold.co/780x780');
  background-size: cover;
}

h2 {
  text-align: center;
}

.regional-pricing {
  display: flex;
  gap: var(--gap-1);
  align-items: center;
  justify-content: center;
}

@media (width <=768px) {

  .service-descriptions>section,
  .service-descriptions #design-and-development {
    grid-template-areas:
      "title"
      "description"
      "image"
    ;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr;
    justify-content: center;
  }
}
</style>
