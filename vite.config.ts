import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
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
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
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
