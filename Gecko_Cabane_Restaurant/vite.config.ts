import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { imagetools } from 'vite-imagetools'
import { compression } from 'vite-plugin-compression2'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    imagetools(), 
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/]}), 
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        icons: [
          {
            src: '/android-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
