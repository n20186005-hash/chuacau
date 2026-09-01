# Trạng thái kiểm tra trong môi trường hiện tại

- Mã nguồn Astro/Tailwind/TypeScript và các trang nội dung đã được tạo.
- Môi trường thực thi hiện tại không phân giải được registry.npmjs.org hoặc upload.wikimedia.org, nên không thể tải dependency để sinh pnpm-lock.yaml/ chạy astro check + build, cũng không thể tải 3 JPG thật vào gói.
- Không giả mạo kết quả CI và không thay ảnh thật bằng ảnh AI.
- Ba URL nguồn ảnh thật và giấy phép CC BY 4.0 đã ghi trong README.md.

## 2026-09-01 – Cập nhật SEO thực thể + PWA

- Tên miền chính thức `https://chuacau.org` được đặt mặc định trong `astro.config.mjs` (vẫn có thể ghi đè bằng `SITE_URL`).
- JSON-LD: `TouristAttraction` bổ sung `@id`/`image`/`hasMap`, mở rộng `alternateName`; thêm khối `@graph` gồm `WebSite`/`WebPage` (`dateModified` 2026-09-01)/`BreadcrumbList` (Chùa Cầu → Hội An → Đà Nẵng → Việt Nam).
- Base.astro: thêm `og:image:alt`, `theme-color`, `rel=manifest`, đăng ký Service Worker; canonical/OG dùng tên miền mặc định.
- index.astro: breadcrumb hiển thị Hội An › Đà Nẵng › Việt Nam, đoạn khai báo đẳng vị tên gọi (Chùa Cầu = Cầu Nhật Bản = Lai Viễn Kiều) ở đầu mục lịch sử, cụm ngữ nghĩa quanh điểm lân cận, alt ảnh chuẩn hóa theo thực thể, iframe Google Maps cập nhật tham số `zh-CN`.
- PWA: `public/manifest.webmanifest` + `public/sw.js` + `public/icons/icon-192.png`/`icon-512.png` (sinh bằng PowerShell System.Drawing, tông màu theo nhận diện trang).
- Chưa build local vì môi trường không phân giải registry.npmjs.org; chạy `pnpm check && pnpm build` khi có mạng.
