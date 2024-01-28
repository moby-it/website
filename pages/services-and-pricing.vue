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
      <section class="service-badges">
        <ServiceBadge v-for="service of services" :service="service">
        </ServiceBadge>
      </section>
      <section class="description">
        <section id="consulting-and-analysis">
          <h2>Consulting & Analysis</h2>
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
        <section id="design-and-development">
          <h2>Design & Development</h2>
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

.service-badges {
  display: flex;
  gap: var(--gap-3);
  justify-content: center;
  text-align: center;
}

.services>section {
  padding-left: var(--gap-3);
}

.description {
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
  margin-bottom: var(--gap-3);
}

.description>section {
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

.description #design-and-development {
  grid-template-areas:
    "image title"
    "image description"
}

.description>section>p {
  grid-area: description;
}

.description>section>h2 {
  grid-area: title;
}

.description>section>div {
  grid-area: image;
  background-color: lightcoral;
}

.services>h2 {
  text-align: center;
}
</style>
