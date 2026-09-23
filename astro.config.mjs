import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// Tên miền chính thức: https://chuacau.org (có thể ghi đè bằng biến môi trường SITE_URL khi triển khai)
const site = process.env.SITE_URL?.trim() || 'https://chuacau.org';

// Ánh xạ locale cho sitemap (hreflang tự động trong sitemap-index.xml).
// Giá trị là mã ngôn ngữ (dùng làm hreflang), không phải URL — plugin tự ghép từ đường dẫn trang.
const sitemapI18n = {
  defaultLocale: 'vi',
  locales: {
    vi: 'vi',
    en: 'en',
    zh: 'zh-Hant',
  },
};

export default defineConfig({
  site,
  integrations: site ? [sitemap({ i18n: sitemapI18n })] : [],
  vite: { plugins: [tailwindcss()] },
  output: 'server',
  adapter: cloudflare()
});
