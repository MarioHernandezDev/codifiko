<script setup>
usePageSeo({
  title: 'Projects — Mario Hernández Padial',
  description: 'Machine Learning and data analytics projects by Mario Hernández Padial, with interactive demos built with Vue and Nuxt.',
})

const projects = [
  {
    title: 'Sports Performance & Weather',
    desc: 'Interactive simulation of a real ETL pipeline: synthetic training sessions cross-referenced with live weather data (Open-Meteo), with real-time charts and filters.',
    tag: "Machine Learning · Master's project",
    to: '/proyectos/rendimiento-deportivo',
  },
]
</script>

<template>
  <PageHero eyebrow="Projects">
    <template #title>
      <span class="reveal" style="--reveal-delay: .12s"><span>Data &</span></span>
      <span class="reveal" style="--reveal-delay: .2s"><span><i>ML</i> projects.</span></span>
    </template>
    <template #text>Interactive demos of the projects I'm building throughout my Machine Learning master's.</template>
  </PageHero>

  <section class="proyectos section">
    <div class="container">
      <div class="proyectos__grid">
        <NuxtLink v-for="project in projects" :key="project.to" :to="project.to" class="proyectos__card">
          <div class="proyectos__cover">
            <svg class="proyectos__cover-art" viewBox="0 0 320 180" preserveAspectRatio="none" aria-hidden="true">
              <line x1="24" y1="20" x2="24" y2="150" stroke="rgba(244,237,225,0.18)" stroke-width="1" />
              <line x1="24" y1="150" x2="300" y2="150" stroke="rgba(244,237,225,0.18)" stroke-width="1" />
              <polyline points="24,130 55,95 86,112 117,70 148,85 179,45" fill="none" stroke="#f4ede1" stroke-width="2" stroke-dasharray="5 6" />
              <circle cx="24" cy="130" r="5" fill="#c6ff5e" />
              <circle cx="55" cy="95" r="5" fill="#c6ff5e" />
              <circle cx="86" cy="112" r="5" fill="#c6ff5e" />
              <circle cx="117" cy="70" r="5" fill="#c6ff5e" />
              <circle cx="148" cy="85" r="5" fill="#c6ff5e" />
              <circle cx="179" cy="45" r="5" fill="#c6ff5e" />
              <rect x="216" y="110" width="16" height="40" fill="#f3a6c4" />
              <rect x="240" y="80" width="16" height="70" fill="#f3a6c4" />
              <rect x="264" y="95" width="16" height="55" fill="#f3a6c4" />
              <rect x="288" y="60" width="16" height="90" fill="#f3a6c4" />
            </svg>
            <span class="proyectos__cover-label">Live demo</span>
          </div>

          <div class="proyectos__body">
            <span class="proyectos__tag">{{ project.tag }}</span>
            <h2 class="proyectos__card-title">{{ project.title }}</h2>
            <p class="proyectos__card-desc">{{ project.desc }}</p>
            <span class="proyectos__card-link">View project <i aria-hidden="true">&rarr;</i></span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <HomeCta />
</template>

<style scoped>
.proyectos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 36px;
}

/* Bordes rectos y una sombra "pegatina" (bloque de color sólido, no blur)
   que se desplaza al hover, en vez del típico shadow difuminado de SaaS. */
.proyectos__card {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-text);
  background: #ffffff;
  text-decoration: none;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.proyectos__card::after {
  content: '';
  position: absolute;
  inset: 10px -10px -10px 10px;
  z-index: -1;
  background: var(--color-accent);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.proyectos__card:hover {
  transform: translate(-4px, -4px);
}

.proyectos__card:hover::after {
  transform: translate(6px, 6px);
}

.proyectos__cover {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #14140f;
  border-bottom: 2px solid var(--color-text);
}

.proyectos__cover-art {
  width: 100%;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.proyectos__card:hover .proyectos__cover-art {
  transform: scale(1.04);
}

.proyectos__cover-label {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 3px 10px;
  background: #c6ff5e;
  color: #14140f;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.proyectos__body {
  padding: 24px 26px 28px;
}

.proyectos__tag {
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.proyectos__card-title {
  margin-top: 16px;
  font-family: var(--font-display-heavy);
  font-weight: 400;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--color-text);
}

.proyectos__card-desc {
  margin-top: 12px;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.proyectos__card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.proyectos__card-link i {
  font-style: normal;
  transition: transform 0.2s ease;
}

.proyectos__card:hover .proyectos__card-link {
  color: var(--color-accent-dark);
}

.proyectos__card:hover .proyectos__card-link i {
  transform: translateX(4px);
}
</style>
