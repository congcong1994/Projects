myApp.controller('articlePageCtrl', ['$scope','$stateParams','$ionicSlideBoxDelegate','$timeout',"homeBannerSer",function ($scope, $stateParams, $ionicSlideBoxDelegate,$timeout,homeBannerSer) {
		$scope.bannerArr=[];
		homeBannerSer.getImg({
			successCallback:function(data){
				$scope.bannerArr=data;
			}
		});

      $scope.articles = [{id: 0, avatar: 1, img: 2, title: 3, des: 4, see: 5},
        {id: 1, avatar: 1, img: 2, title: 3, des: 4, see: 5}];
      //为了验证属性active-slide定义的模型，angularjs是mvc模式
      $scope.model = {
        activeIndex: 0
      };
      //滑动图片的点击事件
      $scope.coverFlowClick = function () {
        var index = $ionicSlideBoxDelegate.currentIndex();
        //console.log("coverFlowClick index = ", index);
      }
      //此事件对应的是pager-click属性，当显示图片是有对应数量的小圆点，这是小圆点的点击事件
      $scope.pageClick = function (index) {
        //alert(index);
        //console.log("pageClick index = ", index);
        $scope.model.activeIndex = index;
      };

      //当图片切换后，触发此事件，注意参数
      $scope.slideHasChanged = function ($index) {
        //alert($index);
        //console.log("slideHasChanged index = ", $index);
      };
      //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
      $scope.delegateHandle = $ionicSlideBoxDelegate;

  	
 }])