import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এই লাইনটি পরিবর্তন করা হয়েছে

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // এখন এটি সঠিকভাবে কাজ করবে
  ],
})