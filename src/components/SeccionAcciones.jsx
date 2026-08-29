import { useState } from 'react';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { ARCHIVOS } from '../lib/config';
import { bajarUrl, useCopiar } from '../lib/utils';

const ACCIONES = [
  {
    n: 1, titulo: 'Derecho de petición al Ministerio de Ambiente',
    sub: 'Desde el primer día. Es el que radica todo el mundo.',
    pasos: [
      ['Llene los corchetes y bórrelos.', 'Nombre, cédula, ciudad, fecha, correo y teléfono.'],
      ['Firme y guárdelo en PDF.', 'Adjunte la foto de su cédula por ambas caras.'],
      ['Envíe el correo', 'con el PDF, copiando los campos de abajo.'],
      ['Guarde el radicado', 'y cuente quince días hábiles. Sin respuesta de fondo, use la tutela.'],
    ],
    para: 'info@minambiente.gov.co',
    asunto: 'Derecho de petición en interés general. Reapertura de la consulta pública. Reserva La Baja, macizo Occidental de Santurbán',
    cuerpo: 'Buen día. Adjunto derecho de petición en interés general dirigido al Ministerio de Ambiente y Desarrollo Sostenible, relacionado con la reapertura de la etapa de consulta pública del proyecto de reserva definitiva La Baja, en el macizo Occidental de Santurbán. Agradezco confirmar el número de radicado a este mismo correo.',
    botones: [['peticion', 'Formato en Word'], ['inst1', 'Instructivo (PDF)']],
    abierto: true,
  },
  {
    n: 2, titulo: 'Acción preventiva ante la Procuraduría',
    sub: 'El mismo día. Pone a un órgano de control a vigilar el expediente.',
    pasos: [
      ['Llene los corchetes, firme y guarde en PDF.', ''],
      ['Adjunte su petición al Ministerio', 'con la constancia de envío, si ya la radicó.'],
      ['Envíe el correo', 'pidiendo que se dirija a la Delegada para Asuntos Ambientales y Agrarios.'],
    ],
    para: 'quejas@procuraduria.gov.co',
    asunto: 'Solicitud de función preventiva. Omisión del Ministerio de Ambiente. Reserva La Baja, macizo Occidental de Santurbán',
    cuerpo: 'Buen día. Adjunto solicitud de ejercicio de la función preventiva y de control de gestión frente a la omisión del Ministerio de Ambiente y Desarrollo Sostenible en la conclusión de la actuación administrativa retrotraída por la Resolución 1037 de 2026. Solicito que se dirija a la Procuraduría Delegada para Asuntos Ambientales y Agrarios y que se me informe el número de radicado a este mismo correo.',
    botones: [['procuraduria', 'Formato en Word'], ['inst2', 'Instructivo (PDF)']],
  },
  {
    n: 3, titulo: 'Acción de tutela, si no contestan',
    sub: 'Cuando venzan los quince días hábiles, o si la respuesta no resuelve.',
    pasos: [
      ['Escoja el hecho tercero:', 'el formato trae una versión para el silencio y otra para la respuesta que no resuelve. Borre la que no aplique.'],
      ['Anexe la petición y su constancia de envío.', 'Sin esos dos anexos la tutela se cae.'],
      ['Envíela por correo o en la oficina de reparto.', 'No se necesita abogado. El juez falla en diez días.'],
    ],
    para: 'soportetutelaenlinea@deaj.ramajudicial.gov.co',
    asunto: 'Acción de tutela. Derecho de petición. Accionado: Ministerio de Ambiente y Desarrollo Sostenible',
    cuerpo: 'Buen día. Presento acción de tutela por la vulneración del derecho fundamental de petición contra el Ministerio de Ambiente y Desarrollo Sostenible, para el reparto que corresponda. Adjunto el escrito de tutela firmado, copia de la petición radicada ante la entidad y la constancia de su envío. Agradezco confirmar el radicado y el juzgado de reparto a este mismo correo.',
    botones: [['tutela', 'Formato en Word'], ['inst3', 'Instructivo (PDF)']],
  },
];

function BloqueCorreo({ accion, idx }) {
  const { copiadoId, copiar } = useCopiar();
  const filas = [
    ['Para', accion.para, true],
    ['Asunto', accion.asunto, false],
    ['Cuerpo', accion.cuerpo, false],
  ];
  return (
    <div className="rounded-2xl bg-[var(--pagina)] border border-[var(--linea)] border-l-[3px] border-l-agua px-4 py-1 my-4">
      {filas.map(([et, va, dir], i) => {
        const id = idx + '-' + i;
        return (
          <div key={et} className={'flex flex-wrap gap-2 sm:gap-3 py-3 text-[14.5px] ' + (i > 0 ? 'border-t border-dashed border-[var(--linea)]' : '')}>
            <div className="font-display text-[10px] font-bold tracking-[.1em] uppercase text-agua-hondo sm:w-[62px] sm:shrink-0 pt-0.5">{et}</div>
            <div className={'flex-1 min-w-[60%] break-words ' + (dir ? 'font-mono text-[13px] font-medium' : '')}>{va}</div>
            <button onClick={() => copiar(va, id)} className="self-start rounded-full border border-[var(--linea)] text-[11.5px] font-display font-semibold px-3 py-1 hover:border-hoja hover:text-hoja transition-colors">
              {copiadoId === id ? 'Copiado ✓' : 'Copiar'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

function Accion({ a, idx }) {
  const [open, setOpen] = useState(!!a.abierto);
  const [descargado, setDescargado] = useState(null);
  function descargar(clave) {
    const url = ARCHIVOS[clave]; if (!url) return;
    bajarUrl(url);
    setDescargado(clave);
    setTimeout(() => setDescargado(null), 1800);
  }
  return (
    <details className="acc tarjeta border-t-[3px] border-t-hoja mb-4 overflow-hidden" open={open} onToggle={e => setOpen(e.target.open)}>
      <summary className="flex items-start gap-4 p-5 md:p-6">
        <span className="font-display font-extrabold text-[clamp(28px,5vw,44px)] leading-none text-hoja/30 shrink-0">{String(a.n).padStart(2, '0')}</span>
        <span className="flex-1 min-w-0 pt-1">
          <b className="block font-display font-bold text-[16.5px] leading-snug">{a.titulo}</b>
          <em className="block not-italic text-[13px] text-[var(--texto-suave)] mt-0.5">{a.sub}</em>
        </span>
        <span className="sig font-display text-[22px] leading-none text-hoja mt-2 shrink-0">+</span>
      </summary>
      <div className="px-5 md:px-6 pb-6 pt-1 border-t border-[var(--linea)]">
        <ol className="grid gap-2.5 my-4">
          {a.pasos.map((p, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[var(--texto-suave)]">
              <span className="font-display font-bold text-[12px] w-[22px] h-[22px] rounded-md grid place-items-center bg-hoja/15 text-bosque shrink-0 mt-0.5">{i + 1}</span>
              <span><b className="text-[var(--texto)] font-semibold">{p[0]}</b> {p[1]}</span>
            </li>
          ))}
        </ol>
        <BloqueCorreo accion={a} idx={'a' + idx} />
        <div className="flex flex-wrap gap-2.5">
          {a.botones.map(([clave, etiqueta], i) => (
            <button key={clave} onClick={() => descargar(clave)}
              className={'btn btn-sm ' + (i === 0 ? 'btn-amber' : 'btn-ghost text-bosque')}>
              {descargado === clave ? 'Descargado ✓' : etiqueta + ' ↓'}
            </button>
          ))}
        </div>
      </div>
    </details>
  );
}

export default function SeccionAcciones() {
  return (
    <section id="acciones" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-12">
        <Reveal>
          <span className="block font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-none text-hoja/25 mb-1">02</span>
          <Eyebrow sobre="Acciones jurídicas">Usted escribe. <b>El Estado responde.</b></Eyebrow>
        </Reveal>
        <Reveal as="p" className="text-[15px] text-[var(--texto-suave)] leading-relaxed md:text-right md:max-w-[42ch] md:justify-self-end">
          Descargue el formato, fírmelo y envíelo por correo. Desde que llega, corre un plazo legal de quince días hábiles.
        </Reveal>
      </div>
      {ACCIONES.map((a, i) => <Accion key={a.n} a={a} idx={i} />)}
      <p className="text-[14px] text-[var(--texto-suave)] leading-relaxed mt-6"><b className="text-[var(--texto)]">El agua no tiene color político.</b> Los escritos van en tono ponderado y sin reproche a nadie, para que los pueda firmar quien apoya al Gobierno y quien no. El formato es suyo: lo firma usted, en nombre propio y en la defensa de Santurbán. Léalo antes de enviarlo.</p>
    </section>
  );
}
