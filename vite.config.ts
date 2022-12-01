/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

import * as packageJson from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'packages', 'index.ts'),
      name: 'FlokiDesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [dts({ copyDtsFiles: false }), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})
