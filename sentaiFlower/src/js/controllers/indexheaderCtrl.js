angular.module("myProject").controller("indexheadCtrl",["$scope",function($scope){
	$scope.searchClick=function(){
		window.location.href="html/searchPage.html";
	}
	
	$scope.backClick=function(){
		window.history.go(-1);
	}
}])
