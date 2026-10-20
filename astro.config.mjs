import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en' },
      },
    }),
  ],
  site: 'https://duma.studio',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
