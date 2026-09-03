import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/digital/',
  build: {
    outDir: 'dist/digital',
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/supabase': {
        target: 'https://lcajcnprlvbnqelamqnj.supabase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/supabase/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjYWpjbnBybHZibnFlbGFtcW5qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTEwMjg1MiwiZXhwIjoyMDk0Njc4ODUyfQ.G5i9XcC-_kE203rFM3_yXbqWKkCpB5WR4oqzZdNWr68';
            proxyReq.setHeader('apikey', supabaseKey);
            proxyReq.setHeader('Authorization', `Bearer ${supabaseKey}`);
            
            // Remove browser headers so Supabase doesn't block the request
            proxyReq.removeHeader('origin');
            proxyReq.removeHeader('referer');
            proxyReq.setHeader('user-agent', 'node-fetch');
            proxyReq.removeHeader('x-client-info');
            proxyReq.removeHeader('sec-ch-ua');
            proxyReq.removeHeader('sec-ch-ua-mobile');
            proxyReq.removeHeader('sec-ch-ua-platform');
          });
        }
      },
      '/api/b2': {
        target: 'https://coopmaza-docs.s3.us-east-005.backblazeb2.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/b2/, ''),
      }
    }
  }
})
