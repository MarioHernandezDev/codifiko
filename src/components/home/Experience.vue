<script setup>
const items = [
  {
    role: 'Software Developer Intern',
    company: 'Project Gaming',
    desc: 'My first step into professional development, building software for a video game studio.',
  },
  {
    role: 'Software Developer Intern',
    company: 'NTT DATA',
    desc: 'Hands-on experience inside a global tech consultancy — a smooth, rewarding stay on both sides.',
  },
  {
    role: 'Florist & Store Manager',
    company: '3 years as florist, 2 as manager',
    desc: 'Before code, I ran a shop and led a small team under daily pressure — not a common background in tech, and one I\'m proud of.',
  },
]
</script>

<template>
  <section class="experience section">
    <div class="container">
      <p class="section__eyebrow">Experience</p>
      <h2 class="section__title">Where I've worked</h2>

      <div class="experience__grid">
        <article v-for="(item, i) in items" :key="item.role + item.company" class="experience__card">
          <span class="experience__index">0{{ i + 1 }}</span>
          <h3 class="experience__role">{{ item.role }}</h3>
          <p class="experience__company">{{ item.company }}</p>
          <p class="experience__desc">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.experience__card {
  padding: 32px 28px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: #ffffff;
  transition: border-color 0.2s ease;
}

.experience__card:hover {
  border-color: var(--color-accent);
}

.experience__index {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--color-accent);
  margin-bottom: 20px;
}

.experience__role {
  font-size: 1.15rem;
  color: var(--color-text);
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
