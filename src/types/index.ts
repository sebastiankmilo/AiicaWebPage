/**
 * Tipos TypeScript para la aplicación AIICA
 * Define las interfaces y tipos utilizados en toda la aplicación
 */

// Tipo para los datos del formulario de asesor IA
export interface AIAdvisorFormData {
  name: string;
  phone: string;
  prompt: string;
}

// Tipo para la respuesta de la API de Gemini
export interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text: string;
      }>;
    };
  }>;
}

// Tipo para el historial del chat
export interface ChatMessage {
  role: "user" | "model";
  parts: Array<{
    text: string;
  }>;
}

// Tipo para los datos del formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Tipo para los proyectos
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

// Tipo para los servicios
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Tipo para la configuración de la aplicación
export interface AppConfig {
  geminiApiKey?: string;
  recaptchaSiteKey?: string;
}