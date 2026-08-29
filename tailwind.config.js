/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "River Soul": bosque + agua brillante + ámbar
        bosque: '#0F3D2E',
        'bosque-hondo': '#0A2C21',
        hoja: '#38B24A',
        'hoja-hondo': '#2E9A3E',
        agua: '#159FD8',
        'agua-hondo': '#0F7FB0',
        'agua-claro': '#4FB9E6',
        ambar: '#F3A32C',
        'ambar-hondo': '#DB8A15',
        crema: '#F6F3EC',
        tinta: '#15241C',
        'tinta-suave': '#5A6B60',
        // Compatibilidad: nombres antiguos (canvas de piezas, volante)
        noche: '#0A2C21',
        hondo: '#0A2C21',
        azul: '#159FD8',
        medio: '#159FD8',
        cian: '#38B24A',
        vida: '#F3A32C',
        selva: '#0F3D2E',
        papel: '#F6F3EC',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        suave: '0 18px 40px -20px rgba(10,44,33,.30)',
        flota: '0 34px 64px -26px rgba(10,44,33,.42)',
        chip: '0 8px 20px -8px rgba(10,44,33,.30)',
      },
      spacing: { '4.5': '1.125rem' },
    },
  },
  plugins: [],
};
