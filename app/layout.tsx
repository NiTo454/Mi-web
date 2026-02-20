import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// 1. IMPORTAMOS EL PROVEEDOR
import { ThemeProvider } from "@/components/ThemeProvider"; 

// --- AQUÍ ESTÁ EL CAMBIO: Metadata avanzada para SEO y Redes Sociales ---
export const metadata = {
  title: "Nicolas Hernández | Desarrollador Full Stack",
  description: "Portafolio profesional de Nicolas. Especializado en crear soluciones digitales de alto rendimiento, aplicaciones multiplataforma y arquitecturas de backend sólidas.",
  openGraph: {
    title: "Nicolas Hernández | Desarrollador Full Stack",
    description: "Creando soluciones digitales de alto rendimiento. Explora mi portafolio y construyamos algo increíble.",
    url: "https://mi-web-bay.vercel.app", // Tu enlace real de Vercel
    siteName: "Portafolio Nicolas Hernández",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de guardar una imagen con este nombre en tu carpeta "public"
        width: 1200,
        height: 630,
        alt: "Preview del Portafolio de Nicolas Hernández",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Hernández | Desarrollador Full Stack",
    description: "Creando soluciones digitales de alto rendimiento.",
    images: ["/og-image.jpg"],
  },
};
// ------------------------------------------------------------------------

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. SUPPRESS HYDRATION WARNING: Vital para que no parpadee en blanco al recargar
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        
        {/* 3. ENVOLVEMOS TODO CON EL THEME PROVIDER */}
        <ThemeProvider>
          
          <ThemeToggle /> {/* Tu cuerda de foco */}
          <Navbar />      {/* Tu menú de navegación */}
          
          {/* pt-24 asegura que el menú no tape el contenido */}
          <main className="flex-grow pt-24">
            {children}
          </main>
          
          <Footer />
          
        </ThemeProvider>

      </body>
    </html>
  );
}