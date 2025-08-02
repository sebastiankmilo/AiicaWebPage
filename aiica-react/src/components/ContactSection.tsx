/**
 * Componente ContactSection - Sección de contacto
 * Formulario para que los usuarios se pongan en contacto con AIICA
 */

import React, { useState } from "react";
import type { ContactFormData } from "../types";

const ContactSection: React.FC = () => {
  // Estado del formulario
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Estado para el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [_submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
    
    if (!formData.email.trim()) {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
    }
    
    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
    
    if (!formData.subject.trim()) {
      alert("Por favor, ingresa el asunto de tu mensaje.");
      return false;
    }
    
    if (!formData.message.trim()) {
      alert("Por favor, escribe tu mensaje.");
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

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simular envío del formulario (en una aplicación real, aquí haríamos la llamada a la API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log para desarrollo (en producción esto se eliminaría)
      console.log("Datos del formulario:", formData);
      
      // Simular éxito
      setSubmitStatus("success");
      
      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Mostrar mensaje de éxito
      alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.");

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
      alert("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Hablemos</h2>
          <p className="text-lg text-gray-600 mt-4">
            ¿Tienes una idea, una pregunta o quieres colaborar? Nos encantaría saber de ti.
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Primera fila: Nombre y Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Campo Nombre */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-green-500 
                             transition-colors duration-200"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-green-500 
                             transition-colors duration-200"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            {/* Campo Asunto */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-green-500 
                           transition-colors duration-200"
                placeholder="Ej: Colaboración, Donación, Consulta, etc."
                required
              />
            </div>

            {/* Campo Mensaje */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-green-500 
                           transition-colors duration-200 resize-vertical"
                placeholder="Escribe tu mensaje aquí. Compártenos tu idea, pregunta o propuesta de colaboración..."
                required
              />
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white font-bold py-3 px-10 rounded-lg 
                           hover:bg-green-700 transition duration-300 shadow-lg 
                           transform hover:scale-105 disabled:opacity-50 
                           disabled:cursor-not-allowed disabled:transform-none
                           focus:outline-none focus:ring-4 focus:ring-green-300
                           flex items-center justify-center gap-2 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </button>
            </div>
          </form>

          {/* Información de contacto adicional */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Información de contacto directo */}
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Contacto Directo
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>📧 info@aiica.org</p>
                  <p>📱 +57 300 123 4567</p>
                  <p>📍 Huila, Colombia</p>
                </div>
              </div>

              {/* Redes sociales */}
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Síguenos
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 
                               hover:bg-green-200 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 
                               hover:bg-green-200 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.988 11.987c6.62 0 11.987-5.366 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.148-1.188c-.699-.699-1.188-1.851-1.188-3.148c0-1.297.49-2.448 1.188-3.148c.7-.699 1.851-1.188 3.148-1.188c1.297 0 2.448.49 3.148 1.188c.699.7 1.188 1.851 1.188 3.148c0 1.297-.49 2.448-1.188 3.148c-.7.699-1.851 1.188-3.148 1.188z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 
                               hover:bg-green-200 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;