<script setup>
definePageMeta({ layout: 'cv' })

useHead({
  title: 'CV — Mario Hernández Padial',
})

const contact = [
  { icon: 'phone', label: '+34 601 613 299', href: 'tel:+34601613299' },
  { icon: 'email', label: 'marioherpad.01@gmail.com', href: 'mailto:marioherpad.01@gmail.com' },
  { icon: 'web', label: 'codifiko.vercel.app', href: 'https://codifiko.vercel.app' },
  { icon: 'linkedin', label: 'linkedin.com/in/marioherpad', href: 'https://www.linkedin.com/in/marioherpad/' },
  { icon: 'pin', label: 'Spain' },
]

const strengths = ['Leadership', 'Client-facing', 'Problem-solving', 'Fast learner', 'Self-taught']

const skills = [
  { name: 'Frontend', items: ['Vue', 'Nuxt', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Stripe'] },
  { name: 'Backend', items: ['Strapi', 'PHP', 'Laravel', 'Supabase', 'Java', 'Python'] },
  { name: 'Systems', items: ['Linux', 'Docker', 'Node'] },
  { name: 'Tools', items: ['Claude Code', 'Trello', 'Jira', 'Git', 'Client management'] },
]

const experience = [
  {
    role: 'Software Developer Intern',
    place: 'NTT DATA',
    desc: 'Contributed to real production work inside a global tech consultancy, pairing with senior engineers on live client projects.',
  },
  {
    role: 'Freelance Developer',
    place: 'Self-employed',
    desc: 'Managed client relationships end to end — scoping, building, and shipping web projects for a range of businesses over a full year.',
  },
  {
    role: 'Store Assistant',
    place: 'Project Gaming — video game store',
    desc: 'Handled stock, sales, and customer service on a high-traffic shop floor, solving problems in real time.',
  },
  {
    role: 'Florist & Store Manager',
    place: 'Flower shop',
    desc: 'Ran daily operations and led a small team for two years, on top of a prior year as floor staff — three years total of hands-on retail leadership.',
  },
]
</script>

<template>
  <article class="cv">
    <header class="cv__header">
      <img src="/img/profile.jpg" alt="Mario Hernández Padial" class="cv__photo" />

      <div class="cv__heading">
        <h1 class="cv__name">Mario Hernández Padial</h1>
        <p class="cv__title">Web Developer &amp; Designer</p>
        <p class="cv__title-sub">Moving towards Data Science &amp; AI</p>
      </div>

      <ul class="cv__contact">
        <li v-for="item in contact" :key="item.label">
          <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer">
            <svg v-if="item.icon === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2.1 2A17.5 17.5 0 0 1 4.5 5.1 2 2 0 0 1 6.5 3Z" /></svg>
            <svg v-else-if="item.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
            <svg v-else-if="item.icon === 'web'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 11v5" /></svg>
            <span>{{ item.label }}</span>
          </a>
          <span v-else class="cv__contact-static">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.8-7-11a7 7 0 0 1 14 0c0 5.2-7 11-7 11Z" /><circle cx="12" cy="10" r="2.3" /></svg>
            <span>{{ item.label }}</span>
          </span>
        </li>
      </ul>
    </header>

    <p class="cv__summary">
      22-year-old web developer and designer finishing a master's in Machine Learning, Data Management
      &amp; Training. Three years of hands-on retail leadership — the last two running a flower shop —
      shaped how I handle pressure, people and problems, long before I ever ran a sprint. Now channelling
      that into data science and AI, with code as the constant throughout.
    </p>

    <ul class="cv__strengths">
      <li v-for="s in strengths" :key="s">{{ s }}</li>
    </ul>

    <div class="cv__grid">
      <aside class="cv__sidebar">
        <section class="cv__block">
          <h2 class="cv__block-title">Education</h2>
          <p class="cv__edu-role">Master's in Machine Learning, Data Management &amp; Training</p>
          <p class="cv__edu-status">In progress</p>
        </section>

        <section class="cv__block">
          <h2 class="cv__block-title">Languages</h2>
          <ul class="cv__list">
            <li><span>Spanish</span><span class="cv__muted">Native</span></li>
            <li><span>English</span><span class="cv__muted">Conversational, not yet certified</span></li>
          </ul>
        </section>

        <section class="cv__block">
          <h2 class="cv__block-title">Extras</h2>
          <ul class="cv__list cv__list--simple">
            <li>Driving licence &amp; own car</li>
            <li>Based in Spain, open to remote work</li>
          </ul>
        </section>

        <section v-for="cat in skills" :key="cat.name" class="cv__block">
          <h2 class="cv__block-title">{{ cat.name }}</h2>
          <ul class="cv__tags">
            <li v-for="item in cat.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </aside>

      <section class="cv__main">
        <h2 class="cv__block-title">Experience</h2>
        <ul class="cv__experience">
          <li v-for="job in experience" :key="job.role + job.place" class="cv__job">
            <span class="cv__job-dot" aria-hidden="true"></span>
            <p class="cv__job-role">{{ job.role }}</p>
            <p class="cv__job-place">{{ job.place }}</p>
            <p class="cv__job-desc">{{ job.desc }}</p>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<style scoped>
.cv {
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(32px, 5vw, 56px);
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  box-shadow: 0 30px 60px -32px rgba(var(--color-black-rgb), 0.18);
}

.cv__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--color-text);
}

.cv__photo {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-accent);
  flex-shrink: 0;
}

.cv__heading {
  flex: 1;
  min-width: 200px;
}

.cv__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.5rem, 3.2vw, 2.1rem);
  color: var(--color-text);
}

.cv__title {
  margin-top: 4px;
  font-weight: 600;
  color: var(--color-accent-dark);
}

.cv__title-sub {
  margin-top: 2px;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.cv__contact {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.cv__contact a,
.cv__contact-static {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-muted);
  text-decoration: none;
}

.cv__contact a:hover {
  color: var(--color-accent-dark);
}

.cv__contact svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--color-accent-dark);
}

.cv__summary {
  margin-top: 24px;
  max-width: 660px;
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.cv__strengths {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cv__strengths li {
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid var(--color-accent-dark);
  color: var(--color-accent-dark);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.cv__grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
}

.cv__block + .cv__block {
  margin-top: 28px;
}

.cv__block-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text);
}

.cv__edu-role {
  margin-top: 10px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-text);
}

.cv__edu-status {
  margin-top: 2px;
  font-size: 0.85rem;
  color: var(--color-accent-dark);
}

.cv__list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cv__list li {
  display: flex;
  flex-direction: column;
  font-size: 0.88rem;
  color: var(--color-text);
}

.cv__muted {
  color: var(--color-text-muted);
  font-size: 0.82rem;
}

.cv__list--simple li {
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.cv__tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cv__tags li {
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(var(--highlight-rgb), 0.16);
  color: var(--color-accent-dark);
  font-size: 0.78rem;
  font-weight: 600;
}

.cv__experience {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.cv__job {
  position: relative;
  padding-left: 18px;
  border-left: 2px solid var(--color-border);
}

.cv__job-dot {
  position: absolute;
  left: -5px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid #ffffff;
}

.cv__job-role {
  font-weight: 700;
  font-size: 0.98rem;
  color: var(--color-text);
}

.cv__job-place {
  margin-top: 2px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-accent-dark);
}

.cv__job-desc {
  margin-top: 6px;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

@media (max-width: 720px) {
  .cv__header {
    align-items: flex-start;
  }

  .cv__contact {
    width: 100%;
  }

  .cv__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media print {
  .cv {
    max-width: none;
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  .cv__tags li,
  .cv__strengths li,
  .cv__job-dot {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>
