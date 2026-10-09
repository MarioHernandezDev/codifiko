<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroVideo = ref(null)
const nameVideoEl = ref(null)
const nameCanvas = ref(null)
let ctx = null
let boxWidth = 0
let boxHeight = 0
let rafId = null

function syncCanvasSize() {
  const el = nameVideoEl.value
  const canvas = nameCanvas.value
  if (!el || !canvas) return

  const rect = el.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  boxWidth = rect.width
  boxHeight = rect.height

  canvas.width = Math.max(1, Math.round(boxWidth * dpr))
  canvas.height = Math.max(1, Math.round(boxHeight * dpr))
  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function renderFrame() {
  rafId = requestAnimationFrame(renderFrame)

  const video = heroVideo.value
  const el = nameVideoEl.value
  if (!el || !ctx || !boxWidth || !boxHeight) return

  const style = getComputedStyle(el)
  ctx.clearRect(0, 0, boxWidth, boxHeight)
  ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#ffffff'
  ctx.fillText(el.textContent.trim().toUpperCase(), 0, boxHeight / 2)

  // Mientras el vídeo no tiene fotogramas listos, se deja el relleno blanco
  // de arriba como fallback en vez de pintar un hueco transparente.
  if (video && video.readyState >= 2) {
    ctx.globalCompositeOperation = 'source-in'
    ctx.drawImage(video, 0, 0, boxWidth, boxHeight)
    ctx.globalCompositeOperation = 'source-over'
  }
}

onMounted(() => {
  syncCanvasSize()
  window.addEventListener('resize', syncCanvasSize)
  rafId = requestAnimationFrame(renderFrame)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncCanvasSize)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section class="hero">
    <div class="hero__headline">
      <!-- Fondo animado integrado correctamente -->
      <div class="hero__bg" aria-hidden="true">
        <span class="hero__glow"></span>
        <svg class="hero__waves" viewBox="0 0 1440 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path class="hero__wave hero__wave--1" d="M0,120 C240,40 480,200 720,120 C960,40 1200,200 1440,120" />
          <path class="hero__wave hero__wave--2" d="M0,320 C240,420 480,240 720,320 C960,400 1200,240 1440,320" />
          <path class="hero__wave hero__wave--3" d="M0,480 C240,400 480,540 720,470 C960,400 1200,540 1440,470" />
        </svg>
      </div>

      <video
        ref="heroVideo"
        class="hero__video-source"
        src="/img/herovid.mp4"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      ></video>

      <div class="container hero__container">
        <h1 class="hero__name">
          <span class="reveal" style="--reveal-delay: .08s"><span>Mario</span></span>
          <span class="reveal" style="--reveal-delay: .16s"><span>Hern<span class="hero__name-video" ref="nameVideoEl">and<canvas ref="nameCanvas" class="hero__name-canvas" aria-hidden="true"></canvas></span>ez</span></span>
          <span class="reveal" style="--reveal-delay: .24s"><span>Padial<i class="hero__dot">.</i></span></span>
        </h1>

        <div class="hero__intro">
          <p class="hero__intro-col reveal" style="--reveal-delay: .38s">
            <span>Nowadays, I'm a <mark>web developer and designer</mark>, but something is changing now...</span>
          </p>

          <p class="hero__intro-col reveal" style="--reveal-delay: .46s">
            <span>Currently pursuing a <mark>Master's degree</mark> in Machine Learning, Data Management &amp; Training.</span>
          </p>

          <NuxtLink to="/contact" class="hero__cta reveal" style="--reveal-delay: .56s">
            <span class="btn btn--glass-white">
              <span class="btn__label">
                <span class="btn__label-text">Get in touch</span>
                <span class="btn__label-text btn__label-text--clone" aria-hidden="true">Get in touch</span>
              </span>
              <i aria-hidden="true">&rarr;</i>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero__headline {
  position: relative;
  background: var(--color-black, #0a0806);
  padding: clamp(56px, 10vw, 96px) 0 clamp(60px, 8vw, 90px);
}

/* Contenedor del fondo animado (líneas + resplandor) — capa más al fondo */
.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* Foto como elemento propio, a media anchura, entre las líneas y el texto */
.hero__photo {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 54%;
  z-index: 1;
  overflow: hidden;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
  pointer-events: none;
}

.hero__photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 8, 6, 0.85) 0%, rgba(10, 8, 6, 0) 28%),
    linear-gradient(0deg, rgba(10, 8, 6, 0.3), transparent 35%);
}

.hero__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Resplandor de acento difuminado */
.hero__glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  filter: blur(60px);
}

/* Estilos de las ondas SVG */
.hero__waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
}

.hero__wave {
  fill: none;
  stroke: var(--color-accent, #fb923c);
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.5;
  animation: waveFloat 12s ease-in-out infinite alternate;
}

.hero__wave--1 {
  stroke-width: 2;
  opacity: 0.7;
}

.hero__wave--2 {
  animation-duration: 16s;
  animation-delay: -2s;
  opacity: 0.4;
}

.hero__wave--3 {
  animation-duration: 20s;
  animation-delay: -5s;
  opacity: 0.25;
}

@keyframes waveFloat {
  0% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(-20px) scaleY(1.05);
  }
}

/* Contenedor principal de texto para asegurar la jerarquía por encima del fondo */
.hero__container {
  position: relative;
  z-index: 2;
}

.hero__name {
  font-family: var(--font-display-heavy, var(--font-display, sans-serif));
  font-weight: 700;
  text-transform: uppercase;
  font-size: clamp(3.25rem, 11vw, 9rem);
  line-height: 0.92;
  letter-spacing: -0.01em;
  color: #ffffff;
  overflow-wrap: anywhere;
}

.hero__dot {
  color: var(--color-accent);
  font-style: normal;
}

/* Vídeo invisible, solo usado como fuente de fotogramas para el relleno de texto */
.hero__video-source {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
}

/* Letras rellenas con el vídeo en movimiento: el texto real queda invisible
   (mantiene el layout) y el canvas pinta encima solo la forma de las letras */
.hero__name-video {
  position: relative;
  display: inline-block;
  color: transparent;
}

.hero__name-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero__intro {
  margin-top: clamp(32px, 5vw, 56px);
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: clamp(24px, 4vw, 48px);
  align-items: end;
}

.hero__intro-col span {
  display: block;
  font-size: 1rem;
  line-height: 1.6;
  color: #cfc9c0;
}

.hero__intro-col mark {
  background: rgba(138, 205, 151, 0.2);
  color: var(--color-accent);
  padding: 0 5px;
  border-radius: 4px;
  font-weight: 600;
}

/* Envoltorio del reveal */
.hero__cta {
  display: inline-block;
  justify-self: start;
  text-decoration: none;
  padding: 20px;
  margin: -20px;
  overflow: hidden;
}

/* .reveal > * fuerza display:block en su hijo directo (el botón);
   lo recuperamos para que la píldora no se estire */
.hero__cta.reveal > .btn {
  display: inline-flex;
}

@media (max-width: 800px) {
  .hero__name {
    font-size: clamp(1.75rem, 9.5vw, 9rem);
  }

  .hero__intro {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hero__photo {
    display: none;
  }
}
</style>