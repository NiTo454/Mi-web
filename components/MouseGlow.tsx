"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Configuramos resortes para que la luz siga al mouse de forma fluida y orgánica
  const springConfig = { damping: 50, stiffness: 250, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Centramos el halo de 450px de ancho/alto
      mouseX.set(e.clientX - 225);
      mouseY.set(e.clientY - 225);
    };

    const handleMouseLeave = () => {
      // Ocultar fuera de pantalla si el cursor sale
      mouseX.set(-1000);
      mouseY.set(-1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mounted, mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[-5] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-brand-fucsia/8 via-brand-violeta/5 to-brand-naranja/8 blur-[100px] transition-opacity duration-1000"
    />
  );
}
