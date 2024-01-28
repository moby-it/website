<script setup lang="ts">
import VueMultiselect from 'vue-multiselect';
import * as v from 'valibot';
import { ContractSchema } from '~/utils/contact-form';

const options = ["Consulting & Analysis", "Design & Development", "Development Support"];
const form = reactive({
  email: '',
  name: '',
  company: '',
  services: [options[0]],
  moreInfo: ''
});
const disabled = computed(() => !(form.email && form.name && form.services.length && form.company));
const formErrors = ref();
const status = ref('idle');
const buttonText = computed(() => status.value === 'pending' ? 'Sending' : 'Send');

async function submitForm() {
  formErrors.value = null;
  const payload = { ...form };

  const { success, issues, output } = v.safeParse(ContractSchema, payload);
  if (!success) {
    formErrors.value = issues.map(i => i.message);
  } else {
    const { status: localStatus } = useFetch('/api/contact', {
      method: 'post',
      body: output
    });
    const unwatch = watchEffect(() => {
      status.value = localStatus.value;
      if (localStatus.value === 'success')
        unwatch();
      if (localStatus.value === 'error')
        formErrors.value = ['Failed to send email, please try again.'];
    });
  }
}

</script>
<template>
  <Card min-width="60%">
    <template #header>
      <h1>Contact Us</h1>
    </template>
    <template v-if="status !== 'success'" #content>
      <header>
        <div>
          <label for="email">Email:</label>
          <input v-model="form.email" type="email" id="email" name="email" placeholder="example@company.com">
        </div>
        <p>Date: {{ new Date().toLocaleDateString() }}</p>
      </header>
      <section class="contact-body">
        <p>Hello Moby! My name is <input name="username" v-model="form.name" placeholder="Your Name"> and I represent
          <input v-model="form.company" name="company" placeholder="Company name">.
        </p>
        <section class="services"><span>I'm interested in</span>
          <ClientOnly>
            <VueMultiselect v-model="form.services" :multiple="true" :close-on-select="true" :options="options"
              placeholder="Select a service" />
          </ClientOnly>
        </section>
        <textarea v-model="form.moreInfo" name="details" id="details"
          placeholder="I'd also like to learn more about..."></textarea>

        <p class="error" v-for="error of formErrors">{{ error }}</p>
      </section>
      <Button @clicked="submitForm" min-width="100px" :disabled="status === 'pending' || disabled"> {{ buttonText }}
        <LoadingSpinner v-if="status === 'pending'" />
      </Button>
    </template>
    <template v-else #content>
      <h4 style="text-align:center;">We got your message and we'll reach out to you shortly!</h4>
      <NuxtLink to="/">Back to Home</NuxtLink>
    </template>
  </Card>
</template>
<style scoped>
h1,
h4,
header,
.contact-body,
.services {
  margin-bottom: var(--gap-3);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--gap-1);

  border-bottom: 1px dashed black;
  border-top: 1px dashed black;
  padding: var(--gap-2) var(--gap-1);
}

header div {
  display: flex;
  align-items: baseline;
  gap: var(--gap-1);

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

.error {
  color: red;
}
</style>