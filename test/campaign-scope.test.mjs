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
});

test('el ultimátum vence el 13 de noviembre de 2026', async () => {
  const config = await leer('src/lib/config.js');

  assert.match(config, /y:2026, m:11, d:13/);
  assert.match(config, /Tres meses desde la revocatoria/);
});
