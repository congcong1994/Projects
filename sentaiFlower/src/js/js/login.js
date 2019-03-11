var loginParams={
	loginbackBtn:null,
	loginhomeBtn:null
};

;(function(){
	logincheckboxFn();
	logingetContent();
	
})();

//头部按钮点击事件
loginParams.loginbackBtn=$(".loginbackBtn");
loginParams.loginhomeBtn=$(".loginhomeBtn");
loginParams.loginbackBtn.on("click",function(){
	window.history.go(-1);
});
loginParams.loginhomeBtn.on("click",function(){
	window.location.href="../index.html";
});


//点击按钮事件
function logingetContent(){
	var loginloginBtn=$(".loginloginBtn");
	//登录按钮点击事件
	loginloginBtn.click(function(){
		var userName=$("#loginusernameBox").val();
		var userPwd=$("#loginuserpwdBox").val();
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
			status:"login",
			userID:userName,
			password:userPwd
		},function(data){
			if(data==0){
				alert("用户名不存在");
			}else if(data==2){
				alert("密码错误");
			}else{
				keepPwd(userName,userPwd);
				sessionStorage.setItem("userOn","{\"username\":\""+userName+"\"}");
				window.location="../index.html";
			}
			
		});
	});
	//注册按钮点击事件
	var oBtn=$(".loginregisterBtn");
	oBtn.click(function(){
		window.location="../html/register.html";
	});
}

//复选框事件
function logincheckboxFn(){
	var oshowPwd=$("#loginshowPwdbox");
	var orememberBox=$("#loginrememberBox");
	var userPwd=$("#loginuserpwdBox");
	var oImg1=oshowPwd.find("img");
	var oImg2=orememberBox.find("img");
	var num=0;
	var mum=0;
	oshowPwd.find("input").click(function(){
		num++;
		if(num%2!=0){
			oImg1.attr("src","../images/check.png");
			userPwd.attr("type","text");
		}else{
			oImg1.attr("src","../images/checkbox.png");
			userPwd.attr("type","password");
		}
	});
	
	orememberBox.find("input").click(function(){
		mum++;
		if(mum%2!=0){
			oImg2.attr("src","../images/check.png");
		}else{
			oImg2.attr("src","../images/checkbox.png");
		}
	});
}

//判断是否记住密码
function keepPwd(userName,userPwd){
	var orememberBox=$("#loginrememberBox");
	var bgImg=orememberBox.find("img").attr("src");
	//选中记住密码
	if(bgImg.indexOf("check.png")!=-1){
		localStorage.setItem("userInfo","{\"username\":\""+userName+"\",\"userPwd\":\""+userPwd+"\"}");
	}
}
















