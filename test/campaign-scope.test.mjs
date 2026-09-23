import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const leer = (archivo) => readFile(new URL(`../${archivo}`, import.meta.url), 'utf8');

test('la campaña publica únicamente el derecho de petición', async () => {
  const acciones = await leer('src/components/SeccionAcciones.jsx');
  const config = await leer('src/lib/config.js');

  assert.match(acciones, /Derecho de petición al Ministerio de Ambiente/);
  assert.doesNotMatch(acciones, /Acción preventiva ante la Procuraduría/);
  assert.doesNotMatch(acciones, /Acción de tutela, si no contestan/);
  assert.doesNotMatch(acciones, /use la tutela/);
  assert.doesNotMatch(config, /procuraduria:/);
  assert.doesNotMatch(config, /tutela:/);
  assert.doesNotMatch(config, /inst2:/);
  assert.doesNotMatch(config, /inst3:/);
  assert.match(acciones, /Llene sus datos:/);
  assert.match(acciones, /firma, nombre, cédula y correo/);
  assert.doesNotMatch(acciones, /padStart\(2, '0'\)/);
});

test('el ultimátum vence el 13 de noviembre de 2026', async () => {
  const config = await leer('src/lib/config.js');
  const hero = await leer('src/components/Hero.jsx');
  const cifras = await leer('src/components/SeccionCifras.jsx');

  assert.match(config, /y:2026, m:11, d:13/);
  assert.match(config, /Tres meses desde la revocatoria/);
  assert.match(hero, /13 NOV 2026/);
  assert.match(cifras, /13 NOV/);
  assert.doesNotMatch(hero + cifras, /13 (?:OCT|de octubre)/i);
});

test('WhatsApp usa la invitación oficial y las secciones retiradas no se renderizan', async () => {
  const config = await leer('src/lib/config.js');
  const app = await leer('src/App.jsx');

  assert.match(config, /https:\/\/chat\.whatsapp\.com\/HWULWPZQOLkK63bbyKIyl2/);
  assert.doesNotMatch(app, /SeccionGaleria/);
  assert.doesNotMatch(app, /SeccionPiezas/);
});

test('calendario usa fechas nuevas y numeración continua', async () => {
  const config = await leer('src/lib/config.js');
  const evidencia = await leer('src/components/SeccionEvidencia.jsx');
  const fechas = await leer('src/components/SeccionFechas.jsx');

  assert.match(config, /y:2026, m:9,\s*d:23/);
  assert.match(config, /y:2026, m:9,\s*d:24/);
  assert.match(config, /#DefiendoSanturban/);
  assert.match(config, /y:2026, m:10, d:13/);
  assert.match(config, /Movilización digital/);
  assert.match(evidencia, />03<\/span>/);
  assert.match(fechas, />04<\/span>/);
});
