# DESIGN.md — Kit por Santurbán

Especificación visual generada con la skill `web-design` a partir de la
referencia "The River Soul / Farmland Properties" aportada por el usuario.
Contenido y propósito del sitio: kit ciudadano del Comité para la Defensa
del Agua y el Páramo de Santurbán (inscripción, acciones jurídicas, difusión).

---

## 1. Visual Theme & Atmosphere

**Filosofía:** naturaleza + acción cívica con energía de campaña. Cálido,
sólido, confiable. Bloques de color plenos con cortes diagonales, tarjetas
redondeadas que "flotan", cifras grandes, siluetas de paisaje de páramo.

**Keywords:** verde vivo, agua, ámbar, diagonales, tarjetas flotantes,
cifras grandes, siluetas, redondez amable.

**Tono en una frase:** "El agua de dos millones de personas nace en Santurbán
— y todo lo necesario para defenderla cabe en esta página."

## 2. Color Palette & Roles

Refinada tras la 2ª tanda de referencias: azul "agua" más brillante, verde
bosque más profundo, sin modo oscuro (la referencia es solo claro).

```css
:root {
  --bosque: #0F3D2E;        /* cabecera, pie, secciones narrativas */
  --bosque-hondo: #0A2C21;  /* pie, gradiente hero */
  --hoja: #38B24A;          /* acento vivo, palabra resaltada, CTA verde */
  --agua: #159FD8;          /* secciones "agua" enmarcadas por olas */
  --agua-hondo: #0F7FB0;
  --ambar: #F3A32C;         /* barra de rótulo, CTA principal, stat cards */
  --ambar-hondo: #DB8A15;
  --pagina: #F6F3EC;        /* fondo claro */
  --tarjeta: #FFFFFF;
  --texto: #15241C;
  --texto-suave: #5A6B60;
  --linea: rgba(21,36,28,.12);
}
```

**Acento contextual (sin naranja).** El color de acento cambia según el fondo:

| Fondo | Acento (CTA, barra de rótulo, palabra clave del título) |
|-------|--------------------------------------------------------|
| crema `--pagina` | verde `--hoja` #38B24A |
| verde `--bosque` (`.en-verde`) | azul `--agua-claro` #4FB9E6 · CTA #159FD8 |
| azul `--agua` (`.sobre-oscuro`) | verde oscuro #0A2C21 |

Se implementa con las clases `.en-verde` (en cada sección/bloque verde) y
`.sobre-oscuro` (en cada sección azul). Bloques narrativos = `--bosque`;
bloques de dato = `--agua`, entrados y salidos con divisor de olas.

## 3. Typography Rules

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@500;600;700&family=Public+Sans:wght@400;500;600;700&display=swap');
```

| Rol | Fuente | Uso |
|-----|--------|-----|
| Display | **Montserrat** 800/900 | H1, títulos de sección (UPPERCASE), cifras grandes, números 01–05 |
| Wordmark / lead | **Cormorant Garamond** 600 | lockup, subtítulo serif del hero |
| Body | **Public Sans** 400/500 | párrafos, listas, formularios |

**Patrón de título de sección** (`.titulo` y `.eyebrow2`): barra ámbar vertical
→ línea pequeña gris en versalitas (contexto) → línea grande Montserrat 800
UPPERCASE con la palabra clave en `<b>` de color (`--hoja` sobre claro,
`--ambar` sobre `--bosque`/`--agua`). Cada sección de contenido lleva además
su número 01–05 en Montserrat 900 al 25 % de opacidad.

Escala: eyebrow pequeña 11px · grande clamp(22,4.2vw,36) · body 15–16px ·
lead serif clamp(19,2.6vw,26) · H1 clamp(38,7vw,66) · número de sección
clamp(38,7vw,64). Line-height body 1.6.
**Prohibido:** itálicas para body, subrayado decorativo en títulos.

## 4. Component Stylings

**Botón primario (pill):** `bg --ambar`, texto `--bosque-hondo`, Poppins 700,
`padding 14px 28px`, `border-radius 9999px`.
`hover` → `bg --ambar-hondo` + `translateY(-2px)` + `box-shadow chip`.
`active` → `translateY(0)`. `focus-visible` → `outline 2px --oceano`.
`disabled` → `opacity .5; cursor not-allowed`.

**Botón secundario:** transparente, `border 1.5px currentColor`, pill.
`hover` → `bg currentColor` + texto invertido.

**Tarjeta:** `bg --tarjeta`, `border-radius 20px`, `box-shadow suave`
(`0 20px 45px -22px rgba(15,51,39,.28)`), `padding 24-32px`.
`hover` (si es enlace) → `box-shadow flota` + `translateY(-4px)`.

**Stat card:** `bg --ambar`, `border-radius 20px`, cifra Poppins 800 clamp(30,6vw,52),
label 12px uppercase, texto `--bosque-hondo`.

**Nav link:** Public Sans 600 14px. `hover`/activo → color `--hoja` + subrayado 2px.

**Input:** `bg --tarjeta`, `border 1.5px --linea`, `border-radius 12px`,
`padding 12px 14px`. `focus` → `border-color --hoja` + `ring 3px rgba(63,191,95,.25)`.

**Acordeón:** tarjeta con `border-top 3px --hoja`; marcador `+` que gira a `×`.

## 5. Layout Principles

Contenedor `max-width: 1120px`, `padding-inline: clamp(20px, 5vw, 40px)`.
Grid de 12 col conceptual. Ritmo vertical de sección: `py clamp(64px, 10vw, 112px)`.
Gutter de tarjetas 20-32px. Hero y secciones de color van **full-bleed**;
el contenido respeta el contenedor.

## 6. Depth & Elevation

Tres niveles: `suave` (tarjetas en reposo), `chip` (botones hover, date chips),
`flota` (tarjetas flotantes del hero, hover de galería). Sin bordes duros en
tarjetas sobre `--pagina`; la sombra hace la separación. Sobre bloques de
color, las tarjetas usan `--tarjeta` con sombra `flota`.

## 7. Animation & Interaction — nivel L1 + reveal (deliberado)

Campaña cívica: legibilidad y velocidad sobre espectáculo. **No** WebGL,
**no** scroll-jacking, **no** SplitText/Aurora.

- Entrada: `.reveal` (opacity 0 → 1, `translateY(18px)` → 0, 600ms) disparado
  por `IntersectionObserver` una sola vez por elemento.
- Hover: tarjetas-enlace suben 4px; botones suben 2px + sombra.
- Cortes diagonales entre secciones vía `clip-path` (sin animación).
- `prefers-reduced-motion: reduce` → `.reveal` nace visible, sin transiciones.

## 8. Do's and Don'ts

**Do**
1. Un único color de acción: ámbar. Todo CTA es ámbar.
2. Palabra clave del H1/H2 en verde `--hoja`, el resto en `--texto`/blanco.
3. Fotos y cifras dentro de tarjetas redondeadas con sombra.
4. Cortes diagonales solo entre bloques de color (bosque↔océano).
5. Siluetas de paisaje como divisor antes de secciones oscuras.
6. Contraste de texto ≥ 4.5:1; ámbar solo como fondo con texto `--bosque-hondo`.
7. Touch targets ≥ 44px; foco visible siempre.
8. `alt` real en toda imagen informativa; iconos decorativos `aria-hidden`.

**Fotografía**: solo imágenes con licencia libre. Se usan 7 fotos del páramo
de Wikimedia Commons (CC BY-SA 3.0/4.0) en `public/assets/fotos/`, registradas
con su crédito en `src/lib/fotos.js`. Cada uso muestra "Foto: {autor} · {lic}"
sobre la imagen (hero) o en el pie de la figura (galería). Nada de stock de pago
ni fotos de prensa.

**Don'ts**
1. Fotos sin licencia clara o sin crédito visible al autor.
2. No degradados arcoíris ni sombras de color saturado.
3. No ámbar para texto sobre claro (falla contraste).
4. No más de una silueta SVG por transición.
5. No emojis como iconos.
6. No animar `width`/`height`/`filter` en scroll.
7. No formularios que guarden datos: todo es `mailto:`.

## 9. Responsive Behavior

Breakpoints: 375 / 640 / 768 / 1024 / 1120. Mobile-first.
- Hero: tarjeta flotante y bloque de cifras pasan a apilado bajo el texto.
- Grids de tarjetas: 1 col < 640, 2 col < 1024, 3 col ≥ 1024.
- Cortes diagonales se reducen a 3vw en móvil.
- Barra de acción fija (Únase / Radicar) solo < 768; `body` con `padding-bottom`.
- Sin overflow horizontal; siluetas `preserveAspectRatio="none"`.
