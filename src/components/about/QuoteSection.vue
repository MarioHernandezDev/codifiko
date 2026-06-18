<template>
  <div class="zone-quote w-full left-0 right-0">
    <div class="max-w-7xl mx-auto px-4 md:px-10 relative z-10 py-32 md:py-52">
      <div class="relative border-l-2 border-cyan-500 pl-8 md:pl-12 py-6 bg-cyan-500/[0.02] rounded-r-2xl overflow-hidden">
        <span class="absolute top-4 right-6 font-serif text-8xl text-cyan-500/[0.05] leading-none select-none pointer-events-none">"</span>
        <div class="font-mono text-[9px] text-cyan-400 font-bold tracking-widest uppercase mb-4">// CORE_PHILOSOPHY_TRANSMISSION</div>
        <p class="font-black uppercase italic tracking-tighter text-white text-2xl md:text-4xl leading-tight max-w-3xl mb-6 font-mono">
          El trabajo personalizado con cada cliente y con cada equipo es la motivación para trabajar cada día, y el uso responsable IA es la herramienta más valiosa que tenemos este siglo!
        </p>
        <span class="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">MHP // Codifiko Node_GRX · 2026</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zone-quote {
  background-color: #030d0d;
  position: relative;
  overflow: hidden;
}
.zone-quote::before {
  content: '01010011 01110100 01100001 01110010 01110100 00100000 01000011 01101111 01100100 01100101 _> EXEC 00110001 0 // NODE_BOOT INIT_SEQ STACK_READY SIGNAL_OK 01001101 01001000 01010000 CODIFIKO_SYS DEPLOY_OK 00110000 01110011';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  font-family: monospace;
  font-size: 10px;
  color: #22d3ee;
  opacity: 0.02;
  word-break: break-all;
  line-height: 2;
  pointer-events: none;
  overflow: hidden;
  padding: 24px;
}
</style>