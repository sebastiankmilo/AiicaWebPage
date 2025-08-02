/**
 * Componente AIAdvisorSection - Sección del asesor agrícola inteligente
 * Permite a los usuarios hacer consultas agrícolas a través de IA (Gemini)
 */

import React, { useState, useEffect } from "react";
import type { AIAdvisorFormData } from "../types";
import { useAIAdvisor } from "../hooks/useAIAdvisor";
import { getRecaptchaSiteKey } from "../config";

// Declaración global para reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      render: (container: string, options: any) => void;
      getResponse: () => string;
      reset: () => void;
    };
  }
}

const AIAdvisorSection: React.FC = () => {
  // Estados del formulario
  const [formData, setFormData] = useState<AIAdvisorFormData>({
    name: "",
    phone: "",
    prompt: ""
  });

  // Hook personalizado para la lógica de IA
  const { isModalOpen, isLoading, response, error, openModal, closeModal, submitQuery } = useAIAdvisor();

  // Estado para controlar reCAPTCHA
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  /**
   * Efecto para inicializar reCAPTCHA cuando el componente se monta
   */
  useEffect(() => {
    // Cargar script de reCAPTCHA si no está presente
    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => initializeRecaptcha();
      document.head.appendChild(script);
    } else {
      // Si ya está cargado, inicializar directamente
      initializeRecaptcha();
    }

    return () => {
      // Limpiar reCAPTCHA al desmontar
      if (window.grecaptcha) {
        try {
          window.grecaptcha.reset();
        } catch (error) {
          console.log("Error al limpiar reCAPTCHA:", error);
        }
      }
    };
  }, []);

  /**
   * Inicializa el widget de reCAPTCHA
   */
  const initializeRecaptcha = () => {
    const siteKey = getRecaptchaSiteKey();
    
    if (window.grecaptcha && siteKey) {
      try {
        // Esperar un poco para asegurar que el DOM esté listo
        setTimeout(() => {
          const container = document.getElementById("recaptcha-container");
          if (container && !container.hasChildNodes()) {
            window.grecaptcha.render("recaptcha-container", {
              sitekey: siteKey
            });
            setIsRecaptchaLoaded(true);
          }
        }, 100);
      } catch (error) {
        console.log("Error al inicializar reCAPTCHA:", error);
      }
    }
  };

  /**
   * Maneja los cambios en los campos del formulario
   * @param e - Evento de cambio del input
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Valida los campos del formulario
   * @returns boolean - true si el formulario es válido
   */
  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      alert("Por favor, ingresa tu nombre completo.");
      return false;
    }
    
    if (!formData.phone.trim()) {
      alert("Por favor, ingresa tu número de teléfono.");
      return false;
    }
    
    if (!formData.prompt.trim()) {
      alert("Por favor, describe tu consulta agrícola.");
      return false;
    }

    return true;
  };

  /**
   * Maneja el envío del formulario
   * @param e - Evento de envío del formulario
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos del formulario
    if (!validateForm()) {
      return;
    }

    // Validar reCAPTCHA
    if (!window.grecaptcha) {
      alert("reCAPTCHA no está disponible. Por favor, recarga la página.");
      return;
    }

    const recaptchaResponse = window.grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      alert('Por favor, completa la verificación "No soy un robot".');
      return;
    }

    // Abrir modal y enviar consulta
    openModal();
    await submitQuery(formData, recaptchaResponse);
  };

  return (
    <>
      {/* Sección principal */}
      <section id="asesor-ia" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:flex items-center gap-12">
            {/* Contenido informativo */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold text-green-800 mb-4">
                Asesor Agrícola Inteligente ✨
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ¿Tienes una pregunta sobre tu cultivo? ¿Enfrentas un problema en tu finca? 
                Describe tu situación y nuestra IA, entrenada para el campo colombiano, 
                te dará una recomendación personalizada.
              </p>
              <p className="text-sm text-gray-500">
                Esta herramienta es una guía y no reemplaza la consulta con un agrónomo profesional.
              </p>
            </div>

            {/* Formulario */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg space-y-4">
                {/* Campo Nombre */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-green-500 
                               transition-colors duration-200"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                {/* Campo Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-green-500 
                               transition-colors duration-200"
                    placeholder="Ej: 300 123 4567"
                    required
                  />
                </div>

                {/* Campo Consulta */}
                <div>
                  <label htmlFor="prompt" className="block text-gray-700 font-medium mb-2">
                    Describe tu consulta:
                  </label>
                  <textarea
                    id="prompt"
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-green-500 
                               transition-colors duration-200 resize-vertical"
                    placeholder="Ej: Mis plantas de café tienen las hojas amarillas y se están cayendo. ¿Qué puede ser?"
                    required
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="text-center">
                  <div id="recaptcha-container" className="inline-block" />
                  {!isRecaptchaLoaded && (
                    <p className="text-sm text-gray-500 mt-2">Cargando verificación...</p>
                  )}
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-lg 
                             hover:bg-yellow-500 transition duration-300 transform hover:scale-105
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                             focus:outline-none focus:ring-4 focus:ring-yellow-300
                             flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-green-900 border-t-transparent" />
                      Procesando...
                    </>
                  ) : (
                    "Obtener Recomendación ✨"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de respuesta */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold text-green-800">
                Recomendación del Asesor IA ✨
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 
                           transition-colors duration-200"
                aria-label="Cerrar modal"
              >
                <i data-lucide="x" className="w-6 h-6"></i>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              {isLoading && (
                <div className="flex justify-center items-center py-10">
                  <div className="animate-spin rounded-full h-10 w-10 border-4 border-green-500 border-t-transparent" />
                </div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  <p>{error}</p>
                </div>
              )}

              {response && (
                <div 
                  className="prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{ __html: response }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAdvisorSection;