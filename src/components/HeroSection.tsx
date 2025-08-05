/**
 * Componente HeroSection - Sección principal de bienvenida
 * Muestra el mensaje principal de AIICA con imagen de fondo y call-to-action
 */

import React from "react";

const HeroSection: React.FC = () => {
  /**
   * Maneja el scroll suave a la sección de proyectos
   */
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative h-screen flex items-center justify-center text-white text-center"
      style={{
        background: "url('https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1887&auto=format&fit=crop') no-repeat center center/cover"
      }}
    >
      {/* Overlay con gradiente para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Contenido principal */}
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        {/* Título principal */}
        <h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Innovación que Cosecha Futuro en el Campo Colombiano
        </h1>
        
        {/* Subtítulo descriptivo */}
        <p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
        >
          Somos AIICA, una asociación sin fines de lucro que impulsa la agricultura sostenible 
          a través de tecnología de bajo costo y alto impacto.
        </p>
        
        {/* Botón de call-to-action */}
        <button 
          onClick={scrollToProjects}
          className="bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-lg text-lg 
                     hover:bg-yellow-500 transition duration-300 transform hover:scale-105 shadow-xl
                     focus:outline-none focus:ring-4 focus:ring-yellow-300"
          aria-label="Ir a la sección de proyectos"
        >
          Descubre Nuestros Proyectos
        </button>
      </div>
    </section>
  );
};

export default HeroSection;