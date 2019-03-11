var registerParams={
	backBtn:null,
	homeBtn:null,
	flag:null,
	registerBtn:$("#registerregisterBtn")
};

;(function(){
//	registerclickFn();
	registerAgreeFn();
})();

//头部点击事件
registerParams.backBtn=$(".registerbackBtn");
registerParams.backBtn.on("click",function(){
	window.history.go(-1);
});
registerParams.homeBtn=$(".registerhomeBtn");
registerParams.homeBtn.on("click",function(){
	window.location.href="../index.html";
});

//注册按钮点击事件
//function registerclickFn(){
//	$(".registerbtnBox").click(function(){
//		console.log(registerParams.flag);
//		var userInfo=registergetValue();
//		if(registerParams.flag==false){
//		}else if(registerParams.flag==true){
//			if(registervalidateFn(userInfo)){
//				registermatchFn(userInfo);
//			}
//		}
//	});
//}

//获取input框内的内容
function registergetValue(){
	var userName=document.getElementById("registerusernameBox").value;
	var userPwd=document.getElementById("registeruserpwdBox").value;
	var userPwd2=document.getElementById("registeruserpwd2Box").value;
	var userInfo={
		userName:userName,
		userPassword:userPwd,
		userPwd:userPwd2
	};
	return userInfo;
}

//验证是否符合规则
function registervalidateFn(userInfo){
	var status=false;
	var regName=/^((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})$/;
	var regPwd=/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
	if(userInfo.userName=="" || userInfo.userName==" "){
		alert("用户名不能为空");
	}else if(regName.test(userInfo.userName)==false){
		alert("请填写正确的手机号");
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
function registermatchFn(userInfo){
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
				window.location="../html/login.html";
			}
		}
	});
}

//判断是否选中同意注册协议
function registerAgreeFn(){
	//一加载页面，默认为不选中同意注册协议
	registerParams.flag=false;
	var oBox=$("#registercheckoptionBox");
	var oImg=oBox.find("img");
	var num=0;
	oBox.find("input").click(function(){
		num++;
		if(num%2!=0){
			oImg.attr("src","../images/check.png");
			registerParams.registerBtn.css({"background":"#c10000","color":"#fff","border":"2px solid #840000"});
			registerParams.registerBtn.removeAttr("disabled");
			registerParams.flag=true;
			$(".registerbtnBox").click(function(){
				var userInfo=registergetValue();
				if(registervalidateFn(userInfo)){
					registermatchFn(userInfo);
				}
			});
			
		}else{
			oImg.attr("src","../images/checkbox.png");
			registerParams.registerBtn.css({"background":"#ccc","color":"#000","border":"2px solid #ccc"});
			registerParams.registerBtn.attr("disabled","true");
			registerParams.flag=false;
		}
	});
}
