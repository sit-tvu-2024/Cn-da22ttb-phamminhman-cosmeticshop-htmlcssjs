//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('product') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Kem Nền Catrice HD Liquid Coverage Foundation',
            img: './assets/img/products/td-1.jpg',
            category: 'trang điểm',
            price: 175000,
            desc: 'Như 1 lớp màng cực mỏng mịn mà vẫn che phủ hiệu quả các khuyết điểm nổi bật lên 1 làn da căng tràn và vô cùng tự nhiên.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Kem Nền Maybelline Fit Me Pore Pump SPF22',
            img: './assets/img/products/td-2.jpg',
            category: 'Trang điểm',
            price: 200000,
            desc: 'Kem nền Maybelline mang lại lớp nền mịn màng, che khuyết điểm hoàn hảo với công nghệ hạt phấn siêu mịn, phù hợp với tất cả các loại da.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Cushion Glamrr-Q Vegan Super Cover Cushion',
            img: './assets/img/products/td-3.jpg',
            category: 'Trang điểm',
            price: 350000,
            desc: 'Thừa hưởng 100% công thức từ chị gái Gilaa, Glamrr Q bắt đầu sứ mệnh Thương Hiệu Trang Điểm Hàng Đầu Dành Cho Da Nhạy Cảm từ tháng 04/2023 Phấn nước cải tiến với công nghệ che phủ cao, cố định nền hoàn hảo kết hợp chăm sóc làn da với 36% Rau Má GCE+ và chống nắng SPF50/PA+++.'
        },
        {
            id: 4,
            status: 1, title: 'Kem nền Catrice Cosmetics True Skin Hydrating Long Wear 30ml',
            img: './assets/img/products/td-4.jpg',
            category: 'Trang điểm',
            price: 195000,
            desc: 'Độ che phủ cao, tạo hiệu lớp nền mỏng nhẹ, tự nhiên ẩm mạnh mẽ suốt 24h, che phủ tốt các khuyết điểm, làm đều màu da, mang đến lớp nền bền màu, mịn màng, căng bóng.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Kem Lót Hiệu Chỉnh Màu Da Catrice 30ml',
            img: './assets/img/products/td-5.jpg',
            category: 'Trang điểm',
            price: 150000,
            desc: ''
        },

        {
            id: 6,
            status: 1, 
            title: 'Bảng Tạo Khối Revolution Chocolate Contour Bar 4.5gr',
            img: './assets/img/products/td-6.jpg',
            category: 'Trang điểm',
            price: 260000,
            desc: ''
        },

        {
            id: 7,
            status: 1, 
            title: 'Phấn Nước Gilaa Long Wear DD Cushion SPF50+/PA+++ 13gr',
            category: 'Trang điểm',
            img: './assets/img/products/td-7.jpg',
            price: 320000,
            desc: 'TGilaa Long Wear DD Cushion được đánh giá là Thế hệ DD Cushion hoàn hảo khi kết hợp đồng thời giữa trang điểm và dưỡng da. Lớp nền mỏng nhẹ nhưng che đến 85% khuyết điểm trên da chỉ với 1 lần dặm phấn. Thành phần chống nắng cao và chứa nhiề.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Phấn Nước Missha Magic Cushion Moist Up',
            img: './assets/img/products/td-8.jpg',
            category: 'Trang điểm',
            price: 140000,
            desc: 'Phấn Nước Missha M Magic Cushion Cover SPF 50+ PA+++  là sự kết hoàn hảo giữa phấn nước và kem dưỡng, có khả năng cấp ẩm và dưỡng ẩm cho da, giúp da bóng khỏe tràn đầy sức sống. Mang đến cho bạn lớp make up hoàn toàn tự nhiên.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Bông Tẩy Trang Ceiba Tree Organic 100% Cotton Pads',
            category: "Phụ kiện",
            img: './assets/img/products/pk-1.jpg',
            price: 35000,
            desc: ' Hoàn toàn không để lại xơ bông, sử dụng nguồn nguyên liệu 100% cotton tự nhiên, sạch và tinh khiết, công dụng đa zi năng: 1 mặt sử dụng để tẩy trang: Dập nổi tăng khả năng làm sạch lên 50%, 1 mặt sử dụng để dưỡng da: sử dụng công nghệ Ultra Boost - thiết kế sợi bông xốp, xếp lớp xen kẽ nhau giúp thấm đều và tiết kiệm 50 % dung dịch dưỡng da. ',
        },
        {
            id: 10,
            status: 1, 
            title: 'Dao Cạo Mày Kai Groom Eyebrow Razor',
            category: "Phụ kiện",
            img: './assets/img/products/pk-2.jpg',
            price: 17000,
            desc: 'Thiết kế lưỡi dao thông minh, kiểu dáng nhỏ gọn giúp dao dễ dàng theo sát chân mày, cạo sạch sâu và nhanh hơn nhưng không làm xây xát cho da',
        },
        {
            id: 11,
            status: 1, 
            title: 'Phấn Phủ Catrice All Matt Plus Shine Contro',
            category: 'Trang điểm',
            img: './assets/img/products/td-10.jpg',
            price: 130000,
            desc: 'Với kết cấu hạt phấn mỏng nhẹ giúp dễ tán trên da mà còn giúp bám lâu trên da cho bạn làn da tự nhiên hơn.Giúp kiềm dầu trên da, kiểm soát lượng bã nhờn giúp da luôn khô thoáng.Đồng thời còn giúp che phủ các khuyết điểm và che phủ lỗ chân lông cho bạn làn da mịn màng tự nhiên.Các thành phần lành tính, an toàn cho da không gây kích ứng.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Bảng Má Hồng & Bắt Sáng Sivanna',
            img: './assets/img/products/td-9.jpg',
            category: 'Trang điểm',
            price: 140000,
            desc: 'Thiết kế thon dài những cầm gọn trong tay, Màu sắc phối hài hòa, nhã nhặn, Bao gồm màu má và phấn bắt sáng tiện lợi.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Tinh chất Mediphar+ Hydrating B5 Serum 30ml',
            img: './assets/img/products/csd-1.jpg',
            category: 'Chăm sóc da',
            price: 350000,
            desc: 'Mediphar+ Hydrating B5 Serum dưỡng ẩm phục hồi. cung cấp nước, độ ẩm cho da, làm sáng da. Cung cấp dưỡng chất cho da, giúp da khỏe, luôn căng mịn.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Sữa Rửa Mặt Cetaphil Hydrating Foaming Cream Cleanser 473ml',
            img: './assets/img/products/csd-2.jpg',
            category: 'Chăm sóc da',
            price: 350000,
            desc: ''
        },
        {
            id: 15,
            status: 1, 
            title: 'Sữa rửa mặt Innisfree Bija + BHA Trouble Cleansing Foam 150gr',
            img: './assets/img/products/csd-3.png',
            category: 'Chăm sóc da',
            price: 180000,
            desc: 'Sữa rửa mặt INNISFREE Bija Trouble Cleansing Foam chiết xuất từ dầu hạt Bija, Acid Salicylic BHA và hạt hoa hồng, giúp làm sạch bụi bẩn từ sâu bên trong lỗ chân lông, đặc biệt phù hợp cho làn da dầu mụn.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Sữa Rửa Mặt Byvibes Wonder Bath PHA 5.5 Cleansing Foam',
            img: './assets/img/products/csd-4.jpg',
            category: 'Chăm sóc da',
            price: 170000,
            desc: 'Làm sạch nhẹ nhàng loại bỏ bụi bẩn, tạp chất và lấy đi lớp tế bào chết trên da. Giữ được độ pH cần thiết không làm da khô căng khó chịu Củng cố hàng rào bảo vệ da giúp da tránh khỏi những tác nhân gây hại từ môi trường'
        },
        {
            id: 17,
            status: 1, 
            title: 'Sữa Rửa Mặt Simple Purifying Gel Wash 150ml',
            img: './assets/img/products/csd-5.jpg',
            category: 'Chăm sóc da',
            price: 850000,
            desc: 'Gel rửa mặt Simple Purifying Gel Wash Deeply Cleanses For Controlled Shine And Clear Skin với công thức độc đáo, thành phần hỗn hợp từ cỏ xạ hương, kẽm và nước cây phỉ giúp làm sạch sâu bụi bẩn, dầu thừa và cặn trang điểm mà vẫn êm dịu với làn da. Chỉ sau một ngày sử dụng, bạn đã có thể cảm nhận được làn da tươi mới và độ bóng nhờn được kiểm soát ngay tức thì.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Sữa Rửa Mặt SVR Sebiaclear Purifying - Dạng Túi 400ml',
            img: './assets/img/products/csd-6.jpg',
            category: 'Chăm sóc da',
            price: 295000,
            desc: 'Sữa rửa mặt dạng gel dịu nhẹ dễ dàng tạo bọt, Làm sạch sâu và hỗ trợ lấy đi lớp tế bào chết tồn đọng trên da, Mang đến làn da sạch khỏe, mịn màng, săn chắc và hạn chế sự sinh sôi của mụn'
        },
        {
            id: 19,
            status: 1, 
            title: 'Sữa Rửa Mặt Cetaphil Gentle Skin Cleanser 591ml',
            img: './assets/img/products/csd-7.jpg',
            category: 'Chăm sóc da',
            price: 360000,
            desc: 'Sản phầm thích hợp cho mọi loại da đặc biệt da nhạy cảm, dễ kích ứng, Chất sữa rửa mặt dạng sữa sệt không tạo bọt, không chứa xà phòng, không hương liệu, Thành phần cải tiến thêm nhiều hoạt chất dưỡng da, Sử dụng được cho cả mặt và toàn thân'
        },
        {
            id: 20,
            status: 1, 
            title: 'Sữa Rửa Mặt Cerave Cho Da Thường Đến Da Dầu Foaming',
            img: './assets/img/products/csd-8.jpg',
            category: 'Chăm sóc da',
            price: 340000,
            desc: '- Sữa rửa mặt CeraVe dòng màu xanh dành cho da thường đến da dầu, Dung tích 355ml thoải mái sử dụng, Sản phẩm thiết kế dạng ống bơm tiện lợi, sạch sẽ, Khả năng tạo bọt nhẹ, làm sạch không khô căng da, Sản phẩm lành tính, không màu và không chất tạo mùi'
        },
        {
            id: 21,
            status: 1, 
            title: 'Sữa Rửa Mặt Skin1004 Madagascar Centella Tone Brightening Cleansing Gel 125ml',
            category: 'Chăm sóc da',
            img: './assets/img/products/csd-9.jpg',
            price: 240000,
            desc: 'Làm sạch lớp trang điểm và bụi bẩn, Tẩy tế bào chết nhẹ nhàng, Củng cố hàng rào bảo vệ da '
        },
        {
            id: 22,
            status: 1, 
            title: 'Sữa Rửa Mặt Làm Dịu & Phục Hồi Cho Da Nhạy Cảm SVR Cleasing Foaming Gel 55ml',
            category: 'Chăm sóc da',
            img: './assets/img/products/csd-10.jpg',
            price: 130000,
            desc: ' Làm sạch mọi bụi bẩn và cung cấp độ ẩm ,Tăng cường sức đề kháng cho da, Mùi hương hoa và biển nhẹ nhàng và thư thái'
        },

        {
            id: 23,
            status: 1, 
            title: 'Sữa Rửa Mặt SVR Cho Da Thường, Khô SVR Protecting Anti-Dryness Cleanser 400ml',
            category: 'Chăm sóc da',
            img: './assets/img/products/csd-11.jpg',
            price: 280000,
            desc: 'Không gây kích ứng với cả da nhạy cảm nhất, Làm sạch da nhẹ nhàng, không gây khô da, Giữ lại độ ẩm nhất định sau khi làm sạch da.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Dầu Gội Olexrs+ Hair Salon Argan Oil 960ml',
            img: './assets/img/products/cst-1.jpg',
            category: 'Chăm sóc tóc',
            price: 195000,
            desc: 'Dầu gội làm sạch tóc và chăm sóc da đầu xuất xứ từ Anh và có dung tích 960ml, Loại bỏ các bụi bẩn, dầu nhờn trên da đầu. Dưỡng tóc óng ả, suôn mềm vào nếp, Mùi hương ấn tượng cùng khả năng lưu hương lâu để mái tóc không chỉ mềm mượt mà còn tỏa hương.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Dầu Gội Phủ Bạc Mộc Nhu 3In1 280gr - Màu đen',
            img: './assets/img/products/cst-2.png',
            category: 'Chăm sóc tóc',
            price: 320000,
            desc: 'Với phương thức bào chế đặc biệt, không ammonia, không paraben dầu gội phủ bạc Cà Phê Đen giúp nhuộm tóc bạc với tông màu tự nhiên nhanh chóng chỉ sau 1 lần gội mà không gây dị ứng, kích ứng da đầu. Ngoài ra, dầu gội phủ bạc Cà Phê Đen còn cung cấp các dưỡng chất nuôi dưỡng mái tóc chắc khoẻ, bóng mượt từ gốc đến ngọn.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Dầu Gội Head&Shoulders Clinical Strength',
            category: 'Chăm sóc tóc',
            img: './assets/img/products/cst-3.jpg',
            price: 320000,
            desc: 'Dầu gội ngăn gàu sâu bên trong da đầu trong khi vẫn giữ cho mái tóc sạch sẽ và kiểm soát độ ẩm, cân bằng độ PH giúp cho mái tóc trở nên mềm mượt nhờ da đầu khỏe mạnh.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Bộ Gội - Xả TIGI Recovery Shampoo & Conditiiner ',
            category: 'Chăm sóc tóc',
            img: './assets/img/products/cst-4.jpg',
            price: 450000,
            desc: 'Dầu gội dành cho tóc khô xơ hư tổn mức độ 2. (khô, xơ, dễ rối)Dầu gội có chứa phức hợp hạt nano siêu nhỏ (hay còn gọi là hạt silicon siêu nhỏ) bám vào vùng tóc bị hư tổn, bảo vệ sợi tóc khỏi những tác hại môi trường.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Bộ Gội - Xả TIGI Resurrection 750ml',
            category: 'Chăm sóc tóc',
            img: './assets/img/products/cst-5.jpg',
            price: 520000,
            desc: ' Tái sinh mái tóc mới, phục hồi tóc hư tổn trả lại cho bạn mái tóc mềm mại, Cải thiện tình trạng xơ rối giúp tóc vào nếp, gọn gàng hơn, Lớp màng nano siêu nhỏ làm lớp chắn bảo vệ và tăng cường sức đề kháng cho tóc.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Dầu Gội Dưỡng Tóc Tsubaki Premium',
            category: 'Chăm sóc tóc',
            img: './assets/img/products/cst-6.jpg',
            price: 160000,
            desc: ' Thẩu thấu vào sâu biểu bì nuôi dưỡng tóc bóng mượt, Thành phần Dual Amino Acid giúp khóa chặt các dưỡng chất, Mùi hương sang trọng, trẻ trung.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Dầu Gội Phục Hồi Tóc Fanola Nutri Care Shampoo',
            category: 'Chăm sóc tóc',
            img: './assets/img/products/cst-7.jpg',
            price: 220000,
            desc: 'Phục hồi tóc khỏi những hư tổn do khói bụi, hay do tác động nhiệt, Giúp tóc mềm mượt, bồng bềnh hơn, Tạo bọt nhiều và hương thơm sữa bò lưu giữ lâu trên tóc.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Gel hấp tóc Fino Premium Touch Shiseido',
            category: 'Chăm sóc tóc',
            img: './assets/img/products/cst-8.jpg',
            price: 150000,
            desc: 'Gel hấp tóc  Fino Premium Touch Shiseido có chiết xuất từ mầm lúa mì, Có tác dụng chống oxy hóa, cân bằng bề mặt lớp biểu bì tóc, vì vậy tóc sẽ trở nên ẩm ướt, trơn tru hơn.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Ủ tóc Fanola Nutri Care Restructuring)',
            category: 'Chăm sóc tóc',
            img: './assets/img/products/cst-9.jpg',
            price: 340000,
            desc: 'Ủ tóc Nutri Care - Maschera Ristrutturante với công thức đặc biệt giàu protein từ sữa có chức năng nuôi dưỡng phục hồi và gỡ rối tóc, Giúp tóc trở nên mềm mượt dễ chải, không xơ cứng, rụng tóc khi chải, Dành cho tóc thường và tóc khô, có thể ủ hoặc xả đều được.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Nước Hoa Nam ARMAF Club de Nuit Intense Man EDT 105ml',
            category: 'Nước hoa',
            img: './assets/img/products/nh-1.jpg',
            price: 710000,
            desc: ''
        },

        {
            id: 34,
            status: 1, 
            title: 'Nước Hoa ARMAF Club de Nuit Sillag 105ml',
            category: 'Nước hoa',
            img: './assets/img/products/nh-2.jpg',
            price: 790000,
            desc: 'Hương đầu: Cam Bergamot, Quả chanh, Gừng, Quả lý chua, lá Violet. Hương giữa: Hoa nhài, Hoa diên vĩ, Hoa hồng. Hương cuối: Gỗ đàn hương, Gỗ tuyết tùng, Xạ hương, Ambroxan ,vanila'
        },

        {
            id: 35,
            status: 1, 
            title: 'Xịt khử mùi Nam Adidas Deo Body Spray 150ml ',
            category: 'Nước hoa',
            img: './assets/img/products/nh-3.jpg',
            price: 85000,
            desc: 'Dynamic Pulse : Với những điểm hương chính từ Chi cam chanh, Bạc Hà, Gỗ tuyết tùng mang đến sự bản lĩnh, mạnh mẽ, năng động và cá tính riêng biệt của một chàng trai bất khả chiến bại có thể chinh phục mọi thử thách dù là khó khăn nhất.'
        },

        {
            id: 36,
            status: 1, 
            title: 'Xịt thơm toàn thân Bath&Body Works Fine Fragrance Mist 75ml ',
            category: 'Nước hoa',
            img: './assets/img/products/nh-4.jpg',
            price: 140000,
            desc: 'Xịt Thơm Bath & Body Works Into The Night Fine Fragrance Mist 75ml là sự hòa quyện của sự tính ngọt ngào nhưng không kém phần quyến rũ bới sự pha trộn mùi hương độc đáo từ quả mọng đen, hoa nhài ban đêm cùng hổ phách - Một chút note của tầng hương hổ phách mang đến cảm giác sâu lắng, sexy, chút say sưa lãng mạn.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Xịt thơm toàn thân Bath&Body Works Fine Fragrance Mist 75ml',
            category: 'Nước hoa',
            img: './assets/img/products/nh-5.jpg',
            price: 280000,
            desc: 'Xịt thơm toàn thân mini Luminous thuộc nhóm nước hoa lai phương Đông ngọt ngào, bí ẩn và Âu Mỹ gợi cảm, sang trọng. Hương ngọt nồng nàn vừa vặn, sang trọng nhưng lại trẻ trung dễ dùng, độ lan tỏa cũng đỉnh của chop nữa.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Xịt thơm toàn thân Bath&Body Works Fine Fragrance Mist 75ml',
            category: 'Nước hoa',
            img: './assets/img/products/nh-6.jpg',
            price: 140000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Xịt Thơm Victoria Secret Fragrance Mist 250ml',
            category: 'Nước hoa',
            img: './assets/img/products/nh-7.jpg',
            price: 280000,
            desc: ' Hương thơm đa dạng, ngọt ngào, quyến rũ. Lưu hương suốt nhiều giờ. Thiết kế sang trọng, bắt mắt.'
        },

        {
            id: 40,
            status: 1, 
            title: 'Nước Hoa Vùng Kín Dionel Secret Love Eau',
            category: 'Nước hoa',
            img: './assets/img/products/nh-8.jpg',
            price: 220000,
            desc: 'Nước hoa vùng kín an toàn nhẹ dịu cho làn da, Hương thơm nồng nàn quyến rũ, Chiết xuất từ các thành phần thiên nhiên'
        },

        {
            id: 41,
            status: 1, 
            title: 'Nước Hoa The Body Shop Eau De Toilette',
            category: 'Nước hoa',
            img: './assets/img/products/nh-9.jpg',
            price: 490000,
            desc: 'Lấy cảm hứng từ mùa xuân trong khu vườn Maruyama. Thêm chút phấn mịn màng, và phảng phất hương trái cây để tạo nên một mùi hương. Nước hoa với hương thơm của táo hòa quyện với hoa anh đào trên nền của hương gỗ. Thể hiện cảm giác hạnh phúc và tươi trẻ nhưng không kém phần sang trọng.'
        },
        {
            id: 42,
            status: 1, 
            title: 'Son dưỡng có màu, mềm mịn mướt môi Merzy Siren Melting Color Lip Balm #LB1',
            category: "Khuyến mãi",
            img: './assets/img/products/km-4.jpg',
            price: 180000,
            desc: ' Chất son dưỡng ẩm mọng tự nhiên cho đôi môi thêm rạng rỡ. Đa dạng lựa chọn với 4 màu son không kén tone da, thích hợp sử dụng hằng ngày, Chăm sóc và nâng niu đôi môi với bảng thành phần lành tính.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Bấm mi trang điểm Shiseido Eyelash Curler',
            category: "Khuyến mãi",
            img: './assets/img/products/km-5.jpg',
            price: 175000,
            desc: 'Bấm mi Shiseido Nhật Bản là dòng sản phẩm được xếp vào top 5 bấm mi đáng sử dụng nhất. Theo đó, bấm mi Shiseido Eyelash Curler được yêu thích nhiều nhất bởi người Châu Á nhờ kích cỡ cực chuẩn, vừa mắt phụ nữ Á Đông đồng thời có khả năng làm cong mi 1 cách tự nhiên, nhanh chóng mà không gãy rụng mi, làm cho đôi mắt trông to và sáng hơn. ',
        },
        {
            id: 44,
            status: 1, 
            title: 'Sữa tắm hương nước hoa Bath&Body Works Shower Gel 295ml #A Thousand Wishes',
            category: "Khuyến mãi",
            img: './assets/img/products/km-6.jpg',
            price: 240000,
            desc: 'Sữa tắm Bath & Body Works - A Thousand Wishes làm sạch da, cung cấp thêm độ ẩm và giữ được hương thơm lâu hơn. Sữa tắm BBW không lưu mùi đậm đặc như khi dùng nước hoa, mà sẽ chỉ thoang thoảng trên da, ẩn ẩn hiện hiện, lưu giữ hương như chính mùi cơ thể vậy, tăng thêm sức quyến rũ cho cơ thể. ',
        },
        {
            id: 45,
            status: 1, 
            title: 'Bộ kem dưỡng CNP Propolis Ampule Active Shot Cream Special Edition (50ml + 50ml)',
            category: "Dưỡng da",
            img: './assets/img/products/dd-1.jpg',
            price: 450000,
            desc: 'Công dụng chính: Cấp ẩm chuyên sâu, nuôi dưỡng làn da khỏe mạnh căng mịn từ sâu bên trong.Loại da phù hợp: Mọi loại da, đặc biệt là da nhạy cảm, da khô.Thành phần chính: Chiết xuất keo ong đậm đặc, 3 loại Ceramide.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Kem dưỡng Dr.Jart+ V7 Toning Bright Cream 15ml',
            category: "Dưỡng da",
            img: './assets/img/products/dd-2.jpg',
            price: 160000,
            desc: 'Tái tạo phục hồi giúp da khỏe mạnh và tươi trẻ, Dưỡng trắng da ,làm mờ các vết tàn nhang, nám và đốm nâu, giúp da sáng đều màu hơn.Ngăn ngừa sự hình thành phát triển của mụn cám và các loại mụn thông thường.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Kem Dưỡng Mắt Estee Lauder Supercharged Complex 5ml (không hộp)',
            category: "Dưỡng da",
            img: './assets/img/products/dd-3.jpg',
            price: 160000,
            desc: 'Kem mắt sở hữu công nghệ phục hồi cô đặc gấp 10 lấn, khôi phục lại những tổn thương do ánh sáng xanh, UV, ô nhiễm môi trường, thiếu ngủ gây ra. Giúp làm mờ quầng thâm trong vòng 3 tuần và cấp ẩm cho vùng da quanh mắt suốt 24h.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Kem chống nắng Skin1004 Madagascar Centella Air-Fit SunCream SPF50+ PA++++',
            category: "Dưỡng da",
            img: './assets/img/products/dd-4.png',
            price: 250000,
            desc: 'Kem chống nắng dạng vật lý nhưng không tạo màng trắng, cực kỳ mỏng nhẹ.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Kem Dưỡng Embryolisse Lait-Crème Concentré 75ml',
            category: "Dưỡng da",
            img: './assets/img/products/dd-5.jpg',
            price: 320000,
            desc: 'Khả năng cấp ẩm tức thì, giúp da mềm mướt, mịn màng ngay sau khi sử dụng. Có thể sử dụng như mặt nạ dưỡng ẩm.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Tinh Chất La Roche-Posay Pure Niacinamide',
            category: "Dưỡng da",
            img: './assets/img/products/dd-6.jpg',
            price: 590000,
            desc: 'Với hàm lượng 10% niacinamide. Tinh chất đa tác dụng. Làm đều màu da và làm sáng, đồng thời cải thiện sự xuất hiện và ngăn ngừa các đốm đen. Đặc biệt được phát triển cho da nhạy cảm.',
        },
        {
            id: 51,
            status: 1, 
            title: 'Bấm Mi Youse High End Beauty Tool',
            category: "Phụ kiện",
            img: './assets/img/products/pk-3.jpg',
            price: 35000,
            desc: 'Bấm mi Youse High-End Beauty Tool Eyelash Curler với thiết kế tay cầm đuôi cá độc đáo cũng màu sắc nhẹ nhàng bắt mắt.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Bông Tẩy Trang Gấu Vịt Thỏ Silubi Line Friends',
            category: "Phụ kiện",
            img: './assets/img/products/pk-4.jpg',
            price: 45000,
            desc: 'Chất bông sạch sẽ, mịn màng Chứa thành phần từ bông cotton nguyên chất Nhẹ nhàng lướt nhẹ trên da không gây trầy xước Bao bì bộ 3 Gấu Vịt Thỏ Line Friends xinh xắn. ',
        },
        {
            id: 53,
            status: 1, 
            title: 'Miếng Kích Mí Nước Vacosi Water Wonder Eyelid',
            category: "Phụ kiện",
            img: './assets/img/products/pk-5.jpg',
            price: 60000,
            desc: 'Nếu đã quen thuộc với việc sử dụng miếng kích mí cùng keo dán thì giờ đây, với VACOSI Water Wonder Eyelid Tape, phái đẹp sẽ dễ dàng ở hữu đôi mắt 2 mí quyến rũ chỉ bằng nước sạch. ',
        },
        {
            id: 54,
            status: 1, 
            title: 'Bông Mút Trang Điểm Kai For Professional MakeUp',
            category: "Phụ kiện",
            img: './assets/img/products/pk-6.jpg',
            price: 110000,
            desc: 'Bông mút nhỏ gọn không chiếm nhiều diện tích khi mang đi, Chất bông mềm dễ tán kem nền, Không bị hút quá nhiều sản phẩm Dễ thay đổi sản phẩm không mất thời gian làm sạch',
        },
        {
            id: 55,
            status: 1, 
            title: 'Lông Mi Giả chuyên nghiệp Vacosi 4D Pro Eyelashes',
            category: "Phụ kiện",
            img: './assets/img/products/pk-7.jpg',
            price: 70000,
            desc: ' Sử dụng chất liệu an toàn không làm ảnh hưởng vùng mắt, Độ cong tự nhiên không gây nặng mắt, Hiệu ứng xếp chồng tạo ánh nhìn 4D cho đôi mắt thêm cuốn hút.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Máy Rửa Mặt Con Cá Well-Derma Cleansing Fish ',
            category: "Phụ kiện",
            img: './assets/img/products/pk-8.jpg',
            price: 240000,
            desc: 'Đánh bay đến 99.9% bụi bẩn trên da mặt, loại bỏ dầu, các tế bào chết, Kết hợp chức năng massage với đuôi cá cho da săn chắc, tươi trẻ Thiết kế dễ cầm chắc tay, trọng lượng máy nhẹ. Không thấm nước.',
        },
        {
            id: 57,
            status: 1, 
            title: 'Nhíp gắp mụn đầu đen Vetus',
            category: "Phụ kiện",
            img: './assets/img/products/pk-9.jpg',
            price: 18000,
            desc: 'Lấy nhân mụn ra một cách dễ dàng mà không gây tổn thương da. Chất liệu thép không gỉ kết cấu vững chắc, không bị thay đổi định hình khi thao tác. Nặn được các loại mụn.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Tinh chất Sulwhasoo First Care Activating Serum VI 8ml',
            category: "Khuyến mãi",
            img: './assets/img/products/km-1.jpg',
            price: 110000,
            desc: 'Son bóng thế hệ mới với chất son mỏng nhẹ có thành phần cấp ẩm và khóa ẩm cho môi, Sản phẩm còn được làm hoàn toàn từ thành phần Vegan lành tính mang đến cho bạn đôi môi ẩm mỏng và khỏe mạnh.',
        },
        {
            id: 59,
            status: 1, 
            title: 'Son Tint Bóng Thuần Chay, Ẩm Mọng, Bền Màu FOIF Juicy Fit Tint 3g',
            img: './assets/img/products/km-2.png',
            category: 'Khuyến mãi',
            price: 160000,
            desc: 'Màu đỏ gạch không kén tông da, Chất son Velvet tint mỏng nhẹ, Độ bám cao, khi phai vẫn để lại lớp tint hồng nhẹ.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Son kem lì Merzy The First Velvet Tint Be Yourself 4.5gr #V6.Firenze Negroni',
            img: './assets/img/products/km-3.jpg',
            category: 'Khuyến mãi',
            price: 135000,
            desc: ' Son bóng thế hệ mới với chất son mỏng nhẹ có thành phần cấp ẩm và khóa ẩm cho môi, Sản phẩm còn được làm hoàn toàn từ thành phần Vegan lành tính mang đến cho bạn đôi môi ẩm mỏng và khỏe mạnh.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Phạm Minh Mẫn",
            phone: "MinhMan",
            password: "123123",
            address: 'https://github.com/#',
            email: 'Phamminhman719@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Phạm Minh Mẫn",
            phone: "1231231231",
            password: "123123",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();