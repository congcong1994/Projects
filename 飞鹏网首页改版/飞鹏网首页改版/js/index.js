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

  // 侧边栏点击事件
  $('#menu-box .list li').click(function() {
    $(this)
      .siblings()
      .removeClass('active');
    $(this).addClass('active');
  });

  // 编辑推荐切换
  $('#editor-recommend-box .right-narrow').click(function() {
    var currentIndex;
    var currentEle;
    var nextIndex;
    var totalNum = $('#editor-recommend-box .content-wrapper').length;
    $('#editor-recommend-box .content-wrapper').each(function(i, o) {
      if ($(o).hasClass('active')) {
        currentEle = $(o);
        currentIndex = i;
        return;
      }
    });
    if (currentIndex < totalNum - 1) {
      nextIndex = currentIndex + 1;
    } else {
      nextIndex = 0;
    }
    currentEle.removeClass('active');
    $('#editor-recommend-box .content-wrapper')
      .eq(nextIndex)
      .addClass('active');
  });
});
