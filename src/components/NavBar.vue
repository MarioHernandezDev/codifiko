<script setup>
const open = ref(false)
const route = useRoute()

function toggle() {
  open.value = !open.value
}

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

watch(
  () => route.fullPath,
  () => {
    open.value = false
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="nav">
    <div class="nav__inner container">
      <NuxtLink to="/" class="nav__logo">
        Mario Hernández<span>.</span>
      </NuxtLink>

      <button
        type="button"
        class="nav__toggle"
        :class="{ 'nav__toggle--open': open }"
        :aria-expanded="open"
        aria-controls="nav-links"
        aria-label="Toggle navigation menu"
        @click="toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="nav-links" class="nav__links" :class="{ 'nav__links--open': open }" aria-label="Main navigation">
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
  background: var(--color-black);
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
  color: #ffffff;
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
  color: rgba(255, 255, 255, 0.82);
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  position: relative;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav__link:hover {
  color: var(--color-accent);
  background: rgba(255, 255, 255, 0.06);
}

.nav__link.router-link-exact-active {
  color: var(--color-accent);
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

.nav__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  margin-right: calc(-1 * clamp(12px, 4vw, 20px));
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 60;
}

.nav__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.2s ease;
}

.nav__toggle--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav__toggle--open span:nth-child(2) {
  opacity: 0;
}

.nav__toggle--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    position: fixed;
    z-index: 49;
    top: var(--nav-height);
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    flex-direction: column;
    align-items: stretch;
    margin-right: 0;
    background: var(--color-black);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 0 24px;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
  }

  .nav__links--open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  .nav__link {
    height: auto;
    padding: 18px var(--container-pad);
    font-size: 1.05rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .nav__link.router-link-exact-active::after {
    display: none;
  }

  .nav__link.router-link-exact-active {
    background: rgba(var(--highlight-rgb), 0.1);
  }
}
</style>
