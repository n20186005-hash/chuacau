import type { Locale } from '../i18n';

export interface LegalDoc {
  updated: string;
  h1: string;
  intro: string;
  sections: { h2: string; body: string }[];
}

export const privacy: Record<Locale, LegalDoc> = {
  vi: {
    updated: 'Cập nhật: tháng 9 năm 2026',
    h1: 'Chính sách quyền riêng tư',
    intro: 'Chúng tôi chỉ thu thập lượng dữ liệu tối thiểu cần thiết để vận hành và cải thiện trang hướng dẫn này.',
    sections: [
      { h2: 'Thông tin chúng tôi có thể thu thập', body: 'Dữ liệu duyệt web như địa chỉ IP, loại trình duyệt và trang đã truy cập; Cookie và công nghệ tương tự; thông tin bạn tự nguyện cung cấp khi liên hệ qua email hoặc kênh liên hệ được công bố.' },
      { h2: 'Cách chúng tôi sử dụng thông tin', body: 'Dữ liệu được dùng để cải thiện nội dung và trải nghiệm, phân tích lưu lượng và cách sử dụng, phản hồi yêu cầu và thực hiện nghĩa vụ pháp lý khi áp dụng.' },
      { h2: 'Dịch vụ bên thứ ba', body: 'Trang có thể sử dụng Google Maps để hiển thị bản đồ và Google Analytics 4 để phân tích lưu lượng khi bạn đồng ý Cookie phân tích. Mỗi dịch vụ có chính sách riêng. Ảnh trong gói dự án được lưu cục bộ; việc ghi công nguồn ảnh không đồng nghĩa ảnh được tải từ máy chủ bên thứ ba khi người dùng mở trang.' },
      { h2: 'Quyền của bạn', body: 'Tùy nơi cư trú và luật áp dụng, bạn có thể có quyền truy cập dữ liệu cá nhân, yêu cầu sửa hoặc xóa, phản đối hoặc hạn chế một số hoạt động xử lý, rút lại sự đồng ý và gửi khiếu nại tới cơ quan giám sát có thẩm quyền.' },
      { h2: 'Lưu giữ và bảo mật', body: 'Chúng tôi chỉ lưu dữ liệu trong thời gian hợp lý cho mục đích đã nêu và áp dụng các biện pháp kỹ thuật, tổ chức phù hợp với tính chất của một trang thông tin tĩnh.' },
      { h2: 'Liên hệ', body: 'Nếu tên miền chính thức có trang liên hệ, yêu cầu về quyền riêng tư nên được gửi qua thông tin liên hệ công bố tại đó.' },
    ],
  },
  en: {
    updated: 'Updated: September 2026',
    h1: 'Privacy Policy',
    intro: 'We collect only the minimum data needed to operate and improve this guide.',
    sections: [
      { h2: 'Information we may collect', body: 'Browsing data such as IP address, browser type and pages visited; cookies and similar technologies; information you voluntarily provide when contacting us via the published email or contact channel.' },
      { h2: 'How we use information', body: 'Data is used to improve content and experience, analyse traffic and usage, respond to requests and meet legal obligations where applicable.' },
      { h2: 'Third-party services', body: 'The site may use Google Maps to display maps and Google Analytics 4 to analyse traffic when you consent to analytics cookies. Each service has its own policy. Images in the project package are stored locally; crediting an image source does not mean the image is loaded from a third-party server when you open the page.' },
      { h2: 'Your rights', body: 'Depending on where you live and the law applied, you may have rights to access personal data, request correction or deletion, object to or restrict certain processing, withdraw consent and complain to the competent supervisory authority.' },
      { h2: 'Retention and security', body: 'We keep data only for a reasonable period for the stated purposes and apply technical and organisational measures suited to a static information site.' },
      { h2: 'Contact', body: 'If the official domain has a contact page, privacy requests should be sent via the contact information published there.' },
    ],
  },
  zh: {
    updated: '更新：2026 年 9 月',
    h1: '隱私權政策',
    intro: '我們僅蒐集營運與改善本導覽站所需的最小量資料。',
    sections: [
      { h2: '我們可能蒐集的資訊', body: '瀏覽資料如 IP 位址、瀏覽器類型與造訪頁面；Cookie 與類似技術；您經公開的電子郵件或聯絡管道主動提供的資訊。' },
      { h2: '我們如何使用資訊', body: '資料用於改善內容與體驗、分析流量與使用情形、回應需求，並於適用時履行法律義務。' },
      { h2: '第三方服務', body: '本站可能使用 Google 地圖顯示地圖，並在您同意分析 Cookie 時使用 Google Analytics 4 分析流量。各服務自有其政策。專案內圖片為本地保存；標註圖片出處不代表使用者開啟頁面時圖片從第三方伺服器載入。' },
      { h2: '您的權利', body: '依居住地與適用法律，您可能享有存取個人資料、要求更正或刪除、反對或限制特定處理、撤回同意，以及向主管監管機關申訴的權利。' },
      { h2: '保存與安全', body: '我們僅於達成所述目的之合理期間內保存資料，並採取符合靜態資訊站性質的技術與組織措施。' },
      { h2: '聯絡方式', body: '若官方網域設有聯絡頁面，隱私相關要求請經該處公布的聯絡資訊提出。' },
    ],
  },
};

export const terms: Record<Locale, LegalDoc> = {
  vi: {
    updated: 'Cập nhật: tháng 9 năm 2026',
    h1: 'Điều khoản dịch vụ',
    intro: 'Khi truy cập và sử dụng trang này, bạn đồng ý với các điều khoản dưới đây.',
    sections: [
      { h2: 'Mục đích nội dung', body: 'Trang là dự án hướng dẫn du lịch độc lập, phi lợi nhuận, không trực thuộc Chùa Cầu, cơ quan quản lý di sản, chính quyền thành phố Đà Nẵng hay bất kỳ tổ chức chính thức nào.' },
      { h2: 'Độ chính xác của thông tin', body: 'Chúng tôi cố gắng đối chiếu thông tin với nguồn công khai có thẩm quyền, nhưng giờ mở cửa, giá vé, tổ chức giao thông, điều kiện bảo tồn và dịch vụ có thể thay đổi. Hãy xác minh thông tin quan trọng qua kênh chính thức trước khi khởi hành.' },
      { h2: 'Sở hữu trí tuệ', body: 'Thiết kế và nội dung biên soạn gốc của trang được bảo hộ theo luật áp dụng. Ảnh thuộc bản quyền của các nhiếp ảnh gia tương ứng và được sử dụng theo giấy phép ghi trong hồ sơ dự án. Google Maps và dữ liệu bản đồ tuân theo điều khoản của Google.' },
      { h2: 'Liên kết ngoài', body: 'Liên kết tới cơ quan du lịch, bản đồ hoặc nguồn tham khảo chỉ nhằm giúp người đọc kiểm chứng và lập kế hoạch; chúng tôi không kiểm soát nội dung hay chính sách của các trang đó.' },
      { h2: 'Giới hạn trách nhiệm', body: 'Trang được cung cấp theo hiện trạng và không đưa ra bảo đảm tuyệt đối về tính đầy đủ hoặc phù hợp cho một mục đích cụ thể. Trong phạm vi pháp luật cho phép, dự án không chịu trách nhiệm cho thiệt hại phát sinh từ quyết định du lịch chỉ dựa trên nội dung của trang.' },
    ],
  },
  en: {
    updated: 'Updated: September 2026',
    h1: 'Terms of Service',
    intro: 'By accessing and using this site, you agree to the terms below.',
    sections: [
      { h2: 'Purpose of content', body: 'This site is an independent, non-profit travel guide project, not affiliated with Chùa Cầu, the heritage authority, the Đà Nẵng city government or any official organisation.' },
      { h2: 'Accuracy of information', body: 'We strive to cross-check information with authoritative public sources, but opening hours, ticket prices, traffic arrangements, conservation conditions and services may change. Verify important details through official channels before departure.' },
      { h2: 'Intellectual property', body: 'The site’s original design and compiled content are protected under applicable law. Images belong to the respective photographers and are used under licences noted in the project file. Google Maps and map data are subject to Google’s terms.' },
      { h2: 'External links', body: 'Links to tourism authorities, maps or reference sources are only to help readers verify and plan; we do not control the content or policies of those sites.' },
      { h2: 'Limitation of liability', body: 'The site is provided as-is and gives no absolute warranty of completeness or fitness for a particular purpose. To the extent permitted by law, the project is not liable for damages arising from travel decisions based solely on the site’s content.' },
    ],
  },
  zh: {
    updated: '更新：2026 年 9 月',
    h1: '服務條款',
    intro: '當您存取與使用本網站，即表示同意下列條款。',
    sections: [
      { h2: '內容目的', body: '本站為獨立、非營利的旅遊導覽專案，不隸屬於日本廊橋、遺產主管機關、峴港市政府或任何官方組織。' },
      { h2: '資訊準確性', body: '我們致力以權威公開來源交叉查證，但開放時間、票價、交通安排、保存條件與服務可能變動。出發前請經官方管道確認重要資訊。' },
      { h2: '智慧財產權', body: '本站原創設計與編寫內容受適用法律保護。圖片版權歸各別攝影師所有，並依專案檔案所載授權使用。Google 地圖與地圖資料適用 Google 條款。' },
      { h2: '外部連結', body: '連往旅遊主管機關、地圖或參考來源的連結，僅供讀者查證與規劃；我們不控制這些網站的內容或政策。' },
      { h2: '責任限制', body: '本站依現狀提供，不對完整性或特定用途之適用性作絕對保證。於法律允許範圍內，本專案不對僅依本站內容所做的旅遊決定所生損害負責。' },
    ],
  },
};
