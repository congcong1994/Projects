var globalPr={
	mySwiper:null
};


//自定义弹窗样式
window.alert=function(opt,url){
	var oDiv=$("<div class=\"alertBox\"></div>");
	var oTop=$("<div class=\"topBox clearfix\"><span class=\"textbox\">来自网页的提示</span><span class=\"closebtn\">×</span></div>");
	oDiv.append(oTop);
	var oBottom=$("<div class=\"bottomBox\">"+opt+"</div>");
	oDiv.append(oBottom);
	$("body").append(oDiv);
	$("body .topBox .closebtn").click(function(){
		oDiv.css("display","none");
	});
	$("body .bottomBox span").click(function(){
		window.location=url;
	});
}


;(function(){
	getID();
})();


//获取商品ID
function getID(){
	var urlString=window.location.search.split("?")[1];
	urlString=urlString.split("&");
	var arr=[];
	for(var i=0;i<urlString.length;i++){
		var arrEl=urlString[i].split("=");
		arr.push(arrEl);
	}
	for(var i=0;i<arr.length;i++){
		if(arr[i][0]=="goodsID"){
			var ogoodsID=arr[i][1];
		}
	}
	
	loadInfo(ogoodsID);
	//获取到的goodsID命名为ogoodsID
	addCartFn(ogoodsID);
	
	$(".goBtn").click(function(){
		window.location="detail.html?goodsID="+ogoodsID;
	});
}

//加载资料页
function loadInfo(goodsID){
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
		goodsID:goodsID
	},function(data){
		//data[0]取出该商品的一条信息对象
		var goodsInfo=data[0];
		loadBanner(goodsInfo);
		loadsimpleInfo(goodsInfo);
		goList(goodsInfo.classID);
	});
}

//加载轮播图
function loadBanner(data){
	var imgDiv=$(".top .swiper-container .swiper-wrapper");
	var imgUrlarr=JSON.parse(data.imgsUrl);
	for(var i=0;i<imgUrlarr.length;i++){
		var imgBox=$("<div class=\"swiper-slide\"><img src=\""+imgUrlarr[i]+"\" alt=\"\" /></div>");
		imgDiv.append(imgBox);
	}
	$(".swiper-slide img").on("load",function(){
		globalPr.mySwiper=new Swiper(".swiper-container",{
			direction:"horizontal",
			pagination:".swiper-pagination",
			loop:true,
			autoplay:2000,
			autoplayDisableOninteraction:false
		});
	});	
}

//加载商品资料页资料
function loadsimpleInfo(data){
	var oDiv=$(".center");
	var titleCon=$("<div class=\"titleCon\">"+data.goodsName+"</div>");
	oDiv.append(titleCon);
	var priceCon=$("<div class=\"priceCon\">￥"+data.price+".00</div>");
	oDiv.append(priceCon);
	var buynumberCon=$("<div class=\"buyNumber\">购买人数："+data.buynumber+"</div>");
	oDiv.append(buynumberCon);
}

//返回到列表页
function goList(classID){
	var backBtn=$(".goback");
	backBtn.click(function(){
		window.location="prolist.html?classID="+classID;
	});
	
}

//点击添加购物车按钮
function addCartFn(goodsID){
	$("footer input").click(function(){
		var userString=sessionStorage.getItem("userOn");
		if(userString==null){
			alert("您未登录，请先<span>登录</span>","login.html");
		}else{
			var userid=JSON.parse(userString).username;
			//查看购物车，判断有无该商品
			$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{
				userID:userid
			},function(data){
				//console.log(data);
				if(data==0){
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
						userID:userid,
						goodsID:goodsID,
						number:1
					},function(data){
						if(data==0){
							console.log("数据更新失败");
						}else if(data==1){
							console.log("数据更新成功");
						}
					});
				}else{
					for(var i=0;i<data.length;i++){
						console.log(data[i].goodsID);
						if(data[i].goodsID==goodsID){
							//console.log(data[i]);
							var num=parseInt(data[i].number);
							num=num+1;
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
								userID:userid,
								goodsID:goodsID,
								number:num
							},function(data){
								if(data==0){
									console.log("数据更新失败");
								}else if(data==1){
									console.log("数据更新成功");
								}
							});
							
							return;
						}else{
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
								userID:userid,
								goodsID:goodsID,
								number:1
							},function(data){
								if(data==0){
									console.log("数据更新失败");
								}else if(data==1){
									console.log("数据更新成功");
								}
							});
							
							return;
						}
					}	
				}
				
			});
			alert("已成功添加商品至购物车<span>点击跳转至购物车</span>","shoppingcart.html?userID="+userid);
		}
		
	});
}



//更新购物车操作
//function refreshCartFn(userid,goodsID,num){
//	$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
//		userID:userid,
//		goodsID:goodsID,
//		number:num
//	},function(data){
//		if(data==0){
//			console.log("数据更新失败");
//		}else if(data==1){
//			console.log("数据更新成功");
//		}
//	});
//}

