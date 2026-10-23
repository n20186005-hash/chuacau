import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// Tên miền chính thức: https://chuacau.org (có thể ghi đè bằng biến môi trường SITE_URL khi triển khai)
const site = process.env.SITE_URL?.trim() || 'https://chuacau.org';

// Legal route slugs are translated, so match actual route families explicitly.
const families = [
 ['/', '/en/', '/zh/'],
 ['/cai-dat-cookie/', '/en/cookie-settings/', '/zh/cookie-settings/'],
 ['/chinh-sach-quyen-rieng/', '/en/privacy/', '/zh/privacy/'],
 ['/dieu-khoan-dich-vu/', '/en/terms/', '/zh/terms/'],
];
const languages = ['vi', 'en', 'zh-Hant'];
function serialize(item) {
 const family = families.find(paths => paths.includes(new URL(item.url).pathname));
 return { ...item, links: family ? [...family.map((path, i) => ({ lang: languages[i], url: new URL(path, site).href })), { lang: 'x-default', url: new URL(family[0], site).href }] : [] };
}

export default defineConfig({
  site,
  integrations: site ? [sitemap({ serialize, filter: (url) => !new URL(url).pathname.startsWith('/404') })] : [],
  vite: { plugins: [tailwindcss()] },
  output: 'server',
  adapter: cloudflare({ configPath: './wrangler.jsonc' })
});
