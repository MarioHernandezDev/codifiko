<template>
  <section class="hero">
    <div class="hero__card">
      <div class="hero__content container">
        

        <h1 class="hero__name">
          <span class="reveal" style="--reveal-delay: .08s"><span>Mario Hernández</span></span>
          <span class="reveal" style="--reveal-delay: .18s"><span>Padial<i class="hero__dot">.</i></span></span>
        </h1>

        <p class="hero__role reveal" style="--reveal-delay: .32s">
          <span>Web Developer &amp; Designer</span>
        </p>

        <p class="hero__edu reveal" style="--reveal-delay: .42s">
          <strong>Machine Learning, Data Management &amp; Training</strong><span>master's student at IZV</span>
        </p>

        <div class="hero__cta reveal" style="--reveal-delay: .55s">
          <span class="hero__cta-inner">
            <NuxtLink to="/contact" class="btn btn--primary">Get in touch</NuxtLink>
            <NuxtLink to="/about" class="btn btn--ghost">About me</NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  --hero-margin: clamp(12px, 2.5vw, 28px);
  padding: 0 var(--hero-margin) var(--hero-margin);
}

.hero__card {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - var(--nav-height) - (var(--hero-margin) * 2));
  border-radius: 28px;
  display: flex;
  align-items: center;
  background-image: url('/img/background-image.jpg');
  background-size: cover;
  background-position: center;
}

.hero__card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 85% 12%, rgba(249, 115, 22, 0.28), transparent 50%),
    linear-gradient(165deg, rgba(10, 8, 6, 0.88) 0%, rgba(10, 8, 6, 0.6) 50%, rgba(10, 8, 6, 0.85) 100%);
  pointer-events: none;
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-top: 64px;
  padding-bottom: 64px;
}

.hero__eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fb923c;
  margin-bottom: 20px;
}

.hero__name {
  font-weight: 700;
  font-size: clamp(3rem, 8.5vw, 7rem);
  letter-spacing: -0.02em;
  line-height: 1.02;
  color: #ffffff;
}

.hero__dot {
  color: var(--color-accent);
  font-style: normal;
}

.hero__role {
  margin-top: 28px;
  font-size: clamp(1.3rem, 2.4vw, 1.65rem);
  font-weight: 700;
  color: #f4f1ec;
}

.hero__edu {
  margin-top: 14px;
  max-width: 560px;
  font-size: 1.05rem;
  font-weight: 500;
  color: #c9c3bb;
}

.hero__edu strong {
  color: #ffffff;
  font-weight: 700;
}

.hero__cta {
  margin-top: 44px;
}

.hero__cta-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero .btn--ghost {
  background-color: #ffffff;
  border-color: rgba(255, 255, 255, 0.35);
  color: var(--color-accent);
}

.hero .btn--ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .hero__card {
    min-height: auto;
  }

  .hero__content {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}
</style>
