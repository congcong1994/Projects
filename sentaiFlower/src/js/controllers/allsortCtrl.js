angular.module("myProject").controller("allsortCtrl",["$scope","$http",function($scope,$http){
	//头部按钮点击事件
	$scope.homebtnClick=function(){
		window.location.href="../index.html";
	}
	$scope.backbtnClick=function(){
		window.history.go(-1);
	}
	
	//列表按钮点击事件
	$scope.liclickFn=function(classID,smallClassId){
		window.location.href="../html/prolist.html?classID="+classID+"&smallClassId="+smallClassId;
	}
}]);
