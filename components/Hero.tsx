'use client';

import Link from 'next/link';
// Si quieres mantener animaciones suaves de entrada, puedes importar framer-motion
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:px-8 lg:px-12 transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto space-y-12"
      >
        <Header />
        <Description />
        <CTAButtons />
        
        {/* El footer de esta sección. 
            Nota: Quité el ThemeToggle local porque ya tienes uno global en tu layout.tsx */}
        <footer className="pt-8 border-t border-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60 font-medium">
          <p>© 2026 Nicolas Hernandez Maldonado</p>
          <p className="uppercase tracking-widest text-[10px]">Tizayuca, Hidalgo</p>
        </footer>
      </motion.div>
    </section>
  );
};

const Header = () => (
  <div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">
      NICOLAS HERNANDEZ MALDONADO.
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-blue-500 font-bold mt-2 tracking-widest text-[10px] uppercase">
      DISPONIBLE PARA TRABAJAR
    </p>
  </div>
);

const Description = () => (
  <div>
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
      FULL STACK DEV.
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mt-6 leading-relaxed">
      Ayudo a dar vida a proyectos mediante el desarrollo de software de alto rendimiento. 
      Mi prioridad es convertir conceptos ambiciosos en aplicaciones funcionales y escalables, 
      manteniendo siempre un proceso de trabajo transparente, ordenado y orientado a resultados tangibles.
    </p>
  </div>
);

const CTAButtons = () => (
  <div className="flex flex-wrap items-center gap-6">
    {/* CAMBIO: Link apuntando a #proyectos */}
    <Link 
      href="#proyectos" 
      className="group inline-flex items-center text-lg font-bold border-b-2 border-transparent hover:border-foreground pb-1 transition-all duration-300 text-foreground/70 hover:text-foreground"
    >
      Ver Proyectos
      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
    </Link>
  </div>
);

export default Hero;