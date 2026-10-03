import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv, type Plugin } from 'vite'

// Dev-only middleware so /api/contact works on localhost (Vercel handles it in production).
function localApiPlugin(): Plugin {
  return {
    name: 'local-api-contact',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const key of ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL']) {
        if (env[key]) process.env[key] = env[key]
      }

      server.middlewares.use('/api/contact', async (req, res) => {
        let raw = ''
        for await (const chunk of req) raw += chunk
        let body: unknown = {}
        try {
          body = raw ? JSON.parse(raw) : {}
        } catch {
          body = raw
        }

        const { default: handler } = await server.ssrLoadModule('/api/contact.js')
        const shimRes = {
          statusCode: 200,
          setHeader: (k: string, v: string) => res.setHeader(k, v),
          status(code: number) {
            this.statusCode = code
            return this
          },
          json(data: unknown) {
            res.statusCode = this.statusCode
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
          },
        }
        await handler({ method: req.method, body }, shimRes)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
  build: {
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})
