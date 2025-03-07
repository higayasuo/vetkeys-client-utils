import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VetkeysClientUtils',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      external: ['ic-vetkd-utils'],
      output: {
        globals: {
          'ic-vetkd-utils': 'IcVetkdUtils',
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
  test: {
    globals: true,
    environment: 'node',
  },
});