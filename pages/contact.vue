<script setup>
import VueMultiselect from 'vue-multiselect';
const email = ref();
const name = ref();
const company = ref();
const options = ["Consulting & Analysis", "Design & Development", "Development Support"];
const services = ref(options[0]);
const moreInfo = ref();
const applicationSent = ref(false);
async function submitForm() {
  await useFetch('/api/contact', {
    method: 'post',
    body: {
      name: name.value,
      email: email.value,
      company: company.value,
      services: services.value,
      moreInfo: moreInfo.value
    }
  });
  applicationSent.value = true;
}
</script>
<template>
  <Card min-width="60%">
    <template #header>
      <h1>Contact Us</h1>
    </template>
    <template v-if="!applicationSent" #content>
      <section class="email">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" name="email" placeholder="example@company.com">
      </section>
      <section class="contact-body">
        <p>Hello Moby! My name is <input name="username" v-model="name" placeholder="Your Name"> and I represent
          <input v-model="company" name="company" placeholder="Company name">.
        </p>
        <section class="services"><span>I'm interested in</span>
          <ClientOnly>
            <VueMultiselect v-model="services" :multiple="true" :close-on-select="true" :options="options"
              placeholder="Select a service" />
          </ClientOnly>
        </section>
        <textarea v-model="moreInfo" name="details" id="details" placeholder="I'd like to learn more about..."></textarea>
      </section>
      <Button @clicked="submitForm">Send</Button>
    </template>
    <template v-else #content>
      <h4 style="text-align:center;">We got your message and we'll reach out to you shortly.</h4>
    </template>
  </Card>
</template>
<style scoped>
h1,
.email,
.contact-body,
.services {
  margin-bottom: var(--gap-3);
}

.email {
  border-bottom: 1px dashed black;
  border-top: 1px dashed black;
  padding: var(--gap-2) var(--gap-1);
}

.contact-body {
  font-size: larger;
  font-weight: 500;
}

.services {
  display: flex;
  align-items: center;
}

.services span {
  min-width: fit-content;
  margin-right: var(--gap-1);
}

.services {
  padding-inline-start: 0;
}

.card {
  margin: auto;
  margin-bottom: var(--gap-3);
}

label {
  font-size: larger;
}

textarea {
  width: 100%;
  min-height: 150px;
}

.contact-body input {
  max-width: 150px;
}

input,
textarea {
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid var(--gray);
  vertical-align: baseline;
}

input:focus-visible,
textarea:focus-visible {
  outline: none;
}

.email {
  display: flex;
  align-items: baseline;
  gap: var(--gap-1);
}

</style>