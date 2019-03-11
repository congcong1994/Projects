angular.module("myProject").controller("prolistCtrl",["$scope","$http","$timeout","$ionicLoading","$ionicScrollDelegate",function($scope,$http,$timeout,$ionicLoading,$ionicScrollDelegate){
	//加载列表
	$scope.prolistArr=[];
	$ionicLoading.show({
	    content: 'Loading',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 0
	});
	var urlstring=window.location.href;
	var urlString=urlstring.split("?")[1];
	$scope.prolistTitle="";
	if(urlString.search("classID=1")>-1){
		$scope.prolistTitle="绿植";
	}else if(urlString.search("classID=2")>-1){
		$scope.prolistTitle="鲜花";
	}
	$http.jsonp("http://congcong.duapp.com/sentaiPhp/goods.php?callback=JSON_CALLBACK&"+urlString).success(function(data){
		$scope.prolistArr=data;
	});
	
	$timeout(function () {
	    $ionicLoading.hide();
	},1000);
	
	
	//返回顶部操作
	$scope.scrollTop=function(){
		$ionicScrollDelegate.scrollTop();
	};
	

	//获取屏幕滑动高度后显示返回顶部按钮
	$scope.getScrollPosition = function(){  
		var otopBtn=document.getElementById("prolisttopBtn");
		var position=$ionicScrollDelegate.getScrollPosition().top;//取滑动TOP值  
		//小于等于40像素时隐藏标题  
		if (position<=300){  
			otopBtn.style.display="none"; 
		}else{  
			otopBtn.style.display="block";  
		}  
		$scope.$apply(); 
	};
	  
	//头部按钮点击事件
	$scope.proturnPagefn=function(url){
		window.location.href=url;
	}
	//头部返回上一页按钮
	document.getElementById("probackBtn").onclick=function(){
		window.history.go(-1);
	}
	
	//li点击事件
	$scope.liClick=function(item){
		window.location.href="../html/product.html?goodsID="+item.goodsID+"&classID="+item.classID+"&smallClassId="+item.smallClassId;
	}
}]);
