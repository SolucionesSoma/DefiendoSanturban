import { OlasAbajo } from './Silueta';
import { FOTOS } from '../lib/fotos';

export default function Hero({ dias }) {
  const foto = FOTOS.lagunaColorada;
  const cards = [
    ['Reserva', 'La Baja · macizo Occidental de Santurbán'],
    ['Revocada', 'Siete días después de declararse'],
    ['En juego', '1.499 hectáreas de recarga hídrica'],
    ['Plazo legal', 'Quince días hábiles para que te den respuesta'],
  ];
  const shadow = '[text-shadow:0_2px_18px_rgba(7,30,22,.55)]';
  return (
    <section id="inicio" className="en-verde relative bg-agua text-white overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <img src={foto.src} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-bosque-hondo/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-bosque-hondo via-bosque-hondo/60 to-bosque-hondo/25" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-bosque-hondo/70 to-transparent" />
      </div>

      <p className="absolute right-4 top-3 z-10 text-[10px] text-white/45">Foto: {foto.autor} · {foto.lic}</p>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-28 md:pt-24 md:pb-40">
        <div className="grid lg:grid-cols-[1.35fr,minmax(280px,360px)] gap-10 lg:gap-16 lg:items-center">
          <div>
            <p className="font-display font-semibold text-[11px] tracking-[.22em] uppercase text-agua-claro mb-5">
              Comité por el Agua y el Páramo · Campaña ciudadana
            </p>
            <h1 className={'font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-[1.06] tracking-tight mb-5 ' + shadow}>
              #Defiendo<span className="text-agua-claro">Santurbán</span>.<br className="hidden sm:block" />
            </h1>
            <p className="font-serif text-[clamp(19px,2.6vw,25px)] text-white/90 leading-snug mb-7 max-w-[30ch]">
              En Santurbán nace el agua de más de dos millones de personas. El Ministerio
              la protegió y la revocó siete días después.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#unirse" className="btn btn-amber">Quiero ser defensor ↗</a>
              <a href="#acciones" className="btn btn-ghost text-white">Firmar y radicar</a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 divide-y divide-white/15">
            <div className="pb-4">
              <div className={'font-display font-extrabold text-[clamp(38px,8vw,52px)] leading-none tabular-nums ' + shadow}>{dias}</div>
              <div className="text-[11px] tracking-[.14em] uppercase text-white/70 mt-1.5">días sin protección</div>
            </div>
            <div className="py-4">
              <div className={'font-display font-extrabold text-[clamp(38px,8vw,52px)] leading-none ' + shadow}>2M+</div>
              <div className="text-[11px] tracking-[.14em] uppercase text-white/70 mt-1.5">personas beben esta agua</div>
            </div>
            <div className="pt-4">
              <div className="font-display font-extrabold text-[22px] leading-none text-agua-claro">13 OCT 2026</div>
              <div className="text-[11px] tracking-[.12em] uppercase text-white/70 mt-1.5">fecha límite para reabrir la consulta</div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map(([t, d], i) => (
            <div key={i} className="rounded-xl border border-white/20 bg-bosque-hondo/35 backdrop-blur-sm p-4">
              <div className="font-display font-bold text-[12px] tracking-[.08em] uppercase text-agua-claro mb-1.5">{t}</div>
              <div className="text-[13px] text-white/85 leading-snug">{d}</div>
            </div>
          ))}
        </div>
      </div>

      <OlasAbajo color="#159FD8" className="absolute inset-x-0 bottom-0 h-[60px] sm:h-[92px] md:h-[116px] z-[5]" />
    </section>
  );
}
