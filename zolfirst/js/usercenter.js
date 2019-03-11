$(function(){
	//获取cookie内的用户信息
	var nCookie=new DealCookie();
	var userName=nCookie.getCookie("username");
	var userPwd=nCookie.getCookie("password");
	var userEmail=nCookie.getCookie("email");
	var userNickname=nCookie.getCookie("nickname");
	var dDate=new Date();
	dDate.setDate(dDate.getDate()+7);
	//显示用户名
	$(".username").html(userName);
	if(userNickname===null){
		$("#userinfonickName").val(userName);
		$(".usernamebox .username").html(userName);
	}else{
		$("#userinfonickName").val(userNickname);
		$(".usernamebox .username").html(userNickname);
	}
	
	$("#userName").html(userName);
	//头部二级菜单
	$(".topLeft1").hover(function(){
		$(".topLeft1nav").css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"1px solid #fff","z-index":"10","margin-bottom":"-1px"});
		$(".topLeft1nav").children("i").css({"background-position":"-85px -195px","right":"9px"});
		$(".topLeft1nav").siblings(".topLeft1navbody").css({"display":"block","border-top":"none"});
	},function(){
		$(".topLeft1nav").css({"background-color":"#fafafa","border":"none"});
		$(".topLeft1nav").children("i").css({"background-position":"-75px -195px","right":"10px"});
		$(".topLeft1nav").siblings(".topLeft1navbody").css("display","none");
	});

	$(".topLeft2").hover(function(){
		$(".topLeft2title").css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"1px solid #fff","z-index":"10","margin-bottom":"-1px"});
		$(".topLeft2title").children("i").css({"background-position":"-85px -195px","right":"9px"});
		$(".topLeft2title").siblings(".topLeft2body").css({"display":"block","border-top":"none"});
	},function(){
		$(".topLeft2title").css({"background-color":"#fafafa","border":"none"});
		$(".topLeft2title").children("i").css({"background-position":"-75px -195px","right":"10px"});
		$(".topLeft2title").siblings(".topLeft2body").css("display","none");
	});

	$(".clientEnter").hover(function(){
		$(".clientTitle").css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"1px solid #fff","z-index":"10","margin-bottom":"-1px"});
		$(".clientTitle").siblings(".clientEnterbody").css({"display":"block","border-top":"none"});
	},function(){
		$(".clientTitle").css({"background-color":"#fafafa","border":"none"});
		$(".clientTitle").siblings(".clientEnterbody").css("display","none");
	});

	$(".topRightbox").hover(function(){
		$(".toprightbox-form").css("display","block");
	},function(){
		$(".toprightbox-form").css("display","none");
	});

	$(".accountbox").hover(function(){
		$(".zhanghao").css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"1px solid #fff","z-index":"10","margin-bottom":"-1px"});
		$(".zhanghao").children("i").css({"right":"9px","background-position":"-85px -195px"});
		$(".zhanghao").siblings(".dropdown-body").css({"display":"block","border-top":"none"});
	},function(){
		$(".zhanghao").css({"background-color":"#fafafa","border":"none"});
		$(".zhanghao").children("i").css({"right":"10px","background-position":"-75px -195px"});
		$(".zhanghao").siblings(".dropdown-body").css("display","none");
	});

	$(".followbox").hover(function(){
		$(".attention").css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"1px solid #fff","z-index":"10","margin-bottom":"-1px"});
		$(".attention").children("i").css({"right":"9px","background-position":"-85px -195px"});

		$(".attention").siblings(".dropdown-body").css({"display":"block","border-top":"none"});
	},function(){
		$(".attention").css({"background-color":"#fafafa","border":"none"});
		$(".attention").children("i").css({"right":"10px","background-position":"-75px -195px"});
		$(".attention").siblings(".dropdown-body").css("display","none");
	});

	$(".mybbs-box").hover(function(){
		$(".myzol").css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"10px solid #fff","z-index":"10","margin-bottom":"-1px"});
		$(".myzol").children("i").css({"right":"9px","background-position":"-85px -195px"});
		$(".myzol").siblings(".dropdown-body").css({"display":"block","border-top":"none"});
	},function(){
		$(".myzol").css({"background-color":"#fafafa","border":"none"});
		$(".myzol").children("i").css({"right":"10px","background-position":"-75px -195px"});
		$(".myzol").siblings(".dropdown-body").css("display","none");
	});

	//input框聚焦事件
	$(".text").on("focus",function(){
		$(".text").not(this).css("border","1px solid #dbdbdb");
		$(this).css("border","1px solid #0791f5");
	});

	//input框失焦，判断输入内容对错
	var oldpwd;
	$("#oldPwd").blur(function(){
		oldpwd=$("#oldPwd").val();
		if(oldpwd===userPwd){
			$(this).siblings("span").removeClass("wrongtip").addClass("righttip");
			$(this).siblings("span").html("");
		}else{
			$(this).siblings("span").removeClass("righttip").addClass("wrongtip");
			$(this).siblings("span").html("密码错误");
		}
		
	});
	var newpwd;
	$("#newPwd").blur(function(){
		newpwd=$("#newPwd").val();
		var _reg=/^[a-zA-Z]\w{5,17}$/;//以字母开头，长度在6~18之间，只能包含字符、数字和下划线
		if(newpwd===oldpwd){
			$(this).siblings("span").removeClass("righttip").addClass("wrongtip");
			$(this).siblings("span").html("新密码不能与旧密码相同");
		}else{
			if(_reg.test(newpwd)==true){
				$(this).siblings("span").removeClass("wrongtip").addClass("righttip");
				$(this).siblings("span").html("");
			}else{
				$(this).siblings("span").removeClass("righttip").addClass("wrongtip");
				$(this).siblings("span").html("密码不符合规则");
			}
		}
		
	});

	$("#newPwd2").blur(function(){
		var newpwd2=$("#newPwd2").val();
		if(newpwd2===newpwd){
			$(this).siblings("span").removeClass("wrongtip").addClass("righttip");
			$(this).siblings("span").html("");
		}else{
			$(this).siblings("span").removeClass("righttip").addClass("wrongtip");
			$(this).siblings("span").html("两次输入密码不同");
		}
	});

	$(".sectionPwd .saveBtn").click(function(){
		if($("#oldPwd").siblings("span").hasClass("righttip") && $("#newPwd").siblings("span").hasClass("righttip") && $("#newPwd2").siblings("span").hasClass("righttip")){
			nCookie.editCookie("password",newpwd,"/",dDate);
			alert("修改成功，请重新登录");
			window.open("login.html");
		}
	});

	//左侧选项卡，用户资料和修改密码互相切换
	$(".nav-item").click(function(){
		$(".nav-item").not(this).removeClass("current");
		$(this).addClass("current");
	});

	$("#nav-baseInfo").click(function(){
		$(".nav-item").not(this).removeClass("current");
		$(this).addClass("current");
		$(".section").removeClass("current");
		$(".sectionUser").addClass("current");
	});

	$("#nav-passwordset").click(function(){
		$(".nav-item").not(this).removeClass("current");
		$(this).addClass("current");
		$(".section").removeClass("current");
		$(".sectionPwd").addClass("current");
	});

	//用户资料设置
	var nickName;
	$("#userinfonickName").blur(function(){
		nickName=$(this).val();
		var nLength=nickName.length;
		if(nLength>=4 && nLength<=10){
			$(this).siblings("span").removeClass("wrongtip").addClass("righttip");
			$(this).siblings("span").html("");
			//nCookie.editCookie("nickname",nickName,"/",dDate);
		}else{
			$(this).siblings("span").removeClass("righttip").addClass("wrongtip");
			$(this).siblings("span").html("昵称不符合规则");
		}
		
	});

	var useremail;
	$("#userinfoEmail").blur(function(){
		useremail=$(this).val();
		var _regemail=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})$/;
		if(useremail===userEmail){
			$(this).siblings("span").removeClass("righttip").addClass("wrongtip");
			$(this).siblings("span").html("新邮箱地址不能与旧邮箱地址一致");
		}else{
			if(_regemail.test(useremail)==true){
				$(this).siblings("span").removeClass("wrongtip").addClass("righttip");
				$(this).siblings("span").html("");
			}else{
				$(this).siblings("span").removeClass("righttip").addClass("wrongtip");
				$(this).siblings("span").html("请输入正确的邮箱地址");
			}
		}
		
	});

	$(".sectionUser .saveBtn").click(function(){
		if($("#userinfonickName").siblings("span").hasClass("righttip") && $("#userinfoEmail").siblings("span").hasClass("righttip")){
			nCookie.editCookie("nickname",nickName,"/",dDate);
			nCookie.editCookie("email",useremail,"/",dDate);
			alert("修改成功!");
		}
	});
})