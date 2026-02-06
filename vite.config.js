import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/python-learning/',
  server: {
    port: 5177
  },
  define: {
    // Supabase credentials for production build
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify('https://wtthcgqovvibgehpvxdv.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify('sb_publishable_5oxQplJGNR-SP8K2vns7cQ_zEcvh5Zn')
  }
})
