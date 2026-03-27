import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

const BASE_URL = process.env.BASE_URL || '/ps';

export default defineConfig({
  site: 'https://christianhn.github.io', 
  base: BASE_URL,
  trailingSlash: 'always', 
  integrations: [
    sitemap(),
    icon(),
  ],
});
