# Landing Page Project Structure

```
landing-page-project/
├── index.html                 # Página principal
├── README.md                  # Documentación del proyecto
├── package.json              # Dependencias y scripts (si usas npm)
├── .gitignore                # Archivos a ignorar en git
│
├── assets/                   # Recursos estáticos
│   ├── images/              # Imágenes
│   │   ├── logo/           # Logos de la empresa
│   │   ├── hero/           # Imágenes principales/banner
│   │   ├── gallery/        # Galería de imágenes
│   │   ├── icons/          # Iconos
│   │   └── backgrounds/    # Imágenes de fondo
│   │
│   ├── videos/             # Videos (si los tienes)
│   ├── fonts/              # Fuentes personalizadas
│   └── documents/          # PDFs y documentos
│
├── css/                     # Estilos CSS
│   ├── main.css            # Estilos principales
│   ├── reset.css           # Reset de estilos del navegador
│   ├── variables.css       # Variables CSS (colores, tamaños)
│   ├── components/         # Estilos por componentes
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── responsive.css      # Estilos responsive/móvil
│
├── js/                     # JavaScript
│   ├── main.js            # JavaScript principal
│   ├── components/        # Scripts por componentes
│   │   ├── navigation.js
│   │   ├── slider.js
│   │   ├── forms.js
│   │   └── animations.js
│   └── vendors/           # Librerías externas
│
├── pages/                  # Páginas adicionales (opcional)
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   └── privacy.html
│
└── docs/                   # Documentación del proyecto
    ├── design/            # Mockups y diseños
    ├── content/           # Textos y contenido
    └── requirements.md    # Requerimientos del proyecto 