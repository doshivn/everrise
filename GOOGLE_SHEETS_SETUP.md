# Hướng dẫn kết nối lưu thông tin đặt lịch vào Google Sheets

Để thông tin khách hàng đặt lịch tự động được lưu vào Google Sheets, bạn cần sử dụng một **Google Apps Script**. Hãy làm theo các bước cực kỳ đơn giản sau đây:

### Bước 1: Tạo file Google Sheets
1. Truy cập [Google Sheets](https://docs.google.com/spreadsheets) và tạo một bảng tính mới (Blank spreadsheet).
2. Tùy chọn: Ở Hàng 1, tạo các tiêu đề cột tương ứng (Ví dụ: Cột A `Thời gian`, Cột B `Họ tên`, Cột C `Số điện thoại`, Cột D `Địa chỉ`, Cột E `Dịch vụ`, Cột F `Ghi chú`).

### Bước 2: Tạo Apps Script
1. Trên thanh menu ngang của Google Sheets, chọn **Tiện ích mở rộng > Apps Script** (Extensions > Apps Script).
2. Xóa toàn bộ đoạn code có sẵn (`function myFunction() {...}`) và dán toàn bộ đoạn mã dưới đây vào:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Đọc dữ liệu gửi từ Web về
    var data = JSON.parse(e.postData.contents);
    
    // Tạo một hàng dữ liệu mới
    var rowData = [
      new Date(),       // Cột A: Thời gian
      data.name || "",  // Cột B: Tên
      data.phone || "", // Cột C: Số điện thoại
      data.address || "", // Cột D: Địa chỉ
      data.service || "", // Cột E: Dịch vụ
      data.notes || ""  // Cột F: Ghi chú
    ];
    
    // Thêm hàng dữ liệu vào cuối bảng tính
    sheet.appendRow(rowData);
    
    // Trả về kết quả thành công
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    // Trả về lỗi nếu có
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Nhấn tổ hợp phím **Ctrl + S** (hoặc Cmd + S) để lưu lại (có thể đặt tên dự án là Webhook).

### Bước 3: Triển khai ứng dụng (Deploy)
1. Ở góc trên cùng bên phải màn hình Apps Script, nhấn nút màu xanh **Sắp xếp triển khai > Tùy chọn triển khai mới** (Deploy > New deployment).
2. Nhấn vào biểu tượng **bánh răng** nhỏ bên cạnh chữ "Select type", chọn **Ứng dụng web** (Web app).
3. Đặt các thông tin sau:
   - *Description*: Webhook (hoặc tuỳ ý)
   - *Execute as*: **Me** (Tài khoản của bạn)
   - *Who has access*: Chọn **Bất kỳ ai** (Anyone)
4. Nhấn **Triển khai** (Deploy).

### Bước 4: Cấp quyền (Authorize)
1. Trong lần triển khai đầu tiên, Google sẽ yêu cầu "Cấp quyền truy cập" (Authorize Access). Bạn hãy nhấn nút Cấp quyền.
2. Chọn tài khoản Google của bạn.
3. Nếu hiện màn hình cảnh báo an toàn "Google chưa xác minh ứng dụng này", nhấn **Nâng cao** (Advanced) > Nhấn **Đi tới... (không an toàn)** (Go to... (unsafe)).
4. Nhấn **Cho phép** (Allow).

### Bước 5: Cấu hình biến môi trường
1. Sau khi cấp quyền xong, Google sẽ cung cấp cho bạn một đường xài dạng `https://script.google.com/macros/s/..../exec`. Hãy nhấn nút **Sao chép** (Copy) Web app URL này.
2. Quay lại giao diện AI Studio.
3. Mở tab **Settings** (Cài đặt) ở thanh bên trái > Truy cập mục **Environment Variables** (Biến môi trường) - Hoặc nếu ở local thì bạn mở file `.env`.
4. Thêm một biến mới với tên là `VITE_GOOGLE_SHEETS_WEBHOOK_URL` và Dán URL bạn vừa copy vào ô nội dung (hoặc tạo file `.env` theo `/.env.example`).
5. Nếu app đang chạy dev server, có thể bạn cần khởi động lại dev server cho chắc.

Xong! Giờ đây mỗi khi khách hàng điền form, thông tin sẽ được tự động đổ vào Google Sheets của bạn.
