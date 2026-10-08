<script setup>
const technologies = [
  { name: 'PHP', url: 'https://www.php.net', icon: 'https://cdn.simpleicons.org/php' },
  { name: 'Laravel', url: 'https://laravel.com', icon: 'https://cdn.simpleicons.org/laravel' },
  { name: 'Vue', url: 'https://vuejs.org', icon: 'https://cdn.simpleicons.org/vuedotjs' },
  { name: 'Nuxt', url: 'https://nuxt.com', icon: 'https://cdn.simpleicons.org/nuxt' },
  { name: 'Supabase', url: 'https://supabase.com', icon: 'https://cdn.simpleicons.org/supabase' },
  { name: 'Stripe', url: 'https://stripe.com', icon: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Python', url: 'https://www.python.org', icon: 'https://cdn.simpleicons.org/python' },
  { name: 'GitHub', url: 'https://github.com', icon: 'https://cdn.simpleicons.org/github' },
  { name: 'GitLab', url: 'https://gitlab.com', icon: 'https://cdn.simpleicons.org/gitlab' },
  { name: 'AWS', url: 'https://aws.amazon.com', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Jupyter', url: 'https://jupyter.org', icon: 'https://cdn.simpleicons.org/jupyter' },
  { name: 'Strapi', url: 'https://strapi.io', icon: 'https://cdn.simpleicons.org/strapi' },
  { name: 'Trello', url: 'https://trello.com', icon: 'https://cdn.simpleicons.org/trello' },
  { name: 'Java', url: 'https://www.java.com', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Claude Code', url: 'https://claude.com/claude-code', icon: 'https://cdn.simpleicons.org/claude' },
]
</script>

<template>
  <section class="stack section section--muted">
    <div class="container">
      <p class="section__eyebrow">Toolbox</p>
      <h2 class="section__title">What I build with</h2>

      <ul class="stack__grid">
        <li v-for="tech in technologies" :key="tech.name">
          <a :href="tech.url" target="_blank" rel="noopener noreferrer" class="stack__card">
            <img :src="tech.icon" :alt="tech.name" class="stack__icon" loading="lazy" />
            <span class="stack__name">{{ tech.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
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
  gap: 14px;
  padding: 28px 16px;
  border-radius: 18px;
  background: #ffffff;
  border: 1.5px solid var(--color-border);
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.stack__card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: 0 12px 24px -16px rgba(23, 20, 18, 0.25);
}

.stack__icon {
  width: 40px;
  height: 40px;
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
