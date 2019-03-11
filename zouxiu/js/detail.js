var detailPr={
	mySwiper:null
};
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
	loadContent(ogoodsID);
	gobackFn(ogoodsID);
	//获取到的goodsID命名为ogoodsID
}


//加载内容
function loadContent(goodsID){
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
		goodsID:goodsID
	},function(data){
		var goodsInfo=data[0];
		
		//console.log(goodsInfo);
		loadImg(goodsInfo);
		loadInfo(goodsInfo);
	});
}

//加载详情图
function loadImg(data){
	var imgDiv=$(".swiper-wrapper");
	var imgUrlarr=JSON.parse(data.goodsBenUrl);
	for(var i=0;i<imgUrlarr.length;i++){
		var imgBox=$("<div class=\"swiper-slide\"><img src=\""+imgUrlarr[i]+"\" alt=\"\" /></div>");
		imgDiv.append(imgBox);
	}
	$(".swiper-slide img").on("load",function(){
		detailPr.mySwiper=new Swiper(".swiper-container",{
			direction:"horizontal",
			pagination:".swiper-pagination",
			loop:true
		});
	});	
}

//加载详细资料
function loadInfo(data){
	//console.log(data.detail);
	var sInfo=data.detail;
	var oInfobox=$(".textBox");
	aInfo=sInfo.split("。");
	console.log(aInfo);
	for(var i=0;i<aInfo.length;i++){
		//console.log(1);
		var textbox=$("<div class=\"goodsDesc\">"+aInfo[i]+"</div>");
		oInfobox.append(textbox);
	}
}

//返回上一页
function gobackFn(goodsID){
	$(".goback").click(function(){
		window.location="product.html?goodsID="+goodsID;
	});
}
