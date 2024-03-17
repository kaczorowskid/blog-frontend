import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    EnvironmentPlugin([
      'VITE_DEV_API_URL',
      'VITE_PROD_API_URL',
      'VITE_ENVIRONMENT'
    ])
  ],
  server: {
    port: 5170
  },
  build: {
    outDir: 'dist'
  },
  define: {
    'process.env': process.env
  },
  publicDir: 'public'
});
