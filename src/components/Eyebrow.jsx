/* Rótulo de sección: barra ámbar + línea pequeña (contexto) + línea grande
   (título de la sección, con la palabra clave en <b>). */
export default function Eyebrow({ sobre, children, className = '' }) {
  return (
    <div className={'eyebrow2 ' + className}>
      {sobre && <span className="peque">{sobre}</span>}
      <span className="grande">{children}</span>
    </div>
  );
}
