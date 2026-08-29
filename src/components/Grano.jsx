export default function Grano({ opacity = 0.5 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")",
      }}
      aria-hidden="true"
    />
  );
}
