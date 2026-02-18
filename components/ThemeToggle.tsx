"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="fixed z-[100] bottom-6 right-6 md:top-0 md:bottom-auto md:right-8 flex flex-col items-center">
      
      {/* EL HILO: Ahora NUNCA desaparece al recargar la página */}
      <div className="hidden md:block w-[2px] h-20 bg-foreground/20 transition-colors"></div>

      {/* BOTÓN (El Foquito) */}
      <button 
        onClick={toggleTheme}
        aria-label="Encender/Apagar luz"
        className="group relative p-4 md:p-5 md:-mt-4 cursor-pointer focus:outline-none touch-manipulation"
      >
        {/* Si no ha cargado, mostramos la base redonda para que la cuerda no quede flotando */}
        {!mounted ? (
          <div className="w-14 h-14 rounded-full border border-foreground/10 bg-background shadow-2xl" />
        ) : (
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

            {/* VERDADERO ICONO DE FOQUITO */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill={isDark ? "none" : "currentColor"} 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`relative z-10 transition-colors duration-500 ${isDark ? "text-blue-400" : "text-yellow-500"}`}
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/>
              <path d="M9 18h6"/>
              <path d="M10 22h4"/>
            </svg>

          </motion.div>
        )}
      </button>
    </div>
  );
}