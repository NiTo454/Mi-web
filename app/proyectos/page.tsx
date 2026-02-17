"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Proyectos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const areas = [
    {
      title: "Apps Móviles",
      category: "iOS & Android (Flutter)",
      desc: "Desarrollo de aplicaciones nativas de alto rendimiento. Me especializo en interfaces fluidas, animaciones complejas y una experiencia de usuario (UX) impecable en cualquier dispositivo.",
      tech: ["Flutter", "Dart", "Firebase", "Material 3"],
      link: "/contacto"
    },
    {
      title: "Desarrollo Web",
      category: "Next.js & React",
      desc: "Sitios web modernos y aplicaciones progresivas (PWA). Desde landing pages de alto impacto hasta paneles de administración complejos, todo optimizado para velocidad y SEO.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      link: "/contacto"
    },
    {
      title: "Backend & APIs",
      category: "Arquitectura de Software",
      desc: "El motor detrás de las apps. Diseño bases de datos (MySQL) y creo APIs RESTful escalables con Node.js para que tus aplicaciones gestionen datos en tiempo real.",
      tech: ["Node.js", "MySQL", "Express", "API REST"],
      link: "/contacto"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-background pt-32 md:pt-40 pb-20 px-6 overflow-hidden transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
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
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50 leading-tight pr-4">
                        {area.category}
                      </span>
                      {/* Botón Circular con Flecha */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                        <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm">
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
                        className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10 group-hover:border-foreground/20 transition-colors"
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