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

  // 编辑推荐切换
  $('#editor-recommend-box .content-wrapper .right-narrow').click(function() {
    var totalNum = $('#editor-recommend-box .content-wrapper').length;
    var currentIndex = $(this)
      .parent()
      .siblings('.content-wrapper')
      .index();
    console.log('current' + currentIndex);
    var nextIndex;
    $(this)
      .parent()
      .removeClass('active');
    if (currentIndex < totalNum) {
      console.log(1);
      nextIndex = currentIndex + 1;
    } else {
      nextIndex = 0;
      console.log(2);
    }
    console.log(nextIndex);
    console.log($(this).parent());
    console.log(
      $(this)
        .parent()
        .siblings()
    );
    $(this)
      .parent()
      .siblings('.content-wrapper')
      .eq(nextIndex)
      .addClass('active');
  });
});
