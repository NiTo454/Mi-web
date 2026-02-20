"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // --- ESTADOS DEL CLIMA Y HORA ---
  const [time, setTime] = useState<string>("Cargando...");
  const [temp, setTemp] = useState<string>("--°C");
  const [locationName] = useState<string>("Tizayuca, MX");
  const [mounted, setMounted] = useState(false);

  // --- ESTADOS DEL FORMULARIO ACORDEÓN ---
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Enviar Mensaje");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const formatter = new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      });
      setTime(formatter.format(new Date()));
    }, 1000);

    const mountTimer = setTimeout(() => setMounted(true), 0);

    const fetchWeather = async () => {
      try {
        const lat = 19.8392; const lon = -98.9811;
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const weatherData = await weatherRes.json();
        if (weatherData.current_weather) {
          setTemp(`${Math.round(weatherData.current_weather.temperature)}°C`);
        }
      } catch (error) { setTemp("N/A"); }
    };

    fetchWeather();
    return () => { clearInterval(timer); clearTimeout(mountTimer); };
  }, []);

  // --- LÓGICA DE WEB3FORMS ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setButtonText("Enviando...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "073fd5a2-a75b-4eea-ad2d-5209889e64f5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setButtonText("¡Mensaje Enviado!");
        setIsSuccess(true);
        form.reset();
        setTimeout(() => {
          setButtonText("Enviar Mensaje");
          setIsSuccess(false);
          setIsContactOpen(false); // Cierra suavemente después de enviar
        }, 3000);
      } else { setButtonText("Error al enviar"); }
    } catch (error) { setButtonText("Error de conexión"); }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // --- LINKS DE CONTACTO OPTIMIZADOS (Cuadrícula 2x2) ---
  const links = [
    { 
      label: "Email",
      val: "nicolas.hm434", 
      href: "mailto:nicolas.hm434@gmail.com",
      hoverClass: "hover:border-[#EA4335]/50 hover:bg-[#EA4335]/5",
      textClass: "group-hover:text-[#EA4335]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity text-[#EA4335]">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    { 
      label: "Llamar",
      val: "55 8426 6211", 
      href: "tel:+525584266211", // <-- ESTO ACTIVA LA LLAMADA DIRECTA
      hoverClass: "hover:border-blue-500/50 hover:bg-blue-500/5",
      textClass: "group-hover:text-blue-500",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity text-blue-500">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      )
    },
    { 
      label: "WhatsApp",
      val: "55 8426 6211", 
      href: "https://wa.me/525584266211",
      hoverClass: "hover:border-[#25D366]/50 hover:bg-[#25D366]/5",
      textClass: "group-hover:text-[#25D366]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity text-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      )
    },
    { 
      label: "LinkedIn",
      val: "Nicolas Hernández", 
      href: "https://www.linkedin.com/in/nicolas-hernandez-maldonado",
      hoverClass: "hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/5",
      textClass: "group-hover:text-[#0a66c2]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity text-[#0a66c2]">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-foreground/[0.02] dark:bg-foreground/[0.01] pt-16 pb-8 px-6 border-t border-foreground/10 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center text-center w-full max-w-7xl mb-12">
          
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-bold mb-4">
            ¿Comenzamos a construir?
          </p>
          
          {/* EL BOTÓN QUE EXPANDE EL FORMULARIO */}
          <button 
            type="button"
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="group relative inline-block mb-4 outline-none transition-transform active:scale-95"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase text-foreground leading-[0.9] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-500 transition-all duration-500">
              HABLEMOS.
            </h2>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out" />
          </button>

          {/* EL ACORDEÓN: Se abre empujando el reloj hacia abajo */}
          <AnimatePresence>
            {isContactOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden w-full text-left"
              >
                <div className="py-12">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    {/* Columna Izquierda: Textos y Grid de Redes Sociales 2x2 */}
                    <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
                      <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-foreground/10 mb-6 w-fit bg-background shadow-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/60">Disponible para proyectos</span>
                      </motion.div>
                      <motion.p variants={fadeInUp} className="text-foreground/70 text-base md:text-lg max-w-md mb-8 leading-relaxed">
                        ¿Tienes un proyecto en mente o buscas desarrollo de alto rendimiento? Escríbeme y construyamos algo increíble.
                      </motion.p>
                      
                      {/* Cuadrícula 2x2 para aprovechar el espacio */}
                      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {links.map((l, index) => (
                          <a key={index} href={l.href} target="_blank" rel="noopener noreferrer" 
                             className={`flex flex-col items-center justify-center p-5 border border-foreground/10 rounded-2xl transition-all duration-300 group bg-background shadow-sm hover:shadow-md ${l.hoverClass}`}>
                            <div className="mb-2">
                                {l.icon}
                            </div>
                            <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold mb-1">{l.label}</p>
                            <p className={`text-xs md:text-sm font-bold text-foreground text-center transition-colors duration-300 ${l.textClass}`}>
                              {l.val}
                            </p>
                          </a>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Columna Derecha: Formulario */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-background border border-foreground/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-foreground/5 relative overflow-hidden h-full flex flex-col justify-center">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
                      <div className="mb-8 relative z-10 text-center">
                        <h3 className="text-2xl font-black tracking-tight text-foreground">Envíame un mensaje</h3>
                        <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-1">Respondo en menos de 24 horas</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-foreground/50 ml-2">Nombre</label>
                          <input type="text" name="name" required placeholder="Tu nombre completo" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-blue-500 focus:bg-background transition-all text-sm placeholder:text-foreground/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-foreground/50 ml-2">Email</label>
                          <input type="email" name="email" required placeholder="tu@email.com" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-blue-500 focus:bg-background transition-all text-sm placeholder:text-foreground/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-foreground/50 ml-2">Mensaje</label>
                          <textarea name="message" required rows={3} placeholder="Háblame de tu proyecto..." className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-blue-500 focus:bg-background transition-all text-sm placeholder:text-foreground/30 resize-none" />
                        </div>
                        <button type="submit" className={`w-full py-4 font-black rounded-xl uppercase text-xs tracking-[0.2em] hover:scale-[0.98] transition-all mt-2 shadow-lg ${isSuccess ? "bg-green-500 text-white" : "bg-foreground text-background"}`}>
                          {buttonText}
                        </button>
                      </form>
                    </motion.div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* EL WIDGET DEL CLIMA QUE BAJA CUANDO SE ABRE EL FORMULARIO */}
          <div className={`flex flex-wrap items-center justify-center gap-3 md:gap-5 px-5 py-2.5 rounded-full bg-background border border-foreground/10 shadow-md shadow-foreground/5 transition-all duration-500 ${isContactOpen ? "mt-4" : "mt-8"}`}>
            <div className="flex items-center gap-2 pr-3 md:pr-5 border-r border-foreground/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80">{mounted ? locationName : "..."}</span>
            </div>
            {mounted && (
              <>
                <div className="flex items-center gap-2 pr-3 md:pr-5 border-r border-foreground/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80">{temp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80 tabular-nums w-[75px] text-left">{time}</span>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* BARRA INFERIOR */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-foreground/10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-foreground/10 shadow-sm order-2 md:order-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/70">Sistema Online</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 order-1 md:order-2">
            <Link href="/" className="hover:text-blue-500 transition-colors duration-300">Inicio</Link>
            <Link href="/sobre-mi" className="hover:text-blue-500 transition-colors duration-300">Sobre Mí</Link>
            <Link href="/proyectos" className="hover:text-blue-500 transition-colors duration-300">Proyectos</Link>
            {/* Clic aquí también abre el panel */}
            <button onClick={() => setIsContactOpen(!isContactOpen)} className="hover:text-blue-500 transition-colors duration-300 uppercase outline-none">Contacto</button>
          </nav>

          <p className="text-foreground/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-medium order-3">
            © {currentYear} Nicolas Hernández
          </p>
        </div>
      </div>
    </footer>
  );
}