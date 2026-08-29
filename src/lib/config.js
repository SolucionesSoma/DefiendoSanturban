/* =========================================================================
   CONFIGURACIÓN — lo único que hay que tocar para poner la campaña en marcha
   ========================================================================= */
export const ENLACES = {
  whatsapp: '',    // enlace de invitación del grupo o comunidad de WhatsApp
  telegram: '',    // enlace del canal de Telegram
  banco: '',       // enlace del banco de imágenes de la campaña
  informacion: 'https://drive.google.com/drive/folders/1LodtBPH3Pp_NtUB3sS9GUNGR0NDtOq7N?usp=drive_link',
};

export const CORREO = 'comiteparamosanturban@gmail.com';

export const REVOCATORIA = new Date(2026, 7, 13); // 13 de agosto de 2026

export const ARCHIVOS = {
  peticion:     '/documentos/1-derecho-de-peticion-minambiente.docx',
  procuraduria: '/documentos/2-accion-preventiva-procuraduria.docx',
  tutela:       '/documentos/3-accion-de-tutela.docx',
  inst1:        '/documentos/instructivo-1-peticion-minambiente.pdf',
  inst2:        '/documentos/instructivo-2-procuraduria.pdf',
  inst3:        '/documentos/instructivo-3-tutela.pdf',
};

export const EVENTOS = [
  { y:2026, m:9,  d:9,  t:'Asamblea general del Comité',
    q:'Se deciden las fechas y la forma de las movilizaciones. Quien es defensor tiene voz y voto. 6 P.M. calle 33 # 23 - 37 Bmanga.',
    lugar:'Bucaramanga' },
  { y:2026, m:9,  d:10,  t:'Anuncio público y lanzamiento de la campaña',
    q:'Se hacen públicas las fechas de movilización y arranca la difusión abierta del Kit por Santurbán.',
    lugar:'Bucaramanga' },
  { y:2026, m:10, d:13, t:'Vence el plazo para reabrir la consulta',
    q:'Dos meses desde la revocatoria. Es la fecha que nuestra petición le fija al Ministerio.',
    lugar:'' },
];
