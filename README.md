# HIS - GEO HUB — Website phục vụ dạy học

Website tĩnh bằng HTML, CSS và JavaScript thuần, sử dụng bảng màu trắng – xanh dương đậm – đỏ.

## Chạy trên máy tính

1. Giải nén thư mục.
2. Mở thư mục `website_day_hoc`.
3. Nhấp đúp `index.html` để mở bằng Chrome, Edge hoặc Firefox.
4. Không cần cài đặt phần mềm hay chạy máy chủ.

## Cấu trúc

- `index.html`: cấu trúc và nội dung các trang.
- `style.css`: màu sắc, bố cục và giao diện responsive.
- `app.js`: dữ liệu bài giảng, trò chơi, câu hỏi ôn tập và công cụ random.

## Cách thêm bài giảng

Mở `app.js`, tìm mảng `lessons`, thêm một đối tượng theo mẫu:

```js
{
  title: "Tên bài giảng",
  subject: "Lịch sử",
  grade: "Lớp 8",
  description: "Mô tả ngắn về bài giảng.",
  url: "https://duong-dan-tai-lieu-cua-ban",
  icon: "▤"
}
```

Dán liên kết tài liệu vào `url`. Có thể dùng liên kết Google Drive đã bật quyền truy cập, video, PDF hoặc trang học liệu. Nếu `url` để trống, thẻ sẽ hiện “Sắp cập nhật”.

## Cách thêm trò chơi học tập

### Cách nhanh: liên kết đến trò chơi có sẵn
Thêm đối tượng vào mảng `games` trong `app.js`:

```js
{
  title: "Tên trò chơi mới",
  category: "ÔN TẬP",
  description: "Mô tả cách chơi.",
  url: "https://duong-dan-tro-choi",
  icon: "⚡",
  status: "Sẵn sàng"
}
```

### Cách tổ chức nhiều trò chơi tự viết
1. Tạo thư mục `games/`.
2. Mỗi trò chơi có thể là một tệp HTML độc lập, ví dụ `games/o-chu.html`.
3. Đưa đường dẫn tương đối vào `url`, ví dụ `games/o-chu.html`.
4. Giữ tên và mô tả trò chơi trong mảng `games` để thẻ tự xuất hiện trên trang.

## Cách thêm câu hỏi ôn tập

Tìm mảng `quizQuestions` trong `app.js` và thêm:

```js
{
  q: "Nội dung câu hỏi?",
  options: ["Phương án A", "Phương án B", "Phương án C", "Phương án D"],
  correct: 1,
  explain: "Giải thích đáp án."
}
```

`correct` bắt đầu từ 0: 0 là phương án A, 1 là B, 2 là C, 3 là D.

## Cách dùng Random gọi tên

1. Mở trang Random gọi tên.
2. Nhập danh sách, mỗi học sinh trên một dòng.
3. Chọn **Cập nhật danh sách**.
4. Chọn **Quay chọn ngẫu nhiên**.
5. Dùng **Đặt lại lượt chọn** khi muốn bắt đầu vòng mới.

Danh sách được lưu bằng `localStorage` trong trình duyệt trên thiết bị đang sử dụng. Nó không tự đồng bộ giữa các máy tính hoặc trình duyệt khác nhau.

## Đưa website lên mạng miễn phí bằng GitHub Pages

1. Tạo tài khoản tại https://github.com nếu chưa có.
2. Tạo repository mới, ví dụ `his-geo-hub`.
3. Tải lên các tệp `index.html`, `style.css`, `app.js`, `README.md` (và thư mục `games/` nếu có).
4. Vào **Settings → Pages**.
5. Trong **Build and deployment**, chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, rồi nhấn **Save**.
6. Đợi GitHub Pages xuất bản website và mở địa chỉ được cung cấp trong trang Pages.

Mỗi lần cập nhật mã nguồn, bạn tải phiên bản mới lên repository; GitHub Pages sẽ tự triển khai lại.

## Lưu ý

Đây là website tĩnh, phù hợp cho bản đầu tiên. Dữ liệu bài giảng và câu hỏi được quản lý trong mã nguồn. Nếu cần giáo viên đăng nhập, tự thêm nội dung trực tiếp trên website hoặc đồng bộ danh sách lớp giữa nhiều thiết bị, cần tích hợp thêm cơ sở dữ liệu và hệ thống xác thực.
