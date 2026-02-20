"use client";
import { useState, ReactNode, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Area = { title: string; category: string; icon: ReactNode; desc: string; tech: string[]; link: string; };

export default function Home() {
  // --- ESTADO PARA CONTROLAR LOS ACORDEONES ---
  const [activeSection, setActiveSection] = useState<'none' | 'sobre-mi' | 'proyectos'>('none');

  // Si hacen clic en un botón, abre esa sección y cierra la otra
  const toggleSection = (section: 'sobre-mi' | 'proyectos') => {
    setActiveSection(prev => prev === section ? 'none' : section);
  };

  // Escuchar la URL por si le dan clic al Navbar
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#proyectos') setActiveSection('proyectos');
      else if (hash === '#sobre-mi') setActiveSection('sobre-mi');
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // --- REFS & SCROLL ---
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToElement = (element: HTMLDivElement | null) => {
      if (element) {
        const yOffset = -100; // AJUSTA AQUÍ EL MARGEN SUPERIOR (ej. altura del navbar)
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (activeSection === 'proyectos') {
      setTimeout(() => scrollToElement(projectsRef.current), 100);
    } else if (activeSection === 'sobre-mi') {
      setTimeout(() => scrollToElement(aboutRef.current), 100);
    }
  }, [activeSection]);

  // --- ANIMACIONES BASE ---
  const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants: Variants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 40 } } };

  // --- DATOS DE PROYECTOS ---
  const areas: Area[] = [
    {
      title: "Apps Móviles", category: "iOS & Android",
      icon: (
        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 fill-current"><path d="M420.2 92.5c-4-4.8-10.8-5.3-15.6-1.3l-28.7 23.4C333 100.3 286 96 238.4 100.1l-28.9-23.6c-4.8-3.9-11.7-3.4-15.6 1.3-3.9 4.8-3.4 11.7 1.3 15.6l28.1 23C158 152.1 106 208.5 86.4 275.9h403.3C470 208.5 418 152.1 352.7 116.5l28.1-23c4.8-3.9 5.3-10.8 1.4-15.6zM224 230c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm128 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM32 307.9h512v159.9c0 24.5-21.6 44.2-48.2 44.2H80.2C53.6 512 32 492.3 32 467.8V307.9z"/></svg>
        </div>
      ), desc: "Desarrollo de aplicaciones nativas de alto rendimiento. Me especializo en interfaces fluidas, animaciones complejas y una experiencia de usuario (UX) impecable.", tech: ["Flutter", "Dart", "Firebase"], link: "#contacto"
    },
    {
      title: "Desarrollo Web", category: "Next.js & React",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> ),
      desc: "Sitios web modernos y aplicaciones progresivas (PWA). Desde landing pages de alto impacto hasta paneles de administración complejos, todo optimizado para velocidad.", tech: ["Next.js", "React", "Tailwind CSS"], link: "#contacto"
    },
    {
      title: "Backend & APIs", category: "Arquitectura",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg> ),
      desc: "El motor detrás de las apps. Diseño bases de datos sólidas (MySQL) y creo APIs RESTful escalables con Node.js para que tus aplicaciones gestionen datos en tiempo real.", tech: ["Node.js", "MySQL", "API REST"], link: "#contacto"
    }
  ];

  // --- DATOS SOBRE MÍ ---
  const stats = [ { label: "Años Exp.", value: "02+" }, { label: "Proyectos", value: "15+" }, { label: "Clientes", value: "05+" } ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-20 transition-colors duration-500">
      
      {/* FONDO DINÁMICO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] transition-colors duration-700" />
        <div className="absolute bottom-[-10%] right-[0%] w-[50%] h-[50%] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] transition-colors duration-700" />
      </div>

      {/* --- SECCIÓN PRINCIPAL (HERO) --- */}
      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.15 }} className="relative z-10 max-w-7xl w-full">
        <div className="space-y-8 max-w-5xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
            <p className="font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase text-foreground/50">Disponible para nuevos proyectos</p>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase text-foreground">
            DESARROLLO <br /> MÓVIL & <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">WEB.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-xl text-foreground/70 text-lg md:text-xl leading-relaxed">
            Construyo <span className="text-foreground font-bold">aplicaciones móviles y plataformas web</span> a la medida. Mi prioridad es transformar tus ideas en herramientas digitales rápidas, seguras y fáciles de usar.
          </motion.p>
          
          {/* BOTONES QUE CONTROLAN LOS ACORDEONES */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-4">
            <button 
              onClick={() => toggleSection('proyectos')}
              className={`relative px-10 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 shadow-lg ${activeSection === 'proyectos' ? 'bg-blue-600 text-white' : 'bg-foreground text-background hover:scale-105'}`}
            >
              <span className="relative z-10">{activeSection === 'proyectos' ? 'Cerrar Proyectos' : 'Ver Proyectos'}</span>
            </button>

            <button 
              onClick={() => toggleSection('sobre-mi')}
              className={`border px-10 py-4 rounded-full font-bold transition-all duration-300 ${activeSection === 'sobre-mi' ? 'bg-foreground/[0.1] border-foreground/50 text-foreground' : 'border-foreground/20 text-foreground hover:bg-foreground/[0.03]'}`}
            >
              Sobre Mí
            </button>
            
          </motion.div>
        </div>

        {/* --- LOS ACORDEONES QUE SE DESPLIEGAN --- */}
        <AnimatePresence mode="wait">
          
          {/* ACORDEÓN DE PROYECTOS */}
          {activeSection === 'proyectos' && (
            <motion.div ref={projectsRef} key="proyectos" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="overflow-hidden w-full mt-20">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pt-8 pb-16 border-t border-foreground/10">
                <div className="mb-12">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">LO QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">CONSTRUYO.</span></h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {areas.map((area, index) => (
                    <motion.div key={index} variants={fadeInUp} className="h-full">
                      <Link href={area.link} className="group flex flex-col justify-between h-full bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.04] p-8 md:p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-300 shadow-lg">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="flex flex-col gap-2">
                              <div className="text-foreground/80">{area.icon}</div>
                              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50">{area.category}</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">↗</div>
                          </div>
                          <h3 className="text-3xl font-black tracking-tight text-foreground mb-4">{area.title}</h3>
                          <p className="text-foreground/60 text-sm leading-relaxed mb-10">{area.desc}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {area.tech.map(t => ( <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10 group-hover:border-foreground/20">{t}</span> ))}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ACORDEÓN DE SOBRE MÍ */}
          {activeSection === 'sobre-mi' && (
            <motion.div key="sobre-mi" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="overflow-hidden w-full mt-20">
               <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pt-8 pb-16 border-t border-foreground/10 flex flex-col gap-6">
                  
                  <div className="mb-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">Sobre <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600">Mí.</span></h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
                    {/* Bio */}
                    <motion.div variants={itemVariants} className="md:col-span-2 bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">Ingeniería & Código</span>
                        </div>
                        <p className="text-2xl md:text-4xl font-medium text-foreground/90 leading-tight mb-6 tracking-tight">Hola, soy Nicolas. Desarrollador especializado en construir <strong className="font-black">software multiplataforma de alto rendimiento</strong>.</p>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">Estudiante de T.S.U. en Tecnologías de la Información en la <strong className="text-foreground font-bold">UTVAM</strong>. Mi pasión es transformar lógica compleja en interfaces fluidas.</p>
                      </div>
                    </motion.div>

                    {/* Foto */}
                    <motion.div variants={itemVariants} className="md:col-span-1 min-h-[350px] md:min-h-full bg-foreground/5 rounded-[2rem] overflow-hidden border border-foreground/10 relative group">
                      <Image src="/mi-foto.jpeg" alt="Nicolas Hernandez" fill className="object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent pointer-events-none" />
                      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div className="flex flex-col"><span className="text-sm font-black uppercase tracking-widest text-foreground">Nicolas</span><span className="text-[9px] uppercase tracking-widest text-foreground/50">Hidalgo, MX</span></div>
                        <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center backdrop-blur-sm group-hover:rotate-180 transition-transform duration-700"><span className="text-green-500 text-xs">●</span></div>
                      </div>
                    </motion.div>

                    {/* Stack */}
                    <motion.div variants={itemVariants} className="col-span-1 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-foreground/10 rounded-[2rem] p-8 flex flex-col justify-between">
                 {/* Stack */}
                    <motion.div variants={itemVariants} className="col-span-1 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-foreground/10 rounded-[2rem] p-8 flex flex-col justify-between">
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {/* 1. Flutter */}
                        <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-sm" title="Flutter">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#54C5F8]">
                            <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
                          </svg>
                        </div>

                        {/* 2. React */}
                        <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-sm" title="React">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="none" className="w-5 h-5 text-[#61DAFB]">
                            <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                            <g stroke="currentColor" strokeWidth="1" fill="none">
                              <ellipse rx="11" ry="4.2"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                          </svg>
                        </div>

                        {/* 3. Node.js */}
                        <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-sm" title="Node.js">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#339933]">
                            <path d="M11.874 0a1.886 1.886 0 0 0-1.026.257L2.247 5.168A1.895 1.895 0 0 0 1.25 6.814v9.846a1.905 1.905 0 0 0 .997 1.648l8.601 4.909c.304.183.639.263.985.257.348.006.685-.074.992-.257l8.601-4.909a1.906 1.906 0 0 0 .997-1.648V6.814a1.896 1.896 0 0 0-.997-1.646L12.825.257A1.884 1.884 0 0 0 11.874 0zm.014 1.857c.182-.004.353.048.497.135l8.604 4.909c.142.083.253.204.304.363l-4.116 2.457-4.102 2.368-4.204-2.39-4.189-2.428.006-.006 8.599-4.909a1.036 1.036 0 0 1 .601-.499zM6.91 8.851l4.189 2.428-4.204 2.39-4.103 2.367v-4.782l4.118-2.403zM16.89 8.922l4.116 2.455v4.757l-4.101-2.367-4.205-2.39 4.19-2.455zm-4.902 3.123l4.205 2.39 4.101 2.367-8.602 4.912a1.041 1.041 0 0 1-.504.135 1.038 1.038 0 0 1-.515-.145l-8.604-4.902 4.103-2.367 4.204-2.39h.012z"/>
                          </svg>
                        </div>

                        {/* 4. Python */}
                        <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-sm" title="Python">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3776AB]">
                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.43-.44.45-.33.53-.22.54-.13.62-.05h5.04l.1-.03.07-.05.04-.08.02-.13v-1.1l-.01-.33-.04-.33-.06-.31-.1-.31-.13-.28-.15-.26-.19-.24-.22-.21-.24-.18-.28-.15-.31-.13-.34-.1-.36-.07-.38-.04-.4-.02H6.9l-.66-.02-.63-.07-.58-.12-.52-.18-.46-.24-.4-.3-.32-.36-.26-.43-.18-.5-.1-.58-.04-.67V4.02l.06-.67.14-.64.23-.59.32-.53.4-.47.48-.4.57-.34.64-.26.73-.18.81-.1 1.05-.03h5.27l1.05.03.88.1.73.18zM8.43 1.91a.98.98 0 00-.98.98.98.98 0 00.98.98.98.98 0 00.98-.98.98.98 0 00-.98-.98zm11.53 5.75l-.1.02-.3.07-.33.1-.35.14-.35.19-.33.25-.3.31-.26.38-.21.46-.13.55-.05.63V15.5l.01.13.02.2.04.26.1.3.16.33.25.34.34.34.45.32.59.3.73.26.9.2 1.05.03h5.27l1.05-.03.81-.1.73-.18.64-.26.57-.34.48-.4.4-.47.32-.53.23-.59.14-.64.06-.67V19.98l-.04-.67-.1-.58-.18-.5-.26-.43-.32-.36-.4-.3-.46-.24-.52-.18-.58-.12-.63-.07-.66-.02h-5.04l-.4.02-.38.04-.36.07-.34.1-.31.13-.28.15-.24.18-.22.21-.19.24-.15.26-.13.28-.1.31-.06.31-.04.33-.01.33v1.1l.02.13.04.08.07.05.1.03h5.04l.62.05.54.13.53.22.45.33.43.44.36.57.32.71.24.87.16 1.04.06 1.22-.05 1.23-.14 1.05-.21.88-.28.73-.32.59-.35.46-.36.36-.36.26-.35.18-.32.12-.28.07-.21.03h-5.46v-3.06l-.02-.21-.04-.27-.07-.32-.1-.35-.15-.37-.2-.36-.27-.35-.33-.32-.41-.27-.5-.22-.59-.14-.69-.05h-4.88l-.21-.02-.26-.04-.3-.07-.33-.1-.35-.14-.35-.19-.33-.25-.3-.31-.26-.38-.21-.46-.13-.55-.05-.63v-5.22h6.86zM15.57 20.13a.98.98 0 00.98.98.98.98 0 00.98-.98.98.98 0 00-.98-.98.98.98 0 00-.98.98z"/>
                          </svg>
                        </div>

                      {/* 5. JavaScript */}
                        <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-sm" title="JavaScript">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#F7DF1E]">
                            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.81.39.015.75.09 1.065.255.33.165.6.435.795.735l1.965-1.185c-.54-1.02-1.41-1.74-2.475-2.145s-2.19-.525-3.465-.255c-1.305.27-2.31.96-2.85 2.115-.36.75-.465 1.62-.27 2.475.255 1.125 1.05 1.95 2.805 2.76.735.345 1.485.615 1.74.96.165.255.225.555.15.855-.135.585-.825.825-1.485.81-.66-.015-1.275-.24-1.755-.645-.45-.375-.765-.87-1-1.425l-2.01 1.155c.495 1.05 1.29 1.86 2.31 2.37s2.265.645 3.555.48c1.335-.165 2.49-.855 3.12-2.01.555-1.05.69-2.22.465-3.345zM11.982 14.55v-7.83h-2.58v7.83c0 1.305-.21 2.22-.615 2.745-.39.51-1.02.735-1.845.69-.51-.03-1.02-.18-1.485-.435l-.945 2.19c.645.405 1.425.645 2.295.675 1.5.06 2.655-.39 3.42-1.32.75-.915 1.125-2.28 1.125-4.14v-.405h.63z" />
                          </svg>
                        </div>

                        {/* 6. Base de Datos (MySQL/SQL) */}
                        <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-sm" title="Bases de Datos">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-400">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                          </svg>
                        </div>
                      </div>
                      
                 {/* Texto Descriptivo Actualizado */}
                      <div>
                        <h4 className="text-lg font-black text-foreground mb-2">Stack Principal</h4>
                        <p className="text-xs text-foreground/60 leading-relaxed font-medium">
                          Especializado en interfaces con <strong className="text-foreground">React</strong> y <strong className="text-foreground">Flutter</strong>. Fuerte dominio de <strong className="text-foreground">JavaScript</strong> para integrar lógica de backend y APIs usando <strong className="text-foreground">Node.js</strong> y <strong className="text-foreground">Python</strong>, soportado por bases de datos <strong className="text-foreground">SQL/MySQL</strong>.
                        </p>
                      </div>
                    </motion.div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div variants={itemVariants} className="col-span-1 bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-8 flex flex-col justify-center gap-4">
                      {stats.map((stat, index) => (
                        <div key={stat.label} className={`flex items-center justify-between pb-4 ${index !== 2 ? 'border-b border-foreground/5' : ''}`}>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">{stat.label}</span>
                          <span className="text-3xl font-black text-foreground">{stat.value}</span>
                        </div>
                      ))}
                    </motion.div>

                    {/* CV */}
                    <motion.div variants={itemVariants} className="col-span-1 group h-full">
                      <a href="/Nicolas_Hernandez_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-foreground text-background rounded-[2rem] p-8 flex flex-col items-center justify-center hover:scale-[0.97] transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div>
                        <span className="block text-xl font-black tracking-tight mb-1">Descargar CV</span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">Formato PDF</span>
                      </a>
                    </motion.div>
                  </div>

               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block uppercase [writing-mode:vertical-rl] text-foreground/20 tracking-[1em] text-[10px] font-bold">
        Software Developer — 2026
      </div>
      <style dangerouslySetInnerHTML={{__html: `@keyframes shimmer { 100% { transform: translateX(100%); } }`}} />
    </section>
  );
}