"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contacto() {
  const [buttonText, setButtonText] = useState("Enviar Mensaje");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setButtonText("Enviando...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "073fd5a2-a75b-4eea-ad2d-5209889e64f5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setButtonText("¡Mensaje Enviado!");
        setIsSuccess(true);
        form.reset();
        
        setTimeout(() => {
          setButtonText("Enviar Mensaje");
          setIsSuccess(false);
        }, 3000);
      } else {
        setButtonText("Error al enviar");
      }
    } catch (error) {
      setButtonText("Error de conexión");
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const links = [
    { 
      label: "Email", 
      val: "nicolas.hm434@gmail.com", 
      href: "mailto:nicolas.hm434@gmail.com",
      hoverClass: "hover:border-transparent hover:shadow-[0_0_20px_rgba(66,133,244,0.15)] hover:bg-gradient-to-r hover:from-[#4285F4]/5 hover:via-[#EA4335]/5 hover:to-[#FBBC05]/5",
      textClass: "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4285F4] group-hover:via-[#EA4335] group-hover:to-[#34A853]"
    },
    { 
      label: "WhatsApp", 
      val: "55 8426 6211", 
      href: "https://wa.me/525584266211",
      hoverClass: "hover:border-green-500/50 hover:bg-green-500/5",
      textClass: "group-hover:text-green-500"
    },
    { 
      label: "LinkedIn", 
      val: "Nicolas Hernández", 
      href: "https://www.linkedin.com/in/nicolas-hernandez-maldonado",
      hoverClass: "hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/5",
      textClass: "group-hover:text-[#0a66c2]"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-background pt-32 md:pt-40 pb-20 px-6 overflow-hidden flex items-center transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            {/* AQUÍ ESTÁ EL CAMBIO: Ahora dice "Disponible para nuevos proyectos" */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-foreground/10 mb-8 w-fit bg-background shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-foreground mb-6"
            >
              HABLEMOS<span className="text-blue-500">.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-foreground/60 text-base md:text-lg max-w-md mb-10 leading-relaxed">
              ¿Tienes un proyecto en mente, buscas colaborar o necesitas desarrollo de alto rendimiento? Escríbeme.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 max-w-md">
              {links.map((l) => (
                <a 
                  key={l.label} 
                  href={l.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`block p-6 border border-foreground/10 rounded-2xl transition-all duration-300 group bg-background shadow-sm hover:shadow-md ${l.hoverClass}`}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-1 transition-colors">
                    {l.label}
                  </p>
                  <p className={`text-lg md:text-xl font-medium text-foreground transition-colors duration-300 ${l.textClass}`}>
                    {l.val}
                  </p>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 bg-background border border-foreground/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-foreground/5 w-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="mb-10 relative z-10">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">Envíame un mensaje</h3>
              <p className="text-xs text-foreground/50 uppercase tracking-widest mt-2">Respondo en menos de 24 horas</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/50 ml-2">Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Tu nombre completo" 
                  className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-background transition-all text-foreground placeholder:text-foreground/30" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/50 ml-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="tu@email.com" 
                  className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-background transition-all text-foreground placeholder:text-foreground/30" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/50 ml-2">Mensaje</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  placeholder="Háblame de tu proyecto..." 
                  className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-background transition-all text-foreground placeholder:text-foreground/30 resize-none" 
                />
              </div>

              <button 
                type="submit"
                className={`w-full py-5 font-black rounded-xl uppercase text-xs tracking-[0.2em] hover:scale-[0.98] transition-all mt-4 shadow-lg
                  ${isSuccess 
                    ? "bg-green-500 text-white" 
                    : "bg-foreground text-background"
                  }
                `}
              >
                {buttonText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}