import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { Ico, P } from './Iconos';
import { ENLACES } from '../lib/config';

const PREGUNTAS = [
  ['"Al Ministerio lo obligó un fallo de tutela."', 'El fallo ordenó dos cosas, no una. Dejar sin efectos el trámite y en su lugar reiniciar íntegramente la etapa de consulta pública, en cuarenta y ocho horas. El Ministerio hizo lo primero. Lo segundo no aparece en ningún artículo de la Resolución 1037.'],
  ['"Los estudios estaban mal hechos."', 'La propia Resolución 1037 dice lo contrario: la revocatoria no constituye pronunciamiento contra los fundamentos técnicos, científicos y ambientales de la reserva. El comunicado del 19 de agosto lo repitió.'],
  ['"Esa zona no es páramo."', 'La línea de delimitación es administrativa y está en discusión judicial. Pero el agua no consulta esa línea: el Servicio Geológico midió su firma, como un ADN, y la del agua del páramo coincide con la de los túneles de la mina. Es el mismo sistema.'],
  ['"La minería moderna es segura y trae empleo."', 'Puede discutirse en abstracto. Aquí el punto es concreto: la empresa tiene proceso sancionatorio ambiental abierto, y el contrato 0095-68 cubre 379 de las 1.499 hectáreas de la reserva revocada, según el Documento Técnico de Soporte del propio Ministerio. El Comité sostiene que el proyecto Soto Norte no puede ejecutarse sobre la zona que recarga el agua de Bucaramanga. Los escritos del kit piden una cosa: que la reserva se implemente. Quien firma el kit solo pide eso.'],
  ['"¿Y la minería ilegal qué? De eso no dicen nada."', 'Revocar la reserva tampoco combate la minería ilegal: ninguna máquina ilegal se detiene porque desaparezca una resolución. Al contrario, el limbo le sirve. Y el Comité no guarda silencio: denunció ante la Fiscalía General de la Nación la minería ilegal en Santurbán. Defender el páramo es defenderlo de todas las máquinas, con título minero o sin él.'],
  ['"Esto es política contra el Gobierno."', 'Los escritos no juzgan al Gobierno ni a sus funcionarios: piden que se proteja Santurbán, fuente de agua de más de 2 millones de personas. Los firma quien votó por este Gobierno y quien no. El agua de Bucaramanga la toman los dos.'],
];

export default function SeccionEvidencia() {
  return (
    <section id="evidencia" className="bg-agua text-white sobre-oscuro">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-12">
          <Reveal>
            <span className="block font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-none text-white/25 mb-1">04</span>
            <Eyebrow sobre="La evidencia">El agua del páramo y la mina, <b>el mismo ADN</b></Eyebrow>
          </Reveal>
          <Reveal as="p" className="text-[15px] text-white/80 leading-relaxed md:text-right md:max-w-[44ch] md:justify-self-end">
            El Servicio Geológico Colombiano midió la firma química de las dos aguas. Coinciden. Es una sola agua, y de ella se abastece el área metropolitana de Bucaramanga.
          </Reveal>
        </div>

        <Reveal as="figure" className="mb-10">
          <div className="tarjeta p-3 rotate-[-1deg]">
            <div className="rounded-2xl overflow-hidden overflow-x-auto bg-white">
              <img src="/assets/santurban-adn.jpg" alt="Lámina del sistema hídrico de Santurbán: el páramo, las venas de agua subterránea, el túnel exploratorio del proyecto Soto Norte y, abajo, el río Suratá, el acueducto metropolitano y Bucaramanga." className="min-w-[720px] w-full block" />
            </div>
          </div>
          <figcaption className="text-[12.5px] text-white/60 leading-relaxed mt-4 max-w-[70ch]">Esquema del Comité sobre el estudio de isótopos estables del Servicio Geológico Colombiano, recogido en el Documento Técnico de Soporte del Ministerio de Ambiente.</figcaption>
        </Reveal>

        <Reveal className="tarjeta text-[var(--texto)] p-6 md:p-7 mb-12">
          <h3 className="font-display font-bold text-[19px] mb-1.5">Toda la información técnica, en un solo lugar</h3>
          <p className="text-[var(--texto-suave)] text-[15px] mb-4 max-w-[54ch]">Las resoluciones, el fallo de tutela, los estudios y los documentos del expediente, organizados por el Comité en una carpeta abierta.</p>
          <a href={ENLACES.informacion} target="_blank" rel="noopener" className="btn btn-amber btn-sm">
            <Ico d={P.externo} className="w-4 h-4" /> Abrir el archivo del expediente
          </a>
        </Reveal>

        <Reveal>
          <h3 className="titulo en-agua text-[clamp(20px,3.6vw,28px)] mb-1">Combate <b>la desinformación</b></h3>
          <p className="text-white/70 text-[15px] mb-5">Seis frases que va a oír, y lo que responde el expediente.</p>
        </Reveal>
        <div className="grid gap-3">
          {PREGUNTAS.map(([q, r], i) => (
            <details key={i} className="faq tarjeta text-[var(--texto)] p-5">
              <summary className="flex items-start justify-between gap-4 font-display font-bold text-[15.5px] leading-snug">
                <span>{q}</span>
                <span className="mas shrink-0 text-hoja text-[20px] leading-none mt-0.5">+</span>
              </summary>
              <p className="pt-3 text-[var(--texto-suave)] text-[15px] leading-relaxed">{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
