import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
   plugins: [react()],
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `@import "@/styles/variables.scss";`,
         },
      },
   },
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
   server: {
      port: 3000,
   },
})
