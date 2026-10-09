<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="page-hero">
    <div class="page-hero__bg" aria-hidden="true">
      <span class="page-hero__glow"></span>
      <svg class="page-hero__wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path class="page-hero__wave-path" d="M0,150 C240,80 480,220 720,150 C960,80 1200,220 1440,150" />
      </svg>
    </div>

    <div class="container page-hero__inner">
      <span class="reveal" style="--reveal-delay: .05s"><span class="section__eyebrow page-hero__eyebrow">{{ eyebrow }}</span></span>
      <h1 class="page-hero__title">
        <slot name="title" />
      </h1>
      <p class="page-hero__text reveal" style="--reveal-delay: .32s">
        <span><slot name="text" /></span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  overflow: hidden;
  background: var(--color-black);
  padding: clamp(64px, 11vw, 112px) 0 clamp(56px, 9vw, 88px);
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.page-hero__glow {
  position: absolute;
  top: -15%;
  left: -8%;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(var(--highlight-rgb), 0.28), transparent 70%);
  filter: blur(60px);
}

.page-hero__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.page-hero__wave-path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.3;
  animation: page-hero-wave-float 13s ease-in-out infinite alternate;
}

@keyframes page-hero-wave-float {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(-18px) scaleY(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-hero__wave-path {
    animation: none;
  }
}

.page-hero__inner {
  position: relative;
  z-index: 1;
}

.page-hero__eyebrow {
  color: var(--color-accent);
}

.page-hero__title {
  margin-top: 16px;
  font-family: var(--font-display-heavy);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(2.25rem, 6.5vw, 4.5rem);
  line-height: 1.04;
  letter-spacing: -0.01em;
  color: #ffffff;
}

.page-hero__title :deep(i) {
  font-style: normal;
  color: var(--color-accent);
}

.page-hero__text {
  display: block;
  overflow: hidden;
}

.page-hero__text span {
  display: block;
  margin-top: 20px;
  max-width: 480px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #cfc9c0;
}
</style>
