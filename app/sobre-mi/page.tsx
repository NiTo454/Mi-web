"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

export default function SobreMi() {
  // Animaciones 100% tipadas para evitar errores en Visual Studio Code
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
  };

  const stats = [
    { label: "Años Exp.", value: "02+" },
    { label: "Proyectos", value: "15+" },
    { label: "Clientes", value: "05+" },
  ];

  return (
    <section className="relative min-h-screen w-full bg-background py-24 lg:py-32 px-6 overflow-hidden flex items-center transition-colors duration-500">
      
      {/* Luces de ambiente premium */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-6"
        >
          
          {/* TÍTULO PRINCIPAL */}
          <motion.div variants={itemVariants} className="mb-4 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-none text-foreground uppercase">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600">Mí.</span>
            </h1>
          </motion.div>

          {/* DISEÑO DE BLOQUES (BENTO GRID): 3 Columnas x 2 Filas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
            
            {/* BLOQUE 1: BIO (Ocupa 2 columnas arriba) */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-2 bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group hover:border-foreground/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">Ingeniería & Código</span>
                </div>
                
                <p className="text-2xl md:text-4xl font-medium text-foreground/90 leading-tight mb-6 tracking-tight">
                  Hola, soy Nicolas. Desarrollador especializado en construir <strong className="font-black">software multiplataforma de alto rendimiento</strong>.
                </p>
                <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
                  Estudiante de T.S.U. en Tecnologías de la Información en la <strong className="text-foreground font-bold">UTVAM</strong>. Mi pasión es transformar lógica compleja en interfaces fluidas, integrando experiencias visuales modernas con arquitecturas sólidas.
                </p>
              </div>
            </motion.div>

            {/* BLOQUE 2: FOTO (1 columna arriba) */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-1 min-h-[350px] md:min-h-full bg-foreground/5 rounded-[2rem] overflow-hidden border border-foreground/10 relative group shadow-sm hover:shadow-xl hover:shadow-foreground/5 transition-all duration-500"
            >
              <Image 
                src="/mi-foto.jpeg" 
                alt="Nicolas Hernandez" 
                fill
                className="object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-widest text-foreground">Nicolas</span>
                  <span className="text-[9px] uppercase tracking-widest text-foreground/50">Hidalgo, MX</span>
                </div>
                {/* Sello de disponibilidad giratorio */}
                <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center backdrop-blur-sm group-hover:rotate-180 transition-transform duration-700">
                  <span className="text-green-500 text-xs">●</span>
                </div>
              </div>
            </motion.div>

            {/* BLOQUE 3: STACK TECNOLÓGICO (1 columna abajo) */}
            <motion.div 
              variants={itemVariants} 
              className="col-span-1 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-foreground/10 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-blue-500/20 transition-colors duration-500 shadow-sm"
            >
              <div className="flex gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-cyan-500 font-bold text-xs">Fl</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                  <span className="text-green-500 font-bold text-xs">No</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300 delay-150">
                  <span className="text-blue-500 font-bold text-xs">My</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-black text-foreground mb-2">Stack Principal</h4>
                <p className="text-xs text-foreground/60 leading-relaxed font-medium">
                  Desarrollo multiplataforma ágil con <strong className="text-foreground">Flutter</strong>, respaldado por backends robustos en <strong className="text-foreground">Node.js</strong> y bases de datos <strong className="text-foreground">MySQL</strong>.
                </p>
              </div>
            </motion.div>

            {/* BLOQUE 4: ESTADÍSTICAS (1 columna abajo) */}
            <motion.div 
              variants={itemVariants} 
              className="col-span-1 bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-8 flex flex-col justify-center gap-4 group hover:border-foreground/20 transition-colors duration-500 shadow-sm"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className={`flex items-center justify-between pb-4 ${index !== 2 ? 'border-b border-foreground/5' : ''}`}>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">
                    {stat.label}
                  </span>
                  <span className="text-3xl font-black text-foreground group-hover:text-blue-500 transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* BLOQUE 5: BOTÓN DESCARGAR CV (1 columna abajo) */}
            <motion.div 
              variants={itemVariants} 
              className="col-span-1 group h-full"
            >
              <a 
                href="/Nicolas_Hernandez_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full bg-foreground text-background rounded-[2rem] p-8 flex flex-col items-center justify-center hover:scale-[0.97] transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                {/* Animación de destello al pasar el cursor */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
                <span className="block text-xl font-black tracking-tight mb-1 relative z-10">Descargar CV</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 relative z-10">Formato PDF</span>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}