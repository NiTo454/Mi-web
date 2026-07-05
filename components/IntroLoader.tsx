"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

const logs = [
  "> NHM OS v1.0.0 initializing...",
  "> Loading system core modules...",
  "> Core modules loaded. [OK]",
  "> Reading developer portfolio stack...",
  "> React 19.2.3, Next.js 16.1.6, Tailwind CSS v4... [OK]",
  "> Establishing secure connection to Tizayuca, MX...",
  "> Connection status... [ONLINE]",
  "> Launching Syntaxis Lab environment...",
  "> Portfolio loaded successfully. Welcome.",
];

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [lineCount, setLineCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Función para saltar la intro de forma limpia
  const handleSkip = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem("nhm-portfolio-loaded", "true");
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Escuchar la tecla "Escape" para saltar la animación
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip]);

  useEffect(() => {
    if (!mounted) return;

    const isDev = process.env.NODE_ENV === "development";
    const hasLoaded = sessionStorage.getItem("nhm-portfolio-loaded");
    
    // En producción se salta si ya cargó. En desarrollo se muestra siempre para probar cambios.
    if (!isDev && hasLoaded) {
      setVisible(false);
      onComplete();
      return;
    }

    if (lineCount < logs.length) {
      const timer = setTimeout(() => {
        setLineCount((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("nhm-portfolio-loaded", "true");
        setTimeout(onComplete, 500);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [mounted, lineCount, onComplete]);

  if (!visible) return null;

  const visibleLines = logs.slice(0, lineCount);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[200] bg-black text-[#E61C8C] font-mono flex items-center justify-center p-6"
      >
        <div className="max-w-2xl w-full flex flex-col gap-4 text-left border border-white/10 p-6 md:p-8 rounded-2xl bg-zinc-950/80 backdrop-blur-md shadow-2xl">
          <div className="flex justify-between items-center pb-4 border-b border-white/5">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-zinc-500 font-bold ml-2 uppercase tracking-widest">nhm_terminal.sh</span>
            </div>
            
            {/* Botón de Omitir con soporte para Esc */}
            <button
              onClick={handleSkip}
              className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-brand-naranja hover:border-brand-naranja/50 font-bold transition-all duration-300 cursor-pointer border border-zinc-800 px-3 py-1 rounded-lg bg-zinc-900/50"
            >
              Omitir [Esc]
            </button>
          </div>

          <div className="flex flex-col gap-1.5 min-h-[220px] text-xs md:text-sm leading-relaxed overflow-y-auto max-h-[400px]">
            {visibleLines.map((line, i) => {
              const isOk = line.includes("[OK]") || line.includes("[ONLINE]") || line.includes("Welcome");
              const isFirst = i === 0;
              return (
                <div key={i} className="flex items-start gap-1">
                  <span
                    className={
                      isOk
                        ? "text-emerald-400 font-bold"
                        : isFirst
                        ? "text-brand-naranja font-bold"
                        : "text-brand-fucsia"
                    }
                  >
                    {line}
                  </span>
                </div>
              );
            })}
            <span className="animate-pulse text-[#FF5C33] font-bold">_</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
