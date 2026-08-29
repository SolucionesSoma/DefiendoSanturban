import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { Ico, P } from './Iconos';

const PUNTOS = [
  [P.alerta, 'Protegida y revocada en 7 días', 'El 6 de agosto de 2026 el Ministerio declaró la reserva La Baja. El 13 de agosto la revocó justificandose en un fallo judicial.'],
  [P.calendario, 'Consulta cerrada, sin fecha', 'Sin embargo, el fallo ordenó reiniciar la consulta pública en 48 horas. Esto no aparece en ningún artículo de la Resolución 1037.'],
  [P.balanza, 'Los estudios siguen vigentes', 'La propia Resolución dice que la revocatoria no cuestiona los fundamentos técnicos, científicos ni ambientales que soporta la reserva definitiva en Santurbán.'],
  [P.gota, 'La misma agua, arriba y abajo', 'El Servicio Geológico midió la firma del agua del páramo y la de los túneles de la mina. Coinciden, tienen el mismo ADN.'],
];

export default function SeccionPorque() {
  return (
    <section id="porque" className="bg-agua text-white sobre-oscuro">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-14">
          <Reveal>
            <Eyebrow sobre="Por qué actuar">Una reserva que <b>duró siete días</b></Eyebrow>
          </Reveal>
          <Reveal as="p" className="text-[15px] text-white/80 leading-relaxed md:text-right md:max-w-[40ch] md:justify-self-end">
            El Comité exige que vuelva la reserva definitiva de la Baja en Santurbán.
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PUNTOS.map(([d, t, q], i) => (
            <Reveal key={i} className="tarjeta text-[var(--texto)] p-5">
              <span className="w-11 h-11 rounded-xl bg-agua/12 text-agua-hondo grid place-items-center mb-3">
                <Ico d={d} className="w-5 h-5" />
              </span>
              <b className="block font-display font-bold text-[15px] leading-snug mb-1.5">{t}</b>
              <small className="block text-[13px] text-[var(--texto-suave)] leading-relaxed">{q}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
