# Julieta Almada

Sitio profesional de Julieta Almada, psicopedagoga y docente. Presenta sus áreas de trabajo,
información profesional y medios de contacto.

Producción: [julietaalmada.ar](https://julietaalmada.ar)

## Tecnologías

- Astro 7 con salida estática
- Tailwind CSS 4
- TypeScript
- Sharp para optimización de imágenes
- Leaflet y OpenStreetMap para el área de atención
- GitHub Pages para hosting

## Requisitos

- Node.js 22 o superior
- pnpm

## Desarrollo local

```bash
pnpm install
pnpm dev
```

El servidor local queda disponible en `http://localhost:4321`.

## Comandos

| Comando             | Descripción                                                     |
| ------------------- | --------------------------------------------------------------- |
| `pnpm dev`          | Inicia el servidor de desarrollo                                |
| `pnpm build`        | Valida el proyecto y genera la versión de producción en `dist/` |
| `pnpm preview`      | Sirve localmente el build de producción                         |
| `pnpm check`        | Ejecuta las validaciones de Astro y TypeScript                  |
| `pnpm format`       | Formatea el proyecto con Prettier                               |
| `pnpm format:check` | Comprueba el formato sin modificar archivos                     |

## Estructura

```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   └── ContactSection.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── 404.astro
│   ├── index.astro
│   └── sobre-mi.astro
├── site.config.ts
└── styles/
    └── global.css
```

Los datos generales del sitio, como nombre, descripción, email y navegación, se encuentran en
`src/site.config.ts`. Los colores y estilos globales están definidos en `src/styles/global.css`.

Las imágenes de contenido se guardan en `src/assets/images/` y Astro genera variantes responsivas
en AVIF, WebP y JPG durante el build. Los favicons, el archivo `CNAME`, `robots.txt` y la imagen
social permanecen en `public/` porque deben conservar rutas públicas estables.

## Producción

Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`. La acción oficial de Astro:

1. Instala las dependencias con pnpm.
2. Ejecuta `pnpm build`.
3. Publica el contenido generado en `dist/` mediante GitHub Pages.

El dominio canónico está configurado en `astro.config.mjs` y en `public/CNAME`.
