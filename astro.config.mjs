import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://gaucho.luminari.agency',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    cacheDir: false,
    preview: {
      allowedHosts: ['gaucho.luminari.agency', '.luminari.agency', 'localhost', '127.0.0.1'],
    },
  },
});
