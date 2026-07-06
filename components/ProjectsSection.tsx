"use client";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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

type Project = {
  title: string;
  role: string;
  desc: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: "mobile" | "web";
};

const realProjects: Project[] = [
  {
    title: "App Móvil de Gestión Clínica",
    role: "Desarrollador Mobile Principal",
    desc: "Aplicación móvil multiplataforma de salud. Cuenta con agendamiento de citas en tiempo real, chat integrado médico-paciente y visualización de expedientes médicos.",
    tech: ["Flutter", "Dart", "Firebase", "Push Notifications"],
    github: "https://github.com/NiTo454",
    category: "mobile"
  },
  {
    title: "Plataforma Escolar con Asistencia QR",
    role: "Desarrollador Full-Stack",
    desc: "Sistema académico web con control de asistencia mediante códigos QR dinámicos auto-actualizables para evitar fraudes, panel de administración docente y control escolar.",
    tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/NiTo454",
    category: "web"
  },
  {
    title: "Sitio Corporativo con Simulaciones 3D",
    role: "Frontend & UI Developer",
    desc: "Desarrollo de landing page interactiva corporativa, implementando simulaciones de partículas 3D aceleradas por hardware y layouts responsivos de alta fidelidad.",
    tech: ["Next.js", "React Three Fiber", "Three.js", "Framer Motion"],
    demo: "https://sintaxis-lab-xuse.vercel.app",
    category: "web"
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const filteredProjects = realProjects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pt-12 pb-16 border-t border-foreground/10 flex flex-col gap-16">
      
      {/* AREAS DE EXPERTISE */}
      <div>
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-naranja">Especialidad</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase mt-2">
            LO QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-fucsia to-brand-violeta">CONSTRUYO.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <motion.div key={area.title} variants={fadeInUp} className="h-full">
              <Link
                href={area.link}
                onMouseMove={handleMouseMove}
                className="spotlight-card group relative flex flex-col justify-between h-full bg-card-bg backdrop-blur-md border border-card-border hover:border-brand-fucsia/30 hover:bg-card-bg/90 p-6 sm:p-8 md:p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 shadow-md hover:shadow-[0_20px_50px_-12px_rgba(230,28,140,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-fucsia/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-3">
                      <div className="text-foreground/80 bg-foreground/5 p-3 rounded-2xl w-fit transition-transform duration-300 group-hover:scale-110">
                        {area.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mt-1">{area.category}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-brand-fucsia group-hover:border-brand-fucsia group-hover:text-white group-hover:rotate-45 transition-all duration-300 text-foreground" aria-hidden="true">↗</div>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-foreground mb-4">{area.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-10 group-hover:text-foreground/80 transition-colors duration-300">{area.desc}</p>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                  {area.tech.map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 bg-background/50 dark:bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10 group-hover:border-brand-violeta/40 group-hover:text-brand-fucsia transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALERÍA DE PROYECTOS REALES */}
      <div className="pt-12 border-t border-foreground/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-naranja">Portafolio</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase mt-2">
              PROYECTOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-fucsia to-brand-violeta">DESTACADOS.</span>
            </h2>
          </div>

          {/* FILTROS DE CATEGORÍA */}
          <div className="flex flex-wrap gap-2 bg-foreground/5 dark:bg-foreground/[0.02] p-1.5 rounded-full border border-foreground/10 w-fit">
            {(["all", "mobile", "web"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider transition-all duration-300 outline-none cursor-pointer ${
                  filter === cat
                    ? "text-background dark:text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="active-filter-bg"
                    className="absolute inset-0 bg-foreground dark:bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {cat === "all" ? "Todos" : cat === "mobile" ? "Móvil" : "Web & Sistemas"}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                onMouseMove={handleMouseMove}
                className="spotlight-card group relative bg-card-bg backdrop-blur-md border border-card-border hover:border-brand-violeta/30 hover:bg-card-bg/85 p-5 sm:p-6 md:p-8 rounded-[2.5rem] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(163,36,158,0.15)] flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-violeta/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-fucsia">{project.role}</span>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mt-1">{project.title}</h3>
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 text-foreground"
                          title="Ver Código en GitHub"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                          </svg>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-brand-fucsia hover:border-brand-fucsia hover:text-white transition-all duration-300 text-foreground"
                          title="Ver Sitio Web"
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {/* IDE-like Simulated Code Block for geek aesthetic */}
                  <div className="w-full border border-foreground/10 rounded-2xl overflow-hidden mb-6 bg-black/60 backdrop-blur-sm shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-foreground/10 bg-foreground/[0.02] text-[9px] font-mono text-foreground/40">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <span className="opacity-80 font-bold">{project.category === "mobile" ? "main.dart" : "app.tsx"}</span>
                      <span className="w-6" />
                    </div>
                    <div className="p-4 font-mono text-[9px] leading-relaxed text-foreground/60 overflow-hidden max-h-[85px] relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      {project.category === "mobile" ? (
                        <pre className="text-left text-[#54C5F8] opacity-75">
                          <code>{`import 'package:flutter/material.dart';

void main() => runApp(ClinicaApp());

class ClinicaApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Salud Conectada',
      theme: ThemeData.dark(),
      home: DoctorDashboard(),
    );
  }
}`}</code>
                        </pre>
                      ) : project.title.includes("QR") ? (
                        <pre className="text-left text-[#FF5C33] opacity-75">
                          <code>{`import QRCode from 'qrcode';

export async function generateSecureQR(studentId: string) {
  const dynamicHash = sha256(studentId + Date.now());
  const qrCodeUrl = await QRCode.toDataURL(dynamicHash);
  return { qrCodeUrl, timestamp: Date.now() };
}`}</code>
                        </pre>
                      ) : (
                        <pre className="text-left text-[#E61C8C] opacity-75">
                          <code>{`import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <HardwareParticles count={8000} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}`}</code>
                        </pre>
                      )}
                    </div>
                  </div>

                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-background/50 dark:bg-foreground/5 text-foreground/60 rounded-lg border border-foreground/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </motion.div>
  );
}
