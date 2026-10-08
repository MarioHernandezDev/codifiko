<script setup>
const items = [
  {
    role: 'Software Developer Intern',
    company: 'Project Gaming',
    desc: 'My first step into professional development, building software for a video game studio.',
    icon: 'controller',
  },
  {
    role: 'Software Developer Intern',
    company: 'NTT DATA',
    desc: 'Hands-on experience inside a global tech consultancy — a smooth, rewarding stay on both sides.',
    icon: 'briefcase',
  },
  {
    role: 'Florist & Store Manager',
    company: '3 years as florist, 2 as manager',
    desc: 'Before code, I ran a shop and led a small team under daily pressure — not a common background in tech, and one I\'m proud of.',
    icon: 'flower',
    tag: 'The unexpected one',
  },
]
</script>

<template>
  <section class="experience section">
    <div class="experience__bg" aria-hidden="true">
      <svg class="experience__wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path class="experience__wave-path" d="M0,150 C240,80 480,220 720,150 C960,80 1200,220 1440,150" />
      </svg>
    </div>

    <div class="container experience__inner">
      <p class="section__eyebrow">Experience</p>
      <h2 class="section__title">Where I've worked</h2>

      <div class="experience__grid">
        <article
          v-for="(item, i) in items"
          :key="item.role + item.company"
          class="experience__card"
          :class="{ 'experience__card--feature': item.tag }"
        >
          <div class="experience__card-top">
            <span class="experience__icon" aria-hidden="true">
              <svg v-if="item.icon === 'controller'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7.5 7h9a4.5 4.5 0 0 1 4.3 5.9l-.7 2.2a2.5 2.5 0 0 1-4.3 1l-1-1.1a2 2 0 0 0-1.5-.7h-3a2 2 0 0 0-1.5.7l-1 1.1a2.5 2.5 0 0 1-4.3-1l-.7-2.2A4.5 4.5 0 0 1 7.5 7Z" />
                <path d="M7 9v2M6 10h2" />
                <path d="M15.2 9.3h.01M17.3 11h.01" />
              </svg>
              <svg v-else-if="item.icon === 'briefcase'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M3 12h18" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="2.2" />
                <path d="M12 9.6c-1.4-1.5-1.4-3.8 0-5.2 1.4 1.4 1.4 3.7 0 5.2Z" />
                <path d="M14.4 12c1.5-1.4 3.8-1.4 5.2 0-1.4 1.4-3.7 1.4-5.2 0Z" />
                <path d="M12 14.4c1.4 1.5 1.4 3.8 0 5.2-1.4-1.4-1.4-3.7 0-5.2Z" />
                <path d="M9.6 12c-1.5 1.4-3.8 1.4-5.2 0 1.4-1.4 3.7-1.4 5.2 0Z" />
                <path d="M12 19.2V22" />
              </svg>
            </span>

            <span class="experience__index">0{{ i + 1 }}</span>
          </div>

          <span v-if="item.tag" class="experience__tag">{{ item.tag }}</span>

          <h3 class="experience__role">{{ item.role }}</h3>
          <p class="experience__company">{{ item.company }}</p>
          <p class="experience__desc">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  position: relative;
  overflow: hidden;
}

.experience__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.experience__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.experience__wave-path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.18;
  animation: experience-wave-float 14s ease-in-out infinite alternate;
}

@keyframes experience-wave-float {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(-20px) scaleY(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience__wave-path {
    animation: none;
  }
}

.experience__inner {
  position: relative;
  z-index: 1;
}

.experience__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.experience__card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: #ffffff;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.experience__card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
  box-shadow: 0 20px 40px -24px rgba(var(--highlight-dark-rgb), 0.35);
}

.experience__card--feature {
  border-color: rgba(var(--highlight-rgb), 0.45);
  background: linear-gradient(170deg, rgba(var(--highlight-rgb), 0.08) 0%, rgba(var(--highlight-rgb), 0) 55%), #ffffff;
}

.experience__card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.experience__icon {
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

.experience__icon svg {
  width: 22px;
  height: 22px;
}

.experience__card:hover .experience__icon {
  transform: scale(1.08) rotate(-4deg);
}

.experience__index {
  font-family: var(--font-display-heavy);
  font-weight: 400;
  font-size: 2rem;
  line-height: 1;
  color: var(--color-text);
  opacity: 0.1;
}

.experience__tag {
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

.experience__role {
  margin-top: 20px;
  font-size: 1.15rem;
  color: var(--color-text);
}

.experience__card--feature .experience__role {
  margin-top: 14px;
}

.experience__company {
  margin-top: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-accent-dark);
}

.experience__desc {
  margin-top: 14px;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .experience__grid {
    grid-template-columns: 1fr;
  }
}
</style>
