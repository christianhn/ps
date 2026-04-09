import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

import vercel from '@astrojs/vercel/serverless';

const BASE_URL = process.env.VERCEL ? '/' : (process.env.BASE_URL || '/ps');

export default defineConfig({
  site: 'https://christianhn.github.io',
  base: BASE_URL,

  integrations: [
    sitemap(),
    icon(),
  ],

  output: 'server',
  adapter: vercel(),
});