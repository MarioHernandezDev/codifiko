<template>
  <header class="nav">
    <div class="nav__inner container">
      <NuxtLink to="/" class="nav__logo">
        Mario Hernández<span>.</span>
      </NuxtLink>

      <nav class="nav__links" aria-label="Main navigation">
        <NuxtLink to="/" class="nav__link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav__link">About</NuxtLink>
        <NuxtLink to="/contact" class="nav__link">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: var(--nav-height);
  background: var(--color-bg);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.nav__logo {
  display: flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--color-text);
  text-decoration: none;
}

.nav__logo span {
  color: var(--color-accent);
}

.nav__links {
  display: flex;
  align-items: stretch;
  height: 100%;
  margin-right: calc(var(--container-pad) * -1);
}

.nav__link {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 clamp(18px, 3vw, 32px);
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  position: relative;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav__link:hover {
  color: var(--color-accent-dark);
  background: var(--color-accent-soft);
}

.nav__link.router-link-exact-active {
  color: var(--color-accent-dark);
}

.nav__link.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: var(--color-accent);
}

@media (max-width: 640px) {
  .nav__link {
    padding: 0 clamp(12px, 4vw, 20px);
    font-size: 0.875rem;
  }
}
</style>
