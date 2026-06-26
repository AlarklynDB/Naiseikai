import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { fileURLToPath } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

// https://astro.build/config
export default defineConfig({
  site: 'https://naiseikaiuniverse.com',

  // Static Site Generation — every route outputs real crawlable HTML.
  output: 'static',

  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    // Auto-generates sitemap-index.xml + sitemap-0.xml from `site` + routes.
    sitemap(),
  ],

  vite: {
    resolve: {
      alias: {
        // Safety net: every 'react-router-dom' import across all 47
        // page/component files resolves to our shim — no import edits.
        'react-router-dom': fileURLToPath(
          new URL('./src/lib/router.tsx', import.meta.url)
        ),
      },
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg'],
        manifest: {
          name: 'The Naiseikai Universe | 内省界',
          short_name: 'Naiseikai',
          description:
            'The official universe hub for The Naiseikai Universe — a world of introspection, shinobi, yokai, and found family. By Alarkius Elvya Jay.',
          theme_color: '#05050f',
          background_color: '#05050f',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
          ],
        },
      }),
    ],
  },
})
