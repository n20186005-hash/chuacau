// Cấu trúc đa ngôn ngữ cho Chùa Cầu Hội An.
// Quy ước: tiếng Việt (mặc định) tại "/", tiếng Anh tại "/en/", tiếng Trung (Phồn thể) tại "/zh/".

export type Locale = 'vi' | 'en' | 'zh';
export const locales: Locale[] = ['vi', 'en', 'zh'];
export const defaultLocale: Locale = 'vi';

export const htmlLang: Record<Locale, string> = {
  vi: 'vi',
  en: 'en',
  zh: 'zh-Hant',
};

export const ogLocale: Record<Locale, string> = {
  vi: 'vi_VN',
  en: 'en_US',
  zh: 'zh_TW',
};

// Bản đồ tuyến đường: mỗi trang có đường dẫn riêng theo ngôn ngữ.
export const routes = {
  home: { vi: '/', en: '/en/', zh: '/zh/' },
  privacy: { vi: '/chinh-sach-quyen-rieng/', en: '/en/privacy/', zh: '/zh/privacy/' },
  terms: { vi: '/dieu-khoan-dich-vu/', en: '/en/terms/', zh: '/zh/terms/' },
  cookie: { vi: '/cai-dat-cookie/', en: '/en/cookie-settings/', zh: '/zh/cookie-settings/' },
} as const;

export type RouteKey = keyof typeof routes;

export function localizedPath(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

// Mã hreflang chuẩn (zh dùng zh-Hant để chỉ tiếng Trung Phồn thể).
const hreflangCode: Record<Locale, string> = { vi: 'vi', en: 'en', zh: 'zh-Hant' };

// Sinh các thẻ <link rel="alternate" hreflang> cho một trang.
export function hreflangLinks(key: RouteKey, siteUrl?: string): { lang: string; href: string }[] {
  const base = siteUrl ? siteUrl.replace(/\/$/, '') : '';
  const out = locales.map((l) => ({ lang: hreflangCode[l], href: base + routes[key][l] }));
  out.push({ lang: 'x-default', href: base + routes[key][defaultLocale] });
  return out;
}

type Dict = Record<string, Record<Locale, string>>;

// Từ vựng "chrome" dùng chung (điều hướng, thẻ, chân trang, nhãn thời tiết, trang pháp lý).
export const ui: Dict = {
  "nav": {
    "vi": "Lịch sử|Truyền thuyết|Tham quan|Di chuyển|Tiện ích|FAQ",
    "en": "History|Legends|Visit|Getting there|Facilities|FAQ",
    "zh": "歷史|傳說|參觀|交通|周邊設施|常見問題"
  },
  "navAnchor": {
    "vi": "#history|#legends|#visit|#getting-there|#facilities|#faq",
    "en": "#history|#legends|#visit|#getting-there|#facilities|#faq",
    "zh": "#history|#legends|#visit|#getting-there|#facilities|#faq"
  },
  "footerTagline": {
    "vi": "Hướng dẫn độc lập về Chùa Cầu; không thuộc đơn vị quản lý di tích hoặc cơ quan nhà nước.",
    "en": "An independent Chùa Cầu guide, unaffiliated with monument management or government.",
    "zh": "獨立日本廊橋導覽，並非古蹟管理或政府機關網站。"
  },
  "footerSources": {
    "vi": "Nguồn kiểm chứng được liên kết trong mục tham khảo; giờ và dịch vụ cần xác nhận lại.",
    "en": "Verification sources are linked in the references; reconfirm hours and services.",
    "zh": "參考資料附來源連結；請再次確認時段與服務。"
  },
  "footerCopyright": {
    "vi": "© 2026 Chùa Cầu Hội An – Hướng dẫn Di sản. Bảo lưu mọi quyền đối với thiết kế và nội dung biên soạn.",
    "en": "© 2026 Chùa Cầu Hội An – Heritage Guide. All rights reserved for the design and compiled content.",
    "zh": "© 2026 會安日本廊橋 – 遺產導覽。設計與編寫內容之權利均予保留。"
  },
  "footerPrivacy": {
    "vi": "Chính sách quyền riêng tư",
    "en": "Privacy Policy",
    "zh": "隱私權政策"
  },
  "footerTerms": {
    "vi": "Điều khoản dịch vụ",
    "en": "Terms of Service",
    "zh": "服務條款"
  },
  "footerCookie": {
    "vi": "Cài đặt Cookie",
    "en": "Cookie Settings",
    "zh": "Cookie 設定"
  },
  "weatherTag": {
    "vi": "DỰ BÁO THỜI TIẾT",
    "en": "WEATHER FORECAST",
    "zh": "天氣預報"
  },
  "weatherH2": {
    "vi": "Thời tiết tại Chùa Cầu",
    "en": "Weather at Chùa Cầu",
    "zh": "日本廊橋天氣"
  },
  "weatherLead": {
    "vi": "Cập nhật theo thời điểm thực tế tại Hội An, giúp bạn chủ động chuẩn bị cho chuyến tham quan phố cổ.",
    "en": "Updated for the current conditions in Hội An so you can plan your old-town visit with confidence.",
    "zh": "依會安即時天氣更新，協助您從容安排古鎮行程。"
  },
  "weatherFailed": {
    "vi": "Dự báo thời tiết tạm thời chưa khả dụng. Vui lòng xem lại sau ít phút.",
    "en": "The weather forecast is temporarily unavailable. Please check back in a few minutes.",
    "zh": "天氣預報暫時無法取得，請稍後再試。"
  },
  "weatherNow": {
    "vi": "Hiện tại",
    "en": "Now",
    "zh": "目前"
  },
  "weatherDays7": {
    "vi": "7 ngày tới",
    "en": "Next 7 days",
    "zh": "未來 7 天"
  },
  "weatherFeels": {
    "vi": "Cảm giác như",
    "en": "Feels like",
    "zh": "體感"
  },
  "weatherHumidity": {
    "vi": "Độ ẩm",
    "en": "Humidity",
    "zh": "濕度"
  },
  "weatherWind": {
    "vi": "Gió",
    "en": "Wind",
    "zh": "風力"
  },
  "weatherPrecip": {
    "vi": "Khả năng mưa hôm nay",
    "en": "Chance of rain today",
    "zh": "今日降雨機率"
  },
  "weatherUv": {
    "vi": "Chỉ số tia UV cao nhất hôm nay",
    "en": "Peak UV index today",
    "zh": "今日紫外線指數最高"
  },
  "timelineLabel": {
    "vi": "Mốc thời gian",
    "en": "Timeline",
    "zh": "時間軸"
  },
  "weatherAlert": {
    "vi": "⚠ Nhắc nhở rủi ro",
    "en": "⚠ Safety alert",
    "zh": "⚠ 安全提醒"
  },
  "weatherOutfit": {
    "vi": "🧥 Trang phục",
    "en": "🧥 What to wear",
    "zh": "🧥 穿搭建議"
  },
  "weatherPlan": {
    "vi": "🗺️ Kế hoạch tham quan",
    "en": "🗺️ Sightseeing plan",
    "zh": "🗺️ 遊玩安排"
  },
  "weatherItems": {
    "vi": "🎒 Vật dụng mang theo",
    "en": "🎒 What to bring",
    "zh": "🎒 隨身物品"
  },
  "notFoundKicker": {
    "vi": "Lỗi 404",
    "en": "404 error",
    "zh": "404 錯誤"
  },
  "notFoundH2": {
    "vi": "Không tìm thấy trang",
    "en": "Page not found",
    "zh": "找不到頁面"
  },
  "notFoundLead": {
    "vi": "Trang bạn đang tìm có thể đã được dời hoặc không tồn tại. Hãy quay lại trang chủ để tiếp tục khám phá Chùa Cầu và phố cổ Hội An.",
    "en": "The page you are looking for may have moved or no longer exists. Return home to keep exploring Chùa Cầu and the Hội An Ancient Town.",
    "zh": "您要找的頁面可能已搬移或不存在。請返回首頁，繼續探索日本廊橋與會安古鎮。"
  },
  "notFoundCta": {
    "vi": "Về trang chủ",
    "en": "Back to home",
    "zh": "返回首頁"
  },
  "cookieUpdated": {
    "vi": "Cập nhật: 23/10/2026",
    "en": "Updated: 23 October 2026",
    "zh": "更新：2026年10月23日"
  },
  "cookieH2": {
    "vi": "Cài đặt Cookie",
    "en": "Cookie Settings",
    "zh": "Cookie 設定"
  },
  "cookieLead": {
    "vi": "Lựa chọn dưới đây chỉ điều khiển Google Analytics. Bản đồ Google và dịch vụ lưu trữ có hoạt động riêng.",
    "en": "The choice below controls Google Analytics only. Google Maps and hosting services operate separately.",
    "zh": "下方選項只控制Google Analytics；Google地圖與主機服務另行運作。"
  },
  "cookieEssential": {
    "vi": "Cookie cần thiết",
    "en": "Essential cookies",
    "zh": "必要 Cookie"
  },
  "cookieEssentialDesc": {
    "vi": "Trình duyệt lưu lựa chọn phân tích trong localStorage; không cần Cookie thiết yếu riêng của trang.",
    "en": "This site remembers the analytics choice in localStorage; it does not require its own essential cookie.",
    "zh": "本站以localStorage記錄分析選擇，沒有另外必需的自設Cookie。"
  },
  "cookieAnalytics": {
    "vi": "Cookie phân tích",
    "en": "Analytics cookies",
    "zh": "分析 Cookie"
  },
  "cookieAnalyticsDesc": {
    "vi": "GA4 chỉ được bật sau khi lựa chọn đồng ý được lưu và đọc lại. Bạn có thể tắt tại đây.",
    "en": "GA4 starts only after an affirmative choice is saved and read back. You can turn it off here.",
    "zh": "明確同意成功儲存並讀回後才啟用GA4，可在此關閉。"
  },
  "cookiePrefs": {
    "vi": "Cookie tùy chọn",
    "en": "Preference cookies",
    "zh": "偏好 Cookie"
  },
  "cookiePrefsDesc": {
    "vi": "Chưa có tính năng lưu sở thích riêng; ngôn ngữ theo địa chỉ trang.",
    "en": "No separate saved-preferences feature is implemented; language follows the page URL.",
    "zh": "未實作另存偏好功能；語言由頁面網址決定。"
  },
  "cookieMarketing": {
    "vi": "Cookie tiếp thị",
    "en": "Marketing cookies",
    "zh": "行銷 Cookie"
  },
  "cookieMarketingDesc": {
    "vi": "Trang hiện không triển khai quảng cáo cá nhân hóa.",
    "en": "This site does not run personalised advertising.",
    "zh": "本站未投放個人化廣告。"
  },
  "cookieAlwaysOn": {
    "vi": "Luôn hoạt động",
    "en": "Always on",
    "zh": "始終啟用"
  },
  "cookieOff": {
    "vi": "Tắt",
    "en": "Off",
    "zh": "關閉"
  },
  "cookieActivate": {
    "vi": "Kích hoạt",
    "en": "Activate",
    "zh": "啟用"
  },
  "cookieSave": {
    "vi": "Lưu lựa chọn",
    "en": "Save choices",
    "zh": "儲存選項"
  },
  "cookieReject": {
    "vi": "Từ chối tùy chọn",
    "en": "Reject optional",
    "zh": "拒絕選用"
  },
  "cookieSaved": {
    "vi": "Đã lưu lựa chọn. Lựa chọn Google Analytics được áp dụng ngay trên trang này.",
    "en": "Choice saved. Your Google Analytics choice applies immediately on this page.",
    "zh": "已儲存選項。Google Analytics 選擇已立即套用至本頁。"
  },
  "cookieRejected": {
    "vi": "Google Analytics đã tắt trên trang này.",
    "en": "Google Analytics is off for this page.",
    "zh": "本頁的 Google Analytics 已關閉。"
  },
  "seasonCols": {
    "vi": "Giai đoạn|Đặc trưng thời tiết|Gợi ý tham quan",
    "en": "Period|Weather pattern|Suggested plan",
    "zh": "時段|天氣特徵|建議安排"
  },
  "responsibilityBehavior": {
    "vi": "Ứng xử khi tham quan",
    "en": "Visiting etiquette",
    "zh": "參觀禮儀"
  },
  "privacyTitle": {
    "vi": "Chính sách quyền riêng tư | Chùa Cầu Hội An",
    "en": "Privacy Policy | Chùa Cầu Hội An",
    "zh": "隱私權政策 | 會安日本廊橋"
  },
  "privacyDesc": {
    "vi": "Chính sách quyền riêng tư của Chùa Cầu Hội An – Hướng dẫn Du lịch.",
    "en": "Privacy Policy of the Chùa Cầu Hội An – Heritage Guide.",
    "zh": "會安日本廊橋 – 遺產導覽之隱私權政策。"
  },
  "termsTitle": {
    "vi": "Điều khoản dịch vụ | Chùa Cầu Hội An",
    "en": "Terms of Service | Chùa Cầu Hội An",
    "zh": "服務條款 | 會安日本廊橋"
  },
  "termsDesc": {
    "vi": "Điều khoản sử dụng trang hướng dẫn độc lập Chùa Cầu Hội An.",
    "en": "Terms of use for the independent Chùa Cầu Hội An visitor guide.",
    "zh": "會安日本廊橋獨立旅遊導覽站之服務條款。"
  },
  "cookieTitle": {
    "vi": "Cài đặt Cookie | Chùa Cầu Hội An",
    "en": "Cookie Settings | Chùa Cầu Hội An",
    "zh": "Cookie 設定 | 會安日本廊橋"
  },
  "cookiePageDesc": {
    "vi": "Quản lý lựa chọn Cookie cho trang Chùa Cầu Hội An.",
    "en": "Manage your cookie choices for the Chùa Cầu Hội An site.",
    "zh": "管理會安日本廊橋網站的 Cookie 選項。"
  }
};

// Hàm truy xuất chuỗi chrome theo ngôn ngữ.
export function t(key: keyof typeof ui | string, locale: Locale): string {
  const entry = ui[key];
  if (!entry) return String(key);
  return entry[locale] ?? entry[defaultLocale];
}

// Tách chuỗi "a|b|c" theo ngôn ngữ thành mảng.
export function tList(key: string, locale: Locale): string[] {
  return t(key, locale).split('|');
}
