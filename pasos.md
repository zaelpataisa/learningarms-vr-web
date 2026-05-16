# LearnArms VR - Website

## 1. Página

**Comandos:**

```bash
pnpm create astro@latest learnarms-vr-web
pnpm astro add tailwind
pnpm add astro-icon

# 1. Crear el proyecto
pnpm create astro@latest learnarms-vr-web

# 2. Añadir Tailwind CSS
pnpm astro add tailwind

# 3. Añadir el generador de Sitemap para SEO
pnpm add @astrojs/sitemap

# 4. Añadir la colección de íconos (como dependencia de desarrollo)
pnpm add -D @iconify-json/grommet-icons
```

**Comandos de uso PNPM:**

```bash
# Para levantar el servidor local (npm run dev)
pnpm dev

# Para compilar la página a producción (npm run build)
pnpm build

# Para probar la versión final (después de compilar)
pnpm preview
```

**Creación de la APP.**

1. Configurar Astro.config.mjs
2. Componentes:
  2.1. Layout
  2.2. Videoplayer
3. Secciones
  3.1. Header
  3.2. Sección Prinicpal
  3.3. Info y Requisitos técnicos
  3.4. Demo técnica (Video) (Vimeo. Si no, youtube)
  3.5. Iniciar / Descargar
  3.6. Footer

## 2. Revisión de la aplicación

1. Revisar mi aplicación en Unity y verificar su estabilidad
2. Compilar a APK

## 3. Repositorio Github

1. Crear el repositorio (Página web y .apk)
2. Definir licencia
  2.1. La página si puede ser MIT
  2.2. README.md que indique que el código de la web es OS pero el .apk es Freeware restringido a uso eduativo/no comercial.
3. Subir la .apk como release

## 4. Subir a tiendas VR

1. Sidequest
2. Itch,.io

## 5. Despliegue de la página

1. Subir página a Github
1. Desplegar en Vercel
