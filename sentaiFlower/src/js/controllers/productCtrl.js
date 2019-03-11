angular.module("myProject").controller("productCtrl",["$scope","$http",function($scope,$http){
	//头部按钮点击事件
	$scope.backclickFn=function(){
		window.history.go(-1);
	}
	$scope.homeclickFn=function(){
		window.location.href="../index.html";
	}
	
	//获取产品相关信息
	$scope.productArr=[];
	$scope.thisgoodsInfo={};
	var locationstring=location.search.substr(1);
	var locationarr=locationstring.split("&");
	var goodsid=locationarr[0].split("=")[1];
	$http.jsonp("http://congcong.duapp.com/sentaiPhp/goods.php?callback=JSON_CALLBACK&"+locationarr[1]+"&"+locationarr[2]).success(function(data){
		$scope.productArr=data;
		for(var i=0;i<$scope.productArr.length;i++){
			if($scope.productArr[i].goodsID==goodsid){
				$scope.thisgoodsInfo=$scope.productArr[i];
			}
		}
	});
	
	//跳转到细节页
	$scope.prodetailPage=function(){
		window.location.href="../html/detail.html?goodsID="+$scope.thisgoodsInfo.goodsID+"&classID="+$scope.thisgoodsInfo.classID+"&smallClassId="+$scope.thisgoodsInfo.smallClassId;
	}
}]);
