/* Barra de acción fija en móvil. */
export default function BarraAccion() {
  return (
    <div className="barra-accion md:hidden">
      <div className="max-w-6xl mx-auto px-3 py-2.5 flex gap-2">
        <a href="#unirse" className="btn btn-ghost btn-sm flex-1 text-[var(--texto)]">Únase</a>
        <a href="#acciones" className="btn btn-amber btn-sm flex-1">Radicar →</a>
      </div>
    </div>
  );
}
