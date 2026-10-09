<script setup>
const visible = ref(false)

onMounted(() => {
  try {
    if (!localStorage.getItem('cookie-notice-dismissed')) {
      visible.value = true
    }
  } catch {
    visible.value = true
  }
})

function dismiss() {
  visible.value = false

  try {
    localStorage.setItem('cookie-notice-dismissed', '1')
  } catch {
    // ignore
  }
}
</script>

<template>
  <Transition name="cookie-card">
    <aside
      v-if="visible"
      class="cookie-notice"
      role="status"
      aria-label="Cookie notice"
    >
      <div class="cookie-notice__header">
       

        <span class="cookie-notice__eyebrow">
          A little note
        </span>
      </div>

      <h2 class="cookie-notice__title">
        Your privacy matters.
      </h2>

      <p class="cookie-notice__text">
        No tracking or analytics cookies here. We only load fonts and icons
        from a couple of external services.
        <NuxtLink to="/privacy">
          Learn more
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </p>

      <div class="cookie-notice__footer">
        <span class="cookie-notice__caption">
          No unnecessary cookies.
        </span>

        <button
          type="button"
          class="btn btn--glass-white cookie-notice__btn"
          @click="dismiss"
        >
          <span class="btn__label">
            <span class="btn__label-text">Got it</span>
            <span
              class="btn__label-text btn__label-text--clone"
              aria-hidden="true"
            >
              Got it
            </span>
          </span>

          <i aria-hidden="true">→</i>
        </button>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.cookie-notice {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 100;

  width: min(390px, calc(100vw - 32px));
  padding: 26px;

  background: var(--color-black);
  color: #ffffff;

  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.08);
}

.cookie-notice__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
}

.cookie-notice__icon {
  display: grid;
  place-items: center;

  width: 36px;
  height: 36px;

  color: var(--color-accent);
  background: rgba(var(--highlight-rgb), 0.12);
  border: 1px solid rgba(var(--highlight-rgb), 0.18);
  border-radius: 11px;
}

.cookie-notice__icon svg {
  width: 20px;
  height: 20px;
}

.cookie-notice__eyebrow {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.cookie-notice__title {
  margin-bottom: 12px;

  color: #ffffff;
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.cookie-notice__text {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.85rem;
  line-height: 1.8;
}

.cookie-notice__text a {
  display: inline-flex;
  align-items: center;
  gap: 4px;

  color: var(--color-accent);
  font-weight: 600;
  text-decoration: none;

  transition: color 0.25s ease;
}

.cookie-notice__text a:hover {
  color: #ffffff;
}

.cookie-notice__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  margin-top: 24px;
  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.cookie-notice__caption {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.7rem;
  line-height: 1.5;
}

.cookie-notice__btn {
  flex-shrink: 0;
  height: 42px;
  padding: 0 17px;
  font-size: 0.72rem;
}

/* Entrada y salida de la tarjeta */
.cookie-card-enter-active,
.cookie-card-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.cookie-card-enter-from,
.cookie-card-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

/* Adaptación a móviles */
@media (max-width: 480px) {
  .cookie-notice {
    right: 16px;
    bottom: 16px;
    width: calc(100vw - 32px);
    padding: 22px;
    border-radius: 17px;
  }

  .cookie-notice__header {
    margin-bottom: 18px;
  }

  .cookie-notice__title {
    font-size: 1.5rem;
  }

  .cookie-notice__footer {
    margin-top: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cookie-card-enter-active,
  .cookie-card-leave-active {
    transition: none;
  }
}
</style>