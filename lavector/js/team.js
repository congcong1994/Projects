$(function(){
	var aPic=$("#content .top li");
	var aWords=$("#content .bottom li");
	$.each(aPic,function(index){
		$(this).hover(function(){
			$(this).siblings().children(".mask").fadeIn();
			$(this).children(".mask").fadeOut();			
			$(aWords[index]).siblings().fadeOut();
			$(aWords[index]).fadeIn();	
		});
	});
})