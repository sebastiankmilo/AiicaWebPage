/**
 * Componente principal de la aplicación AIICA
 * Landing page completa con todas las secciones
 */

import { useEffect } from "react";
import {
  Header,
  HeroSection,
  ProjectsSection,
  AboutSection,
  ServicesSection,
  AIAdvisorSection,
  CallToActionSection,
  ContactSection,
  Footer
} from "./components";
import { isConfigurationValid } from "./config";
import "./App.css";

/**
 * Componente principal de la aplicación
 * Ensambla todas las secciones de la landing page
 */
function App() {
  /**
   * Efecto para configuraciones iniciales cuando se monta la aplicación
   */
  useEffect(() => {
    // Verificar configuración de API keys
    isConfigurationValid();

    // Configurar scroll suave para toda la aplicación
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Inicializar iconos de Lucide
    const initIcons = () => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    };
    
    // Inicializar iconos inmediatamente
    initIcons();
    
    // Y también después de un pequeño delay para asegurar renderizado
    const timeout = setTimeout(initIcons, 100);
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Navegación principal fija */}
      <Header />
      
      {/* Contenido principal */}
      <main>
        {/* Sección hero con imagen de fondo */}
        <HeroSection />
        
        {/* Sección de proyectos tecnológicos */}
        <ProjectsSection />
        
        {/* Sección sobre la organización */}
        <AboutSection />
        
        {/* Sección de servicios */}
        <ServicesSection />
        
        {/* Sección del asesor IA */}
        <AIAdvisorSection />
        
        {/* Sección de llamada a la acción */}
        <CallToActionSection />
        
        {/* Sección de contacto */}
        <ContactSection />
      </main>
      
      {/* Pie de página */}
      <Footer />
    </>
  );
}

export default App;