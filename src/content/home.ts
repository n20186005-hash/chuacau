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

const SAME_LINKS = {
  heritage: 'https://hoianworldheritage.org.vn/',
  danang: 'https://danangfantasticity.com/en/see-and-do/japanese-covered-bridge-chua-cau',
  vietnam: 'https://vietnam.travel/places-to-go/central-vietnam/hoi-an',
};

export const home: Record<Locale, HomeContent> = {
  vi: {
    meta: {
      title: 'Chùa Cầu Hội An | Lịch sử, kiến trúc & hướng dẫn tham quan',
      description:
        'Hướng dẫn tiếng Việt về Chùa Cầu Hội An (Cầu Nhật Bản, Lai Viễn Kiều): lịch sử hơn 400 năm, vé tham quan, giờ vào cầu, đường đi, bãi đỗ xe, món ngon và điểm đến lân cận.',
    },
    attractionDescription:
      'Biểu tượng kiến trúc hơn 400 năm của Đô thị cổ Hội An, nổi bật với kiểu thượng gia hạ kiều và ngôi miếu thờ Bắc Đế Trấn Vũ.',
    breadcrumb: [
      { name: 'Chùa Cầu', url: 'HOME' },
      { name: 'Hội An', url: SAME_LINKS.heritage },
      { name: 'Đà Nẵng', url: SAME_LINKS.danang },
      { name: 'Việt Nam', url: SAME_LINKS.vietnam },
    ],
    hero: {
      kicker: 'Biểu tượng của Đô thị cổ Hội An',
      breadcrumbLabel: 'Hội An › Đà Nẵng › Việt Nam',
      h1a: 'Chùa Cầu',
      h1em: 'nơi những dòng văn hóa gặp nhau',
      lead:
        'Cầu Nhật Bản – Lai Viễn Kiều – là công trình gỗ mái ngói hơn bốn thế kỷ tuổi, nối câu chuyện thương cảng Hội An với ký ức giao thương Việt Nam, Nhật Bản và Trung Hoa.',
      ctaPlan: 'Lập kế hoạch tham quan',
      ctaMaps: 'Mở Google Maps',
    },
    intro: {
      ornament: 'Lai Viễn Kiều',
      h2: 'Một cây cầu, nhiều lớp ký ức',
      paras: [
        'Chùa Cầu, còn gọi là Cầu Nhật Bản hay Lai Viễn Kiều, là biểu tượng trung tâm của Đô thị cổ Hội An – khu vực Quảng Nam, Việt Nam. Cây cầu gỗ mái ngói hơn bốn thế kỷ này là tâm điểm trong hành trình khám phá phố cổ của đông đảo du khách.',
        'Chùa Cầu hình thành khoảng cuối thế kỷ XVI – đầu thế kỷ XVII trong bối cảnh Hội An là thương cảng quốc tế. Công trình được gắn với cộng đồng thương nhân Nhật Bản và về sau trở thành một biểu tượng đặc trưng của toàn đô thị cổ.',
        'Năm 1719, chúa Nguyễn Phúc Chu đặt tên Lai Viễn Kiều, có thể hiểu là “cầu đón khách phương xa”. Kiểu kiến trúc thượng gia hạ kiều – nhà ở trên, cầu ở dưới – cùng mái ngói âm dương, khung gỗ và các chi tiết trang trí làm nên dáng vẻ rất riêng.',
        'Đợt tu bổ quy mô lớn kéo dài gần 19 tháng đã hoàn thành và công trình được khánh thành trở lại vào tháng 8/2024.',
      ],
      timeline: [
        { year: 'Cuối thế kỷ XVI – đầu XVII', text: 'Cộng đồng thương nhân Nhật Bản dựng cầu gỗ mái ngói nối khu phố Nhật với khu phố Hoa.' },
        { year: '1634–1635', text: 'Nhật Bản thi hành chính sách tỏa quốc; người Nhật dần rời Hội An, người Hoa tiếp quản việc trông coi cầu.' },
        { year: '1695', text: 'Thiền sư Thích Đại Sán ghi lại hình ảnh “cầu Nhật Bản” trong “Hải ngoại kỷ sự” – một trong những tư liệu sớm nhất về cây cầu.' },
        { year: '1719', text: 'Chúa Nguyễn Phúc Chu ngự bút đề biển “Lai Viễn Kiều”, tên gọi lưu truyền đến nay.' },
        { year: '1817', text: 'Bài “Trùng tu Lai Viễn Kiều ký” của Đinh Phiên khắc trên bia đá, ghi lại truyền thuyết và các lần trùng tu.' },
        { year: '1915', text: 'Công sứ Pháp Lesterlin đứng ra tu bổ cầu; hiện vật lưu giữ tại công trình.' },
        { year: '1990', text: 'Chùa Cầu được xếp hạng Di tích lịch sử – văn hóa cấp quốc gia.' },
        { year: '1999', text: 'Đô thị cổ Hội An được UNESCO ghi danh Di sản Văn hóa Thế giới; Chùa Cầu là biểu tượng trung tâm.' },
        { year: '2022–2024', text: 'Đợt tu bổ lớn gần 19 tháng hoàn tất, cầu khánh thành trở lại và mở cửa đón khách.' },
      ],
      figcaption: 'Chùa Cầu sau đợt tu bổ lớn, nhìn từ dòng lạch trong phố cổ.',
    },
    legends: {
      tag: 'TRUYỀN THUYẾT & CÂU CHUYỆN',
      h2: 'Những câu chuyện quanh cây cầu',
      lead: 'Từ truyền thuyết trấn thủy đến những sử liệu còn lưu lại, Chùa Cầu mang theo nhiều lớp nghĩa văn hóa. Mỗi câu chuyện dưới đây được gắn nhãn để dễ phân biệt giữa truyền thuyết dân gian, sử liệu và tín ngưỡng.',
      cards: [
        { kind: 'Truyền thuyết', title: '“Cù dậy” – con vật dưới lòng đất', body: 'Người xưa kể rằng dưới nền đất Hội An có con vật khổng lồ tên Cù, đầu ở Ấn Độ, đuôi ở Nhật Bản. Mỗi lần nó cựa mình, phố chợ sụt lở, đất Nhật lại rung chuyển. Để trấn giữ, người Nhật đúc một thanh kiếm vàng cắm vào sống lưng con vật đúng vị trí cây cầu, rồi dựng cầu lên trên.' },
        { kind: 'Truyền thuyết', title: 'Thanh kiếm dưới lòng sông', body: 'Tương truyền nền móng cầu nhiều lần bị lũ cuốn trôi; người Nhật phải nấu chảy chì và bạc đổ xuống lòng sông làm móng, trên đó mới xây trụ đá. Câu chuyện “kiếm chôn dưới cầu” đến nay vẫn được các hướng dẫn viên địa phương kể cho du khách.' },
        { kind: 'Sử liệu', title: 'Hai linh vật chó – khỉ', body: 'Hai đầu cầu đặt tượng chó và khỉ. Giới nghiên cứu cho rằng đây là cách ghi dấu niên đại xây cầu: khởi công năm Thân (khỉ), hoàn thành năm Tuất (chó) theo lịch can chi. Một cách lý giải khác xem chúng là linh vật canh giữ cầu.' },
        { kind: 'Sử liệu', title: '“Lai Viễn Kiều” – tên vua ban', body: 'Năm 1719, chúa Nguyễn Phúc Chu tuần du đến Hội An, ngự bút đề biển “Lai Viễn Kiều”, lấy ý từ câu trong sách Luận Ngữ “có bạn từ phương xa đến, chẳng vui sao” – lời khẳng định về một thương cảng mở rộng đón khách bốn phương.' },
        { kind: 'Tín ngưỡng', title: 'Chùa giữa cầu – Bắc Đế Trấn Võ', body: 'Gian thờ giữa cầu thờ Bắc Đế Trấn Võ (Huyền Thiên đại đế), vị thần cai quản thủy trong Đạo giáo. Về sau cộng đồng Minh Hương xây thêm miếu thờ này, tạo nên cái tên “Chùa Cầu” – một công trình vừa là cầu, vừa là đền thờ.' },
        { kind: 'Di sản', title: 'Hình ảnh trên đồng tiền', body: 'Năm 2003, hình ảnh Chùa Cầu được in trên tờ tiền polymer 50.000 đồng – minh chứng cho vị thế biểu tượng của cây cầu trong di sản văn hóa Việt Nam.' },
      ],
    },
    visit: {
      tag: 'THÔNG TIN THỰC DỤNG',
      h2: 'Tham quan Chùa Cầu',
      cards: [
        { title: 'Giờ vào cầu & gian thờ', body: 'Nguồn du lịch thành phố hiện công bố hai khung: 09:00–11:00 và 15:00–22:00. Khu vực bên ngoài có thể ngắm cả ngày. Lịch có thể điều chỉnh theo vận hành thực tế.' },
        { title: 'Vé / chi phí', body: 'Chùa Cầu thuộc hệ thống điểm tham quan của Đô thị cổ Hội An. Vé phố cổ có các mức khác nhau theo nhóm khách và quyền lợi; nên kiểm tra giá hiện hành trước khi đi.' },
        { title: 'Thời lượng gợi ý', body: '30–45 phút cho riêng Chùa Cầu; 2–4 giờ nếu kết hợp nhà cổ, hội quán, bờ sông Hoài và các tuyến phố di sản.' },
      ],
    },
    moments: {
      h2: 'Khoảnh khắc đẹp nhất',
      lead: 'Sáng sớm cho cảm giác tĩnh tại và dễ quan sát chi tiết kiến trúc. Cuối chiều chuyển sang “giờ xanh” là lúc mái ngói, tường vàng và ánh đèn phố cổ tạo nên khung cảnh đặc trưng nhất.',
    },
    move: {
      tag: 'DI CHUYỂN',
      h2: 'Hướng dẫn di chuyển chi tiết',
      subs: [
        { h3: 'Từ sân bay Đà Nẵng (DAD)', body: 'Cảng hàng không quốc tế Đà Nẵng cách Chùa Cầu khoảng 30 km về phía nam. Tùy phương tiện, thời gian thường từ 40–60 phút. Đây là cửa ngõ thuận tiện nhất với khách đi máy bay từ Hà Nội, TP. Hồ Chí Minh hay quốc tế.' },
        { h3: 'Xe buýt & xe khách liên tỉnh', body: 'Các tuyến xe buýt và xe khách nối Đà Nẵng – Hội An dừng tại bến xe hoặc các điểm đón dọc trục chính; từ điểm xuống, tiếp tục bằng xe đạp, đi bộ hoặc xe công nghệ vào phố cổ. Với ngân sách tiết kiệm, xe buýt là lựa chọn gặp gỡ cư dân địa phương và chi phí hợp lý.' },
        { h3: 'Taxi & ứng dụng gọi xe', body: 'Dịch vụ taxi và các ứng dụng gọi xe hoạt động phổ biến tại Đà Nẵng và Hội An. Nên chốt giá hoặc dùng tính năng hiển thị giá trước khi lên xe; với hành lý nhiều, đây là cách nhàn nhất từ sân bay đến tận rìa phố cổ.' },
        { h3: 'Thuê xe máy / xe đạp', body: 'Thuê xe máy hoặc xe đạp giúp tự do khám phá ven sông Hoài và vùng phụ cận. Lưu ý mang theo giấy phép lái xe, mũ bảo hiểm và đi chậm trong ngõ phố cổ vốn đông khách bộ hành.' },
        { h3: 'Trong phố cổ & gửi xe', body: 'Chùa Cầu nằm đầu đường Nguyễn Thị Minh Khai, sát lõi phố cổ. Cách thuận tiện nhất là đi bộ hoặc xe đạp. Ô tô và xe máy nên gửi tại các bãi đỗ bên ngoài khu lõi rồi đi bộ vào; một số khung giờ áp dụng không gian dành cho người đi bộ.' },
        { h3: 'Thời gian dự kiến', body: 'Từ sân bay: 40–60 phút · Từ trung tâm Đà Nẵng: 35–50 phút · Từ ga Đà Nẵng: 40–55 phút. Sáng sớm và giờ thấp điểm đỡ kẹt hơn.' },
      ],
      mapTitle: 'Bản đồ Chùa Cầu Hội An',
    },
    utilities: {
      tag: 'TIỆN ÍCH XUNG QUANH',
      h2: 'Tiện ích & dịch vụ quanh Chùa Cầu',
      lead: 'Khu phố cổ và vùng phụ cận có đầy đủ các dịch vụ cơ bản phục vụ khách tham quan. Để giữ tính trung lập của một trang thông tin phi lợi nhuận, chúng tôi chỉ giới thiệu theo loại hình dịch vụ, không gợi ý thương hiệu hay cơ sở cụ thể.',
      cards: [
        { title: 'Nhà vệ sinh công cộng', body: 'Có nhà vệ sinh công cộng trong khu phố cổ; nhiều quán ăn, cà phê cũng phục vụ khách khi sử dụng dịch vụ.' },
        { title: 'Đỗ xe', body: 'Ô tô và xe máy gửi tại các bãi xe ven khu phố cổ rồi đi bộ vào; không có bãi đỗ sát di tích.' },
        { title: 'Ẩm thực', body: 'Nhiều loại hình từ món ăn địa phương, cơm, phở, chè đến cà phê, bánh ngọt ngay trong và quanh phố cổ.' },
        { title: 'Lưu trú', body: 'Đa dạng loại hình từ khách sạn, homestay đến nhà nghỉ trong phố cổ và ven sông; nên đặt trước mùa cao điểm.' },
        { title: 'Mua sắm', body: 'Cửa hàng thủ công, đèn lồng, đồ lưu niệm và cửa hàng tiện lợi tập trung dọc các tuyến phố chính.' },
        { title: 'Đổ xăng & sạc xe', body: 'Trạm xăng nằm ven các tuyến đường cửa ngõ ngoài khu lõi; một số điểm cho thuê xe có hỗ trợ sạc xe điện.' },
        { title: 'Y tế', body: 'Trạm y tế, phòng khám và nhà thuốc hiện diện trong thành phố; bệnh viện cách trung tâm không xa.' },
        { title: 'ATM & đổi tiền', body: 'Máy ATM và điểm đổi ngoại tệ có tại khu trung tâm; thanh toán thẻ phổ biến tại nhiều điểm bán.' },
        { title: 'Nước uống', body: 'Quán nước, cà phê và cửa hàng tiện lợi phục vụ nước uống đóng chai; mang bình riêng để đảm bảo đủ nước trong ngày nắng nóng.' },
        { title: 'Tiếp cận & hỗ trợ', body: 'Lối đi bộ phố cổ tương đối bằng phẳng; một số đoạn lát đá có thể gồ ghề. Xe lăn và người cần hỗ trợ di chuyển chậm nên đi cùng người đồng hành.' },
      ],
    },
    seasonal: {
      tag: 'THEO MÙA',
      h2: 'Chiến lược tham quan theo mùa',
      lead: 'Hội An thuộc vùng khí hậu nhiệt đới gió mùa của Duyên hải Trung Bộ, với một mùa khô (thường từ tháng 2 đến tháng 8) và một mùa mưa (thường từ tháng 9 đến tháng 1, có thể xuất hiện bão hoặc áp thấp nhiệt đới). Bảng dưới tổng hợp đặc trưng nhiều năm để bạn sắp xếp lịch trình; số liệu thực tế từng năm có thể dao động, hãy kết hợp với bản tin dự báo thời tiết ở trên.',
      rows: [
        { phase: 'Tháng 2–4 · Đầu mùa khô', weather: 'Khô ráo, ít mưa, nắng ấm, độ ẩm vừa phải.', advice: 'Lý tưởng nhất: sáng sớm và chiều tối đều thuận tiện, ít lo mưa ngắt quãng.' },
        { phase: 'Tháng 5–8 · Cao điểm nắng', weather: 'Nắng gắt, nóng, độ ẩm cao, rất ít mưa.', advice: 'Đi sớm (trước 9h) hoặc chiều tối; mang mũ, chống nắng và bổ sung nước.' },
        { phase: 'Tháng 9–11 · Mùa mưa & bão', weather: 'Mưa nhiều, có thể có bão/áp thấp, nước sông dâng, lạch đôi khi ngập nhẹ.', advice: 'Ưu tiên tham quan sớm; theo dõi cảnh báo thiên tai; phố cổ mờ sương sau mưa rất đẹp.' },
        { phase: 'Tháng 12–1 · Cuối năm mát', weather: 'Mát hơn, vẫn có mưa rải rác, gió đông bắc.', advice: 'Đi bộ dễ chịu; mang áo khoác mỏng cho sáng và tối.' },
      ],
      note: 'Lưu ý: trong mùa mưa bão, một số tuyến đường ven sông có thể ngập cục bộ và hoạt động thuyền ngắn hạn bị gián đoạn. Hãy ưu tiên thông tin chính thức từ cơ quan chức năng địa phương trước khi di chuyển.',
    },
    itinerary: {
      tag: 'LỘ TRÌNH GỢI Ý',
      h2: 'Lộ trình theo đối tượng & thời lượng',
      lead: 'Tùy thành phần đoàn và nhịp độ, bạn có thể chọn một trong ba lộ trình định hướng dưới đây, kết hợp với phương án nửa ngày hoặc cả ngày.',
      personaCards: [
        { kind: 'Gia đình có trẻ nhỏ', title: 'Nhịp độ nhẹ, nhiều nghỉ chân', body: 'Tập trung quanh Chùa Cầu và vài nhà cổ gần đó; xen kẽ nghỉ trong quán cà phê có chỗ ngồi, ghé nhà vệ sinh công cộng và góc ăn vặt. Tránh khung trưa nắng gắt, ưu tiên sáng sớm.' },
        { kind: 'Nhiếp ảnh & thiên nhiên', title: 'Săn ánh sáng vàng', body: 'Đến lúc bình minh để bắt mặt tiền cầu không đông, quay lại lúc chiều tà–tối khi mái ngói, tường vàng và đèn phố cổ lên hình. Bờ sông phía nam cho góc phản chiếu nước.' },
        { kind: 'Người lớn tuổi / hạn chế vận động', title: 'Đường bằng, ngắn, có bóng mát', body: 'Đi bộ chậm trên lối lát đá bằng phẳng quanh Chùa Cầu, ghé gian thờ và ghế nghỉ; đi cùng người đồng hành, tránh giờ đông và nắng gắt.' },
      ],
      halfDay: { title: 'Lộ trình nửa ngày (≈ 3–4 giờ)', body: 'Chùa Cầu → 1–2 nhà cổ (như Tấn Ký) → Chợ Hội An → dạo bờ sông Hoài ngắm cầu từ phía An Hội. Vừa đủ cho chuyến đi lần đầu mà không quá tải.' },
      fullDay: { title: 'Lộ trình cả ngày (≈ 6–8 giờ)', body: 'Thêm Hội quán Phúc Kiến, Bảo tàng lịch sử văn hóa, một làng nghề thủ công và chuyến ngồi thuyền ngắn trên sông Hoài; chiều tối quay lại phố cổ khi lên đèn.' },
    },
    foodNearby: {
      foodH2: 'Món ngon quanh phố cổ',
      foodLead: 'Không cần rời xa khu di sản để tìm những món đặc trưng Hội An. Hãy ưu tiên trải nghiệm cao lầu, hoành thánh, bánh hoa hồng trắng, cơm gà và các món chè địa phương. Đây là gợi ý theo văn hóa ẩm thực điểm đến, không phải danh sách nhà hàng được tài trợ.',
      nearbyH2: 'Điểm đến lân cận',
      nearbyLead: 'Khi tham quan Chùa Cầu, du khách dễ dàng khám phá các địa danh lân cận như Nhà cổ Tấn Ký và Hội quán Phúc Kiến, cùng chợ Hội An và bờ sông Hoài ngay trong khu phố cổ.',
      nearbyTags: ['Nhà cổ Tấn Ký · khu phố cổ', 'Hội quán Phúc Kiến · Trần Phú', 'Chợ Hội An · ven sông', 'Sông Hoài & khu An Hội · đi bộ qua cầu'],
    },
    photo: {
      tag: 'GÓC ẢNH',
      h2: 'Những góc chụp được yêu thích',
      cards: [
        { title: 'Mặt tiền cầu', body: 'Đứng đầu đường Nguyễn Thị Minh Khai để ghi trọn mặt tiền, mái ngói và tấm biển “Lai Viễn Kiều”.' },
        { title: 'Bên dòng lạch', body: 'Bờ sông phía nam cho góc nhìn nghiêng với vòm cầu và bóng đổ trên nước lúc chiều muộn.' },
        { title: 'Trong hành lang', body: 'Xuyên qua khung gỗ, dãy cột và ánh sáng hắt vào tạo nên những lớp không gian rất riêng.' },
        { title: 'Từ phía An Hội', body: 'Phóng tầm mắt từ khu An Hội để bắt trọn cầu, phố cổ và dòng sông trong một khung hình.' },
      ],
    },
    responsibility: {
      tag: 'KHOA HỌC & TRÁCH NHIỆM',
      h2: 'Hiểu đúng di tích & trách nhiệm khách tham quan',
      lead: 'Chùa Cầu không chỉ là một cây cầu: đó là một hệ thống di sản sống giữa lòng phố cổ, gắn với dòng sông, khí hậu và đời sống cư dân. Nắm vài điều cơ bản giúp chuyến đi an toàn, tôn trọng và bền vững.',
      should: {
        h4: 'Nên',
        items: ['Giữ trật tự, nói nhỏ trong gian thờ', 'Chụp ảnh không dùng đèn flash gần bàn thờ', 'Đi bộ và dắt xe khi qua cầu đông người', 'Mang rác theo người khi không thấy thùng rác'],
      },
      shouldNot: {
        h4: 'Không nên',
        items: ['Trèo, tựa hoặc ngồi lên lan can, tượng linh vật', 'Sờ vào chi tiết gỗ, phù điêu cổ', 'Hút thuốc, ăn uống trong khu vực thờ tự', 'Đậu xe chắn lối đi bộ quanh cầu'],
      },
      cards: [
        { title: 'Chất lượng nước sông Hoài', body: 'Sông Hoài là trục cảnh quan phố cổ, phục vụ ngắm cảnh và thả đèn hoa đăng – không phải nơi bơi lội. Mùa mưa, dòng chảy mang phù sa nên nước thường đục hơn và lưu lượng lớn; giữ khoảng cách an toàn với bờ dốc, không vứt rác xuống nước.' },
        { title: 'Động vật hoang dã', body: 'Khu vực chủ yếu có chim sông, cá nhỏ và các loài quen đô thị. Không cho ăn, không đuổi bắt để giữ cân bằng sinh thái đô thị nhỏ bé này giữa lòng di sản.' },
        { title: 'Rác thải & zero waste', body: 'Mang túi riêng, giữ rác trong balo đến điểm thu gom; không vứt khăn ướt, vỏ chai xuống sông hay vỉa hè. Ưu tiên vật dụng tái sử dụng trong ngày tham quan.' },
        { title: 'An toàn & bảo tồn', body: 'Giữ khoảng cách với lan can, tượng cổ; không leo trèo. Trong cơn dông, chủ động vào mái che hoặc chỗ trú an toàn thay vì đứng trên cầu hở. Tuân thủ nội quy bảo tồn của di tích.' },
      ],
      note: 'Mùa mưa bão, hãy ưu tiên thông tin cảnh báo từ cơ quan chức năng địa phương; không tự ý xuống bờ sông khi nước dâng. Các lưu ý trên chỉ mang tính tham khảo, không thay thế quy định và cảnh báo chính thức.',
    },
    faq: {
      h2: 'FAQ · Câu hỏi thường gặp',
      pairs: [
        ['Chùa Cầu có phải là chùa Phật giáo không?', 'Không. Dù tên gọi có chữ “chùa”, gian thờ giữa cầu thờ Bắc Đế Trấn Vũ, vị thần gắn với tín ngưỡng bảo hộ và trấn thủy.'],
        ['Tham quan Chùa Cầu có cần vé không?', 'Việc đi vào cầu và gian thờ nằm trong hệ thống vé tham quan Đô thị cổ Hội An. Khu vực bên ngoài có thể ngắm và chụp ảnh; giá vé và quyền lợi có thể thay đổi nên nên kiểm tra nguồn chính thức trước chuyến đi.'],
        ['Nên đến Chùa Cầu lúc nào?', 'Sáng sớm phù hợp để ngắm kiến trúc trong không khí yên tĩnh; cuối chiều và đầu tối đẹp khi phố cổ lên đèn.'],
        ['Nên dành bao lâu tại đây?', 'Khoảng 30–45 phút đủ để quan sát mặt cầu, mái ngói, gian thờ và chụp ảnh; nên dành 2–4 giờ nếu kết hợp phố cổ quanh Chùa Cầu.'],
        ['Có thể đỗ ô tô ngay cạnh Chùa Cầu không?', 'Không nên kỳ vọng đỗ sát di tích vì khu phố cổ ưu tiên đi bộ theo khung giờ. Hãy gửi xe tại bãi ngoài khu lõi rồi đi bộ vào.'],
        ['Chùa Cầu có liên quan gì đến người Nhật?', 'Cầu do cộng đồng thương nhân Nhật Bản xây dựng vào khoảng cuối thế kỷ XVI – đầu thế kỷ XVII để nối khu phố Nhật với khu phố Hoa. Sau khi Nhật Bản đóng cửa giao thương, cộng đồng người Hoa tiếp quản việc trông coi và tu bổ.'],
        ['Vì sao trên cầu có tượng chó và khỉ?', 'Giới nghiên cứu cho rằng hai tượng linh vật là cách ghi dấu niên đại xây cầu: khởi công năm Thân (khỉ) và hoàn thành năm Tuất (chó). Một cách lý giải khác xem chúng là linh vật canh giữ cầu.'],
        ['Truyền thuyết “kiếm dưới cầu” có thật không?', 'Đây là truyền thuyết dân gian về việc chôn kiếm trấn giữ con vật nằm dưới lòng đất; chưa có bằng chứng khảo cổ xác nhận. Câu chuyện phản ánh tín ngưỡng trấn thủy và khát vọng bình an của cư dân thương cảng xưa.'],
        ['Gần Chùa Cầu có nhà vệ sinh, quán ăn, chỗ lưu trú không?', 'Có. Khu phố cổ và vùng phụ cận có đầy đủ nhà vệ sinh công cộng, quán ăn, cửa hàng tiện lợi và nhiều loại hình lưu trú. Chi tiết được trình bày theo loại hình ở mục Tiện ích.'],
      ],
    },
    sources: {
      h2: 'Nguồn đối chiếu chính thức',
      lead: 'Nội dung lịch sử, kiến trúc và hướng dẫn tham quan được đối chiếu với Cổng thông tin du lịch thành phố Đà Nẵng, Trung tâm Bảo tồn Di sản Văn hóa Thế giới Hội An và Cục Du lịch Quốc gia Việt Nam. Các thông tin vận hành như giá vé, khung giờ và tổ chức giao thông có thể thay đổi; hãy kiểm tra lại trước chuyến đi.',
      links: [
        { label: 'Du lịch Đà Nẵng', href: SAME_LINKS.danang },
        { label: 'Di sản Hội An', href: SAME_LINKS.heritage },
        { label: 'Vietnam Tourism', href: SAME_LINKS.vietnam },
      ],
    },
  },

  en: {
    meta: {
      title: 'Chùa Cầu Hội An | History, architecture & visitor guide',
      description:
        'English guide to Chùa Cầu Hội An (Japanese Covered Bridge, Lai Viễn Kiều): 400+ years of history, tickets, bridge hours, how to get there, parking, local food and nearby sights.',
    },
    attractionDescription:
      'A more-than-400-year-old architectural symbol of the Hội An Ancient Town, noted for its bridge-with-a-shrine design and the altar to Bắc Đế Trấn Vũ.',
    breadcrumb: [
      { name: 'Chùa Cầu', url: 'HOME' },
      { name: 'Hội An', url: SAME_LINKS.heritage },
      { name: 'Đà Nẵng', url: SAME_LINKS.danang },
      { name: 'Vietnam', url: SAME_LINKS.vietnam },
    ],
    hero: {
      kicker: 'Symbol of the Hội An Ancient Town',
      breadcrumbLabel: 'Hội An › Đà Nẵng › Vietnam',
      h1a: 'Chùa Cầu',
      h1em: 'where cultures converge',
      lead:
        'The Japanese Covered Bridge – Lai Viễn Kiều – is a tiled-roof timber bridge over four centuries old, linking the story of the Hội An trading port with the shared memory of Vietnamese, Japanese and Chinese commerce.',
      ctaPlan: 'Plan your visit',
      ctaMaps: 'Open Google Maps',
    },
    intro: {
      ornament: 'Lai Viễn Kiều',
      h2: 'One bridge, many layers of memory',
      paras: [
        'Chùa Cầu, also called the Japanese Covered Bridge or Lai Viễn Kiều, is the centrepiece of the Hội An Ancient Town in Quảng Nam, Vietnam. This tiled-roof timber bridge, more than four centuries old, is a highlight of most visitors’ old-town journey.',
        'Chùa Cầu took shape around the late 16th to early 17th century, when Hội An was an international trading port. The structure is tied to the Japanese merchant community and later became a defining symbol of the whole ancient town.',
        'In 1719, Lord Nguyễn Phúc Chu named it Lai Viễn Kiều, which can be read as “bridge that welcomes guests from afar”. The “house above, bridge below” form, yin-yang tiled roof, timber frame and decorative details give the bridge its distinctive character.',
        'A major restoration lasting nearly 19 months was completed and the bridge was re-inaugurated in August 2024.',
      ],
      timeline: [
        { year: 'Late 16th – early 17th c.', text: 'The Japanese merchant community built a tiled-roof timber bridge linking the Japanese quarter with the Chinese quarter.' },
        { year: '1634–1635', text: 'Japan adopted a policy of seclusion; the Japanese gradually left Hội An and the Chinese community took over care of the bridge.' },
        { year: '1695', text: 'Zen monk Thích Đại Sán recorded the “Japanese bridge” in “Hải ngoại kỷ sự” – among the earliest written accounts of the bridge.' },
        { year: '1719', text: 'Lord Nguyễn Phúc Chu inscribed the plaque “Lai Viễn Kiều”, a name that endures to this day.' },
        { year: '1817', text: 'Đinh Phiên’s “Trùng tu Lai Viễn Kiều ký” was carved on a stone stele, recording the legends and past restorations.' },
        { year: '1915', text: 'French resident Lesterlin led a restoration; artefacts are preserved at the site.' },
        { year: '1990', text: 'Chùa Cầu was designated a national-level historical and cultural relic.' },
        { year: '1999', text: 'The Hội An Ancient Town was inscribed as a UNESCO World Cultural Heritage site; Chùa Cầu is its central symbol.' },
        { year: '2022–2024', text: 'A major restoration of nearly 19 months was completed; the bridge reopened to visitors.' },
      ],
      figcaption: 'Chùa Cầu after the major restoration, viewed from the canal in the old town.',
    },
    legends: {
      tag: 'LEGENDS & STORIES',
      h2: 'Stories around the bridge',
      lead: 'From the flood-subduing legend to surviving historical records, Chùa Cầu carries many cultural layers. Each story below is labelled so you can tell folk legend, historical record and belief apart.',
      cards: [
        { kind: 'Legend', title: '“Cù dậy” – the beast beneath the land', body: 'An old tale says a giant creature named Cù lies under the soil of Hội An, its head in India and tail in Japan. Whenever it stirs, markets collapse and the land of Japan trembles. To pin it down, the Japanese cast a golden sword into its spine exactly where the bridge stands, then built the bridge above.' },
        { kind: 'Legend', title: 'The sword beneath the river', body: 'It is said the bridge foundations were repeatedly washed away by floods; the Japanese melted lead and silver and poured them into the riverbed as foundations, then raised stone piers. Local guides still tell visitors the story of the “sword buried under the bridge”.' },
        { kind: 'Record', title: 'The dog and monkey guardians', body: 'Statues of a dog and a monkey stand at either end. Scholars believe they mark the construction years: begun in the Year of the Monkey (Thân) and completed in the Year of the Dog (Tuất) in the sexagenary cycle. Another reading sees them as guardian spirits of the bridge.' },
        { kind: 'Record', title: '“Lai Viễn Kiều” – a name from the lord', body: 'In 1719, Lord Nguyễn Phúc Chu, on a visit to Hội An, inscribed “Lai Viễn Kiều”, drawn from the Confucian Analects line “is it not a pleasure to meet friends from afar?” – an affirmation of an open port welcoming guests from all directions.' },
        { kind: 'Belief', title: 'A temple on the bridge – Bắc Đế Trấn Võ', body: 'The shrine in the middle of the bridge honours Bắc Đế Trấn Võ (Huyền Thiên đại đế), the Taoist deity of water. Later the Minh Hương community added this altar, giving rise to the name “Chùa Cầu” – a structure that is both bridge and temple.' },
        { kind: 'Heritage', title: 'On the banknote', body: 'In 2003, the image of Chùa Cầu was printed on the 50,000-VND polymer note – evidence of the bridge’s symbolic status in Vietnam’s cultural heritage.' },
      ],
    },
    visit: {
      tag: 'PRACTICAL INFORMATION',
      h2: 'Visiting Chùa Cầu',
      cards: [
        { title: 'Bridge & shrine hours', body: 'The city tourism source currently lists two slots: 09:00–11:00 and 15:00–22:00. The exterior can be viewed any time of day. Hours may shift with actual operations.' },
        { title: 'Tickets / cost', body: 'Chùa Cầu is part of the Hội An Ancient Town ticket system. Old-town tickets vary by visitor group and included benefits; check the current price before you go.' },
        { title: 'Suggested duration', body: '30–45 minutes for Chùa Cầu alone; 2–4 hours if combined with old houses, assembly halls, the Hoài riverbank and heritage streets.' },
      ],
    },
    moments: {
      h2: 'The best moments',
      lead: 'Early morning brings calm and makes the architectural details easy to read. Late afternoon turns to the “blue hour”, when the tiled roof, yellow walls and old-town lights create the most characteristic scene.',
    },
    move: {
      tag: 'GETTING THERE',
      h2: 'Detailed transport guide',
      subs: [
        { h3: 'From Đà Nẵng airport (DAD)', body: 'Đà Nẵng International Airport is about 30 km south of Chùa Cầu. Depending on transport, the trip is usually 40–60 minutes. It is the most convenient gateway for flights from Hà Nội, Ho Chi Minh City or abroad.' },
        { h3: 'Bus & intercity coach', body: 'Bus and coach services linking Đà Nẵng – Hội An stop at the station or pick-up points along the main axis; from there, continue by bicycle, on foot or by ride-hailing app into the old town. On a budget, the bus is a sociable, reasonably priced choice.' },
        { h3: 'Taxi & ride-hailing', body: 'Taxis and ride-hailing apps are common in Đà Nẵng and Hội An. Agree a price or use the up-front fare feature before boarding; with lots of luggage this is the most relaxed way from the airport to the edge of the old town.' },
        { h3: 'Motorbike / bicycle rental', body: 'Renting a motorbike or bicycle frees you to explore the Hoài riverside and surroundings. Carry your licence and helmet, and ride slowly in the pedestrian-packed old lanes.' },
        { h3: 'Inside the old town & parking', body: 'Chùa Cầu sits at the head of Nguyễn Thị Minh Khai street, at the old-town core. Walking or cycling is easiest. Cars and motorbikes should park at lots outside the core and walk in; some hours are reserved for pedestrians.' },
        { h3: 'Estimated travel time', body: 'From the airport: 40–60 min · From central Đà Nẵng: 35–50 min · From Đà Nẵng station: 40–55 min. Early morning and off-peak are less congested.' },
      ],
      mapTitle: 'Map of Chùa Cầu Hội An',
    },
    utilities: {
      tag: 'NEARBY FACILITIES',
      h2: 'Facilities & services around Chùa Cầu',
      lead: 'The old town and its surroundings have all the basic services visitors need. To stay neutral as a non-profit information site, we list by type of service only, and do not recommend specific brands or venues.',
      cards: [
        { title: 'Public toilets', body: 'Public toilets are available in the old town; many eateries and cafés also serve customers who use their services.' },
        { title: 'Parking', body: 'Cars and motorbikes park at lots on the edge of the old town, then walk in; there is no lot right next to the relic.' },
        { title: 'Food & drink', body: 'Many options from local dishes, rice, phở and chè to coffee and pastries right inside and around the old town.' },
        { title: 'Accommodation', body: 'A wide range from hotels and homestays to guesthouses in the old town and by the river; book ahead in peak season.' },
        { title: 'Shopping', body: 'Craft shops, lanterns, souvenirs and convenience stores cluster along the main streets.' },
        { title: 'Fuel & EV charging', body: 'Petrol stations sit on the outer approach roads; some rental points support EV charging.' },
        { title: 'Medical', body: 'Health stations, clinics and pharmacies are in the city; the hospital is not far from the centre.' },
        { title: 'ATM & currency', body: 'ATMs and exchange points are in the centre; card payment is common at many outlets.' },
        { title: 'Drinking water', body: 'Drinks stalls, cafés and convenience stores sell bottled water; bring your own bottle to stay hydrated on hot days.' },
        { title: 'Accessibility', body: 'Old-town footpaths are fairly level; some stone-paved stretches are uneven. Wheelchairs and those needing support should move slowly with a companion.' },
      ],
    },
    seasonal: {
      tag: 'BY SEASON',
      h2: 'Seasonal visiting strategy',
      lead: 'Hội An has a tropical monsoon climate on the Central Coast, with a dry season (usually February–August) and a rainy season (usually September–January, when storms or tropical depressions may appear). The table summarises multi-year patterns to help you plan; actual figures vary year to year, so combine it with the weather forecast above.',
      rows: [
        { phase: 'Feb–Apr · Early dry', weather: 'Dry, little rain, warm sun, moderate humidity.', advice: 'Ideal: both early morning and late afternoon are convenient, with little worry of intermittent rain.' },
        { phase: 'May–Aug · Peak sun', weather: 'Harsh sun, hot, high humidity, very little rain.', advice: 'Go early (before 9am) or in the evening; bring a hat, sun protection and water.' },
        { phase: 'Sep–Nov · Rain & storms', weather: 'Frequent rain, possible storms/low pressure, rising river, canal occasionally lightly flooded.', advice: 'Prioritise early visits; follow natural-disaster warnings; the misty old town after rain is very atmospheric.' },
        { phase: 'Dec–Jan · Cool year-end', weather: 'Cooler, still some scattered rain, northeast monsoon wind.', advice: 'Pleasant for walking; bring a light jacket for morning and evening.' },
      ],
      note: 'Note: in the rainy/storm season, some riverside roads may flood locally and boat trips may pause. Prioritise official information from local authorities before travelling.',
    },
    itinerary: {
      tag: 'SUGGESTED ROUTES',
      h2: 'Routes by traveller & duration',
      lead: 'Depending on your group and pace, pick one of the three orienting routes below, combined with a half-day or full-day plan.',
      personaCards: [
        { kind: 'Families with young children', title: 'Gentle pace, many breaks', body: 'Focus around Chùa Cầu and a few nearby old houses; weave in café breaks with seating, public toilets and snack corners. Avoid the hot midday, prefer early morning.' },
        { kind: 'Photography & nature', title: 'Chase the golden light', body: 'Arrive at dawn for the empty bridge front, return at dusk when the tiles, yellow walls and old-town lights glow. The south bank gives a water-reflection angle.' },
        { kind: 'Seniors / limited mobility', title: 'Flat, short, shaded', body: 'Walk slowly on the level stone path around Chùa Cầu, visit the shrine and rest benches; go with a companion, avoid peak crowds and harsh sun.' },
      ],
      halfDay: { title: 'Half-day route (≈ 3–4 hours)', body: 'Chùa Cầu → 1–2 old houses (e.g. Tấn Ký) → Hội An Market → stroll the Hoài riverbank to view the bridge from An Hội. Enough for a first visit without overload.' },
      fullDay: { title: 'Full-day route (≈ 6–8 hours)', body: 'Add the Phúc Kiến Assembly Hall, the history-and-culture museum, a craft village and a short boat ride on the Hoài; return to the lit old town in the evening.' },
    },
    foodNearby: {
      foodH2: 'Local food around the old town',
      foodLead: 'You need not leave the heritage area for Hội An specialties. Prioritise cao lầu, hoành thánh, white rose dumplings, chicken rice and local chè. This is a suggestion by destination food culture, not a sponsored restaurant list.',
      nearbyH2: 'Nearby attractions',
      nearbyLead: 'While visiting Chùa Cầu, you can easily explore nearby spots such as the Tấn Ký Old House and the Phúc Kiến Assembly Hall, plus Hội An Market and the Hoài riverbank right in the old town.',
      nearbyTags: ['Tấn Ký Old House · old town', 'Phúc Kiến Assembly Hall · Trần Phú', 'Hội An Market · riverside', 'Hoài River & An Hội · walk across the bridge'],
    },
    photo: {
      tag: 'PHOTO SPOTS',
      h2: 'Favourite photo angles',
      cards: [
        { title: 'Bridge front', body: 'Stand at the head of Nguyễn Thị Minh Khai to capture the full façade, tiled roof and the “Lai Viễn Kiều” plaque.' },
        { title: 'By the canal', body: 'The south bank gives a side view with the bridge arch and its shadow on the water in late afternoon.' },
        { title: 'In the corridor', body: 'Through the timber frame, columns and raking light you get beautifully layered spaces.' },
        { title: 'From An Hội side', body: 'Look back from An Hội to frame the bridge, old town and river in one shot.' },
      ],
    },
    responsibility: {
      tag: 'SCIENCE & RESPONSIBILITY',
      h2: 'Understanding the relic & visitor responsibility',
      lead: 'Chùa Cầu is not just a bridge: it is a living heritage system within the old town, tied to the river, climate and residents’ life. A few basics help make your trip safe, respectful and sustainable.',
      should: {
        h4: 'Do',
        items: ['Keep quiet and speak softly in the shrine', 'No flash photography near the altar', 'Walk and push your bike when the bridge is crowded', 'Take your rubbish with you when no bin is nearby'],
      },
      shouldNot: {
        h4: 'Don’t',
        items: ['Climb, lean on or sit on the railing or guardian statues', 'Touch the old wood or carved reliefs', 'Smoke or eat in the worship area', 'Park across the pedestrian path around the bridge'],
      },
      cards: [
        { title: 'Hoài river water quality', body: 'The Hoài is the old town’s scenic axis, for views and floating lanterns – not for swimming. In the rainy season, runoff carries silt so the water is murkier and faster; keep a safe distance from steep banks, don’t drop litter in the water.' },
        { title: 'Wildlife', body: 'The area has mostly river birds, small fish and urban-tolerant species. Don’t feed or chase them, to keep this small urban ecosystem in balance within the heritage site.' },
        { title: 'Waste & zero waste', body: 'Bring your own bag, keep rubbish in your backpack to a collection point; don’t toss wipes or bottles into the river or street. Prefer reusable items during the day.' },
        { title: 'Safety & conservation', body: 'Keep distance from the railing and old statues; don’t climb. In a thunderstorm, move under shelter rather than standing on the open bridge. Follow the relic’s conservation rules.' },
      ],
      note: 'In the rainy/storm season, prioritise warnings from local authorities; don’t go down to the riverbank when water rises. The notes above are for reference only and do not replace official rules and warnings.',
    },
    faq: {
      h2: 'FAQ · Frequently asked questions',
      pairs: [
        ['Is Chùa Cầu a Buddhist temple?', 'No. Despite the word “chùa”, the shrine in the middle of the bridge honours Bắc Đế Trấn Vũ, a deity associated with protection and water control.'],
        ['Do I need a ticket to visit Chùa Cầu?', 'Entering the bridge and shrine is covered by the Hội An Ancient Town ticket system. The exterior can be viewed and photographed; prices and benefits may change, so check the official source before your trip.'],
        ['When should I visit Chùa Cầu?', 'Early morning suits quiet architectural viewing; late afternoon and early evening are beautiful when the old town lights up.'],
        ['How long should I spend here?', 'About 30–45 minutes is enough to see the bridge deck, tiled roof, shrine and take photos; allow 2–4 hours if combining the old town around Chùa Cầu.'],
        ['Can I park a car right next to Chùa Cầu?', 'Don’t expect to park at the relic itself, as the old town gives priority to pedestrians by time slot. Park at a lot outside the core and walk in.'],
        ['What is Chùa Cầu’s link to Japan?', 'The bridge was built by the Japanese merchant community around the late 16th–early 17th century to link the Japanese and Chinese quarters. After Japan closed its trade, the Chinese community took over its care and restoration.'],
        ['Why are there dog and monkey statues on the bridge?', 'Scholars believe the two guardian figures mark the construction years: started in the Year of the Monkey (Thân) and completed in the Year of the Dog (Tuất). Another reading sees them as guardian spirits of the bridge.'],
        ['Is the “sword under the bridge” legend true?', 'This is a folk legend about a sword buried to pin the creature beneath the land; no archaeological evidence confirms it. The story reflects the water-subduing belief and the peace wish of the old port’s residents.'],
        ['Are there toilets, food and lodging near Chùa Cầu?', 'Yes. The old town and surroundings have public toilets, eateries, convenience stores and many types of lodging. Details are listed by type in the Facilities section.'],
      ],
    },
    sources: {
      h2: 'Official reference sources',
      lead: 'Historical, architectural and visitor guidance content is cross-checked against the Đà Nẵng tourism portal, the Hội An World Heritage Conservation Centre and the Vietnam National Authority of Tourism. Operational details such as prices, hours and traffic may change; verify before your trip.',
      links: [
        { label: 'Đà Nẵng Tourism', href: SAME_LINKS.danang },
        { label: 'Hội An Heritage', href: SAME_LINKS.heritage },
        { label: 'Vietnam Tourism', href: SAME_LINKS.vietnam },
      ],
    },
  },

  zh: {
    meta: {
      title: '會安日本廊橋 | 歷史、建築與參觀導覽',
      description:
        '會安日本廊橋（來遠橋）中文導覽：四百餘年歷史、門票、入橋時段、交通方式、停車、在地美食與周邊景點。',
    },
    attractionDescription:
      '會安古鎮超過四百年的建築象徵，以「上家下橋」形式與供奉北帝鎮武的祠廟著稱。',
    breadcrumb: [
      { name: '日本廊橋', url: 'HOME' },
      { name: '會安', url: SAME_LINKS.heritage },
      { name: '峴港', url: SAME_LINKS.danang },
      { name: '越南', url: SAME_LINKS.vietnam },
    ],
    hero: {
      kicker: '會安古鎮的象徵',
      breadcrumbLabel: '會安 › 峴港 › 越南',
      h1a: '日本廊橋',
      h1em: '多元文化交會之處',
      lead:
        '日本廊橋（來遠橋）是一座擁有四百餘年歷史的瓦頂木橋，連結會安商港的故事，以及越南、日本與中華往來的集體記憶。',
      ctaPlan: '規劃行程',
      ctaMaps: '開啟 Google 地圖',
    },
    intro: {
      ornament: '來遠橋',
      h2: '一座橋，多層記憶',
      paras: [
        '日本廊橋，又稱日本橋或來遠橋，是越南廣南省會安古鎮的核心象徵。這座四百餘年的瓦頂木橋，是多數遊客古鎮之行的高光所在。',
        '日本廊橋約成形於十六世紀末至十七世紀初，正值會安為國際商港之時。此橋與日本商人聚落相繫，後來更成為整座古鎮的代表性標誌。',
        '1719 年，阮福淍主公命名「來遠橋」，意為「迎接近方來客之橋」。「上家下橋」的形式，搭配陰陽瓦頂、木構與裝飾細節，造就其獨特風貌。',
        '歷時近 19 個月的大規模修復已完工，橋體於 2024 年 8 月重新落成啟用。',
      ],
      timeline: [
        { year: '十六世紀末–十七世紀初', text: '日本商人聚落興建瓦頂木橋，連接日本町與中華町。' },
        { year: '1634–1635', text: '日本實施鎖國政策；日人逐漸離開會安，華人接手看管橋梁。' },
        { year: '1695', text: '禪僧釋大汕於《海外紀事》記載「日本橋」，為最早關於此橋的文獻之一。' },
        { year: '1719', text: '阮福淍主公御筆題「來遠橋」匾，此名沿用至今。' },
        { year: '1817', text: '丁賁《重修來遠橋記》刻於石碑，記錄傳說與歷次修葺。' },
        { year: '1915', text: '法國駐防官 Lesterlin 主持修橋；相關文物保存於橋上。' },
        { year: '1990', text: '日本廊橋被列為國家級歷史文化遺跡。' },
        { year: '1999', text: '會安古鎮获聯合國教科文組織列為世界文化遺產；日本廊橋為其核心象徵。' },
        { year: '2022–2024', text: '歷時近 19 個月的大規模修復完工，橋體重新開放迎客。' },
      ],
      figcaption: '大規模修復後的日本廊橋，由古鎮水道望出。',
    },
    legends: {
      tag: '傳說與故事',
      h2: '橋畔的種種故事',
      lead: '從鎮水傳說到留存至今的史料，日本廊橋承載多重文化層次。下列每則故事皆標註類別，便於區分民間傳說、史料與信仰。',
      cards: [
        { kind: '傳說', title: '「瞿起」——地底下的巨獸', body: '古時傳說會安地下有一巨獸名「瞿」，頭在印度、尾在日本。每當牠翻身，市集塌陷、日本大地震動。為鎮住牠，日人鑄金劍直插巨獸脊背正對橋址之處，再於其上築橋。' },
        { kind: '傳說', title: '河底之劍', body: '相傳橋基曾多次被洪水沖走；日人熔鉛與銀灌入河床作為橋基，再立石墩。當地導覽至今仍向遊客講述「橋下埋劍」的故事。' },
        { kind: '史料', title: '狗與猴兩尊神獸', body: '橋兩端立有狗與猴雕像。學者認為這是標記建橋年份：猴年（申）動工、狗年（戌）完工（依干支）。另一說視其為守橋靈獸。' },
        { kind: '史料', title: '「來遠橋」——主公賜名', body: '1719 年，阮福淍主公巡幸會安，御筆題「來遠橋」，取《論語》「有朋自遠方來，不亦樂乎」之意——宣示這座對外開放的商港迎接四方來客。' },
        { kind: '信仰', title: '橋中之廟——北帝鎮武', body: '橋中央的祠廟供奉北帝鎮武（玄天大帝），為道教水神。後來明香社群增建此廟，遂有「廊橋」之名——既是橋，也是廟。' },
        { kind: '遺產', title: '印在紙鈔上', body: '2003 年，日本廊橋圖案印於 50,000 越南盾塑膠鈔票——見證此橋在越南文化遺產中的象徵地位。' },
      ],
    },
    visit: {
      tag: '實用資訊',
      h2: '參觀日本廊橋',
      cards: [
        { title: '入橋與祠廟時段', body: '市府旅遊資訊目前公布兩個時段：09:00–11:00 與 15:00–22:00。外圍全天可觀賞。實際運作可能略有調整。' },
        { title: '門票／費用', body: '日本廊橋屬會安古鎮景點系統。古鎮門票依遊客類別與含蓋權益而有不同；出發前請查詢現行票價。' },
        { title: '建議停留', body: '單看日本廊橋約 30–45 分鐘；若結合古宅、會館、秋盆河岸與遺產街區，約 2–4 小時。' },
      ],
    },
    moments: {
      h2: '最美的時刻',
      lead: '清晨寧靜，便於觀察建築細節。午後轉入「藍調時刻」，瓦頂、黃牆與古鎮燈火構成最具代表性的畫面。',
    },
    move: {
      tag: '交通方式',
      h2: '詳細交通指引',
      subs: [
        { h3: '從峴港機場（DAD）出發', body: '峴港國際機場距日本廊橋約 30 公里（南側）。依交通工具不同，車程通常 40–60 分鐘。對自河內、胡志明市或國外搭機的旅客最為便利。' },
        { h3: '巴士與長途客運', body: '峴港–會安的巴士與客運停靠車站或主幹道沿線的搭乘點；下車後以自行車、步行或叫車 App 進入古鎮。預算有限的話，巴士能接觸在地居民且價格合理。' },
        { h3: '計程車與叫車', body: '峴港與會安的計程車及叫車 App 相當普遍。上車前請議價或使用預估車資功能；行李多時，這是從機場直達古鎮邊緣最輕鬆的方式。' },
        { h3: '機車／自行車租借', body: '租機車或自行車可自由探索秋盆河岸與周邊。請隨身攜帶駕照與安全帽，在遊客眾多的古巷中慢行。' },
        { h3: '古鎮內與停車', body: '日本廊橋坐落於阮氏明開街（Nguyễn Thị Minh Khai）街頭，緊鄰古鎮核心。步行或騎自行車最方便。汽機車請停於核心區外的停車場再步行進入；部分時段闢為步行空間。' },
        { h3: '預估車程', body: '機場：40–60 分鐘 · 峴港市中心：35–50 分鐘 · 峴港車站：40–55 分鐘。清晨與離峰較不塞車。' },
      ],
      mapTitle: '會安日本廊橋地圖',
    },
    utilities: {
      tag: '周邊設施',
      h2: '日本廊橋周邊設施與服務',
      lead: '古鎮及其周邊具備遊客所需的基本服務。為維持非營利資訊站的中立性，我們僅按「服務類型」介紹，不推薦特定品牌或店家。',
      cards: [
        { title: '公共廁所', body: '古鎮內設有公共廁所；許多餐飲、咖啡店也對消費者開放。' },
        { title: '停車', body: '汽機車停放於古鎮外圍停車場後步行進入；遺址旁無停車場。' },
        { title: '餐飲', body: '古鎮內外即有在地小吃、米粉、河粉、甜湯、咖啡與糕點等多種選擇。' },
        { title: '住宿', body: '從飯店、民宿到旅館，類型多元，分布於古鎮與河岸；旺季請提前預訂。' },
        { title: '購物', body: '手工藝品、燈籠、紀念品與便利商店集中於主要街道。' },
        { title: '加油與充電', body: '加油站位於核心區外的聯外道路；部分租車點支援電動車充電。' },
        { title: '醫療', body: '市內設有衛生站、診所與藥局；醫院離市中心不遠。' },
        { title: '提款與換匯', body: '市中心設有 ATM 與換匯點；多數店家普遍接受刷卡。' },
        { title: '飲用水', body: '飲料攤、咖啡與便利商店販售瓶裝水；炎熱天氣請自備水壺補充水分。' },
        { title: '無障礙', body: '古鎮步道大致平緩；部分石板路段略不平。輪椅與需協助者建議由同行者慢行陪伴。' },
      ],
    },
    seasonal: {
      tag: '依季節',
      h2: '季節參觀策略',
      lead: '會安屬中部沿海熱帶季風氣候，旱季通常為 2–8 月，雨季通常為 9–1 月（可能出現颱風或熱帶低壓）。下表彙整多年特徵供排程參考；每年實際數值會浮動，請搭配上方天氣預報。',
      rows: [
        { phase: '2–4 月 · 旱季初期', weather: '乾燥、少雨、暖陽、濕度適中。', advice: '最理想：清晨與傍晚皆便利，較不擔心間歇降雨。' },
        { phase: '5–8 月 · 烈日高峰', weather: '豔陽、炎熱、高濕度、極少雨。', advice: '早出（9 點前）或傍晚；戴帽、防曬並補充水分。' },
        { phase: '9–11 月 · 雨季與颱風', weather: '多雨，可能有颱風／低壓，河水上漲，水道偶有輕微積水。', advice: '優先早訪；留意天然災害警示；雨後薄霧的古鎮極具詩意。' },
        { phase: '12–1 月 · 年末涼爽', weather: '較涼，仍有零散降雨，東北季風。', advice: '步行舒適；早晚備薄外套。' },
      ],
      note: '注意：雨季期間部分河岸道路可能局部積水，船班短期暫停。出發前請優先參考地方主管機關的官方資訊。',
    },
    itinerary: {
      tag: '建議路線',
      h2: '依對象與時長的路線',
      lead: '依同行成員與步調，從下列三條導向路線中擇一，再搭配半日或全日方案。',
      personaCards: [
        { kind: '親子家庭', title: '輕鬆步調，多停留', body: '集中在日本廊橋與附近幾間古宅；穿插有座位的咖啡休息、公共廁所與點心角落。避開炎熱中午，以清晨為佳。' },
        { kind: '攝影與自然', title: '追逐金色光線', body: '黎明抵達以捕捉沒人的橋面，黃昏至入夜再回訪，此時瓦頂、黃牆與古鎮燈火亮起。南岸可得水面倒影角度。' },
        { kind: '長者／行動不便', title: '平坦、短程、有遮蔭', body: '於日本廊橋周圍平坦石板路慢行，參觀祠廟與休息座椅；由同行者陪伴，避開人潮與烈陽。' },
      ],
      halfDay: { title: '半日路線（約 3–4 小時）', body: '日本廊橋 → 1–2 間古宅（如陳家祠堂 Tấn Ký）→ 會安市場 → 漫步秋盆河岸從安會（An Hội）側欣賞橋景。首次造訪恰到好處且不會太趕。' },
      fullDay: { title: '全日路線（約 6–8 小時）', body: '加福建會館、歷史文化博物館、一處手工村落，以及在秋盆河上的短程乘船；傍晚回到點燈的古鎮。' },
    },
    foodNearby: {
      foodH2: '古鎮周邊美食',
      foodLead: '不必離開遺產區就能找到會安特產。優先品嚐 cao lầu（高樓麵）、hoành thánh（餛飩）、白玫瑰糕、雞飯與在地甜湯。這是按目的地飲食文化的建議，而非受贊助的餐廳清單。',
      nearbyH2: '周邊景點',
      nearbyLead: '參觀日本廊橋時，可輕鬆探訪鄰近的陳家祠堂（Tấn Ký）與福建會館，以及同在古鎮內的會安市場與秋盆河岸。',
      nearbyTags: ['陳家祠堂 Tấn Ký · 古鎮內', '福建會館 · 陳富街 Trần Phú', '會安市場 · 河岸', '秋盆河與安會區 · 步行過橋'],
    },
    photo: {
      tag: '攝影角度',
      h2: '最受喜愛的取景點',
      cards: [
        { title: '橋正面', body: '站在阮氏明開街街頭，完整收錄正面、瓦頂與「來遠橋」匾額。' },
        { title: '水道旁', body: '南岸可得側視角度，午後橋拱與水面倒影相映。' },
        { title: '廊道之內', body: '穿過木構、列柱與斜射光線，層次空間獨具。' },
        { title: '從安會側', body: '自安會區回望，可將橋、古鎮與河流收進同一畫面。' },
      ],
    },
    responsibility: {
      tag: '科普與責任',
      h2: '正確認識遺址與遊客責任',
      lead: '日本廊橋不只是一座橋：它是古鎮之中活的遺產系統，與河流、氣候及居民生活相繫。掌握幾項基本觀念，讓旅程安全、尊重且永續。',
      should: {
        h4: '宜',
        items: ['在祠廟內保持安靜、低聲說話', '靠近神龛不使用閃光燈拍照', '橋上擁擠時步行並牽車', '附近無垃圾桶時自行帶走垃圾'],
      },
      shouldNot: {
        h4: '不宜',
        items: ['攀爬、倚靠或坐在欄杆與守橋神獸上', '觸摸舊木構與浮雕', '在祭祀區吸菸、飲食', '將車輛停放在橋周步行動線上'],
      },
      cards: [
        { title: '秋盆河水質', body: '秋盆河是古鎮的景觀軸線，供賞景與放水燈——非戲水處。雨季逕流帶泥沙，水色較濁、流量較大；與陡岸保持安全距離，勿向水中丟棄垃圾。' },
        { title: '野生動物', body: '此區多為河鳥、小魚與習於都市的物種。請勿餵食或驅趕，以維持這座遺產地中微小城市生態的平衡。' },
        { title: '垃圾與零廢棄', body: '自備袋子，將垃圾收於背包至收集點；勿將濕紙巾、瓶罐丟入河或人行道。遊覽當日優先使用可重複物品。' },
        { title: '安全與保存', body: '與欄杆、舊雕像保持距離；勿攀爬。雷陣雨時主動到遮簷或安全處避雨，勿站在開放橋面。遵守遺址保存規範。' },
      ],
      note: '雨季期間請優先參考地方主管機關的警示；水位上漲時勿自行下到河岸。以上僅供參考，不取代官方規定與警示。',
    },
    faq: {
      h2: '常見問題 FAQ',
      pairs: [
        ['日本廊橋是佛教寺廟嗎？', '不是。儘管名稱有「廟」字，橋中央的祠廟供奉北帝鎮武，為與護佑、鎮水相關的信仰神祇。'],
        ['參觀日本廊橋需要門票嗎？', '入橋與祠廟包含在會安古鎮門票系統內。外圍可觀賞與拍照；票價與權益可能變動，出發前請查詢官方來源。'],
        ['什麼時候去日本廊橋最好？', '清晨適合在寧靜中欣賞建築；午後至入夜，古鎮點燈時格外美麗。'],
        ['建議停留多久？', '單看日本廊橋約 30–45 分鐘；若結合周邊古鎮，約 2–4 小時。'],
        ['可以在日本廊橋旁停汽車嗎？', '遺址旁不必期待有停車位，因古鎮按時段優先步行。請停於核心區外停車場再步行進入。'],
        ['日本廊橋與日本有何關聯？', '此橋約於十六世紀末至十七世紀初由日本商人聚落興建，連接日本町與中華町。日本鎖國後，由華人社群接手看管與修葺。'],
        ['為何橋上有狗與猴雕像？', '學者認為兩尊守護獸標記建橋年份：猴年（申）動工、狗年（戌）完工（依干支）。另一說視其為守橋靈獸。'],
        ['「橋下之劍」傳說是真的嗎？', '這是關於埋劍鎮住地下巨獸的民間傳說；尚無考古證據證實。故事反映古代商港居民的鎮水信仰與平安願望。'],
        ['日本廊橋附近有廁所、餐飲與住宿嗎？', '有。古鎮及周邊具備公共廁所、餐飲、便利商店與多種住宿。詳情按類型列於「周邊設施」一節。'],
      ],
    },
    sources: {
      h2: '官方對照來源',
      lead: '歷史、建築與參觀指引內容，參考峴港旅遊入口網、會安世界遺產管理中心與越南國家旅遊局。票價、時段與交通等營運資訊可能變動；出發前請再次確認。',
      links: [
        { label: '峴港旅遊', href: SAME_LINKS.danang },
        { label: '會安遺產', href: SAME_LINKS.heritage },
        { label: 'Vietnam Tourism', href: SAME_LINKS.vietnam },
      ],
    },
  },
};
