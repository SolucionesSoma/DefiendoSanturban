export default function Curvas({ tono = 'clara', className = '' }) {
  const trazos = tono === 'clara'
    ? ['rgba(255,255,255,.5)', 'rgba(255,255,255,.32)', 'rgba(255,255,255,.18)']
    : ['rgba(0,40,161,.16)', 'rgba(0,40,161,.10)', 'rgba(18,180,252,.14)'];
  const paths = [
    'M-10 40 C 120 10, 260 70, 400 38 S 660 8, 800 44',
    'M-10 78 C 140 46, 260 108, 420 78 S 660 46, 800 84',
    'M-10 118 C 120 150, 300 92, 460 122 S 680 156, 800 120',
  ];
  return (
    <div className={'curvas ' + className} aria-hidden="true">
      <svg viewBox="0 0 800 160" preserveAspectRatio="none">
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={trazos[i]} strokeWidth={2 + i} />
        ))}
      </svg>
    </div>
  );
}
