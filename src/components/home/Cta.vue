<template>
  <section class="cta section section--muted">
    <div class="container cta__inner">
      <h2 class="cta__title">Got a project in mind?</h2>
      <p class="cta__text">
        I'm open to freelance work, collaborations, and conversations about data, AI, or just good design.
      </p>
      <NuxtLink to="/contact" class="btn btn--glass-green">
        <span class="btn__label">
          <span class="btn__label-text">Get in touch</span>
          <span class="btn__label-text btn__label-text--clone" aria-hidden="true">Get in touch</span>
        </span>
        <i aria-hidden="true">&rarr;</i>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.cta__inner {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.cta__title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-text);
}

.cta__text {
  margin-top: 16px;
  font-size: 1.05rem;
  color: var(--color-text-muted);
}

.cta__inner .btn {
  margin-top: 32px;
}
</style>
