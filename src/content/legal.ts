import type { Locale } from '../i18n';

export interface LegalDoc {
  updated: string;
  h1: string;
  intro: string;
  sections: { h2: string; body: string }[];
}

export const privacy: Record<Locale, LegalDoc> = {
  "vi": {
    "updated": "Cập nhật: 23/10/2026",
    "h1": "Chính sách quyền riêng tư",
    "intro": "Trang hướng dẫn độc lập này có lựa chọn phân tích, bản đồ nhúng và dự báo do máy chủ lấy từ nhà cung cấp bên ngoài.",
    "sections": [
      {
        "h2": "Lựa chọn Google Analytics",
        "body": "Google Analytics 4 (G-HXM22WWPKP) mặc định tắt khi chưa có lựa chọn đã lưu. localStorage lưu analytics-consent là granted hoặc denied. Chỉ bật sau khi đồng ý được lưu và đọc lại; tắt có hiệu lực ngay trong trang này và cố xóa Cookie GA của tên miền. Thao tác không xóa dữ liệu đã gửi trước đó. Nếu trình duyệt không cho lưu, trạng thái sẽ báo lỗi thay vì xác nhận đã lưu."
      },
      {
        "h2": "Bản đồ, thời tiết và lưu trữ",
        "body": "Bản đồ Google nhúng có thể liên hệ Google khi được tải và dùng Cookie theo chính sách riêng. Máy chủ trang lấy dự báo từ Open-Meteo theo tọa độ di tích, không yêu cầu vị trí thiết bị. Nhà cung cấp lưu trữ Cloudflare xử lý yêu cầu HTTP để phục vụ trang. Bản trang công khai có mã Cloudflare Web Analytics đo hiệu năng tải trang; mã này hoạt động độc lập với GA. Việc thấy mã không chứng minh dữ liệu đã truyền thành công. Lựa chọn GA không điều khiển những dịch vụ riêng này."
      },
      {
        "h2": "Lưu cục bộ",
        "body": "Ảnh được phục vụ cùng tên miền. Service Worker có thể lưu bản sao ảnh và tài nguyên tĩnh để tải lại; không lưu trang HTML thời tiết hoặc cài đặt. Ngôn ngữ theo URL, không có tính năng lưu sở thích riêng. Bạn có thể xóa dữ liệu trang trong trình duyệt; lần sau GA sẽ cần lựa chọn mới."
      },
      {
        "h2": "Kiểm tra và giới hạn",
        "body": "Trang không có biểu mẫu liên hệ hay tài khoản người dùng. Việc có mã phân tích không chứng minh yêu cầu đã gửi thành công. Có thể đổi lựa chọn tại trang cài đặt; quyền và yêu cầu dữ liệu của bên thứ ba cần xem chính sách tương ứng."
      }
    ]
  },
  "en": {
    "updated": "Updated: 23 October 2026",
    "h1": "Privacy Policy",
    "intro": "This independent guide has an analytics choice, an embedded map and forecasts retrieved by its server from an external provider.",
    "sections": [
      {
        "h2": "Google Analytics choice",
        "body": "Google Analytics 4 (G-HXM22WWPKP) defaults off without a saved affirmative choice. localStorage stores analytics-consent as granted or denied. Analytics starts only after permission is saved and read back; turning it off immediately denies it in this page and attempts to remove this domain’s GA cookies. This does not erase previously transmitted data. Storage failure produces an error rather than a false saved confirmation."
      },
      {
        "h2": "Maps, weather and hosting",
        "body": "The embedded Google map can contact Google when loaded and use cookies under its own policy. The site server requests Open-Meteo forecasts for the monument’s coordinates without requesting device location. Cloudflare hosting processes HTTP requests to serve the site. The public site includes a Cloudflare Web Analytics performance beacon, operating independently of GA. Script presence does not prove successful data transmission. The GA choice does not control these separate services."
      },
      {
        "h2": "Local storage",
        "body": "Images are served from this domain. A Service Worker may cache images and static resources for reuse, but does not cache weather HTML or settings pages. Language follows the URL; there is no separate saved-preferences feature. Clearing site data removes the saved choice, so GA will require a new choice."
      },
      {
        "h2": "Checks and limits",
        "body": "This site has no contact form or user account. The presence of analytics code does not establish successful transmission. Change your choice in cookie settings; consult the respective provider policies for third-party data requests and rights."
      }
    ]
  },
  "zh": {
    "updated": "更新：2026年10月23日",
    "h1": "隱私權政策",
    "intro": "本站為獨立導覽，設有分析選項、嵌入地圖及由伺服器向外部供應商取得的預報。",
    "sections": [
      {
        "h2": "Google Analytics選擇",
        "body": "沒有已儲存的明確同意時，Google Analytics 4（G-HXM22WWPKP）預設關閉。localStorage以analytics-consent記錄granted或denied；成功儲存並讀回同意後才啟用。關閉會立即在本頁拒絕分析，並嘗試清除本網域GA Cookie，不會刪除先前已傳送資料。儲存失敗時會顯示錯誤，不會假稱已儲存。"
      },
      {
        "h2": "地圖、天氣與主機",
        "body": "Google嵌入地圖載入時可連線Google，並依其政策使用Cookie。本站伺服器依古蹟座標向Open-Meteo取得預報，不要求裝置定位。Cloudflare主機處理HTTP請求以提供網頁；公開網站包含獨立於GA的Cloudflare Web Analytics載入效能信標。出現程式碼不代表資料已成功傳送。GA選項不控制這些獨立服務。"
      },
      {
        "h2": "本機儲存",
        "body": "照片由同網域提供。Service Worker可快取照片與靜態資源，不快取天氣HTML或設定頁面。語言依網址決定，沒有另存偏好功能。清除網站資料會移除選擇，下次使用GA需要重新選擇。"
      },
      {
        "h2": "檢查與限制",
        "body": "本站沒有聯絡表單或使用者帳號。出現分析程式碼不代表成功傳送請求。可至Cookie設定更改選擇；第三方資料請求與權利請參閱各供應商政策。"
      }
    ]
  }
};

export const terms: Record<Locale, LegalDoc> = {
  "vi": {
    "updated": "Cập nhật: 23/10/2026",
    "h1": "Điều khoản dịch vụ",
    "intro": "Khi truy cập và sử dụng trang này, bạn đồng ý với các điều khoản dưới đây.",
    "sections": [
      {
        "h2": "Mục đích nội dung",
        "body": "Trang là hướng dẫn độc lập, không phải trang của Chùa Cầu, cơ quan quản lý di sản hay chính quyền. Trang không bán vé hoặc xác nhận đặt chỗ."
      },
      {
        "h2": "Độ chính xác của thông tin",
        "body": "Chúng tôi cố gắng đối chiếu thông tin với nguồn công khai có thẩm quyền, nhưng giờ mở cửa, giá vé, tổ chức giao thông, điều kiện bảo tồn và dịch vụ có thể thay đổi. Hãy xác minh thông tin quan trọng qua kênh chính thức trước khi khởi hành."
      },
      {
        "h2": "Sở hữu trí tuệ",
        "body": "Thiết kế và nội dung biên soạn gốc của trang được bảo hộ theo luật áp dụng. Ảnh thuộc bản quyền của các nhiếp ảnh gia tương ứng và được sử dụng theo giấy phép ghi trong hồ sơ dự án. Google Maps và dữ liệu bản đồ tuân theo điều khoản của Google."
      },
      {
        "h2": "Liên kết ngoài",
        "body": "Liên kết tới cơ quan du lịch, bản đồ hoặc nguồn tham khảo chỉ nhằm giúp người đọc kiểm chứng và lập kế hoạch; chúng tôi không kiểm soát nội dung hay chính sách của các trang đó."
      },
      {
        "h2": "Giới hạn trách nhiệm",
        "body": "Trang được cung cấp theo hiện trạng và không đưa ra bảo đảm tuyệt đối về tính đầy đủ hoặc phù hợp cho một mục đích cụ thể. Trong phạm vi pháp luật cho phép, dự án không chịu trách nhiệm cho thiệt hại phát sinh từ quyết định du lịch chỉ dựa trên nội dung của trang."
      }
    ]
  },
  "en": {
    "updated": "Updated: 23 October 2026",
    "h1": "Terms of Service",
    "intro": "By accessing and using this site, you agree to the terms below.",
    "sections": [
      {
        "h2": "Purpose of content",
        "body": "This is an independent guide, rather than the monument, heritage authority or government website. It does not sell tickets or confirm bookings."
      },
      {
        "h2": "Accuracy of information",
        "body": "We strive to cross-check information with authoritative public sources, but opening hours, ticket prices, traffic arrangements, conservation conditions and services may change. Verify important details through official channels before departure."
      },
      {
        "h2": "Intellectual property",
        "body": "The site’s original design and compiled content are protected under applicable law. Images belong to the respective photographers and are used under licences noted in the project file. Google Maps and map data are subject to Google’s terms."
      },
      {
        "h2": "External links",
        "body": "Links to tourism authorities, maps or reference sources are only to help readers verify and plan; we do not control the content or policies of those sites."
      },
      {
        "h2": "Limitation of liability",
        "body": "The site is provided as-is and gives no absolute warranty of completeness or fitness for a particular purpose. To the extent permitted by law, the project is not liable for damages arising from travel decisions based solely on the site’s content."
      }
    ]
  },
  "zh": {
    "updated": "更新：2026年10月23日",
    "h1": "服務條款",
    "intro": "當您存取與使用本網站，即表示同意下列條款。",
    "sections": [
      {
        "h2": "內容目的",
        "body": "本站為獨立導覽，並非古蹟、遺產管理或政府網站，不出售門票或確認預訂。"
      },
      {
        "h2": "資訊準確性",
        "body": "我們致力以權威公開來源交叉查證，但開放時間、票價、交通安排、保存條件與服務可能變動。出發前請經官方管道確認重要資訊。"
      },
      {
        "h2": "智慧財產權",
        "body": "本站原創設計與編寫內容受適用法律保護。圖片版權歸各別攝影師所有，並依專案檔案所載授權使用。Google 地圖與地圖資料適用 Google 條款。"
      },
      {
        "h2": "外部連結",
        "body": "連往旅遊主管機關、地圖或參考來源的連結，僅供讀者查證與規劃；我們不控制這些網站的內容或政策。"
      },
      {
        "h2": "責任限制",
        "body": "本站依現狀提供，不對完整性或特定用途之適用性作絕對保證。於法律允許範圍內，本專案不對僅依本站內容所做的旅遊決定所生損害負責。"
      }
    ]
  }
};
