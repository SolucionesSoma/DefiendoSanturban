export const Ico = ({ d, className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className={className || 'w-5 h-5'} dangerouslySetInnerHTML={{ __html: d }} />
);

export const P = {
  flecha: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  alerta: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  bajar: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  calendario: '<rect x="3" y="4.5" width="18" height="17" rx="3"/><path d="M3 10h18M8 2.5v4M16 2.5v4"/>',
  externo: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>',
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',
  wa: '<path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20.5l1.8-5.2A8.4 8.4 0 1 1 21 11.5z"/>',
  tg: '<path d="m22 3-9.5 9.5M22 3l-6.5 18-3.6-8.1L3.8 9.3 22 3z"/>',
  imprimir: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
  hoja: '<path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 12-9 0 8-4 12-9 12Z"/><path d="M4 21c1.8-5.5 5.5-9 11-10"/>',
  gota: '<path d="M12 2.7 6.3 9.4a7.5 7.5 0 1 0 11.4 0L12 2.7Z"/>',
  balanza: '<path d="M12 3v18M7 21h10M5 7h14M5 7 3 13h4L5 7ZM19 7l-2 6h4l-2-6Z"/>',
  sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  luna: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
};
