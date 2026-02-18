"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

// 1. Tipamos nuestro arreglo para que TypeScript no se queje
type Area = {
  title: string;
  category: string;
  icon: ReactNode; // Aquí guardaremos el SVG
  desc: string;
  tech: string[];
  link: string;
};

export default function Proyectos() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // 2. Agregamos los iconos a cada área
  const areas: Area[] = [
    {
      title: "Apps Móviles",
      category: "iOS & Android",
      // Iconos combinados de Apple y Android
      icon: (
        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
          {/* Logo Apple */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
          {/* Logo Android */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 fill-current"><path d="M420.2 92.5c-4-4.8-10.8-5.3-15.6-1.3l-28.7 23.4C333 100.3 286 96 238.4 100.1l-28.9-23.6c-4.8-3.9-11.7-3.4-15.6 1.3-3.9 4.8-3.4 11.7 1.3 15.6l28.1 23C158 152.1 106 208.5 86.4 275.9h403.3C470 208.5 418 152.1 352.7 116.5l28.1-23c4.8-3.9 5.3-10.8 1.4-15.6zM224 230c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm128 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM32 307.9h512v159.9c0 24.5-21.6 44.2-48.2 44.2H80.2C53.6 512 32 492.3 32 467.8V307.9z"/></svg>
        </div>
      ),
      desc: "Desarrollo de aplicaciones nativas de alto rendimiento. Me especializo en interfaces fluidas, animaciones complejas y una experiencia de usuario (UX) impecable.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "/contacto"
    },
    {
      title: "Desarrollo Web",
      category: "Next.js & React",
      // Icono de Globo terráqueo/Web
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      ),
      desc: "Sitios web modernos y aplicaciones progresivas (PWA). Desde landing pages de alto impacto hasta paneles de administración complejos, todo optimizado para velocidad.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "/contacto"
    },
    {
      title: "Backend & APIs",
      category: "Arquitectura",
      // Icono de Servidor
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
      ),
      desc: "El motor detrás de las apps. Diseño bases de datos sólidas (MySQL) y creo APIs RESTful escalables con Node.js para que tus aplicaciones gestionen datos en tiempo real.",
      tech: ["Node.js", "MySQL", "API REST"],
      link: "/contacto"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-background pt-32 md:pt-40 pb-20 px-6 overflow-hidden transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* TÍTULO */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] text-foreground">
              LO QUE <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                CONSTRUYO.
              </span>
            </h1>
            <p className="mt-6 text-foreground/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Soluciones digitales completas. Desde la interfaz que tocan tus usuarios hasta el servidor que procesa sus datos.
            </p>
          </motion.div>
          
          {/* GRID DE SERVICIOS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Link 
                  href={area.link}
                  className="group flex flex-col justify-between h-full bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.04] p-8 md:p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-foreground/5 hover:shadow-xl"
                >
                  <div>
                    {/* ENCABEZADO DE LA TARJETA CON ICONOS */}
                    <div className="flex justify-between items-start mb-6">
                      
                      <div className="flex flex-col gap-2">
                        {/* Renderizamos el icono aquí */}
                        <div className="text-foreground/80">
                          {area.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50 leading-tight">
                          {area.category}
                        </span>
                      </div>

                      {/* Botón Circular con Flecha */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                        <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm font-bold">
                          ↗
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black tracking-tight text-foreground mb-4 transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-foreground/60 text-sm leading-relaxed mb-10">
                      {area.desc}
                    </p>
                  </div>
                  
                  {/* TAGS DE TECNOLOGÍA */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {area.tech.map(t => (
                      <span 
                        key={t} 
                        className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10 group-hover:border-foreground/20 group-hover:text-foreground transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LUZ DECORATIVA */}
      <div className="absolute top-1/4 right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full z-0 pointer-events-none" />
    </section>
  );
}