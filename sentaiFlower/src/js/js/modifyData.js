var modifyParams={
	backBtn:$(".mdbackBtn"),
	searchBtn:$(".mdsearchBtn"),
	userstring:sessionStorage.getItem("userOn"),
	username:null
};


//头部按钮点击事件
;(function(){
	modifyParams.backBtn.click(function(){
		window.history.go(-1);
	});
	modifyParams.searchBtn.click(function(){
		window.location.href="../html/searchPage.html";
	});
})();

modifyParams.username=modifyParams.userstring.match(/((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})/g);


//获取用户名
;(function(){
	document.getElementById("mduserName").innerHTML=modifyParams.username;
	document.getElementById("mdmobileBox").value=modifyParams.username;
	document.getElementById("mdsubmitBtn").onclick=function(){
		window.history.go(-1);
	}
})()
