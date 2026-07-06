"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

// --- DATOS CONSTANTES (MOVIDOS FUERA DEL COMPONENTE PARA MEJOR RENDIMIENTO) ---
const currentYear = new Date().getFullYear();

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const contactLinks = [
  {
    label: "Email",
    val: "nicolas.hm434",
    href: "mailto:nicolas.hm434@gmail.com",
    color: "#EA4335", // Google Red
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    )
  },
  {
    label: "WhatsApp",
    val: "55 8426 6211",
    href: "https://wa.me/525584266211",
    color: "#25D366", // WhatsApp Green
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    )
  },
  {
    label: "LinkedIn",
    val: "Nicolas Hernández",
    href: "https://www.linkedin.com/in/nicolas-hernandez-maldonado",
    color: "#0a66c2", // LinkedIn Blue
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    label: "Llamar",
    val: "55 8426 6211",
    href: "tel:+525584266211",
    color: "#A3249E", // Brand Violet
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    )
  },
];

// --- FUNCIÓN PARA OBTENER EL ICONO DEL CLIMA ---
const getWeatherIcon = (code: number, isDay: number) => {
  // 0: Despejado (Sol de día / Luna de noche usando tu Naranja y Violeta)
  if (code === 0) {
    return isDay === 1
      ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5C33]"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
      : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#A3249E]"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>;
  }
  // 1, 2, 3, 45, 48: Nubes o Niebla
  if ([1, 2, 3, 45, 48].includes(code)) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>;
  }
  // Llovizna o Lluvia
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>;
  }
  // Nieve
  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><line x1="2" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m8 20 4-4 4 4"></path></svg>;
  }
  // Tormenta (Usando tu Fucsia)
  if ([95, 96, 99].includes(code)) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#E61C8C]"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>;
  }

  // Fallback (Sol por defecto)
  return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5C33]"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>;
};

export default function Footer() {
  // --- ESTADOS DEL CLIMA Y HORA ---
  const [time, setTime] = useState<string>("Cargando...");
  const [temp, setTemp] = useState<string>("--°C");
  const [locationName] = useState<string>("Tizayuca, MX");
  const [mounted, setMounted] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState<React.ReactNode>(
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5C33]"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
  );

  // --- ESTADOS DEL FORMULARIO ACORDEÓN ---
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Enviar Mensaje");
  const [isSuccess, setIsSuccess] = useState(false);

  // --- EFECTOS PARA MONTADO, HORA Y CLIMA (SEPARADOS PARA CLARIDAD) ---
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      const formatter = new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      });
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = 19.8392, lon = -98.9811;
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const weatherData = await weatherRes.json();
        if (weatherData.current_weather) {
          setTemp(`${Math.round(weatherData.current_weather.temperature)}°C`);
          setWeatherIcon(getWeatherIcon(weatherData.current_weather.weathercode, weatherData.current_weather.is_day));
        }
      } catch (error) { setTemp("N/A"); }
    };
    fetchWeather();
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
    } catch (error) {
      setButtonText("Error de conexión");
    } finally {
      if (!isSuccess) {
        setTimeout(() => setButtonText("Enviar Mensaje"), 3000);
      }
    }
  }

  return (
    <footer className="w-full bg-foreground/[0.02] dark:bg-foreground/[0.01] pt-16 pb-8 px-6 border-t border-foreground/10 transition-colors duration-500 overflow-hidden relative">
      {/* Efectos de fondo con la paleta de la marca */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#A3249E]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#A3249E]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">

        <div className="flex flex-col items-center text-center w-full max-w-7xl mb-12">

          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-bold mb-4">
            ¿Listo para el siguiente nivel?
          </p>

          {/* EL BOTÓN QUE EXPANDE EL FORMULARIO */}
          <button
            type="button"
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="group relative inline-block mb-4 outline-none transition-transform active:scale-95"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase text-foreground leading-[0.9] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#E61C8C] to-[#FF5C33] transition-all duration-500">
              INICIEMOS.
            </h2>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#E61C8C] to-[#FF5C33] group-hover:w-full transition-all duration-500 ease-out" />
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
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E61C8C] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E61C8C]"></span>
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/60">Disponible para proyectos</span>
                      </motion.div>
                      <motion.p variants={fadeInUp} className="text-foreground/70 text-base md:text-lg max-w-md mb-8 leading-relaxed">
                        ¿Tienes un proyecto en mente o buscas desarrollo de alto rendimiento? Escríbeme y construyamos algo increíble.
                      </motion.p>

                      {/* Cuadrícula 2x2 para aprovechar el espacio */}
                      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contactLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center justify-center p-5 border border-foreground/10 rounded-2xl transition-all duration-300 bg-background shadow-sm hover:shadow-lg hover:-translate-y-1"
                            style={{'--link-color': link.color} as React.CSSProperties}
                          >
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--link-color)] transition-all duration-300" />
                            <div className="absolute inset-0 rounded-2xl bg-[var(--link-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="mb-2 text-[var(--link-color)] opacity-60 group-hover:opacity-100 transition-opacity duration-300">{link.icon}</div>
                            <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold mb-1">{link.label}</p>
                            <p className="text-xs md:text-sm font-bold text-foreground text-center transition-colors duration-300 group-hover:text-[var(--link-color)]">
                              {link.val}
                            </p>
                          </a>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Columna Derecha: Formulario */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-background border border-foreground/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-foreground/5 relative overflow-hidden h-full flex flex-col justify-center">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E61C8C]/10 blur-[80px] rounded-full pointer-events-none" />
                      <div className="mb-8 relative z-10 text-center">
                        <h3 className="text-2xl font-black tracking-tight text-foreground">Envíame un mensaje</h3>
                        <p className="text-[10px] text-foreground/50 uppercase tracking-widest mt-1">Respondo en menos de 24 horas</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-foreground/50 ml-2">Nombre</label>
                          <input type="text" name="name" required placeholder="Tu nombre completo" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#E61C8C] focus:bg-background transition-all text-sm placeholder:text-foreground/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-foreground/50 ml-2">Email</label>
                          <input type="email" name="email" required placeholder="tu@email.com" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#E61C8C] focus:bg-background transition-all text-sm placeholder:text-foreground/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-foreground/50 ml-2">Mensaje</label>
                          <textarea name="message" required rows={3} placeholder="Háblame de tu proyecto..." className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#E61C8C] focus:bg-background transition-all text-sm placeholder:text-foreground/30 resize-none" />
                        </div>
                        <button type="submit" className={`w-full py-4 font-black rounded-xl uppercase text-xs tracking-[0.2em] transition-all mt-2 shadow-lg relative overflow-hidden ${isSuccess ? "bg-green-500 text-white" : "bg-gradient-to-r from-[#E61C8C] to-[#FF5C33] text-white hover:shadow-lg hover:shadow-[#A3249E]/30 active:scale-[0.98]"}`}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5C33]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80">{mounted ? locationName : "..."}</span>
            </div>
            {mounted && (
              <>
                <div className="flex items-center gap-2 pr-3 md:pr-5 border-r border-foreground/10">
                  {weatherIcon}
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80">{temp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#E61C8C]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
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
            <Link href="/" className="hover:text-[#E61C8C] transition-colors duration-300">Inicio</Link>
            <Link href="/#sobre-mi" className="hover:text-[#E61C8C] transition-colors duration-300">Sobre Mí</Link>
            <a
              href="https://sintaxis-lab-xuse.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#E61C8C] hover:to-[#FF5C33] transition-all duration-300"
            >
              Sintaxis Lab
            </a>
            {/* Clic aquí también abre el panel */}
            <button onClick={() => setIsContactOpen(!isContactOpen)} className="hover:text-[#E61C8C] transition-colors duration-300 uppercase outline-none">Contacto</button>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1.5 order-3 text-center md:text-right">
            <p className="text-foreground/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-medium">
              © {currentYear} Nicolas Hernández
            </p>
            <p className="text-foreground/40 text-[7px] md:text-[8px] uppercase tracking-[0.2em] font-medium">
              Creado por{" "}
              <a
                href="https://sintaxis-lab-xuse.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground/60 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#E61C8C] hover:to-[#FF5C33] transition-all duration-300"
              >
                Sintaxis Lab
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
