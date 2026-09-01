import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Tên miền chính thức: https://chuacau.org (có thể ghi đè bằng biến môi trường SITE_URL khi triển khai)
const site = process.env.SITE_URL?.trim() || 'https://chuacau.org';

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
  output: 'static'
});
