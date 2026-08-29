import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { EVENTOS } from '../lib/config';
import { urlAgenda } from '../lib/utils';

const MESES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

export default function SeccionFechas() {
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  let primeroFuturo = -1;
  const filas = EVENTOS.map((e, i) => {
    const fe = new Date(e.y, e.m - 1, e.d);
    const pasado = fe < hoy;
    if (!pasado && primeroFuturo < 0) primeroFuturo = i;
    const esHoy = fe.getTime() === hoy.getTime();
    const faltan = Math.round((fe - hoy) / 86400000);
    const etiqueta = esHoy ? 'Es hoy' : (pasado ? 'Ya pasó' : (faltan === 1 ? 'Mañana' : 'En ' + faltan + ' días'));
    return { e, i, pasado, etiqueta };
  });

  return (
    <section id="fechas" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-14">
        <Reveal>
          <span className="block font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-none text-hoja/25 mb-1">05</span>
          <Eyebrow sobre="Calendario por Santurbán">Las fechas, <b>en su bolsillo</b></Eyebrow>
        </Reveal>
        <Reveal as="p" className="text-[15px] text-[var(--texto-suave)] leading-relaxed md:text-right md:max-w-[40ch] md:justify-self-end">
          Toque Agendar y la fecha queda en el calendario de su teléfono, con recordatorio. Nada se registra aquí.
        </Reveal>
      </div>

      <div className="relative pl-6 sm:pl-8">
        <span className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-[var(--linea)]" aria-hidden="true" />
        <div className="grid gap-5">
          {filas.map(({ e, i, pasado, etiqueta }) => (
            <Reveal key={i} className={'relative ' + (pasado ? 'opacity-50' : '')}>
              <span className={'absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full ring-4 ring-[var(--pagina)] ' + (i === primeroFuturo ? 'bg-agua' : 'bg-hoja')} aria-hidden="true" />
              <div className="tarjeta p-5">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-display font-extrabold text-[15px] tabular-nums">{e.d} {MESES[e.m - 1]}</span>
                  <span className={'font-display text-[10px] font-semibold tracking-[.1em] uppercase rounded-full px-2.5 py-1 ' + (pasado ? 'bg-[var(--linea)] text-[var(--texto-suave)]' : 'bg-hoja/15 text-bosque')}>{etiqueta}</span>
                </div>
                <b className="block font-display font-bold text-[16px] leading-snug mb-0.5">{e.t}</b>
                <p className="text-[14px] text-[var(--texto-suave)] leading-snug mb-2">{e.q}</p>
                {!pasado && (
                  <a href={urlAgenda(e)} target="_blank" rel="noopener" className="btn btn-ghost btn-sm text-bosque">
                    Agendar →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
