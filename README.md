# Hệ Thống Quản Lý Kho Gạch

Một ứng dụng web prototype chuyên dụng để quản lý kho gạch với giao diện hiện đại và thân thiện với người dùng.

## Tính Năng Chính

### 🏪 Quản Lý Kho Gạch
- Hiển thị danh sách gạch trong kho với thông tin chi tiết
- Theo dõi tồn kho theo thời gian thực
- Tìm kiếm gạch theo tên, mã, kích thước, màu sắc
- Hiển thị trạng thái hàng hóa (còn hàng, sắp hết, hết hàng)
- Quản lý các loại gạch: men, granite, ốp tường, lát nền, mosaic, terrazzo, ceramic, porcelain

### 📦 Nhập Kho Gạch
- Thêm loại gạch mới vào kho với thông tin đầy đủ
- Cập nhật số lượng gạch có sẵn
- Quản lý thông tin nhà cung cấp gạch
- Theo dõi giá nhập và giá bán
- Ghi nhận kích thước và màu sắc của từng loại gạch

### 🛒 Quản Lý Đơn Hàng
- Tạo đơn hàng mới với nhiều sản phẩm
- Quản lý thông tin khách hàng
- Theo dõi trạng thái đơn hàng
- Tính toán tổng tiền tự động

### 🖨️ Xuất Đơn & In Phiếu
- Xuất đơn hàng và cập nhật kho tự động
- In phiếu đơn hàng chuyên nghiệp
- Trừ hàng tồn kho khi xuất đơn
- Lưu trữ lịch sử giao dịch

## Cách Sử Dụng

### 1. Mở Ứng Dụng
- Mở file `index.html` trong trình duyệt web
- Hệ thống sẽ tự động tải dữ liệu mẫu

### 2. Quản Lý Kho Hàng
- Nhấp vào tab "Kho Hàng" để xem danh sách sản phẩm
- Sử dụng ô tìm kiếm để lọc sản phẩm
- Kiểm tra trạng thái tồn kho của từng sản phẩm

### 3. Nhập Kho Sản Phẩm
- Nhấp vào tab "Nhập Kho"
- Điền đầy đủ thông tin sản phẩm:
  - Mã sản phẩm (duy nhất)
  - Tên sản phẩm
  - Danh mục
  - Đơn vị tính
  - Giá nhập và giá bán
  - Số lượng nhập
  - Nhà cung cấp
- Nhấp "Nhập Kho" để lưu

### 4. Tạo Đơn Hàng
- Nhấp vào tab "Đơn Hàng"
- Nhấp "Tạo Đơn Hàng Mới"
- Điền thông tin khách hàng:
  - Tên khách hàng
  - Số điện thoại
  - Địa chỉ
- Chọn sản phẩm và số lượng
- Nhấp "Thêm Sản Phẩm" để thêm nhiều mặt hàng
- Nhấp "Lưu Đơn Hàng"

### 5. Xuất Đơn Hàng
- Trong danh sách đơn hàng, nhấp "Xem" để xem chi tiết
- Nhấp "Xuất Đơn & In Phiếu" để:
  - Cập nhật số lượng tồn kho
  - Chuyển trạng thái đơn hàng thành "Đã hoàn thành"
  - Mở cửa sổ in phiếu đơn hàng

## Cấu Trúc Dự Án

```
Prototype/
├── index.html          # Giao diện chính
├── styles.css          # Stylesheet với thiết kế hiện đại
├── script.js           # Logic ứng dụng
└── README.md           # Hướng dẫn sử dụng
```

## Tính Năng Kỹ Thuật

### 💾 Lưu Trữ Dữ Liệu
- Sử dụng LocalStorage để lưu trữ dữ liệu
- Dữ liệu được bảo toàn khi tải lại trang
- Tự động khôi phục trạng thái ứng dụng

### 🎨 Giao Diện Người Dùng
- Thiết kế responsive, hoạt động tốt trên mọi thiết bị
- Giao diện hiện đại với gradient và hiệu ứng
- Thông báo toast cho phản hồi người dùng
- Modal popup cho chi tiết đơn hàng

### 🔍 Tìm Kiếm & Lọc
- Tìm kiếm sản phẩm theo tên, mã, danh mục
- Lọc theo trạng thái tồn kho
- Cập nhật kết quả theo thời gian thực

### 📊 Báo Cáo & Thống Kê
- Hiển thị trạng thái tồn kho trực quan
- Tính toán tổng tiền đơn hàng tự động
- Theo dõi lịch sử giao dịch

## Dữ Liệu Mẫu

Hệ thống đi kèm với dữ liệu mẫu bao gồm:
- 8 loại gạch thuộc các danh mục khác nhau (men, granite, ốp tường, lát nền, mosaic, terrazzo, ceramic, porcelain)
- Thông tin đầy đủ về kích thước, màu sắc, giá cả và tồn kho
- Các trạng thái khác nhau để test chức năng
- Dữ liệu phù hợp với ngành kinh doanh gạch xây dựng

## Yêu Cầu Hệ Thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- JavaScript được bật
- Không cần server hay cơ sở dữ liệu

## Mở Rộng Tương Lai

- Kết nối cơ sở dữ liệu thực
- API để đồng bộ dữ liệu
- Báo cáo thống kê chi tiết
- Quản lý nhiều kho hàng
- Hệ thống phân quyền người dùng
- Xuất báo cáo Excel/PDF

## Hỗ Trợ

Nếu gặp vấn đề khi sử dụng, vui lòng:
1. Kiểm tra console của trình duyệt
2. Đảm bảo JavaScript được bật
3. Thử tải lại trang
4. Xóa dữ liệu LocalStorage nếu cần thiết

---

**Phiên bản:** 1.0.0  
**Ngày cập nhật:** Tháng 10, 2024
