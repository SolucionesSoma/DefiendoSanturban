import { useState } from 'react';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { Ico, P } from './Iconos';
import { ENLACES, CORREO } from '../lib/config';

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

function Campo({ label, value, onChange, type = 'text', autoComplete, placeholder, wide }) {
  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <label className="block font-display text-[10.5px] font-semibold tracking-[.1em] uppercase text-[var(--texto-suave)] mb-1.5">{label}</label>
      <input className="campo-input" type={type} value={value} autoComplete={autoComplete} placeholder={placeholder}
        onChange={e => onChange(e.target.value)} />
    </div>
  );
}

export default function SeccionUnirse() {
  const [campos, setCampos] = useState({ nombre: '', municipio: '', whatsapp: '', correo: '', redes: '' });
  const [autorizo, setAutorizo] = useState(false);
  const [error, setError] = useState('');

  function set(k, v) { setCampos(c => ({ ...c, [k]: v })); }

  function enviar(ev) {
    ev.preventDefault();
    const falta = [];
    if (!campos.nombre.trim()) falta.push('su nombre');
    if (!campos.municipio.trim()) falta.push('su municipio');
    if (!campos.whatsapp.trim() && !campos.correo.trim()) falta.push('un WhatsApp o un correo para contactarlo');
    if (falta.length) { setError('Falta ' + falta.join(', ') + '.'); return; }
    if (!autorizo) { setError('Para inscribirse necesitamos su autorización de tratamiento de datos. Marque la casilla.'); return; }
    setError('');
    const cuerpo =
      'Quiero inscribirme como defensor o defensora de Santurbán.\n\n' +
      'Nombre: ' + campos.nombre + '\n' +
      'Municipio: ' + campos.municipio + '\n' +
      'WhatsApp: ' + (campos.whatsapp || 'no indicado') + '\n' +
      'Correo: ' + (campos.correo || 'no indicado') + '\n' +
      'Redes sociales: ' + (campos.redes || 'no indicadas') + '\n\n' +
      'Autorizo al Comité para la Defensa del Agua y el Páramo de Santurbán el tratamiento de mis datos personales, conforme a la Ley 1581 de 2012, para contactarme y enviarme información sobre Santurbán y las acciones del Comité.';
    window.location.href = 'mailto:' + CORREO +
      '?subject=' + encodeURIComponent('Inscripción de defensor de Santurbán: ' + campos.nombre) +
      '&body=' + encodeURIComponent(cuerpo);
  }

  const puertaWa = ENLACES.whatsapp
    ? { href: ENLACES.whatsapp, titulo: 'Entrar a los grupos de WhatsApp', sub: 'Avisos y coordinación, todos los días' }
    : {
        href: 'mailto:' + CORREO + '?subject=' + encodeURIComponent('Quiero entrar a los grupos de WhatsApp por Santurbán') + '&body=' + encodeURIComponent('Buen día. Quiero que me agreguen a los grupos de WhatsApp del Comité.\n\nMi nombre: \nMi número de WhatsApp: \n'),
        titulo: 'Entrar a los grupos de WhatsApp', sub: 'Escríbanos y le enviamos la invitación',
      };

  const beneficios = ['Avisos antes que la prensa', 'Piezas y formatos listos para usar', 'Voz y voto en la asamblea del Comité'];

  return (
    <section id="unirse" className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 md:pb-24">
      <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-12">
        <Reveal>
          <span className="block font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-none text-hoja/25 mb-1">01</span>
          <Eyebrow sobre="Un solo clic">Sea <b>defensor o defensora de Santurbán</b></Eyebrow>
        </Reveal>
        <Reveal as="p" className="text-[15px] text-[var(--texto-suave)] leading-relaxed md:text-right md:max-w-[40ch] md:justify-self-end">
          Entérese antes que la prensa, reciba las piezas y los formatos, y decida con el Comité en asamblea.
        </Reveal>
      </div>

      <div className="grid gap-3 mb-8">
        <Reveal><Puerta href={puertaWa.href} icono={P.wa} titulo={puertaWa.titulo} sub={puertaWa.sub} /></Reveal>
        {ENLACES.telegram && <Reveal><Puerta href={ENLACES.telegram} icono={P.tg} titulo="Unirse al canal de Telegram" sub="Documentos y piezas, siempre a la mano" /></Reveal>}
      </div>

      <Reveal className="tarjeta overflow-hidden grid md:grid-cols-[38%_1fr]">
        <div className="en-verde bg-bosque text-white p-7 md:p-9">
          <h3 className="font-display font-bold text-[20px] leading-tight mb-3">Inscríbase como defensor o defensora</h3>
          <p className="text-white/70 text-[13.5px] leading-relaxed mb-6">
            El Comité lo contacta. Al enviar, se abre su propio correo con la inscripción lista.
            Nada se guarda en esta página.
          </p>
          <ul className="space-y-3">
            {beneficios.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] text-white/90">
                <span className="shrink-0 w-5 h-5 rounded-full bg-white/15 text-agua-claro grid place-items-center mt-px">
                  <Ico d={P.check} className="w-3 h-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={enviar} noValidate className="p-7 md:p-9">
          <div className="grid sm:grid-cols-2 gap-x-5 gap-y-4 mb-5">
            <Campo label="Nombre completo" value={campos.nombre} onChange={v => set('nombre', v)} autoComplete="name" />
            <Campo label="Municipio" value={campos.municipio} onChange={v => set('municipio', v)} autoComplete="address-level2" />
            <Campo label="WhatsApp" type="tel" value={campos.whatsapp} onChange={v => set('whatsapp', v)} autoComplete="tel" placeholder="Opcional si deja correo" />
            <Campo label="Correo electrónico" type="email" value={campos.correo} onChange={v => set('correo', v)} autoComplete="email" placeholder="Opcional si deja WhatsApp" />
            <Campo wide label="Sus redes sociales (opcional)" value={campos.redes} onChange={v => set('redes', v)} placeholder="@usuario de Instagram, X, TikTok o Facebook" />
          </div>

          <label className="flex items-start gap-3 text-[12.5px] leading-snug text-[var(--texto-suave)] rounded-xl bg-[var(--pagina)] border border-[var(--linea)] p-3.5 mb-5 cursor-pointer">
            <input type="checkbox" checked={autorizo} onChange={e => setAutorizo(e.target.checked)} className="w-[18px] h-[18px] mt-0.5 accent-hoja shrink-0" />
            <span>Autorizo al Comité para la Defensa del Agua y el Páramo de Santurbán el tratamiento de mis datos personales, conforme a la Ley 1581 de 2012, para contactarme y enviarme información sobre Santurbán y las acciones del Comité.</span>
          </label>

          <button type="submit" className="btn btn-amber w-full">Quiero ser defensor de Santurbán</button>
          {error && <div className="mt-3 text-[13.5px] text-[#8A2A15] bg-[#FBE7E0] border border-[#F0C4B6] rounded-xl px-3.5 py-2.5">{error}</div>}
          <p className="text-[11.5px] text-[var(--texto-suave)] mt-3 leading-relaxed">
            Sus datos viajan directamente de su correo al del Comité, que los trata conforme a la ley de habeas data.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
