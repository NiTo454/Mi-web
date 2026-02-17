"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Variantes para animar la entrada de los elementos en cascada
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // 'bg-background' usa la variable dinámica de tu CSS global para alternar entre blanco y zinc-950
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 transition-colors duration-500">
      
      {/* FONDO DINÁMICO: Luces de ambiente sutiles que cambian según el tema */}
      <div className="absolute inset-0 z-0">
        {/* Luz Azul: más clara en modo light, tenue en modo dark */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full 
          bg-blue-200/40 dark:bg-blue-600/10 blur-[120px] transition-colors duration-700" />
        
        {/* Luz Púrpura */}
        <div className="absolute bottom-[-10%] right-[0%] w-[50%] h-[50%] rounded-full 
          bg-purple-200/40 dark:bg-purple-600/10 blur-[120px] transition-colors duration-700" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 max-w-5xl w-full"
      >
        <div className="space-y-8">
          
          {/* Badge de Disponibilidad con animación de pulso */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase text-zinc-500 dark:text-zinc-400">
              Disponible para nuevos retos
            </p>
          </motion.div>

          {/* TÍTULO: Forzado a usar 'text-foreground' (negro/blanco) del sistema */}
          <motion.h1 
            variants={fadeInUp}
            className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase text-foreground"
          >
            FULL <br /> STACK <br /> 
            {/* 'DEV.' con stroke adaptativo usando las utilidades de tu globals.css */}
            <span className="text-transparent block text-stroke-black dark:text-stroke-white opacity-40">
              DEV.
            </span>
          </motion.h1>

          {/* DESCRIPCIÓN */}
          <motion.p 
            variants={fadeInUp}
            className="max-w-xl text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed"
          >
            Ayudo a dar vida a proyectos mediante el <span className="text-foreground font-medium">desarrollo de software de alto rendimiento</span>. Mi prioridad es convertir conceptos ambiciosos en aplicaciones escalables.
          </motion.p>
          
          {/* BOTONES: Diseño inverso automático (negro en light, blanco en dark) */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-4">
            <Link 
              href="/proyectos" 
              className="group relative bg-foreground text-background px-10 py-4 rounded-full font-bold overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">Ver Proyectos</span>
            </Link>

            <Link 
              href="/contacto" 
              className="border-2 border-zinc-300 dark:border-zinc-700 text-foreground px-10 py-4 rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300"
            >
              Hablemos
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Decoración lateral decorativa (Vertical) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block uppercase [writing-mode:vertical-rl] text-zinc-300 dark:text-zinc-800 tracking-[1em] text-[10px] font-bold">
        Creative Developer — 2026
      </div>
    </section>
  );
}