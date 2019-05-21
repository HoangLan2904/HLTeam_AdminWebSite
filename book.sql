create database QuanLySach
use QuanLySach

create table SanPham
(
	id int primary key,
    ten nvarchar(50) not null,
    moTa nvarchar(1000) not null,
    anhMinhHoa varchar(100) not null,
    gia int not null,
    giaKhuyenMai int,
    danhMuc varchar(50),
    theLoai nvarchar(50)
);

insert into SanPham
values(001,N'Our World',N'Find out incredible but true facts about our world in this Discovery Kids book. This 224-page easy-to-read guide is packed with photographs, cool illustrations and tons of facts about the fossils, earthquakes, planes and more about the world we live in!', 'images/books/1.jpg',
 400000, 300000,N'Bán Chạy',N'Viễn Tưởng/Ảo Tưởng');

insert into SanPham
values(002,N'Blue In The Water',N'The perfect couple commit the perfect crime in this brilliant new thriller, the newest Reese Witherspoon Book Club pick!
How far would you go be truly happy?
Erin is a documentary filmmaker on the brink of a professional breakthrough; Mark a handsome investment banker with a bright future. They seem to have it all, until Mark loses his job and cracks start to appear in their perfect life.
But they\'re determined to make it work. They book their dream honeymoon and trust that things will work out - after all, they have each other.',
'images/books/2.jpg', 300000, 250000,N'HOT', N'Huyền Bí');

insert into SanPham
values(003,N'Anime Life',N'When it starts to rain, a butterfly flies into a shed. One by one, more animals join the butterfly. How many animals go into the shed? And will they all fit? Read and find out!',
'images/books/3.jpg', 150000, 100000,N'HOT', N'Trẻ Em');

insert into SanPham
values(004,N'Memorise',N'This is the magical story of Santiago, an Andalusian shepherd boy who dreams of travelling the world in search of a worldly treasure as fabulous as any ever found. From his home in Spain he journeys to the markets of Tangiers, and from there into the Egyptian desert, where a fateful encounter with the alchemist awaits him.',
'images/books/4.jpg', 120000, 100000,N'HOT', N'Tiểu Sử');

insert into SanPham
values(005,N'War Of Dragon',N'When he was a baby, Rune washed up onshore in a boat, along with a sword and a pendant bearing the runes that gave him his nickname. Some people thought he was a sacrifice to the gods and wanted to send him right back to the sea. Luckily for Rune, King Beowulf disagreed. He lifted the boy from the boat and gave him to Amma, a wise woman living on a farm far removed from the king\'s hall, to raise as she saw fit. Sixteen years later, Rune spends his summers laboring on the farm.',
'images/books/5.jpg', 200000, 150000,N'Best Seller', N'Viễn Tưởng/Ảo Tưởng');

insert into SanPham
values(006,N'Moon Light Shadow',N'Just as Ever is learning everything she can about her new abilities as an immortal, initiated into the dark, seductive world by her beloved Damen, something terrible is happening to him.  As Ever’s powers are increasing, Damen’s are fading—stricken by a mysterious illness that threatens his memory, his identity, his life.',
'images/books/6.jpg', 120000, 100000,N'Best Seller', N'Lãng Mạn');

insert into SanPham
values(007,N'OLIOO',N'It\'s something people who care for the music, or for African American cultural history, will read and reread, whether or not they notice its ambitious expansions of what has been possible for the contemporary poem. ',
'images/books/7.jpg', 200000, 150000,N'Best Seller', N'Viễn Tưởng/Ảo Tưởng');

insert into SanPham
values(008,N'Art Of Illutrator',N'Along with maps, Tolkien self-illustrated many of his works, and a large portion of his artwork is included in this volume with comment by the authors.',
'images/books/8.jpg', 500000, 400000,N'HOT', N'Phát Triển Bản Thân');

insert into SanPham
values(009,N'New World For Children',N'Renowned writer and filmmaker Assia Djebar was born and raised in Algeria. She authored several novels, including the critically lauded So Vast the Prison and Algerian White. She has won several awards for her work, including the prestigious International Neustadt Prize for Literature.',
'images/books/9.jpg', 300000, 200000,N'Best Seller', N'Trẻ EM');

insert into SanPham
values(010,N'Alon Walker',N'For a biographer, there\'s a lot to untangle. Alan Walker does so brilliantly in Fryderyk Chopin: A Life and Times, a magisterial portrait . . . A polyphonic work that elegantly interweaves multiple strands.',
'images/books/11.jpg', 450000, 300000,N'HOT', N'Lãng Mạn');

insert into SanPham
values(011,N'The Hunter House',N'Collins among its contributors,The Haunted House is an ingenious tale of the supernatural with touches of pure Dickensian comedy.',
'images/books/12.jpg', 300000, 150000,N'Best Seller', N'Trẻ Em');



