var globalPr={
	userid:null
};

;(function(){
	getNav();
	proTotalFn();
	pageJump();
})();



//获取nav
function getNav(){
//	globalPr.myscroll=new IScroll("#mainContent",{click:true});
	$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
		if(data){
			var oData=JSON.parse(data);
			addIcon(oData);
		}
	});
}




//加载导航栏图标
function addIcon(data){
	var oBox=$("#navBox");
	oBox.html("");
	$.each(data,function(i,r){
		var oIcon=$("<span><i class=\"iconfont\">"+r.icon+"</i><em>"+r.className+"</em></span>");
		oBox.append(oIcon);
		oIcon.bind("click",function(){
			oBox.children().not(this).removeClass("active");
			oIcon.addClass("active");
			addList(r.classID,"#mainContent .list");
		});
		
	});
	oBox.children().eq(0).addClass("active");
	loadClass(data);
	//addList(data[0].classID,"#mainContent .list");
}


//加载对应分类内容
function addList(classID,target){
	var oProlistbox=$(target);
	oProlistbox.html("");
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
		classID:classID
	},function(data){
		$.each(data,function(i,r){
			var oDiv=$("<div></div>");
			var oImg=$("<div class=\"imgBox\"><img src=\""+r.goodsListImg+"\" alt=\"\" /></div>");
			oDiv.append(oImg);
			var oText=$("<p>"+r.goodsName+"</p><span>￥"+r.price+".00</span>");
			oDiv.append(oText);
			oProlistbox.append(oDiv);
			//globalPr.myscroll.refresh();
			oDiv.click(function(){
				//console.log(r.goodsID);
				window.location="product.html?goodsID="+r.goodsID;
			});
		});
	});
}

//pad中间内容高度
function getStyle(){
	var nWidth=$("#smallBox").innerWidth();
	//var nWidth2=window.innerWidth;
//	console.log(nWidth);
	//console.log(nWidth2);
	if(nWidth>750){
		
		var nHeight=$("#smallBox").innerHeight();
		$("#navBox").css("height",nHeight);
		$("#mainContent").css("height",nHeight);
	}else{
		$("#navBox").css("height","1.425rem");
		//$("#mainContent").css("height",nHeight);
	}
}
getStyle();
window.addEventListener("resize",function(){
	getNav();
	getStyle();
});

//通过地址栏classID加载页面
function loadClass(data){
	var urlString=window.location.search.split("?")[1];
	if(urlString===undefined){
		addList(data[0].classID,"#mainContent .list");
	}else{
		urlString=urlString.split("&");
		var arr=[];
		console.log(urlString);
		for(var i=0;i<urlString.length;i++){
			var arrEl=urlString[i].split("=");
			arr.push(arrEl);
		}
		for(var i=0;i<arr.length;i++){
			if(arr[i][0]=="classID"){
				var oclassID=arr[i][1];
			}
		}
		addList(oclassID,"#mainContent .list");
	}
	
}



//计算购物车总数量
function proTotalFn(){
	var num=0;
	var userString=sessionStorage.getItem("userOn");
	globalPr.userid=JSON.parse(userString).username;
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{
		userID:globalPr.userid
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

//页面跳转
function pageJump(){
	$("footer .textbox").eq(0).click(function(){
		window.location="index.html";
	});
	$("footer .textbox").eq(2).click(function(){
		window.location="shoppingcart.html?userID="+globalPr.userid;
	});
}
