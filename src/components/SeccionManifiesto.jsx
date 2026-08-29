import Reveal from './Reveal';

export default function SeccionManifiesto() {
  return (
    <section className="en-verde bg-bosque text-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-24 text-center">
        <Reveal>
          <h2 className="titulo en-bosque text-[clamp(24px,4.6vw,40px)] mb-5">
            Defender el páramo es <b>defender el agua de tod@s</b>
          </h2>
          <p className="text-white/75 text-[15.5px] leading-relaxed">
            El Comité no pide detener nada por decreto. Pide que un trámite retrotraído se
            concluya conforme a la ley, con la consulta pública abierta. Lo firma quien votó
            por este Gobierno y quien no: el agua de Bucaramanga la beben los dos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
