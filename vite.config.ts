import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import loadVersion from 'vite-plugin-package-version'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import tsconfigPaths from 'vite-tsconfig-paths'

import htmlPlugin from './htmlPlugin'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // https://vitest.dev/guide
  test: {
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
    },
  },
  // https://vitejs.dev/plugins/
  plugins: [
    tsconfigPaths(),
    htmlPlugin(loadEnv(mode, '.')),
    react(),
    loadVersion(),
    ViteWebfontDownload(),
  ],
}))
