create table quanlydonhang
(
	MDH double primary key not null,
    tenDH nvarchar(50) not null,
    maKH int not null,
    constraint FK_QLDH_KH foreign key (maKH) references khachhang(MAKH),
    tenKH nvarchar(50) not null,
    trangThai nvarchar(50) not null
);

insert into quanlydonhang
value(4587893524, N'Our World', 330, N'Nguyễn Văn Lân', N'Đang giao');

insert into quanlydonhang
value(5648457894, N'Blue In The Water', 245, N'Trần Sỹ Hùng', N'Đang giao');

insert into quanlydonhang
value(4578512365, N'OLIOO', 684, N'Nguyễn Gia Bảo', N'Đã giao');

insert into quanlydonhang
value(2457845361, N'Alon Walker', 327, N'Mai Thành Lâm', N'Đang đóng gói');

insert into quanlydonhang
value(4578569327, N'New World For Children',975, N'Đặng Quang Huy', N'Đang đóng gói');

insert into quanlydonhang
value(8965471235, N'War Of Dragon', 365, N'Trần Liêm Khiết', N'Đang chờ lấy hàng');

insert into quanlydonhang
value(4758963214, N'Moon Light Shadow', 346, N'Lê Văn Đạt', N'Đã giao hàng');

insert into quanlydonhang
value(2345698712, N'Anime Life', 642, N'Trần Mai Anh', N'Đã giao hàng');

insert into quanlydonhang
value(4569832145, N'Memorise',358 , N'Trần Thúy Hằng', N'Đã giao hàng');


