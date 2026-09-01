import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Điền tên miền thật duy nhất tại SITE_URL khi triển khai, ví dụ: https://tenmien.vn
const site = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
  output: 'static'
});
