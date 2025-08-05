/**
 * Configuración de la aplicación AIICA
 * Centraliza todas las configuraciones y API keys
 */

import type { AppConfig } from "../types";

// Configuración de desarrollo - IMPORTANTE: Cambiar para producción
const config: AppConfig = {
  // API Key de Gemini - Reemplaza con tu propia API key
  geminiApiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
  
  // Site Key de reCAPTCHA - Reemplaza con tu propia site key
  // Usando la site key de prueba de Google para desarrollo
  recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
};

/**
 * Obtiene la API key de Gemini configurada
 * @returns string - API key de Gemini o cadena vacía si no está configurada
 */
export const getGeminiApiKey = (): string => {
  return config.geminiApiKey || "";
};

/**
 * Obtiene la URL completa de la API de Gemini
 * @returns string | null - URL de la API o null si no hay API key
 */
export const getGeminiApiUrl = (): string | null => {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    console.warn("⚠️ API Key de Gemini no configurada");
    return null;
  }
  
  return `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
};

/**
 * Obtiene la site key de reCAPTCHA configurada
 * @returns string - Site key de reCAPTCHA
 */
export const getRecaptchaSiteKey = (): string => {
  return config.recaptchaSiteKey || "";
};

/**
 * Verifica si las API keys están configuradas correctamente
 * @returns boolean - true si las configuraciones básicas están listas
 */
export const isConfigurationValid = (): boolean => {
  const geminiKey = getGeminiApiKey();
  const recaptchaKey = getRecaptchaSiteKey();
  
  if (!geminiKey) {
    console.warn("⚠️ API Key de Gemini no configurada. El asesor IA no funcionará.");
    console.log("💡 Para configurar: agrega REACT_APP_GEMINI_API_KEY a tu archivo .env");
  }
  
  if (!recaptchaKey || recaptchaKey === "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI") {
    console.log("ℹ️ Usando reCAPTCHA de prueba. Para producción, configura REACT_APP_RECAPTCHA_SITE_KEY.");
  }
  
  return !!geminiKey && !!recaptchaKey;
};

export default config;