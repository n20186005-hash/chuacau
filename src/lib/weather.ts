// Dữ liệu thời tiết cho Chùa Cầu (Hội An) – được truy xuất tại máy chủ (Worker)
// và lưu tạm qua Cloudflare Cache API, chỉ phục vụ hiển thị trên giao diện người dùng.
// Hỗ trợ đa ngôn ngữ (vi / en / zh).

import type { Locale } from '../i18n';

export const LAT = 15.8770873;
export const LON = 108.3234955;
export const TZ = 'Asia/Ho_Chi_Minh';

export interface WeatherNow {
  temperature: number;
  apparent: number;
  humidity: number;
  windKmh: number;
  code: number;
}

export interface DayForecast {
  date: string;
  code: number;
  tMax: number;
  tMin: number;
  precipProb: number;
  uvMax: number;
  windMaxKmh: number;
}

export interface WeatherData {
  now: WeatherNow;
  days: DayForecast[];
}

interface WmoInfo {
  text: string;
  icon: string;
}

// Ánh xạ mã thời tiết WMO sang văn bản theo ngôn ngữ (nguồn: danh mục mã WMO chuẩn).
const WMO_TEXT: Record<number, Record<Locale, string>> = {
  0: { vi: 'Trời quang', en: 'Clear', zh: '晴' },
  1: { vi: 'Ít mây', en: 'Few clouds', zh: '少雲' },
  2: { vi: 'Mây rải rác', en: 'Scattered clouds', zh: '局部多雲' },
  3: { vi: 'Nhiều mây', en: 'Overcast', zh: '多雲' },
  45: { vi: 'Sương mù', en: 'Fog', zh: '霧' },
  48: { vi: 'Sương mù lạnh', en: 'Rime fog', zh: '霜霧' },
  51: { vi: 'Mưa phùn nhẹ', en: 'Light drizzle', zh: '細雨' },
  53: { vi: 'Mưa phùn', en: 'Drizzle', zh: '毛毛雨' },
  55: { vi: 'Mưa phùn dày', en: 'Dense drizzle', zh: '密集毛毛雨' },
  56: { vi: 'Mưa phùn lạnh', en: 'Cold drizzle', zh: '冷毛毛雨' },
  57: { vi: 'Mưa phùn lạnh', en: 'Cold drizzle', zh: '冷毛毛雨' },
  61: { vi: 'Mưa nhẹ', en: 'Light rain', zh: '小雨' },
  63: { vi: 'Mưa vừa', en: 'Moderate rain', zh: '中雨' },
  65: { vi: 'Mưa to', en: 'Heavy rain', zh: '大雨' },
  66: { vi: 'Mưa lạnh', en: 'Cold rain', zh: '冷雨' },
  67: { vi: 'Mưa lạnh', en: 'Cold rain', zh: '冷雨' },
  71: { vi: 'Tuyết rơi nhẹ', en: 'Light snow', zh: '小雪' },
  73: { vi: 'Tuyết', en: 'Snow', zh: '雪' },
  75: { vi: 'Tuyết dày', en: 'Heavy snow', zh: '大雪' },
  77: { vi: 'Hạt tuyết', en: 'Snow grains', zh: '雪粒' },
  80: { vi: 'Mưa rào nhẹ', en: 'Light showers', zh: '小陣雨' },
  81: { vi: 'Mưa rào', en: 'Showers', zh: '陣雨' },
  82: { vi: 'Mưa rào rất to', en: 'Violent showers', zh: '強陣雨' },
  85: { vi: 'Mưa tuyết rào', en: 'Snow showers', zh: '陣雪' },
  86: { vi: 'Mưa tuyết rào', en: 'Snow showers', zh: '陣雪' },
  95: { vi: 'Dông', en: 'Thunderstorm', zh: '雷陣雨' },
  96: { vi: 'Dông có mưa đá', en: 'Thunderstorm with hail', zh: '雷陣雨伴冰雹' },
  99: { vi: 'Dông mạnh có mưa đá', en: 'Violent thunderstorm with hail', zh: '強烈雷陣雨伴冰雹' },
};

const WMO_ICON: Record<number, string> = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌧️', 56: '🌧️', 57: '🌧️',
  61: '🌦️', 63: '🌧️', 65: '🌧️', 66: '🌧️', 67: '🌧️',
  71: '🌨️', 73: '🌨️', 75: '❄️', 77: '🌨️',
  80: '🌦️', 81: '🌧️', 82: '⛈️', 85: '🌨️', 86: '🌨️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
};

export function wmo(code: number, locale: Locale = 'vi'): WmoInfo {
  return {
    text: WMO_TEXT[code]?.[locale] ?? WMO_TEXT[code]?.vi ?? 'Không xác định',
    icon: WMO_ICON[code] ?? '🌡️',
  };
}

// Quy đổi tốc độ gió (km/h) sang cấp gió (thang Beaufort).
const BEAUFORT_THRESHOLDS = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117];
const BEAUFORT_LABELS: Record<Locale, string[]> = {
  vi: ['Lặng', 'Nhẹ', 'Nhẹ', 'Trung bình', 'Trung bình', 'Mạnh', 'Mạnh', 'Rất mạnh', 'Rất mạnh', 'Bão', 'Bão', 'Bão', 'Cuồng phong'],
  en: ['Calm', 'Light', 'Light', 'Moderate', 'Moderate', 'Fresh', 'Fresh', 'Strong', 'Strong', 'Gale', 'Gale', 'Gale', 'Storm'],
  zh: ['無風', '輕微', '輕微', '中等', '中等', '強', '強', '很強', '很強', '狂風', '狂風', '狂風', '颶風'],
};

export function beaufort(kmh: number, locale: Locale = 'vi'): { level: number; label: string } {
  let level = 0;
  for (let i = 0; i < BEAUFORT_THRESHOLDS.length; i++) {
    if (kmh > BEAUFORT_THRESHOLDS[i]) level = i + 1;
  }
  return { level, label: BEAUFORT_LABELS[locale][level] };
}

const UV_LABELS: Record<Locale, string[]> = {
  vi: ['Thấp', 'Trung bình', 'Cao', 'Rất cao', 'Cực tím cao'],
  en: ['Low', 'Moderate', 'High', 'Very high', 'Extreme'],
  zh: ['低', '中等', '高', '很高', '極高'],
};

export function uvLabel(uv: number, locale: Locale = 'vi'): string {
  const idx = uv <= 2 ? 0 : uv <= 5 ? 1 : uv <= 7 ? 2 : uv <= 10 ? 3 : 4;
  return UV_LABELS[locale][idx];
}

const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86]);
const STORM_CODES = new Set([95, 96, 99]);
const FOG_CODES = new Set([45, 48]);
const CLEAR_CODES = new Set([0, 1]);
const CLOUDY_CODES = new Set([2, 3]);

export interface Advice {
  alerts: string[];
  outfit: string[];
  plan: string[];
  items: string[];
}

// Bộ câu gợi ý theo ngôn ngữ. Chỉ mang tính tham khảo, không thay thế cảnh báo chính thức.
type Phrases = {
  storm: string;
  strongWind: (l: number) => string;
  extremeHot: string;
  heavyRain: string;
  rainHeavy: string;
  rainLight: string;
  rainHigh: string;
  hot: string;
  cold: string;
  bigDiff: (d: number) => string;
  windy: (lv: number) => string;
  defaultOutfit: string;
  clear: string;
  cloudy: string;
  fog: string;
  rainPlanHeavy: string;
  rainPlanLight: string;
  hotPlan: string;
  coldPlan: string;
  strongWindPlan: string;
  defaultPlan: string;
  itemRain: string;
  itemSun: string;
  itemHot: string;
  itemCold: string;
  itemWindy: string;
  itemFog: string;
  itemShoes: string;
};

const P: Record<Locale, Phrases> = {
  vi: {
    storm: 'Có dông: tránh đứng trên cầu và dưới tán cây, không ra bờ sông khi có sấm sét.',
    strongWind: (l) => `Gió rất mạnh (cấp ${l}): tránh xa mái che tạm và bờ sông; tuyến ngồi thuyền trên sông Hoài có thể tạm ngưng.`,
    extremeHot: 'Nắng nóng gay gắt (≥36°C): hạn chế ra nắng giữa trưa, bổ sung nước thường xuyên.',
    heavyRain: 'Mưa to: mặt cầu và lối đi phố cổ dễ trơn trượt, nước sông có thể dâng; ưu tiên nhà cổ, hội quán trong phố cổ.',
    rainHeavy: 'Mưa to: mang áo mưa; tránh ô cán dài (dễ vướng gió), đi giày chống trượt.',
    rainLight: 'Có mưa nhỏ: mang ô gập nhẹ; đường trơn nên đi chậm, tránh dép lê trơn.',
    rainHigh: 'Khả năng mưa cao: mang áo mưa/ô gọn; giày chống trượt thuận tiện hơn.',
    hot: 'Trời nóng: mặc đồ mỏng, nhẹ, thấm hút mồ hôi; đội mũ rộng vành.',
    cold: 'Trời mát/lạnh: mang áo khoác mỏng để dễ mặc và cởi.',
    bigDiff: (d) => `Chênh lệch nhiệt sáng–tối lớn (${d}°C): mang áo khoác mỏng thay đổi theo buổi.`,
    windy: (lv) => `Gió cấp ${lv}: mặc gọn, tránh váy dài rủ hay mũ dễ bay.`,
    defaultOutfit: 'Thời tiết dễ chịu: trang phục thoải mái là ổn; sáng sớm/tối mát có thể thêm áo khoác mỏng.',
    clear: 'Trời quang: rất hợp đi bộ phố cổ và ngắm cầu dưới nắng; sáng sớm và chiều tà đều đẹp.',
    cloudy: 'Trời nhiều mây, ánh sáng dịu: rất hợp chụp ảnh và đi bộ lâu không sợ nắng gắt.',
    fog: 'Sương mù: tầm nhìn hạn chế, không hợp ngắm toàn cảnh, nhưng phố cổ mờ sương rất nên thơ.',
    rainPlanHeavy: 'Không nên đi bộ lâu ngoài cầu; chuyển hẳn vào nhà cổ, hội quán, bảo tàng. Ngồi thuyền sông Hoài dễ tạm ngưng khi nước lớn.',
    rainPlanLight: 'Ưu tiên tham quan sớm; chiều tối nếu mưa có thể vào nhà cổ, hội quán trong phố cổ. Tuyến thả đèn hoa đăng trên sông Hoài vẫn đẹp lúc chiều tối.',
    hotPlan: 'Đi sớm (trước 9h) hoặc cuối chiều–tối khi mát; trưa tránh đi bộ giữa trời nắng, vào chỗ có bóng mát.',
    coldPlan: 'Đi bộ dễ chịu cả ngày; sáng sớm hơi lạnh nên khởi động nhẹ.',
    strongWindPlan: 'Gió mạnh: tuyến ngồi thuyền trên sông Hoài có thể tạm ngưng; ưu tiên đi bộ trong phố cổ.',
    defaultPlan: 'Thời tiết ổn định: thoải mái tham quan theo nhịp độ của bạn, kết hợp đi bộ phố cổ và chụp ảnh bên dòng lạch.',
    itemRain: 'Ô / áo mưa và túi chống nước cho điện thoại.',
    itemSun: 'Kem chống nắng, mũ và kính râm.',
    itemHot: 'Nước uống và quạt cầm tay nhỏ.',
    itemCold: 'Áo khoác ấm, khăn.',
    itemWindy: 'Buộc gọn tóc/mũ, tránh đồ dễ bay trong gió.',
    itemFog: 'Khẩu trang nếu nhạy cảm bụi đường.',
    itemShoes: 'Giày đi bộ thoải mái.',
  },
  en: {
    storm: 'Thunderstorms: avoid standing on the bridge or under trees, and stay off the riverbank during lightning.',
    strongWind: (l) => `Very strong wind (level ${l}): keep away from temporary shelters and the riverbank; the Hoài river boat ride may pause.`,
    extremeHot: 'Extreme heat (≥36°C): limit midday sun exposure and drink water often.',
    heavyRain: 'Heavy rain: the bridge deck and old-town paths get slippery and the river may rise; prioritise old houses and assembly halls in the old town.',
    rainHeavy: 'Heavy rain: bring a raincoat; avoid long-handle umbrellas (they catch the wind), wear non-slip shoes.',
    rainLight: 'Light rain: bring a compact umbrella; walk slowly on slippery ground, avoid slick flip-flops.',
    rainHigh: 'High rain chance: bring a compact raincoat/umbrella; non-slip shoes are handier.',
    hot: 'Hot weather: wear light, breathable clothing; a wide-brim hat helps.',
    cold: 'Cool/cold: bring a light jacket you can add or remove.',
    bigDiff: (d) => `Large day–night swing (${d}°C): bring a light jacket to change with the time of day.`,
    windy: (lv) => `Wind level ${lv}: dress snugly; avoid long flowing skirts or hats that blow away.`,
    defaultOutfit: 'Pleasant weather: comfortable clothes are fine; add a light jacket on cool mornings/evenings.',
    clear: 'Clear skies: great for walking the old town and viewing the bridge in sunlight; both dawn and dusk are lovely.',
    cloudy: 'Cloudy with soft light: ideal for photos and long walks without harsh sun.',
    fog: 'Fog: limited visibility, not ideal for wide views, but the misty old town is very atmospheric.',
    rainPlanHeavy: 'Avoid long walks on the bridge; head into old houses, assembly halls and museums. The Hoài river boat ride may pause in high water.',
    rainPlanLight: 'Visit early; if it rains later, step into old houses and assembly halls. The Hoài lantern release is still nice in the evening.',
    hotPlan: 'Go early (before 9am) or late afternoon–evening when cooler; avoid midday walking in the sun, stay in shade.',
    coldPlan: 'Comfortable to walk all day; mornings are a bit cool, so warm up gently.',
    strongWindPlan: 'Strong wind: the Hoài river boat ride may pause; prefer walking within the old town.',
    defaultPlan: 'Stable weather: explore at your own pace, mixing old-town walks with photos by the canal.',
    itemRain: 'Umbrella / raincoat and a waterproof pouch for your phone.',
    itemSun: 'Sunscreen, hat and sunglasses.',
    itemHot: 'Drinking water and a small handheld fan.',
    itemCold: 'Warm jacket and scarf.',
    itemWindy: 'Tie hair/hat securely; avoid loose items that blow away.',
    itemFog: 'A mask if sensitive to road dust.',
    itemShoes: 'Comfortable walking shoes.',
  },
  zh: {
    storm: '有雷陣雨：避免在橋上或樹下站立，雷雨時勿靠近河岸。',
    strongWind: (l) => `強風（${l} 級）：遠離臨時遮棚與河岸；秋盆河乘船行程可能暫停。`,
    extremeHot: '酷熱（≥36°C）：正午減少日曬，經常補充水分。',
    heavyRain: '大雨：橋面與古鎮步道易濕滑，河水可能上漲；優先安排古宅與會館等室內景點。',
    rainHeavy: '大雨：攜帶雨衣；避免長柄傘（易被風吹翻），穿防滑鞋。',
    rainLight: '有小雨：帶摺疊傘；地面濕滑請慢行，避免易滑的拖鞋。',
    rainHigh: '降雨機率高：攜帶輕便雨衣／傘；防滑鞋更方便。',
    hot: '炎熱：穿輕薄透氣衣物；戴寬簷帽。',
    cold: '偏涼／冷：帶可穿脫的薄外套。',
    bigDiff: (d) => `早晚溫差大（${d}°C）：帶薄外套依時段增減。`,
    windy: (lv) => `風力 ${lv} 級：穿著合身，避免長裙飄逸或帽子被吹走。`,
    defaultOutfit: '天氣舒適：一般休閒服裝即可；清早或夜晚偏涼可加薄外套。',
    clear: '晴朗：適合漫步古鎮、在陽光下賞橋；清晨與黃昏皆美。',
    cloudy: '多雲、光線柔和：適合拍照與長時間戶外步行，不畏烈陽。',
    fog: '起霧：能見度低，不適合眺望全景，但薄霧中的古鎮極具詩意。',
    rainPlanHeavy: '不宜在橋上久走；改入古宅、會館、博物館。秋盆河水位高時乘船容易暫停。',
    rainPlanLight: '優先早訪；午後若下雨可進入古宅與會館。黃昏時秋盆河放水燈仍美。',
    hotPlan: '早出（9 點前）或午後至傍晚較涼時；正午避免在烈日下步行，待在有遮蔭處。',
    coldPlan: '全天步行皆舒適；清晨略涼，請緩步暖身。',
    strongWindPlan: '強風：秋盆河乘船行程可能暫停；以古鎮內步行為主。',
    defaultPlan: '天氣穩定：依自己的步調遊覽，結合古鎮步行與水道旁拍照。',
    itemRain: '雨傘／雨衣與手機防水袋。',
    itemSun: '防曬乳、帽子與太陽眼鏡。',
    itemHot: '飲用水與小型手持扇。',
    itemCold: '保暖外套與圍巾。',
    itemWindy: '固定好頭髮／帽子，避免風中易飛失的物品。',
    itemFog: '對塵土敏感者可戴口罩。',
    itemShoes: '舒適的步行鞋。',
  },
};

// Gợi ý tự động, viết bằng ngôn ngữ du khách – chỉ mang tính tham khảo, không thay thế cảnh báo chính thức.
export function buildAdvice(d: WeatherData, locale: Locale = 'vi'): Advice {
  const phrases = P[locale];
  const alerts: string[] = [];
  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];

  const now = d.now;
  const today = d.days[0];
  const windNow = beaufort(now.windKmh, locale);
  const windMax = beaufort(today.windMaxKmh, locale);
  const codeNow = now.code;
  const tMax = today.tMax;
  const tMin = today.tMin;
  const tempDiff = tMax - tMin;
  const precip = today.precipProb;
  const uv = today.uvMax;

  const isStorm = STORM_CODES.has(codeNow);
  const isHeavyRain = codeNow === 65 || codeNow === 82 || precip >= 70;
  const isRain = RAIN_CODES.has(codeNow) || STORM_CODES.has(codeNow);
  const isLightRain = codeNow === 51 || codeNow === 53 || codeNow === 55 || codeNow === 56 || codeNow === 57;
  const isFog = FOG_CODES.has(codeNow);
  const isClear = CLEAR_CODES.has(codeNow);
  const isCloudy = CLOUDY_CODES.has(codeNow);
  const isHot = now.temperature >= 32 || tMax >= 32;
  const isExtremeHot = now.temperature >= 36 || tMax >= 36;
  const isCold = tMax <= 10;
  const isBigDiff = tempDiff > 8;
  const strongWind = windNow.level >= 7 || windMax.level >= 7;
  const windy = windNow.level >= 5 || windMax.level >= 5;
  const uvHigh = uv >= 5;

  // ⚠️ Nhắc nhở rủi ro (đỏ, ưu tiên trên cùng) – chỉ khi điều kiện thực sự nghiêm trọng
  if (isStorm) alerts.push(phrases.storm);
  if (strongWind) alerts.push(phrases.strongWind(Math.max(windNow.level, windMax.level)));
  if (isExtremeHot) alerts.push(phrases.extremeHot);
  if (isHeavyRain) alerts.push(phrases.heavyRain);

  // 🧥 出行穿搭
  if (isRain || precip >= 60) {
    if (isHeavyRain) outfit.push(phrases.rainHeavy);
    else if (isLightRain) outfit.push(phrases.rainLight);
    else outfit.push(phrases.rainHigh);
  }
  if (isHot) outfit.push(phrases.hot);
  if (isCold) outfit.push(phrases.cold);
  if (isBigDiff) outfit.push(phrases.bigDiff(tempDiff));
  if (windy && !isRain) outfit.push(phrases.windy(windNow.level || windMax.level));
  if (outfit.length === 0) outfit.push(phrases.defaultOutfit);

  // 🗺️ 游玩安排
  if (isClear) plan.push(phrases.clear);
  if (isCloudy) plan.push(phrases.cloudy);
  if (isFog) plan.push(phrases.fog);
  if (isRain || precip >= 50) {
    if (isHeavyRain) plan.push(phrases.rainPlanHeavy);
    else plan.push(phrases.rainPlanLight);
  }
  if (isHot) plan.push(phrases.hotPlan);
  if (isCold) plan.push(phrases.coldPlan);
  if (strongWind) plan.push(phrases.strongWindPlan);
  if (plan.length === 0) plan.push(phrases.defaultPlan);

  // 🎒 随身物品
  if (isRain || precip >= 50) items.push(phrases.itemRain);
  if (uvHigh || isHot || isClear) items.push(phrases.itemSun);
  if (isHot || isExtremeHot) items.push(phrases.itemHot);
  if (isCold) items.push(phrases.itemCold);
  if (windy) items.push(phrases.itemWindy);
  if (isFog) items.push(phrases.itemFog);
  items.push(phrases.itemShoes);

  return { alerts, outfit, plan, items };
}

function buildUrl(): string {
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LON),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,wind_speed_10m_max,sunrise,sunset',
    timezone: TZ,
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

// Trả về bản tin thời tiết; kết quả được lưu tạm ở biên Cloudflare (khoảng 30 phút).
export async function getWeather(): Promise<WeatherData> {
  const url = buildUrl();
  const cacheKey = new Request(url);

  const hasCache = typeof caches !== 'undefined' && caches.default;
  if (hasCache) {
    try {
      const hit = await caches.default.match(cacheKey);
      if (hit) return (await hit.json()) as WeatherData;
    } catch {
      /* bỏ qua lỗi cache, tiếp tục truy xuất trực tiếp */
    }
  }

  const res = await fetch(url, {
    cf: { cacheTtl: 1800 },
    headers: { 'User-Agent': 'chuacau-org/1.0 (+https://chuacau.org)' },
  });
  if (!res.ok) throw new Error(`weather request failed: ${res.status}`);
  const json = (await res.json()) as any;

  const now: WeatherNow = {
    temperature: Math.round(json.current.temperature_2m),
    apparent: Math.round(json.current.apparent_temperature),
    humidity: json.current.relative_humidity_2m,
    windKmh: json.current.wind_speed_10m,
    code: json.current.weather_code,
  };

  const days: DayForecast[] = (json.daily.time as string[]).map((date, i) => ({
    date,
    code: json.daily.weather_code[i],
    tMax: Math.round(json.daily.temperature_2m_max[i]),
    tMin: Math.round(json.daily.temperature_2m_min[i]),
    precipProb: json.daily.precipitation_probability_max?.[i] ?? 0,
    uvMax: json.daily.uv_index_max[i],
    windMaxKmh: json.daily.wind_speed_10m_max[i],
  }));

  const data: WeatherData = { now, days };

  if (hasCache) {
    try {
      await caches.default.put(
        cacheKey,
        new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=1800' },
        })
      );
    } catch {
      /* bỏ qua nếu không ghi được cache */
    }
  }

  return data;
}
