import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

export default defineConfig({
  site: 'https://christianhn.github.io', 
  base: '/ps',
  trailingSlash: 'always', 
  integrations: [
    sitemap(),
    icon(),
  ],
});
