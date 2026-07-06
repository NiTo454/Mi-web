"use client";
import { motion } from "framer-motion";

export default function Compromiso() {
  const valores = [
    { id: "01", title: "Escalabilidad", desc: "Código modular, limpio y documentado, preparado para crecer y adaptarse a nuevas necesidades desde el primer día." },
    { id: "02", title: "Minimalismo", desc: "Interfaces depuradas y limpias de distracciones, donde el contenido es el protagonista y la navegación es totalmente intuitiva." },
    { id: "03", title: "Eficiencia", desc: "Sistemas optimizados con tiempos de carga mínimos y alta velocidad de procesamiento, priorizando la experiencia del usuario." }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const width = rect.width;
    const height = rect.height;
    const rotateX = ((y - height / 2) / height) * -5; // max 5 deg
    const rotateY = ((x - width / 2) / width) * 5; // max 5 deg

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty("--rotate-x", `0deg`);
    card.style.setProperty("--rotate-y", `0deg`);
  };

  return (
    <section className="py-24 border-t border-foreground/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-naranja">Valores</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase mt-2">
            MI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-fucsia to-brand-violeta">COMPROMISO.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valores.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="spotlight-card tilt-card group relative bg-card-bg backdrop-blur-md border border-card-border hover:border-brand-fucsia/20 hover:bg-card-bg/85 p-6 sm:p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 shadow-sm overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-fucsia/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                {/* ID del Valor */}
                <span className="block text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-fucsia to-brand-naranja mb-6 select-none font-mono opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  {v.id}
                </span>
                
                <h3 className="text-2xl font-black tracking-tight text-foreground mb-4 w-fit border-b-2 border-brand-naranja/30 pb-1">
                  {v.title}
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}