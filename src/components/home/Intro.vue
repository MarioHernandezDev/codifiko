<template>
  <section class="intro">
    <div class="intro__bg" aria-hidden="true">
      <svg class="intro__wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="intro__wave-path"
          d="M0,150 C240,80 480,220 720,150 C960,80 1200,220 1440,150"
        />
      </svg>
    </div>

    <div class="container intro__grid">
      <div class="intro__content">
        <div class="intro__header">
          <p class="section__eyebrow">About</p>
          <h2 class="section__title">
            From building the web to <span class="intro__title-accent">understanding the data</span> behind it.
          </h2>
        </div>

        <NuxtLink to="/about" class="btn btn--glass-dark intro__link">
          <span class="btn__label">
            <span class="btn__label-text">More about me</span>
            <span class="btn__label-text btn__label-text--clone" aria-hidden="true">More about me</span>
          </span>
          <i aria-hidden="true">&rarr;</i>
        </NuxtLink>
      </div>

      <div class="intro__media-wrapper">
        <div class="intro__media">
          <img src="/img/background-image.jpg" alt="" />
          <div class="intro__media-overlay"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  position: relative;
  /* Altura de pantalla completa para que la imagen tenga espacio de sobra para fijarse */
  min-height: 100vh;
  /* Cero padding arriba y abajo para que toque los bordes exactos de las secciones adyacentes */
  padding: 0; 
  display: flex;
  align-items: center;
}

.intro__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.intro__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.intro__wave-path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-dasharray: 2 14;
  opacity: 0.16;
  animation: intro-wave-flow 26s linear infinite;
}

@keyframes intro-wave-flow {
  to {
    stroke-dashoffset: -400;
  }
}

@media (prefers-reduced-motion: reduce) {
  .intro__wave-path {
    animation: none;
  }
}

.intro__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 64px);
  align-items: stretch; /* Estira ambos lados para ocupar el 100% de la altura de la sección */
  width: 100%;
}

/* El bloque de la izquierda se centra verticalmente de forma limpia */
.intro__content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(24px, 4vw, 32px);
  justify-content: center;
  padding: 80px 0; /* Espacio interno seguro para el texto */
  
  filter: drop-shadow(30px 20px 40px rgba(0, 0, 0, 0.45));
}

.intro__title-accent {
  font-family: var(--font-display-heavy);
  font-weight: 400;
  color: var(--color-accent-dark);
}

/* El wrapper ocupa el 100% de la altura del grid */
.intro__media-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

/* 
  LA MAGIA DEL STICKY PEGADO ARRIBA Y ABAJO:
  - top: 0 (o tu nav-height si quieres que respete el menú fijo).
  - height: 100vh hace que la foto cubra exactamente toda la altura de la ventana 
    de arriba a abajo mientras haces scroll.
*/
.intro__media {
  position: sticky;
  top: 0; /* Si tienes barra de navegación fija arriba, cámbialo por: top: var(--nav-height); */
  z-index: 2;
  height: 100vh; /* Ocupa el 100% de la altura de la pantalla de arriba a abajo */
  margin-right: calc(-50vw + 50%);
  overflow: hidden;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
}

.intro__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro__media-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: clamp(28px, 4vw, 48px);
  background: linear-gradient(0deg, rgba(14, 12, 10, 0.82) 0%, rgba(14, 12, 10, 0) 45%);
}

@media (max-width: 800px) {
  .intro {
    min-height: auto;
    padding: 40px 0;
  }

  .intro__grid {
    grid-template-columns: 1fr;
  }

  .intro__media-wrapper {
    height: auto;
  }

  .intro__media {
    position: static;
    height: 60vh;
    margin-left: calc(-1 * var(--container-pad));
    margin-right: calc(-1 * var(--container-pad));
    clip-path: none;
    order: -1;
  }

  .intro__content {
    padding: 0;
    filter: none;
  }
}
</style>