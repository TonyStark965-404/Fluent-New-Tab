import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'vercel'
    ? '/'
    : '/Fluent-New-Tab/'
})
