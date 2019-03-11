;(function(){
	checkboxFn();
	getContent();
	
})();



//点击按钮事件
function getContent(){
	
	var loginBtn=$(".loginBtn");
	//登录按钮点击事件
	loginBtn.click(function(){
		var userName=$(".userName").val();
		var userPwd=$(".userPwd").val();
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
				window.location="index.html";
			}
			
		});
	});
	//注册按钮点击事件
	var oBtn=$(".registerBtn");
	oBtn.click(function(){
		window.location="register.html";
	});
}

//复选框事件
function checkboxFn(){
	var oshowPwd=$("#showPwdbox");
	var orememberBox=$("#rememberBox");
	var userPwd=$(".userPwd");
	var num=0;
	var mum=0;
	oshowPwd.find("input").click(function(){
		num++;
		if(num%2!=0){
			oshowPwd.css("background-image","url(images/check.png)");
			userPwd.attr("type","text");
		}else{
			oshowPwd.css("background-image","url(images/checkbox.png)");
			userPwd.attr("type","password");
		}
	});
	
	orememberBox.find("input").click(function(){
		mum++;
		if(mum%2!=0){
			orememberBox.css("background-image","url(images/check.png)");
		}else{
			orememberBox.css("background-image","url(images/checkbox.png)");
		}
	});
}

//判断是否记住密码
function keepPwd(userName,userPwd){
	var orememberBox=$("#rememberBox");
	var bgImg=orememberBox.css("background-image");
	//选中记住密码
	if(bgImg.indexOf("check.png")!=-1){
		localStorage.setItem("userInfo","{\"username\":\""+userName+"\",\"userPwd\":\""+userPwd+"\"}");
	}
}
