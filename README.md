# Mario Catena · Psicólogo en Zaragoza

Rediseño web con estilo editorial inspirado en Joby Aviation.  
Construido con **Astro 4** — genera HTML estático ultrarrápido, SEO-friendly y sin JavaScript innecesario.

---

## 🚀 Inicio rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:4321 en tu navegador.

### 3. Build de producción
```bash
npm run build
```
Los archivos estáticos se generan en `/dist`.

### 4. Preview del build
```bash
npm run preview
```

---

## 📁 Estructura del proyecto

```
mariocatena/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro          # Nav flotante tipo pill
│   │   ├── Hero.astro         # Hero con ilustración botánica
│   │   ├── Ayuda.astro        # Individual / Pareja / Familia (tabs)
│   │   ├── Stats.astro        # Contadores animados
│   │   ├── Services.astro     # Servicios estilo Joby (lista + imagen + desc)
│   │   ├── Tarifas.astro      # Cards de precios (3 columnas)
│   │   ├── SobreMi.astro      # Split sections + statement
│   │   ├── Testimonials.astro # Grid de testimonios
│   │   ├── Contacto.astro     # CTA final con datos de contacto
│   │   └── Footer.astro       # Footer minimalista
│   ├── layouts/
│   │   └── Layout.astro       # HTML base + scripts globales
│   ├── pages/
│   │   └── index.astro        # Página principal
│   └── styles/
│       └── global.css         # Todos los estilos
├── astro.config.mjs
└── package.json
```

---

## 🎨 Sistema de diseño

### Paleta
| Variable | Color | Uso |
|---|---|---|
| `--cream` | `#F2EEE3` | Fondo principal |
| `--cream-dark` | `#E8E3D5` | Superficies secundarias |
| `--ink` | `#1A1916` | Texto principal, fondo oscuro |
| `--sage` | `#6B8F6B` | Acento verde, itálicas |
| `--sage-light` | `#A8C5A0` | Acento suave sobre fondos oscuros |

### Tipografía
- **DM Serif Display** — títulos, statements, quotes
- **DM Sans** — cuerpo, UI, botones

### Animaciones
- Scroll reveal con `IntersectionObserver` (clase `.reveal`)
- Contadores animados con easing cúbico
- Tabs interactivos (Ayuda, Servicios)

---

## 📸 Imágenes

Las ilustraciones actuales son SVG lineales de placeholder.  
Para añadir fotos reales, sustituir los `<div class="split-img-inner">` en cada componente:

```astro
<!-- Antes -->
<div class="split-img-inner" style="background: ...">
  <svg>...</svg>
</div>

<!-- Después -->
<img src="/images/mario-catena.jpg" alt="Mario Catena" 
     style="width:100%; height:100%; object-fit:cover;" />
```

Imágenes recomendadas:
- `public/images/hero-bg.jpg` — foto de consulta o ambiente natural (ratio 16:9)
- `public/images/mario-catena.jpg` — retrato profesional (ratio 4:5)
- `public/images/online.jpg` — imagen de terapia online (ratio 4:5)

---

## 🌐 Despliegue

### Netlify (recomendado)
1. Conecta el repo en [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
```bash
npx vercel
```

### Hosting estático (FTP)
```bash
npm run build
# Subir contenido de /dist al servidor
```

---

## 📝 Personalización rápida

### Cambiar precios (Tarifas.astro)
Edita directamente los valores numéricos en cada `.tarifa-precio`.

### Cambiar número de teléfono / email (Contacto.astro)
Busca `mcatena@cop.es` y `+34 696 73 49 06` y sustitúyelos.

### Añadir/quitar servicios (Services.astro)
Edita el array `services` al inicio del componente.

---

## ⚡ Rendimiento

Astro genera HTML estático puro:
- **0 KB** de JavaScript en la mayoría de páginas
- **Core Web Vitals** óptimos out-of-the-box  
- Compatible con cualquier CDN

---

*Diseño inspirado en el estilo editorial de Joby Aviation — fondo crema, tipografía serif bold, layouts asimétricos y nav tipo pill flotante.*
