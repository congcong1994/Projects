$(function() {
  // 轮播图初始化
  var mySwiper = new Swiper('#banner-swiper', {
    direction: 'horizontal',
    autoplay: {
      disableOnInteraction: false
    },
    loop: true,
    lazy: {
      loadPrevNext: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'my-bullet',
      bulletActiveClass: 'my-bullet-active'
    }
  });

  var mySwiper = new Swiper('#recommend-swiper', {
    direction: 'horizontal',
    autoplay: false,
    loop: false,
    lazy: {
      loadPrevNext: true
    }
  });

  var mySwiper = new Swiper('#hot-swiper', {
    direction: 'horizontal',
    autoplay: false,
    loop: false,
    lazy: {
      loadPrevNext: true
    }
  });

  // 侧边栏显示隐藏
  $('header .menu-box').click(function() {
    if ($('#menu-box').is(':hidden')) {
      $('#menu-box').show();
    } else {
      $('#menu-box').hide();
    }
  });
});
