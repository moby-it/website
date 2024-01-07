<template>
  <main>
    <section class="banner">
      <hgroup>
        <h1>
          <em>Tailor-made Software Solutions</em>
        </h1>
        <h4>Materialize your ideas, staff your team - Your tech ally in a digital era.</h4>
      </hgroup>
      <NuxtImg id="tail" src="/whale.png" alt="whale-tail" aria-hidden="true" />
    </section>
    <section id="home-content">
      <section class="what-we-do" aria-hidden="true">
        <h2>We provide</h2>
        <div>
          <article class="card">
            <header>
              <NuxtImg src="/icons/community.svg" alt="communication" aria-hidden="true" />
              <h4>Software Consulting</h4>
            </header>
            <p class="content">
              Whether you're tackling intricate software challenges or just curious about
              digitizing your business needs, we're here to help you find smart, practical
              solutions that fit your business just right.
            </p>
          </article>
          <article class="card">
            <header>
              <NuxtImg src="/icons/light-bulb-on.svg" alt="light bulb on" aria-hidden="true" />
              <h4 class="title">Product Development</h4>
            </header>
            <p class="content">
              From concept to code, we can help you empower your business in the digital
              landscape. We provide strategic Business Analysis, functional UI Design and
              meticulous Software Development in a cost-efficient manner.
            </p>
          </article>
          <article class="card">
            <header>
              <NuxtImg src="/icons/code-brackets-square.svg" alt="code-brackets" aria-hidden="true" />
              <h4 class="title">Software Services</h4>
            </header>
            <p class="content">
              With over 8 years of experience staffing enterprise software development teams, we
              have the skills and expertise to help you accelerate your development process.
            </p>
          </article>
        </div>
      </section>
      <section class="what-we-value">
        <h2>We value</h2>
        <div>
          <article class="card">
            <header>
              <NuxtImg src="/icons/user-scan.svg" alt="user-target" aria-hidden="true" />
              <h4>User Centered Design</h4>
            </header>
            <p class="content">
              We focus on identifying and solving problems that live in user-land. We try to avoid
              assumptions while heavily relying on regular usability tests to refine your product.
            </p>
          </article>
          <article class="card">
            <header>
              <NuxtImg src="/icons/multi-bubble.svg" alt="chat-bubbles" aria-hidden="true" />
              <h4>Close Collaboration</h4>
            </header>
            <p class="content">
              Regular and transparent communication is key for any project's success and
              longevity.
            </p>
          </article>
          <article class="card">
            <header>
              <NuxtImg src="/icons/packages.svg" alt="packaging" aria-hidden="true" />
              <h4>Working Iteratively</h4>
            </header>
            <p class="content">
              Splitting a project into small delivarable chunks is a crucial tool for getting
              early feedback.
            </p>
          </article>
          <article class="card">
            <header>
              <NuxtImg src="/icons/3d-bridge.svg" alt="bridge" aria-hidden="true" />
              <h4>Open-ended</h4>
            </header>
            <p class="content">
              We highly value independence. Any project deliverable will be in a state that is
              easy to maintained and extended by any experienced software team.
            </p>
          </article>
        </div>
      </section>
      <section id="academy">
        <h2>We love teaching</h2>
        <article class="card">
          <header>
            <NuxtImg src="/icons/academy.svg" width="56" alt="graduate-hat" aria-hidden="true" />
            <h4>Academy</h4>
          </header>
          <section class="content">
            <p>
              Driving from our own experience as ex-teachers who became engineers, we provide
              <em>hands-on training</em> and <em>career advice</em> to help you build the skills
              and confidence you need to succeed in the tech industry.
            </p>
            <p>
              In case you are not even sure if a career in tech is a good fit for you, don't
              worry; <em>we've all been there</em>. We would be happy to give you an overview of
              our experience in tech so far, both as individuals and as a company.
            </p>
            <br />
            <p>
              Don't hesitate to
              <a href="mailto:contact@moby-it.com">reach out to us</a>!
            </p>
          </section>
        </article>
      </section>
    </section>
  </main>
</template>
<style >
#home-content {
  background-image: url("/background.png");
  background-size: cover;
  color: white;
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 4rem;
}

hgroup h1 {
  max-width: 600px;
}

#home-content>section:not(:first-child) {
  padding-top: 8rem;
}

#home-content>section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.what-we-value>div,
.what-we-do>div {
  display: flex;
  flex: 1;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.what-we-value {
  max-width: 1056px;
  margin: auto;
}

#home-content>section>h2 {
  margin-bottom: 3rem;
}

#academy {
  flex: 1 0 520px;
}

#academy em {
  font-weight: bold;
}

@media (width >=425px) {
  .what-we-do .card {
    height: 390px;
  }

  .what-we-value .card {
    height: 320px;
  }
}
</style>