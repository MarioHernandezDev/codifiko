<template>
  <section class="intro section">
    <div class="container intro__grid">
      <div class="intro__header">
        <p class="section__eyebrow">About</p>
        <h2 class="section__title">From building the web to understanding the data behind it.</h2>
      </div>

      <div class="intro__body">
        <p>
          I'm a 22-year-old web developer and designer, currently finishing a Machine Learning, Data
          Management &amp; Training master's degree. Code has been my hobby turned profession — and I'm
          now pointing that same curiosity toward data science and AI, where there's still so much left
          to figure out.
        </p>
        <NuxtLink to="/about" class="intro__link">
          More about me <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}

.intro__body p {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--color-text-muted);
  max-width: 540px;
}

.intro__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 2px solid var(--color-accent);
  padding-bottom: 2px;
  transition: color 0.2s ease;
}

.intro__link:hover {
  color: var(--color-accent-dark);
}

@media (max-width: 800px) {
  .intro__grid {
    grid-template-columns: 1fr;
  }
}
</style>
