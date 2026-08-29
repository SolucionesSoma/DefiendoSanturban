import { useEffect, useState } from 'react';
import Encabezado from './components/Encabezado';
import Hero from './components/Hero';
import SeccionPorque from './components/SeccionPorque';
import SeccionCifras from './components/SeccionCifras';
import SeccionUnirse from './components/SeccionUnirse';
import SeccionManifiesto from './components/SeccionManifiesto';
import SeccionGaleria from './components/SeccionGaleria';
import SeccionAcciones from './components/SeccionAcciones';
import SeccionPiezas from './components/SeccionPiezas';
import SeccionEvidencia from './components/SeccionEvidencia';
import SeccionFechas from './components/SeccionFechas';
import SeccionContacto from './components/SeccionContacto';
import Pie from './components/Pie';
import BarraAccion from './components/BarraAccion';
import { Ondas, Pasto, Bosque } from './components/Silueta';
import { REVOCATORIA } from './lib/config';
import { diasDesde } from './lib/utils';
import { Analytics } from '@vercel/analytics/react';

const VERDE = '#0F3D2E';
const AGUA = '#159FD8';
const CREMA = '#F6F3EC';

export default function App() {
  const [dias, setDias] = useState(diasDesde(REVOCATORIA));

  useEffect(() => {
    const t = setInterval(() => setDias(diasDesde(REVOCATORIA)), 60 * 60 * 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="font-body">
      <Analytics />
      <Encabezado />
      <Hero dias={dias} />

      <SeccionPorque />
      <Ondas arriba={AGUA} abajo={CREMA} />

      <SeccionCifras dias={dias} />
      <SeccionUnirse />

      <Pasto arriba={CREMA} abajo={VERDE} />
     
      <Bosque arriba={VERDE} abajo={CREMA} />

      <SeccionGaleria />
      <SeccionAcciones />
      <SeccionPiezas dias={dias} />

      <Ondas arriba={CREMA} abajo={AGUA} />
      <SeccionEvidencia />
      <Ondas arriba={AGUA} abajo={CREMA} />

      <SeccionFechas />

      <Pasto arriba={CREMA} abajo={VERDE} />
      <SeccionContacto />
      <Pie />
      <BarraAccion />
    </div>
  );
}
