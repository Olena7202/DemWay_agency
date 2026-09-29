import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const index = resolve('dist/index.html')
      if (existsSync(index)) copyFileSync(index, resolve('dist/404.html'))
    },
  }
}

export default defineConfig(({ command }) => ({
  plugins: [react(), spaFallback()],
  base:
    command === 'build' && process.env.GITHUB_ACTIONS === 'true'
      ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'DemWay_agency'}/`
      : '/',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
}))
