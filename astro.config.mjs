import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://askappliancerepairs.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
