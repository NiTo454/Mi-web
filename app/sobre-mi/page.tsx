"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreMi() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { label: "Años Exp.", value: "02+" },
    { label: "Proyectos", value: "15+" },
    { label: "Stack", value: "MERN" },
  ];

  return (
    // Reduje un poco el padding en móviles (py-20) para que no haya un hueco gigante al hacer scroll
    <section className="relative min-h-screen w-full bg-background py-20 lg:py-32 px-6 overflow-hidden flex items-center transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          transition={{ staggerChildren: 0.15 }}
          // CAMBIO CLAVE: Cambié 'items-start' por 'items-center' para un balance perfecto, y reduje el gap en móviles (gap-12)
          className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center"
        >
          
          {/* COLUMNA IZQUIERDA: Texto Profesional */}
          <motion.div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.h1 
              variants={fadeInUp}
              // Ajuste sutil del margen inferior (mb-8 en lugar de mb-12) para que conecte mejor con el párrafo
              className="text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-foreground mb-8 lg:mb-10"
            >
              SOBRE <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                MÍ.
              </span>
            </motion.h1>

            {/* BLOQUE DE TEXTO */}
            <motion.div 
              variants={fadeInUp}
              // Reduje a space-y-6: los párrafos deben verse como un bloque unido, no como islas separadas
              className="space-y-6 text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-xl"
            >
              <p>
                Hola, soy Nicolas. Un desarrollador de software enfocado en crear soluciones digitales escalables. Actualmente complemento mi experiencia práctica estudiando el T.S.U. en Tecnologías de la Información en la <strong className="text-foreground font-bold">UTVAM</strong>.
              </p>
              <p>
                Mi objetivo no es solo escribir código limpio, sino resolver problemas de negocio reales. Me especializo en el <strong className="text-foreground font-bold">desarrollo de aplicaciones móviles nativas y plataformas web modernas</strong>, integrando interfaces intuitivas (Frontend) con arquitecturas de servidores y bases de datos robustas (Backend).
              </p>
              <p>
                Soy un firme creyente del aprendizaje continuo. Invierto mi tiempo perfeccionando mi dominio sobre nuevas tecnologías para garantizar que los ecosistemas digitales que construyo destaquen por su <strong className="text-foreground font-bold">rendimiento, seguridad y excelente experiencia de usuario</strong>.
              </p>
            </motion.div>

            {/* ESTADÍSTICAS */}
            <motion.div 
              variants={fadeInUp}
              // Ajuste del margen superior para separarlo del texto, pero sin exagerar (mt-10 lg:mt-12)
              className="grid grid-cols-3 gap-4 lg:gap-6 mt-10 lg:mt-14"
            >
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="group flex flex-col p-5 md:p-6 bg-foreground/[0.03] dark:bg-foreground/[0.05] rounded-[1.5rem] border border-foreground/5 hover:border-foreground/20 transition-all duration-300 text-center md:text-left shadow-sm"
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-1 group-hover:text-blue-500 transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-foreground/60 font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: Imagen */}
          <motion.div 
            variants={fadeInUp}
            // Eliminé el margen arbitrario (lg:mt-12) que descuadraba todo. Ahora se centra automáticamente.
            className="order-1 lg:order-2 w-full relative h-[400px] md:h-[500px] lg:h-[650px]"
          >
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full transform translate-x-10 translate-y-10 z-0 pointer-events-none opacity-50" />
            
            <div className="relative w-full h-full bg-foreground/5 rounded-[3rem] overflow-hidden z-10 border border-foreground/10 group shadow-xl shadow-foreground/5">
              <Image 
                src="/mi-foto.jpeg" 
                alt="Retrato Profesional de Nicolas" 
                fill
                className="object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}