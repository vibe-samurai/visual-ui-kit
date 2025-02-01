import * as path from 'path'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { dependencies, devDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
      name: 'visual-ui-kit',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
      },
    },
    target: 'esnext',
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    copy({
      targets: [{ src: 'src/assets/icons/*', dest: 'dist/icons' }],
      hook: 'writeBundle',
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
    ],
  },
})
