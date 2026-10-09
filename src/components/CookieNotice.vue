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
  <div v-if="visible" class="cookie-notice" role="status">
    <div class="container cookie-notice__inner">
      <p class="cookie-notice__text">
        No tracking or analytics cookies here — this site just loads fonts and icons from a couple of
        external services. <NuxtLink to="/privacy">Learn more</NuxtLink>.
      </p>

      <button type="button" class="btn btn--glass-white cookie-notice__btn" @click="dismiss">
        <span class="btn__label">
          <span class="btn__label-text">Got it</span>
          <span class="btn__label-text btn__label-text--clone" aria-hidden="true">Got it</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.cookie-notice {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  background: var(--color-black);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cookie-notice__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.cookie-notice__text {
  max-width: 560px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
}

.cookie-notice__text a {
  color: var(--color-accent);
  text-decoration: underline;
}

.cookie-notice__btn {
  height: 42px;
  padding: 0 20px;
  font-size: 0.78rem;
  flex-shrink: 0;
}

@media (max-width: 560px) {
  .cookie-notice__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .cookie-notice__btn {
    align-self: flex-start;
  }
}
</style>
