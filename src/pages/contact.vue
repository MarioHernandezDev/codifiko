<script setup>
const whatsappNumber = '34601613299'
const whatsappMessage = 'Hola Mario, me gustaría hablar contigo.'
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

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

  <section class="contact-whatsapp-section section">
    <div class="container">
      <div class="contact-whatsapp">
        <span class="contact-whatsapp__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
          </svg>
        </span>

        <div class="contact-whatsapp__copy">
          <p class="contact-whatsapp__eyebrow">Prefer WhatsApp?</p>
          <p class="contact-whatsapp__text">Skip the forms, just say hi, straight to my phone.</p>
        </div>

        <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="btn btn--glass-green contact-whatsapp__submit">
          <span class="btn__label">
            <span class="btn__label-text">Chat on WhatsApp</span>
            <span class="btn__label-text btn__label-text--clone" aria-hidden="true">Chat on WhatsApp</span>
          </span>
          <i aria-hidden="true">&rarr;</i>
        </a>
      </div>
    </div>
  </section>

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

.contact-whatsapp-section {
  padding-bottom: 0;
}

.contact-whatsapp {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.contact-whatsapp__icon {
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

.contact-whatsapp__icon svg {
  width: 24px;
  height: 24px;
}

.contact-whatsapp__copy {
  flex: 1;
  min-width: 200px;
}

.contact-whatsapp__eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
}

.contact-whatsapp__text {
  margin-top: 4px;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.contact-whatsapp__submit {
  flex-shrink: 0;
  margin-left: auto;
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

  .contact-whatsapp {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .contact-whatsapp__submit {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}
</style>
