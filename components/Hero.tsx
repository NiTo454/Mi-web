'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:px-8 lg:px-12">
      <div className="w-full max-w-3xl mx-auto space-y-12">
        
        <Header />
        <Description />
        <CTAButtons />
        
        <footer className="pt-8 border-t border-[--foreground] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[--foreground]">
          <p>© 2026 Nicolas Hernandez Maldonado</p>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </footer>
      </div>
    </section>
  );
};

const Header = () => (
  <div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[--foreground]">
      NICOLAS HERNANDEZ MALDONADO.
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-[--accent] font-medium mt-2">
      DISPONIBLE PARA TRABAJAR
    </p>
  </div>
);

const Description = () => (
  <div>
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-[--foreground]">
      FULL STACK DEV.
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-[--foreground] max-w-2xl mt-6 leading-relaxed">
      Ayudo a dar vida a proyectos mediante el desarrollo de software de alto rendimiento. 
      Mi prioridad es convertir conceptos ambiciosos en aplicaciones funcionales y escalables, 
      manteniendo siempre un proceso de trabajo transparente, ordenado y orientado a resultados tangibles.
    </p>
  </div>
);

const CTAButtons = () => (
  <div className="flex flex-wrap items-center gap-6">
    <a 
      href="#" 
      className="group inline-flex items-center text-lg font-medium border-b-2 border-[--accent] pb-1 transition-all duration-300 hover:border-[--foreground]"
    >
      Ver Proyectos
      <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
    </a>
    <a 
      href="#" 
      className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-[--accent] text-white rounded-full shadow-md hover:bg-[--foreground] hover:text-[--background] transition-all duration-300"
    >
      Hablemos
    </a>
  </div>
);

const ThemeToggle = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) => (
  <button 
    onClick={() => setDarkMode(!darkMode)}
    className="px-3 py-1 rounded-full border border-[--foreground] hover:bg-[--foreground] hover:text-[--background] transition-colors"
  >
    {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
  </button>
);

export default Hero;