
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "/JATAYU",
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'JATAYU',
        short_name: 'JATAYU',
        description: 'JATAYU - Your awesome web app',
        theme_color: '#000000',
        icons: [
          {
            src: 'jatayuji.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'jatayuji.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})