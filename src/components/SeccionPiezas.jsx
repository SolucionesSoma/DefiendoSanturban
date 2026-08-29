import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { Ico, P } from './Iconos';
import { ENLACES, CORREO } from '../lib/config';
import { FOTOS } from '../lib/fotos';
import { bajarUrl, useCopiar } from '../lib/utils';

const AMBAR = '#4FB9E6', BLANCO = '#FFFFFF', VERDE = '#38B24A';

function cover(ctx, img, dx, dy, dw, dh) {
  const ir = img.width / img.height, dr = dw / dh;
  let sw, sh, sx, sy;
  if (ir > dr) { sh = img.height; sw = sh * dr; sx = (img.width - sw) / 2; sy = 0; }
  else { sw = img.width; sh = sw / dr; sx = 0; sy = (img.height - sh) / 2; }
  ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}
function scrimV(ctx, w, h, desde = 0.15) {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, `rgba(10,44,33,${desde})`);
  g.addColorStop(0.45, 'rgba(10,44,33,.5)');
  g.addColorStop(1, 'rgba(10,44,33,.94)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}
function scrimH(ctx, w, h) {
  const g = ctx.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, 'rgba(10,44,33,.95)');
  g.addColorStop(0.55, 'rgba(10,44,33,.72)');
  g.addColorStop(1, 'rgba(10,44,33,.25)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}
function placeholder(ctx, w, h) {
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#0F3D2E'); g.addColorStop(1, '#0A2C21');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}

function PiezaBloque({ titulo, uso, children, span }) {
  return (
    <div className={'tarjeta p-5 flex flex-col ' + (span ? 'sm:col-span-2' : '')}>
      <h3 className="font-display font-bold text-[15px] mb-1">{titulo}</h3>
      <p className="text-[13px] text-[var(--texto-suave)] mb-3">{uso}</p>
      {children}
    </div>
  );
}

export default function SeccionPiezas({ dias }) {
  const cvFlyer = useRef(null), cvMarco = useRef(null), cvPortada = useRef(null);
  const [logoImg, setLogoImg] = useState(null);
  const [imgFlyer, setImgFlyer] = useState(null);
  const [imgPortada, setImgPortada] = useState(null);
  const [fotoUsuario, setFotoUsuario] = useState(null);
  const [guardado, setGuardado] = useState(null);

  useEffect(() => {
    const cargar = (src, set) => { const im = new Image(); im.onload = () => set(im); im.src = src; };
    cargar('/assets/logo.jpg', setLogoImg);
    cargar(FOTOS.lagunaColorada.src, setImgFlyer);
    cargar(FOTOS.panorama.src, setImgPortada);
  }, []);

  function pintarFlyer() {
    const cv = cvFlyer.current; if (!cv) return;
    const ctx = cv.getContext('2d'), S = 1080;
    ctx.clearRect(0, 0, S, S);
    if (imgFlyer) cover(ctx, imgFlyer, 0, 0, S, S); else placeholder(ctx, S, S);
    scrimV(ctx, S, S);
    ctx.textAlign = 'left';
    if (logoImg) ctx.drawImage(logoImg, 72, 70, 92, 92);
    ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.font = '700 24px "Montserrat", sans-serif';
    ctx.fillText('COMITÉ POR EL AGUA Y', 184, 108);
    ctx.fillText('EL PÁRAMO DE SANTURBÁN', 184, 142);

    ctx.fillStyle = AMBAR; ctx.font = '700 30px "Montserrat", sans-serif';
    ctx.fillText('SANTURBÁN LLEVA', 74, 560);
    ctx.fillStyle = BLANCO; ctx.font = '800 250px "Montserrat", sans-serif';
    ctx.fillText(String(dias), 66, 792);
    ctx.font = '800 46px "Montserrat", sans-serif';
    ctx.fillText('DÍAS SIN LA PROTECCIÓN', 74, 858);
    ctx.fillText('QUE YA TENÍA', 74, 912);

    ctx.fillStyle = AMBAR; ctx.fillRect(74, 948, 120, 5);
    ctx.fillStyle = 'rgba(255,255,255,.82)'; ctx.font = '400 24px "Public Sans", sans-serif';
    ctx.fillText('Firmar el derecho de petición toma diez minutos.', 74, 996);
    ctx.fillText(CORREO, 74, 1030);
  }

  function pintarPortada() {
    const cv = cvPortada.current; if (!cv) return;
    const ctx = cv.getContext('2d'), W = 1640, H = 624;
    ctx.clearRect(0, 0, W, H);
    if (imgPortada) cover(ctx, imgPortada, 0, 0, W, H); else placeholder(ctx, W, H);
    scrimH(ctx, W, H);
    ctx.textAlign = 'left';
    if (logoImg) ctx.drawImage(logoImg, 74, 66, 84, 84);
    ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.font = '700 24px "Montserrat", sans-serif';
    ctx.fillText('COMITÉ POR EL AGUA Y EL PÁRAMO DE SANTURBÁN', 176, 118);
    ctx.fillStyle = BLANCO; ctx.font = '800 74px "Montserrat", sans-serif';
    ctx.fillText('#DefiendoSanturbán', 74, 232);
    ctx.fillStyle = AMBAR; ctx.font = '800 150px "Montserrat", sans-serif';
    ctx.fillText(String(dias), 74, 400);
    const wN = ctx.measureText(String(dias)).width;
    ctx.fillStyle = 'rgba(255,255,255,.92)'; ctx.font = '700 34px "Montserrat", sans-serif';
    ctx.fillText('DÍAS SIN LA PROTECCIÓN', 110 + wN, 348);
    ctx.fillText('QUE SANTURBÁN YA TENÍA', 110 + wN, 388);
    ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.font = '400 26px "Public Sans", sans-serif';
    ctx.fillText('Exigimos reabrir la consulta pública antes del 13 de octubre de 2026.', 74, 486);
  }

  function pintarMarco() {
    const cv = cvMarco.current; if (!cv) return;
    const ctx = cv.getContext('2d'), S = 1080;
    ctx.clearRect(0, 0, S, S);
    if (fotoUsuario) {
      cover(ctx, fotoUsuario, 0, 0, S, S);
    } else {
      placeholder(ctx, S, S);
      ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.font = '600 40px "Public Sans", sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('Suba su foto abajo', S / 2, S / 2);
    }
    const bh = 250;
    const g = ctx.createLinearGradient(0, S - bh - 120, 0, S);
    g.addColorStop(0, 'rgba(10,44,33,0)'); g.addColorStop(.4, 'rgba(10,44,33,.85)'); g.addColorStop(1, 'rgba(7,30,22,.97)');
    ctx.fillStyle = g; ctx.fillRect(0, S - bh - 120, S, bh + 120);
    ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 4; ctx.strokeRect(28, 28, S - 56, S - 56);
    ctx.strokeStyle = AMBAR; ctx.lineWidth = 4; ctx.strokeRect(40, 40, S - 80, S - 80);
    ctx.textAlign = 'left';
    if (logoImg) ctx.drawImage(logoImg, 60, S - bh + 40, 104, 104);
    ctx.fillStyle = AMBAR; ctx.font = '800 34px "Montserrat", sans-serif';
    ctx.fillText('DEFIENDO A SANTURBÁN', 196, S - bh + 84);
    ctx.fillStyle = BLANCO; ctx.font = '800 52px "Montserrat", sans-serif';
    ctx.fillText(dias + ' días sin protección', 196, S - bh + 148);
    ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.font = '400 26px "Public Sans", sans-serif';
    ctx.fillText('Comité para la Defensa del Agua y el Páramo de Santurbán', 196, S - bh + 192);
  }

  useEffect(() => {
    pintarFlyer(); pintarMarco(); pintarPortada();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { pintarFlyer(); pintarMarco(); pintarPortada(); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logoImg, imgFlyer, imgPortada, fotoUsuario, dias]);

  function subirFoto(e) {
    const file = e.target.files && e.target.files[0]; if (!file) return;
    const url = URL.createObjectURL(file); const im = new Image();
    im.onload = () => { setFotoUsuario(im); URL.revokeObjectURL(url); };
    im.onerror = () => URL.revokeObjectURL(url);
    im.src = url;
  }
  function guardarPng(ref, nombre, id) {
    const cv = ref.current; if (!cv) return;
    cv.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob); bajarUrl(url, nombre);
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      setGuardado(id); setTimeout(() => setGuardado(null), 1800);
    }, 'image/png');
  }

  const { copiadoId, copiar } = useCopiar();
  const mensaje = 'El páramo de Santurbán lleva ' + dias + ' días sin la protección que ya tenía. El Ministerio de Ambiente había protegido una de sus zonas vitales, donde nace el agua de más de dos millones de personas, y siete días después le quitó la protección, dejando la consulta pública cerrada y sin fecha. El mismo Ministerio reconoce que los estudios técnicos siguen vigentes. Defender Santurbán es defender el agua de Bucaramanga. Firmar el derecho de petición toma diez minutos desde el celular. Escriba a ' + CORREO + '.';

  function imprimirVolante() {
    const vol = document.getElementById('volante');
    if (!vol) return;
    vol.classList.add('on'); window.print();
    setTimeout(() => vol.classList.remove('on'), 600);
  }

  return (
    <section id="piezas" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-[1fr,auto] gap-x-10 gap-y-4 md:items-end mb-10 md:mb-12">
        <Reveal>
          <span className="block font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-none text-hoja/25 mb-1">03</span>
          <Eyebrow sobre="Para difundir">Ponga a Santurbán <b>donde lo vean</b></Eyebrow>
        </Reveal>
        <Reveal as="p" className="text-[15px] text-[var(--texto-suave)] leading-relaxed md:text-right md:max-w-[42ch] md:justify-self-end">
          Cada pieza se arma en su propio teléfono y nada se guarda en ningún servidor. El contador de días se actualiza solo.
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <PiezaBloque titulo="El flyer de la cuenta" uso="Para el estado de WhatsApp y las historias. Cambia cada día.">
          <canvas ref={cvFlyer} className="vista w-full rounded-xl border border-[var(--linea)] mb-3" width="1080" height="1080" />
          <button onClick={() => guardarPng(cvFlyer, 'dias-sin-santurban.png', 'flyer')} className="btn btn-amber btn-sm mt-auto self-start">
            {guardado === 'flyer' ? 'Guardada ✓' : 'Guardar ↓'}
          </button>
        </PiezaBloque>

        <PiezaBloque titulo="Su foto con el marco" uso="Para el perfil de WhatsApp, Facebook o Instagram.">
          <canvas ref={cvMarco} className="vista w-full rounded-xl border border-[var(--linea)] mb-3" width="1080" height="1080" />
          <input type="file" accept="image/*" onChange={subirFoto} className="w-full text-[13px] text-[var(--texto-suave)] border border-dashed border-[var(--linea)] rounded-xl px-3 py-2 mb-3 file:mr-3 file:border-0 file:rounded-lg file:bg-bosque file:text-white file:font-display file:font-semibold file:text-[12px] file:px-3 file:py-1.5" />
          <button onClick={() => guardarPng(cvMarco, 'mi-foto-santurban.png', 'marco')} className="btn btn-amber btn-sm mt-auto self-start">
            {guardado === 'marco' ? 'Guardada ✓' : 'Guardar ↓'}
          </button>
        </PiezaBloque>

        <PiezaBloque titulo="La foto de portada" uso="Para la portada de Facebook o el encabezado de X." span>
          <canvas ref={cvPortada} className="vista ancha w-full rounded-xl border border-[var(--linea)] mb-3" width="1640" height="624" />
          <button onClick={() => guardarPng(cvPortada, 'portada-santurban.png', 'portada')} className="btn btn-amber btn-sm mt-auto self-start">
            {guardado === 'portada' ? 'Guardada ✓' : 'Guardar ↓'}
          </button>
        </PiezaBloque>
      </div>

      {ENLACES.banco ? (
        <a href={ENLACES.banco} target="_blank" rel="noopener" className="tarjeta tarjeta-enlace flex items-center gap-4 p-5 mt-4">
          <span className="shrink-0 w-12 h-12 rounded-xl bg-bosque text-white grid place-items-center"><Ico d={P.externo} className="w-5 h-5" /></span>
          <span className="flex-1"><b className="block font-display font-bold text-[15px]">Banco de imágenes del Comité</b><small className="block text-[13px] text-[var(--texto-suave)]">Todas las piezas oficiales de la campaña, listas para descargar</small></span>
          <Ico d={P.flecha} className="w-5 h-5 text-hoja shrink-0" />
        </a>
      ) : (
        <p className="text-[14px] text-[var(--texto-suave)] mt-4">El banco de imágenes se publica en los próximos días.</p>
      )}

      <div className="tarjeta p-5 md:p-6 mt-4">
        <h3 className="font-display font-bold text-[17px] mb-1.5">El volante y el mensaje</h3>
        <p className="text-[var(--texto-suave)] text-[14.5px] mb-3">Imprima el volante para la tienda, la junta o la universidad, y reenvíe el mensaje al grupo de la familia o del trabajo. Los dos salen con el número de días de hoy.</p>
        <div className="rounded-2xl bg-[var(--pagina)] border-l-[3px] border-l-agua px-4 py-3 mb-4 flex gap-3 items-start">
          <p className="flex-1 text-[14px] leading-relaxed">{mensaje}</p>
          <button onClick={() => copiar(mensaje, 'msg')} className="shrink-0 rounded-full border border-[var(--linea)] text-[11.5px] font-display font-semibold px-3 py-1 hover:border-hoja hover:text-hoja transition-colors">{copiadoId === 'msg' ? 'Copiado ✓' : 'Copiar'}</button>
        </div>
        <button onClick={imprimirVolante} className="btn btn-amber btn-sm">
          <Ico d={P.imprimir} className="w-4 h-4" /> Imprimir el volante
        </button>
      </div>

      {createPortal(
        <div id="volante" className="flex-col items-center justify-center">
          <div className="border-[3px] border-bosque px-8 py-7 text-center max-w-2xl mx-auto">
            <img src="/assets/logo.jpg" className="w-[74px] mx-auto mb-3" alt="" />
            <div className="font-display font-extrabold text-[23pt] text-bosque mb-3.5">Santurbán lleva</div>
            <div className="font-display font-extrabold text-[96pt] leading-[.85] text-bosque my-2">{dias}</div>
            <div className="font-display font-extrabold text-[23pt] text-bosque mb-3.5">días sin la protección que ya tenía</div>
            <p className="text-[12.5pt] leading-relaxed text-black max-w-[46em] mx-auto mb-4">En Santurbán nace el agua de más de dos millones de personas. El 6 de agosto de 2026 el Ministerio de Ambiente protegió una de sus zonas vitales, la microcuenca de la quebrada La Baja, y siete días después le quitó la protección, cerrando la consulta pública sin cronograma y sin fecha. El propio Ministerio reconoce que los estudios técnicos siguen vigentes. Defender Santurbán es defender esa agua.</p>
            <div className="font-display font-bold text-[13pt] text-bosque border-t-2 border-bosque pt-3">Comité para la Defensa del Agua y el Páramo de Santurbán<br />{CORREO}</div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
