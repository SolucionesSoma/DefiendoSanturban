import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { Ico, P } from './Iconos';
import { ENLACES } from '../lib/config';

const FORMULARIO_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc26HGhArqUU0MXtNypM0VbSKsA7JzgzQ2GjqtVmx5RsVeYZA/viewform?usp=sharing&ouid=104226635551109490708';
const FORMULARIO_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc26HGhArqUU0MXtNypM0VbSKsA7JzgzQ2GjqtVmx5RsVeYZA/viewform?embedded=true';

function Puerta({ href, icono, titulo, sub }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="tarjeta tarjeta-enlace flex items-center gap-4 p-5">
      <span className="shrink-0 w-12 h-12 rounded-xl bg-bosque text-white grid place-items-center">
        <Ico d={icono} className="w-5 h-5" />
      </span>
      <span className="flex-1 min-w-0">
        <b className="block font-display font-bold text-[15px] leading-tight">{titulo}</b>
        <small className="block text-[13px] text-[var(--texto-suave)] mt-0.5">{sub}</small>
      </span>
      <Ico d={P.flecha} className="w-5 h-5 text-hoja shrink-0" />
    </a>
  );
}

export default function SeccionUnirse() {
  const beneficios = [
    'Reciba avisos y novedades de la campaña',
    'Participe en las acciones ciudadanas',
    'Mantenga contacto directo con el Comité',
  ];

  return (
    <section id="unirse" className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 md:pb-24">
      <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-12">
        <Reveal>
          <span className="block font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-none text-hoja/25 mb-1">01</span>
          <Eyebrow sobre="Súmese a la campaña">Sea <b>defensor o defensora de Santurbán</b></Eyebrow>
        </Reveal>
        <Reveal as="p" className="text-[15px] text-[var(--texto-suave)] leading-relaxed md:text-right md:max-w-[40ch] md:justify-self-end">
          Complete la inscripción y únase a una ciudadanía organizada para defender el agua y el páramo.
        </Reveal>
      </div>

      <div className="grid gap-3 mb-8">
        <Reveal>
          <Puerta
            href={ENLACES.whatsapp}
            icono={P.wa}
            titulo="Entrar al grupo de WhatsApp"
            sub="Avisos, coordinación y novedades de la campaña"
          />
        </Reveal>
      </div>

      <Reveal className="tarjeta overflow-hidden">
        <div className="grid md:grid-cols-[34%_1fr]">
          <div className="en-verde bg-bosque text-white p-7 md:p-9">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 font-display text-[10px] font-bold tracking-[.12em] uppercase text-agua-claro mb-5">
              Inscripción ciudadana
            </span>
            <h3 className="font-display font-bold text-[24px] leading-tight mb-3">Su voz también protege Santurbán</h3>
            <p className="text-white/72 text-[14px] leading-relaxed mb-7">
              Complete el formulario en menos de dos minutos. Sus respuestas llegarán directamente al registro de la campaña.
            </p>
            <ul className="space-y-3">
              {beneficios.map((beneficio) => (
                <li key={beneficio} className="flex gap-2.5 text-[13.5px] text-white/90">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-white/15 text-agua-claro grid place-items-center mt-px">
                    <Ico d={P.check} className="w-3 h-3" />
                  </span>
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-3 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-2 pb-4">
              <div>
                <h4 className="font-display font-bold text-[17px]">Complete su inscripción</h4>
                <p className="text-[13px] text-[var(--texto-suave)] mt-0.5">Formulario oficial de la campaña #DefiendoSanturban.</p>
              </div>
              <a href={FORMULARIO_URL} target="_blank" rel="noopener" className="btn btn-ghost btn-sm text-bosque self-start sm:self-auto whitespace-nowrap">
                Abrir formulario aparte ↗
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-[var(--linea)] bg-[var(--pagina)]">
              <iframe
                src={FORMULARIO_EMBED_URL}
                title="Formulario de inscripción para defender Santurbán"
                loading="lazy"
                className="block w-full h-[780px] sm:h-[900px] bg-white"
              >
                Cargando formulario…
              </iframe>
            </div>
            <p className="text-[11.5px] text-[var(--texto-suave)] px-2 pt-3 leading-relaxed">
              Si el formulario no aparece, use el botón “Nueva pestaña”.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
