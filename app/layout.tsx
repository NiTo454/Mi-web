import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nicolas Hernández | Portfolio",
  description: "Desarrollador Full Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeToggle /> {/* Tu cuerda de foco */}
        <Navbar />      {/* Tu menú de navegación */}
        
        {/* pt-24 asegura que el menú no tape el contenido */}
        <main className="flex-grow pt-24">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}