# Kit por Santurbán · sitio web (React + Tailwind)

Comité para la Defensa del Agua y el Páramo de Santurbán.

Versión React del sitio original en HTML estático, con el mismo contenido y
la misma funcionalidad, y un diseño renovado.

## Desarrollo

```
npm install
npm run dev
```

## Compilar para publicar

```
npm run build
```

Esto genera la carpeta `dist/`. **Copie el contenido de `dist/` a la raíz del
hosting.** Es HTML, CSS y JS ya compilados: sigue sin necesitar servidor de
aplicaciones ni base de datos. Funciona en Netlify, Vercel, Cloudflare Pages,
GitHub Pages, Firebase Hosting, un bucket de S3, o Apache/Nginx.

Requisitos: servirlo por **HTTPS** y que el servidor entregue los `.docx` con
el tipo MIME `application/vnd.openxmlformats-officedocument.wordprocessingml.document`.

## Lo único que hay que editar para poner la campaña en marcha

Archivo `src/lib/config.js`:

```js
export const ENLACES = {
  whatsapp: '',    // enlace de invitación del grupo o comunidad de WhatsApp
  telegram: '',    // enlace del canal de Telegram
  banco: '',       // enlace del banco de imágenes de la campaña
  informacion: 'https://drive.google.com/drive/folders/...',
};
export const CORREO = 'comiteparamosanturban@gmail.com';
```

Si un enlace queda vacío, su botón no se muestra (o cae en un correo de
respaldo). Nunca aparece un botón roto.

## Estructura

```
src/
  lib/config.js        ← enlaces, correo, fechas del calendario, documentos
  lib/utils.js         ← funciones compartidas (días, calendario, copiar, descargar)
  components/          ← un componente por sección del sitio
  App.jsx              ← ensambla la página y el tema claro/oscuro
public/
  assets/logo.jpg, santurban-adn.jpg   ← imágenes reales del Comité
  documentos/*.docx, *.pdf             ← los formatos jurídicos y sus instructivos
```

## Qué se puede cambiar sin tocar código

| Quiero cambiar | Dónde |
|---|---|
| Enlaces de WhatsApp, Telegram, banco de imágenes, Drive | `src/lib/config.js` → `ENLACES` |
| Correo del Comité | `src/lib/config.js` → `CORREO` |
| Fechas del calendario | `src/lib/config.js` → `EVENTOS` |
| Textos de "Combate la desinformación" | `src/components/SeccionEvidencia.jsx` → `PREGUNTAS` |
| Un formato jurídico | reemplace el archivo en `public/documentos/`, mismo nombre |
| El afiche o el logo | reemplace `public/assets/santurban-adn.jpg` o `logo.jpg` |
| Colores y tipografías | `tailwind.config.js` |

## Fotos reales del páramo

El sitio no incluye fotografías de paisaje del páramo por defecto, para no
usar imágenes de prensa o stock sin licencia clara en un sitio público. Puede
descargar fotos con licencia libre (CC BY-SA) de la categoría
["Páramo de Santurbán" en Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:P%C3%A1ramo_de_Santurb%C3%A1n),
guardarlas en `public/assets/fotos/` y referenciarlas donde se prefiera
(por ejemplo, como fondo del `<Hero>` en `src/components/Hero.jsx`).
Recuerde mantener el crédito de cada autor al publicarlas.

## Privacidad

Igual que en la versión original: el sitio no recoge, no almacena y no
transmite datos personales. El formulario de inscripción arma un correo y lo
abre en el cliente de correo del propio visitante (`mailto:`). No hay
`localStorage`, cookies ni analítica.
