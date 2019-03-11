$(function(){
	var obackTop=$("#backTop");
	var owidth=$(window).width();
	var oMenu=$("#headContainer .head_m ul");
	$(window).resize(function(){
		owidth=$(window).width();
	});
	if(owidth >= 784){
		$(window).scroll(function(){
			if($(document).scrollTop() > 0 && $(document).scrollTop() < 500){
				$("#headContainer").addClass("on");
			}else if($(document).scrollTop() >= 500){
				$("#headContainer").addClass("on");
				obackTop.fadeIn(500);
			}else{
				$("#headContainer").removeClass("on");
				obackTop.fadeOut(500);
			}		
		});		
	}
	
	//点击按钮返回顶部
	obackTop.on("click",function(){
		$("html,body").animate({scrollTop:0}, 500);
	})
	//小屏顶栏点击弹出菜单，点击屏幕空白处收起顶栏菜单
	$(document).on("click",function(e){
		var menuBtn=$(".headMenu");
		if(e.target === menuBtn){
			if(oMenu.is(":hidden")){
				oMenu.slideDown();
				$("#headContainer .head_m").addClass("on");
				oMenu.addClass("on");
			}else{
				oMenu.slideUp();
				$("#headContainer .head_m").removeClass("on");
				oMenu.removeClass("on");
			}		
		}else{
			if(oMenu.is(":hidden")){
				oMenu.slideDown();
				$("#headContainer .head_m").addClass("on");
				oMenu.addClass("on");
			}else{
				oMenu.slideUp();
				$("#headContainer .head_m").removeClass("on");
				oMenu.removeClass("on");
			}
		}
	});
})