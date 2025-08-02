/**
 * Hook personalizado para manejar la lógica del asesor IA
 * Gestiona el envío de consultas a la API de Gemini y el estado del modal
 */

import { useState } from "react";
import type { AIAdvisorFormData, GeminiResponse, ChatMessage } from "../types";
import { getGeminiApiUrl } from "../config";

export const useAIAdvisor = () => {
  // Estados para manejar el modal y la respuesta
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string>("");

  /**
   * Convierte texto Markdown a HTML usando una implementación simple
   * @param markdown - Texto en formato Markdown
   * @returns string - HTML convertido
   */
  const markdownToHtml = (markdown: string): string => {
    return markdown
      // Títulos
      .replace(/### (.*$)/gim, "<h3 class=\"font-bold text-lg mt-4 mb-2\">$1</h3>")
      .replace(/## (.*$)/gim, "<h2 class=\"font-bold text-xl mt-4 mb-2\">$1</h2>")
      .replace(/# (.*$)/gim, "<h1 class=\"font-bold text-2xl mt-4 mb-2\">$1</h1>")
      // Texto en negrita
      .replace(/\*\*(.*)\*\*/gim, "<strong class=\"font-bold\">$1</strong>")
      // Listas
      .replace(/^\s*\* (.*$)/gim, "<li class=\"mb-1\">$1</li>")
      .replace(/(<li.*<\/li>)/gim, "<ul class=\"list-disc pl-6 mb-4\">$1</ul>")
      // Párrafos
      .replace(/\n\n/gim, "</p><p class=\"mb-4\">")
      // Líneas horizontales
      .replace(/---/gim, "<hr class=\"my-4 border-gray-300\">")
      // Código inline
      .replace(/`([^`]*)`/gim, "<code class=\"bg-gray-200 px-2 py-1 rounded text-sm\">$1</code>");
  };

  /**
   * Abre el modal de respuesta de IA
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Cierra el modal y limpia el estado
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setResponse("");
    setError("");
    // Reset reCAPTCHA si está disponible
    if (typeof (window as any).grecaptcha !== "undefined") {
      (window as any).grecaptcha.reset();
    }
  };

  /**
   * Envía la consulta al asesor IA utilizando la API de Gemini
   * @param formData - Datos del formulario del usuario
   * @param recaptchaToken - Token de verificación reCAPTCHA
   */
  const submitQuery = async (formData: AIAdvisorFormData, _recaptchaToken: string) => {
    setIsLoading(true);
    setError("");
    setResponse("");
    
    try {
      // Verificar configuración de API
      const apiUrl = getGeminiApiUrl();
      if (!apiUrl) {
        throw new Error("API Key de Gemini no configurada. Por favor, configura tu API key en las variables de entorno.");
      }

      // Construir el prompt especializado para agricultura colombiana
      const prompt = `Eres un experto agrónomo colombiano con profundo conocimiento de las condiciones y cultivos del departamento del Huila. Un agricultor te hace la siguiente consulta: "${formData.prompt}". 
      
      Proporciona una respuesta estructurada y fácil de entender usando Markdown. Sigue este formato:
      ### Análisis del Problema:
      Describe brevemente las posibles causas del problema mencionado.
      
      ### Recomendaciones Prácticas:
      - **Acción 1:** Detalle claro.
      - **Acción 2:** Detalle claro.
      - **Acción 3:** Detalle claro.
      
      ### Prevención a Futuro:
      Da un consejo para evitar que el problema vuelva a ocurrir.
      
      ---
      *Recuerda que esta es una recomendación generada por IA. Para un diagnóstico preciso, consulta a un ingeniero agrónomo.*
      
      Usa un lenguaje amigable y directo.`;

      // Preparar el historial del chat
      const chatHistory: ChatMessage[] = [
        { role: "user", parts: [{ text: prompt }] }
      ];

      const payload = { contents: chatHistory };

      // Llamada a la API de Gemini
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }

      const result: GeminiResponse = await response.json();

      // Extraer la respuesta generada
      let generatedText = "No se pudo obtener una respuesta. Inténtalo de nuevo.";
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        generatedText = result.candidates[0].content.parts[0].text;
      }

      // Convertir Markdown a HTML y establecer la respuesta
      const htmlResponse = markdownToHtml(generatedText);
      setResponse(htmlResponse);

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = error instanceof Error ? error.message : "Error desconocido";
      setError(`Hubo un error al procesar tu solicitud: ${errorMessage}. Por favor, inténtalo más tarde.`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isModalOpen,
    isLoading,
    response,
    error,
    openModal,
    closeModal,
    submitQuery
  };
};