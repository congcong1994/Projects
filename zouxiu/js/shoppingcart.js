var cartPr={
	ouserID:null,
	oproBox:null,
	num:0,
	arr:[]
};
;(function(){
	getuserID();
	proTotalFn();
	pageJump();
})();



//获取用户ID
function getuserID(){
	var urlString=window.location.search.split("?")[1];
	urlString=urlString.split("&");
	var arr=[];
	for(var i=0;i<urlString.length;i++){
		var arrEl=urlString[i].split("=");
		arr.push(arrEl);
	}
	for(var i=0;i<arr.length;i++){
		if(arr[i][0]=="userID"){
			cartPr.ouserID=arr[i][1];
		}
	}
	loadCart(cartPr.ouserID);
}


//获取用户购物车产品
function loadCart(userID){
	cartPr.oproBox=$(".scrollbox .cartbox");
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{
		userID:userID
	},function(data){
		cartPr.arr=data;
		for(var i=0;i<data.length;i++){
			var oprobox=$("<div class=\"goods clearfix\"><div class=\"imgbox\"><img src=\""+data[i].goodsListImg+"\" alt=\"\" /></div><div class=\"goodsInfo\"><div class=\"goodstitle\">"+data[i].goodsName+"</div><div class=\"goodsClass\">"+data[i].className+"</div><div class=\"perprice\">单价：<span>￥"+data[i].price+"</span></div><div class=\"goodsNum\">数量：<input type=\"button\" value=\"-\" class=\"minus\" /><input type=\"text\" value=\""+data[i].number+"\" /><input type=\"button\" value=\"+\" class=\"adds\" /></div><div class=\"goodsdelete\"><i class=\"iconfont\">&#xe68d;</i></div></div></div>");
			cartPr.oproBox.append(oprobox);
			
		}
		$(".goods .imgbox").click(function(){
			var goodsname=$(this).siblings(".goodsInfo").children(".goodstitle").html();
			for(var i=0;i<data.length;i++){
				if(data[i].goodsName==goodsname){
					var goodsid=data[i].goodsID;
				}
			}
			window.location="product.html?goodsID="+goodsid;
		});
		addProFn(data,userID);
		subProFn(data,userID);
		delProFn(data,userID);
	});
}


//购物车商品数量加
function addProFn(data,userID){
	$(".adds").click(function(){
		var goodsnum=$(this).siblings("input[type=\"text\"]").val();
		var goodsname=$(this).parent().siblings(".goodstitle").html();
		goodsnum=parseInt(goodsnum)+1;
		for(var i=0;i<data.length;i++){
			if(data[i].goodsName==goodsname){
				var goodsid=data[i].goodsID;
				var goodsperPrice=parseInt(data[i].price);
			}
		}
//		totalPrice=goodsnum*goodsperPrice;
//		console.log(totalPrice);
		//console.log(goodsid);
		clickTotalFn(data,goodsname,goodsnum);
		$(this).siblings("input[type=\"text\"]").val(goodsnum);
		$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
			userID:userID,
			goodsID:goodsid,
			number:goodsnum
		},function(data){
			//console.log(data);
			if(data==1){
				console.log("数据更新成功");
			}else if(data==0){
				console.log("数据更新失败");
			}
		});
		
	});
}


//购物车数量减
function subProFn(data,userID){
	$(".minus").click(function(){
		var goodsnum=$(this).siblings("input[type=\"text\"]").val();
		var goodsname=$(this).parent().siblings(".goodstitle").html();
		//console.log(goodsname);
		//console.log(goodsnum);
		if(goodsnum<=1){
			goodsnum=1;
		}else if(goodsnum>1){
			goodsnum=goodsnum-1;
		}
		for(var i=0;i<data.length;i++){
			if(data[i].goodsName==goodsname){
				var goodsid=data[i].goodsID;
				var goodsperPrice=parseInt(data[i].price);
			}
		}
		clickTotalFn(data,goodsname,goodsnum);
		$(this).siblings("input[type=\"text\"]").val(goodsnum);
		$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
			userID:userID,
			goodsID:goodsid,
			number:goodsnum
		},function(data){
			if(data==1){
				console.log("数据更新成功");
			}else if(data==0){
				console.log("数据更新失败");
			}
		});
		
	});
}

//计算购物车总数量
function proTotalFn(){
	var num=0;
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{
		userID:cartPr.ouserID
	},function(data){
		countNumFn(data);
		countPriceFn(data);
	});
	
}

//计算购物车总数量
function countNumFn(data){
	cartPr.num=0;
	$.each(data,function(i,r){
		cartPr.num+=parseInt(r.number);
	});
	$("footer .textbox .rightCenter").html(cartPr.num);
	$("nav span").eq(1).html(cartPr.num);
}

//计算购物车总价
function countPriceFn(data){
	var totalprice=0;
	$.each(data,function(i,r){
		totalprice+=(parseInt(r.number)*parseInt(r.price));
	});
	$("nav .totalprice").html(totalprice);
}


//点击加减号后更新数量及总价
function clickTotalFn(arr,goodsname,goodsnum){
	$.each(arr,function(i,r){
		if(r.goodsName==goodsname){
			r.number=goodsnum;
		}
	});
	console.log(arr);
	var total=0;
	var num=0;
	$.each(arr,function(i,r){
		num+=parseInt(r.number);
		total+=(parseInt(r.number)*parseInt(r.price));
	});
	$("footer .textbox .rightCenter").html(num);
	$("nav span").eq(1).html(num);
	$("nav .totalprice").html("￥"+total);
}


//删除产品
function delProFn(data,userID){
	$(".goodsdelete").click(function(){
		
		var goodsname=$(this).siblings(".goodstitle").html();
		//console.log(goodsname);
		for(var i=0;i<data.length;i++){
			if(data[i].goodsName==goodsname){
				var goodsid=data[i].goodsID;
			}
		}
		//clickTotalFn(data,goodsname,goodsnum);
		//$(this).siblings("input[type=\"text\"]").val(goodsnum);
		$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
			userID:userID,
			goodsID:goodsid,
			number:0
		},function(data){
			if(data==1){
				console.log("数据更新成功");
			}else if(data==0){
				console.log("数据更新失败");
			}
		});
		var oDiv=$(this).parent().parent();
		oDiv.remove();
		clickTotalFn(cartPr.arr,goodsname,0);
	});
}


//页面跳转
function pageJump(){
	$("footer .textbox").eq(0).click(function(){
		window.location="index.html";
	});
//	$("footer span").eq(1).bind("click",function(){
//		window.location="prolist.html";
//	});
	$("footer .textbox").eq(1).click(function(){
		window.location="prolist.html";
		
	});
}
