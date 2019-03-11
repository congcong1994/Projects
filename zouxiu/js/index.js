var indexPr={
	mySwiper:null,
	userid:null
};
;(function(){
	pagetoLottery();
	indexloadBanner();
	indexgotoList();
	proTotalFn();
	
})();

//加载轮播图
function indexloadBanner(){
	
	$.getJSON("http://datainfo.duapp.com/shopdata/getBanner.php?callback=?",function(data){
		
		var aImgurl=JSON.parse(data[0].goodsBenUrl);
		var oBox=$(".swiper-wrapper");
		for(var i=0;i<aImgurl.length;i++){
			var imgBox=$("<div class=\"swiper-slide\"><img src=\""+aImgurl[i]+"\" alt=\"\" /></div>");
			oBox.append(imgBox);	
		}
		$(".swiper-slide img").on("load",function(){
			indexPr.mySwiper=new Swiper(".swiper-container",{
				direction:"horizontal",
				pagination:".swiper-pagination",
				loop:true,
				autoplay:2000,
				autoplayDisableOninteraction:false
			});
		});	
		indexloadList(data);
	});
}


//加载列表
function indexloadList(data){
	var otextbox=$(".textBox .smallbox");
	for(var i=0;i<data.length;i++){
		//console.log(goodsid);
		var otextdiv=$("<div class=\"indexlist clearfix\"></div>");
		var oimgbox=$("<div class=\"imgBox\"><img src=\""+JSON.parse(data[i].goodsBenUrl)[0]+"\" alt=\"\" /></div>");
		otextdiv.append(oimgbox);
		var ogoodsname=$("<span class=\"title\">"+data[i].goodsName+"</span>");
		otextdiv.append(ogoodsname);
		otextbox.append(otextdiv);
		
	}
	$(".indexlist").click(function(){
		var goodsname=$(this).children(".title").html();
		for(var i=0;i<data.length;i++){
			if(data[i].goodsName==goodsname){
				var goodsid=data[i].goodsID;
			}
		}
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
			goodsID:goodsid
		},function(data){
			window.location="product.html?goodsID="+goodsid;
		});
	});
}


//跳转列表页
function indexgotoList(){
	$("footer .textbox").eq(1).click(function(){
		window.location="prolist.html";
	});
	$("footer .textbox").eq(2).click(function(){
		window.location="shoppingcart.html?userID="+indexPr.userid;
	});
}


//计算购物车总数量
function proTotalFn(){
	var num=0;
	var userString=sessionStorage.getItem("userOn");
	indexPr.userid=JSON.parse(userString).username;
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{
		userID:indexPr.userid
	},function(data){
		countNumFn(data);
	});
	
}

//计算购物车总数量
function countNumFn(data){
	var num=0;
	$.each(data,function(i,r){
		num+=parseInt(r.number);
	});
	$("footer .textbox .rightCenter").html(num);
}


//跳转抽奖页面
function pagetoLottery(){
	$(".swiper-container .swiper-wrapper .indexlottery").click(function(){
		var userString=sessionStorage.getItem("userOn");
		//console.log(userString);
		if(userString==null){
			alert("您还未登录，请先登录");
			window.location="login.html";
		}else{
			var iduser=JSON.parse(userString).username;
			window.location="lottery.html?userID="+iduser;
		}	
	});
	
}
