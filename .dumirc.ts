import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? '/react-client-print/' : '/',
  publicPath:
    process.env.NODE_ENV === 'production' ? '/react-client-print/' : '/',
  exportStatic: {},
  themeConfig: {
    name: 'react-client-print',
    logo: '/logo.png',
    socialLinks: {
      github: 'https://github.com/cwy007/react-client-print',
    },
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
});
