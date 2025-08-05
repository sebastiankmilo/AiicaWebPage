/**
 * Componente ProjectsSection - Sección de proyectos de AIICA
 * Muestra los proyectos tecnológicos en tarjetas interactivas
 */
import hidrogeneradorImg from "../assets/hidrogenerador.webp";
import camaraMultiespectralImg from "../assets/camaraMultiespectral.png";
import brazoRobotImg from "../assets/brazoRobot.jpg";
import composteraImg from "../assets/compostera.webp";
import microInvernaderoImg from "../assets/microInvernadero.webp";
import monitoreoCultivosImg from "../assets/monitoreoCultivos.avif";

import React from "react";
// Usando lucide desde CDN como en el HTML original
import type { Project } from "../types";

const ProjectsSection: React.FC = () => {
  // Datos de los proyectos - en una aplicación real podrían venir de una API
  const projects: Project[] = [
    {
      id: "hidrogenerador",
      title: "Hidrogenerador Eléctrico",
      description: "Generamos energía limpia y de bajo costo aprovechando el flujo de agua en zonas rurales, llevando luz a hogares sin acceso a la red eléctrica convencional.",
      imageUrl: hidrogeneradorImg,
      icon: "zap"
    },
    {
      id: "camara-multiespectral",
      title: "Cámara Multiespectral",
      description: "Una herramienta de agricultura de precisión para analizar la salud de los cultivos, permitiendo tomar decisiones informadas y optimizar recursos.",
      imageUrl: camaraMultiespectralImg,
      icon: "camera"
    },
    {
      id: "brazo-robotico",
      title: "Brazo Robótico SO-101",
      description: "Prototipo robótico de bajo costo, fabricado con impresión 3D, para automatizar tareas repetitivas como siembra, recolección y clasificación.",
      imageUrl: brazoRobotImg,
      icon: "bot"
    },
    {
      id: "compostera",
      title: "Compostera de Lombrices",
      description: "Producimos humus líquido y sólido a partir de residuos orgánicos, mejorando la fertilidad del suelo de manera sostenible y natural.",
      imageUrl: composteraImg,
      icon: "recycle"
    },
    {
      id: "microinvernadero",
      title: "Microinvernadero",
      description: "Sistema compacto para controlar temperatura, humedad y luz, facilitando la germinación y el desarrollo inicial de las plantas.",
      imageUrl: microInvernaderoImg,
      icon: "sprout"
    },
    {
      id: "monitoreo-cultivos",
      title: "Monitoreo de Cultivos",
      description: "Plataforma tecnológica para recopilar datos en tiempo real sobre variables críticas en cultivos como el cacao, incluyendo la detección de plagas.",
      imageUrl: monitoreoCultivosImg,
      icon: "bar-chart-2"
    }
  ];

  /**
   * Renderiza el ícono correspondiente al proyecto usando data-lucide
   * @param iconName - Nombre del ícono a renderizar
   * @returns JSX.Element - Elemento i con data-lucide
   */
  const renderIcon = (iconName: string): React.ReactElement => {
    return <i data-lucide={iconName} className="w-5 h-5 mr-2"></i>;
  };

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Proyectos que Transforman Realidades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desarrollamos soluciones tecnológicas innovadoras, accesibles y sostenibles 
            para los desafíos del sector agrícola en Colombia.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-transform duration-300"
            >
              <img 
                src={project.imageUrl} 
                alt={`Imagen de ${project.title}`}
                className="w-full h-56 object-cover"
              />
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                {/* Título con ícono */}
                <div className="flex items-center text-green-600 mb-2">
                  {renderIcon(project.icon)}
                  <h3 className="font-bold text-xl text-green-800">
                    {project.title}
                  </h3>
                </div>
                
                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;