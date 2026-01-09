// src/pages/MarxismPhilosophyPage/data.ts
// ✅ Import ảnh nội bộ (Vite/CRA đều hỗ trợ). Lưu ý: path tương đối từ file này.
import Home2 from "../../assets/picture/intro.png";
import sophie0 from "../../assets/picture/ph1.png";
import sophie1 from "../../assets/picture/ph2.png";
import sophie2 from "../../assets/picture/ph3.png";
import sophie3 from "../../assets/picture/ph4.png";
import sophie4 from "../../assets/picture/ph5.png";
import sophie5 from "../../assets/picture/ph6.png";
import sophie6 from "../../assets/picture/ph7.png";

const sections = [
  // 0) HOME
  {
    title: "Trang đầu",
    subtitle: "Tư tưởng Hồ Chí Minh • Ngọn đuốc soi đường cho cách mạng Việt Nam",
    description:
      "Từ bóng tối nô lệ, dân tộc Việt Nam tìm thấy “ngọn đuốc” dẫn đường: Tư tưởng Hồ Chí Minh — hệ thống quan điểm về giải phóng dân tộc và xây dựng xã hội mới.\n\nHành trình gồm 7 phần, giúp bạn nắm nhanh: khái niệm, quá trình hình thành, các tư tưởng cốt lõi và giá trị vận dụng hôm nay.",
    quote: "Không có gì quý hơn độc lập, tự do.",
    author: "Hồ Chí Minh",
    backgroundImage: Home2,
    hint: "Nhấn Space/PageDown để bắt đầu từ Phần 1.",
  },

  // 1) PHẦN 1
  {
    title: "Phần 1: Khởi đầu hành trình",
    subtitle: "Chương I • Khái niệm, đối tượng, phương pháp và ý nghĩa học tập",
    description:
      "Tư tưởng Hồ Chí Minh không chỉ gắn với một con người, mà là hệ thống quan điểm toàn diện về cách mạng Việt Nam — từ độc lập dân tộc đến con đường đi lên CNXH.\n\nNó kết tinh từ chủ nghĩa Mác–Lênin, truyền thống dân tộc và tinh hoa nhân loại. Học không phải để thuộc lòng, mà để soi sáng hành động: yêu nước, yêu dân, yêu tự do một cách khoa học và sáng tạo.",
    quote: "Học để làm việc, làm người, làm cán bộ.",
    author: "Hồ Chí Minh",
    backgroundImage: sophie0,
    hint: "Kéo xuống để vào Phần 2.",
  },

  // 2) PHẦN 2
  {
    title: "Phần 2: Hành trình hình thành",
    subtitle: "Chương II • Cơ sở, quá trình hình thành và phát triển",
    description:
      "Năm 1911, Nguyễn Tất Thành rời bến Nhà Rồng, mở hành trình bôn ba nhiều nước để tìm đường cứu nước, chứng kiến bất công và tham gia đấu tranh.\n\nTừ truyền thống yêu nước kết hợp ánh sáng Mác–Lênin, Người hình thành tư tưởng riêng: không sao chép máy móc, mà vận dụng linh hoạt vào thực tiễn Việt Nam. Tư tưởng ấy phát triển qua nhiều giai đoạn, gắn với từng bước ngoặt cách mạng.",
    quote:
      "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.",
    author: "Hồ Chí Minh",
    backgroundImage: sophie1,
    hint: "Tiếp tục xuống để vào Phần 3.",
  },

  // 3) PHẦN 3
  {
    title: "Phần 3: Ngọn cờ đầu tiên",
    subtitle: "Chương III • Độc lập dân tộc gắn liền với CNXH",
    description:
      "Độc lập dân tộc phải gắn với CNXH, nếu không dễ rơi vào “độc lập hình thức”, nhân dân vẫn khổ.\n\nCách mạng muốn thắng phải dựa vào sức mạnh toàn dân, kết hợp đấu tranh chính trị và vũ trang. Mục tiêu hướng đến là xã hội công bằng, dân chủ, văn minh — con người được phát triển toàn diện.",
    quote: "Không có gì quý hơn độc lập, tự do.",
    author: "Hồ Chí Minh",
    backgroundImage: sophie2,
    hint: "Kéo xuống để vào Phần 4.",
  },

  // 4) PHẦN 4
  {
    title: "Phần 4: Người lái đò vững chắc",
    subtitle: "Chương IV • Đảng và Nhà nước của dân, do dân, vì dân",
    description:
      "Muốn thắng lợi phải có Đảng cách mạng chân chính: trong sạch, vững mạnh, gắn bó với nhân dân, lấy nền tảng Mác–Lênin.\n\nNhà nước là của dân và vì dân: cán bộ không phải “quan”, mà là người phục vụ. Tư tưởng dân chủ, pháp quyền và quyền làm chủ của nhân dân là trục xuyên suốt.",
    quote: "Cán bộ là đầy tớ trung thành của nhân dân.",
    author: "Hồ Chí Minh",
    backgroundImage: sophie3,
    hint: "Kéo xuống để vào Phần 5.",
  },

  // 5) PHẦN 5
  {
    title: "Phần 5: Sức mạnh vô địch",
    subtitle: "Chương V • Đại đoàn kết toàn dân tộc & đoàn kết quốc tế",
    description:
      "Đại đoàn kết là then chốt: không phân biệt giai cấp, tôn giáo, dân tộc — miễn là cùng mục tiêu yêu nước và chống xâm lược.\n\nĐồng thời phải đoàn kết quốc tế: kết hợp sức mạnh dân tộc với sức mạnh thời đại, ủng hộ các dân tộc bị áp bức để tạo sức mạnh tổng hợp.",
    quote:
      "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    author: "Hồ Chí Minh",
    backgroundImage: sophie4,
    hint: "Kéo xuống để vào Phần 6.",
  },

  // 6) PHẦN 6
  {
    title: "Phần 6: Xây dựng con người mới",
    subtitle: "Chương VI • Văn hóa, đạo đức và con người",
    description:
      "Cách mạng không chỉ đổi xã hội mà còn phải bồi dưỡng con người. Văn hóa là nền tảng tinh thần, cần vừa tiên tiến vừa đậm đà bản sắc.\n\nĐạo đức cách mạng nhấn mạnh: cần, kiệm, liêm, chính, chí công vô tư. Con người mới phát triển cả tri thức, sức khỏe, đạo đức và thẩm mỹ để phụng sự Tổ quốc, nhân dân.",
    quote: "Cần, kiệm, liêm, chính, chí công vô tư.",
    author: "Hồ Chí Minh",
    backgroundImage: sophie5,
    hint: "Kéo xuống để vào Phần 7.",
  },

  // 7) PHẦN 7
  {
    title: "Phần 7: Di sản bất diệt",
    subtitle: "Kết nối • Ánh sáng soi đường hôm nay và mai sau",
    description:
      "Ngọn đuốc tư tưởng vẫn tiếp tục soi đường cho công cuộc đổi mới, hội nhập và xây dựng đất nước.\n\nHọc tập Tư tưởng Hồ Chí Minh là để tiếp nối mục tiêu: dân giàu, nước mạnh, dân chủ, công bằng, văn minh — vững vàng trước mọi thử thách.",
    quote: "Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.",
    author: "Hồ Chí Minh",
    backgroundImage: sophie6,
    hint: "Kết thúc: quay lại Trang đầu hoặc sang bài tiếp theo.",
  },
];

export default sections;
