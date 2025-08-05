/**
 * Componente Footer - Pie de página de AIICA
 * Incluye información de la empresa, navegación y redes sociales
 */

import React from "react";
// Usando lucide desde CDN como en el HTML original
import logo from "../assets/AIICA-LOGOColor.png";

const Footer: React.FC = () => {
  /**
   * Maneja el scroll suave a una sección específica
   * @param sectionId - ID de la sección a la que hacer scroll
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Obtiene el año actual para el copyright
   */
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna de información de la empresa */}
          <div className="md:col-span-2">
            {/* Logo y nombre */}
            <div className="flex items-center mb-4">
              <img 
                src={logo}
                alt="Logo de AIICA" 
                className="h-12 w-12 rounded-full mr-3"
              />
              <h3 className="text-2xl font-bold">AIICA</h3>
            </div>
            
            {/* Descripción */}
            <p className="text-green-200 leading-relaxed mb-4">
              Asociación de Innovación e Investigación Agrícola. Transformando el agro 
              colombiano con tecnología y sostenibilidad.
            </p>
            
            {/* Información adicional */}
            <div className="text-green-300 text-sm space-y-1">
              <p>📍 Huila, Colombia</p>
              <p>📧 info@aiica.org</p>
              <p>📱 +57 300 123 4567</p>
            </div>
          </div>

          {/* Columna de navegación */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("proyectos")}
                  className="text-green-200 hover:text-yellow-400 transition-colors duration-200 text-left"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("nosotros")}
                  className="text-green-200 hover:text-yellow-400 transition-colors duration-200 text-left"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="text-green-200 hover:text-yellow-400 transition-colors duration-200 text-left"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("involucrate")}
                  className="text-green-200 hover:text-yellow-400 transition-colors duration-200 text-left"
                >
                  Involúcrate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contacto")}
                  className="text-green-200 hover:text-yellow-400 transition-colors duration-200 text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Síguenos</h4>
            
            {/* Enlaces de redes sociales */}
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="text-green-200 hover:text-yellow-400 transition
                           transform hover:scale-110"
                aria-label="Síguenos en Twitter"
              >
                <i data-lucide="twitter" className="w-6 h-6"></i>
              </a>
              <a 
                href="#" 
                className="text-green-200 hover:text-yellow-400 transition
                           transform hover:scale-110"
                aria-label="Síguenos en Facebook"
              >
                <i data-lucide="facebook" className="w-6 h-6"></i>
              </a>
              <a 
                href="#" 
                className="text-green-200 hover:text-yellow-400 transition
                           transform hover:scale-110"
                aria-label="Síguenos en LinkedIn"
              >
                <i data-lucide="linkedin" className="w-6 h-6"></i>
              </a>
              <a 
                href="#" 
                className="text-green-200 hover:text-yellow-400 transition
                           transform hover:scale-110"
                aria-label="Síguenos en Instagram"
              >
                <i data-lucide="instagram" className="w-6 h-6"></i>
              </a>
            </div>

            {/* Newsletter subscription */}
            <div>
              <h5 className="font-semibold mb-2 text-green-100">Mantente informado</h5>
              <p className="text-green-300 text-sm mb-3">
                Recibe noticias sobre nuestros proyectos
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-green-800 border border-green-700 rounded-l-lg px-3 py-2 
                             text-white placeholder-green-400 text-sm flex-grow
                             focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  className="bg-yellow-400 text-green-900 px-4 py-2 rounded-r-lg 
                             hover:bg-yellow-500 transition-colors duration-200 text-sm font-medium"
                >
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-12 border-t border-green-700 pt-6">
          {/* Copyright y enlaces legales */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-green-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AIICA. Todos los derechos reservados. 
              Diseñado con pasión para el campo colombiano.
            </p>
            
            {/* Enlaces legales */}
            <div className="flex space-x-4 text-sm">
              <a 
                href="#" 
                className="text-green-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Política de Privacidad
              </a>
              <span className="text-green-600">|</span>
              <a 
                href="#" 
                className="text-green-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Términos de Uso
              </a>
            </div>
          </div>

          {/* Mensaje adicional */}
          <div className="mt-4 text-center">
            <p className="text-green-400 text-xs italic">
              "Cultivando tecnología, cosechando futuro 🌱"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;