<template>
  <section id="terminal-game" class="relative w-full h-screen bg-[#0b0b0d] border-t border-b border-zinc-900/60 overflow-hidden flex items-center justify-center select-none">
    
    <div ref="canvasContainer" class="absolute inset-0 w-full h-full z-10"></div>

    <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-20"></div>

    <div class="absolute inset-0 z-30 flex flex-col justify-between p-8 pointer-events-none font-mono">
      
      <div class="flex justify-between items-start w-full">
        <div class="space-y-1">
          <div class="text-[10px] tracking-[0.2em] text-cyan-500 font-bold uppercase">// CORE_TEST: STACK_MODULE</div>
          <div class="text-[9px] text-zinc-600 uppercase">SYS_REF: 0x99A_BLOCKS</div>
        </div>
        <div class="text-right">
          <div class="text-[9px] text-zinc-500 uppercase">Current Layer</div>
          <div class="text-4xl font-black text-white tracking-tighter">{{ score }}</div>
        </div>
      </div>

      <div v-if="autopilot" class="max-w-xs mx-auto text-center space-y-4 pointer-events-auto bg-[#080809]/80 backdrop-blur-md p-6 border border-zinc-900 rounded-xl shadow-2xl animate-pulse">
        <p class="text-xs text-zinc-400">¿Tienes precisión de ingeniero?</p>
        <p class="text-[11px] text-zinc-500 leading-relaxed">
          Pulsa <span class="text-cyan-400 font-bold">[CLICK / ESPACIO]</span> para calibrar el sistema y apilar los módulos de datos en tiempo real.
        </p>
        <button @click="startGame" class="px-5 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-500 transition-colors">
          :: INICIAR_TEST_
        </button>
      </div>

      <div v-if="gameEnded && !autopilot" class="max-w-xs mx-auto text-center space-y-4 pointer-events-auto bg-black/90 backdrop-blur-md p-6 border border-red-500/20 rounded-xl shadow-2xl">
        <div class="text-xs text-red-500 font-bold tracking-widest">// ALINEACIÓN FALLIDA</div>
        <p class="text-[11px] text-zinc-400">Has perdido la calibración del bloque. Capas estables conseguidas: <span class="text-white font-bold">{{ score }}</span></p>
        <button @click="startGame" class="px-5 py-2 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest hover:border-white hover:text-white transition-colors">
          [ REINICIAR_SISTEMA (R) ]
        </button>
      </div>

      <div class="flex justify-between items-end w-full text-[9px] text-zinc-600 tracking-wider">
        <div>AUTOPILOT_MODE: <span :class="autopilot ? 'text-cyan-500' : 'text-zinc-500'">{{ autopilot ? 'ACTIVE' : 'OFF' }}</span></div>
        <div>RENDER_ENGINE: THREE_JS // CANNON_PHYSICS</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

const canvasContainer = ref(null)
const score = ref(0)
const autopilot = ref(true)
const gameEnded = ref(false)

// Variables del motor
let camera, scene, renderer, world
let lastTime = 0
let stack = []
let overhangs = []
const boxHeight = 1
const originalBoxSize = 3
let robotPrecision = 0
let animationFrameId = null

function setRobotPrecision() {
  robotPrecision = Math.random() * 0.8 - 0.4
}

// Inicializar Escena
const initEngine = () => {
  if (!canvasContainer.value) return

  // 1. CannonJS World
  world = new CANNON.World()
  world.gravity.set(0, -12, 0)
  world.broadphase = new CANNON.NaiveBroadphase()
  world.solver.iterations = 20

  // 2. ThreeJS Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0b0b0d)

  const aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
  const width = 10
  const height = width / aspect

  camera = new THREE.OrthographicCamera(
    width / -2, width / 2,
    height / 2, height / -2,
    0, 100
  )
  
  // Reajuste de la cámara para elevar el plano de visión en PC
  camera.position.set(4, 5, 4)
  camera.lookAt(0, 1, 0)

  // Luces Estilizadas
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0x22d3ee, 0.8) // Luz cian dirigida
  dirLight.position.set(10, 20, 10)
  scene.add(dirLight)

  const dirLight2 = new THREE.DirectionalLight(0xa855f7, 0.4) // Luz morada de contra
  dirLight2.position.set(-10, 10, -10)
  scene.add(dirLight2)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  // Reset de juego base
  resetGameEntities()
}

const resetGameEntities = () => {
  stack = []
  overhangs = []
  score.value = 0
  setRobotPrecision()

  // Limpiar físicos
  while (world.bodies.length > 0) {
    world.removeBody(world.bodies[0])
  }

  // Limpiar meshes
  while (scene.children.find((c) => c.type === "Mesh")) {
    const mesh = scene.children.find((c) => c.type === "Mesh")
    scene.remove(mesh)
  }

  // Base fija
  addLayer(0, 0, originalBoxSize, originalBoxSize)
  // Primera capa en movimiento
  addLayer(-10, 0, originalBoxSize, originalBoxSize, "x")

  if (camera) {
    // Mantener encuadre elevado al reiniciar la simulación
    camera.position.set(4, 5, 4)
    camera.lookAt(0, 1, 0)
  }
}

const startGame = () => {
  autopilot.value = false
  gameEnded.value = false
  lastTime = 0
  resetGameEntities()
}

function addLayer(x, z, width, depth, direction) {
  const y = boxHeight * stack.length
  const layer = generateBox(x, y, z, width, depth, false)
  layer.direction = direction
  stack.push(layer)
}

function addOverhang(x, z, width, depth) {
  const y = boxHeight * (stack.length - 1)
  const overhang = generateBox(x, y, z, width, depth, true)
  overhangs.push(overhang)
}

function generateBox(x, y, z, width, depth, falls) {
  // Configuración del Material: Transición de color técnica de Cian a Morado según altura
  const geometry = new THREE.BoxGeometry(width, boxHeight, depth)
  
  // Factor de degradado según el número de bloque
  const hue = (190 + stack.length * 7) % 360 
  const color = new THREE.Color(`hsl(${hue}, 85%, 55%)`)
  
  const material = new THREE.MeshLambertMaterial({ 
    color,
    roughness: 0.2,
  })
  
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(x, y, z)
  scene.add(mesh)

  // Físicas
  const shape = new CANNON.Box(new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2))
  let mass = falls ? 5 : 0
  mass *= (width / originalBoxSize) * (depth / originalBoxSize)
  
  const body = new CANNON.Body({ mass, shape })
  body.position.set(x, y, z)
  world.addBody(body)

  return { threejs: mesh, cannonjs: body, width, depth }
}

function cutBox(topLayer, overlap, size, delta) {
  const direction = topLayer.direction
  const newWidth = direction === "x" ? overlap : topLayer.width
  const newDepth = direction === "z" ? overlap : topLayer.depth

  topLayer.width = newWidth
  topLayer.depth = newDepth

  topLayer.threejs.scale[direction] = overlap / size
  topLayer.threejs.position[direction] -= delta / 2
  topLayer.cannonjs.position[direction] -= delta / 2

  const shape = new CANNON.Box(new CANNON.Vec3(newWidth / 2, boxHeight / 2, newDepth / 2))
  topLayer.cannonjs.shapes = []
  topLayer.cannonjs.addShape(shape)
}

function splitBlockAndAddNextOneIfOverlaps() {
  if (gameEnded.value) return

  const topLayer = stack[stack.length - 1]
  const previousLayer = stack[stack.length - 2]
  const direction = topLayer.direction

  const size = direction === "x" ? topLayer.width : topLayer.depth
  const delta = topLayer.threejs.position[direction] - previousLayer.threejs.position[direction]
  const overhangSize = Math.abs(delta)
  const overlap = size - overhangSize

  if (overlap > 0) {
    cutBox(topLayer, overlap, size, delta)

    const overhangShift = (overlap / 2 + overhangSize / 2) * Math.sign(delta)
    const overhangX = direction === "x" ? topLayer.threejs.position.x + overhangShift : topLayer.threejs.position.x
    const overhangZ = direction === "z" ? topLayer.threejs.position.z + overhangShift : topLayer.threejs.position.z
    const overhangWidth = direction === "x" ? overhangSize : topLayer.width
    const overhangDepth = direction === "z" ? overhangSize : topLayer.depth

    addOverhang(overhangX, overhangZ, overhangWidth, overhangDepth)

    const nextX = direction === "x" ? topLayer.threejs.position.x : -10
    const nextZ = direction === "z" ? topLayer.threejs.position.z : -10
    const nextDirection = direction === "x" ? "z" : "x"

    score.value = stack.length - 1
    addLayer(nextX, nextZ, topLayer.width, topLayer.depth, nextDirection)
  } else {
    missedTheSpot()
  }
}

function missedTheSpot() {
  const topLayer = stack[stack.length - 1]
  addOverhang(topLayer.threejs.position.x, topLayer.threejs.position.z, topLayer.width, topLayer.depth)
  world.removeBody(topLayer.cannonjs)
  scene.remove(topLayer.threejs)

  gameEnded.value = true
}

// Bucle de Animación principal adaptado a Vue
const animate = (time) => {
  animationFrameId = requestAnimationFrame(animate)

  if (lastTime) {
    const timePassed = time - lastTime
    const speed = 0.007

    const topLayer = stack[stack.length - 1]
    const previousLayer = stack[stack.length - 2]

    if (topLayer) {
      const boxShouldMove = !gameEnded.value && (
        !autopilot.value || (autopilot.value && topLayer.threejs.position[topLayer.direction] < previousLayer.threejs.position[topLayer.direction] + robotPrecision)
      )

      if (boxShouldMove) {
        topLayer.threejs.position[topLayer.direction] += speed * timePassed
        topLayer.cannonjs.position[topLayer.direction] += speed * timePassed

        if (topLayer.threejs.position[topLayer.direction] > 10) {
          missedTheSpot()
        }
      } else if (autopilot.value) {
        splitBlockAndAddNextOneIfOverlaps()
        setRobotPrecision()
      }
    }

    // Desplazamiento progresivo de cámara manteniendo la proporción de encuadre corregida
    if (camera.position.y < boxHeight * (stack.length - 2) + 5) {
      camera.position.y += speed * timePassed
    }

    // Actualizar físicas y renderizar
    world.step(timePassed / 1000)
    overhangs.forEach((element) => {
      element.threejs.position.copy(element.cannonjs.position)
      element.threejs.quaternion.copy(element.cannonjs.quaternion)
    })

    renderer.render(scene, camera)
  }
  lastTime = time
}

// Manejadores de Eventos globales e internos
const handleAction = (e) => {
  // Si pulsa un botón de la UI, no disparamos la acción del juego
  if (e.target.tagName === 'BUTTON') return
  
  if (autopilot.value) startGame()
  else splitBlockAndAddNextOneIfOverlaps()
}

const handleKeyDown = (e) => {
  if (e.key === " ") {
    e.preventDefault()
    if (autopilot.value) startGame()
    else splitBlockAndAddNextOneIfOverlaps()
  }
  if (e.key === "R" || e.key === "r") {
    e.preventDefault()
    startGame()
  }
}

const handleResize = () => {
  if (!canvasContainer.value || !camera || !renderer) return
  const aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
  const width = 10
  const height = width / aspect

  camera.top = height / 2
  camera.bottom = height / -2
  camera.updateProjectionMatrix()

  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
}

onMounted(() => {
  initEngine()
  animationFrameId = requestAnimationFrame(animate)

  // Listeners
  window.addEventListener("keydown", handleKeyDown)
  window.addEventListener("resize", handleResize)
  
  // El evento de click se asocia solo al contenedor del juego para no romper el resto de la web
  if (canvasContainer.value) {
    canvasContainer.value.addEventListener("mousedown", handleAction)
    canvasContainer.value.addEventListener("touchstart", handleAction)
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener("keydown", handleKeyDown)
  window.removeEventListener("resize", handleResize)
})
</script>