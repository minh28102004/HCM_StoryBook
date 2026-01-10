// src/StoryBook/philosophySpreads.jsx
import React from "react";
import AutoFitPage from "./AutoFitPage";
import Coverbook from "../../assets/picture/Coverbook.png";

/**
 * Mỗi phần tử là 1 "spread" (cặp trang): { left: JSX|null, right: JSX|null }
 * Dùng AutoFitPage để nội dung tự scale vừa chiều cao page, không cuộn.
 */
export const spreads = [
  // ============ Spread 0: Bìa trước ============

  {
    left: null,
    right: (
      <AutoFitPage
        className="cover-front"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(124,58,237,.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(245,158,11,.12) 0%, transparent 40%),
            url(${Coverbook}) center / cover no-repeat,
            linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #0f0f1a 100%)
          `,
        }}
      >
        <div className="cover-design">
          <div className="cover-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
            <div className="star star-4" />
            <div className="star star-5" />
          </div>

          <div className="cover-ornament top" />

          <div className="cover-title">
            <div className="title-backdrop" />
            <h1 className="main-title">
              <span className="title-line-1">TƯ TƯỞNG</span>
              <span className="title-line-2">HỒ CHÍ MINH</span>
            </h1>
            <div className="subtitle">
              Kim chỉ nam cho độc lập dân tộc &amp; con đường đi lên CNXH
            </div>
          </div>

          <div className="cover-quote">
            <div className="quote-marks">"</div>
            <div className="quote-text">
              Không có gì quý hơn độc lập, tự do
            </div>
            <div className="quote-author">— Hồ Chí Minh</div>
            <div className="quote-marks closing">"</div>
          </div>

          <div className="cover-ornament bottom" />
          <div className="cover-glow" />
        </div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 1: Dẫn nhập ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Dẫn nhập</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Vì sao học Tư tưởng Hồ Chí Minh?</h3>
          <p className="first-letter">
            Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về
            cách mạng Việt Nam — từ giải phóng dân tộc đến xây dựng xã hội mới.
            Học không phải để thuộc lòng, mà để hiểu “kim chỉ nam” cho hành động:
            biết yêu nước, yêu dân, và vận dụng sáng tạo vào thực tiễn.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>
              “Học tập là để làm việc, làm người, làm cán bộ.”
            </p>
            <div className="quote-author">— Hồ Chí Minh</div>
          </div>
        </div>

        <div className="page-number">2</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Mục tiêu học</h4>
          <div className="principle">
            <span className="principle-icon">🎯</span>
            <div>
              <strong>Nắm khái niệm:</strong> định nghĩa, nguồn gốc, giá trị.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div>
              <strong>Hiểu nội dung cốt lõi:</strong> độc lập dân tộc gắn liền với CNXH.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🔎</span>
            <div>
              <strong>Biết vận dụng:</strong> vào xây dựng Đảng, Nhà nước, đoàn kết,
              văn hóa–đạo đức–con người.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Từ khóa</div>
          <p>
            Mác–Lênin • Truyền thống dân tộc • Độc lập–tự do • CNXH • Đảng &amp; Nhà nước
            • Đại đoàn kết • Văn hóa • Đạo đức • Trồng người
          </p>
        </div>

        <div className="page-number">3</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 2: CHƯƠNG I ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương I</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Khái niệm Tư tưởng Hồ Chí Minh</h3>
          <p className="first-letter">
            Theo định nghĩa của Đảng Cộng sản Việt Nam tại Đại hội XI (2011):
            Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về
            những vấn đề cơ bản của cách mạng Việt Nam.
          </p>

          <div className="wisdom-section">
            <h4>Điểm cốt lõi</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Nguồn gốc:</strong> vận dụng sáng tạo chủ nghĩa Mác–Lênin,
                kế thừa truyền thống dân tộc, tiếp thu tinh hoa văn hóa nhân loại.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Nội dung cốt lõi:</strong> con đường <em>độc lập dân tộc</em> gắn liền với <em>chủ nghĩa xã hội</em>.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Giá trị:</strong> tài sản tinh thần quý giá, soi đường cho cách mạng Việt Nam.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">4</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Đối tượng nghiên cứu</h4>

          <div className="principle">
            <span className="principle-icon">📚</span>
            <div>
              <strong>Di sản Hồ Chí Minh:</strong> hệ thống quan điểm, lý luận thể hiện trong toàn bộ di sản <em>nói – viết – làm</em>.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧩</span>
            <div>
              <strong>Thực tiễn cách mạng:</strong> quá trình hiện thực hóa tư tưởng trong các giai đoạn lịch sử.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Phương pháp nghiên cứu</div>
          <p>
            • Thống nhất <strong>tính Đảng</strong> và <strong>tính khoa học</strong> (khách quan, đúng bản chất).<br />
            • Thống nhất <strong>lý luận</strong> và <strong>thực tiễn</strong> (lý luận gắn hành động).<br />
            • Quan điểm <strong>toàn diện &amp; hệ thống</strong> (xem trong chỉnh thể thống nhất, hạt nhân là độc lập–tự do–dân chủ–CNXH).
          </p>
        </div>

        <div className="page-number">5</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 3: CHƯƠNG II ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương II</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Cơ sở khách quan hình thành tư tưởng</h3>

          <div className="wisdom-section">
            <h4>Những nền tảng chính</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Thực tiễn Việt Nam</strong> cuối XIX – đầu XX: bế tắc về đường lối cứu nước → đòi hỏi con đường mới.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Truyền thống dân tộc:</strong> chủ nghĩa yêu nước là động lực xuyên suốt và điểm xuất phát.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Tinh hoa văn hóa nhân loại:</strong><br />
                • Phương Đông: Nho giáo (nhân trị, đức trị), Phật giáo (từ bi, vị tha), Tam dân (Tôn Trung Sơn).<br />
                • Phương Tây: quyền con người, tự do, bình đẳng, bác ái (cách mạng Pháp &amp; Mỹ).
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                <strong>Chủ nghĩa Mác–Lênin:</strong> cơ sở lý luận quan trọng nhất, quyết định thế giới quan và phương pháp luận cách mạng.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">6</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Quá trình hình thành &amp; phát triển</h4>

          <div className="principle">
            <span className="principle-icon">🕰️</span>
            <div>
              <strong>Trước 1911:</strong> hình thành tư tưởng yêu nước, chí hướng tìm đường mới.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div>
              <strong>1911–1920:</strong> tìm thấy con đường cách mạng vô sản; đọc Luận cương Lênin (7/1920), gia nhập ĐCS Pháp.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">📘</span>
            <div>
              <strong>1920–1930:</strong> hình thành nội dung cơ bản; “Đường cách mệnh”; Cương lĩnh chính trị đầu tiên (1930).
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🛡️</span>
            <div>
              <strong>1930–1941:</strong> vượt thử thách, kiên trì lập trường: “Quyền lợi dân tộc giải phóng cao hơn hết thảy”.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🏁</span>
            <div>
              <strong>1941–1969:</strong> phát triển đến đỉnh cao; lãnh đạo giành độc lập (1945), kháng chiến chống Pháp và chống Mỹ.
            </div>
          </div>
        </div>

        <div className="page-number">7</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 4: CHƯƠNG III ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương III</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Độc lập dân tộc</h3>

          <div className="wisdom-section">
            <h4>Ba điểm nhấn</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Quyền thiêng liêng:</strong> độc lập là quyền tự nhiên, bất khả xâm phạm của mọi dân tộc.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Độc lập thật sự:</strong> hoàn toàn, triệt để trên mọi lĩnh vực; gắn với thống nhất và toàn vẹn lãnh thổ.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Gắn hạnh phúc nhân dân:</strong> “Nước độc lập mà dân không hưởng hạnh phúc tự do thì độc lập cũng không có ý nghĩa”.
              </div>
            </div>
          </div>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Không có gì quý hơn độc lập, tự do.”</p>
            <div className="quote-author">— Hồ Chí Minh</div>
          </div>
        </div>

        <div className="page-number">8</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Cách mạng giải phóng dân tộc</h4>

          <div className="principle">
            <span className="principle-icon">🛤️</span>
            <div>
              <strong>Con đường:</strong> cách mạng vô sản để thắng lợi triệt để.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🏛️</span>
            <div>
              <strong>Lãnh đạo:</strong> phải do Đảng Cộng sản lãnh đạo.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🤝</span>
            <div>
              <strong>Lực lượng:</strong> đại đoàn kết toàn dân; liên minh công–nông là nền tảng.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">⚡</span>
            <div>
              <strong>Tính chủ động:</strong> cách mạng thuộc địa có thể giành thắng lợi trước.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🛡️</span>
            <div>
              <strong>Phương pháp:</strong> bạo lực cách mạng (kết hợp chính trị và vũ trang).
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Về Chủ nghĩa xã hội</div>
          <p>
            • CNXH nhằm giải phóng người lao động: có việc làm, ấm no, hạnh phúc.<br />
            • Đặc trưng chính trị: nhân dân làm chủ; Nhà nước của dân–do dân–vì dân dưới sự lãnh đạo của Đảng.<br />
            • Động lực quan trọng: đoàn kết toàn dân; quyền dân chủ và lợi ích của nhân dân.
          </p>
        </div>

        <div className="page-number">9</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 5: CHƯƠNG IV ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương IV</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Đảng Cộng sản Việt Nam</h3>

          <div className="wisdom-section">
            <h4>Nội dung trọng tâm</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Tính tất yếu:</strong> Đảng “như người cầm lái”, nhân tố hàng đầu quyết định thắng lợi.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Quy luật ra đời:</strong> kết hợp Mác–Lênin với phong trào công nhân và phong trào yêu nước.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Xây dựng Đảng:</strong> trong sạch, vững mạnh; là “đạo đức”, là “văn minh”.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                <strong>Nguyên tắc:</strong> tập trung dân chủ; tự phê bình &amp; phê bình; kỷ luật nghiêm minh tự giác; đoàn kết thống nhất.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">10</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Nhà nước của nhân dân, do nhân dân, vì nhân dân</h4>

          <div className="principle">
            <span className="principle-icon">🏗️</span>
            <div>
              <strong>Bản chất:</strong> giai cấp công nhân; tính nhân dân &amp; tính dân tộc sâu sắc.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🗳️</span>
            <div>
              <strong>Nhà nước dân chủ:</strong> mọi quyền lực thuộc về nhân dân; cán bộ là “công bộc”, không phải “quan cách mạng”.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">⚖️</span>
            <div>
              <strong>Nhà nước pháp quyền:</strong> quản lý xã hội bằng Hiến pháp và pháp luật; thượng tôn pháp luật.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧯</span>
            <div>
              <strong>Chống tiêu cực:</strong> kiên quyết chống đặc quyền đặc lợi, tham ô, lãng phí, quan liêu.
            </div>
          </div>
        </div>

        <div className="page-number">11</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 6: CHƯƠNG V ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương V</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Đại đoàn kết toàn dân tộc</h3>

          <div className="wisdom-section">
            <h4>Luận điểm chính</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Vai trò:</strong> vấn đề chiến lược, nhân tố quyết định thành công của cách mạng.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Chủ thể:</strong> toàn dân Việt Nam, không phân biệt giai cấp, tôn giáo, đảng phái.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Nền tảng:</strong> liên minh công nhân – nông dân – trí thức.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                <strong>Hình thức:</strong> Mặt trận dân tộc thống nhất (Việt Minh, Liên Việt, Mặt trận Tổ quốc…).
              </div>
            </div>
          </div>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.”</p>
            <div className="quote-author">— Hồ Chí Minh</div>
          </div>
        </div>

        <div className="page-number">12</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Đoàn kết quốc tế</h4>

          <div className="principle">
            <span className="principle-icon">🌍</span>
            <div>
              <strong>Mục tiêu:</strong> kết hợp sức mạnh dân tộc với sức mạnh thời đại.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🤝</span>
            <div>
              <strong>Đối tượng:</strong> phong trào cộng sản quốc tế; phong trào giải phóng dân tộc; các lực lượng tiến bộ yêu chuộng hòa bình.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div>
              <strong>Nguyên tắc:</strong> độc lập, tự chủ, tự lực tự cường; “có lý, có tình”.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Gợi nhớ</div>
          <p>
            Đoàn kết trong nước tạo <strong>sức mạnh nội lực</strong>. Đoàn kết quốc tế tạo <strong>sức mạnh ngoại lực</strong>.
            Hai nguồn lực bổ trợ để vượt qua thách thức lịch sử.
          </p>
        </div>

        <div className="page-number">13</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 7: CHƯƠNG VI ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VI</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Văn hóa &amp; Đạo đức</h3>

          <div className="wisdom-section">
            <h4>1) Về Văn hóa</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>Vai trò:</strong> văn hóa là mục tiêu, là động lực và soi đường cho quốc dân đi.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>Văn hóa mới:</strong> có tính <em>dân tộc</em>, <em>khoa học</em>, <em>đại chúng</em>.
              </div>
            </div>
          </div>

          <div className="wisdom-section">
            <h4>2) Về Đạo đức</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>Vị trí:</strong> đạo đức là “gốc” của người cách mạng.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>Phẩm chất cơ bản:</strong><br />
                Trung với nước, hiếu với dân • Cần–kiệm–liêm–chính–chí công vô tư • Thương yêu con người • Tinh thần quốc tế trong sáng
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">14</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>3) Về Con người</h4>

          <div className="principle">
            <span className="principle-icon">👤</span>
            <div>
              <strong>Quan niệm:</strong> con người vừa là <em>mục tiêu</em>, vừa là <em>động lực</em> của cách mạng.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🌱</span>
            <div>
              <strong>Chiến lược trồng người:</strong> “Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người”.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🏗️</span>
            <div>
              <strong>Hàm ý:</strong> muốn xây dựng CNXH trước hết cần có những con người xã hội chủ nghĩa.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Gợi ý suy ngẫm</div>
          <p>
            Nếu “trồng người” là chiến lược lâu dài, bạn nghĩ 3 năng lực cần ưu tiên là gì:
            tri thức – đạo đức – kỹ năng – sức khỏe – thẩm mỹ?
          </p>
        </div>

        <div className="page-number">15</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 8: Ôn tập nhanh ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Ôn tập</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Tóm tắt 6 chương</h3>
          <div className="wisdom-section">
            <h4>Gạch đầu dòng</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">I</span>
              <div>Khái niệm – đối tượng – phương pháp – ý nghĩa học tập.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">II</span>
              <div>Cơ sở hình thành &amp; quá trình phát triển tư tưởng.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">III</span>
              <div>Độc lập dân tộc gắn liền CNXH; cách mạng giải phóng dân tộc.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">IV</span>
              <div>Vai trò Đảng; Nhà nước của dân–do dân–vì dân.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">V</span>
              <div>Đại đoàn kết toàn dân; đoàn kết quốc tế.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">VI</span>
              <div>Văn hóa – đạo đức – con người; chiến lược “trồng người”.</div>
            </div>
          </div>
        </div>

        <div className="page-number">16</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Bài tập 3 phút</h4>

          <div className="principle">
            <span className="principle-icon">📝</span>
            <div>
              Chọn <strong>1 luận điểm</strong> bạn tâm đắc nhất và nêu <strong>1 ví dụ thực tiễn</strong> hôm nay.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧩</span>
            <div>
              Kết nối: <strong>độc lập–CNXH</strong> ↔ <strong>Đảng–Nhà nước</strong> ↔ <strong>đại đoàn kết</strong>.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🎯</span>
            <div>
              Tự đánh giá: bạn còn mơ hồ nhất ở chương nào? Vì sao?
            </div>
          </div>
        </div>

        <div className="page-number">17</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 9: Câu hỏi thảo luận ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Thảo luận</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>5 câu hỏi kiểu Socrates</h3>
          <div className="wisdom-section">
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                “Độc lập thật sự” gồm những yếu tố nào ngoài chính trị?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                Vì sao phải gắn độc lập dân tộc với CNXH để tránh “độc lập hình thức”?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                Đại đoàn kết cần “nền tảng” gì để bền vững trong biến động xã hội?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                Nhà nước pháp quyền cần cơ chế nào để “thượng tôn pháp luật” và chống quan liêu?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">5</span>
              <div>
                “Trồng người” hôm nay nên ưu tiên năng lực nào để hội nhập mà vẫn giữ bản sắc?
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">18</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="reflection-box">
          <div className="reflection-title">Câu hỏi tình huống</div>
          <p>
            Một địa phương phát triển kinh tế rất nhanh nhưng xuất hiện suy thoái đạo đức,
            lối sống thực dụng và chia rẽ cộng đồng. Bạn sẽ vận dụng những luận điểm nào
            (văn hóa – đạo đức – đại đoàn kết – nhà nước pháp quyền) để đề xuất giải pháp?
          </p>
        </div>

        <div className="page-number">19</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 10: Bảng tóm tắt ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Tổng kết</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Bảng nhớ nhanh</h3>

          <div className="balance-grid">
            <div className="balance-item">
              <span className="balance-symbol">📌</span>
              <strong>Hạt nhân</strong>
              Độc lập dân tộc gắn liền với CNXH.
            </div>

            <div className="balance-item">
              <span className="balance-symbol">🏛️</span>
              <strong>Trụ cột tổ chức</strong>
              Đảng vững mạnh; Nhà nước của dân–do dân–vì dân; pháp quyền.
            </div>

            <div className="balance-item">
              <span className="balance-symbol">🤝</span>
              <strong>Sức mạnh</strong>
              Đại đoàn kết toàn dân + đoàn kết quốc tế.
            </div>

            <div className="balance-item">
              <span className="balance-symbol">🌿</span>
              <strong>Nền tảng lâu dài</strong>
              Văn hóa – đạo đức – con người; “trồng người”.
            </div>
          </div>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.”</p>
            <div className="quote-author">— Hồ Chí Minh</div>
          </div>
        </div>

        <div className="page-number">20</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="meditation-box">
          <div className="meditation-title">Một phút suy ngẫm</div>
          <p>
            Nếu bạn phải chọn <strong>một giá trị</strong> để mang theo trong học tập và công việc
            (liêm chính, tận tụy, kỷ luật, nhân ái, sáng tạo…), bạn chọn gì?
            Và bạn sẽ biến nó thành hành động cụ thể ra sao?
          </p>
        </div>

        <div className="page-number">21</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 11: Kết & Bìa sau ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="final-content">
          <div className="conclusion-title">
            <h2>Kết</h2>
          </div>

          <div className="final-wisdom">
            <p>
              Tư tưởng Hồ Chí Minh là di sản bền vững: định hướng mục tiêu độc lập dân tộc,
              xây dựng CNXH, củng cố Đảng–Nhà nước, phát huy đại đoàn kết, và bồi dưỡng con người.
              Giá trị của tư tưởng nằm ở khả năng <strong>vận dụng sáng tạo</strong> vào thực tiễn hôm nay.
            </p>

            <div className="life-summary">
              <div className="summary-item">
                <span className="summary-icon">🧭</span>
                <p><strong>Giữ vững mục tiêu</strong></p>
              </div>

              <div className="summary-item">
                <span className="summary-icon">🤝</span>
                <p><strong>Phát huy đoàn kết</strong></p>
              </div>

              <div className="summary-item">
                <span className="summary-icon">🌱</span>
                <p><strong>Trồng người lâu dài</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">22</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="cover-back">
        <div className="back-cover-design">
          <div className="back-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
          </div>

          <div className="back-ornament top" />

          <div className="back-title">
            <div className="back-title-backdrop" />
            <h1>ĐOÀN KẾT</h1>
            <div className="infinity-symbol">∞</div>
          </div>

          <div className="back-quote">
            <div className="back-quote-text">
              “Đoàn kết, đoàn kết,
              <br />
              đại đoàn kết”
            </div>
            <div className="back-quote-divider" />
            <div className="back-quote-text">
              “Thành công, thành công,
              <br />
              đại thành công”
            </div>
          </div>

          <div className="back-message">
            Tiếp tục học tập &amp; vận dụng
            <br />
            trong đời sống hằng ngày
          </div>

          <div className="back-ornament bottom" />
          <div className="back-glow" />
        </div>
      </AutoFitPage>
    ),
  },
];

/** Chuyển spreads -> mảng pages cho HTMLFlipBook (showCover=true)
 *  + Thêm 2 trang Mục lục (TOC-L & TOC-R) ngay sau cover-front (index = 1,2)
 *  + Nhận onTocClick để lật trang khi bấm mục lục
 */
export const spreadsToPages = (spreads, { onTocClick } = {}) => {
  const pages = [];

  // 0) Bìa trước = right của spread 0
  pages.push(
    <div className="page" key="cover-front">
      {spreads[0].right}
    </div>
  );

  // Mapping gốc (không TOC): left = 2*s - 1, right = 2*s (s>=1).
  // Sau khi có 2 trang TOC -> cộng +2 cho mọi trang nội dung.
  const OFFSET = 2;
  const idxFor = (spreadIndex, side = "left") => {
    if (spreadIndex <= 0) return 0; // cover
    const base = side === "left" ? 2 * spreadIndex - 1 : 2 * spreadIndex;
    return base + OFFSET;
  };

  // ====== MỤC LỤC CHI TIẾT (đúng theo yêu cầu) ======
  const toc = [
    {
      label:
        "Chương I: Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh.",
      s: 2,
      side: "left",
    },
    {
      label:
        "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh.",
      s: 3,
      side: "left",
    },
    {
      label:
        "Chương III: Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội.",
      s: 4,
      side: "left",
    },
    {
      label:
        "Chương IV: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân.",
      s: 5,
      side: "left",
    },
    {
      label:
        "Chương V: Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế.",
      s: 6,
      side: "left",
    },
    {
      label:
        "Chương VI: Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người.",
      s: 7,
      side: "left",
    },
  ];

  // Chia TOC thành 2 trang cho đẹp
  const mid = Math.ceil(toc.length / 2);
  const tocLeft = toc.slice(0, mid);
  const tocRight = toc.slice(mid);

  const renderTocList = (items) => (
    <div className="wisdom-section">
      <h4>MỤC LỤC CHI TIẾT</h4>
      {items.map((item, i) => {
        const targetIdx = idxFor(item.s, item.side);
        const printedPage = 2 * item.s; // số trang hiển thị trong nội dung (left của spread s)
        return (
          <div className="principle" key={`${item.label}-${i}`}>
            <span className="principle-icon">📖</span>
            <a
              href="#"
              className="toc-link"
              data-goto={targetIdx}
              title={`Tới trang ${printedPage}`}
              onClick={onTocClick}
            >
              <strong>{item.label}</strong>
              <span className="toc-page"> — tr. {printedPage}</span>
            </a>
          </div>
        );
      })}
    </div>
  );

  // 1) TOC-L (index = 1)
  pages.push(
    <div className="page" key="toc-L">
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>MỤC LỤC CHI TIẾT</h2>
          <div className="chapter-ornament">❦</div>
        </div>
        <div className="page-body">{renderTocList(tocLeft)}</div>
        {/* Không in số trang cho TOC để giữ numbering nội dung cũ */}
      </AutoFitPage>
    </div>
  );

  // 2) TOC-R (index = 2)
  pages.push(
    <div className="page" key="toc-R">
      <AutoFitPage className="page-right">
        <div className="page-header">
          <h2>MỤC LỤC CHI TIẾT (tiếp)</h2>
          <div className="chapter-ornament">❦</div>
        </div>
        <div className="page-body">{renderTocList(tocRight)}</div>
        {/* Không in số trang cho TOC để giữ numbering nội dung cũ */}
      </AutoFitPage>
    </div>
  );

  // 3) Các spread sau: left rồi right (nếu có)
  for (let i = 1; i < spreads.length; i++) {
    const s = spreads[i];
    if (s.left) pages.push(<div className="page" key={`p-${i}-L`}>{s.left}</div>);
    if (s.right) pages.push(<div className="page" key={`p-${i}-R`}>{s.right}</div>);
  }

  return pages;
};
