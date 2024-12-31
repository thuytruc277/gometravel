//depth2
/* để chuột lên thì hiện ra menu2 và màu nền tím, bỏ chuột ra thì mất */
$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().fadeIn();
  $("#header").addClass("active");
});

$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().fadeOut();
  $("#header").removeClass("active");
});


//nhấn nút tìm kiếm thì hiện box tìm kiếm, nút tắt box tìm kiếm, màu nền cho header&util
$(".btn_search").click(function () {
  $("#header").toggleClass("active"); /* nhấn nút search thì màu nền của header&util hiện ra, nhấn nữa thì mất đi nên dùng toggle */
  $(this).toggleClass("active"); /* nhấn nút search thì dấu X hiện, nhấn dấu X thì nút search hiện */
  $(".search").fadeToggle(); /* nhấn nút search thì vùng tìm kiếm hiện ra để user nhập vào */
});



//nhấn nút ham thì hiện màn hình đen mờ và các menu - SỬA 21/12/2024
$(".ham").click(function () {
  $(".mgnb_wrap").fadeIn();
  $(".search").fadeOut(); // Ẩn phần search
  $(".util").fadeOut(); // Ẩn phần util
  $(".btn_search").removeClass("active");
  $("#header").removeClass("active"); // ẩn cả logo màu 
});
$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
  $(".util").fadeIn(); // hiện lại util
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});






/* mobile - nhấn vào a trong li thì không bị dẫn đến liên kết khác, chặn link liên kết  */
document.querySelectorAll('.mgnb > li > a[href="sub/plan.html"]').forEach(link => {
  link.addEventListener('click', function (event) {
    if (window.innerWidth <= 768) {
      event.preventDefault(); // Chặn chuyển trang
      const submenu = this.nextElementSibling; // Tìm danh sách con
      if (submenu && submenu.classList.contains('mdepth2')) {
        submenu.classList.toggle('open'); // Mở hoặc đóng danh sách con
      }
    }
  });
});