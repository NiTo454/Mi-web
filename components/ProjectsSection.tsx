"use client";
import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

type Area = {
  title: string;
  category: string;
  icon: ReactNode;
  desc: string;
  tech: string[];
  link: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// --- ICONOS ---
const MobileIcon = () => (
  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 group-hover:text-[#FF5C33] transition-all duration-300" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current"><path d="M420.2 92.5c-4-4.8-10.8-5.3-15.6-1.3l-28.7 23.4C333 100.3 286 96 238.4 100.1l-28.9-23.6c-4.8-3.9-11.7-3.4-15.6 1.3-3.9 4.8-3.4 11.7 1.3 15.6l28.1 23C158 152.1 106 208.5 86.4 275.9h403.3C470 208.5 418 152.1 352.7 116.5l28.1-23c4.8-3.9 5.3-10.8 1.4-15.6zM224 230c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm128 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM32 307.9h512v159.9c0 24.5-21.6 44.2-48.2 44.2H80.2C53.6 512 32 492.3 32 467.8V307.9z"/></svg>
  </div>
);

const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 group-hover:text-[#E61C8C] transition-all duration-300" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

const BackendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 group-hover:text-[#A3249E] transition-all duration-300" aria-hidden="true"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
);

// --- DATOS ---
const areas: Area[] = [
  {
    title: "Apps Móviles",
    category: "iOS & Android",
    icon: <MobileIcon />,
    desc: "Desarrollo de aplicaciones nativas de alto rendimiento. Me especializo en interfaces fluidas y lógica de negocio compleja para plataformas móviles.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "#contacto"
  },
  {
    title: "Sistemas & Web",
    category: "Full-Stack",
    icon: <WebIcon />,
    desc: "Plataformas web modernas y seguras. Desde paneles administrativos para comisiones municipales hasta sistemas académicos con control de asistencia mediante códigos QR.",
    tech: ["Next.js", "Laravel (PHP)", "Python"],
    link: "#contacto"
  },
  {
    title: "Servidores & APIs",
    category: "Arquitectura",
    icon: <BackendIcon />,
    desc: "El motor detrás de las apps. Diseño bases de datos sólidas, APIs RESTful escalables y gestiono el despliegue en servidores VPS Linux utilizando contenedores.",
    tech: ["Node.js", "MySQL", "Docker"],
    link: "#contacto"
  }
];

export default function ProjectsSection() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pt-8 pb-16 border-t border-foreground/10">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">LO QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61C8C] to-[#A3249E]">CONSTRUYO.</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area) => (
          <motion.div key={area.title} variants={fadeInUp} className="h-full">
            <Link
              href={area.link}
              className="group relative flex flex-col justify-between h-full bg-foreground/[0.02] border border-foreground/10 hover:border-[#E61C8C]/40 hover:bg-foreground/[0.05] p-8 md:p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(230,28,140,0.3)] overflow-hidden"
            >
              {/* Brillo interior en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E61C8C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col gap-2">
                    <div className="text-foreground/80">{area.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50">{area.category}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-[#E61C8C] group-hover:border-[#E61C8C] group-hover:text-white transition-colors duration-300" aria-hidden="true">↗</div>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-foreground mb-4">{area.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-10 group-hover:text-foreground/80 transition-colors duration-300">{area.desc}</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {area.tech.map(t => (
                  <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10 group-hover:border-[#A3249E]/40 group-hover:text-[#E61C8C] transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
