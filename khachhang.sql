use quanlysach;

create table KhachHang
(
	MAKH int primary key not null,
    ten nvarchar(50) not null,
    tuoi int,
    congViec nvarchar(50),
    diaChi nvarchar(50) not null,
    ngayThamGia date
);

insert into KhachHang
value (330, N'Nguyễn Văn Lân',21, N'Lập trình viên', N'368 Lê Hồng Phong, Quận 10, TP.HCM', 25/04/2018);

insert into khachhang
value (642, N'Trần Mai Anh', 25, 'Giáo viên', N'22 Hùng Vương, Quận 10, TP.HCM', 25/3/2019);

insert into khachhang
value (245, N'Trần Sỹ Hùng', 20, 'Ca Sĩ', N'87 Đào Duy Từ, Quận 2, Quảng Bình', 12/1/2017);

insert into khachhang
value (684, N'Nguyễn Gia Bảo', 17, 'Học Sinh', N'78 Cổ Nhuế, Quận Ba Đình, Hà Nội', 29/03/29);

insert into khachhang
value (327, N'Mai Thành Lâm', 33, 'Bác sĩ', N'228 Cách Mạng Tháng Tám, Quận 10, TP.HCM', 28/11/2018);

insert into khachhang
value (975, N'Đặng Quang Huy', 31, 'Thợ Chụp Ảnh', N'32 Âu Cơ, Bảo Lộc, Lâm Đồng', 12/02/2018);

insert into khachhang
value (346, N'Lê Văn Đạt', 24, 'Cầu Thủ', N'67 Cao Bá Quát, Thành Phố Vinh, Nghệ An', 14/10/2018);

insert into khachhang
value (365, N'Trần Liêm Khiết', 27, 'Marketing', N'45 Nguyễn Văn Cừ, Quận 5, TP.HCM', 06/08/2018);

insert into khachhang
value (123, N'Lê Lan Anh', 27, 'Người Mẫu', N'450 Điện Biên Phủ, Quận 5, TP.HCM', 15/09/2018);

insert into khachhang
value (358, N'Trần Thúy Hằng', 23, 'Đầu Bếp', N'589 An Dương Vương, Quận 10, TP.HCM', 13/12/2018);