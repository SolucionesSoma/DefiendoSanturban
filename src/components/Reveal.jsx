import { useReveal } from '../lib/utils';

/* Envuelve contenido para que aparezca con un fade-up al entrar en pantalla. */
export default function Reveal({ as: Tag = 'div', className = '', style, children }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={'reveal ' + className} style={style}>
      {children}
    </Tag>
  );
}
