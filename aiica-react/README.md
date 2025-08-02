# AIICA - Landing Page React

Landing page de la Asociación de Innovación e Investigación Agrícola (AIICA), desarrollada con React, TypeScript, Tailwind CSS y Vite.

## 🚀 Características

- **Diseño Responsive**: Adaptable a dispositivos móviles y escritorio
- **Asesor IA**: Integración con Google Gemini para consultas agrícolas
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Formularios Interactivos**: Validación y envío de formularios
- **SEO Optimizado**: Estructura semántica y accesible
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Estilos utilitarios y diseño moderno

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción y desarrollo
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Biblioteca de iconos
- **Google Gemini API** - Inteligencia artificial para el asesor
- **Google reCAPTCHA v2** - Protección contra spam

## 📦 Instalación

1. **Clonar el repositorio**
   \`\`\`bash
   git clone <repository-url>
   cd aiica-react
   \`\`\`

2. **Instalar dependencias**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configurar variables de entorno**
   
   Crea un archivo \`.env\` en la raíz del proyecto con el siguiente contenido:
   
   \`\`\`env
   # API Key de Google Gemini para el asesor IA
   # Obtén tu API key en: https://makersuite.google.com/app/apikey
   VITE_GEMINI_API_KEY=tu_api_key_de_gemini_aqui
   
   # Site Key de Google reCAPTCHA v2
   # Obtén tu site key en: https://www.google.com/recaptcha/admin
   # La siguiente es para testing solamente
   VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
   \`\`\`

4. **Ejecutar en modo desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`

## 🔧 Configuración de APIs

### Google Gemini API

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea una nueva API key
3. Agrega la key a tu archivo \`.env\` como \`REACT_APP_GEMINI_API_KEY\`

### Google reCAPTCHA

1. Ve a [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Registra un nuevo sitio con reCAPTCHA v2
3. Agrega la site key a tu archivo \`.env\` como \`REACT_APP_RECAPTCHA_SITE_KEY\`

## 📁 Estructura del Proyecto

\`\`\`
src/
├── components/           # Componentes React
│   ├── Header.tsx       # Navegación principal
│   ├── HeroSection.tsx  # Sección principal
│   ├── ProjectsSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── AIAdvisorSection.tsx
│   ├── CallToActionSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── index.ts         # Exportaciones
├── hooks/               # Hooks personalizados
│   └── useAIAdvisor.ts  # Lógica del asesor IA
├── types/               # Tipos TypeScript
│   └── index.ts
├── config/              # Configuración
│   └── index.ts         # API keys y configuración
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
\`\`\`

## 🎨 Componentes Principales

### Header
- Navegación responsive
- Menú móvil
- Scroll suave entre secciones

### HeroSection
- Imagen de fondo con overlay
- Título principal y call-to-action
- Diseño responsive

### ProjectsSection
- Grid de proyectos tecnológicos
- Tarjetas interactivas con hover effects
- Iconos de Lucide React

### AIAdvisorSection
- Formulario para consultas agrícolas
- Integración con Google Gemini
- Validación con reCAPTCHA
- Modal para mostrar respuestas

### ContactSection
- Formulario de contacto completo
- Validación de campos
- Información de contacto adicional

## 🚀 Scripts Disponibles

- \`npm run dev\` - Ejecuta en modo desarrollo
- \`npm run build\` - Construye para producción
- \`npm run preview\` - Previsualiza la build de producción
- \`npm run lint\` - Ejecuta el linter

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accesibilidad

- Navegación por teclado
- Labels apropiados en formularios
- Contraste de colores optimizado
- Texto alternativo en imágenes
- Estados de focus visibles

## 🔒 Seguridad

- Validación de formularios en el frontend
- Protección reCAPTCHA contra spam
- Sanitización de entrada de datos
- Variables de entorno para API keys

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## 📞 Contacto

AIICA - info@aiica.org
Proyecto: [GitHub Repository]

---

Desarrollado con ❤️ para el campo colombiano 🇨🇴