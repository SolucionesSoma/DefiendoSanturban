import { CORREO } from '../lib/config';

const SECCIONES = [
  ['#unirse', 'Únase'], ['#acciones', 'Acciones jurídicas'], ['#piezas', 'Difunda'],
  ['#evidencia', 'La evidencia'], ['#fechas', 'Fechas'],
];

export default function Pie() {
  return (
    <footer className="bg-bosque-hondo text-white/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-[1.6fr,1fr,1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/assets/logo.jpg" alt="" className="w-9 h-9 rounded-md object-cover" />
              <span className="font-display font-extrabold text-[12px] tracking-[.14em] uppercase text-white leading-[1.15]">Kit por<br />Santurbán</span>
            </div>
            <p className="text-[14px] leading-relaxed max-w-[46ch]">
              Comité para la Defensa del Agua y el Páramo de Santurbán. Escríbanos a{' '}
              <a href={'mailto:' + CORREO} className="text-agua-claro font-semibold hover:underline">{CORREO}</a>.
            </p>
          </div>
          <nav>
            <h4 className="font-display font-bold text-[11px] tracking-[.14em] uppercase text-white/50 mb-3">Secciones</h4>
            <ul className="space-y-2 text-[14px]">
              {SECCIONES.map(([h, t]) => <li key={h}><a href={h} className="hover:text-agua-claro transition-colors">{t}</a></li>)}
            </ul>
          </nav>
          <div>
            <h4 className="font-display font-bold text-[11px] tracking-[.14em] uppercase text-white/50 mb-3">Contacto</h4>
            <a href={'mailto:' + CORREO} className="text-[14px] hover:text-agua-claro transition-colors break-words">{CORREO}</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/12 text-[12.5px] leading-relaxed text-white/55 space-y-3">
          <p>Esta página no guarda ni transmite datos personales: todo se procesa en su propio teléfono o computador. Los datos que usted envíe al inscribirse viajan de su correo al del Comité, y el Comité los trata conforme al régimen de habeas data de la Ley 1581 de 2012: solo para contactarlo y enviarle información sobre Santurbán, sin cederlos a terceros. Puede pedir su corrección o supresión en el mismo correo. Los formatos jurídicos son modelos; quien los firma es responsable de leerlos y de lo que radica.</p>
          <p>Fotografías del páramo: colaboradores de <a href="https://commons.wikimedia.org/wiki/Category:P%C3%A1ramo_de_Santurb%C3%A1n" target="_blank" rel="noopener" className="text-agua-claro hover:underline">Wikimedia Commons</a> (CC BY-SA 3.0 / 4.0). El crédito de cada autor aparece sobre la imagen en la galería.</p>
          <p className="pt-2">© {new Date().getFullYear()} Comité para la Defensa del Agua y el Páramo de Santurbán.</p>
        </div>
      </div>
    </footer>
  );
}
