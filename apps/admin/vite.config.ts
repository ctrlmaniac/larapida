/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/admin',
  server: {
    port: 5200,
    host: 'localhost',
  },
  preview: {
    port: 5300,
    host: 'localhost',
  },
  plugins: [
    !process.env.VITEST && reactRouter(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],
  define: {
    'process.env.DOMAIN_NAME': JSON.stringify(process.env.DOMAIN_NAME),
  },
  build: {
    outDir: '../../dist/apps/admin',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
