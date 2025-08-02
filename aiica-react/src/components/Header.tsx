/**
 * Componente Header - Navegación principal de AIICA
 * Incluye logo, menú de navegación y menú móvil responsive
 */

import { useState } from "react";
// Usando lucide desde CDN como en el HTML original

const Header: React.FC = () => {
  // Estado para controlar la visibilidad del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Alterna la visibilidad del menú móvil
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Cierra el menú móvil cuando se hace clic en un enlace
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Maneja el scroll suave a una sección específica
   * @param sectionId - ID de la sección a la que hacer scroll
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo y nombre de la empresa */}
        <a 
          href="#" 
          className="flex items-center space-x-2"
        >
          <img 
            src="https://storage.googleapis.com/maker-system-project-images/images/AIICA-LOGOColor.jpg" 
            alt="Logo de AIICA" 
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-green-800">AIICA</span>
        </a>

        {/* Navegación para escritorio */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection("proyectos")} 
            className="text-gray-600 hover:text-green-700 font-medium transition duration-300"
          >
            Proyectos
          </button>
          <button 
            onClick={() => scrollToSection("nosotros")} 
            className="text-gray-600 hover:text-green-700 font-medium transition duration-300"
          >
            Sobre Nosotros
          </button>
          <button 
            onClick={() => scrollToSection("servicios")} 
            className="text-gray-600 hover:text-green-700 font-medium transition duration-300"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection("involucrate")} 
            className="text-gray-600 hover:text-green-700 font-medium transition duration-300"
          >
            Involúcrate
          </button>
        </nav>

        {/* Botón de contacto para escritorio */}
        <button 
          onClick={() => scrollToSection("contacto")} 
          className="hidden md:inline-block bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg"
        >
          Contacto
        </button>

        {/* Botón del menú móvil */}
        <button 
          id="mobile-menu-button"
          onClick={toggleMobileMenu} 
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          aria-label="Abrir menú de navegación"
        >
          <i data-lucide="menu"></i>
        </button>
      </div>

      {/* Menú móvil */}
      <div id="mobile-menu" className={`md:hidden px-6 pt-2 pb-4 ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <button 
          onClick={() => scrollToSection("proyectos")} 
          className="block w-full text-left py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
        >
          Proyectos
        </button>
        <button 
          onClick={() => scrollToSection("nosotros")} 
          className="block w-full text-left py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
        >
          Sobre Nosotros
        </button>
        <button 
          onClick={() => scrollToSection("servicios")} 
          className="block w-full text-left py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
        >
          Servicios
        </button>
        <button 
          onClick={() => scrollToSection("involucrate")} 
          className="block w-full text-left py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
        >
          Involúcrate
        </button>
        <button 
          onClick={() => scrollToSection("contacto")} 
          className="block w-full text-center mt-2 bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Contacto
        </button>
      </div>
    </header>
  );
};

export default Header;