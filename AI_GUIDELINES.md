# Guía de Desarrollo para IA y Colaboradores 🚀

Este documento establece las bases técnicas, visuales y de estructura de código para el proyecto **ps**. Síguelas para mantener la coherencia y calidad del código en cada interacción.

## 🛠 Stack Tecnológico

- **Framework**: Astro (v4+)
- **Estilos**: SCSS (Sass-Embedded)
- **Imágenes**: Uso del componente nativo de Astro `<Image />`.
- **Interactividad**: Web Components nativos (Custom Elements) encapsulados.

## 🎨 Sistema de Diseño y Colores

- **Variables Globales**: Los colores **NUNCA** deben escribirse como valores fijos (hex, rgba) en los componentes. Usa exclusivamente las variables definidas en `src/styles/global.css`.
- **Fondos Oscuros**: Emplea las variables de la familia `--white-X` para opacidades sobre fondos oscuros (ej: `var(--white-50)` para un 50% de opacidad).
- **Extensibilidad**: Antes de añadir un nuevo color, verifica si ya existe una variable adecuada en el `:root` de `global.css`.

## 🏗 Metodología CSS: BEM (Block Element Modifier)

Sigue estrictamente la nomenclatura BEM para evitar conflictos de especificidad y mejorar la lectura:

- **Block**: `.ayuda`, `.nav`
- **Element**: `.ayuda__container`, `.ayuda__title`
- **Modifier**: `.ayuda-tabs__button.is-active`, `.btn--light`
- **Anidamiento (Nesting)**: Aprovecha el nesting de SCSS para agrupar elementos y modificadores bajo el bloque principal.

## 🧹 Principios de Código Limpio (DRY)

- **DRY (Don't Repeat Yourself)**: Evita código HTML duplicado. Si un componente tiene varias secciones similares (ej. Tabs, Grid de Servicios), define un array de datos en el frontmatter de Astro y recórrelo con `{map()}`.
- **Datos externos**: **MANDATORIO.** Mover el contenido extenso (textos, listas de servicios, precios) a archivos TS en `src/data/`. Esto permite editar contenido sin tocar el HTML y prepara el sitio para i18n.

## 🚀 Rendimiento y SEO

- **Astro View Transitions**: Se debe usar `<ViewTransitions />` en el Layout principal para asegurar navegaciones fluidas tipo SPA.
- **Micro-interacciones**: Añade transiciones suaves (`opacity`, `transform`) para una experiencia de usuario más premium y fluida.
- **SEO Estructurado (JSON-LD)**: Cada página o el Layout principal debe incluir el esquema `PsychologicalService` de Schema.org para posicionamiento local.

## ♿ Accesibilidad (A11y) y UX

- **Custom Elements**: Utiliza la clase `extends HTMLElement` para interactividad.
- **Ciclo de vida**: Usa `connectedCallback` para añadir eventos y lógica de inicialización.
- **Estándares ARIA**:
  - Implementa roles correctos (`role="tablist"`, `tab`, `tabpanel`).
  - Asegura navegación completa por teclado (teclas de flechas, Home, End, Escape).
  - Gestiona los estados `aria-selected`, `aria-controls` y `tabindex` dinámicamente.
- **Micro-interacciones**: Añade transiciones suaves (`opacity`, `transform`) para una experiencia de usuario más premium y fluida.

## 📂 Organización de Archivos

- **Componentes**: Ubicados en `src/components/*.astro`.
- **Iconos**: **MANDATORIO.** No incluyas código SVG directamente en los componentes de UI. Crea un componente en `src/icons/NombreIcono.astro` e impórtalo. Usa `stroke="currentColor"` o `fill="currentColor"` para que el icono se adapte al color del texto circundante.
- **Estilos**: Globales en `src/styles/global.css`. Estilos específicos encapsulados dentro de cada componente `.astro` usando `<style lang="scss">`.
- **Assets**: Imágenes en `src/assets/img/`. Los SVGs originales se guardan en `src/assets/icons/`.

---

_Referencia de implementación ideal: `src/components/Ayuda.astro` y `src/icons/`_
