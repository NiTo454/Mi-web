"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  // --- ESTADO PARA CONTROLAR LOS ACORDEONES ---
  const [activeSection, setActiveSection] = useState<'none' | 'sobre-mi' | 'proyectos'>('none');

  // Si hacen clic en un botón, abre esa sección y cierra la otra
  const toggleSection = (section: 'sobre-mi' | 'proyectos') => {
    setActiveSection(prev => prev === section ? 'none' : section);
  };

  // Escuchar la URL por si le dan clic al Navbar
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#proyectos') setActiveSection('proyectos');
      else if (hash === '#sobre-mi') setActiveSection('sobre-mi');
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // --- REFS & SCROLL ---
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToElement = (element: HTMLDivElement | null) => {
      if (element) {
        const yOffset = -100; // AJUSTA AQUÍ EL MARGEN SUPERIOR (ej. altura del navbar)
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (activeSection === 'proyectos') {
      setTimeout(() => scrollToElement(projectsRef.current), 100);
    } else if (activeSection === 'sobre-mi') {
      setTimeout(() => scrollToElement(aboutRef.current), 100);
    }
  }, [activeSection]);

  // --- ANIMACIONES BASE ---
  const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-20 transition-colors duration-500">

      {/* FONDO DINÁMICO (Paleta Syntaxis Lab) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#E61C8C]/10 blur-[120px] transition-colors duration-700" />
        <div className="absolute bottom-[-10%] right-[0%] w-[50%] h-[50%] rounded-full bg-[#A3249E]/10 blur-[120px] transition-colors duration-700" />
      </div>

      {/* --- SECCIÓN PRINCIPAL (HERO) --- */}
      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.15 }} className="relative z-10 max-w-7xl w-full">
        <div className="space-y-8 max-w-5xl">

          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            {/* Ping Naranja Coral */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C33] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5C33]"></span>
            </span>
            <p className="font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase text-foreground/50">Disponible para nuevos proyectos</p>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase text-foreground">
            DESARROLLO <br /> MÓVIL & <br />
            {/* Degradado Fucsia a Violeta */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61C8C] to-[#A3249E]">WEB.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-xl text-foreground/70 text-lg md:text-xl leading-relaxed">
            Construyo <span className="text-foreground font-bold">aplicaciones móviles y plataformas web</span> a la medida. Mi prioridad es transformar tus ideas en herramientas digitales rápidas, seguras y fáciles de usar.
          </motion.p>

          {/* BOTONES QUE CONTROLAN LOS ACORDEONES */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-4">

            {/* Botón Ver Proyectos (Estilo Terminal / Syntaxis Lab) */}
            <button
              onClick={() => toggleSection('proyectos')}
              className="group relative px-10 py-4 rounded-full font-bold overflow-hidden transition-all duration-500 bg-foreground text-background border border-transparent hover:border-[#E61C8C]/40 hover:shadow-[0_0_25px_-5px_#E61C8C] active:scale-95 flex items-center justify-center min-w-[220px]"
            >
              <span className="absolute inset-0 bg-[#050505] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>

              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#E61C8C] to-[#FF5C33] -translate-x-full group-hover:animate-[terminal-load_2s_ease-in-out_infinite]"></span>
              </span>

              <span className="relative z-20 flex items-center gap-3 transform translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-500 ease-in-out">
                {/* Ping Naranja Coral dentro del botón */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C33] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C33]"></span>
                </span>
                Ver Proyectos
              </span>

              <span className="absolute inset-0 z-20 flex items-center justify-center transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out font-mono text-sm tracking-widest text-[#E61C8C]">
                &gt; SINTAXIS_LAB<span className="animate-pulse font-bold text-white">_</span>
              </span>
            </button>

            {/* Botón Sobre Mí */}
            <button
              onClick={() => toggleSection('sobre-mi')}
              className={`border px-10 py-4 rounded-full font-bold transition-all duration-300 ${activeSection === 'sobre-mi' ? 'bg-foreground/[0.1] border-foreground/50 text-foreground' : 'border-foreground/20 text-foreground hover:bg-foreground/[0.03]'}`}
            >
              Sobre Mí
            </button>

          </motion.div>
        </div>

        {/* --- LOS ACORDEONES QUE SE DESPLIEGAN --- */}
        <AnimatePresence mode="wait">
          {activeSection === 'proyectos' && (
            <motion.div ref={projectsRef} key="proyectos" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="overflow-hidden w-full mt-20">
              <ProjectsSection />
            </motion.div>
          )}

          {activeSection === 'sobre-mi' && (
            <motion.div key="sobre-mi" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="overflow-hidden w-full mt-20">
              <AboutSection />
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block uppercase [writing-mode:vertical-rl] text-foreground/20 tracking-[1em] text-[10px] font-bold">
        Software Developer — 2026
      </div>

      {/* ESTILOS REQUERIDOS PARA LAS ANIMACIONES */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        @keyframes terminal-load {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
