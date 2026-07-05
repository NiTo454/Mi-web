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
    <header className="fixed top-0 left-0 w-full z-[100] p-4 transition-all duration-500">
      <div className={`mx-auto flex justify-between items-center transition-all duration-500 px-6 md:px-8 ${
        isScrolled 
          ? "max-w-3xl bg-background/85 backdrop-blur-md border border-foreground/15 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]" 
          : "max-w-7xl bg-transparent py-4"
      }`}>

        {/* LOGO */}
        <Link
          href="/"
          onClick={(e) => {
            setActiveHash("");
            window.history.replaceState(null, "", "/");
            window.dispatchEvent(new Event("hashchange"));
          }}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <span className="text-sm md:text-base font-black tracking-tighter uppercase text-foreground transition-colors group-hover:text-brand-fucsia">NHM</span>
          <span className="h-2 w-2 rounded-full bg-brand-naranja shadow-[0_0_10px_var(--color-brand-naranja)] transition-transform duration-300 group-hover:scale-120" />
        </Link>

        {/* ENLACES */}
        <div className="flex gap-6 md:gap-10">
          {links.map((link) => {
            const isActive = activeHash === link.hash;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
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
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-brand-fucsia to-brand-naranja"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
