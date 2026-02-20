"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-colors duration-500">
      
      {/* Luz de fondo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Círculos flotantes decorativos */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-foreground/5 rounded-full pointer-events-none hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-foreground/5 rounded-full pointer-events-none hidden md:block"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Etiqueta tipo consola / Log de error */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-2 shadow-sm relative z-20">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground/70">
            System_Error_404
          </span>
        </div>

        {/* EL CAMBIO ESTÁ AQUÍ: Quitamos el gradiente invisible y lo hicimos un texto sólido con 20% de opacidad */}
        <motion.h1 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-foreground/20 mb-2 select-none relative z-10"
        >
          404
        </motion.h1>
        
        {/* Subtítulo con cursor de consola parpadeante */}
        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 tracking-tight uppercase flex items-center justify-center gap-1 relative z-20">
          Señal perdida <span className="inline-block w-2 md:w-3 h-6 md:h-8 bg-blue-500 animate-[pulse_1s_step-end_infinite]"></span>
        </h2>
        
        {/* Mensaje */}
        <p className="text-foreground/60 text-base md:text-lg max-w-md mb-10 leading-relaxed font-medium relative z-20">
          Parece que has navegado fuera de los límites del sistema. La ruta solicitada no existe o fue eliminada del servidor.
        </p>
        
        {/* Botón de regreso */}
        <Link 
          href="/"
          className="group relative px-8 py-4 bg-foreground text-background font-black rounded-full uppercase text-xs tracking-[0.2em] hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span>Reiniciar Conexión</span>
        </Link>
      </motion.div>
    </section>
  );
}

