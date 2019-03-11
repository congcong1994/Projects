
$(window).scroll(function(){
	if($(document).scrollTop() > 0){
		addClass();
	}else{
		removeClass();	
	}
});

function addClass(){
	$('.head-brand').addClass('on');
	$('.head-wrap').addClass('on');
	$('.logo-xs img')[0].src = 'img/Lavector1-2.png';
	$('.head-wrap-xs').addClass('on');
	$('.nav-xs').addClass('on');
	$('.nav-option').addClass('on');
	$('.nav-btn').eq(0).addClass('on-1');
	$('.nav-btn').eq(1).addClass('on-2');
	$('.head-wrap-xs .nav-btn').eq(0).addClass('on-1');
	$('.head-wrap-xs .nav-btn').eq(1).addClass('on-2');
}

function removeClass() {
	$('.head-brand').removeClass('on');
	$('.head-wrap').removeClass('on');
	$('.logo-xs img')[0].src = 'img/Lavector1-1.png';
	$('.head-wrap-xs').removeClass('on');
	$('.nav-xs').removeClass('on');
	$('.nav-option').removeClass('on');
	$('.nav-btn').eq(0).removeClass('on-1');
	$('.nav-btn').eq(1).removeClass('on-2');
	$('.head-wrap-xs .nav-btn').eq(0).removeClass('on-1');
	$('.head-wrap-xs .nav-btn').eq(1).removeClass('on-2');
}

$('body').on('click',function(e){
	var nav_collapse = document.getElementsByClassName('nav-collapse')[0];
	if(e.target === nav_collapse){
		if ($('.head-wrap').attr('class').indexOf('on') < 0) {
			addClass();
		}else{
			removeClass();	
		}
		if($('.nav-xs').css('height') == '1px'){
			$('.nav-xs').css('height','270px');
		}else{
			$('.nav-xs').css('height','0px');
		}
	}else{
		if($('.nav-xs').css('height') != '1px'){
			$('.nav-xs').css('height','0px');
		}
	}	
});
