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
    imgUrl: '/icons/code-brackets-square-pink.svg',
    id: 'consulting-and-analysis',
    price: '2.000'
  },
  {
    title: 'Design & Development',
    imgUrl: '/icons/code-brackets-square-pink.svg',
    id: 'design-and-development',
    price: '8.000'

  },
  {
    title: 'Development Support',
    imgUrl: '/icons/code-brackets-square-pink.svg',
    id: 'development-support',
    price: '6.000'
  },
];
const model = defineModel<boolean>();
</script>
<template>
  <article>
    <Banner title="Services at Predicable Costs">
      <template #subtitle>
        <h4>
          In our efforts to simplify communication and boilerplate, we provide each of our services at a <em> fixed
            montly cost, regardless of scope</em>.
          <br>
          We communicate exclusively through timeboxed deliverables and deadlines, focusing on what's immidiate and of
          value.
        </h4>
      </template>
    </Banner>
    <section class="services">
      <h2>Our Services</h2>
      <!-- <aside>
        <p>We also support regional pricing. Toggle on to check if your region supports regional pricing</p>
        <Toggle v-model="model"></Toggle>
      </aside> -->

      <section class="service-badges">
        <ServiceBadge v-for="service of services" :service="service">
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
                point.</p>
            </section>
            <section>
              <h4>The process</h4>
              <p>
                With this <em> low-cost package</em> you have the ability to explore a plethora of digital solutions
                (assuming there are any), leveraging our multi-year experience in digitizing business workflows. Below are
                some indicative steps of the process:
              </p>
              <ol>
                <li>
                  We <em> extract mandatory information </em>through a series of meetings. A total of 3-4 "casual" chats
                  is usually
                  enough. During the meeting we typically require some business workflow description diagrams.
                </li>
                <li>
                  We go into a <em>deep think</em> - having your needs in mind, we evaluate a plethora of digital
                  solutions that
                  could help your business scale, cut costs, achieve its goals, or combination
                  thereof.
                </li>
              </ol>
            </section>
            <section>
              <h4>Outcome</h4>
              <p>You get a <em> Functional Specification Document (FSD)</em> that thoroughly describes the proposed
                solution(s). Alongside the FSD we provide a <em> timeframe </em>in which we could deliver the proposed
                solution, if requested so. </p>
              <p>This package lives by our values of <em> open-ended relations</em> and <em>partnerships driven by
                  value</em>. You're free to choose weather you proceed with the implementation immidiately, or
                postpone it until the investment makes sense.
                At the end of the day, you get Tech Consulting at affordable prices, while still having the option to
                immidiately proceed with any action.</p>
                <em>Price: 2.000 € / per month (min 1 month)</em>
            </section>
          </section>
          <div></div>
        </section>
        <section id="design-and-development">
          <h2>Design & Development</h2>
          <section>
            <h4>Problem Space</h4>
            <p></p>
          </section>
          <div></div>

        </section>
        <section id="development-support">
          <h2>Development Support</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nibh sed dolor tincidunt, a
            euismod dui facilisis. Fusce dapibus laoreet libero. Ut lorem felis, luctus eget ornare ut, dapibus nec arcu.

            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus non
            nulla et mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Donec dignissim ex magna, ut maximus libero vestibulum sagittis. Nulla a metus non ipsum mollis imperdiet quis
            quis tellus. In tempor ex enim, nec posuere magna cursus nec.

            Quisque placerat efficitur eros, sed pharetra odio faucibus vitae. Etiam fringilla feugiat lorem, dictum
            molestie magna dignissim quis. Suspendisse in quam lorem. Fusce blandit euismod nulla, non venenatis purus
            euismod sit amet. Mauris justo lorem, luctus id neque sed, hendrerit tempor augue. Suspendisse non ligula
            odio. Vivamus sed viverra lectus.</p>
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

.services aside p {
  margin-bottom: var(--gap-1);
}

.service-badges {
  display: flex;
  gap: var(--gap-3);
  justify-content: center;
  text-align: center;
}

.services>section {
  padding-left: var(--gap-3);
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

.description h4 {
  margin-bottom: var(--gap-1);
}

.service-descriptions>section>h2 {
  grid-area: title;
}

.service-descriptions>section>div {
  grid-area: image;
  background-color: lightcoral;
}

.services>h2 {
  text-align: center;
}
</style>
