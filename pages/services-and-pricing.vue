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
    price: '8.500'

  },
  {
    title: 'Development Support',
    imgUrl: 'https://placehold.co/150x150',
    id: 'development-support',
    price: '6.200'
  },
];
const discountPrices: string[] = [
  '1.500',
  '6.000',
  '5.000'
];
const country = ref('Greece');
const prices = services.map(s => s.price);
const model = defineModel<boolean>();
</script>
<template>
  <article>
    <Banner title="Services at Predictable Prices">
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
      <Card max-width="65vw">
        <template #header>
          <h4>Purchasing Power Parity discounts</h4>
        </template>
        <template #content>
          <aside>
            <p>We noticed you're coming from {{ country }}. We want to help make our services accessible to everyone
              business
              around the world and we provide Purchasing Power Parity discounts.</p>
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
            <p class="italic">Not all problems are solved with software. We're here to help you identify those who do.
            </p>
          </hgroup>
          <section class="description">
            <section>
              <h4>Problem Space</h4>
              <p>Are you a <em>business owner</em> or <em>operations manager</em> navigating complexities in a digital
                ear? If you've <em> identified bottlenecks in your operations</em> or are contemplating the next
                steps for scaling your business, Moby IT is here to guide you. In a digital era, every business manager
                has wondered whether a "program" will help them <em> cut costs and/or scale </em> at some point.</p>
            </section>
            <section>
              <h4>The process</h4>
              <p>
                With this <em> low-cost package</em> you have the ability to explore any possible digital solutions
                with us, leveraging our multi-year experience in digitizing business workflows. Our approach is
                straightforward yet thorough, ensuring we fully understand your needs:
              </p>
              <ol>
                <li>
                  <em> Initial Discussions </em>: We start with a series of 3-4 meetings, where we delve into the
                  specifics of your
                  business workflows. These 'casual chats' are crucial for us to gather essential information and
                  comprehend the nuances of your operations.
                </li>
                <li>
                  <em> In-Depth Analysis</em>: Armed with this knowledge, our team engages in a deep analysis. We consider
                  various digital solutions, weighing their potential to streamline your processes, cut costs, or drive
                  your business towards its next strategic goal.
                </li>
              </ol>
            </section>
            <section>
              <h4>Outcome</h4>
              <p>At the conclusion of our analysis, you receive:</p>
              <ul>
                <li>
                  <em> Functional Specification Document (FSD)</em>: This document provides a detailed description of the
                  proposed solution(s) from a business perspective, tailored specifically to your needs.
                </li>
                <li>
                  <em>Timeframe for Delivery</em>: Alongside the FSD, we offer a clear timeline for when we could
                  implement the solution, should you choose to proceed with us.
                </li>
              </ul>
              <p>This package is grounded in our values of <em>open-ended relationships</em>, <em>transparency</em> and
                <em>value-driven partnerships</em>. It offers you the flexibility to decide when to move forward with
                implementation, ensuring that you receive not just technical consulting, but a strategic asset at an
                affordable price.
              </p>
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
                This package is a natural follow-up of the Consulting & Analysis package, catering to entrepreneurs,
                business
                owners, and operations managers who have a clear vision of the digital product their business needs.
              </p>
            </section>
            <section>
              <h4>The process</h4>
              <p>When purchasing this package, you get a unit of <em> 3 people dedicated to your project </em>- an
                analyst, a designer and a developer. This unit operates autonomously within Moby IT and is responsible of
                addressing any possible need that might arise during the Product Development Cycle. Picture it as your own
                compact, high-functioning company. Every member <em> leverages modern technology stacks, Cloud
                  infrastructure and efficient communcation methodologies</em>, in order to deliver effective products at
                an
                impressive pace.</p>

              <p class="italic">As mentioned above, the unit is dedicated to you for a specific duration. This duration is
                agreed upon signing, impling any cost thereof, since each month has a fixed price. This makes sure that
                you know what you'll be billed ahead of time, eliminating unexpected costs that are typically associated
                with software projects. In Moby IT, <em> we take full responsibility for any unforeseen challenges</em>.
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
            <hgroup>
              <h2>Development Support </h2>
              <p class="italic">Providing the right person for the job.</p>
            </hgroup>
            <section>
              <h4>Problem Space</h4>
              <p>Are you an applications director facing tough deadlines? Or a Project
                Manager that is constantly feeling pressure by the Product's Department pace. In either of those
                cases, we have the experience to help you. Our team, with an average of 10 years in the field, is
                well-versed in collaborating with Enterprise Software Teams.</p>
            </section>
            <section>
              <h4>The process</h4>
              <p>Choosing our service means adding dedicated and skilled software craftsmanship to your projects. Our
                engineers have a deep understanding of the web platform and its components, and they typically specialize
                in one or two key tools. Our areas of technical expertise include:</p>
              <ul>
                <li><em>Programming Languages:</em> JavaScript, TypeScript, Golang</li>
                <li><em>Front End: </em>Angular, React, VueJS and VanillaJS</li>
                <li><em>Backend End: </em>Node, Deno, Echo, Chi and Gin</li>
                <li><em>Databases: </em>Postgres, MySQL, SQL Server, MongoDB</li>
              </ul>
              <p>We understand that much of software out there is primarily idiosyncratic and usually a matter of taste.
                Our team takes pride in being maliable enough to match any idiosyncracies inside your team and speak out
                when necessary. We've learnt to work based on extensive code reviews, testing and documentation as part of
                our daily routine as engineers. Our goal here is to blend in rather than stand out.</p>
            </section>
            <section>
              <h4>Outcome</h4>
              <p>By integrating Moby IT's expertise into your team, you'll see immediate improvements in meeting project
                timelines and enhancing overall project quality. Our engineers are quite fast on onboardings - usually
                ~one month in really big projects - and, by our metrics, we generally work at a relatively fast pace.
              </p>
              <p>
                <em> Featured Testimonials:</em>
              </p>
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
  gap: var(--gap-3);
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

hgroup {
  text-align: center;
}

.description h4 {
  margin-bottom: var(--gap-1);
}

.service-descriptions>section>h2 {
  grid-area: title;
}

.service-descriptions>section>div {
  grid-area: image;
  background-image: url('https://placehold.co/800x800');
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
