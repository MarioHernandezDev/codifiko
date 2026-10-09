<script setup>
const methods = [
  {
    label: 'Phone',
    value: '+34 601 613 299',
    href: 'tel:+34601613299',
    icon: 'phone',
  },
  {
    label: 'Email',
    value: 'marioherpad.01@gmail.com',
    href: 'mailto:marioherpad.01@gmail.com',
    icon: 'email',
    tag: 'Fastest reply',
  },
  {
    label: 'LinkedIn',
    value: '/in/marioherpad',
    href: 'https://www.linkedin.com/in/marioherpad/',
    icon: 'linkedin',
    external: true,
  },
]
</script>

<template>
  <PageHero eyebrow="Contact">
    <template #title>
      <span class="reveal" style="--reveal-delay: .12s"><span>Let's talk.</span></span>
    </template>
    <template #text
      >Open to freelance work, collaborations, or just a good conversation about data, AI, or design.
      Reach me through whichever feels right.</template
    >
  </PageHero>

  <section class="contact-methods section">
    <div class="container">
      <p class="section__eyebrow">Reach out</p>
      <h2 class="section__title">Three ways in, zero forms to fill.</h2>

      <div class="contact-methods__grid">
        <a
          v-for="(method, i) in methods"
          :key="method.label"
          :href="method.href"
          :target="method.external ? '_blank' : undefined"
          :rel="method.external ? 'noopener noreferrer' : undefined"
          class="contact-card"
        >
          <div class="contact-card__top">
            <span class="contact-card__icon" aria-hidden="true">
              <svg v-if="method.icon === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2.1 2A17.5 17.5 0 0 1 4.5 5.1 2 2 0 0 1 6.5 3Z" />
              </svg>
              <svg v-else-if="method.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <img v-else src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" class="contact-card__icon-img" />
            </span>

            <span class="contact-card__index">0{{ i + 1 }}</span>
          </div>

          <span v-if="method.tag" class="contact-card__tag">{{ method.tag }}</span>

          <span class="contact-card__label">{{ method.label }}</span>
          <span class="contact-card__value">{{ method.value }}</span>

          <i class="contact-card__arrow" aria-hidden="true">&rarr;</i>
        </a>
      </div>
    </div>

    <div class="container">
      <div class="contact-methods__cv">
        <span class="contact-methods__cv-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3h5l5 5v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
            <path d="M13 3v5h5" />
            <path d="M9.5 13h5M9.5 16.5h5" />
          </svg>
        </span>

        <div class="contact-methods__cv-copy">
          <p class="contact-methods__cv-eyebrow">Prefer paperwork?</p>
          <p class="contact-methods__cv-text">Same story, properly formatted into a CV.</p>
        </div>

        <NuxtLink to="/cv" class="btn btn--glass-dark">
          <span class="btn__label">
            <span class="btn__label-text">View CV</span>
            <span class="btn__label-text btn__label-text--clone" aria-hidden="true">View CV</span>
          </span>
          <i aria-hidden="true">&rarr;</i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-methods__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 48px;
}

.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: #ffffff;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
  box-shadow: 0 20px 40px -24px rgba(var(--highlight-dark-rgb), 0.35);
}

.contact-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.contact-card__index {
  font-family: var(--font-display-heavy);
  font-weight: 400;
  font-size: 2rem;
  line-height: 1;
  color: var(--color-text);
  opacity: 0.1;
}

.contact-card__tag {
  align-self: flex-start;
  margin-top: 20px;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--color-accent);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.contact-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(var(--highlight-rgb), 0.16);
  color: var(--color-accent-dark);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.contact-card__icon svg {
  width: 22px;
  height: 22px;
}

.contact-card__icon-img {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}

.contact-card:hover .contact-card__icon {
  transform: scale(1.08) rotate(-4deg);
}

.contact-card__label {
  margin-top: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
}

.contact-card__value {
  margin-top: 6px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-text);
  word-break: break-word;
}

.contact-card__arrow {
  position: absolute;
  bottom: 28px;
  right: 24px;
  font-style: normal;
  color: var(--color-text-muted);
  transition: transform 0.3s ease, color 0.3s ease;
}

.contact-card:hover .contact-card__arrow {
  transform: translate(4px, -4px);
  color: var(--color-accent-dark);
}

.contact-methods__cv {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.contact-methods__cv-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid var(--color-border);
  color: var(--color-accent-dark);
}

.contact-methods__cv-icon svg {
  width: 22px;
  height: 22px;
}

.contact-methods__cv-copy {
  flex: 1;
}

.contact-methods__cv-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
}

.contact-methods__cv-text {
  margin-top: 4px;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

@media (max-width: 800px) {
  .contact-methods__grid {
    grid-template-columns: 1fr;
  }

  .contact-methods__cv {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
