import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: {
    port: 8080
  },
  output: 'server',
  adapter: netlify()
});