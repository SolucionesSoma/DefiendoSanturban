import { useEffect, useRef, useState } from 'react';
import { CORREO } from './config';

export function diasDesde(d) {
  const h = new Date(); h.setHours(0, 0, 0, 0);
  return Math.max(0, Math.round((h - d) / 86400000));
}

export function pad(n) { return n < 10 ? '0' + n : '' + n; }

export function urlAgenda(e) {
  const ini = '' + e.y + pad(e.m) + pad(e.d);
  const f = new Date(e.y, e.m - 1, e.d + 1);
  const fin = '' + f.getFullYear() + pad(f.getMonth() + 1) + pad(f.getDate());
  return 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + encodeURIComponent(e.t + ' | Santurbán') +
    '&dates=' + ini + '/' + fin +
    '&details=' + encodeURIComponent(e.q + '\n\nComité para la Defensa del Agua y el Páramo de Santurbán. ' + CORREO) +
    (e.lugar ? '&location=' + encodeURIComponent(e.lugar) : '');
}

export function bajarUrl(url, nombre) {
  const a = document.createElement('a');
  a.href = url; a.download = nombre || url.split('/').pop();
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

export function useCopiar() {
  const [copiadoId, setCopiadoId] = useState(null);
  function copiar(txt, id) {
    const marcar = () => { setCopiadoId(id); setTimeout(() => setCopiadoId(null), 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(marcar, () => {});
      return;
    }
    const ta = document.createElement('textarea');
    ta.value = txt; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); marcar(); } catch (e) {}
    document.body.removeChild(ta);
  }
  return { copiadoId, copiar };
}

/* Entrada al hacer scroll: añade .visible una sola vez. */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) { el.classList.add('visible'); io.unobserve(el); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
