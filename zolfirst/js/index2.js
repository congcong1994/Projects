// function loginName(){
// 	_cookie.getCookie("username");
// }
$(function(){
	$("#topCon .toplogin .login a").html(_cookie.getCookie("username"));
	$("#topCon .toplogin .login a").css("overflow","hidden");

	$("#topCon .toplogin .register").click(function(){
		$("#topCon .toplogin .register a").attr("href","index.html");
		$("#topCon .toplogin .register a").attr("target","_self");
		
	});

	//跳转到买家中心
	$("#topCon .topright .li1 .li1title").click(function(){
		window.open("html/usercenter.html");
	});
})