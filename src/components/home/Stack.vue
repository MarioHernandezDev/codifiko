<script setup>
const technologies = [
  { name: 'Vue', url: 'https://vuejs.org', icon: 'https://cdn.simpleicons.org/vuedotjs' },
  { name: 'Nuxt', url: 'https://nuxt.com', icon: 'https://cdn.simpleicons.org/nuxt' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'https://cdn.simpleicons.org/html5' },
  { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'https://cdn.simpleicons.org/css' },
  { name: 'Tailwind', url: 'https://tailwindcss.com', icon: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Stripe', url: 'https://stripe.com', icon: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Supabase', url: 'https://supabase.com', icon: 'https://cdn.simpleicons.org/supabase' },
  { name: 'Strapi', url: 'https://strapi.io', icon: 'https://cdn.simpleicons.org/strapi' },
  { name: 'PHP', url: 'https://www.php.net', icon: 'https://cdn.simpleicons.org/php' },
  { name: 'Laravel', url: 'https://laravel.com', icon: 'https://cdn.simpleicons.org/laravel' },
  { name: 'Java', url: 'https://www.java.com', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', url: 'https://www.python.org', icon: 'https://cdn.simpleicons.org/python' },
  { name: 'Linux', url: 'https://www.linux.org', icon: 'https://cdn.simpleicons.org/linux' },
  { name: 'Docker', url: 'https://www.docker.com', icon: 'https://cdn.simpleicons.org/docker' },
  { name: 'Node', url: 'https://nodejs.org', icon: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'GitHub', url: 'https://github.com', icon: 'https://cdn.simpleicons.org/github' },
  { name: 'GitLab', url: 'https://gitlab.com', icon: 'https://cdn.simpleicons.org/gitlab' },
  { name: 'Git', url: 'https://git-scm.com', icon: 'https://cdn.simpleicons.org/git' },
  { name: 'AWS', url: 'https://aws.amazon.com', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Jupyter', url: 'https://jupyter.org', icon: 'https://cdn.simpleicons.org/jupyter' },
  { name: 'Trello', url: 'https://trello.com', icon: 'https://cdn.simpleicons.org/trello' },
  { name: 'Jira', url: 'https://www.atlassian.com/software/jira', icon: 'https://cdn.simpleicons.org/jira' },
  { name: 'Claude Code', url: 'https://claude.com/claude-code', icon: 'https://cdn.simpleicons.org/claude' },
]
</script>

<template>
  <section class="stack section">
    <div class="stack__bg" aria-hidden="true">
      <svg class="stack__wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="stack__wave-path"
          d="M0,150 C240,80 480,220 720,150 C960,80 1200,220 1440,150"
        />
      </svg>
    </div>

    <div class="container stack__inner">
      <p class="section__eyebrow stack__eyebrow">Toolbox</p>
      <h2 class="section__title stack__title">What I build with</h2>

      <ul class="stack__grid">
        <li v-for="tech in technologies" :key="tech.name">
          <a :href="tech.url" target="_blank" rel="noopener noreferrer" class="stack__card">
            <span class="stack__icon-badge">
              <img :src="tech.icon" :alt="tech.name" class="stack__icon" loading="lazy" />
            </span>
            <span class="stack__name">{{ tech.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.stack {
  position: relative;
  overflow: hidden;
  background: var(--color-black);
}

.stack__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.stack__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.stack__wave-path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.35;
  animation: stack-wave-float 12s ease-in-out infinite alternate;
}

@keyframes stack-wave-float {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(-20px) scaleY(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stack__wave-path {
    animation: none;
  }
}

.stack__inner {
  position: relative;
  z-index: 1;
}

.stack__eyebrow {
  color: var(--color-accent);
}

.stack__title {
  color: #ffffff;
}

.stack__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 40px;
}

.stack__grid li {
  display: flex;
}

.stack__card {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 28px 16px;
  border-radius: 18px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease,
    background 0.25s ease, box-shadow 0.25s ease;
}

.stack__card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
  box-shadow: 0 16px 32px -18px rgba(var(--highlight-rgb), 0.5);
}

.stack__icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #ffffff;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.stack__card:hover .stack__icon-badge {
  transform: scale(1.08) rotate(-4deg);
}

.stack__icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.stack__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text);
  text-align: center;
}
</style>
