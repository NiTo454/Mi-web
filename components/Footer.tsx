"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const [time, setTime] = useState<string>("Cargando...");
  const [temp, setTemp] = useState<string>("--°C");
  // 1. Fijamos tu ubicación real directamente
  const [locationName] = useState<string>("Tizayuca, MX");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // 2. Forzamos la zona horaria a México, sin importar de dónde nos visiten
      const formatter = new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(formatter.format(new Date()));
    }, 1000);

    const mountTimer = setTimeout(() => setMounted(true), 0);

    const fetchWeather = async () => {
      try {
        // 3. Coordenadas exactas de Tizayuca, Hidalgo (NUNCA fallará porque no rastrea IPs)
        const lat = 19.8392;
        const lon = -98.9811;

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const weatherData = await weatherRes.json();
        
        if (weatherData.current_weather) {
          setTemp(`${Math.round(weatherData.current_weather.temperature)}°C`);
        }
      } catch (error) {
        setTemp("N/A");
      }
    };

    fetchWeather();

    return () => {
      clearInterval(timer);
      clearTimeout(mountTimer);
    };
  }, []);

  return (
    <footer className="w-full bg-foreground/[0.02] dark:bg-foreground/[0.01] pt-16 pb-8 px-6 border-t border-foreground/10 transition-colors duration-500 overflow-hidden relative">
      
      {/* Luz ambiental sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center text-center w-full max-w-4xl mb-12">
          
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-bold mb-4">
            ¿Comenzamos a construir?
          </p>
          
          <Link 
            href="/contacto" 
            className="group relative inline-block mb-8"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase text-foreground leading-[0.9] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-500 transition-all duration-500">
              HABLEMOS.
            </h2>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 px-5 py-2.5 rounded-full bg-background border border-foreground/10 shadow-md shadow-foreground/5">
            
            <div className="flex items-center gap-2 pr-3 md:pr-5 border-r border-foreground/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80">
                {mounted ? locationName : "..."}
              </span>
            </div>

            {mounted && (
              <>
                <div className="flex items-center gap-2 pr-3 md:pr-5 border-r border-foreground/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path><path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path><path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80">{temp}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/80 tabular-nums w-[75px] text-left">
                    {time}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-foreground/10">
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-foreground/10 shadow-sm order-2 md:order-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/70">
              Sistema Online
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 order-1 md:order-2">
            <Link href="/" className="hover:text-blue-500 transition-colors duration-300">Inicio</Link>
            <Link href="/sobre-mi" className="hover:text-blue-500 transition-colors duration-300">Sobre Mí</Link>
            <Link href="/proyectos" className="hover:text-blue-500 transition-colors duration-300">Proyectos</Link>
            <Link href="/contacto" className="hover:text-blue-500 transition-colors duration-300">Contacto</Link>
          </nav>

          <p className="text-foreground/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-medium order-3">
            © {currentYear} Nicolas Hernández
          </p>
          
        </div>
      </div>
    </footer>
  );
}