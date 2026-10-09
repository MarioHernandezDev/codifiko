<script setup>
const categories = [
  {
    name: 'Frontend',
    items: [
      { name: 'Vue', url: 'https://vuejs.org', icon: 'https://cdn.simpleicons.org/vuedotjs' },
      { name: 'Nuxt', url: 'https://nuxt.com', icon: 'https://cdn.simpleicons.org/nuxt' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'https://cdn.simpleicons.org/html5' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'https://cdn.simpleicons.org/css' },
      { name: 'Tailwind', url: 'https://tailwindcss.com', icon: 'https://cdn.simpleicons.org/tailwindcss' },
      { name: 'Stripe', url: 'https://stripe.com', icon: 'https://cdn.simpleicons.org/stripe' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Strapi', url: 'https://strapi.io', icon: 'https://cdn.simpleicons.org/strapi' },
      { name: 'PHP', url: 'https://www.php.net', icon: 'https://cdn.simpleicons.org/php' },
      { name: 'Laravel', url: 'https://laravel.com', icon: 'https://cdn.simpleicons.org/laravel' },
      { name: 'Supabase', url: 'https://supabase.com', icon: 'https://cdn.simpleicons.org/supabase' },
      { name: 'Java', url: 'https://www.java.com', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', url: 'https://www.python.org', icon: 'https://cdn.simpleicons.org/python' },
    ],
  },
  {
    name: 'Systems',
    items: [
      { name: 'Linux', url: 'https://www.linux.org', icon: 'https://cdn.simpleicons.org/linux' },
      { name: 'Docker', url: 'https://www.docker.com', icon: 'https://cdn.simpleicons.org/docker' },
      { name: 'Node', url: 'https://nodejs.org', icon: 'https://cdn.simpleicons.org/nodedotjs' },
    ],
  },
  {
    name: 'Extras',
    items: [
      { name: 'Claude Code', url: 'https://claude.com/claude-code', icon: 'https://cdn.simpleicons.org/claude' },
      { name: 'Trello', url: 'https://trello.com', icon: 'https://cdn.simpleicons.org/trello' },
      { name: 'Jira', url: 'https://www.atlassian.com/software/jira', icon: 'https://cdn.simpleicons.org/jira' },
      { name: 'Git', url: 'https://git-scm.com', icon: 'https://cdn.simpleicons.org/git' },
      { name: 'Client management' },
    ],
  },
]
</script>

<template>
  <section class="skills section">
    <div class="skills__bg" aria-hidden="true">
      <svg class="skills__wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path class="skills__wave-path" d="M0,150 C240,80 480,220 720,150 C960,80 1200,220 1440,150" />
      </svg>
    </div>

    <div class="container skills__inner">
      <p class="section__eyebrow skills__eyebrow">Toolbox</p>
      <h2 class="section__title skills__title">What's in the stack</h2>

      <div class="skills__categories">
        <div v-for="cat in categories" :key="cat.name" class="skills__category">
          <h3 class="skills__category-title">{{ cat.name }}</h3>

          <ul class="skills__grid">
            <li v-for="tech in cat.items" :key="tech.name">
              <a
                v-if="tech.url"
                :href="tech.url"
                target="_blank"
                rel="noopener noreferrer"
                class="skills__card"
              >
                <span class="skills__icon-badge">
                  <img :src="tech.icon" :alt="tech.name" class="skills__icon" loading="lazy" />
                </span>
                <span class="skills__name">{{ tech.name }}</span>
              </a>

              <div v-else class="skills__card skills__card--static">
                <span class="skills__icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="8" cy="8" r="3" />
                    <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    <circle cx="17.5" cy="9" r="2.4" />
                    <path d="M14.8 20c.3-2.6 2.2-4.6 4.5-4.9" />
                  </svg>
                </span>
                <span class="skills__name">{{ tech.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  position: relative;
  overflow: hidden;
  background: var(--color-black);
}

.skills__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.skills__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.skills__wave-path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.14;
  animation: skills-wave-float 15s ease-in-out infinite alternate;
}

@keyframes skills-wave-float {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(-20px) scaleY(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skills__wave-path {
    animation: none;
  }
}

.skills__inner {
  position: relative;
  z-index: 1;
}

.skills__eyebrow {
  color: var(--color-accent);
}

.skills__title {
  color: #ffffff;
}

.skills__categories {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.skills__category-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.skills__grid li {
  display: flex;
}

.skills__card {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 22px 14px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.skills__card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent);
  box-shadow: 0 14px 28px -16px rgba(var(--highlight-rgb), 0.5);
}

.skills__card--static {
  cursor: default;
}

.skills__card--static:hover {
  transform: none;
  border-color: var(--color-border);
  box-shadow: none;
}

.skills__icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(var(--highlight-rgb), 0.16);
  color: var(--color-accent-dark);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.skills__card:hover .skills__icon-badge {
  transform: scale(1.08) rotate(-4deg);
}

.skills__icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.skills__icon-badge svg {
  width: 20px;
  height: 20px;
}

.skills__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--color-text);
  text-align: center;
}
</style>
