import Reveal from './Reveal';
import { CORREO } from '../lib/config';

export default function SeccionContacto() {
  return (
    <section className="en-verde bg-bosque text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 md:gap-14 md:items-center">
          <Reveal>
            <p className="font-display font-semibold text-[11px] tracking-[.2em] uppercase text-agua-claro mb-3">Sume su voz</p>
            <h2 className="titulo en-bosque text-[clamp(26px,5vw,44px)] mb-4">
              El agua de Bucaramanga <b>nos necesita a todos</b>
            </h2>
            <p className="text-white/75 text-[15.5px] leading-relaxed max-w-[52ch]">
              Escríbanos si su organización, su barrio o su gremio quiere sumarse. Coordinamos con usted.
            </p>
          </Reveal>
          <Reveal className="md:justify-self-end">
            <a href={'mailto:' + CORREO} className="btn btn-amber">{CORREO}</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
