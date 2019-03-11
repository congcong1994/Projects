angular.module("myProject").controller("searchCtrl",["$scope","$http",function($scope,$http){
//	$scope.selectText="";
	$scope.selectArr=[];
	$http.jsonp("http://congcong.duapp.com/sentaiPhp/goods.php?callback=JSON_CALLBACK").success(function(data){
		$scope.selectArr=data;
	});
	$scope.resultArr=[];
	$scope.selectText="";
	var oli=document.getElementById("inputnogoods");
	$scope.inputChangefn=function(){
		var rearr=[];
//		var oinputbox=document.getElementById("selectTextbox");
//		$scope.selectText=oinputbox.value;
		if($scope.selectText){
			for(var i=0;i<$scope.selectArr.length;i++){
				if($scope.selectArr[i].goodsName.search($scope.selectText)>-1){
					rearr.push($scope.selectArr[i]);
				}
			}
			oli.style.display="none";
		}else{
			oli.style.display="block";
		}
		$scope.resultArr=rearr;
		
		
	}
	
	$scope.backbtnFn=function(){
		window.history.go(-1);
	}
	
	$scope.turnProduct=function(item){
		window.location.href="../html/product.html?goodsID="+item.goodsID+"&classID="+item.classID+"&smallClassId="+item.smallClassId;
	}
	
}]);
