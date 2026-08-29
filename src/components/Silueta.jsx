/* Divisores de paisaje del páramo: agua, pasto y horizonte de frailejones. */

const CREMA = '#F6F3EC';
const AGUA = '#159FD8';
const BOSQUE = '#0F3D2E';

const OLA_A = 'M0,66 C120,28 250,30 380,54 C520,80 640,88 780,62 C900,40 1010,32 1120,52 C1155,58 1180,62 1200,60 L1200,120 L0,120 Z';
const OLA_B = 'M0,82 C150,48 300,52 460,72 C620,92 760,96 920,74 C1040,58 1120,56 1200,66 L1200,120 L0,120 Z';
const OLA_C = 'M0,98 C160,72 320,76 480,92 C640,108 800,110 960,92 C1080,80 1140,80 1200,86 L1200,120 L0,120 Z';

/* Divisor de agua con transición de color. */
export function Ondas({ arriba = CREMA, abajo = AGUA, className = '' }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"
      className={'block w-full h-[56px] sm:h-[84px] md:h-[108px] ' + className}>
      <rect width="1200" height="120" fill={arriba} />
      <path fill={abajo} opacity="0.35" d={OLA_A} />
      <path fill={abajo} opacity="0.62" d={OLA_B} />
      <path fill={abajo} d={OLA_C} />
    </svg>
  );
}

/* Solo las olas, sin fondo. Para superponer al pie de una sección con imagen. */
export function OlasAbajo({ color = AGUA, className = '' }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"
      className={'block w-full ' + className}>
      <path fill={color} opacity="0.4" d={OLA_A} />
      <path fill={color} opacity="0.68" d={OLA_B} />
      <path fill={color} d={OLA_C} />
    </svg>
  );
}

/* Pasto: dos capas de matas curvas. */
function trazoPasto(base, alto) {
  let d = `M0,${base}`;
  for (let i = 0; i <= 60; i++) {
    const x = i * 20;
    const h = alto + ((i * 7) % 5) * 5;
    const lean = ((i % 3) - 1) * 6;
    d += ` L${x},${base} Q${x + 10 + lean},${base - h} ${x + 20},${base}`;
  }
  return d + ` L1200,60 L0,60 Z`;
}

export function Pasto({ arriba = CREMA, abajo = BOSQUE, className = '' }) {
  return (
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true"
      className={'block w-full h-[30px] sm:h-[44px] md:h-[56px] ' + className}>
      <rect width="1200" height="60" fill={arriba} />
      <path d={trazoPasto(42, 12)} fill={abajo} opacity="0.5" />
      <path d={trazoPasto(46, 16)} fill={abajo} />
    </svg>
  );
}

/* Horizonte de frailejones — la planta símbolo del páramo de Santurbán. */
const HOJA = 'M0,0 C-3.5,-13 -3,-29 0,-40 C3,-29 3.5,-13 0,0 Z';
const ROSETA = [];
for (let a = 0; a < 360; a += 26) ROSETA.push(a);

function Frailejon({ x, s, G }) {
  return (
    <g transform={`translate(${x} 202) scale(${s})`} fill={G}>
      <path d="M-6,0 C-7,-20 -5,-44 -4,-58 L4,-58 C5,-44 7,-20 6,0 Z" />
      <path d="M-10,-4 L-4,-22 L0,-9 L4,-22 L10,-4 L5,6 L-5,6 Z" opacity="0.92" />
      <g transform="translate(0 -60)">
        {ROSETA.map((a) => <path key={a} d={HOJA} transform={`rotate(${a})`} />)}
        <circle r="5" />
      </g>
    </g>
  );
}

export function Bosque({ arriba = CREMA, abajo = BOSQUE, className = '' }) {
  const G = abajo;
  const ave = (x, y, k) => (
    <path key={k} d={`M${x} ${y} q7 -7 14 0 q7 -7 14 0`} stroke={G} strokeWidth="2.6" fill="none" strokeLinecap="round" />
  );
  const frailejones = [
    [110, 1.15], [230, 0.7], [340, 0.95], [470, 0.62],
    [760, 0.8], [880, 1.25], [1000, 0.72], [1095, 1.0],
  ];
  return (
    <svg viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true"
      className={'block w-full h-[112px] sm:h-[156px] md:h-[198px] ' + className}>
      <rect width="1200" height="220" fill={arriba} />
      {/* cordillera lejana */}
      <path fill={G} opacity="0.22" d="M0,150 L120,90 L210,140 L340,70 L470,150 L560,100 L700,160 L840,90 L980,150 L1100,110 L1200,150 L1200,220 L0,220 Z" />
      {/* colinas */}
      <path fill={G} opacity="0.4" d="M0,182 C180,140 360,150 540,180 C720,210 900,140 1080,168 C1140,178 1170,184 1200,180 L1200,220 L0,220 Z" />
      <path fill={G} opacity="0.68" d="M0,198 C160,178 320,192 520,190 C720,188 860,206 1040,198 C1120,194 1160,200 1200,198 L1200,220 L0,220 Z" />
      <rect x="0" y="200" width="1200" height="20" fill={G} />
      {frailejones.map(([x, s], i) => <Frailejon key={i} x={x} s={s} G={G} />)}
      {ave(560, 46, 'b1')}
      {ave(620, 32, 'b2')}
      {ave(676, 52, 'b3')}
    </svg>
  );
}
