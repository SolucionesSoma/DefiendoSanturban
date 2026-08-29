/**
 * Mapa de curvas de nivel al estilo de un plano topográfico de verdad,
 * no una "montaña" ilustrada. El dato que anota (+1.300 m) es el mismo
 * que citan el derecho de petición y el instructivo del Comité: la
 * diferencia de altura entre el páramo y los túneles de la mina.
 */
export default function MapaTopo({ className = '' }) {
  const anillos = [
    'M120,40 C170,32 214,52 224,96 C234,142 206,182 158,190 C108,198 62,172 54,124 C46,78 72,48 120,40 Z',
    'M122,62 C158,56 190,72 197,106 C205,142 183,172 146,178 C108,184 74,164 68,128 C61,92 84,68 122,62 Z',
    'M124,84 C148,80 168,92 173,116 C178,142 163,162 138,166 C112,171 89,157 85,132 C81,106 98,88 124,84 Z',
    'M126,104 C142,101 154,109 157,124 C161,140 151,152 135,155 C119,158 105,149 102,134 C99,119 109,107 126,104 Z',
  ];
  return (
    <svg viewBox="0 0 260 220" className={className} aria-hidden="true">
      {anillos.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth={i === anillos.length - 1 ? 1.4 : 1}
          strokeDasharray={i === 1 ? '5 4' : 'none'}
          opacity={0.9 - i * 0.12}
        />
      ))}
      {/* punto de referencia, tipo señal de levantamiento topográfico */}
      <g transform="translate(139,131)" opacity="0.95">
        <circle r="2.6" fill="currentColor" />
        <line x1="0" y1="-9" x2="0" y2="9" stroke="currentColor" strokeWidth="1" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke="currentColor" strokeWidth="1" />
      </g>
      {/* línea líder + anotación de elevación, dato real de los formatos jurídicos */}
      <line x1="150" y1="120" x2="214" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="150" cy="120" r="2" fill="currentColor" opacity="0.7" />
      <text x="217" y="66" fontFamily="'IBM Plex Mono', monospace" fontSize="11" fontWeight="600" fill="currentColor">
        +1.300 m
      </text>
      <text x="217" y="80" fontFamily="'IBM Plex Mono', monospace" fontSize="8.5" fill="currentColor" opacity="0.7">
        sobre los túneles
      </text>
    </svg>
  );
}
