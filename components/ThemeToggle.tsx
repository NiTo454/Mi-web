"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("dark-mode");
  };

  return (
    // CAMBIO CLAVE: bottom-6 right-6 en móvil (abajo a la derecha). 
    // md:top-0 md:bottom-auto md:right-8 en escritorio (arriba a la derecha).
    <div className="fixed z-[100] bottom-6 right-6 md:top-0 md:bottom-auto md:right-8 flex flex-col items-center">
      
      {/* EL HILO: Oculto en móviles (hidden), visible en escritorio (md:block) */}
      <div className="hidden md:block w-[2px] h-20 bg-foreground/20 transition-colors"></div>

      {/* BOTÓN: Quitamos el margen negativo superior en móviles (md:-mt-4) */}
      <button 
        onClick={toggleTheme}
        aria-label="Alternar tema claro/oscuro"
        className="group relative p-4 md:p-5 md:-mt-4 cursor-pointer focus:outline-none touch-manipulation"
      >
        <motion.div 
          whileTap={{ scale: 0.9, y: 5 }}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full border border-foreground/10 shadow-2xl transition-colors duration-500 overflow-hidden
            ${isDark ? "bg-zinc-900" : "bg-white"}
          `}
        >
          {/* Brillo de fondo para el modo claro */}
          <div className={`absolute inset-0 bg-yellow-400 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-10"}`} />
          
          {/* Brillo de fondo para el modo oscuro */}
          <div className={`absolute inset-0 bg-blue-500 transition-opacity duration-500 ${isDark ? "opacity-10" : "opacity-0"}`} />

          {/* Iconos SVG (Sol y Luna) */}
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 relative z-10">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 relative z-10">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path><path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path><path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          )}
        </motion.div>
      </button>
    </div>
  );
}