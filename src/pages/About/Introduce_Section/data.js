import {
  Flag,
  Ship,
  Landmark,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";

export const bannerImages = [
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ho_Chi_Minh_1946.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Nha_Rong_Wharf.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3a/Declaration_of_Independence_of_the_Democratic_Republic_of_Vietnam_1945.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/38/Vo_Nguyen_Giap_and_Ho_Chi_Minh_1954.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Ho_Chi_Minh_Mausoleum_Hanoi.jpg",
];

// ✅ Thêm export này để index.jsx import không lỗi nữa
export const introSlides = [
  {
    image: bannerImages[0],
    title: "Khởi đầu hành trình",
    text:
      "Từ làng Sen, khát vọng độc lập được hun đúc và trở thành điểm xuất phát cho hành trình cứu nước.",
  },
  {
    image: bannerImages[1],
    title: "Bến Nhà Rồng 1911",
    text:
      "Ngày 5/6/1911, Người ra đi tìm đường cứu nước — bước ngoặt mở ra hành trình bôn ba 5 châu 4 biển.",
  },
  {
    image: bannerImages[2],
    title: "Mùa thu độc lập 1945",
    text:
      "Cách mạng Tháng Tám và Tuyên ngôn Độc lập xác lập quyền tự do, tự chủ của dân tộc Việt Nam.",
  },
  {
    image: bannerImages[3],
    title: "Sức mạnh đoàn kết 1954",
    text:
      "Điện Biên Phủ là minh chứng cho đường lối đúng đắn và sức mạnh đại đoàn kết toàn dân tộc.",
  },
  {
    image: bannerImages[4],
    title: "Di sản sống động",
    text:
      "Tư tưởng Hồ Chí Minh tiếp tục soi đường cho đổi mới, hội nhập và xây dựng đất nước hôm nay.",
  },
];

export const concepts = [
  {
    icon: Flag,
    title: "Độc lập dân tộc & CNXH",
    text:
      "Độc lập phải gắn với hạnh phúc nhân dân và con đường đi lên CNXH, hướng tới dân giàu, nước mạnh, công bằng, dân chủ, văn minh.",
  },
  {
    icon: Users,
    title: "Đại đoàn kết toàn dân",
    text:
      "Đoàn kết là chiến lược lâu dài: lấy công–nông–trí thức làm nền tảng, quy tụ mọi tầng lớp vì mục tiêu chung.",
  },
  {
    icon: Landmark,
    title: "Đảng & Nhà nước vì dân",
    text:
      "Đảng trong sạch vững mạnh; Nhà nước của dân–do dân–vì dân; cán bộ là công bộc, thượng tôn pháp luật.",
  },
  {
    icon: Heart,
    title: "Văn hóa – Đạo đức – Con người",
    text:
      "Đạo đức là gốc: cần, kiệm, liêm, chính, chí công vô tư; xây dựng văn hóa tiên tiến, đậm đà bản sắc; ‘trồng người’.",
  },
  {
    icon: Ship,
    title: "Hành trình hình thành tư tưởng",
    text:
      "1890–1911 khởi đầu; 1911–1930 tìm đường; 1930–1945 lập Đảng; 1945–1954 kháng chiến; 1954–1969 xây dựng.",
  },
  {
    icon: Sparkles,
    title: "Di sản hôm nay",
    text:
      "Vận dụng trong đổi mới & hội nhập: phát triển gắn tiến bộ, công bằng xã hội và sức mạnh đoàn kết.",
  },
];
