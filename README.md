# Proyecto Template

Este proyecto es una plantilla fundamental de front-end, construida con Next.js 15 y React 19, diseñada para una implementación rápida y reutilización en diversas aplicaciones web. Viene preconfigurado con una selección de librerías esenciales y una estructura de directorio bien organizada para iniciar tu desarrollo.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Primeros Pasos](#primeros-pasos)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
  - [Configuración](#configuración)
  - [Ejecutar el Servidor de Desarrollo](#ejecutar-el-servidor-de-desarrollo)
  - [Construir para Producción](#construir-para-producción)
- [Puntos Clave de Personalización](#puntos-clave-de-personalización)
- [Explicación de Librerías](#explicación-de-librerías)
- [Mantenimiento](#mantenimiento)

## Características

- **Next.js 15 con React 19**: Aprovechando las últimas versiones estables para un rendimiento y experiencia de desarrollo mejorados.
- **Integración de Material-UI (MUI)**: Una librería de interfaz de usuario completa para diseños estéticos y responsivos.
- **Gestión de Formularios**: Utilidades para la validación de formularios.
- **Enrutamiento**: Configurado tanto para rutas autenticadas como para rutas de tablero (dashboard).
- **Componentes Reutilizables**: Una colección de componentes de interfaz de usuario comunes listos para usar.
- **Sistema de Temas**: Tema de Material-UI personalizable.

## Tecnologías Utilizadas

- **Next.js 15:** Framework de React para construir aplicaciones listas para producción.
- **React 19:** Librería de JavaScript para construir interfaces de usuario.
- **TypeScript 5:** Lenguaje de programación fuertemente tipado basado en JavaScript.
- **Material-UI 7:** Popular framework de UI para React.
- **Emotion:** Librería CSS-in-JS de alto rendimiento y lista para producción.
- **Axios:** Cliente HTTP basado en promesas para el navegador y Node.js.
- **SWR:** Hooks de React para la obtención de datos.
- **SweetAlert2:** Un reemplazo hermoso, responsivo, personalizable y accesible (WAI-ARIA) para las cajas de diálogo de JavaScript.
- **React Toastify:** Librería de notificaciones de React.
- **FilePond:** Una librería flexible y de alto rendimiento para la carga de archivos.

## Estructura del Proyecto

El proyecto sigue una estructura modular y organizada para promover la mantenibilidad y escalabilidad:

````text
C:/laragon/www/template-front
├── app/                  # Next.js App Router: grupos (auth) y (dashboard) para el enrutamiento
│   ├── (auth)/           # Páginas relacionadas con la autenticación (ej. login)
│   ├── (dashboard)/      # Páginas relacionadas con el tablero (ej. home)
│   ├── layout.tsx        # Diseño raíz para la aplicación
│   ├── not-found.tsx     # Página 404 personalizada
│   └── page.tsx          # Página raíz de la aplicación
├── components/           # Componentes de UI reutilizables
│   ├── dataTable/        # Componente de tabla de datos con Material-UI Data Grid
│   ├── fileInput/        # Componente de entrada de archivo
│   ├── fileUpload/       # Componente de carga de archivos con FilePond
│   ├── logo/             # Componente de logo
│   ├── modal/            # Componente de modal genérico
│   └── spinner/          # Componente de spinner de carga y contexto
├── hooks/                # Hooks de React personalizados para lógica reutilizable
│   ├── useEfirma/        # Hook para integración de eFirma
│   ├── useToast/         # Hook para mostrar notificaciones toast
│   └── useScrollToTop.tsx# Hook para desplazarse al principio en el cambio de ruta
├── layout/               # Componentes de diseño de la aplicación
│   ├── auth/             # Diseños específicos para páginas de autenticación
│   ├── core/             # Componentes de diseño centrales (encabezado, principal, sección)
│   └── dashboard/        # Diseños específicos para páginas de tablero
├── library/              # Funciones de utilidad y lógica compartida
│   └── validations/      # Métodos de validación de formularios
├── page/                 # Componentes específicos de página (ej. formulario de login, tablero de inicio)
│   ├── auth/
│   └── dashboard/
├── styles/               # Estilos globales y CSS
│   └── global.css
├── theme/                # Configuración y proveedores de temas de Material-UI
│   ├── base/
│   ├── contexts/
│   ├── core/
│   ├── hooks/
│   ├── providers/
│   └── utils/
├── types/                # Definiciones de tipos de TypeScript
├── .gitignore            # Archivo .gitignore
├── .env.local.example    # Ejemplo de archivo de variables de entorno
├── eslint.config.mjs     # Configuración de ESLint
├── next.config.ts        # Configuración de Next.js
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # README del proyecto

## Primeros Pasos

Sigue estas instrucciones para obtener una copia del proyecto en funcionamiento en tu máquina local para fines de desarrollo y prueba.

### Requisitos Previos

* Node.js (v18.x o superior)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone tu-url-del-repositorio template-front
    cd template-front
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

### Variables de Entorno

Este proyecto utiliza variables de entorno. Necesitas crear un archivo `.env.local` basado en el ejemplo proporcionado.

1.  **Copia el archivo de entorno de ejemplo:**
    ```bash
    cp .env.local.example .env.local
    ```

2.  **Edita `.env.local`:**
    Rellena el archivo `.env.local` con tus variables específicas del entorno.

### Configuración

#### Configuración de Next.js (`next.config.ts`)

Abre `next.config.ts` y actualiza la propiedad `basePath` para que coincida con la ruta URL donde se desplegará tu proyecto.

```ts
const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/tu-url-del-proyecto', // <--- CAMBIA ESTO POR LA RUTA URL DE TU PROYECTO
    images: {
        path: '/img',
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'satq.qroo.gob.mx',
                port: '',
                pathname: '/logos/**',
            },
        ],
    },
};
````

#### Metadatos del Layout Raíz (`app/layout.tsx`)

```html
<head>
  <title>Servicio de Administración Tributaria de Quintana Roo</title>
  <meta name="description" content="[TU DESCRIPCIÓN DEL PROYECTO AQUÍ]" />
  {/* <--- CAMBIA ESTO POR LA DESCRIPCIÓN DE TU PROYECTO */}
</head>
```

#### Título de la Página del Layout de Autenticación (`layout/auth/authLayout.tsx`)

```js
useEffect(() => {
  setNamePageCurrent("TU NOMBRE DEL PROYECTO AQUÍ"); // <--- CAMBIA ESTO POR EL NOMBRE DE TU PROYECTO
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
```

### Ejecutar el Servidor de Desarrollo

Para ejecutar el proyecto en modo de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:3000` (o el puerto especificado en tu terminal) en tu navegador para ver el resultado.

### Construir para Producción

Para construir el proyecto para producción:

```bash
npm run build
```

Esto creará un directorio out con los archivos HTML, CSS y JavaScript estáticos, listos para su implementación.

## Puntos Clave de Personalización

- `app/`: Define rutas y diseños anidados.
- `components/`: Componentes UI reutilizables.
- `theme/`: Ajusta el tema de Material-UI (colores, tipografía, espaciado, etc.) para que coincida con las directrices de tu marca. Específicamente, modifica `theme/core/components.tsx` para ajustar los estilos de los componentes y `theme/base/themeConfig/themeConfig.tsx` para las configuraciones globales del tema. La función `getMainColor(theme)` en `theme/core/components.tsx` se utiliza para aplicar dinámicamente el color principal definido en tu tema a varios componentes de Material-UI.
- `library/validations/methods.tsx`: Métodos de validación de formularios.
- `public/`: Activos estáticos.
- `.env.local`: Archivo de configuración de variables de entorno específicas para el entorno local en proyectos Next.js.  
  Aquí puedes definir variables privadas o específicas de tu máquina que no deben compartirse ni subirse al repositorio, como claves API, URLs de desarrollo, o configuraciones sensibles.  
  Next.js carga automáticamente este archivo durante el desarrollo local y tiene mayor prioridad que otros archivos `.env`.
