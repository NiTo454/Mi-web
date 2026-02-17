"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const [time, setTime] = useState<string>("Cargando...");
  const [temp, setTemp] = useState<string>("--°C");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. RELOJ EN TIEMPO REAL (Actualiza cada segundo)
    const timer = setInterval(() => {
      const formatter = new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', // Los segundos dan la sensación de que está "vivo"
        hour12: true
      });
      setTime(formatter.format(new Date()));
    }, 1000);

    // Se usa un microtask o timeout para evitar el setState síncrono que dispara el warning de renderizado en cascada
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 0);

    // 2. CLIMA EN TIZAYUCA (Se obtiene 1 vez al cargar)
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.8391&longitude=-98.9794&current_weather=true");
        const data = await res.json();
        if (data.current_weather) {
          setTemp(`${Math.round(data.current_weather.temperature)}°C`);
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
    <footer className="w-full bg-background pt-24 pb-12 px-6 border-t border-foreground/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* PARTE SUPERIOR: Call to Action Dinámico */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          
          {/* BOTÓN GIGANTE HACIA CONTACTO */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-bold mb-6">
              ¿Tienes una idea en mente?
            </p>
            <Link 
              href="/contacto" 
              className="group flex items-center gap-6 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-foreground hover:text-blue-500 transition-colors duration-500"
            >
              Iniciar Proyecto
              {/* Círculo con flecha animada */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-background transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>
          </div>

          {/* WIDGET LOCAL: Con Iconos SVG en lugar de Emojis */}
          <div className="flex flex-col gap-3 p-6 rounded-[2rem] bg-foreground/[0.02] border border-foreground/5 min-w-[280px]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold mb-1">
              Estado Local
            </p>
            
            <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-widest text-foreground/70">
              
              {/* Ubicación */}
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Tizayuca, MX</span>
              </div>

              {mounted && (
                <>
                  {/* Clima */}
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path><path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path><path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    <span>{temp}</span>
                  </div>

                  {/* Reloj con Segundos */}
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="tabular-nums w-[110px]">{time}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* LÍNEA DIVISORIA */}
        <div className="w-full h-[1px] bg-foreground/10" />

        {/* PARTE INFERIOR: Navegación y Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <nav className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">
            <Link href="/" className="hover:text-blue-500 transition-colors duration-300">Inicio</Link>
            <Link href="/sobre-mi" className="hover:text-blue-500 transition-colors duration-300">Sobre Mí</Link>
            <Link href="/proyectos" className="hover:text-blue-500 transition-colors duration-300">Proyectos</Link>
            <Link href="/contacto" className="hover:text-blue-500 transition-colors duration-300">Contacto</Link>
          </nav>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <p className="text-foreground/40 text-[10px] uppercase tracking-widest font-medium text-center md:text-left">
              © {currentYear} Nicolas Hernández
            </p>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/60">
                Sistema Online
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}