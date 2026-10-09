<script setup>
const items = [
  {
    role: 'Software Developer Intern',
    company: 'NTT DATA',
    desc: 'Hands-on experience inside a global tech consultancy — a smooth, rewarding stay on both sides.',
    icon: 'briefcase',
  },
  {
    role: 'Freelance Developer',
    company: '1 year of projects for various companies',
    desc: 'Self-managed client work end to end — scoping, building, and shipping, which is where the "developer" part really took shape.',
    icon: 'code',
  },
  {
    role: 'Store Assistant',
    company: 'Project Gaming — video game store',
    desc: 'A year on the shop floor: stock, customers, and problems solved on the spot.',
    icon: 'controller',
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
  <section class="timeline section">
    <div class="container">
      <p class="section__eyebrow">Experience</p>
      <h2 class="section__title">The full picture</h2>

      <div class="timeline__grid">
        <article
          v-for="(item, i) in items"
          :key="item.role + item.company"
          class="timeline__card"
          :class="{ 'timeline__card--feature': item.tag }"
        >
          <div class="timeline__card-top">
            <span class="timeline__icon" aria-hidden="true">
              <svg v-if="item.icon === 'briefcase'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M3 12h18" />
              </svg>
              <svg v-else-if="item.icon === 'code'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 7 4 12l5 5" />
                <path d="M15 7l5 5-5 5" />
              </svg>
              <svg v-else-if="item.icon === 'controller'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7.5 7h9a4.5 4.5 0 0 1 4.3 5.9l-.7 2.2a2.5 2.5 0 0 1-4.3 1l-1-1.1a2 2 0 0 0-1.5-.7h-3a2 2 0 0 0-1.5.7l-1 1.1a2.5 2.5 0 0 1-4.3-1l-.7-2.2A4.5 4.5 0 0 1 7.5 7Z" />
                <path d="M7 9v2M6 10h2" />
                <path d="M15.2 9.3h.01M17.3 11h.01" />
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

            <span class="timeline__index">0{{ i + 1 }}</span>
          </div>

          <span v-if="item.tag" class="timeline__tag">{{ item.tag }}</span>

          <h3 class="timeline__role">{{ item.role }}</h3>
          <p class="timeline__company">{{ item.company }}</p>
          <p class="timeline__desc">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.timeline__card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: #ffffff;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.timeline__card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
  box-shadow: 0 20px 40px -24px rgba(var(--highlight-dark-rgb), 0.35);
}

.timeline__card--feature {
  border-color: rgba(var(--highlight-rgb), 0.45);
  background: linear-gradient(170deg, rgba(var(--highlight-rgb), 0.08) 0%, rgba(var(--highlight-rgb), 0) 55%), #ffffff;
}

.timeline__card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.timeline__icon {
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

.timeline__icon svg {
  width: 22px;
  height: 22px;
}

.timeline__card:hover .timeline__icon {
  transform: scale(1.08) rotate(-4deg);
}

.timeline__index {
  font-family: var(--font-display-heavy);
  font-weight: 400;
  font-size: 2rem;
  line-height: 1;
  color: var(--color-text);
  opacity: 0.1;
}

.timeline__tag {
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

.timeline__role {
  margin-top: 20px;
  font-size: 1.15rem;
  color: var(--color-text);
}

.timeline__card--feature .timeline__role {
  margin-top: 14px;
}

.timeline__company {
  margin-top: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-accent-dark);
}

.timeline__desc {
  margin-top: 14px;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

@media (max-width: 700px) {
  .timeline__grid {
    grid-template-columns: 1fr;
  }
}
</style>
