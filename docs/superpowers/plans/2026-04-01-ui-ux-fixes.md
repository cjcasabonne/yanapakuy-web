# UI/UX Fixes — Yanapakuy Web

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corregir todos los issues críticos, altos y medios identificados en la auditoría UI/UX del sitio yanapakuy.org.pe.

**Architecture:** Sitio HTML/CSS/JS vanilla con 8 páginas. Los cambios se concentran en (1) `assets/styles.css` para tokens y componentes compartidos, y (2) cada página HTML para eliminar CSS duplicado, arreglar encoding, metatags y carga de fuentes. No se toca estructura de contenido.

**Tech Stack:** HTML5 vanilla, CSS custom properties, JavaScript vanilla. Sin build system — edición directa de archivos.

---

## Mapa de archivos

| Archivo | Cambios |
|---------|---------|
| `assets/styles.css` | Tokens, componentes hero/impact/cta compartidos, fix contrast, fix h2 weight, nav animation |
| `index.html` | Google Fonts → `<link>`, strip CSS duplicado, rename class, object-position inline, metatags, fix img double-load |
| `quienes-somos.html` | Ídem |
| `programas.html` | Ídem |
| `metodologia.html` | Ídem |
| `actividades.html` | Ídem |
| `documentos.html` | Ídem |
| `voluntariado.html` | Ídem + override display-h size |
| `contacto.html` | Ídem + fix encoding corruption en texto + fix emoji → SVG + fix impact-grid-3 |

---

## Task 1: Actualizar `assets/styles.css`

**Files:**
- Modify: `assets/styles.css`

Este task tiene 4 partes: (A) tokens, (B) componentes compartidos nuevos, (C) nav animation, (D) reduce-motion update.

- [ ] **Paso 1A: Leer el archivo completo antes de editar**

Leer `assets/styles.css` completo para confirmar estado actual.

- [ ] **Paso 1B: Actualizar tokens en `:root`**

En `:root` (líneas ~4-53), aplicar estos cambios:

```css
/* REEMPLAZAR estas líneas: */
--muted:     #4d7a5e;
--gold:      #b8a800;

/* POR: */
--muted:     #426a52;   /* oscurecido para WCAG 4.5:1 en --bg */
--gold:      #7a6f00;   /* oscurecido para WCAG 4.5:1 en --gold-light */

/* AÑADIR al final del bloque :root, después de --font-body: */
--header-h:  65px;      /* altura del header, usado en hero-2 */
```

- [ ] **Paso 1C: Actualizar `.badge` border-color**

Buscar el bloque `.badge` (~línea 166) y cambiar el rgba del border:

```css
/* REEMPLAZAR: */
border: 1px solid rgba(184,168,0,.28);

/* POR: */
border: 1px solid rgba(122,111,0,.28);
```

- [ ] **Paso 1D: Corregir `.h2 font-weight`**

Buscar `.h2` (~línea 136) y cambiar:

```css
/* REEMPLAZAR: */
font-weight: 300;

/* POR: */
font-weight: 400;
```

Lilita One sólo tiene peso 400; 300 causa síntesis falsa en el browser.

- [ ] **Paso 1E: Añadir componentes compartidos al final del archivo**

Añadir el siguiente bloque **al final** de `assets/styles.css`, antes del comentario `/* ── PRINT */` (moverlo después si ya existe):

```css
/* ── HERO 2 (split layout) ─────────────────────────────────── */
.hero-2 {
  display: grid;
  grid-template-columns: 1fr 44%;
  min-height: calc(100dvh - var(--header-h));
  overflow: hidden;
  background: var(--surface);
}
.hero-2-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px clamp(24px, 5vw, 56px) 64px
           max(var(--pad), calc((100vw - var(--max)) / 2 + var(--pad)));
}
.hero-2-panel {
  position: relative;
  overflow: hidden;
  background: var(--bg-warm);
  min-height: 360px;
}
.hero-2-panel img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero-2-panel::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 80px;
  background: linear-gradient(to right, var(--surface), transparent);
  z-index: 1;
  pointer-events: none;
}
.display-h {
  font-family: var(--font-display);
  font-size: clamp(38px, 4.6vw, 62px);
  line-height: 1.06;
  letter-spacing: -.02em;
  margin: 0 0 18px;
  color: var(--ink);
}
.display-h em {
  font-style: italic;
  color: var(--pri);
}
.hero-2-desc {
  font-size: 18px;
  color: var(--ink-2);
  line-height: 1.65;
  max-width: 540px;
  margin: 0 0 28px;
}
.hero-stats {
  display: flex;
  gap: 28px;
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  flex-wrap: wrap;
}
.hero-stat { display: flex; flex-direction: column; gap: 4px }
.hero-stat-n {
  font-size: 20px;
  font-weight: 800;
  color: var(--ink);
  line-height: 1;
}
.hero-stat-l {
  font-size: 12px;
  color: var(--muted);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .07em;
}

/* ── IMPACT BAND ──────────────────────────────────────────────── */
.impact-band {
  background: #0a2218;
  padding: 48px 0;
}
.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
}
.impact-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}
.impact-item {
  padding: 0 24px;
  border-right: 1px solid rgba(255,255,255,.10);
}
.impact-item:last-child { border-right: 0 }
.impact-n {
  font-family: var(--font-display);
  font-size: 40px;
  color: #fff;
  line-height: 1;
  display: block;
}
.impact-l {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255,255,255,.85);
  margin-top: 8px;
  letter-spacing: .08em;
  text-transform: uppercase;
}

/* ── SECTION HEADER SUB ────────────────────────────────────────── */
.section-header-sub {
  font-size: 16px;
  color: var(--ink-2);
  line-height: 1.65;
  max-width: 620px;
  margin: 10px 0 0;
}

/* ── IMAGE BAND ─────────────────────────────────────────────────── */
.image-band {
  position: relative;
  overflow: hidden;
  height: 360px;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
}
.image-band img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.image-band-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(10,34,24,.74) 0%, rgba(10,34,24,.20) 68%);
  display: flex;
  align-items: flex-end;
}
.image-band-inner {
  width: 100%;
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 max(var(--pad), calc((100vw - var(--max)) / 2 + var(--pad))) 28px;
}
.image-band-quote {
  max-width: 560px;
  color: #fff;
  font-family: var(--font-display);
  font-size: clamp(22px, 2.8vw, 34px);
  line-height: 1.22;
  margin: 0;
}

/* ── CTA PANEL ──────────────────────────────────────────────────── */
.cta-panel {
  background: #0a2218;
  position: relative;
  padding: 58px 34px;
  text-align: center;
  overflow: hidden;
  border-radius: var(--radius);
}
.cta-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 900px 500px at 15% 50%, rgba(38,153,71,.18), transparent 60%),
    radial-gradient(ellipse 700px 400px at 85% 50%, rgba(38,153,71,.10), transparent 60%);
  pointer-events: none;
}
.cta-panel-inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
}
.cta-kicker {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--pri-light);
  margin-bottom: 16px;
}
.cta-h {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 46px);
  color: #fff;
  line-height: 1.1;
  margin: 0 0 16px;
  letter-spacing: -.01em;
  font-weight: 400;
}
.cta-sub {
  font-size: 17px;
  color: rgba(255,255,255,.82);
  max-width: 620px;
  margin: 0 auto 34px;
  line-height: 1.68;
}
.btn-white {
  background: #fff;
  color: var(--pri);
  border-color: transparent;
  font-weight: 800;
}
.btn-white:hover { background: var(--pri-light); color: var(--pri-2) }
.btn-ghost-white {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,.30);
}
.btn-ghost-white:hover {
  background: rgba(255,255,255,.10);
  color: #fff;
  box-shadow: none;
}

/* ── HERO 2 + IMPACT RESPONSIVE ─────────────────────────────────── */
@media (max-width: 960px) {
  .hero-2 {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .hero-2-panel {
    height: 56vw;
    min-height: 250px;
    order: -1;
  }
  .hero-2-panel::before { display: none }
  .hero-2-text { padding: 40px var(--pad) 48px }
  .impact-grid { grid-template-columns: repeat(2, 1fr); gap: 24px }
  .impact-item { border-right: 0; padding: 0 }
  .impact-item + .impact-item {
    border-top: 1px solid rgba(255,255,255,.10);
    padding-top: 24px;
  }
  .image-band { height: 270px }
  .cta-panel { padding: 48px 22px }
}
@media (max-width: 600px) {
  .impact-grid { grid-template-columns: 1fr }
}
```

- [ ] **Paso 1F: Añadir animación al nav mobile**

Buscar el bloque `@media (max-width: 860px)` del nav (~línea 275). Reemplazar las reglas de `.nav` dentro de ese media query:

```css
/* REEMPLAZAR (dentro de @media max-width: 860px): */
.nav {
  display: none;
  width: 100%;
  order: 3;
  padding: var(--s-2) 0 var(--s-4);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--s-1);
  border-top: 1px solid var(--line-warm);
  margin-top: var(--s-2);
}
.nav[data-open="true"] { display: flex }

/* POR: */
.nav {
  display: flex;
  width: 100%;
  order: 3;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--s-1);
  border-top: 1px solid var(--line-warm);
  margin-top: var(--s-2);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: max-height .22s ease, opacity .18s ease, visibility .18s;
}
.nav[data-open="true"] {
  max-height: 600px;
  opacity: 1;
  visibility: visible;
  padding: var(--s-2) 0 var(--s-4);
}
```

- [ ] **Paso 1G: Actualizar reduced-motion para incluir nav**

Buscar `@media (prefers-reduced-motion: reduce)` (~línea 490) y añadir `.nav` a la lista de elementos sin transición:

```css
/* REEMPLAZAR: */
.btn, .canal-item, .doc-item, .act-item, summary::after { transition: none }

/* POR: */
.btn, .canal-item, .doc-item, .act-item, summary::after, .nav { transition: none }
/* Y añadir: */
.nav[data-open="true"] { transition: none }
```

- [ ] **Paso 1H: Eliminar `@import` de Google Fonts**

Eliminar la línea 1 de `styles.css`:

```css
/* ELIMINAR esta línea: */
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
```

La carga de fuentes se moverá a cada `<head>` de HTML en el Task 2.

---

## Task 2: Actualizar cada página HTML — cambios mecánicos

**Files:**
- Modify: `index.html`, `quienes-somos.html`, `programas.html`, `metodologia.html`, `actividades.html`, `documentos.html`, `voluntariado.html`, `contacto.html`

Cada página requiere los mismos 5 cambios mecánicos. Aplicar uno por uno en cada archivo.

### Cambios a aplicar en CADA página:

**Cambio A — Google Fonts: reemplazar `<link rel="stylesheet" href="assets/styles.css" />` por el bloque completo:**

```html
<!-- REEMPLAZAR: -->
<link rel="stylesheet" href="assets/styles.css" />

<!-- POR: -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap">
<link rel="stylesheet" href="assets/styles.css" />
```

**Cambio B — Renombrar clase del panel hero en el HTML (div):**

| Página | Clase actual | Reemplazar por |
|--------|-------------|----------------|
| index.html | `hero-2-photos` | `hero-2-panel` |
| quienes-somos.html | `hero-2-photos` | `hero-2-panel` |
| programas.html | `hero-2-visual` | `hero-2-panel` |
| metodologia.html | `hero-2-photos` | `hero-2-panel` |
| actividades.html | `hero-2-visual` | `hero-2-panel` |
| documentos.html | `hero-2-media` | `hero-2-panel` |
| voluntariado.html | `hero-2-media` | `hero-2-panel` |
| contacto.html | `hero-2-photos` | `hero-2-panel` |

Buscar en el HTML (no en el `<style>`) la línea `<div class="hero-2-photos"` (o `-visual`/`-media`) y cambiar solo la clase del div.

**Cambio C — Añadir `object-position` como inline style en el img del panel:**

Buscar el `<img>` dentro del div del panel (`#heroRandomImg` o similar) y añadir `style="object-position: ..."` según la tabla:

| Página | object-position |
|--------|----------------|
| index.html | `center 20%` |
| quienes-somos.html | `center` (default, no añadir) |
| programas.html | `center 26%` |
| metodologia.html | `center 30%` |
| actividades.html | `center 28%` |
| documentos.html | `center` (default, no añadir) |
| voluntariado.html | `center 24%` |
| contacto.html | `center 28%` |

**Cambio D — Limpiar el bloque `<style>` inline: eliminar las reglas ahora en styles.css**

En el `<style>` de cada página, eliminar **completamente** los siguientes bloques de reglas (incluyendo sus reglas `@media` asociadas dentro del bloque `<style>`):

```
.hero-2 { ... }
.hero-2-text { ... }
.hero-2-photos { ... }  (o -visual, o -media)
.hero-2-photos img { ... }
.hero-2-photos::before { ... }
.display-h { ... }
.display-h em { ... }
.hero-2-desc { ... }
.hero-stats { ... }
.hero-stat { ... }
.hero-stat-n { ... }
.hero-stat-l { ... }
.impact-band { ... }
.impact-grid { ... }
.impact-item { ... }
.impact-item:last-child { ... }
.impact-n { ... }
.impact-l { ... }
.section-header-sub { ... }
.image-band { ... }          (si existe en la página)
.image-band img { ... }      (si existe)
.image-band-overlay { ... }  (si existe)
.image-band-inner { ... }    (si existe)
.image-band-quote { ... }    (si existe)
.cta-panel { ... }           (si existe)
.cta-panel::before { ... }   (si existe)
.cta-panel-inner { ... }     (si existe)
.cta-kicker { ... }          (si existe)
.cta-h { ... }               (si existe)
.cta-sub { ... }             (si existe)
.btn-white { ... }           (si existe)
.btn-white:hover { ... }     (si existe)
.btn-ghost-white { ... }     (si existe)
.btn-ghost-white:hover { ... }(si existe)
```

También eliminar, dentro de cualquier `@media` en el bloque `<style>`, las reglas que afectan las clases anteriores:
```
@media (max-width: 960px) { .hero-2 { ... } .hero-2-panel { ... } ... }
@media (max-width: 680px) { .image-band { ... } .cta-panel { ... } }
```

**Lo que NO eliminar** del `<style>` inline: cualquier clase propia y única de esa página (`.ejes-grid`, `.mv-wrap`, `.canal-item`, etc.).

**Cambio E — Fix metatags: añadir tildes y caracteres especiales correctos**

En las metatags `<meta name="description">`, `<meta name="title">`, `<meta property="og:description">`, `<meta property="og:title">`, `<meta name="twitter:description">`, `<meta name="twitter:title">` de cada página, corregir:

| Incorrecto | Correcto |
|-----------|---------|
| `educacion` | `educación` |
| `ninos` | `niños` |
| `adolescentes` (sin cambio) | — |
| `acompanamiento` | `acompañamiento` |
| `acompana` | `acompaña` |
| `organizacion` | `organización` |
| `asociacion` | `asociación` |
| `Quienes somos` | `Quiénes somos` |
| `Metodologia` | `Metodología` |
| `constitucion` | `constitución` |
| `proteccion` | `protección` |
| `dinamicas` | `dinámicas` |
| `politicas` | `políticas` |

**Cambio F — Fix image double-load: quitar `src` inicial del img del hero**

En páginas que tienen `id="heroRandomImg"` (o `id="canalesRandomImg"`, `id="bandRandomImg"`), el `src` inicial es cargado por el browser antes de que JS lo reemplace. Cambiar:

```html
<!-- REEMPLAZAR (ejemplo): -->
<img id="heroRandomImg" src="assets/img/foto1.jpg" alt="..." width="900" height="700" fetchpriority="high" />

<!-- POR: -->
<img id="heroRandomImg" src="" alt="..." width="900" height="700" />
```

Eliminar `fetchpriority="high"` y vaciar `src=""`. El script al final del body ya asigna el src correcto.

### Instrucciones de ejecución:

- [ ] **Paso 2.1 — index.html:** Leer el archivo, luego aplicar cambios A, B, C, D, E, F. Al limpiar el `<style>`, conservar: `.hero-card`, `.ejes-grid`, `.eje-card`, `.eje-num`, `.eje-title`, `.eje-desc`, `.eje-tags`, `.foto-band`, `.foto-band-overlay`, y sus reglas `@media`.

- [ ] **Paso 2.2 — quienes-somos.html:** Leer, luego aplicar A, B, C, D, E. Conservar en `<style>`: `.mv-wrap`, `.mv-text-side`, `.mv-label`, `.mv-text`, `.mv-img-side`, `.section-header`, y cualquier clase page-specific. No aplica F (no tiene heroRandomImg en este patrón — verificar al leer).

- [ ] **Paso 2.3 — programas.html:** Leer, luego aplicar A, B, C, D, E. Conservar clases de programas (verificar al leer).

- [ ] **Paso 2.4 — metodologia.html:** Leer, luego aplicar A, B, C, D, E. Conservar clases de metodología (verificar al leer).

- [ ] **Paso 2.5 — actividades.html:** Leer, luego aplicar A, B, C, D, E. Conservar clases de actividades (verificar al leer).

- [ ] **Paso 2.6 — documentos.html:** Leer, luego aplicar A, B, C, D, E. Conservar `.doc-item`, `.doc-icon`, `.doc-meta` y similares (verificar al leer).

- [ ] **Paso 2.7 — voluntariado.html:** Leer, luego aplicar A, B, C, D, E, F. **Adicionalmente:** en el `<style>` que queda después de limpiar, añadir el override del display-h para esta página:

```css
/* Override: voluntariado usa display-h más grande */
.display-h {
  font-size: clamp(40px, 5vw, 68px);
}
```

- [ ] **Paso 2.8 — contacto.html:** Leer, luego aplicar A, B, C, D, E, F. Conservar en `<style>`: `.contacto-split`, `.editorial-card`, `.image-panel`, `.canal-item`, `.canal-label`, `.canal-value`, `.canal-value.muted`. **Adicionalmente:** en el HTML del `.impact-grid`, añadir la clase `impact-grid-3` (la grilla de contacto tiene 3 columnas, no 4):

```html
<!-- REEMPLAZAR: -->
<div class="impact-grid">

<!-- POR: -->
<div class="impact-grid impact-grid-3">
```

---

## Task 3: Fix encoding corruption en `contacto.html`

**Files:**
- Modify: `contacto.html`

Este task es separado porque requiere identificar y corregir texto corrupto visible en producción.

- [ ] **Paso 3.1: Leer contacto.html completo y localizar secuencias `ï¿½`**

Las secuencias `ï¿½?"` son em-dashes (`—`) corruptos. Localizar todas las ocurrencias en el **contenido HTML** (no en comentarios CSS — esos no son visibles en producción).

- [ ] **Paso 3.2: Corregir em-dashes en texto de contenido**

Buscar y reemplazar en el texto del body (no en el `<style>`):

```
Buscar:   ï¿½?"
Reemplazar por:   &mdash;
```

Aplicar esta sustitución en todas las ocurrencias fuera del bloque `<style>`. Casos conocidos:
- Línea ~361: `te movió ï¿½?" escríbenos`  →  `te movió &mdash; escríbenos`
- Línea ~524 (footer): `Yanapakuy ï¿½?" Juntos`  →  `Yanapakuy &mdash; Juntos`

- [ ] **Paso 3.3: Reemplazar emoji corrupto con SVG en el botón de email**

Buscar la línea del botón que contiene `ï¿½o?ï¸` (línea ~460):

```html
<!-- REEMPLAZAR: -->
<a class="btn primary" style="width:100%;justify-content:center" href="mailto:...">
  ï¿½o?ï¸ Abrir correo con plantilla
</a>

<!-- POR: -->
<a class="btn primary" style="width:100%;justify-content:center" href="mailto:info@yanapakuy.org.pe?subject=Contacto%20Yanapakuy&amp;body=Nombre%3A%0AMotivo%3A%0ADisponibilidad%3A%0ADetalle%3A%0A">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  Abrir correo con plantilla
</a>
```

- [ ] **Paso 3.4: Limpiar comentarios CSS corruptos en todos los archivos**

Los comentarios `/* ï¿½.ï¿½ï¿½... */` en los bloques `<style>` son invisibles en producción pero ensucian el código fuente. Reemplazar en **todos los archivos** el patrón de los comentarios decorativos corruptos por comentarios ASCII simples:

En cada archivo HTML, buscar los bloques `<style>` que comiencen con:
```
/* ï¿½.ï¿½ï¿½.ï¿½ ...
   NOMBRE DE PAGINA 2.0 ï¿½?" layout extras
   ï¿½.ï¿½ï¿½.ï¿½ ... */
```

Y reemplazar por:
```
/* NOMBRE DE PAGINA — layout extras */
```

Ejemplo para index.html: `/* INDEX — layout extras */`
Ejemplo para quienes-somos.html: `/* QUIÉNES SOMOS — layout extras */`
(Usar el nombre de la sección sin los caracteres corruptos.)

---

## Task 4: Fix `.canal-item` hover UX en `contacto.html`

**Files:**
- Modify: `contacto.html`

- [ ] **Paso 4.1: Leer el bloque `.canal-item` en el `<style>` de contacto.html**

Localizar:
```css
.canal-item {
  ...
  transition: box-shadow .15s, transform .15s;
}
.canal-item:hover { box-shadow: var(--shadow-sm); transform: translateY(-1px); }
```

- [ ] **Paso 4.2: Remover el hover del contenedor, añadirlo al link**

```css
/* REEMPLAZAR: */
.canal-item {
  padding: 16px;
  background: var(--bg-warm);
  border-radius: 13px;
  margin-bottom: 10px;
  border: 1px solid var(--line-warm);
  transition: box-shadow .15s, transform .15s;
}
.canal-item:hover { box-shadow: var(--shadow-sm); transform: translateY(-1px); }

/* POR: */
.canal-item {
  padding: 16px;
  background: var(--bg-warm);
  border-radius: 13px;
  margin-bottom: 10px;
  border: 1px solid var(--line-warm);
}
.canal-value {
  font-weight: 600;
  font-size: 16px;
  color: var(--pri);
  transition: color .15s;
}
.canal-value:hover { color: var(--pri-2) }
```

El hover ahora está sólo sobre el link clickeable, no sobre el contenedor no-interactivo.

---

## Self-Review

**Spec coverage:**
- ✅ Crítico 1: Encoding corruption → Task 3
- ✅ Crítico 2: Emoji corrupto → Task 3 Paso 3.3
- ✅ Alto: CSS duplicado con drift → Task 1E + Task 2D
- ✅ Alto: `65px` hardcodeado → Task 1B (`--header-h`)
- ✅ Alto: Badge contrast → Task 1B + 1C (`--gold: #7a6f00`)
- ✅ Alto: `--muted` contrast → Task 1B (`--muted: #426a52`)
- ✅ Alto: Texto 11px → Task 1E (`.hero-stat-l`, `.impact-l` → 12px; `.cta-kicker` → 12px)
- ✅ Alto: Image double-load → Task 2F
- ✅ Medio: Google Fonts @import → Task 1H + Task 2A
- ✅ Medio: `font-weight: 300` en h2 → Task 1D
- ✅ Medio: Nav sin animación mobile → Task 1F + 1G
- ✅ Medio: Metatags sin tildes → Task 2E
- ✅ Medio: `canal-item` hover no-clickeable → Task 4
- ✅ Medio: Comentarios CSS corruptos → Task 3 Paso 3.4
- ✅ Drift de clases panel → Task 2B (canonicalizar a `.hero-2-panel`)
- ✅ `impact-grid-3` para contacto → Task 2.8

**Issues no incluidos (fuera de scope o justificados):**
- Logo SVG 93KB: requiere herramienta externa (svgo). Agregar como nota: ejecutar `npx svgo --multipass assets/logo.svg` si se instala Node.
- WebP/AVIF: requiere pipeline de build. Fuera de scope para sitio vanilla.
- `reveal visible` inline: comportamiento intencional, no rompe nada.
- Valores mágicos inline: cleanup cosmético, no afecta funcionalidad ni UX.
