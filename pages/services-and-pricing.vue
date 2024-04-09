<script setup lang="ts">
import type { Service as Svc } from '~/utils/prices';
export type Service = {
  title: string;
  imgUrl: string;
  imgAlt: string;
  id: string;
  cost: number;
};
const { data: priceData } = await useFetch('/api/prices', {
  pick: ['defaultPrices', 'country', 'regionalPrices']
});
const defaultPrices: ComputedRef<Service[]> = computed(() =>
  (priceData.value?.defaultPrices as Svc[])?.map(transformSvcToService) || []);
const regionalPrices: ComputedRef<Service[]> = computed(() =>
  (priceData.value?.regionalPrices as Svc[])?.map(transformSvcToService) || []);

const country = computed(() => priceData.value?.country);
const model = defineModel<boolean>();

function transformSvcToService(scv: Svc, idx: number): Service {
  return {
    title: scv.Service_Name,
    cost: scv.Cost,
    id: getIdFromIdx(idx),
    imgAlt: getImgAltFromIdx(idx),
    imgUrl: getImgFromIdx(idx),
  };
};

function getIdFromIdx(idx: number): string {
  if (idx === 0) return 'consulting-and-analysis';
  if (idx === 1) return 'design-and-development';
  if (idx === 2) return 'development-support';
  return '';
}
function getImgFromIdx(idx: number): string {
  if (idx === 0) return '/icons/consulting_and_analysis.png';
  if (idx === 1) return '/icons/design_and_development.png';
  if (idx === 2) return '/icons/development_support.png';
  return '';
}
function getImgAltFromIdx(idx: number): string {
  if (idx === 0) return 'Consulting and Analysis Icon';
  if (idx === 1) return 'Design and Development Icon';
  if (idx === 2) return 'Development Support Icons';
  return '';
}
</script>
<template>
  <article>
    <Banner title="No Hidden Costs" image-url="/img/krufoalepu.jpg">
      <template #subtitle>
        <h4 style="margin-bottom: var(--gap-2);">We provide each of our services at a <NuxtLink to="#services"> fixed
            montly price</NuxtLink>.</h4>
        <h4>Every contract is tailored to time-bound deliverables and clear deadlines, ensuring no hidden costs. We
          shoulder any unforeseen expenses, guaranteeing you peace of mind and financial predictability from start to
          finish.</h4>
      </template>
    </Banner>
    <section class="services" id="services">
      <h2>Our Services</h2>
      <Card max-width="65vw" v-if="regionalPrices.length">
        <template #header>
          <h4>We noticed you're coming from {{ country }}.</h4>
        </template>
        <template #content>
          <aside>
            <p> In our efforts to make our services accessible to every business around the world, we provide <em>
                Purchasing Power Parity discounts</em>.</p>
            <section class="regional-pricing">
              <label for="regional-pricing"><em> Activate regional pricing</em></label>
              <Toggle v-model="model" id="regional-pricing"></Toggle>
            </section>
          </aside>
        </template>
      </Card>

      <section class="service-badges">
        <ServiceBadge v-for="(service, index) of defaultPrices" :service="service" :discount="!!model"
          :discount-price="regionalPrices[index]?.cost">
        </ServiceBadge>
      </section>
      <Button @clicked="() => navigateTo('/contact')">
        Contact Us
      </Button>
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
                era? If you've <em> identified bottlenecks in your operations</em> or are contemplating the next
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
                  business workflows. These <span class="italic"> "casual chats"</span> are crucial for us to gather
                  essential information and
                  comprehend the nuances of your operations.
                </li>
                <li>
                  <em> In-Depth Analysis</em>: Armed with this knowledge, our team engages in a deep analysis. We
                  consider
                  various digital solutions, weighing their potential to streamline your processes, cut costs, or drive
                  your business towards its next strategic goal.
                </li>
              </ol>
            </section>
            <section>
              <h4>Outcome</h4>
              <p>At the conclusion of our analysis, you receive a <em> documented strategic analysis</em> of your
                addressed business problem. Should we identify software as a viable solution, you will also receive a
                timeline within which we could implement the given solution, should you choose to proceed
                with us.
              </p>
              <p>This package is grounded in our values of <span class="italic">open-ended relationships</span>, <span
                  class="italic">transparency</span> and
                <span class="italic">value-driven partnerships</span>.<em> We understand that not all problems require a
                  software solution.</em> Our role is to offer data-driven insights, empowering you to make informed
                decisions about what's best for your business at any given time. If a software solution is indeed the
                right fit, you retain the freedom to choose your technical partner. The outcome of this package is a
                strategic asset for your company, offering more than just technical advice.
              </p>
              <em>
                Price:
                <Price :has-discount="!!model" :original-price="defaultPrices[0].cost"
                  :discounted-price="regionalPrices[0]?.cost" />
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
              <p>Are you an <em> entrepreneur searching for ways to launch/improve their MVP?</em>? Or you're already in
                possession of it, now seeking technical advicsory and ownership? Maybe you're just facing a business
                challenge that requires a <em> well-defined digital solution?</em>
              </p>
              <p>Our Design & Development package is tailored specifically for you.</p>
              <p class="italic">
                This package is a natural follow-up of the Consulting & Analysis package, catering to entrepreneurs,
                business owners, and operations managers who have a clear vision of the digital product their business
                needs.
              </p>
            </section>
            <section>
              <h4>The process</h4>
              <p>When purchasing this package, you get a unit of <em> 3 people dedicated to your project </em>- an
                analyst, a designer and a developer. This unit operates autonomously within Moby IT and is responsible
                of
                addressing any possible need that might arise during the Product Development Cycle. Picture it as your
                own
                compact, high-functioning company.</p>

              <p class="italic">As mentioned above, the unit is dedicated to you for a specific duration. This duration
                is
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
                <Price :has-discount="!!model" :original-price="defaultPrices[1].cost"
                  :discounted-price="regionalPrices[1]?.cost" />
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
              <p>Are you an applications director facing tough deadlines? Or a Project Manager that is constantly
                feeling
                pressure by the Product's Department pace. In either of those cases, we have the experience to help you.
                Our team, with an average of 10 years in the field, is well-versed in collaborating with Enterprise
                Software Teams.</p>
            </section>
            <section>
              <h4>The process</h4>
              <p>Choosing our service means adding dedicated and skilled software craftsmanship to your projects. Our
                engineers have a deep understanding of the web platform and its components, and they typically
                specialize
                in one or two key tools. Our areas of technical expertise include:</p>
              <p>
              <ul>
                <li><em>Programming Languages:</em> JavaScript, TypeScript, Golang</li>
                <li><em>Front End: </em>Angular, React, VueJS and VanillaJS</li>
                <li><em>Backend End: </em>Node, Deno and Golang</li>
                <li><em>Databases: </em>Postgres, MySQL, SQL Server, MongoDB</li>
              </ul>
              </p>
              <p>We understand that much of software out there is primarily idiosyncratic and usually a matter of taste.
                Our team takes pride in being maliable enough to match any idiosyncracies inside your team and speak out
                when necessary. We've learnt to work based on extensive code reviews, testing and documentation as part
                of
                our daily routine as engineers. Our goal here is to blend in rather than stand out.</p>
            </section>
            <section>
              <h4>Outcome</h4>
              <p>By integrating Moby IT's expertise into your team, you'll see immediate improvements in meeting project
                timelines and enhancing overall project quality.
              </p>
              <!-- <p>
                <em> Featured Testimonials:</em>
              </p> -->
              <em>Price:
                <Price :has-discount="!!model" :original-price="defaultPrices[2].cost"
                  :discounted-price="regionalPrices[2]?.cost" />
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

.services>button {
  align-self: center;
}

.service-badges {
  display: flex;
  gap: var(--gap-4);
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}

.services>section {
  padding: 0 var(--gap-4);
}

.service-descriptions {
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
  margin: var(--gap-4) 0;
}

.service-descriptions>section {
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--gap-2);
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gap-6);
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
  background-image: url('https://placehold.co/550x1000');
  background-position: center;
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
    grid-template-rows: auto 1fr 300px;
    justify-content: center;
  }
}
</style>
