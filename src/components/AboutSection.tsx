/**
 * Componente AboutSection - Sección sobre AIICA
 * Presenta la misión, visión y fundadores de la organización
 */

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contenido textual */}
          <div className="md:w-1/2">
            {/* Título principal */}
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Nuestra Misión: Sembrar Innovación
            </h2>
            
            {/* Descripción principal */}
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              AIICA es una asociación sin ánimo de lucro reconocida bajo la legislación colombiana, 
              comprometida con la investigación, diseño y desarrollo de proyectos tecnológicos para 
              el sector agrícola. Nuestro propósito es fortalecer el campo colombiano, promoviendo 
              la sostenibilidad y el uso de energías limpias con herramientas de bajo costo y alto impacto.
            </p>
            
            {/* Información de los fundadores */}
            <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-r-lg">
              <p className="font-semibold mb-2">Fundadores:</p>
              <p className="leading-relaxed">
                Leyder Baldillo Valdez, Sebastián Camilo Cruz Dussan y Diego Fernando Ortiz, 
                un equipo comprometido con el desarrollo productivo y ambiental de nuestras zonas agrícolas.
              </p>
            </div>
          </div>

          {/* Imagen ilustrativa */}
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591115765322-343d0848a31a?q=80&w=1887&auto=format&fit=crop" 
                alt="Equipo de agricultores trabajando en el campo"
                className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              
              {/* Overlay decorativo */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-50 -z-10" />
            </div>
          </div>
        </div>

        {/* Sección adicional de valores (opcional) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Valor 1 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Sostenibilidad</h3>
            <p className="text-gray-600">
              Desarrollamos tecnologías que respetan el medio ambiente y promueven prácticas sostenibles.
            </p>
          </div>

          {/* Valor 2 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Innovación</h3>
            <p className="text-gray-600">
              Creamos soluciones tecnológicas accesibles que transforman la agricultura tradicional.
            </p>
          </div>

          {/* Valor 3 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Colaboración</h3>
            <p className="text-gray-600">
              Trabajamos junto a las comunidades rurales para crear un impacto duradero y positivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;