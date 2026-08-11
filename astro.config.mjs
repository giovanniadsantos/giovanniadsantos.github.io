import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://giovanniangelo.com.br',
  integrations: [sitemap()],
});
