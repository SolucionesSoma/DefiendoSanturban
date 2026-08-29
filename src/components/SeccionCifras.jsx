import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { Ico, P } from './Iconos';

export default function SeccionCifras({ dias }) {
  const items = [
    [P.calendario, String(dias), 'días sin protección'],
    [P.hoja, '1.499', 'hectáreas de reserva'],
    [P.balanza, '13 OCT', 'fecha límite 2026'],
    [P.alerta, '15', 'días hábiles de plazo'],
    [P.gota, '2M+', 'personas abastecidas'],
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-8 md:mb-12">
        <Reveal><Eyebrow sobre="El expediente en números">Cifras que <b>fijan la urgencia</b></Eyebrow></Reveal>
        <Reveal as="p" className="text-[15px] text-[var(--texto-suave)] leading-relaxed md:text-right md:max-w-[38ch] md:justify-self-end">
          Todo verificable en las resoluciones y el Documento Técnico de Soporte del propio Ministerio.
        </Reveal>
      </div>
      <Reveal className="tarjeta p-2 md:p-3">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[var(--linea)]">
          {items.map(([d, n, l], i) => (
            <div key={i} className="flex flex-col items-center text-center gap-1.5 p-5">
              <span className="w-9 h-9 rounded-lg bg-hoja/12 text-bosque grid place-items-center">
                <Ico d={d} className="w-4.5 h-4.5" />
              </span>
              <span className="font-display font-extrabold text-[clamp(22px,4vw,32px)] leading-none">{n}</span>
              <span className="text-[11px] uppercase tracking-[.06em] text-[var(--texto-suave)] leading-tight">{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
