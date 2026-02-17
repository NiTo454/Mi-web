"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Mí", path: "/sobre-mi" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? "bg-background/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4" : "bg-transparent py-8"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <span className="text-sm md:text-base font-black tracking-tighter uppercase text-foreground transition-colors">
            NHM
          </span>
          <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </Link>

        <div className="flex gap-8 md:gap-12">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.name} href={link.path} className="relative py-1 group">
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-foreground" : "text-zinc-500 hover:text-foreground"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}