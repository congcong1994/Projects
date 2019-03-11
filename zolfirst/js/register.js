function registerPage(){
	$("#registerForm .registerBox .registerWaybox .register-form .text").focus(function(){
		$(this).css("border","1px solid #ce1a1b");
	});
	$("#registerForm .registerBox .registerWaybox .register-form .text").blur(function(){
		$(this).css("border","1px solid #ccc");
	});

	$("#phonenumber").blur(function(){
		if($("#phonenumber").val()==""  || /^((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9]){1,3})([0-9]{8})$/.test($("#phonenumber").val())==false){
			$("#registerForm .registerBox .registerWaybox .phonebox .wrongtips").css("display","block");
		}else{
			$("#registerForm .registerBox .registerWaybox .phonebox .wrongtips").css("display","none");
		}
	});

	$("#emailadd").blur(function(){
		if($("#emailadd").val()=="" || /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})$/.test($("#emailadd").val())==false){
			$("#registerForm .registerBox .registerWaybox .emailbox .wrongtips").css("display","block");
		}else{
			$("#registerForm .registerBox .registerWaybox .emailbox .wrongtips").css("display","none");
		}
	});

	$("#password1").blur(function(){
		if($("#password1").val()=="" || /^[a-z0-9_-]{6,18}$/.test($("#password1").val())==false){
			$("#registerForm .registerBox .registerWaybox .pwdbox .pwdwrongtips").css("display","block");
		}else{
			$("#registerForm .registerBox .registerWaybox .pwdbox .pwdwrongtips").css("display","none");
		}
	});

	$("#password2").blur(function(){
		if($("#password2").val()==""){
			$("#registerForm .registerBox .registerWaybox .pwd2box .pwd2wrongtips").css("display","block");
		}else if($("#password2").val() !== $("#password1").val()){
			$("#registerForm .registerBox .registerWaybox .pwd2box .pwd2wrongtips").css("display","block");
		}else{
			$("#registerForm .registerBox .registerWaybox .pwd2box .pwd2wrongtips").css("display","none");
		}
	});

	$("#registerbtn").bind("click",function(){
		if($("#phonenumber").val()==""  || /^((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9]){1,3})([0-9]{8})$/.test($("#phonenumber").val())==false){
			$("#registerForm .registerBox .registerWaybox .phonebox .wrongtips").css("display","block");
		}else if($("#emailadd").val()=="" || /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})$/.test($("#emailadd").val())==false){
			$("#registerForm .registerBox .registerWaybox .emailbox .wrongtips").css("display","block");
		}else if($("#password1").val()=="" || /^[a-z0-9_-]{6,18}$/.test($("#password1").val())==false){
			$("#registerForm .registerBox .registerWaybox .pwdbox .pwdwrongtips").css("display","block");
		}else if($("#password2").val()==""){
			$("#registerForm .registerBox .registerWaybox .pwd2box .pwd2wrongtips").css("display","block");
		}else if($("#password2").val() !== $("#password1").val()){
			$("#registerForm .registerBox .registerWaybox .pwd2box .pwd2wrongtips").css("display","block");
		}else{
			
			var _mobile=$("#phonenumber").val();
			var _email=$("#emailadd").val();
			var _pwd=$("#password1").val();

			_cookie.setCookie("username",_mobile,7,"/");
			_cookie.setCookie("email",_email,7,"/");
			_cookie.setCookie("password",_pwd,7,"/");

			alert("注册成功，请登录");
			window.location.href="login.html";
		}
	});
}

