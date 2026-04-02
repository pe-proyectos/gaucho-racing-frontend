import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://gaucho.luminari.agency',
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['gaucho.luminari.agency', 'localhost'],
    },
  },
});
