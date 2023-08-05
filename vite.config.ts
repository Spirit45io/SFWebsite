import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';
import path from 'path';
import viteYAML from '@modyfi/vite-plugin-yaml';
import mdx from '@mdx-js/rollup';
import remarkGFM from 'remark-gfm';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const baseURL = mode === "development" ? '/' : '/SFWebsite/';
  return {
    esbuild: {
      define: {
        this: 'window',
      },
    },
    base: baseURL,
    plugins: [
      mdx({ remarkPlugins: [remarkGFM] }),
      react(),
      viteYAML(),
      pages({
        dirs:[
          {dir: "./src/pages/", baseRoute: baseURL}
        ]
      }),
    ],
    resolve: {
      alias: {
        '@layouts': path.resolve(__dirname, './src/layouts/'),
        '@assets': path.resolve(__dirname, './src/assets/'),
        '@libs': path.resolve(__dirname, './src/libs/'),
        '@parts': path.resolve(__dirname, './src/parts'),
        '@components': path.resolve(__dirname, './src/components/'),
        '@typings': path.resolve(__dirname, './src/typings'),
        '@store': path.resolve(__dirname, './src/store.ts'),
      },
    },
  }
});
