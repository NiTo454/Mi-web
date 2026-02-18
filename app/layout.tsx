import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// 1. IMPORTAMOS EL PROVEEDOR
import { ThemeProvider } from "@/components/ThemeProvider"; 

export const metadata = {
  title: "Nicolas Hernández | Portfolio",
  description: "Desarrollador Full Stack",
};

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