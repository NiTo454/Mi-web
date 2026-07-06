"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPulling(true);
    setTimeout(() => setIsPulling(false), 300);

    const targetTheme = isDark ? "light" : "dark";

    // @ts-ignore
    if (!document.startViewTransition) {
      setTheme(targetTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      // Sincronizar el cambio de clase en el HTML inmediatamente para la captura
      if (targetTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setTheme(targetTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      
      // Animación por JS directa para evitar problemas de herencia de variables CSS en pseudoelementos
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div className="fixed z-[100] bottom-6 right-6 md:top-0 md:bottom-auto md:right-8 flex flex-col items-center">
      
      {/* CONTENEDOR CON TIRE DE CUERDA ANIMADO */}
      <motion.div
        animate={{ y: isPulling ? 15 : 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
        className="flex flex-col items-center"
      >
        {/* EL HILO */}
        <div className="hidden md:block w-[2px] h-20 bg-foreground/20 transition-colors" />

        {/* BOTÓN (El Foquito) */}
        <button 
          onClick={toggleTheme}
          aria-label="Encender/Apagar luz"
          className="group relative p-4 md:p-5 md:-mt-4 cursor-pointer focus:outline-none touch-manipulation"
        >
          {!mounted ? (
            <div className="w-14 h-14 rounded-full border border-foreground/10 bg-background shadow-2xl" />
          ) : (
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className={`relative flex items-center justify-center w-14 h-14 rounded-full border border-foreground/10 shadow-2xl transition-colors duration-500 overflow-hidden
                ${isDark ? "bg-zinc-900 border-white/10" : "bg-white border-black/5"}
              `}
            >
              {/* Brillo de fondo para el modo claro */}
              <div className={`absolute inset-0 bg-yellow-400 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-15"}`} />
              
              {/* Brillo de fondo para el modo oscuro */}
              <div className={`absolute inset-0 bg-blue-500 transition-opacity duration-500 ${isDark ? "opacity-15" : "opacity-0"}`} />

              {/* ICONO DE FOQUITO */}
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
                className={`relative z-10 transition-colors duration-500 ${isDark ? "text-blue-400 drop-shadow-[0_0_8px_#3b82f6]" : "text-yellow-500 drop-shadow-[0_0_8px_#eab308]"}`}
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/>
                <path d="M9 18h6"/>
                <path d="M10 22h4"/>
              </svg>
            </motion.div>
          )}
        </button>
      </motion.div>
    </div>
  );
}