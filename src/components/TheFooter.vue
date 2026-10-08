<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__brand">
        <p class="footer__name">Mario Hernández Padial</p>
        <p class="footer__role">Web Developer &amp; Designer</p>
      </div>

      <nav class="footer__links" aria-label="Footer navigation">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>

      <div class="footer__social">
        <a href="mailto:hello@mariohernandez.dev">Email</a>
        <a href="#" target="_blank" rel="noopener">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>

    <div class="footer__bottom container">
      <p>© {{ year }} Mario Hernández Padial. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 56px;
  padding-bottom: 40px;
}

.footer__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--color-text);
}

.footer__role {
  margin-top: 4px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.footer__links,
.footer__social {
  display: flex;
  gap: 24px;
}

.footer__links a,
.footer__social a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer__links a:hover,
.footer__social a:hover {
  color: var(--color-accent-dark);
}

.footer__bottom {
  border-top: 1px solid var(--color-border);
  padding-top: 20px;
  padding-bottom: 28px;
}

.footer__bottom p {
  color: var(--color-text-muted);
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
