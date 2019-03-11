(function registerFn(){
	clickFn();
	gobackFn();
})();

//注册按钮点击事件
function clickFn(){
	document.getElementById("registerBtn").onclick=function(){
		var userInfo=getValue();
		if(validateFn(userInfo)){
			matchFn(userInfo);
		}
	}
}

//获取input框内的内容
function getValue(){
	var userName=document.getElementById("userName").value;
	var userPwd=document.getElementById("userPwd1").value;
	var userPwd2=document.getElementById("userPwd2").value;
	var userInfo={
		userName:userName,
		userPassword:userPwd,
		userPwd:userPwd2
	};
	return userInfo;
}

//验证是否符合规则
function validateFn(userInfo){
	var status=false;
	var regName=/^((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})$/;
	var regPwd=/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
	if(userInfo.userName=="" || userInfo.userName==" "){
		alert("用户名不能为空");
	}else if(regName.test(userInfo.userName)){
		if(regPwd.test(userInfo.userPassword)){
			if(userInfo.userPassword==userInfo.userPwd){
				status=true;
			}else{
				alert("两次输入的密码不一致");
			}
		}else{
			alert("输入的密码必须包含数字和字母，长度为6~20位");
		}
	}
	return status;
}

//和后台数据库匹配
function matchFn(userInfo){
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{
			status:"register",
			userID:userInfo.userName,
			password:userInfo.userPassword
		},
		success:function(data){
			if(data==0){
				alert("用户名已被占用，请重新注册");
			}else if(data==2){
				alert("注册失败，请重新注册");
			}else if(data==1){
				alert("注册成功，请登录");
				window.location="login.html";
			}
		}
	});
}

//返回上一页
function gobackFn(){
	$("header span").click(function(){
		window.history.back();
	});
}
