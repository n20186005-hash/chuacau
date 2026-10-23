// Sự thật trung lập ngôn ngữ về di tích (NAP, toạ độ, đánh giá, bản đồ, hình ảnh).
// Chỉ chỉnh sửa thông tin vận hành (giờ, vé, địa chỉ) tại đây.
import type { Locale } from '../i18n';

export const GEO = { lat: 15.8770873, lon: 108.3260704 };
export const MAPS_URL = 'https://maps.app.goo.gl/H1Mb1t265YrSiKrK9';

// Current address cross-checked with the Hội An ward government and Maps (2026-10-23).
export const ADDRESS = {
  street: 'Nguyễn Thị Minh Khai',
  locality: 'Hội An',
  region: 'Đà Nẵng',
  postalCode: '564010',
  country: 'VN',
};

export const IMAGES = {
  hero: '/images/chua-cau-day.jpg',
  night: '/images/chua-cau-night.jpg',
  portal: '/images/chua-cau-portal.jpg',
};

// Tên thương hiệu theo ngôn ngữ (dùng cho og:site_name, manifest, tiêu đề phụ).
export const SITE_NAME: Record<Locale, string> = {
  vi: 'Chùa Cầu Hội An – Hướng dẫn Du lịch',
  en: 'Chùa Cầu Hội An – Heritage Guide',
  zh: '會安日本廊橋 – 遺產導覽',
};

// Tên thực thể di tích (JSON-LD + tiêu đề).
export const ATTRACTION_NAME: Record<Locale, string> = {
  vi: 'Chùa Cầu (Cầu Nhật Bản / Lai Viễn Kiều)',
  en: 'Chùa Cầu (Japanese Covered Bridge / Lai Viễn Kiều)',
  zh: '日本廊橋（來遠橋 / Chùa Cầu）',
};

export const ATTRACTION_ALT: Record<Locale, string[]> = {
  vi: ['Chùa Cầu', 'Cầu Nhật Bản', 'Lai Viễn Kiều', 'Japanese Covered Bridge', 'Chùa Cầu Hội An'],
  en: ['Chùa Cầu', 'Japanese Covered Bridge', 'Lai Viễn Kiều', 'Hội An Bridge Pagoda', 'Chùa Cầu Hội An'],
  zh: ['日本廊橋', '來遠橋', '會安日本橋', 'Chùa Cầu', 'Hội An Japanese Bridge'],
};

// Thêm hậu tố " | SITE_NAME" cho tiêu đề trang con.
export function withSiteName(locale: Locale, suffix: string): string {
  return `${suffix} | ${SITE_NAME[locale]}`;
}
