document.addEventListener("DOMContentLoaded", () => {
  const personCountEl = document.getElementById("person-count");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");

  let personCount = 1;

  // Nút tăng số lượng
  increaseBtn.addEventListener("click", () => {
    personCount++;
    personCountEl.textContent = personCount;
    decreaseBtn.disabled = personCount === 1;
  });

  // Nút giảm số lượng
  decreaseBtn.addEventListener("click", () => {
    if (personCount > 1) {
      personCount--;
      personCountEl.textContent = personCount;
    }
    decreaseBtn.disabled = personCount === 1;
  });

  // Khởi động trạng thái ban đầu
  decreaseBtn.disabled = personCount === 1;
});




/* Tours đề xuất bên dưới ô đặt hẹn */
const tours_list = new Swiper('.tours_list', {
  effect: 'fade', // Hiệu ứng fade
  loop: true,
  autoplay: {
    delay: 2000, // Chuyển ảnh mỗi 2 giây
    disableOnInteraction: false,
  },
  speed: 1500, // Tốc độ chuyển tiếp
  fadeEffect: {
    crossFade: false, // Tắt cross-fade để không bị mờ
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});