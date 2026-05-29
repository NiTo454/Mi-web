"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const handleHashChange = () => setActiveHash(window.location.hash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const links = [
    { name: "Inicio", hash: "", href: "/" },
    { name: "Sobre Mí", hash: "#sobre-mi", href: "#sobre-mi" },
    { name: "Proyectos", hash: "#proyectos", href: "#proyectos" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? "bg-background/90 backdrop-blur-md border-b border-foreground/10 py-4" : "bg-transparent py-8"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          onClick={(e) => {
            // Limpiamos el hash manualmente y disparamos el evento
            setActiveHash("");
            window.history.replaceState(null, "", "/");
            window.dispatchEvent(new Event("hashchange"));
          }}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <span className="text-sm md:text-base font-black tracking-tighter uppercase text-foreground transition-colors group-hover:text-[#E61C8C]">NHM</span>
          <span className="h-2 w-2 rounded-full bg-[#FF5C33] shadow-[0_0_10px_rgba(255,92,51,0.5)] transition-transform duration-300 group-hover:scale-110" />
        </Link>

        {/* ENLACES */}
        <div className="flex gap-8 md:gap-12">
          {links.map((link) => {
            const isActive = activeHash === link.hash;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  // AQUÍ ESTÁ LA MAGIA: Forzamos a que el navegador se entere del cambio
                  if (link.hash) {
                    window.location.hash = link.hash;
                    window.dispatchEvent(new Event("hashchange"));
                  } else {
                    window.history.replaceState(null, "", "/");
                    window.dispatchEvent(new Event("hashchange"));
                  }
                }}
                className="relative py-1 group"
              >
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-foreground" : "text-foreground/50 hover:text-foreground"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#E61C8C] to-[#FF5C33]"
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
