document.addEventListener('DOMContentLoaded', () => {
    // Hiển thị trang đầu tiên hoặc loại bỏ thuộc tính ẩn trang
    const pages = document.querySelectorAll('.page');
    if (pages.length > 0) {
        pages[0].classList.add('active');
        pages[0].style.display = 'block';
    }
    console.log("Website CoinVault Pro đã sẵn sàng!");
});
