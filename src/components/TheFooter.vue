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
        <a href="mailto:marioherpad.01@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/marioherpad/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <NuxtLink to="/cv">CV</NuxtLink>
      </div>
    </div>

    <div class="footer__bottom container">
      <p>© {{ year }} Mario Hernández Padial. All rights reserved.</p>
      <nav class="footer__legal" aria-label="Legal">
        <NuxtLink to="/legal">Legal notice</NuxtLink>
        <NuxtLink to="/privacy">Privacy policy</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-black);
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
  color: #ffffff;
}

.footer__role {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.55);
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
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer__links a:hover,
.footer__social a:hover {
  color: var(--color-accent);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  padding-bottom: 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.footer__bottom p {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.8rem;
}

.footer__legal {
  display: flex;
  gap: 20px;
}

.footer__legal a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.8rem;
  transition: color 0.2s ease;
}

.footer__legal a:hover {
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    gap: 24px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
