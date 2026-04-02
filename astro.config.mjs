import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://gaucho.luminari.agency',
  vite: {
    plugins: [tailwindcss()],
    cacheDir: false,
    preview: {
      allowedHosts: ['gaucho.luminari.agency', 'localhost'],
    },
  },
});
