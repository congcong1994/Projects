angular.module("myProject").controller("indexnavCtrl",["$scope","$http",function($scope,$http){
	$scope.prolistData=[];
	$scope.urlClassID="";
//	$http.jsonp("http://congcong.duapp.com/sentaiPhp/goods.php?callback=JSON_CALLBACK?classID="+$scope.urlClassID).success(function(data){
//		$scope.prolistData=data;
//	});
	$scope.indexnavTurnlist=function(classID){
		window.location.href="html/prolist.html?classID="+classID;
		
	}
	$scope.indexnavTurnCenter=function(){
		var username=sessionStorage.getItem("userOn");
		if(username==null){
			alert("请先登录");
			window.location.href="html/login.html";
		}else{
			window.location.href="html/userCenter.html";
		}
	}
}]);
