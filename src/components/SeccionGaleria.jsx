import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { GALERIA } from '../lib/fotos';

// Bento 4x3 que llena el rectángulo completo, sin huecos:
//  [ 0  0  1  2 ]
//  [ 0  0  3  3 ]
//  [ 4  4  5  5 ]
const SPANS = [
  'col-span-2 row-span-2',
  '',
  '',
  'col-span-2',
  'col-span-2',
  'col-span-2',
];

export default function SeccionGaleria() {
  return (
    <section id="galeria" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-12">
        <Reveal>
          <Eyebrow sobre="El páramo, en imágenes">Lo que <b>está en juego</b></Eyebrow>
        </Reveal>
        <Reveal as="p" className="text-[15px] text-[var(--texto-suave)] leading-relaxed md:text-right md:max-w-[42ch] md:justify-self-end">
          Lagunas, frailejones y turberas del complejo de Santurbán: el sistema que recarga
          el agua de más de dos millones de personas y otros seres vivos.
        </Reveal>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[40vw] sm:auto-rows-[168px] md:auto-rows-[190px] gap-3 md:gap-4">
        {GALERIA.map((f, i) => (
          <Reveal key={f.src} as="figure" className={'group relative overflow-hidden rounded-2xl shadow-suave ' + SPANS[i]}>
            <img src={f.src} alt={f.alt} loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 p-2.5 pt-9 text-[10px] leading-tight text-white/90 bg-gradient-to-t from-black/65 via-black/25 to-transparent">
              {f.alt}
              <span className="block text-white/55">Foto: {f.autor}, {f.lic}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
