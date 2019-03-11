myApp.service("homeBannerSer",["$http",function($http){
	this.getImg=function(opt){
		var config={
			successCallback:function(){}
		};
		for(var i in opt){
			config[i]=opt[i];
		}
		$http.get("http://congcong.duapp.com/sentaiPhp/indexBanner.php").success(function(data){
			config.successCallback(data);
		});
	}
}]); 