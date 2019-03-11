function navclassific(){

	$("#nav .classification").mouseover(function(){
		$("#nav .classification .navMenu").show();
		$("#nav .classification .navMenu .nav_Menu li").mouseover(function(){
			$(this).children().show();
			$(this).mouseout(function(){
				$(this).children(".content1").hide();
			});
		});

		$("#nav .classification .navMenu .adBox").mouseover(function(){
			$("#nav .classification .navMenu .nav_Menu li .content1").hide();
		});
	});

	$("#nav .classification").mouseout(function(){
		$("#nav .classification .navMenu").hide();
	});

	$("#nav .classification .navMenu .adBox").mouseover(function(){

	});


}