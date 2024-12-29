// Tin nhắn chúc mừng
function toast({
    title = 'Success',
    message = 'Tạo tài khoản thành công',
    type = 'success', 
    duration = 3000
}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        //Tự động xóa tin nhắn sau 1 khoảng thời gian
        const autoRemove = setTimeout(function(){
            main.removeChild(toast);
        },duration+1000);
        //Xóa tin nhắn khi ấn nút đóng
        toast.onclick = function(e){
            if(e.target.closest('.fa-regular')){
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }
        // Định nghĩa màu sắc cho các loại thông báo
        const colors = {
            success: '#47d864', // Màu xanh lá cho thành công
            info: '#2f86eb', // Màu xanh dương cho thông tin
            warning: '#ffc021', // Màu vàng cho cảnh báo
            error: '#ff6243' // Màu đỏ cho lỗi
        }
         // Định nghĩa biểu tượng cho các loại thông báo
         const icons = {
            success: 'fa-light fa-check', // Biểu tượng dấu tích cho thành công
            info: 'fa-solid fa-circle-info', // Biểu tượng thông tin cho thông tin
            warning: 'fa-solid fa-triangle-exclamation', // Biểu tượng cảnh báo cho cảnh báo
            error: 'fa-solid fa-bug' // Biểu tượng lỗi cho lỗi-bug'
        };
        const color = colors[type]; // Chọn màu sắc dựa trên loại thông báo
        const icon = icons[type]; // Chọn biểu tượng dựa trên loại thông báo
        const delay = (duration / 1000).toFixed(2); // Tính toán độ trễ khi hiệu ứng tắt tin nhắn (tính bằng giây)
        toast.classList.add('toast', `toast--${type}`); // Thêm các lớp CSS cho thông báo, bao gồm loại thông báo (success, info, warning, error)
        
        // Thiết lập hiệu ứng animation cho tin nhắn: Slide vào từ trái và fade out sau khi hết thời gian
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

        // Thiết lập nội dung của tin nhắn
        toast.innerHTML = `
        <div class="toast__private">
            <div class="toast__icon">
                <i class="${icon}"></i> <!-- Thêm biểu tượng vào tin nhắn -->
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3> <!-- Tiêu đề của tin nhắn -->
                <p class="toast__msg">
                    ${message} <!-- Nội dung của tin nhắn -->
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-regular fa-circle-xmark"></i> <!-- Biểu tượng nút đóng (X) -->
            </div>
        </div>
        <div class="toast__background" style="background-color: ${color};">
        </div>`;

        main.appendChild(toast); // Thêm phần tử thông báo vào phần tử 'toast' trong DOM
    }
}