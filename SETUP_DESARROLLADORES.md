# 🔧 Guía de Configuración para Desarrolladores

Esta guía contiene instrucciones detalladas para configurar el entorno de desarrollo del proyecto AIICA React.

## 📋 Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **npm**: v8.0.0 o superior  
- **Git**: Para clonar el repositorio

## ⚙️ Configuración Inicial

### 1. Clonar y Configurar el Proyecto

```bash
# Clonar el repositorio
git clone <repository-url>
cd aiica-react

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

### 2. Configuración de Variables de Entorno

El proyecto requiere las siguientes API keys para funcionar completamente:

#### **🤖 Google Gemini API (OBLIGATORIA)**

La API de Gemini es esencial para el funcionamiento del asesor IA.

1. **Obtener API Key:**
   - Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Inicia sesión con tu cuenta de Google
   - Haz clic en "Create API Key"
   - Selecciona un proyecto existente o crea uno nuevo
   - Copia la API key generada

2. **Configurar en .env:**
   ```env
   VITE_GEMINI_API_KEY=tu_api_key_real_aqui
   ```

3. **Verificar funcionamiento:**
   - Ejecuta `npm run dev`
   - Ve a la sección "Asesor IA" 
   - Intenta hacer una consulta de prueba

#### **🛡️ Google reCAPTCHA (RECOMENDADA)**

reCAPTCHA protege los formularios contra spam y bots.

1. **Obtener Site Key:**
   - Ve a [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
   - Haz clic en "+" para crear un nuevo sitio
   - Selecciona "reCAPTCHA v2" > "Casilla de verificación"
   - Agrega tu dominio (para desarrollo: `localhost`)
   - Acepta los términos y envía
   - Copia la "Site Key"

2. **Configurar en .env:**
   ```env
   VITE_RECAPTCHA_SITE_KEY=tu_site_key_real_aqui
   ```

3. **Para desarrollo (temporal):**
   ```env
   # Site key de prueba de Google (solo para testing)
   VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
   ```

## 🚀 Ejecutar el Proyecto

```bash
# Desarrollo con hot reload
npm run dev

# Construcción para producción
npm run build

# Vista previa de la build de producción
npm run preview

# Linting
npm run lint
```

## 🔍 Verificación de Configuración

### ✅ Checklist de Configuración

- [ ] Archivo `.env` creado y configurado
- [ ] API Key de Gemini configurada y válida
- [ ] Site Key de reCAPTCHA configurada
- [ ] Servidor de desarrollo ejecutándose sin errores
- [ ] Asesor IA funcionando correctamente
- [ ] Formularios protegidos con reCAPTCHA

### 🐛 Solución de Problemas Comunes

#### **Error: "API Key de Gemini no configurada"**
```bash
# Verificar que el archivo .env existe
ls -la .env

# Verificar que la variable está definida
cat .env | grep VITE_GEMINI_API_KEY
```

#### **Error de compilación con TypeScript**
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### **reCAPTCHA no se muestra**
- Verifica que la Site Key sea correcta
- Asegúrate de que el dominio esté registrado en Google reCAPTCHA
- Revisa la consola del navegador para errores

## 🏗️ Estructura de Configuración

```
aiica-react/
├── .env                 # Variables de entorno (NO subir al repo)
├── .env.example         # Plantilla de variables de entorno
├── src/
│   ├── config/
│   │   └── index.ts     # Configuración centralizada
│   ├── hooks/
│   │   └── useAIAdvisor.ts  # Lógica del asesor IA
│   └── types/
│       └── index.ts     # Tipos TypeScript
└── SETUP_DESARROLLADORES.md  # Esta guía
```

## 🔒 Seguridad en Desarrollo

### **🚨 IMPORTANTES REGLAS DE SEGURIDAD:**

1. **NUNCA subas el archivo `.env` al repositorio**
2. **NUNCA hardcodees API keys en el código**
3. **Usa variables `VITE_` solo para datos que pueden ser públicos**
4. **Revisa los commits antes de hacer push**

### **Verificar que .env está en .gitignore:**
```bash
# Verificar que .env está ignorado
git status --ignored | grep .env
```

## 🌐 Despliegue en Producción

### Variables de Entorno en Diferentes Plataformas:

#### **Vercel:**
```bash
# Configurar variables en vercel.com
vercel env add VITE_GEMINI_API_KEY
vercel env add VITE_RECAPTCHA_SITE_KEY
```

#### **Netlify:**
```bash
# En Site settings > Build & deploy > Environment variables
VITE_GEMINI_API_KEY=tu_api_key
VITE_RECAPTCHA_SITE_KEY=tu_site_key
```

#### **Heroku:**
```bash
heroku config:set VITE_GEMINI_API_KEY=tu_api_key
heroku config:set VITE_RECAPTCHA_SITE_KEY=tu_site_key
```

## 📞 Soporte

Si encuentras problemas durante la configuración:

1. **Revisa la consola del navegador** para errores específicos
2. **Verifica las variables de entorno** con `console.log` temporal
3. **Consulta la documentación oficial** de las APIs utilizadas
4. **Contacta al equipo de desarrollo** si el problema persiste

---

**⚠️ Nota:** Esta documentación es solo para desarrolladores y no debe incluirse en documentación pública.