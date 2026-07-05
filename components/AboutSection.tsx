"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Arsenal from "@/components/Arsenal";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 40, damping: 12 } }
};

const stats = [
  { label: "Años Exp.", value: "02+" },
  { label: "Proyectos", value: "15+" },
  { label: "Clientes", value: "05+" }
];
export default function AboutSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="pt-12 pb-16 border-t border-foreground/10 flex flex-col gap-6"
    >

      <div className="mb-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">
          Sobre <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-fucsia to-brand-naranja">Mí.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
        {/* Bio */}
        <motion.div variants={itemVariants} className="md:col-span-2 bg-background/30 dark:bg-foreground/[0.01] backdrop-blur-md border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden group hover:border-brand-violeta/30 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-fucsia/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-fucsia animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">Ingeniería & Código</span>
            </div>
            <p className="text-2xl md:text-4xl font-medium text-foreground/90 leading-tight mb-6 tracking-tight">
              Hola, soy Nicolás. Tengo 22 años y soy desarrollador especializado en construir <strong className="font-black text-foreground">software multiplataforma de alto rendimiento</strong>.
            </p>
            <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
              Estudiante de Ingeniería en Desarrollo de Software en la <strong className="text-foreground font-bold">UTVAM</strong> (Tizayuca). Mi pasión es transformar lógica compleja en interfaces fluidas e infraestructuras escalables.
            </p>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div variants={itemVariants} className="md:col-span-1 min-h-[350px] md:min-h-full bg-background/30 dark:bg-foreground/[0.01] backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-foreground/10 hover:border-brand-fucsia/30 relative group transition-colors duration-500">
          <Image src="/mi-foto.jpeg" alt="Nicolas Hernandez" fill className="object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-sm font-black uppercase tracking-widest text-foreground">Nicolás</span>
              <span className="text-[9px] uppercase tracking-widest text-brand-naranja font-bold mt-1">Tizayuca, MX</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center backdrop-blur-sm group-hover:rotate-180 group-hover:border-brand-fucsia/50 transition-all duration-700">
              <span className="text-brand-naranja text-xs shadow-[0_0_10px_var(--color-brand-naranja)]">●</span>
            </div>
          </div>
        </motion.div>

        {/* Stack */}
        <motion.div variants={itemVariants} className="col-span-1 bg-gradient-to-br from-brand-fucsia/5 to-brand-violeta/5 backdrop-blur-md border border-foreground/10 hover:border-brand-violeta/30 rounded-[2.5rem] p-8 flex flex-col justify-between transition-colors duration-500">
          <div className="flex flex-wrap gap-3 mb-8">
            {/* 1. Flutter */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }} className="w-10 h-10 rounded-xl bg-background/80 dark:bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:scale-110 hover:border-[#54C5F8]/40 hover:shadow-[0_0_15px_-3px_#54C5F8] transition-all duration-300 shadow-sm" title="Flutter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#54C5F8]">
                <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
              </svg>
            </motion.div>

            {/* 2. React */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="w-10 h-10 rounded-xl bg-background/80 dark:bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:scale-110 hover:border-[#61DAFB]/40 hover:shadow-[0_0_15px_-3px_#61DAFB] transition-all duration-300 shadow-sm" title="React">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="none" className="w-5 h-5 text-[#61DAFB]">
                <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                <g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g>
              </svg>
            </motion.div>

            {/* 3. Node.js */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-10 h-10 rounded-xl bg-background/80 dark:bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:scale-110 hover:border-[#339933]/40 hover:shadow-[0_0_15px_-3px_#339933] transition-all duration-300 shadow-sm" title="Node.js">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#339933]">
                <path d="M11.874 0a1.886 1.886 0 0 0-1.026.257L2.247 5.168A1.895 1.895 0 0 0 1.25 6.814v9.846a1.905 1.905 0 0 0 .997 1.648l8.601 4.909c.304.183.639.263.985.257.348.006.685-.074.992-.257l8.601-4.909a1.906 1.906 0 0 0 .997-1.648V6.814a1.896 1.896 0 0 0-.997-1.646L12.825.257A1.884 1.884 0 0 0 11.874 0zm.014 1.857c.182-.004.353.048.497.135l8.604 4.909c.142.083.253.204.304.363l-4.116 2.457-4.102 2.368-4.204-2.39-4.189-2.428.006-.006 8.599-4.909a1.036 1.036 0 0 1 .601-.499zM6.91 8.851l4.189 2.428-4.204 2.39-4.103 2.367v-4.782l4.118-2.403zM16.89 8.922l4.116 2.455v4.757l-4.101-2.367-4.205-2.39 4.19-2.455zm-4.902 3.123l4.205 2.39 4.101 2.367-8.602 4.912a1.041 1.041 0 0 1-.504.135 1.038 1.038 0 0 1-.515-.145l-8.604-4.902 4.103-2.367 4.204-2.39h.012z"/>
              </svg>
            </motion.div>

            {/* 4. Python */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="w-10 h-10 rounded-xl bg-background/80 dark:bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:scale-110 hover:border-[#3776AB]/40 hover:shadow-[0_0_15px_-3px_#3776AB] transition-all duration-300 shadow-sm" title="Python">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3776AB]">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.43-.44.45-.33.53-.22.54-.13.62-.05h5.04l.1-.03.07-.05.04-.08.02-.13v-1.1l-.01-.33-.04-.33-.06-.31-.1-.31-.13-.28-.15-.26-.19-.24-.22-.21-.24-.18-.28-.15-.31-.13-.34-.1-.36-.07-.38-.04-.4-.02H6.9l-.66-.02-.63-.07-.58-.12-.52-.18-.46-.24-.4-.3-.32-.36-.26-.43-.18-.5-.1-.58-.04-.67V4.02l.06-.67.14-.64.23-.59.32-.53.4-.47.48-.4.57-.34.64-.26.73-.18.81-.1 1.05-.03h5.27l1.05.03.88.1.73.18zM8.43 1.91a.98.98 0 00-.98.98.98.98 0 00.98.98.98.98 0 00.98-.98.98.98 0 00-.98-.98zm11.53 5.75l-.1.02-.3.07-.33.1-.35.14-.35.19-.33.25-.3.31-.26.38-.21.46-.13.55-.05.63V15.5l.01.13.02.2.04.26.1.3.16.33.25.34.34.34.45.32.59.3.73.26.9.2 1.05.03h5.27l1.05-.03.81-.1.73-.18.64-.26.57-.34.48-.4.4-.47.32-.53.23-.59.14-.64.06-.67V19.98l-.04-.67-.1-.58-.18-.5-.26-.43-.32-.36-.4-.3-.46-.24-.52-.18-.58-.12-.63-.07-.66-.02h-5.04l-.4.02-.38.04-.36.07-.34.1-.31.13-.28.15-.24.18-.22.21-.19.24-.15.26-.13.28-.1.31-.06.31-.04.33-.01.33v1.1l.02.13.04.08.07.05.1.03h5.04l.62.05.54.13.53.22.45.33.43.44.36.57.32.71.24.87.16 1.04.06 1.22-.05 1.23-.14 1.05-.21.88-.28.73-.32.59-.35.46-.36.36-.26-.35.18-.32.12-.28.07-.21.03h-5.46v-3.06l-.02-.21-.04-.27-.07-.32-.1-.35-.15-.37-.2-.36-.27-.35-.33-.32-.41-.27-.5-.22-.59-.14-.69-.05h-4.88l-.21-.02-.26-.04-.3-.07-.33-.1-.35-.14-.35-.19-.33-.25-.3-.31-.26-.38-.21-.46-.13-.55-.05-.63v-5.22h6.86zM15.57 20.13a.98.98 0 00.98.98.98.98 0 00.98-.98.98.98 0 00-.98-.98.98.98 0 00-.98.98z"/>
              </svg>
            </motion.div>

            {/* 5. PHP / Laravel */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="w-10 h-10 rounded-xl bg-background/80 dark:bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:scale-110 hover:border-[#777BB4]/40 hover:shadow-[0_0_15px_-3px_#777BB4] transition-all duration-300 shadow-sm" title="PHP / Laravel">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#777BB4]">
                <path d="M12 2C5.373 2 0 6.477 0 12s5.373 10 12 10 12-4.477 12-10S18.627 2 12 2zm5.826 10.392c-.083.504-.265.918-.544 1.242-.279.324-.627.554-1.045.69-.418.136-.884.204-1.398.204h-1.63l-.538 3.197h-2.1l1.521-9.043h3.585c.531 0 1.01.066 1.436.198.426.132.784.341 1.074.627.29.286.502.648.636 1.086.134.438.169.932.103 1.482l-.1 3.197zm-5.836-3.805l-.571 3.392h1.611c.31 0 .565-.05.765-.15.2-.1.353-.243.46-.429.107-.186.17-.414.189-.684.019-.27-.008-.57-.081-.9-.073-.33-.2-.602-.381-.816-.181-.214-.426-.37-.735-.468-.309-.098-.686-.147-1.131-.147h-1.126z"/>
              </svg>
            </motion.div>

            {/* 6. Docker */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="w-10 h-10 rounded-xl bg-background/80 dark:bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:scale-110 hover:border-[#2496ED]/40 hover:shadow-[0_0_15px_-3px_#2496ED] transition-all duration-300 shadow-sm" title="Docker">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#2496ED]">
                <path d="M13.983 11.277c.005-.087.01-.174.01-.263a7.172 7.172 0 00-1.854-5.006A7.16 7.16 0 007.133 4.02a7.165 7.165 0 00-4.996 1.867A7.165 7.165 0 00.27 10.884c-.042.34-.029.686.037 1.026a7.227 7.227 0 001.654 3.738 7.218 7.218 0 003.541 2.213c.277.067.56.115.845.143v-.004A4.321 4.321 0 014.28 14.88a4.328 4.328 0 011.022-3.159c.273-.016.544-.055.81-.115a7.173 7.173 0 006.183-4.144c.484-.06.945-.224 1.348-.485a7.17 7.17 0 00.34-5.7zm-8.882.164a.885.885 0 11.002-1.77.885.885 0 01-.002 1.77zm2.42-3.149H5.568v1.942h1.953V8.292zm0-2.222H5.568v1.94h1.953v-1.94zm2.186 2.222H7.754v1.942h1.953V8.292zm0-2.222H7.754v1.94h1.953v-1.94zm2.186 2.222H9.94v1.942h1.953V8.292zm0-2.222H9.94v1.94h1.953v-1.94zm2.187 2.222h-1.954v1.942h1.954V8.292zm0-2.222h-1.954v1.94h1.954v-1.94zm2.186 2.222h-1.953v1.942h1.953V8.292z"/>
              </svg>
            </motion.div>
          </div>

          <div>
            <h4 className="text-lg font-black text-foreground mb-2">Stack Principal</h4>
            <p className="text-xs text-foreground/60 leading-relaxed font-medium">
              Especializado en interfaces con <strong className="text-foreground">React</strong> y <strong className="text-foreground">Flutter/Dart</strong>. Fuerte dominio de backend y APIs usando <strong className="text-foreground">Node.js</strong>, <strong className="text-foreground">Python</strong> y <strong className="text-foreground">PHP (Laravel)</strong>, gestionando despliegues con <strong className="text-foreground">Docker</strong> y bases de datos <strong className="text-foreground">SQL/MySQL</strong>.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="col-span-1 bg-background/30 dark:bg-foreground/[0.01] backdrop-blur-md border border-foreground/10 rounded-[2.5rem] p-8 flex flex-col justify-center gap-4 hover:border-brand-violeta/30 transition-colors duration-500 shadow-sm">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center justify-between pb-4 ${index !== 2 ? 'border-b border-foreground/5' : ''}`}>
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-bold">{stat.label}</span>
              <span className="text-3xl font-black text-foreground">{stat.value}</span>
            </div>
          ))}
        </motion.div>

        {/* CV (Botón Animado) */}
        <motion.div variants={itemVariants} className="col-span-1 group h-full">
          <a href="/Nicolas_Hernandez_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-brand-negro border border-white/10 hover:border-transparent text-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center hover:scale-[0.97] hover:shadow-[0_0_30px_-5px_var(--color-brand-fucsia)] transition-all duration-500 relative overflow-hidden">
            {/* Animación de Shimmer usando CSS local */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer_effect" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-fucsia via-brand-violeta to-brand-naranja opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-fucsia/20 group-hover:border-brand-fucsia/50 transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-brand-naranja transition-colors duration-500">
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

      {/* Estilos locales para asegurar que el Shimmer funcione */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer_effect {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer_effect {
          animation: shimmer_effect 1.5s infinite;
        }
      `}} />
      
      {/* Arsenal técnico marquee */}
      <div className="w-full mt-10">
        <Arsenal />
      </div>
    </motion.div>
  );
}
