import { useState } from 'react';
import { Ico, P } from './Iconos';

export default function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [
    ['#unirse', 'Únase'], ['#acciones', 'Acciones'], ['#piezas', 'Difunda'],
    ['#evidencia', 'La evidencia'], ['#fechas', 'Fechas'],
  ];
  return (
    <header className="en-verde sticky top-0 z-40 bg-bosque text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <img src="/assets/logo.jpg" alt="Comité para la Defensa del Agua y el Páramo de Santurbán" className="w-8 h-8 rounded-md object-cover" />
          <span className="font-display font-extrabold text-[12px] tracking-[.14em] uppercase leading-[1.15]">Kit por<br />Santurbán</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-display font-semibold text-[12px] tracking-[.08em] uppercase text-white/75">
          {enlaces.map(([h, t]) => <a key={h} href={h} className="hover:text-agua-claro transition-colors">{t}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#unirse" className="hidden sm:inline-flex items-center rounded-full border border-white/40 font-display font-semibold text-[11.5px] tracking-[.06em] uppercase px-4 py-2 hover:bg-white hover:text-bosque transition-colors">
            Inscribirse ↗
          </a>
          <button className="md:hidden grid place-items-center w-9 h-9" onClick={() => setAbierto(!abierto)} aria-label="Menú">
            <Ico d={P.menu} className="w-5 h-5" />
          </button>
        </div>
      </div>
      {abierto && (
        <nav className="md:hidden bg-bosque-hondo px-5 sm:px-8">
          {enlaces.map(([h, t]) => <a key={h} href={h} onClick={() => setAbierto(false)} className="block py-3 font-display font-semibold text-[12px] tracking-[.1em] uppercase border-b border-white/10 last:border-0">{t}</a>)}
        </nav>
      )}
    </header>
  );
}
