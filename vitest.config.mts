import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './__test__/setupTests.ts'
  },
  resolve: {
    alias: [{ find: '@/', replacement: path.resolve(__dirname, ) }]
  }
})