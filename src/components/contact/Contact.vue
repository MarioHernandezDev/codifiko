<template>
  <section id="contact" class="relative bg-[#080809] py-32 px-6">
    <div class="max-w-3xl mx-auto">
      
      <div class="mb-12 space-y-4 text-center">
        <div class="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-cyan-500 uppercase">
          <span class="w-8 h-[1px] bg-cyan-500"></span>
          execute_contact_script
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase font-sans">
          ¿LISTO PARA EL <br /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SIGUIENTE NIVEL?</span>
        </h2>
      </div>

      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div class="relative bg-[#0b0b0c] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          <div class="bg-[#161618] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div class="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
              bash — contact.ts
            </div>
            <div class="w-10"></div>
          </div>

          <form @submit.prevent="handleSubmit" class="p-6 md:p-10 space-y-8 font-mono text-sm md:text-base">
            
            <div class="space-y-2">
              <label class="text-cyan-500 block">visitor@codifiko:~$ <span class="text-zinc-400 italic">--nombre</span></label>
              <input 
                v-model="form.name"
                type="text" 
                placeholder="Escribe tu nombre..."
                class="w-full bg-transparent border-none outline-none text-white placeholder:text-zinc-700 focus:ring-0 p-0"
              />
            </div>

            <div class="space-y-2">
              <label class="text-cyan-500 block">visitor@codifiko:~$ <span class="text-zinc-400 italic">--email</span></label>
              <input 
                v-model="form.email"
                type="email" 
                placeholder="tu@email.com"
                class="w-full bg-transparent border-none outline-none text-white placeholder:text-zinc-700 focus:ring-0 p-0"
              />
            </div>

            <div class="space-y-2">
              <label class="text-cyan-500 block">visitor@codifiko:~$ <span class="text-zinc-400 italic">--mensaje</span></label>
              <textarea 
                v-model="form.message"
                rows="3"
                placeholder="Cuéntanos tu idea épica..."
                class="w-full bg-transparent border-none outline-none text-white placeholder:text-zinc-700 focus:ring-0 p-0 resize-none"
              ></textarea>
            </div>

            <div class="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <div class="flex items-center gap-2 text-xs text-zinc-500">
                <span class="inline-block w-2 h-4 bg-cyan-500 animate-pulse"></span>
                <span>Esperando entrada_</span>
              </div>

              <button 
                type="submit"
                class="group relative px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-sm transition-all hover:bg-cyan-400"
              >
                [ sudo_send_message ]
              </button>
            </div>

            <div v-if="submitted" class="mt-6 p-4 bg-cyan-950/20 border border-cyan-500/30 text-cyan-400 text-xs animate-fade-in">
              <p>> [SUCCESS]: Mensaje enviado correctamente.</p>
              <p>> [INFO]: El equipo de Codifiko analizará tu código en breve.</p>
              <p>> [STATUS]: Conexión cerrada.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  console.log('Formulario enviado:', form)
  submitted.value = true
  // Aquí podrías añadir la lógica para enviar a un email o base de datos
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.message = ''
  }, 5000)
}
</script>

<style scoped>
input, textarea {
  caret-color: #22d3ee;
}
</style>