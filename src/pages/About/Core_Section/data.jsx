// src/pages/MarxismPhilosophyPage/data.ts
import React from "react";
import {
  Flag,
  Users,
  Landmark,
  Heart,
  Home,
  Ship,
  BookOpen,
  Mountain,
  Sparkles,
} from "lucide-react";

/** ====== (A) KHỐI 3-4 Ô TƯƠNG TÁC: CÁC KHÁI NIỆM CỐT LÕI ====== */
export const corePhilosophies = [
  {
    icon: <Flag className="w-12 h-12" />,
    title: "Độc lập dân tộc gắn liền CNXH",
    subtitle: "Hạt nhân tư tưởng",
    description:
      "Độc lập không chỉ là thoát ách nô lệ, mà phải dẫn đến dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
    principles: [
      "Độc lập thật sự, toàn diện",
      "Gắn hạnh phúc nhân dân",
      "Đi lên CNXH phù hợp thực tiễn",
    ],
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Đại đoàn kết toàn dân tộc",
    subtitle: "Sức mạnh vô địch",
    description:
      "Lấy liên minh công–nông làm nền tảng; đoàn kết mọi tầng lớp, tôn giáo, dân tộc trên mục tiêu chung vì nước, vì dân.",
    principles: [
      "Đoàn kết là chiến lược lâu dài",
      "Mặt trận dân tộc thống nhất",
      "Kết hợp sức mạnh dân tộc & thời đại",
    ],
  },
  {
    icon: <Landmark className="w-12 h-12" />,
    title: "Đảng & Nhà nước của nhân dân",
    subtitle: "Trụ cột tổ chức",
    description:
      "Đảng phải trong sạch, vững mạnh, gần dân, vì dân; Nhà nước của dân–do dân–vì dân, thượng tôn pháp luật.",
    principles: [
      "Đảng là đạo đức, là văn minh",
      "Cán bộ là công bộc của dân",
      "Chống quan liêu, tham ô, lãng phí",
    ],
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Con người – Văn hóa – Đạo đức",
    subtitle: "Nền tảng lâu dài",
    description:
      "Xây dựng con người mới; bồi đắp văn hóa tiên tiến, đậm đà bản sắc; rèn đạo đức cách mạng làm gốc.",
    principles: [
      "Cần, kiệm, liêm, chính, chí công vô tư",
      "Văn hóa soi đường quốc dân đi",
      "Vì lợi ích trăm năm trồng người",
    ],
  },
];

/** ====== (B) SLIDE TƯƠNG TÁC (IntroduceSection) ====== */
/** Bạn có thể thay URL bằng ảnh nội bộ hoặc ảnh bạn sưu tầm */
export const introSlides = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ho_Chi_Minh_1946.jpg",
    title: "Slide 1: Khởi đầu hành trình",
    text:
      "Từ cậu bé Nguyễn Sinh Cung ở làng Sen, chịu cảnh mất nước, Người trở thành Nguyễn Ái Quốc — đấu tranh cho các dân tộc bị áp bức. " +
      "30 năm bôn ba 5 châu 4 biển, tiếp xúc chủ nghĩa Mác–Lênin, trở thành ngọn lửa cách mạng.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Nha_Rong_Wharf.jpg",
    title: "Slide 2: Bến Nhà Rồng 1911 – Bước ngoặt vĩ đại",
    text:
      "Ngày 5/6/1911, Người rời Sài Gòn trên tàu Amiral Latouche Tréville, mang theo khát vọng “tìm đường cứu nước”. " +
      "Đây là khởi đầu hành trình tiếp thu chủ nghĩa Mác–Lênin và sáng tạo tư tưởng riêng cho Việt Nam.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Declaration_of_Independence_of_the_Democratic_Republic_of_Vietnam_1945.jpg",
    title: "Slide 3: Hình thành tư tưởng – Vận dụng sáng tạo",
    text:
      "Tư tưởng Hồ Chí Minh hình thành qua 5 giai đoạn: Tìm đường cứu nước → Thành lập Đảng → Cách mạng Tháng Tám → Kháng chiến → Xây dựng CNXH. " +
      "Không giáo điều, không sao chép — luôn xuất phát từ thực tiễn Việt Nam.",
  },
];

/** ====== (C) “DÒNG CHẢY LỊCH SỬ” (grid concepts ở cuối IntroduceSection) ====== */
export const concepts = [
  {
    icon: Home,
    title: "1890–1911: Khởi đầu",
    text: "Từ làng quê đến thế giới — nuôi chí lớn cứu nước.",
  },
  {
    icon: Ship,
    title: "1911–1930: Tìm đường",
    text: "Bôn ba năm châu, tiếp thu Mác–Lênin, hình thành đường lối cách mạng.",
  },
  {
    icon: BookOpen,
    title: "1930–1945: Lập Đảng – Chuẩn bị",
    text: "Thành lập Đảng, chuẩn bị lực lượng và đường lối cho tổng khởi nghĩa.",
  },
  {
    icon: Flag,
    title: "1945–1954: Độc lập – Kháng chiến",
    text: "Cách mạng Tháng Tám, Tuyên ngôn độc lập; kháng chiến chống Pháp.",
  },
  {
    icon: Mountain,
    title: "1954–1969: Xây dựng & Giải phóng",
    text: "Xây dựng miền Bắc, đấu tranh thống nhất đất nước; di sản tư tưởng lan tỏa.",
  },
  {
    icon: Sparkles,
    title: "Hiện tại: Di sản sống động",
    text: "Vận dụng sáng tạo trong đổi mới, hội nhập, xây dựng Việt Nam hùng cường.",
  },
];

/** ====== (D) TIMELINE VÒNG TRÒN (giống PhiloBookStory) ====== */
export const timelineEvents = [
  {
    year: "1890",
    title: "Khởi đầu hành trình",
    subtitle: "Sinh ra tại làng Sen",
    description:
      "Khởi nguồn từ truyền thống quê hương và lòng yêu nước của dân tộc — hạt mầm tư tưởng lớn dần trong bối cảnh mất nước.",
    quote: "Dân ta phải biết sử ta.",
    author: "Hồ Chí Minh",
    details:
      "Từ nền tảng gia đình, quê hương và thời cuộc, hình thành chí hướng vì độc lập dân tộc.",
  },
  {
    year: "1911",
    title: "Bến Nhà Rồng",
    subtitle: "Ra đi tìm đường cứu nước",
    description:
      "Ngày 5/6/1911, Người rời Tổ quốc để tìm con đường giải phóng dân tộc — bước ngoặt lịch sử mở ra hành trình 30 năm bôn ba.",
    quote: "Tôi muốn đi ra ngoài xem nước Pháp và các nước khác làm như thế nào.",
    author: "Hồ Chí Minh",
    details:
      "Từ trải nghiệm thực tiễn thế giới, Người tìm thấy lời giải cho bài toán độc lập của Việt Nam.",
  },
  {
    year: "1930",
    title: "Thành lập Đảng",
    subtitle: "Đảng Cộng sản Việt Nam ra đời",
    description:
      "Đảng ra đời thống nhất phong trào cách mạng, xác lập đường lối đúng đắn và lực lượng lãnh đạo.",
    quote: "Đảng có vững cách mệnh mới thành công.",
    author: "Hồ Chí Minh",
    details:
      "Đặt nền móng cho thắng lợi của cách mạng Việt Nam trong các giai đoạn tiếp theo.",
  },
  {
    year: "1945",
    title: "Cách mạng Tháng Tám",
    subtitle: "Tuyên ngôn Độc lập",
    description:
      "Dân tộc đứng lên giành chính quyền, khai sinh nước Việt Nam Dân chủ Cộng hòa — mốc son mở kỷ nguyên độc lập.",
    quote: "Không có gì quý hơn độc lập, tự do.",
    author: "Hồ Chí Minh",
    details:
      "Độc lập gắn với quyền sống, quyền tự do và hạnh phúc của nhân dân.",
  },
  {
    year: "1954",
    title: "Điện Biên Phủ",
    subtitle: "Chiến thắng vang dội",
    description:
      "Chiến thắng Điện Biên Phủ chấn động địa cầu — khẳng định sức mạnh của đường lối đúng và khối đại đoàn kết toàn dân.",
    quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    author: "Hồ Chí Minh",
    details:
      "Kết tinh ý chí độc lập và sức mạnh nhân dân trong cuộc kháng chiến trường kỳ.",
  },
  {
    year: "1969",
    title: "Di sản bất diệt",
    subtitle: "Ánh sáng vĩnh cửu",
    description:
      "Người đi xa, nhưng tư tưởng còn mãi — trở thành tài sản tinh thần vô giá của Đảng và dân tộc.",
    quote:
      "Tư tưởng Hồ Chí Minh là tài sản vô giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta.",
    author: "Đảng Cộng sản Việt Nam",
    details:
      "Di sản tư tưởng tiếp tục được vận dụng trong đổi mới, hội nhập và xây dựng đất nước hôm nay.",
  },
];
