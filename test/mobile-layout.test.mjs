import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const leer = (archivo) => readFile(new URL(`../${archivo}`, import.meta.url), 'utf8');

test('Hero muestra foto completa en bloque móvil independiente', async () => {
  const hero = await leer('src/components/Hero.jsx');

  assert.doesNotMatch(hero, /md:hidden h-\[56vw\]/);
  assert.match(hero, /block sm:inline/);
  assert.match(hero, /flex flex-col sm:flex-row/);
});

test('La evidencia no fuerza desplazamiento horizontal en móvil', async () => {
  const evidencia = await leer('src/index.css');

  assert.match(evidencia, /#evidencia \.overflow-x-auto img/);
  assert.match(evidencia, /min-width: 0/);
});

test('mensaje del volante apila boton y permite encoger texto en movil', async () => {
  const piezas = await leer('src/components/SeccionPiezas.jsx');

  assert.match(piezas, /flex flex-col sm:flex-row/);
  assert.match(piezas, /flex-1 min-w-0 break-words/);
  assert.match(piezas, /self-start sm:self-auto/);
});
