<template>
  <article class="card">
    <header>
      <slot name="header"></slot>
    </header>
    <p class="content">
      <slot name="content"></slot>
    </p>
  </article>
</template>
<style scoped>
.card {
  box-sizing: border-box;
  width: 390px;
  background: var(--light--bg);
  display: flex;
  flex-direction: column;
  border-radius: 3rem;
  padding: var(--gap-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow:
    var(--secondary--opacity--weak) 0px 10px 20px,
    var(--secondary--opacity--strong) 0px 6px 6px;
}

.card header {
  display: flex;
  gap: var(--gap-1);
  color: var(--dark--bg);
  margin-bottom: var(--gap-1);
  text-align: center;
  align-items: center;
}

.card header img {
  width: 96px;
}

.card .content {
  color: var(--gray);
}

@media (width <=425px) {
  .card {
    width: 300px !important;
  }
}
</style>