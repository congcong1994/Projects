angular.module("myProject").controller("detailCtrl",["$scope","$http",function($scope,$http){
	//获取商品信息
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
	
	//如果产品分类为第二类，则页面中不显示植物花语和植物介绍内容
	;(function(){
		var oplantsayBox=document.getElementsByTagName("div")[4];
		var oplantdetailBox=document.getElementsByTagName("div")[5];
		if(locationarr[1]=="classID=2"){
			oplantsayBox.style.display="none";
			oplantdetailBox.style.display="none";
		}else if(locationarr[1]=="classID=1"){
			oplantsayBox.style.display="block";
			oplantdetailBox.style.display="block";
		}
	})()
	
	
	//头部按钮点击事件
	$scope.backclickFn=function(){
		window.history.go(-1);
	}
	$scope.homeclickFn=function(){
		window.location.href="../index.html";
	}
}]);
