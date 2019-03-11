angular.module("myProject").controller("ucCtrl",["$scope","$http",function($scope,$http){
	$scope.turnPage=function(){
		window.location.href="../html/modifinedData.html";
	}
	$scope.backPage=function(){
		window.history.go(-1);
	}
	$scope.searchPage=function(){
		window.location.href="../html/searchPage.html";
	}
	var userString=sessionStorage.getItem("userOn");
	var username=userString.match(/((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})/g);
	var ousernameBox=document.getElementById("usercenterID");
	var oquitBtn=document.getElementById("ucQuitbtn");
	ousernameBox.innerHTML=username;
	oquitBtn.onclick=function(){
		sessionStorage.removeItem("userOn");
		window.location.href="../index.html";
	}
	
	var oImg=document.getElementById("ucimgBox");
	oImg.onclick=function(){
		window.location.href="../index.html";
	}
}])
