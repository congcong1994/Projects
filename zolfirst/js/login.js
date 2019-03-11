//正则匹配登录
function loginExp(){
	var rPhone=/^((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9]){1,3})([0-9]{8})$/; 
	//input框聚焦失焦事件
	$("#loginTop form .formBox .loginBox .loginboxContent .loginformUsername .text").focus(function(){
		$(this).parent().css("border","1px solid #ce1a1b");
	});
	$("#loginTop form .formBox .loginBox .loginboxContent .loginformUsername .text").blur(function(){
		$(this).parent().css("border","1px solid #ccc");
		

		if(rPhone.test($(this).val())==false){
			$(this).next(".usernametips").css("display","block");
		}else{
			$(this).next(".usernametips").css("display","none");
		}
	});

	$("#loginTop form .formBox .loginBox .loginboxContent .loginformPwd .text").focus(function(){
		$(this).parent().css("border","1px solid #ce1a1b");
	});
	$("#loginTop form .formBox .loginBox .loginboxContent .loginformPwd .text").blur(function(){
		$(this).parent().css("border","1px solid #ccc");
		if(/^[a-z0-9_-]{6,18}$/.test($(this).val())==false){
			$(this).next(".pwdtips").css("display","block");
		}else{
			$(this).next(".pwdtips").css("display","none");

		}
	});

	//点击登录
	$("#loginTop form .formBox .loginBox .loginboxContent .loginBtn").bind("click",function(){
		if(rPhone.test($("#loginTop form .formBox .loginBox .loginboxContent .loginformUsername .text").val())==false){
			$(this).next(".usernametips").css("display","block");
		}else if(/^[a-z0-9_-]{6,18}$/.test($("#loginTop form .formBox .loginBox .loginboxContent .loginformPwd .text").val())==false){
			$(this).next(".pwdtips").css("display","block");
		}else{
			var _regUsername=_cookie.getCookie("username");
			var _regUserpwd=_cookie.getCookie("password");
			//console.log(_cookie.getCookie("username"));
			if($("#zol_loginUser").val()==_regUsername){
				if($("#zol_loginPwd").val()==_regUserpwd){
					window.location.href="../index2.html";
				}else{
					$("#zol_loginPwd").next(".pwdtips").css("display","block");
				}
				
			}else{
				alert("账号未注册");
			}
			
		}
		
	});
}
	
