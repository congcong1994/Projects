angular.module("myProject").controller("indexuserCtrl",["$scope",function($scope){
	(function(){
		var userString=sessionStorage.getItem("userOn");
		if(userString){
			var obox=document.getElementById("indexfooterBox");
			obox.style.display="none";
			document.getElementById("useronBox").style.display="block";
			var username=userString.match(/((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})/g);
			var usernameBox=document.getElementById("indexusernameBox");
			usernameBox.innerHTML=username;
		}else{
//			obox.style.display="block";
			document.getElementById("useronBox").style.display="none";
		}
		
		document.getElementById("useronBox").children[1].children[0].onclick=function(){
			sessionStorage.removeItem("userOn");
			document.getElementById("useronBox").style.display="none";
			document.getElementById("indexfooterBox").style.display="block";
		}
	})();
}]);
