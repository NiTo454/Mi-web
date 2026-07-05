"use client";
import { motion } from "framer-motion";

export default function Arsenal() {
  const skills = [
    { name: "Flutter", color: "hover:text-[#54C5F8]" },
    { name: "Node.js", color: "hover:text-[#339933]" },
    { name: "MySQL", color: "hover:text-[#00758F]" },
    { name: "Next.js", color: "hover:text-foreground" },
    { name: "Tailwind", color: "hover:text-[#38BDF8]" },
    { name: "Git", color: "hover:text-[#F05032]" },
    { name: "Laravel", color: "hover:text-[#FF2D20]" },
    { name: "Python", color: "hover:text-[#3776AB]" },
  ];

  // Duplicamos el array para que el scroll infinito sea continuo
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="py-12 w-full overflow-hidden border-t border-b border-foreground/5 relative bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-naranja">Arsenal Técnico</h4>
      </div>

      {/* Contenedor del scroll */}
      <div className="flex w-full overflow-hidden relative select-none group">
        {/* Degradados en los bordes para difuminar la entrada/salida */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 py-2 animate-marquee-horizontal whitespace-nowrap min-w-full">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-background/40 dark:bg-foreground/[0.01] border border-foreground/10 text-xl font-bold uppercase tracking-widest text-foreground/40 transition-all duration-300 ${skill.color} hover:bg-background/80 hover:border-brand-fucsia/30 hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(230,28,140,0.2)]`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-horizontal {
          animation: marquee-horizontal 25s linear infinite;
        }
        .animate-marquee-horizontal:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}