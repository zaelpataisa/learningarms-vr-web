import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { external_links } from './src/utils/links';

// https://astro.build/config
export default defineConfig({
  site: external_links("website_path"),

  vite: {
    plugins: [tailwindcss()],
  },
  
  integrations: [
    sitemap()
  ],

  server: {
    host: true, 
    port: 4321, 
  },

  output: 'static',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});