# Chùa Cầu Hội An – Hướng dẫn Di sản

Astro + Tailwind CSS + TypeScript, xuất static để chạy trên Cloudflare Workers Assets.

## Cấu hình tên miền
Tên miền chỉ được cấu hình qua biến môi trường `SITE_URL` trong `astro.config.mjs`. Khi để trống, build vẫn hoạt động; canonical/OG URL tuyệt đối và sitemap sẽ được bỏ qua. Khi có tên miền:

```bash
SITE_URL=https://tenmien.vn pnpm build
```

## Lệnh kiểm tra
```bash
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Ảnh và giấy phép
Các ảnh dự kiến dùng trong `public/images/` là ảnh thật Chùa Cầu sau tu bổ 2024 của nhiếp ảnh gia Chainwit., Wikimedia Commons, CC BY 4.0. Cần giữ ghi công trong tài liệu này khi phân phối.

- `chua-cau-day.jpg`: “2024 Hội An - Japanese Covered Bridge (Chùa Cầu) after renovation - img 03.jpg” — Chainwit. — CC BY 4.0
- `chua-cau-night.jpg`: “2024 Hội An - Japanese Covered Bridge (Chùa Cầu) after renovation - img 08.jpg” — Chainwit. — CC BY 4.0
- `chua-cau-portal.jpg`: “2024 Hội An - Japanese Covered Bridge (Chùa Cầu) after renovation - portal - img 02.jpg” — Chainwit. — CC BY 4.0

Nguồn: Wikimedia Commons. Khi triển khai, ảnh phải được lưu cục bộ tại đúng tên tệp trên; trang không hotlink ảnh.
