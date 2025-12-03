# Hướng Dẫn Sử Dụng Bộ Công Cụ UI/UX Pro Max

Tài liệu này hướng dẫn chi tiết cách sử dụng các công cụ và dữ liệu trong `.shared/ui-ux-pro-max` để thiết kế và xây dựng giao diện người dùng chuyên nghiệp.

## 1. Giới thiệu

Bộ công cụ này là một **công cụ tìm kiếm thông minh (Search Engine)** dành cho UI/UX. Thay vì phải tự nghĩ ra màu sắc, font chữ, hay bố cục, bạn có thể tra cứu từ cơ sở dữ liệu chứa hàng nghìn quy tắc thiết kế (best practices) đã được chọn lọc.

**Cấu trúc thư mục:**
- `.shared/ui-ux-pro-max/scripts/`: Chứa các script Python để chạy tìm kiếm (`search.py`, `core.py`).
- `.shared/ui-ux-pro-max/data/`: Chứa dữ liệu CSV về màu sắc, font chữ, bố cục, v.v.
- `.agent/workflows/ui-ux-pro-max.md`: Quy trình làm việc mẫu.

## 2. Cài đặt môi trường

Để sử dụng, bạn cần cài đặt Python 3.

Kiểm tra xem đã cài chưa:
```bash
python3 --version
# hoặc
python --version
```

Nếu chưa có, hãy cài đặt từ trang chủ Python hoặc dùng package manager (Homebrew, apt, winget).

## 3. Cách sử dụng lệnh tìm kiếm (Script)

Công cụ chính là file `search.py`. Bạn chạy nó từ terminal (cửa sổ dòng lệnh).

**Cú pháp cơ bản:**
```bash
python3 .shared/ui-ux-pro-max/scripts/search.py "<từ khóa>" --domain <loại_dữ_liệu>
```

**Các tham số:**
- `<từ khóa>`: Từ bạn muốn tìm (ví dụ: "modern", "dashboard", "blue", "saas").
- `--domain` (hoặc `-d`): Loại dữ liệu muốn tìm (xem danh sách bên dưới).
- `--stack` (hoặc `-s`): Tìm hướng dẫn code cụ thể cho framework (React, Vue, Tailwind...).
- `--max-results` (hoặc `-n`): Số lượng kết quả trả về (mặc định là 3).

## 4. Các Domain dữ liệu (Loại thông tin)

Dưới đây là các `domain` bạn có thể sử dụng để tìm kiếm các khía cạnh khác nhau của thiết kế:

| Domain | Mục đích sử dụng | Ví dụ lệnh |
|--------|------------------|------------|
| `product` | **Bước 1:** Tìm định hướng chung cho loại sản phẩm (SaaS, E-commerce, Portfolio...). | `...search.py "beauty spa" -d product` |
| `style` | Tìm phong cách thiết kế (Glassmorphism, Minimal, Brutalism...). | `...search.py "glassmorphism" -d style` |
| `color` | Tìm bảng màu (Palette) phù hợp. | `...search.py "fintech trust" -d color` |
| `typography`| Tìm cặp font chữ (Heading + Body) đẹp. | `...search.py "modern clean" -d typography` |
| `landing` | Tìm cấu trúc trang Landing Page (bố cục các section). | `...search.py "mobile app" -d landing` |
| `chart` | Tìm loại biểu đồ phù hợp cho dữ liệu. | `...search.py "comparison" -d chart` |
| `ux` | Tìm các quy tắc UX (trải nghiệm người dùng) quan trọng. | `...search.py "form validation" -d ux` |
| `prompt` | Tìm từ khóa để viết prompt cho AI tạo ảnh/code. | `...search.py "cyberpunk" -d prompt` |

## 5. Tìm kiếm theo Tech Stack (Code Guidelines)

Nếu bạn muốn biết cách code chuẩn cho một framework cụ thể, hãy dùng tham số `--stack` thay vì `--domain`.

**Các stack hỗ trợ:** `html-tailwind` (mặc định), `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`.

**Ví dụ:**
Tìm cách làm layout responsive trong Tailwind:
```bash
python3 .shared/ui-ux-pro-max/scripts/search.py "responsive grid" --stack html-tailwind
```

Tìm cách tối ưu hiệu năng trong React:
```bash
python3 .shared/ui-ux-pro-max/scripts/search.py "performance" --stack react
```

## 6. Quy trình "Tận dụng tối đa" (Best Practice Workflow)

Để tạo ra một sản phẩm hoàn chỉnh, hãy đi theo trình tự sau:

**Ví dụ: Bạn cần làm một Dashboard quản lý tài chính (Fintech Dashboard).**

1.  **Định hình sản phẩm (`product`):**
    ```bash
    python3 .shared/ui-ux-pro-max/scripts/search.py "fintech dashboard" -d product
    ```
    *Kết quả:* Sẽ gợi ý phong cách "Clean, Trustworthy", màu xanh dương chủ đạo.

2.  **Chọn màu sắc (`color`):**
    ```bash
    python3 .shared/ui-ux-pro-max/scripts/search.py "fintech" -d color
    ```
    *Kết quả:* Lấy được mã màu Hex cho Primary, Background, Text.

3.  **Chọn Font chữ (`typography`):**
    ```bash
    python3 .shared/ui-ux-pro-max/scripts/search.py "professional modern" -d typography
    ```
    *Kết quả:* Gợi ý dùng Inter hoặc Roboto.

4.  **Tham khảo biểu đồ (`chart`):**
    ```bash
    python3 .shared/ui-ux-pro-max/scripts/search.py "trend finance" -d chart
    ```
    *Kết quả:* Gợi ý dùng Line chart cho xu hướng, Pie chart cho phân bổ.

5.  **Kiểm tra UX (`ux`):**
    ```bash
    python3 .shared/ui-ux-pro-max/scripts/search.py "dashboard navigation" -d ux
    ```
    *Kết quả:* Nhắc nhở về việc làm rõ trạng thái Active của menu.

6.  **Lấy code mẫu (`stack`):**
    ```bash
    python3 .shared/ui-ux-pro-max/scripts/search.py "sidebar layout" --stack html-tailwind
    ```

## 7. Mẹo nâng cao

*   **Kết hợp từ khóa:** Đừng chỉ tìm 1 từ. Hãy thử "dark mode dashboard" hoặc "luxury fashion landing".
*   **Tìm nhiều lần:** Nếu kết quả đầu tiên chưa ưng ý, hãy đổi từ khóa đồng nghĩa (ví dụ: thay "clean" bằng "minimal").
*   **Đọc kỹ cột "Don't":** Trong kết quả trả về thường có cột "Don't" (Những điều không nên làm). Đây là kiến thức cực kỳ giá trị để tránh lỗi thiết kế nghiệp dư.
*   **Tự động hóa:** Bạn có thể viết một script nhỏ để chạy một loạt lệnh trên và lưu kết quả vào một file text để tham khảo trong quá trình code.

---
*File hướng dẫn này được đặt tại `.agent/workflows/UI_UX_GUIDE.md` để bạn tiện tra cứu.*
