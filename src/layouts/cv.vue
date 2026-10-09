<template>
  <div class="cv-layout">
    <div class="cv-bar no-print">
      <NuxtLink to="/contact" class="btn btn--glass-white cv-bar__back">
        <span class="btn__label">
          <span class="btn__label-text">Back to site</span>
          <span class="btn__label-text btn__label-text--clone" aria-hidden="true">Back to site</span>
        </span>
        <i aria-hidden="true">&larr;</i>
      </NuxtLink>
      <button type="button" class="btn btn--glass-dark cv-bar__download" @click="print">
        <span class="btn__label">
          <span class="btn__label-text">Download PDF</span>
          <span class="btn__label-text btn__label-text--clone" aria-hidden="true">Download PDF</span>
        </span>
        <i aria-hidden="true">&darr;</i>
      </button>
    </div>

    <main class="cv-layout__main">
      <slot />
    </main>
  </div>
</template>

<script setup>
function print() {
  window.print()
}
</script>

<style scoped>
.cv-layout {
  min-height: 100vh;
  background: var(--color-surface);
}

.cv-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px var(--container-pad);
  background: var(--color-black);
}

/* La flecha apunta hacia atrás, así que se mueve a la izquierda al hover
   (al revés que el resto de botones, que apuntan hacia delante). */
.cv-bar__back:hover i {
  transform: translateX(-4px);
}

.cv-layout__main {
  padding: clamp(24px, 5vw, 56px) var(--container-pad) 64px;
}

@media print {
  .no-print {
    display: none !important;
  }

  .cv-layout {
    background: #ffffff;
  }

  .cv-layout__main {
    padding: 0;
  }
}
</style>
