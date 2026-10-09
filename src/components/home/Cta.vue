<template>
  <section class="cta section section--muted">
    <div class="cta__bg" aria-hidden="true">
      <svg class="cta__wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path class="cta__wave-path" d="M0,150 C240,80 480,220 720,150 C960,80 1200,220 1440,150" />
      </svg>
    </div>

    <div class="container">
      <div class="cta__panel">
        <p class="section__eyebrow">Let's talk</p>
        <h2 class="cta__title">Got a project in <span class="cta__title-accent">mind</span>?</h2>
        <p class="cta__text">
          I'm open to freelance work, collaborations, and conversations about data, AI, or just good design.
        </p>

        <NuxtLink to="/contact" class="btn btn--glass-dark">
          <span class="btn__label">
            <span class="btn__label-text">Get in touch</span>
            <span class="btn__label-text btn__label-text--clone" aria-hidden="true">Get in touch</span>
          </span>
          <i aria-hidden="true">&rarr;</i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  overflow: hidden;
}

.cta__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.cta__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.cta__wave-path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.22;
  animation: cta-wave-float 14s ease-in-out infinite alternate;
}

@keyframes cta-wave-float {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(-20px) scaleY(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cta__wave-path {
    animation: none;
  }
}

.cta__panel {
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(40px, 6vw, 64px) clamp(28px, 5vw, 56px);
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid var(--color-border);
  box-shadow: 0 30px 60px -32px rgba(var(--color-black-rgb), 0.22);
  text-align: center;
}

.cta__title {
  margin-top: 12px;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-text);
}

.cta__title-accent {
  font-family: var(--font-display-heavy);
  font-weight: 400;
  color: var(--color-accent-dark);
}

.cta__text {
  margin-top: 16px;
  font-size: 1.05rem;
  color: var(--color-text-muted);
}

.cta__panel .btn {
  margin-top: 32px;
}
</style>
