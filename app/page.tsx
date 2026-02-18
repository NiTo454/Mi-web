"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 transition-colors duration-500">
      
      {/* FONDO DINÁMICO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] transition-colors duration-700" />
        <div className="absolute bottom-[-10%] right-[0%] w-[50%] h-[50%] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] transition-colors duration-700" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 max-w-5xl w-full"
      >
        <div className="space-y-8">
          
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase text-foreground/50">
              Disponible para nuevos proyectos
            </p>
          </motion.div>

          {/* TÍTULO CLARO Y DIRECTO PARA CLIENTES */}
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase text-foreground"
          >
            DESARROLLO <br /> MÓVIL & <br /> 
            {/* Gradiente en lugar del texto transparente para que jamás desaparezca */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              WEB.
            </span>
          </motion.h1>

          {/* DESCRIPCIÓN ENFOCADA EN VALOR PARA EL CLIENTE */}
          <motion.p 
            variants={fadeInUp}
            className="max-w-xl text-foreground/70 text-lg md:text-xl leading-relaxed"
          >
            Construyo <span className="text-foreground font-bold">aplicaciones móviles y plataformas web</span> a la medida. Mi prioridad es transformar tus ideas en herramientas digitales rápidas, seguras y fáciles de usar.
          </motion.p>
          
          {/* BOTONES */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-4">
            <Link 
              href="/proyectos" 
              className="group relative bg-foreground text-background px-10 py-4 rounded-full font-bold overflow-hidden transition-transform hover:scale-105 shadow-lg shadow-foreground/5"
            >
              <span className="relative z-10">Ver Proyectos</span>
            </Link>

            <Link 
              href="/contacto" 
              className="border border-foreground/20 text-foreground px-10 py-4 rounded-full font-bold hover:bg-foreground/[0.03] transition-all duration-300"
            >
              Hablemos
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Decoración lateral */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block uppercase [writing-mode:vertical-rl] text-foreground/20 tracking-[1em] text-[10px] font-bold">
        Software Developer — 2026
      </div>
    </section>
  );
}