import type { Locale } from '../i18n';

export interface Card { title: string; body: string; }
export interface KindCard { kind: string; title: string; body: string; }
export interface TimelineItem { year: string; text: string; }
export interface SubSection { h3: string; body: string; }
export interface SeasonRow { phase: string; weather: string; advice: string; }
export interface BreadcrumbItem { name: string; url: string; }
export interface FaqPair { q: string; a: string; }

export interface HomeContent {
  meta: { title: string; description: string };
  attractionDescription: string;
  breadcrumb: BreadcrumbItem[];
  hero: { kicker: string; breadcrumbLabel: string; h1a: string; h1em: string; lead: string; ctaPlan: string; ctaMaps: string };
  intro: { ornament: string; h2: string; paras: string[]; timeline: TimelineItem[]; figcaption: string };
  legends: { tag: string; h2: string; lead: string; cards: KindCard[] };
  visit: { tag: string; h2: string; cards: Card[] };
  moments: { h2: string; lead: string };
  move: { tag: string; h2: string; subs: SubSection[]; mapTitle: string };
  utilities: { tag: string; h2: string; lead: string; cards: Card[] };
  seasonal: { tag: string; h2: string; lead: string; rows: SeasonRow[]; note: string };
  itinerary: { tag: string; h2: string; lead: string; personaCards: KindCard[]; halfDay: Card; fullDay: Card };
  foodNearby: { foodH2: string; foodLead: string; nearbyH2: string; nearbyLead: string; nearbyTags: string[] };
  photo: { tag: string; h2: string; cards: Card[] };
  responsibility: {
    tag: string; h2: string; lead: string;
    should: { h4: string; items: string[] };
    shouldNot: { h4: string; items: string[] };
    cards: Card[]; note: string;
  };
  faq: { h2: string; pairs: [string, string][] };
  sources: { h2: string; lead: string; links: { label: string; href: string }[] };
}

export const home: Record<Locale, HomeContent> = {
  "vi": {
    "meta": {
      "title": "Chùa Cầu Hội An: vé phố cổ, giờ tham quan & tu bổ 2024",
      "description": "Hướng dẫn Chùa Cầu (Cầu Nhật Bản, Lai Viễn Kiều): lịch sử, đợt tu bổ 2024, phân biệt vé phố cổ và giờ vào di tích, địa chỉ, bản đồ và lưu ý đi bộ."
    },
    "attractionDescription": "Chùa Cầu, Cầu Nhật Bản và Lai Viễn Kiều là các tên gọi của cây cầu gỗ mái ngói trong Đô thị cổ Hội An. Địa chỉ hiện nay: đường Nguyễn Thị Minh Khai, phường Hội An, thành phố Đà Nẵng. Quảng Nam là tên tỉnh trong nhiều tài liệu trước sắp xếp hành chính năm 2025.",
    "breadcrumb": [
      {
        "name": "Chùa Cầu",
        "url": "HOME"
      },
      {
        "name": "Hội An",
        "url": "https://hoianworldheritage.org.vn/"
      },
      {
        "name": "Đà Nẵng",
        "url": "https://danangfantasticity.com/en/see-and-do/japanese-covered-bridge-chua-cau"
      },
      {
        "name": "Việt Nam",
        "url": "https://vietnam.travel/places-to-go/central-vietnam/hoi-an"
      }
    ],
    "hero": {
      "kicker": "Biểu tượng của Đô thị cổ Hội An",
      "breadcrumbLabel": "Hội An › Đà Nẵng › Việt Nam",
      "h1a": "Chùa Cầu",
      "h1em": "nơi những dòng văn hóa gặp nhau",
      "lead": "Cầu Nhật Bản – Lai Viễn Kiều – là công trình gỗ mái ngói hơn bốn thế kỷ tuổi, nối câu chuyện thương cảng Hội An với ký ức giao thương Việt Nam, Nhật Bản và Trung Hoa.",
      "ctaPlan": "Lập kế hoạch tham quan",
      "ctaMaps": "Mở Google Maps"
    },
    "intro": {
      "ornament": "Lai Viễn Kiều",
      "h2": "Một cây cầu, nhiều lớp ký ức",
      "paras": [
        "Chùa Cầu, Cầu Nhật Bản và Lai Viễn Kiều là các tên gọi của cây cầu gỗ mái ngói trong Đô thị cổ Hội An. Địa chỉ hiện nay: đường Nguyễn Thị Minh Khai, phường Hội An, thành phố Đà Nẵng. Quảng Nam là tên tỉnh trong nhiều tài liệu trước sắp xếp hành chính năm 2025.",
        "Cổng du lịch Đà Nẵng gắn nguồn gốc cầu với thương nhân Nhật Bản cuối thế kỷ XVI–đầu XVII. Phần mô tả giá trị di sản của UNESCO nói đến cây cầu gỗ thế kỷ XVIII. Đây là các cách mô tả khác nhau về nguồn gốc và công trình qua nhiều lần tu bổ, không phải bằng chứng cho một năm xây dựng duy nhất.",
        "Kiến trúc kết hợp lối qua cầu có mái với gian thờ. UNESCO ghi danh toàn Đô thị cổ Hội An năm 1999; Chùa Cầu là một thành phần của quần thể, không phải di sản được ghi danh riêng.",
        "Theo cổng Di sản Hội An, công trình tu bổ khởi công ngày 28/12/2022 và khánh thành ngày 03/08/2024 sau gần 19 tháng. Ảnh trên trang chụp ngày 01/08/2024, là tư liệu chứ không phản ánh điều kiện hôm nay."
      ],
      "timeline": [
        {
          "year": "Cuối XVI–đầu XVII",
          "text": "Nguồn du lịch Đà Nẵng mô tả nguồn gốc cây cầu gắn với thương nhân Nhật Bản."
        },
        {
          "year": "Thế kỷ XVIII",
          "text": "UNESCO mô tả cầu gỗ có gian thờ trong quần thể phố cổ; không xác định một niên đại duy nhất cho mọi cấu kiện."
        },
        {
          "year": "1999",
          "text": "Đô thị cổ Hội An được ghi danh Di sản Thế giới."
        },
        {
          "year": "28/12/2022–03/08/2024",
          "text": "Đợt tu bổ gần 19 tháng, kết thúc bằng lễ khánh thành."
        }
      ],
      "figcaption": "Chùa Cầu lúc chạng vạng, 01/08/2024."
    },
    "legends": {
      "tag": "TRUYỀN THUYẾT & CÂU CHUYỆN",
      "h2": "Những câu chuyện quanh cây cầu",
      "lead": "Từ truyền thuyết trấn thủy đến những sử liệu còn lưu lại, Chùa Cầu mang theo nhiều lớp nghĩa văn hóa. Mỗi câu chuyện dưới đây được gắn nhãn để dễ phân biệt giữa truyền thuyết dân gian, sử liệu và tín ngưỡng.",
      "cards": [
        {
          "kind": "Truyền thuyết",
          "title": "Namazu và chuyện trấn thủy",
          "body": "Cổng du lịch Đà Nẵng kể truyền thuyết sinh vật Namazu và ý nghĩa bảo hộ của cây cầu. Đây là chuyện dân gian, không phải lời giải thích địa chất hay niên đại xây dựng."
        },
        {
          "kind": "Kiến trúc & tín ngưỡng",
          "title": "Cầu có gian thờ",
          "body": "Quan sát mái ngói, kết cấu gỗ và gian thờ; giữ yên lặng, không chạm vào đồ thờ hoặc chi tiết được bảo vệ. Tên gọi “chùa” không có nghĩa đây là một ngôi chùa Phật giáo thông thường."
        }
      ]
    },
    "visit": {
      "tag": "THÔNG TIN THỰC DỤNG",
      "h2": "Tham quan Chùa Cầu",
      "cards": [
        {
          "title": "Giờ trên bản đồ ≠ lịch mọi khu vực",
          "body": "Google Maps ghi 09:00–22:00 cả tuần khi đối chiếu ngày 23/10/2026. Đây là thông tin bên thứ ba, không bảo đảm giờ vào cầu, gian thờ hay mọi dịch vụ. Kiểm tra biển tại chỗ và thông báo của đơn vị quản lý; giờ phố đi bộ là lịch riêng."
        },
        {
          "title": "Vé phố cổ & Chùa Cầu",
          "body": "Bài Di sản Hội An ngày 16/03/2026 nêu vé phố cổ 80.000 hoặc 120.000 đồng với quyền lợi khác nhau, trong đó chọn Chùa Cầu hoặc Miếu Quan Công. Đây không phải hai mức vé riêng cho cầu. Hỏi quầy vé về gói hiện hành; vé biểu diễn Ký ức Hội An là sản phẩm khác."
        },
        {
          "title": "Thời lượng gợi ý",
          "body": "Dự trù khoảng 30–45 phút để quan sát và chụp ảnh; đây là gợi ý lập kế hoạch. Cộng thêm thời gian cho hàng chờ và các di tích trong gói vé đã chọn."
        }
      ]
    },
    "moments": {
      "h2": "Khoảnh khắc đẹp nhất",
      "lead": "Sáng sớm cho cảm giác tĩnh tại và dễ quan sát chi tiết kiến trúc. Cuối chiều chuyển sang “giờ xanh” là lúc mái ngói, tường vàng và ánh đèn phố cổ tạo nên khung cảnh đặc trưng nhất."
    },
    "move": {
      "tag": "DI CHUYỂN",
      "h2": "Hướng dẫn di chuyển chi tiết",
      "subs": [
        {
          "h3": "Địa chỉ hiện hành",
          "body": "Nguyễn Thị Minh Khai, phường Hội An, Đà Nẵng. Dùng ghim Chùa Cầu trên bản đồ; các tài liệu cũ có thể ghi Hội An, Quảng Nam."
        },
        {
          "h3": "Từ sân bay hoặc ga Đà Nẵng",
          "body": "So sánh điểm đón, điểm trả, hành lý và tổng giá với đơn vị vận chuyển trước khi đặt. Thời gian phụ thuộc giao thông; trang không xác nhận lịch xe buýt, giá taxi hoặc thời gian cố định."
        },
        {
          "h3": "Đoạn cuối vào phố cổ",
          "body": "Kiểm tra biển phân luồng và giờ phố đi bộ. Thống nhất điểm trả khách hoặc gửi xe được phép bên ngoài khu hạn chế rồi tiếp tục đi bộ theo chỉ dẫn tại chỗ."
        },
        {
          "h3": "Nếu cần hỗ trợ di chuyển",
          "body": "Hỏi nhân viên về bậc, mặt cầu, lối vào đang sử dụng và khả năng đi cùng xe lăn trước chuyến đi. Không mặc định di tích lịch sử có lối đi không bậc hoặc bãi đỗ sát cửa."
        }
      ],
      "mapTitle": "Bản đồ Chùa Cầu Hội An"
    },
    "utilities": {
      "tag": "TIỆN ÍCH XUNG QUANH",
      "h2": "Tiện ích & dịch vụ quanh Chùa Cầu",
      "lead": "Các gợi ý chuẩn bị dưới đây không xác nhận tiện ích ngay trong di tích. Hỏi đơn vị quản lý hoặc cơ sở dịch vụ về vị trí, phí và khả năng sử dụng hiện tại.",
      "cards": [
        {
          "title": "Nhà vệ sinh & nghỉ chân",
          "body": "Xác nhận địa điểm sử dụng được trên tuyến đi bộ trước khi dẫn trẻ nhỏ hoặc người cần hỗ trợ; không mặc định có nhà vệ sinh trong cầu."
        },
        {
          "title": "Gửi xe & tiếp cận",
          "body": "Theo biển chỉ dẫn hiện hành; kiểm tra khoảng cách đi bộ, bậc và bề mặt thay vì dựa vào hình ảnh."
        },
        {
          "title": "Nước & thanh toán",
          "body": "Mang nước và hỏi giá, phương thức thanh toán trước khi mua. Không dựa vào giả định mọi nơi nhận thẻ."
        },
        {
          "title": "Dịch vụ riêng biệt",
          "body": "Quán ăn, lưu trú, thuê xe và thuyền có giờ, giá và điều kiện riêng; trang không xác nhận nhà cung cấp hoặc tình trạng mở cửa."
        }
      ]
    },
    "seasonal": {
      "tag": "THEO MÙA",
      "h2": "Chiến lược tham quan theo mùa",
      "lead": "Hội An thuộc vùng khí hậu nhiệt đới gió mùa của Duyên hải Trung Bộ, với một mùa khô (thường từ tháng 2 đến tháng 8) và một mùa mưa (thường từ tháng 9 đến tháng 1, có thể xuất hiện bão hoặc áp thấp nhiệt đới). Bảng dưới tổng hợp đặc trưng nhiều năm để bạn sắp xếp lịch trình; số liệu thực tế từng năm có thể dao động, hãy kết hợp với bản tin dự báo thời tiết ở trên.",
      "rows": [
        {
          "phase": "Tháng 2–4 · Đầu mùa khô",
          "weather": "Khô ráo, ít mưa, nắng ấm, độ ẩm vừa phải.",
          "advice": "Lý tưởng nhất: sáng sớm và chiều tối đều thuận tiện, ít lo mưa ngắt quãng."
        },
        {
          "phase": "Tháng 5–8 · Cao điểm nắng",
          "weather": "Nắng gắt, nóng, độ ẩm cao, rất ít mưa.",
          "advice": "Đi sớm (trước 9h) hoặc chiều tối; mang mũ, chống nắng và bổ sung nước."
        },
        {
          "phase": "Tháng 9–11 · Mùa mưa & bão",
          "weather": "Mưa nhiều, có thể có bão/áp thấp, nước sông dâng, lạch đôi khi ngập nhẹ.",
          "advice": "Ưu tiên tham quan sớm; theo dõi cảnh báo thiên tai; phố cổ mờ sương sau mưa rất đẹp."
        },
        {
          "phase": "Tháng 12–1 · Cuối năm mát",
          "weather": "Mát hơn, vẫn có mưa rải rác, gió đông bắc.",
          "advice": "Đi bộ dễ chịu; mang áo khoác mỏng cho sáng và tối."
        }
      ],
      "note": "Lưu ý: trong mùa mưa bão, một số tuyến đường ven sông có thể ngập cục bộ và hoạt động thuyền ngắn hạn bị gián đoạn. Hãy ưu tiên thông tin chính thức từ cơ quan chức năng địa phương trước khi di chuyển."
    },
    "itinerary": {
      "tag": "LỘ TRÌNH GỢI Ý",
      "h2": "Lộ trình theo đối tượng & thời lượng",
      "lead": "Tùy thành phần đoàn và nhịp độ, bạn có thể chọn một trong ba lộ trình định hướng dưới đây, kết hợp với phương án nửa ngày hoặc cả ngày.",
      "personaCards": [
        {
          "kind": "Gia đình có trẻ nhỏ",
          "title": "Nhịp độ nhẹ, nhiều nghỉ chân",
          "body": "Tập trung quanh Chùa Cầu và vài nhà cổ gần đó; xen kẽ nghỉ trong quán cà phê có chỗ ngồi, ghé nhà vệ sinh công cộng và góc ăn vặt. Tránh khung trưa nắng gắt, ưu tiên sáng sớm."
        },
        {
          "kind": "Nhiếp ảnh & thiên nhiên",
          "title": "Săn ánh sáng vàng",
          "body": "Đến lúc bình minh để bắt mặt tiền cầu không đông, quay lại lúc chiều tà–tối khi mái ngói, tường vàng và đèn phố cổ lên hình. Bờ sông phía nam cho góc phản chiếu nước."
        },
        {
          "kind": "Người lớn tuổi / hạn chế vận động",
          "title": "Xác nhận đường đi và hỗ trợ",
          "body": "Hỏi nhân viên về bậc, mặt cầu, lối vào đang sử dụng và khả năng đi cùng xe lăn trước chuyến đi. Không mặc định di tích lịch sử có lối đi không bậc hoặc bãi đỗ sát cửa."
        }
      ],
      "halfDay": {
        "title": "Lộ trình nửa ngày (≈ 3–4 giờ)",
        "body": "Chùa Cầu → 1–2 nhà cổ (như Tấn Ký) → Chợ Hội An → dạo bờ sông Hoài ngắm cầu từ phía An Hội. Vừa đủ cho chuyến đi lần đầu mà không quá tải."
      },
      "fullDay": {
        "title": "Lộ trình cả ngày (≈ 6–8 giờ)",
        "body": "Thêm Hội quán Phúc Kiến, Bảo tàng lịch sử văn hóa, một làng nghề thủ công và chuyến ngồi thuyền ngắn trên sông Hoài; chiều tối quay lại phố cổ khi lên đèn."
      }
    },
    "foodNearby": {
      "foodH2": "Món ngon quanh phố cổ",
      "foodLead": "Không cần rời xa khu di sản để tìm những món đặc trưng Hội An. Hãy ưu tiên trải nghiệm cao lầu, hoành thánh, bánh hoa hồng trắng, cơm gà và các món chè địa phương.",
      "nearbyH2": "Điểm đến lân cận",
      "nearbyLead": "Khi tham quan Chùa Cầu, du khách dễ dàng khám phá các địa danh lân cận như Nhà cổ Tấn Ký và Hội quán Phúc Kiến, cùng chợ Hội An và bờ sông Hoài ngay trong khu phố cổ.",
      "nearbyTags": [
        "Nhà cổ Tấn Ký · khu phố cổ",
        "Hội quán Phúc Kiến · Trần Phú",
        "Chợ Hội An · ven sông",
        "Sông Hoài & khu An Hội · đi bộ qua cầu"
      ]
    },
    "photo": {
      "tag": "GÓC ẢNH",
      "h2": "Những góc chụp được yêu thích",
      "cards": [
        {
          "title": "Mặt tiền cầu",
          "body": "Đứng đầu đường Nguyễn Thị Minh Khai để ghi trọn mặt tiền, mái ngói và tấm biển “Lai Viễn Kiều”."
        },
        {
          "title": "Bên dòng lạch",
          "body": "Bờ sông phía nam cho góc nhìn nghiêng với vòm cầu và bóng đổ trên nước lúc chiều muộn."
        },
        {
          "title": "Trong hành lang",
          "body": "Xuyên qua khung gỗ, dãy cột và ánh sáng hắt vào tạo nên những lớp không gian rất riêng."
        },
        {
          "title": "Từ phía An Hội",
          "body": "Phóng tầm mắt từ khu An Hội để bắt trọn cầu, phố cổ và dòng sông trong một khung hình."
        }
      ]
    },
    "responsibility": {
      "tag": "KHOA HỌC & TRÁCH NHIỆM",
      "h2": "Hiểu đúng di tích & trách nhiệm khách tham quan",
      "lead": "Chùa Cầu không chỉ là một cây cầu: đó là một hệ thống di sản sống giữa lòng phố cổ, gắn với dòng sông, khí hậu và đời sống cư dân. Nắm vài điều cơ bản giúp chuyến đi an toàn, tôn trọng và bền vững.",
      "should": {
        "h4": "Nên",
        "items": [
          "Giữ trật tự, nói nhỏ trong gian thờ",
          "Chụp ảnh không dùng đèn flash gần bàn thờ",
          "Đi bộ và dắt xe khi qua cầu đông người",
          "Mang rác theo người khi không thấy thùng rác"
        ]
      },
      "shouldNot": {
        "h4": "Không nên",
        "items": [
          "Trèo, tựa hoặc ngồi lên lan can, tượng linh vật",
          "Sờ vào chi tiết gỗ, phù điêu cổ",
          "Hút thuốc, ăn uống trong khu vực thờ tự",
          "Đậu xe chắn lối đi bộ quanh cầu"
        ]
      },
      "cards": [
        {
          "title": "Chất lượng nước sông Hoài",
          "body": "Sông Hoài là trục cảnh quan phố cổ, phục vụ ngắm cảnh và thả đèn hoa đăng – không phải nơi bơi lội. Mùa mưa, dòng chảy mang phù sa nên nước thường đục hơn và lưu lượng lớn; giữ khoảng cách an toàn với bờ dốc, không vứt rác xuống nước."
        },
        {
          "title": "Động vật hoang dã",
          "body": "Không cho động vật ăn hoặc đuổi bắt; quan sát từ xa và giữ lối đi thông thoáng."
        },
        {
          "title": "Rác thải & zero waste",
          "body": "Mang túi riêng, giữ rác trong balo đến điểm thu gom; không vứt khăn ướt, vỏ chai xuống sông hay vỉa hè. Ưu tiên vật dụng tái sử dụng trong ngày tham quan."
        },
        {
          "title": "An toàn & bảo tồn",
          "body": "Giữ khoảng cách với lan can, tượng cổ; không leo trèo. Trong cơn dông, chủ động vào mái che hoặc chỗ trú an toàn thay vì đứng trên cầu hở. Tuân thủ nội quy bảo tồn của di tích."
        }
      ],
      "note": "Mùa mưa bão, hãy ưu tiên thông tin cảnh báo từ cơ quan chức năng địa phương; không tự ý xuống bờ sông khi nước dâng. Các lưu ý trên chỉ mang tính tham khảo, không thay thế quy định và cảnh báo chính thức."
    },
    "faq": {
      "h2": "FAQ · Câu hỏi thường gặp",
      "pairs": [
        [
          "Chùa Cầu ở Hội An hay Đà Nẵng?",
          "Cầu ở phố cổ Hội An, trên đường Nguyễn Thị Minh Khai. Địa chỉ hiện nay là phường Hội An, thành phố Đà Nẵng; tài liệu trước thay đổi hành chính năm 2025 có thể ghi tỉnh Quảng Nam."
        ],
        [
          "Chùa Cầu mở cửa lúc nào?",
          "Maps ghi 09:00–22:00 cả tuần tại lần kiểm tra 23/10/2026. Không coi đây là bảo đảm vào gian thờ hoặc cầu trong mọi thời điểm; kiểm tra thông báo quản lý tại chỗ. Giờ phố đi bộ và biểu diễn là lịch khác."
        ],
        [
          "Chùa Cầu có vé riêng không?",
          "Nguồn Di sản Hội An ngày 16/03/2026 mô tả các gói vé phố cổ có lựa chọn Chùa Cầu hoặc Miếu Quan Công. Hỏi quầy chính thức về gói và quyền lợi hiện tại; không nhầm với vé biểu diễn Ký ức Hội An."
        ],
        [
          "Cầu đã tu bổ lại năm 2024 chưa?",
          "Nguồn Di sản Hội An ghi lễ khánh thành đợt tu bổ ngày 03/08/2024 sau gần 19 tháng. Điều đó không bảo đảm không có hạn chế bảo tồn sau này."
        ],
        [
          "Chùa Cầu được xây vào thế kỷ nào?",
          "Du lịch Đà Nẵng mô tả nguồn gốc cuối XVI–đầu XVII; UNESCO mô tả cầu gỗ thế kỷ XVIII trong quần thể phố cổ. Công trình qua nhiều lần tu bổ, nên không quy mọi cấu kiện về một năm duy nhất."
        ],
        [
          "Nên dành bao lâu và có dễ đi xe lăn không?",
          "Dự trù khoảng 30–45 phút, cộng thời gian chờ. Hỏi quản lý về bậc, mặt cầu và lối vào hiện tại nếu cần hỗ trợ; trang không xác nhận tuyến đi không bậc."
        ]
      ]
    },
    "sources": {
      "h2": "Nguồn đối chiếu chính thức",
      "lead": "Đối chiếu ngày 23/10/2026. Các nguồn dưới phân biệt di sản, tu bổ, vé phố cổ và địa chỉ hiện hành. Thông tin Maps là ảnh chụp thời điểm của bên thứ ba; quyết định vận hành tại chỗ có thể khác.",
      "links": [
        {
          "href": "https://danangfantasticity.com/en/see-and-do/japanese-covered-bridge-chua-cau",
          "label": "Du lịch Đà Nẵng: nguồn gốc & kiến trúc"
        },
        {
          "href": "https://hoianworldheritage.org.vn/vi/news/Van-hoa-nghe-thuat/hoi-an-khanh-thanh-cong-trinh-tu-bo-di-tich-chua-cau-2727.hwh",
          "label": "Di sản Hội An: tu bổ khánh thành 03/08/2024"
        },
        {
          "href": "https://www.hoianworldheritage.org.vn/vi/news/Du-lich-Hoi-An/cap-nhat-ve-tham-quan-khu-pho-co-hoi-an-hanh-trinh-cham-ve-nguyen-ban-giua-long-di-san-3033.hwh",
          "label": "Di sản Hội An: các gói vé phố cổ 16/03/2026"
        },
        {
          "href": "https://whc.unesco.org/en/list/948/",
          "label": "UNESCO: Đô thị cổ Hội An"
        },
        {
          "href": "https://hoian.danang.gov.vn/gioi-thieu-chung.html",
          "label": "UBND phường Hội An: địa giới hiện hành"
        }
      ]
    }
  },
  "en": {
    "meta": {
      "title": "Chùa Cầu Hội An: Old Town tickets, hours & 2024 restoration",
      "description": "Plan a visit to Hội An’s Japanese Covered Bridge: qualified opening hours, Old Town ticket options, 2024 restoration, current address, map and walking advice."
    },
    "attractionDescription": "Chùa Cầu, the Japanese Covered Bridge and Lai Viễn Kiều name the roofed timber bridge in Hội An Ancient Town. Its current address is Nguyễn Thị Minh Khai, Hội An ward, Đà Nẵng. Older sources use Quảng Nam, the province before the 2025 administrative changes.",
    "breadcrumb": [
      {
        "name": "Chùa Cầu",
        "url": "HOME"
      },
      {
        "name": "Hội An",
        "url": "https://hoianworldheritage.org.vn/"
      },
      {
        "name": "Đà Nẵng",
        "url": "https://danangfantasticity.com/en/see-and-do/japanese-covered-bridge-chua-cau"
      },
      {
        "name": "Vietnam",
        "url": "https://vietnam.travel/places-to-go/central-vietnam/hoi-an"
      }
    ],
    "hero": {
      "kicker": "Symbol of the Hội An Ancient Town",
      "breadcrumbLabel": "Hội An › Đà Nẵng › Vietnam",
      "h1a": "Chùa Cầu",
      "h1em": "where cultures converge",
      "lead": "The Japanese Covered Bridge – Lai Viễn Kiều – is a tiled-roof timber bridge over four centuries old, linking the story of the Hội An trading port with the shared memory of Vietnamese, Japanese and Chinese commerce.",
      "ctaPlan": "Plan your visit",
      "ctaMaps": "Open Google Maps"
    },
    "intro": {
      "ornament": "Lai Viễn Kiều",
      "h2": "One bridge, many layers of memory",
      "paras": [
        "Chùa Cầu, the Japanese Covered Bridge and Lai Viễn Kiều name the roofed timber bridge in Hội An Ancient Town. Its current address is Nguyễn Thị Minh Khai, Hội An ward, Đà Nẵng. Older sources use Quảng Nam, the province before the 2025 administrative changes.",
        "Đà Nẵng’s tourism portal associates its origins with Japanese merchants in the late 16th–early 17th century. UNESCO’s heritage description refers to an 18th-century wooden bridge. These source descriptions concern a monument rebuilt and repaired over time; they do not establish one construction year for every part.",
        "The structure combines a covered crossing with a shrine. UNESCO inscribed Hội An Ancient Town in 1999; the bridge is part of that ensemble, rather than a separately inscribed World Heritage property.",
        "The Hội An heritage portal reports restoration starting on 28 December 2022 and an inauguration on 3 August 2024 after nearly 19 months. The photographs here date from 1 August 2024 and do not show today’s access conditions."
      ],
      "timeline": [
        {
          "year": "Late 16th–early 17th century",
          "text": "Đà Nẵng tourism associates the bridge’s origins with Japanese merchants."
        },
        {
          "year": "18th century",
          "text": "UNESCO describes a wooden bridge with a shrine within the town; this is not a date for every surviving element."
        },
        {
          "year": "1999",
          "text": "Hội An Ancient Town enters the World Heritage List."
        },
        {
          "year": "28 Dec 2022–3 Aug 2024",
          "text": "A restoration lasting nearly 19 months ends with an inauguration."
        }
      ],
      "figcaption": "Chùa Cầu at twilight, 1 August 2024."
    },
    "legends": {
      "tag": "LEGENDS & STORIES",
      "h2": "Stories around the bridge",
      "lead": "From the flood-subduing legend to surviving historical records, Chùa Cầu carries many cultural layers. Each story below is labelled so you can tell folk legend, historical record and belief apart.",
      "cards": [
        {
          "kind": "Folklore",
          "title": "Namazu and protection from water",
          "body": "Đà Nẵng tourism recounts the Namazu legend and the bridge’s protective symbolism. This is folklore, rather than geological evidence or a construction date."
        },
        {
          "kind": "Architecture & belief",
          "title": "A bridge with a shrine",
          "body": "Look for the tiled roof, timber structure and shrine. Keep voices low and avoid touching protected details or ritual objects. The name “pagoda” does not make this a conventional Buddhist temple."
        }
      ]
    },
    "visit": {
      "tag": "PRACTICAL INFORMATION",
      "h2": "Visiting Chùa Cầu",
      "cards": [
        {
          "title": "Map hours are a dated listing",
          "body": "Google Maps listed 09:00–22:00 every day when checked on 23 October 2026. This third-party schedule does not guarantee entry to the bridge, shrine or surrounding services. Check management notices and signs; pedestrian-zone hours are separate."
        },
        {
          "title": "Old Town tickets and the bridge",
          "body": "The Hội An heritage article of 16 March 2026 describes 80,000 and 120,000 VND Old Town packages with different inclusions, choosing Chùa Cầu or Quan Công Temple. These are not two standalone bridge prices. Confirm the current package at an official ticket counter; Hội An Memories show tickets are a different product."
        },
        {
          "title": "Suggested visit length",
          "body": "Allow roughly 30–45 minutes to look and take photographs, as a planning suggestion. Add time for queues and other monuments included in your chosen ticket."
        }
      ]
    },
    "moments": {
      "h2": "The best moments",
      "lead": "Early morning brings calm and makes the architectural details easy to read. Late afternoon turns to the “blue hour”, when the tiled roof, yellow walls and old-town lights create the most characteristic scene."
    },
    "move": {
      "tag": "GETTING THERE",
      "h2": "Detailed transport guide",
      "subs": [
        {
          "h3": "Current address",
          "body": "Nguyễn Thị Minh Khai, Hội An ward, Đà Nẵng. Use the Chùa Cầu map pin; older documents may say Hội An, Quảng Nam."
        },
        {
          "h3": "From Đà Nẵng airport or station",
          "body": "Compare pickup, drop-off, luggage arrangements and the total price with the transport operator. Journey times depend on traffic; this guide does not confirm a current bus timetable, taxi fare or fixed transfer time."
        },
        {
          "h3": "The last stretch into the Old Town",
          "body": "Check pedestrian-zone signs and traffic restrictions. Agree an authorised drop-off or parking place outside restricted streets and follow local directions on foot."
        },
        {
          "h3": "If you need mobility assistance",
          "body": "Ask staff about steps, surfaces, the entrance currently in use and wheelchair access before travelling. Do not assume a historic monument has a step-free route or parking at its door."
        }
      ],
      "mapTitle": "Map of Chùa Cầu Hội An"
    },
    "utilities": {
      "tag": "NEARBY FACILITIES",
      "h2": "Facilities & services around Chùa Cầu",
      "lead": "These are preparation prompts, rather than confirmed facilities inside the monument. Ask management or the service provider about current location, charges and access.",
      "cards": [
        {
          "title": "Toilets and rest stops",
          "body": "Confirm usable stops along your route, especially with children or visitors needing assistance. Do not assume there is a toilet inside the bridge."
        },
        {
          "title": "Parking and access",
          "body": "Follow current signs and check walking distances, steps and surfaces rather than relying on photographs."
        },
        {
          "title": "Water and payment",
          "body": "Carry water and ask about prices and payment methods before buying. Do not assume cards are accepted everywhere."
        },
        {
          "title": "Separate services",
          "body": "Food, accommodation, rentals and boats have their own hours, prices and conditions. This guide does not certify providers or current availability."
        }
      ]
    },
    "seasonal": {
      "tag": "BY SEASON",
      "h2": "Seasonal visiting strategy",
      "lead": "Hội An has a tropical monsoon climate on the Central Coast, with a dry season (usually February–August) and a rainy season (usually September–January, when storms or tropical depressions may appear). The table summarises multi-year patterns to help you plan; actual figures vary year to year, so combine it with the weather forecast above.",
      "rows": [
        {
          "phase": "Feb–Apr · Early dry",
          "weather": "Dry, little rain, warm sun, moderate humidity.",
          "advice": "Ideal: both early morning and late afternoon are convenient, with little worry of intermittent rain."
        },
        {
          "phase": "May–Aug · Peak sun",
          "weather": "Harsh sun, hot, high humidity, very little rain.",
          "advice": "Go early (before 9am) or in the evening; bring a hat, sun protection and water."
        },
        {
          "phase": "Sep–Nov · Rain & storms",
          "weather": "Frequent rain, possible storms/low pressure, rising river, canal occasionally lightly flooded.",
          "advice": "Prioritise early visits; follow natural-disaster warnings; the misty old town after rain is very atmospheric."
        },
        {
          "phase": "Dec–Jan · Cool year-end",
          "weather": "Cooler, still some scattered rain, northeast monsoon wind.",
          "advice": "Pleasant for walking; bring a light jacket for morning and evening."
        }
      ],
      "note": "Note: in the rainy/storm season, some riverside roads may flood locally and boat trips may pause. Prioritise official information from local authorities before travelling."
    },
    "itinerary": {
      "tag": "SUGGESTED ROUTES",
      "h2": "Routes by traveller & duration",
      "lead": "Depending on your group and pace, pick one of the three orienting routes below, combined with a half-day or full-day plan.",
      "personaCards": [
        {
          "kind": "Families with young children",
          "title": "Gentle pace, many breaks",
          "body": "Focus around Chùa Cầu and a few nearby old houses; weave in café breaks with seating, public toilets and snack corners. Avoid the hot midday, prefer early morning."
        },
        {
          "kind": "Photography & nature",
          "title": "Chase the golden light",
          "body": "Arrive at dawn for the empty bridge front, return at dusk when the tiles, yellow walls and old-town lights glow. The south bank gives a water-reflection angle."
        },
        {
          "kind": "Seniors / limited mobility",
          "title": "Flat, short, shaded",
          "body": "Ask staff about steps, surfaces, the entrance currently in use and wheelchair access before travelling. Do not assume a historic monument has a step-free route or parking at its door."
        }
      ],
      "halfDay": {
        "title": "Half-day route (≈ 3–4 hours)",
        "body": "Chùa Cầu → 1–2 old houses (e.g. Tấn Ký) → Hội An Market → stroll the Hoài riverbank to view the bridge from An Hội. Enough for a first visit without overload."
      },
      "fullDay": {
        "title": "Full-day route (≈ 6–8 hours)",
        "body": "Add the Phúc Kiến Assembly Hall, the history-and-culture museum, a craft village and a short boat ride on the Hoài; return to the lit old town in the evening."
      }
    },
    "foodNearby": {
      "foodH2": "Local food around the old town",
      "foodLead": "You need not leave the heritage area for Hội An specialties. Prioritise cao lầu, hoành thánh, white rose dumplings, chicken rice and local chè.",
      "nearbyH2": "Nearby attractions",
      "nearbyLead": "While visiting Chùa Cầu, you can easily explore nearby spots such as the Tấn Ký Old House and the Phúc Kiến Assembly Hall, plus Hội An Market and the Hoài riverbank right in the old town.",
      "nearbyTags": [
        "Tấn Ký Old House · old town",
        "Phúc Kiến Assembly Hall · Trần Phú",
        "Hội An Market · riverside",
        "Hoài River & An Hội · walk across the bridge"
      ]
    },
    "photo": {
      "tag": "PHOTO SPOTS",
      "h2": "Favourite photo angles",
      "cards": [
        {
          "title": "Bridge front",
          "body": "Stand at the head of Nguyễn Thị Minh Khai to capture the full façade, tiled roof and the “Lai Viễn Kiều” plaque."
        },
        {
          "title": "By the canal",
          "body": "The south bank gives a side view with the bridge arch and its shadow on the water in late afternoon."
        },
        {
          "title": "In the corridor",
          "body": "Through the timber frame, columns and raking light you get beautifully layered spaces."
        },
        {
          "title": "From An Hội side",
          "body": "Look back from An Hội to frame the bridge, old town and river in one shot."
        }
      ]
    },
    "responsibility": {
      "tag": "SCIENCE & RESPONSIBILITY",
      "h2": "Understanding the relic & visitor responsibility",
      "lead": "Chùa Cầu is not just a bridge: it is a living heritage system within the old town, tied to the river, climate and residents’ life. A few basics help make your trip safe, respectful and sustainable.",
      "should": {
        "h4": "Do",
        "items": [
          "Keep quiet and speak softly in the shrine",
          "No flash photography near the altar",
          "Walk and push your bike when the bridge is crowded",
          "Take your rubbish with you when no bin is nearby"
        ]
      },
      "shouldNot": {
        "h4": "Don’t",
        "items": [
          "Climb, lean on or sit on the railing or guardian statues",
          "Touch the old wood or carved reliefs",
          "Smoke or eat in the worship area",
          "Park across the pedestrian path around the bridge"
        ]
      },
      "cards": [
        {
          "title": "Hoài river water quality",
          "body": "The Hoài is the old town’s scenic axis, for views and floating lanterns – not for swimming. In the rainy season, runoff carries silt so the water is murkier and faster; keep a safe distance from steep banks, don’t drop litter in the water."
        },
        {
          "title": "Wildlife",
          "body": "Observe animals from a distance without feeding or chasing them, and keep paths clear."
        },
        {
          "title": "Waste & zero waste",
          "body": "Bring your own bag, keep rubbish in your backpack to a collection point; don’t toss wipes or bottles into the river or street. Prefer reusable items during the day."
        },
        {
          "title": "Safety & conservation",
          "body": "Keep distance from the railing and old statues; don’t climb. In a thunderstorm, move under shelter rather than standing on the open bridge. Follow the relic’s conservation rules."
        }
      ],
      "note": "In the rainy/storm season, prioritise warnings from local authorities; don’t go down to the riverbank when water rises. The notes above are for reference only and do not replace official rules and warnings."
    },
    "faq": {
      "h2": "FAQ · Frequently asked questions",
      "pairs": [
        [
          "Is Chùa Cầu in Hội An or Đà Nẵng?",
          "It is in Hội An Ancient Town on Nguyễn Thị Minh Khai. The current address is Hội An ward, Đà Nẵng; sources before the 2025 administrative changes may say Quảng Nam province."
        ],
        [
          "What are the bridge opening hours?",
          "Maps listed 09:00–22:00 daily on 23 October 2026. This does not guarantee bridge or shrine entry at every moment. Check management notices locally; pedestrian-zone and performance schedules are separate."
        ],
        [
          "Does the bridge have a separate ticket?",
          "The Hội An heritage article dated 16 March 2026 describes Old Town packages offering a choice of Chùa Cầu or Quan Công Temple. Confirm current inclusions at an official counter; do not confuse these with Hội An Memories show tickets."
        ],
        [
          "Was Chùa Cầu restored in 2024?",
          "The heritage portal reports the restoration inauguration on 3 August 2024 after nearly 19 months. Later conservation restrictions remain possible."
        ],
        [
          "When was the Japanese Covered Bridge built?",
          "Đà Nẵng tourism describes late 16th–early 17th-century origins; UNESCO describes an 18th-century wooden bridge within the town. Repeated repairs mean one year should not be assigned to all its components."
        ],
        [
          "How long should I allow, and is it wheelchair accessible?",
          "Plan roughly 30–45 minutes plus queues. Ask management about current steps, surfaces and entrances if you need assistance; this guide does not verify a step-free route."
        ]
      ]
    },
    "sources": {
      "h2": "Official reference sources",
      "lead": "Checked 23 October 2026. These sources distinguish heritage, restoration, Old Town packages and the current address. Maps is a dated third-party listing; on-site operating decisions may differ.",
      "links": [
        {
          "href": "https://danangfantasticity.com/en/see-and-do/japanese-covered-bridge-chua-cau",
          "label": "Đà Nẵng tourism: origins and architecture"
        },
        {
          "href": "https://hoianworldheritage.org.vn/vi/news/Van-hoa-nghe-thuat/hoi-an-khanh-thanh-cong-trinh-tu-bo-di-tich-chua-cau-2727.hwh",
          "label": "Hội An heritage: 3 August 2024 restoration inauguration"
        },
        {
          "href": "https://www.hoianworldheritage.org.vn/vi/news/Du-lich-Hoi-An/cap-nhat-ve-tham-quan-khu-pho-co-hoi-an-hanh-trinh-cham-ve-nguyen-ban-giua-long-di-san-3033.hwh",
          "label": "Hội An heritage: 16 March 2026 Old Town ticket packages"
        },
        {
          "href": "https://whc.unesco.org/en/list/948/",
          "label": "UNESCO: Hội An Ancient Town"
        },
        {
          "href": "https://hoian.danang.gov.vn/gioi-thieu-chung.html",
          "label": "Hội An ward government: current administration"
        }
      ]
    }
  },
  "zh": {
    "meta": {
      "title": "會安日本廊橋：古鎮門票、開放時間與2024修復",
      "description": "日本廊橋（Chùa Cầu／來遠橋）繁體中文指南：區分古鎮套票與橋內參觀時間、2024年修復、現行地址、地圖及步行注意事項。"
    },
    "attractionDescription": "Chùa Cầu、日本廊橋與來遠橋皆指會安古鎮這座有瓦頂的木橋。現行地址為 Nguyễn Thị Minh Khai、會安坊、峴港市；2025年行政調整前的資料常記為廣南省。",
    "breadcrumb": [
      {
        "name": "日本廊橋",
        "url": "HOME"
      },
      {
        "name": "會安",
        "url": "https://hoianworldheritage.org.vn/"
      },
      {
        "name": "峴港",
        "url": "https://danangfantasticity.com/en/see-and-do/japanese-covered-bridge-chua-cau"
      },
      {
        "name": "越南",
        "url": "https://vietnam.travel/places-to-go/central-vietnam/hoi-an"
      }
    ],
    "hero": {
      "kicker": "會安古鎮的象徵",
      "breadcrumbLabel": "會安 › 峴港 › 越南",
      "h1a": "日本廊橋",
      "h1em": "多元文化交會之處",
      "lead": "日本廊橋（來遠橋）是一座擁有四百餘年歷史的瓦頂木橋，連結會安商港的故事，以及越南、日本與中華往來的集體記憶。",
      "ctaPlan": "規劃行程",
      "ctaMaps": "開啟 Google 地圖"
    },
    "intro": {
      "ornament": "來遠橋",
      "h2": "一座橋，多層記憶",
      "paras": [
        "Chùa Cầu、日本廊橋與來遠橋皆指會安古鎮這座有瓦頂的木橋。現行地址為 Nguyễn Thị Minh Khai、會安坊、峴港市；2025年行政調整前的資料常記為廣南省。",
        "峴港旅遊入口網將建橋起源連結至16世紀末至17世紀初的日本商人。UNESCO的遺產說明則提到18世紀木橋。建築歷經多次修繕，這些不同來源並不能為所有構件確定同一建造年份。",
        "建築結合有頂通道與祠廟空間。UNESCO於1999年登錄的是整個會安古鎮；日本廊橋是其中一部分，並非單獨登錄的世界遺產。",
        "會安遺產入口網記載，修復於2022年12月28日動工，近19個月後於2024年8月3日舉行落成典禮。本頁照片攝於2024年8月1日，屬歷史影像，不代表今日通行情況。"
      ],
      "timeline": [
        {
          "year": "16世紀末至17世紀初",
          "text": "峴港旅遊資料將橋的起源連結至日本商人。"
        },
        {
          "year": "18世紀",
          "text": "UNESCO描述古鎮內帶祠廟的木橋，並非所有現存構件的統一年代。"
        },
        {
          "year": "1999",
          "text": "會安古鎮列入世界遺產名錄。"
        },
        {
          "year": "2022/12/28–2024/08/03",
          "text": "近19個月修復工程，結束後舉行落成典禮。"
        }
      ],
      "figcaption": "日本廊橋暮色，2024年8月1日。"
    },
    "legends": {
      "tag": "傳說與故事",
      "h2": "橋畔的種種故事",
      "lead": "從鎮水傳說到留存至今的史料，日本廊橋承載多重文化層次。下列每則故事皆標註類別，便於區分民間傳說、史料與信仰。",
      "cards": [
        {
          "kind": "民間傳說",
          "title": "Namazu與鎮水寓意",
          "body": "峴港旅遊資料敘述Namazu傳說及橋的守護象徵。這是民間故事，並非地質證據或建造年代的證明。"
        },
        {
          "kind": "建築與信仰",
          "title": "帶祠廟的橋",
          "body": "留意瓦頂、木構與祠廟空間。輕聲交談，不碰觸受保護構件或祭祀用品；名稱中的「寺／廟」不表示它是一般佛教寺院。"
        }
      ]
    },
    "visit": {
      "tag": "實用資訊",
      "h2": "參觀日本廊橋",
      "cards": [
        {
          "title": "地圖時段不等於所有區域開放",
          "body": "2026年10月23日查閱Google地圖，列示全週09:00–22:00。這是第三方時點資訊，不保證橋內、祠廟及周邊服務的進入時間。請核對管理公告與現場告示；步行區時段另計。"
        },
        {
          "title": "古鎮套票與日本廊橋",
          "body": "會安遺產網站2026年3月16日介紹80,000及120,000越盾古鎮套票，內容不同，皆有日本廊橋或關公廟擇一選項；並非兩種橋樑單獨票價。請向正式售票處確認現行方案；「會安記憶」演出票是另一產品。"
        },
        {
          "title": "建議停留時間",
          "body": "可預留約30–45分鐘觀察及拍照，這只是行程建議。另加排隊及套票內其他古蹟的參觀時間。"
        }
      ]
    },
    "moments": {
      "h2": "最美的時刻",
      "lead": "清晨寧靜，便於觀察建築細節。午後轉入「藍調時刻」，瓦頂、黃牆與古鎮燈火構成最具代表性的畫面。"
    },
    "move": {
      "tag": "交通方式",
      "h2": "詳細交通指引",
      "subs": [
        {
          "h3": "現行地址",
          "body": "Nguyễn Thị Minh Khai、會安坊、峴港市。使用Chùa Cầu地圖圖釘；舊文件可能仍寫會安、廣南省。"
        },
        {
          "h3": "由峴港機場或車站出發",
          "body": "向運輸業者比較接送地點、行李安排及總價。車程受交通影響；本站不確認現行公車班次、計程車費或固定抵達時間。"
        },
        {
          "h3": "進入古鎮的最後一段",
          "body": "確認步行區告示及交通限制，在允許的外圍停車或下車地點轉為步行，依現場指示前進。"
        },
        {
          "h3": "需要行動協助時",
          "body": "出發前向管理人員詢問階梯、橋面、現行入口及輪椅使用情況。不要預設歷史建築有無階梯通道或門口停車位。"
        }
      ],
      "mapTitle": "會安日本廊橋地圖"
    },
    "utilities": {
      "tag": "周邊設施",
      "h2": "日本廊橋周邊設施與服務",
      "lead": "以下是行前確認事項，不代表古蹟內已設置相關設施。請向管理單位或業者查詢現行位置、收費與使用條件。",
      "cards": [
        {
          "title": "洗手間與休息點",
          "body": "同行有兒童或需要協助者時，先確認路線上可用的休息點；不要預設橋內設有洗手間。"
        },
        {
          "title": "停車與通行",
          "body": "遵循現行告示，確認步行距離、階梯與路面，勿只依照片判斷。"
        },
        {
          "title": "飲水與付款",
          "body": "攜帶飲水，購買前詢問價格和付款方式；不要預設各處皆可刷卡。"
        },
        {
          "title": "各項服務分開確認",
          "body": "餐飲、住宿、租車和船遊各有時段、價格與條件。本站不認證業者或保證營業狀態。"
        }
      ]
    },
    "seasonal": {
      "tag": "依季節",
      "h2": "季節參觀策略",
      "lead": "會安屬中部沿海熱帶季風氣候，旱季通常為 2–8 月，雨季通常為 9–1 月（可能出現颱風或熱帶低壓）。下表彙整多年特徵供排程參考；每年實際數值會浮動，請搭配上方天氣預報。",
      "rows": [
        {
          "phase": "2–4 月 · 旱季初期",
          "weather": "乾燥、少雨、暖陽、濕度適中。",
          "advice": "最理想：清晨與傍晚皆便利，較不擔心間歇降雨。"
        },
        {
          "phase": "5–8 月 · 烈日高峰",
          "weather": "豔陽、炎熱、高濕度、極少雨。",
          "advice": "早出（9 點前）或傍晚；戴帽、防曬並補充水分。"
        },
        {
          "phase": "9–11 月 · 雨季與颱風",
          "weather": "多雨，可能有颱風／低壓，河水上漲，水道偶有輕微積水。",
          "advice": "優先早訪；留意天然災害警示；雨後薄霧的古鎮極具詩意。"
        },
        {
          "phase": "12–1 月 · 年末涼爽",
          "weather": "較涼，仍有零散降雨，東北季風。",
          "advice": "步行舒適；早晚備薄外套。"
        }
      ],
      "note": "注意：雨季期間部分河岸道路可能局部積水，船班短期暫停。出發前請優先參考地方主管機關的官方資訊。"
    },
    "itinerary": {
      "tag": "建議路線",
      "h2": "依對象與時長的路線",
      "lead": "依同行成員與步調，從下列三條導向路線中擇一，再搭配半日或全日方案。",
      "personaCards": [
        {
          "kind": "親子家庭",
          "title": "輕鬆步調，多停留",
          "body": "集中在日本廊橋與附近幾間古宅；穿插有座位的咖啡休息、公共廁所與點心角落。避開炎熱中午，以清晨為佳。"
        },
        {
          "kind": "攝影與自然",
          "title": "追逐金色光線",
          "body": "黎明抵達以捕捉沒人的橋面，黃昏至入夜再回訪，此時瓦頂、黃牆與古鎮燈火亮起。南岸可得水面倒影角度。"
        },
        {
          "kind": "長者／行動不便",
          "title": "先確認路線與協助",
          "body": "出發前向管理人員詢問階梯、橋面、現行入口及輪椅使用情況。不要預設歷史建築有無階梯通道或門口停車位。"
        }
      ],
      "halfDay": {
        "title": "半日路線（約 3–4 小時）",
        "body": "日本廊橋 → 1–2 間古宅（如陳家祠堂 Tấn Ký）→ 會安市場 → 漫步秋盆河岸從安會（An Hội）側欣賞橋景。首次造訪恰到好處且不會太趕。"
      },
      "fullDay": {
        "title": "全日路線（約 6–8 小時）",
        "body": "加福建會館、歷史文化博物館、一處手工村落，以及在秋盆河上的短程乘船；傍晚回到點燈的古鎮。"
      }
    },
    "foodNearby": {
      "foodH2": "古鎮周邊美食",
      "foodLead": "不必離開遺產區就能找到會安特產。優先品嚐 cao lầu（高樓麵）、hoành thánh（餛飩）、白玫瑰糕、雞飯與在地甜湯。",
      "nearbyH2": "周邊景點",
      "nearbyLead": "參觀日本廊橋時，可輕鬆探訪鄰近的陳家祠堂（Tấn Ký）與福建會館，以及同在古鎮內的會安市場與秋盆河岸。",
      "nearbyTags": [
        "陳家祠堂 Tấn Ký · 古鎮內",
        "福建會館 · 陳富街 Trần Phú",
        "會安市場 · 河岸",
        "秋盆河與安會區 · 步行過橋"
      ]
    },
    "photo": {
      "tag": "攝影角度",
      "h2": "最受喜愛的取景點",
      "cards": [
        {
          "title": "橋正面",
          "body": "站在阮氏明開街街頭，完整收錄正面、瓦頂與「來遠橋」匾額。"
        },
        {
          "title": "水道旁",
          "body": "南岸可得側視角度，午後橋拱與水面倒影相映。"
        },
        {
          "title": "廊道之內",
          "body": "穿過木構、列柱與斜射光線，層次空間獨具。"
        },
        {
          "title": "從安會側",
          "body": "自安會區回望，可將橋、古鎮與河流收進同一畫面。"
        }
      ]
    },
    "responsibility": {
      "tag": "科普與責任",
      "h2": "正確認識遺址與遊客責任",
      "lead": "日本廊橋不只是一座橋：它是古鎮之中活的遺產系統，與河流、氣候及居民生活相繫。掌握幾項基本觀念，讓旅程安全、尊重且永續。",
      "should": {
        "h4": "宜",
        "items": [
          "在祠廟內保持安靜、低聲說話",
          "靠近神龛不使用閃光燈拍照",
          "橋上擁擠時步行並牽車",
          "附近無垃圾桶時自行帶走垃圾"
        ]
      },
      "shouldNot": {
        "h4": "不宜",
        "items": [
          "攀爬、倚靠或坐在欄杆與守橋神獸上",
          "觸摸舊木構與浮雕",
          "在祭祀區吸菸、飲食",
          "將車輛停放在橋周步行動線上"
        ]
      },
      "cards": [
        {
          "title": "秋盆河水質",
          "body": "秋盆河是古鎮的景觀軸線，供賞景與放水燈——非戲水處。雨季逕流帶泥沙，水色較濁、流量較大；與陡岸保持安全距離，勿向水中丟棄垃圾。"
        },
        {
          "title": "野生動物",
          "body": "遠距觀察動物，不餵食、不追逐，保持通道暢通。"
        },
        {
          "title": "垃圾與零廢棄",
          "body": "自備袋子，將垃圾收於背包至收集點；勿將濕紙巾、瓶罐丟入河或人行道。遊覽當日優先使用可重複物品。"
        },
        {
          "title": "安全與保存",
          "body": "與欄杆、舊雕像保持距離；勿攀爬。雷陣雨時主動到遮簷或安全處避雨，勿站在開放橋面。遵守遺址保存規範。"
        }
      ],
      "note": "雨季期間請優先參考地方主管機關的警示；水位上漲時勿自行下到河岸。以上僅供參考，不取代官方規定與警示。"
    },
    "faq": {
      "h2": "常見問題 FAQ",
      "pairs": [
        [
          "日本廊橋位於會安還是峴港？",
          "橋在會安古鎮Nguyễn Thị Minh Khai街。現行地址為會安坊、峴港市；2025年行政調整前的資料可能仍寫廣南省。"
        ],
        [
          "日本廊橋幾點開放？",
          "2026年10月23日地圖列示每日09:00–22:00，不保證所有時刻都可進入橋內或祠廟。請查現場管理公告；步行區及演出另有時段。"
        ],
        [
          "日本廊橋要另外買票嗎？",
          "會安遺產網站2026年3月16日介紹古鎮套票，含日本廊橋或關公廟擇一。請向正式售票處確認現行內容，不要與「會安記憶」演出票混淆。"
        ],
        [
          "2024年修復完成了嗎？",
          "遺產入口網記載修復近19個月後，於2024年8月3日舉行落成典禮。之後仍可能有保存或通行限制。"
        ],
        [
          "日本廊橋建於哪個世紀？",
          "峴港旅遊資料將起源放在16世紀末至17世紀初，UNESCO則描述古鎮內18世紀木橋。建築多次修繕，不宜將所有構件定為同一年。"
        ],
        [
          "要留多久？輪椅方便嗎？",
          "可預留約30–45分鐘，另加排隊時間。需要協助者請向管理單位確認階梯、橋面及現行入口；本站未確認無階梯通道。"
        ]
      ]
    },
    "sources": {
      "h2": "官方對照來源",
      "lead": "核對日期：2026年10月23日。以下來源分別說明遺產、修復、古鎮套票與現行地址。地圖只是第三方時點資料，現場管理決定可能不同。",
      "links": [
        {
          "href": "https://danangfantasticity.com/en/see-and-do/japanese-covered-bridge-chua-cau",
          "label": "峴港旅遊：起源與建築"
        },
        {
          "href": "https://hoianworldheritage.org.vn/vi/news/Van-hoa-nghe-thuat/hoi-an-khanh-thanh-cong-trinh-tu-bo-di-tich-chua-cau-2727.hwh",
          "label": "會安遺產：2024年8月3日修復落成"
        },
        {
          "href": "https://www.hoianworldheritage.org.vn/vi/news/Du-lich-Hoi-An/cap-nhat-ve-tham-quan-khu-pho-co-hoi-an-hanh-trinh-cham-ve-nguyen-ban-giua-long-di-san-3033.hwh",
          "label": "會安遺產：2026年3月16日古鎮套票"
        },
        {
          "href": "https://whc.unesco.org/en/list/948/",
          "label": "UNESCO：會安古鎮"
        },
        {
          "href": "https://hoian.danang.gov.vn/gioi-thieu-chung.html",
          "label": "會安坊政府：現行行政資訊"
        }
      ]
    }
  }
};
