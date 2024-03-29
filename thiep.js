var weddingDate = new Date("2024-04-10T00:00:00");
    
// Hàm cập nhật đồng hồ đếm ngược
function updateCountdown() {
    var now = new Date().getTime();
    var distance = weddingDate - now;

    // Tính toán thời gian còn lại
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị thời gian còn lại
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML =days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây ";

    // Nếu thời gian còn lại âm (đã qua ngày cưới), hiển thị thông báo
    if (distance < 0) {
        countdownElement.innerHTML = "Đã đến ngày cưới!";
    }
}

// Cập nhật đồng hồ đếm ngược mỗi giây
setInterval(updateCountdown, 1000);