import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import preact from "@astrojs/preact";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), react()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});