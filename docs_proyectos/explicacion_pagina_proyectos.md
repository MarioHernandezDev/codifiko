# Página "Proyectos" — cómo está hecha, explicado paso a paso

Este documento explica, como si lo hubieras escrito tú, qué se ha montado en la
web para convertir el pipeline de `Proyecto_Rendimiento_deportivo.ipynb` en una
demo interactiva dentro de tu portfolio.

## 1. La idea de fondo

El notebook diseña un pipeline ETL: coger entrenamientos de deportistas
(Google Forms/Sheets) y cruzarlos con el clima real del momento (API
Open-Meteo), para analizar si el calor o la humedad afectan al rendimiento.

Llevar ese pipeline *tal cual* a la web no tenía sentido: no vas a tener
deportistas reales rellenando un formulario para cada visitante de tu página.
Así que la demo web reproduce el mismo **diseño** del pipeline (ingesta →
limpieza/validación → combinación → visualización) pero con un cambio:

- El **clima es real** — se pide en directo a Open-Meteo, igual que en el notebook.
- Los **entrenamientos son sintéticos** — se generan en el navegador cuando
  pulsas "Simular entrenamiento", en vez de venir de un Google Form.

Es la misma arquitectura, adaptada para que un visitante cualquiera pueda
jugar con ella sin depender de datos reales de terceros.

## 2. Qué archivos se han creado y para qué sirve cada uno

```
server/api/weather.get.ts                        → el "Etapa 2" del notebook (API en tiempo real)
src/composables/useSimulatedTraining.ts           → el "Etapa 1" del notebook (generación de la fila de entrenamiento)
src/components/proyectos/RendimientoDeportivo.vue → el "Etapa 5" del notebook (join + limpieza + visualización)
src/pages/proyectos/index.vue                     → listado de proyectos (ampliable a futuros)
src/pages/proyectos/rendimiento-deportivo.vue     → la página de este proyecto en concreto
```

Además se ha tocado `NavBar.vue` y `TheFooter.vue` para añadir el enlace
"Proyectos" al menú, y `package.json` para añadir dos librerías nuevas:
`echarts` y `vue-echarts` (la librería de gráficos).

### 2.1 `server/api/weather.get.ts` — el proxy al clima real

Nuxt permite crear "rutas de servidor" dentro de la carpeta `server/api/`.
Cada archivo ahí se convierte automáticamente en un endpoint — en Vercel, en
una función serverless (lo mismo que ya usáis para el resto del sitio, no es
tecnología nueva).

Este archivo recibe `lat` y `lon` por query string, valida que sean números
razonables (si no, responde `400`), y llama a:

```
https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index,precipitation&timezone=Europe/Madrid
```

exactamente los mismos parámetros que describe la Etapa 2 del notebook. Luego
devuelve solo los campos que nos interesan (`temp_c`, `humedad_pct`,
`viento_kmh`, `uv_index`, `precipitacion_mm`).

**¿Por qué una ruta de servidor y no llamar a Open-Meteo directamente desde el
navegador?** Dos razones: evita problemas de CORS, y permite añadir una
cabecera de caché (`Cache-Control: public, max-age=300`) para no golpear la
API externa en cada clic si varias personas piden el clima de la misma
ciudad casi al mismo tiempo.

### 2.2 `src/composables/useSimulatedTraining.ts` — el generador de entrenamientos

Aquí viven:

- `SPORTS` y `CITIES`: las listas de deportes y ciudades disponibles (con sus
  coordenadas, para poder pedir el clima de cada una).
- `generateSyntheticSession(deporte, ciudad, weather)`: la función que crea
  una fila de "entrenamiento" con el mismo esquema de columnas que diseñaste
  en el notebook (`duracion_min`, `distancia_km`, `esfuerzo_percibido`,
  `sensacion_general`, más los campos de clima).

Un par de detalles de diseño que merece la pena que entiendas:

- **La distancia puede ser nula**, igual que comentaste en el notebook para
  natación en piscina: aquí se modela con una probabilidad por deporte
  (`distanciaProb`). Fútbol, por ejemplo, nunca lleva distancia.
- **El esfuerzo percibido se sesga con la temperatura y la humedad reales**
  (+1 si hace >24°C, +2 si hace >30°C, +1 si la humedad supera el 75%). Esto
  es intencionado: es la forma de que la demo *ilustre* la hipótesis del
  notebook ("¿se entrena peor con calor?") en vez de generar ruido puramente
  aleatorio sin relación con el clima. Está dejado explícito en un comentario
  del código y en el texto de la propia página, para que quede claro que no
  son datos reales de deportistas.

### 2.3 `src/components/proyectos/RendimientoDeportivo.vue` — el componente principal

Es el corazón de la demo. Se divide en tres bloques:

**a) El "formulario" (simulador)**

Dos `<select>` (deporte, ciudad) y un botón "Simular entrenamiento". Al
pulsarlo:

1. Busca las coordenadas de la ciudad elegida.
2. Llama a `/api/weather` (la ruta de servidor del punto 2.1) con esas
   coordenadas.
3. Si la llamada falla, no se pierde el dato: se guarda igual la sesión, con
   los campos de clima a `null` y `clima_disponible: false` — exactamente la
   misma estrategia de tolerancia a fallos que describiste en la Etapa 2/5
   del notebook (nunca se descarta un entrenamiento por un fallo de la API).
4. Genera la fila sintética con `generateSyntheticSession` y la añade a la
   lista de sesiones de la sesión del navegador (no se guarda en ningún sitio
   del servidor; si recargas la página, se reinicia — es una demo, no una
   base de datos real).

**b) Las tarjetas KPI y los filtros**

Debajo aparecen 4 tarjetas con números resumen (sesiones simuladas,
temperatura media, esfuerzo medio, deporte más simulado) y dos filtros
(deporte, ciudad) que afectan a *todo* lo que hay debajo: las tarjetas, los 3
gráficos y la tabla. Es el mismo dato, visto desde distintos ángulos.

**c) Los 3 gráficos (con ECharts)**

Se eligieron deliberadamente **3 gráficos de un solo eje cada uno** (nunca un
gráfico con dos escalas Y mezcladas — eso suele "inventar" correlaciones que
no existen en los datos):

1. **Dispersión (scatter)**: temperatura vs. esfuerzo percibido. Es el
   gráfico que responde directamente a la pregunta del notebook.
2. **Barras**: nº de sesiones por deporte.
3. **Línea**: evolución del esfuerzo percibido sesión a sesión.

Los gráficos usan un solo color (el verde oscuro del propio sitio,
`--color-accent-dark`) en vez de un color por categoría — con solo 1 serie de
datos por gráfico no hace falta leyenda ni distinguir colores, así que se
evita el problema típico de meter demasiados colores sin necesidad.

Debajo de los gráficos hay un enlace "Ver tabla de datos": muestra la misma
información en una tabla HTML normal, por dos motivos — accesibilidad (no
todo el mundo puede leer un gráfico de color) y porque es literalmente el
dataset final que describiste en la sección 2.2 del notebook.

Los gráficos están envueltos en `<ClientOnly>`. Esto es importante: ECharts
necesita el navegador (usa un `<canvas>`), así que no se puede "pre-renderizar"
en el servidor como el resto de la página. `<ClientOnly>` le dice a Nuxt "esto
solo se dibuja una vez la página ya está en el navegador del visitante";
mientras tanto se muestra un mensaje de "Cargando gráficos…".

### 2.4 Las páginas

- `src/pages/proyectos/index.vue`: un índice con tarjetas (ahora mismo solo
  una, la de Rendimiento deportivo). Está hecho como una lista, así que añadir
  un segundo proyecto en el futuro es solo añadir un objeto más al array
  `projects`.
- `src/pages/proyectos/rendimiento-deportivo.vue`: usa el mismo componente
  `<PageHero>` que ya usan `/about` y el resto de páginas del sitio (el "mini
  hero" que pediste), y debajo mete el componente de la demo
  (`<ProyectosRendimientoDeportivo />`).

Un detalle de Nuxt que quizá no conocías: los componentes dentro de
`src/components/<carpeta>/Archivo.vue` se auto-importan con el nombre
`<CarpetaArchivo>` sin tener que escribir ningún `import` en la página. Por
eso `RendimientoDeportivo.vue`, al estar en `components/proyectos/`, se usa en
la página como `<ProyectosRendimientoDeportivo />` — es exactamente el mismo
patrón que ya usa tu sitio con `<AboutSkills>`, `<HomeStack>`, etc.

## 3. Cómo se ha comprobado que funciona

Antes de darlo por terminado:

- Se levantó el servidor de desarrollo (`npm run dev`) y se comprobó que
  arranca sin errores.
- Se comprobó que `/proyectos` y `/proyectos/rendimiento-deportivo` responden
  `200` y que el HTML generado en el servidor incluye el contenido del
  componente nuevo.
- Se probó `/api/weather` directamente: con coordenadas de Granada devuelve
  el clima real del momento; con parámetros inválidos responde `400` en vez
  de romperse.
- Se comprobó que todos los módulos nuevos (`echarts`, `vue-echarts` y sus
  piezas internas) se compilan y resuelven correctamente en el navegador.

**Lo que no se ha podido comprobar** (no había una herramienta de navegador
disponible en esta sesión): el "clic real" del botón "Simular entrenamiento"
viendo los gráficos pintarse en pantalla. Te recomiendo arrancar `npm run dev`
y probarlo tú mismo un momento antes de darlo por bueno del todo — sobre todo
mirar que los gráficos se vean bien en móvil.

## 4. Qué podrías añadir más adelante

- Un segundo proyecto en `/proyectos` (el índice ya está pensado para eso).
- Guardar las sesiones simuladas en `localStorage` para que no se pierdan al
  recargar la página (ahora mismo son solo del estado de la sesión del
  navegador).
- Sustituir las ciudades fijas por un buscador con el geocoding gratuito de
  Open-Meteo, si algún día quieres permitir cualquier ciudad del mundo.
