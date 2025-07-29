
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@emotion/memoize@0.9.0': '@emotion/memoize',
        '@emotion/is-prop-valid@1.3.1': '@emotion/is-prop-valid',
        'motion-utils@12.23.6': 'motion-utils',
        'motion-dom@12.23.9': 'motion-dom',
        'framer-motion@12.23.9': 'framer-motion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });