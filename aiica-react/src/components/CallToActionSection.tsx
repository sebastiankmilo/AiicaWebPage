/**
 * Componente CallToActionSection - Sección de llamada a la acción
 * Invita a los usuarios a participar y apoyar los proyectos de AIICA
 */

import React from "react";

const CallToActionSection: React.FC = () => {
  /**
   * Maneja el scroll suave a la sección de contacto
   */
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="involucrate" className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Encabezado principal */}
        <h2 className="text-4xl font-bold mb-4">
          Sé Parte del Cambio
        </h2>
        
        <p className="text-lg text-green-200 mb-8 max-w-3xl mx-auto">
          Nuestros proyectos son posibles gracias al apoyo de personas y organizaciones 
          que creen en un futuro sostenible para el campo. Tu contribución es fundamental.
        </p>

        {/* Contenedor de opciones de participación */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Opción 1: Apoyar un proyecto */}
          <div className="bg-white/10 p-8 rounded-xl md:w-1/3 text-left backdrop-blur-sm 
                          hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              Apoya un Proyecto
            </h3>
            <p className="mb-4 leading-relaxed">
              Con una inversión desde <strong className="text-yellow-300">$463.800 COP</strong>, 
              podemos construir un Hidrogenerador Eléctrico y llevar energía a una familia rural. 
              ¡Cada aporte cuenta!
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-lg 
                         hover:bg-yellow-500 transition duration-300 transform hover:scale-105
                         shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Donar Ahora
            </button>
          </div>

          {/* Opción 2: Convertirse en aliado */}
          <div className="bg-white/10 p-8 rounded-xl md:w-1/3 text-left backdrop-blur-sm 
                          hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              Conviértete en Aliado
            </h3>
            <p className="mb-4 leading-relaxed">
              Buscamos alianzas con entidades públicas y privadas para desarrollar e implementar 
              proyectos de alto impacto. ¡Colaboremos juntos!
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg 
                         hover:bg-white transition duration-300 transform hover:scale-105
                         shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Contáctanos
            </button>
          </div>
        </div>

        {/* Sección adicional de impacto */}
        <div className="mt-16">
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
              Nuestro Impacto en Números
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Estadística 1 */}
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">6+</div>
                <p className="text-green-200">Proyectos Activos</p>
              </div>
              
              {/* Estadística 2 */}
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
                <p className="text-green-200">Familias Beneficiadas</p>
              </div>
              
              {/* Estadística 3 */}
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">3</div>
                <p className="text-green-200">Departamentos de Colombia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de motivación final */}
        <div className="mt-12">
          <p className="text-xl text-green-100 italic">
            "Juntos podemos transformar el campo colombiano, una innovación a la vez."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;