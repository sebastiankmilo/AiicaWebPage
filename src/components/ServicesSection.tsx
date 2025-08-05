/**
 * Componente ServicesSection - Sección de servicios de AIICA
 * Muestra los diferentes servicios que ofrece la organización
 */

import React from "react";
// Usando lucide desde CDN como en el HTML original
import type { Service } from "../types";

const ServicesSection: React.FC = () => {
  // Datos de los servicios - en una aplicación real podrían venir de una API
  const services: Service[] = [
    {
      id: "investigacion",
      title: "Investigación y Desarrollo",
      description: "Creamos soluciones prácticas y asequibles para los problemas reales del sector agrícola.",
      icon: "flask-conical"
    },
    {
      id: "educacion",
      title: "Educación y Capacitación",
      description: "Formamos a agricultores y jóvenes en tecnologías avanzadas y métodos sostenibles.",
      icon: "graduation-cap"
    },
    {
      id: "asesoria",
      title: "Asesoría y Consultoría",
      description: "Ofrecemos asesoría técnica para el diseño e implementación de soluciones tecnológicas.",
      icon: "lightbulb"
    },
    {
      id: "ecoturismo",
      title: "Ecoturismo Sostenible",
      description: "Promovemos experiencias turísticas responsables que valoran nuestro patrimonio natural.",
      icon: "mountain-snow"
    }
  ];

  /**
   * Renderiza el ícono correspondiente al servicio usando data-lucide
   * @param iconName - Nombre del ícono a renderizar
   * @returns JSX.Element - Elemento i con data-lucide
   */
  const renderIcon = (iconName: string): React.ReactElement => {
    return <i data-lucide={iconName} className="w-10 h-10 text-green-600"></i>;
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            ¿Qué Hacemos?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestra misión se desarrolla a través de diferentes líneas de acción que nos permiten 
            crear un impacto real y sostenible en el sector agrícola colombiano.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Contenedor del ícono */}
              <div className="bg-green-100 p-6 rounded-full mb-4 group-hover:bg-green-200 
                              transition-colors duration-300 transform group-hover:scale-110">
                {renderIcon(service.icon)}
              </div>
              
              {/* Título del servicio */}
              <h3 className="font-bold text-xl mb-2 text-green-800 group-hover:text-green-900 
                             transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Descripción del servicio */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 
                            transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección adicional de llamada a la acción */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              ¿Necesitas alguno de nuestros servicios?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estamos aquí para ayudarte a implementar soluciones tecnológicas sostenibles 
              en tu proyecto agrícola. Contáctanos para una consulta personalizada.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg 
                         hover:bg-green-700 transition duration-300 shadow-lg 
                         transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;