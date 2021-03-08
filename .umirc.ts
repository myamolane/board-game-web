import { defineConfig } from 'umi';
// import './src/styles/tailwind.css';
// import './src/styles/global.css';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  extraPostCSSPlugins: [require('postcss-import'), require('tailwindcss'), require('postcss-nested'), require('autoprefixer')],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,
    }
  }
});
