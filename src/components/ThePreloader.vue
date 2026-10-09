<script setup>
const emit = defineEmits(['done'])

const show = ref(true)
let minTimer = null
let minElapsed = false
let pageLoaded = false

function tryFinish() {
  if (minElapsed && pageLoaded) {
    show.value = false
  }
}

onMounted(() => {
  document.body.style.overflow = 'hidden'

  minTimer = setTimeout(() => {
    minElapsed = true
    tryFinish()
  }, 900)

  if (document.readyState === 'complete') {
    pageLoaded = true
    tryFinish()
  } else {
    window.addEventListener(
      'load',
      () => {
        pageLoaded = true
        tryFinish()
      },
      { once: true }
    )
  }
})

onUnmounted(() => {
  clearTimeout(minTimer)
})

function onFadeLeave() {
  document.body.style.overflow = ''
  emit('done')
}
</script>

<template>
  <Transition name="preloader-fade" @after-leave="onFadeLeave">
    <div v-if="show" class="preloader" aria-hidden="true">
      <div class="preloader__inner">
        <p class="preloader__logo">Mario Hernández<span>.</span></p>
        <div class="preloader__bar">
          <span class="preloader__bar-fill"></span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
}

.preloader__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}

.preloader__logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.01em;
  color: #ffffff;
}

.preloader__logo span {
  color: var(--color-accent);
}

.preloader__bar {
  width: 160px;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.preloader__bar-fill {
  display: block;
  height: 100%;
  width: 36%;
  border-radius: 999px;
  background: var(--color-accent);
  animation: preloader-slide 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes preloader-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(370%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .preloader__bar-fill {
    animation: none;
    width: 100%;
  }
}

.preloader-fade-leave-active {
  transition: opacity 0.6s ease;
}

.preloader-fade-leave-to {
  opacity: 0;
}
</style>
