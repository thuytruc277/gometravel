/* 1 - BANNER slide */
const banner_list = new Swiper('.banner_list', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: 'fade', // Thay đổi hiệu ứng từ slide sang fade
  fadeEffect: {
    crossFade: true, // Kích hoạt hiệu ứng fade mượt
  },
  zoom: {
    maxRatio: 2, // Cấu hình zoom (tuỳ chỉnh tỷ lệ)
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* nhấn nút pause thì dừng slide và hiện nút play, bấm play thì tiếp tục auto slide */
$(".pause").click(function () {
  banner_list.autoplay.stop();
  $(this).hide();
  $(".play").show();
});
$(".play").click(function () {
  banner_list.autoplay.start();
  $(this).hide();
  $(".pause").show();
});



/* DESTINATION slide */
const destination_list = new Swiper('.destination_list', {
  centeredSlides: true, //활성화된 slide가 가운데
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});


/* ABOUT US */
const about_list = new Swiper('.about_list', {
  effect: 'creative', // Hiệu ứng sáng tạo
  loop: true,
  autoplay: {
    delay: 3000, // Chuyển ảnh mỗi 3 giây
    disableOnInteraction: false,
  },
  speed: 1500, // Tốc độ chuyển tiếp
  creativeEffect: {
    prev: {
      translate: ['-120%', 0, -500], // Dịch chuyển sang trái
    },
    next: {
      translate: ['120%', 0, -500], // Dịch chuyển sang phải
    },
  },
});



/* EVENT */
const event_list = new Swiper('.event_list', {
  centeredSlides: true, // Slide hiện tại được căn giữa
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5, // 1 slide trên màn hình nhỏ
      spaceBetween: 10, // Khoảng cách giữa các slide
    },
    768: {
      slidesPerView: 2.5, // 2 slide trên màn hình trung bình
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4, // 3 slide trên màn hình lớn
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



/* REVIEW */
const review_list = new Swiper('.review_list', {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2, // 1 slide trên màn hình nhỏ
      spaceBetween: 10, // Khoảng cách giữa các slide
    },
    768: {
      slidesPerView: 3, // 2 slide trên màn hình trung bình
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4, // 3 slide trên màn hình lớn
      spaceBetween: 30,
    },
  },
});















/* 3 - BEST slide - product */
const best_list = new Swiper('.best_list', {
  centeredSlides: true, //활성화된 slide가 가운데
  loop: true,
  speed: 2000,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar", //bullets, progressbar, fraction
  },
  // slidesPerView: 5,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  //add more 반응형 slide option 
  breakpoints: {
    0: { //từ 0 trở đi
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: { //768px 이상에서 từ 768 trở đi
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: { //từ 1200 trở đi
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});


/* 4 - TEAWARE */
$(".teaware_btn button").click(function () {
  clearInterval(teaware);
  $(this).addClass("active");
  $(this).siblings().removeClass("active"); //khi click vào từng button thì hiện màu nền xanh, khi click vào button khác thì màu của ô đã nhấn mất đi
  let number = $(this).index();
  $(".teaware_img li").eq(number).fadeIn().siblings().hide(); //nhấn vào từng button bên trên thì các ảnh bên trong li hiện ra, nhấn vào cái khác thì cái đã hiện bị mất đi
});


/* Bổ sung thêm java script, tự động */

let idx = 0;
const teaware = setInterval(function () {
  if (idx < 3) {
    idx++;
  } else {
    idx = 0;
  }
  $(".teaware_btn button").eq(idx).addClass("active").siblings().removeClass("active");
  $(".teaware_img li").eq(idx).fadeIn().siblings().hide();
}, 3000);

