<template>
  <div class="relative w-[220px] h-[220px] flex items-center justify-center select-none group">
    <div class="loader">
      <span class="loader-message font-mono">
        GRX_SYS
      </span>
    </div>
    
    <div class="absolute inset-0 bg-cyan-500/10 rounded-full filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  </div>
</template>

<style scoped>
/* Variables locales en CSS puro basadas en tu código */
.relative {
  --circle-width: 200px;
  --shadow-blur: 25px;
  --shadow-spread: 3px;
  
  /* Tu paleta de colores translúcidos filtrados */
  --purple: rgba(190, 11, 224, 0.45);
  --yellow: rgba(235, 255, 0, 0.4);
  --blue: rgba(0, 133, 255, 0.5);
  --red: rgba(255, 0, 0, 0.3);
  --orange: rgba(253, 127, 11, 0.4);
  --green: rgba(22, 243, 3, 0.4);
}

.loader {
  position: relative;
  width: var(--circle-width);
  height: var(--circle-width);
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
    10px -5px var(--shadow-blur) var(--shadow-spread) var(--blue),
    inset 2px -5px var(--shadow-blur) 0px var(--yellow),
    2px 10px var(--shadow-blur) calc(var(--shadow-spread) * 2) var(--green);
}

/* Al pasar el ratón, la energía se expande */
.group:hover .loader {
  transform: scale(1.08);
  box-shadow:
    15px -8px calc(var(--shadow-blur) * 1.5) calc(var(--shadow-spread) * 1.5) var(--blue),
    inset 4px -8px calc(var(--shadow-blur) * 1.5) 0px var(--yellow),
    4px 15px calc(var(--shadow-blur) * 1.5) calc(var(--shadow-spread) * 3) var(--green);
}

/* Pseudo-elemento Before: Capa Líquida Morada/Azul */
.loader::before {
  content: "";
  display: block;
  width: var(--circle-width);
  height: var(--circle-width);
  border-radius: 40% 60% 86% / 50% 60% 40% 70%;
  background: var(--purple);
  filter: blur(8px);
  box-shadow:
    10px 10px var(--shadow-blur) 0px var(--blue),
    inset -7px -5px var(--shadow-blur) 0px var(--yellow);
  animation: spin 8s linear infinite;
}

/* Pseudo-elemento After: Capa Líquida Amarilla/Roja */
.loader::after {
  content: "";
  display: block;
  width: var(--circle-width);
  height: var(--circle-width);
  border-radius: 60% 50% 75% / 60% 40% 70% 50%;
  background: var(--yellow);
  filter: blur(8px);
  box-shadow:
    -10px -12px var(--shadow-blur) 0px var(--red),
    inset 7px -2px var(--shadow-blur) 0px var(--orange);
  position: absolute;
  top: 0;
  animation: spin-alt 4s linear infinite;
}

/* El núcleo del mensaje central estilo Apple/Cibernético */
.loader-message {
  display: block;
  text-align: center;
  background: #080809; /* El fondo exacto de tu web */
  width: calc(var(--circle-width) * 0.90);
  height: calc(var(--circle-width) * 0.90);
  line-height: calc(var(--circle-width) * 0.90);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 4px;
  color: #fff;
  
  /* Centrado absoluto */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  transition: all 0.3s ease;
}

.group:hover .loader-message {
  color: #22d3ee;
  border-color: rgba(34, 211, 238, 0.4);
  text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
  box-shadow: 0px 0px 25px rgba(34, 211, 238, 0.15);
}

/* Animaciones fluidas corregidas */
@keyframes spin {
  0% { transform: rotate(0deg) scale(1.0); }
  50% { transform: rotate(180deg) scale(1.1); border-radius: 50% 60% 40% 70% / 40% 50% 60% 50%; }
  100% { transform: rotate(360deg) scale(1.0); }
}

@keyframes spin-alt {
  0% { transform: rotate(0deg) scale(1.0); }
  50% { transform: rotate(-180deg) scale(1.15); border-radius: 40% 70% 50% 60% / 60% 40% 70% 40%; }
  100% { transform: rotate(-360deg) scale(1.0); }
}
</style>