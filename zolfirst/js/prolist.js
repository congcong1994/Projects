$(function(){
	window.onfocus=function(){
		var nCookie=new DealCookie();
		var proid1=nCookie.getCookie("pro1");
		var proid2=nCookie.getCookie("pro2");
		var _reg=/^[1-9]{1}\d*$/g;//正则匹配条件
		//s--页面加载后购物车数量

		var proid1=nCookie.getCookie("pro1");
		var proid2=nCookie.getCookie("pro2");
		// console.log(proid1);
		// console.log(proid2);

		if(proid1!==null){
			proid1=proid1.replace("{","");
			proid1=proid1.replace("}","");
			var aProid1=proid1.split(",");
			var nNum1=parseInt(aProid1[1].split(":")[1]);
		}else{
			nNum1=0;
		}
		if(proid2!==null){
			proid2=proid2.replace("{","");
			proid2=proid2.replace("}","");
			var aProid2=proid2.split(",");
			var nNum2=parseInt(aProid2[1].split(":")[1]);
		}else{
			nNum2=0;
		}
		
		var nNumtotal=nNum1+nNum2;

		$($("#topCon .topright")[0].children[2]).html("<a href=\"#\">购物车"+nNumtotal+"件</a>");
		$("#rightfixTop .topShopcar span").html(nNumtotal);
	}
	
	$("#prolistTitle .plTitletop .pltitleNav .maincategory .mainMenu").hover(function(){
		$("#prolistTitle .plTitletop .pltitleNav .proMenu2 .proname2").css("border-bottom","1px solid #c40000");
	},function(){
		$("#prolistTitle .plTitletop .pltitleNav .proMenu2 .proname2").css("border-bottom","1px solid #ccc");
	});

	$("#prolistTitle .plTitletop .pltitleNav .proMenu2").hover(function(){
		$("#prolistTitle .plTitletop .pltitleNav .proMenu2 .proname2").css("border-bottom","1px solid #fff");
	},function(){
		$("#prolistTitle .plTitletop .pltitleNav .proMenu2 .proname2").css("border-bottom","1px solid #ccc");
	});

	//选项地址栏滑过效果
	$("#mainContent .selectBox .sort .cityAdd").hover(function(){
	$(this).children(".innerContent").css({borderLeft:"1px solid #e6e6e6",borderRight:"1px solid #e6e6e6",borderBottom:"1px solid #fff",backgroundColor:"#fff",zIndex:20});
		$(this).children(".innerContent").children(".ico").css("background-position","-12px -9px");
		$(this).children(".cityList").css("display","block");
	},function(){
		$(this).children(".innerContent").css({border:"none",backgroundColor:"#f7f7f7"});
		$(this).children(".innerContent").children(".ico").css("background-position","-12px 0");
		$(this).children(".cityList").css("display","none");
	});

	//选项价格栏滑过效果
	$("#mainContent .selectBox .sort .priceChange .innerPrice").hover(function(){
		// $(this).children("form").css("z-index","200");
		$(this).children("form").children(".operation").css("display","block");
	},function(){
		$(this).children("form").children(".operation").css("display","none");
	});

	function glLoad(){
		var _licontent=new glloadImg();
		_licontent.initData("../json/prolist.json");

		// var _licontent=new Content();
		// _licontent.initData();
	}
	glLoad();

	function proactiveli(){
		var _activeli=new proactive();
		_activeli.initData("../json/proactive.json");
	}
	proactiveli();
	
})

// function Content(){
// 	this.s=1;//表示图片的开始索引值
// 	this.o=20;//表示图片的结束索引值
// 	this.size=20;//每一页显示多少条数据
// 	this.total=0;//总共有多少页



// 	//生成7个按钮，只显示5个按钮


// 	this.bindEvent=function(){
// 		_self=this;
// 		$("#mainContent .page a").click(function(){
// 			$("#mainContent .page a").not(this).removeClass("current");
// 			$(this).addClass("current");
// 			_self.s=(parseInt($(this).html()-1)*_self.size);
// 			_self.o=_self.s+_self.size;
// 			var _btn=$("#mainContent .page a");
// 			//点击最后一个按钮
// 			if(_btn[4]===this){
// 				if($(this).html()<_self.total){
// 					// for(var i=0;i<_btn.length;i++){
// 					// 	_btn[i].innerHTML=parseInt($(this).html()-2+i);
// 					// }
// 					$("#mainContent .page ul").css("left",-($("#mainContent .page ul li a")[0].offsetWidth*2+8)+"px");

// 				}	
// 			}
// 			//点击第一个按钮
// 			if(_btn[2]===this){
// 				$("#mainContent .page ul").css("left",0);	
// 			}

			

// 			//判断最后一页加载图片个数
// 			if(_btn[_btn.length-1]===this){
// 				$.post("../json/prolist.json",function(data){
// 					_self.o=data.length;
// 					_self.loadImg(data,_self.s,_self.o);
// 				},"json");
// 			}else{
// 				$.post("../json/prolist.json",function(data){
// 					_self.loadImg(data,_self.s,_self.o);
// 				},"json");
// 			}
// 			// if($(this).html()===_self.total){
// 			// 	$.post("../json/prolist.json",function(data){
// 			// 		_self.o=data.length-1;
// 			// 		_self.loadImg(data,_self.s,_self.o);
// 			// 	},"json");
// 			// }else{
// 			// 	$.post("../json/prolist.json",function(data){
// 			// 		_self.loadImg(data,_self.s,_self.o);
// 			// 	},"json");
// 			// }


// 			// $.post("../json/prolist.json",function(data){
// 			// 	_self.loadImg(data,_self.s,_self.o);
// 			// },"json");
// 		})
// 	}

// 	this.initButton=function(){
// 		var _btn="<ul>";
// 		// ="<a href=\"javascript:\">";
// 		// console.log(this.s);
// 		// console.log(this.o);
// 		// console.log(this.total);
// 		for(var i=this.s;i<=this.o && i<=this.total;i++){
// 			_btn+=  "<li><a href=\"#top\">"+i+"</a></li>";
// 		}
// 		_btn+="</ul>"
// 		$("#mainContent .page").html(_btn);
// 		$("#mainContent .page ul").css("width",$("#mainContent .page ul li a")[0].offsetWidth*(this.total+1)+"px");
// 		$("#mainContent .page ul").children().children().eq(0).addClass("current");
// 		this.bindEvent();
// 	}
// 	this.loadImg=function(data,_s,_o){
// 		var _html="";
// 		// console.log(_s);
// 		// console.log(_o);
// 		for(var i=_s;i<_o;i++){
// 			_html+="<li><div class=\"payAttention\"><span>关注</span></div><a href=\"#\" class=\"pic\"><span class=\"img\"><img src=\""+data[i]["imgUrl"]+"\" alt=\"\" /></span></a><div class=\"title\"><a href=\"#\">"+data[i]["title"]+"</a></div><div class=\"pricebox clearfix\"><span class=\"price\">"+data[i]["price"]+"</span></div><div class=\"volume\"><span>销量数<em>&nbsp;"+data[i]["sale"]+"</em></span><span class=\"evaluation\">评价数<em>&nbsp;"+data[i]["comment"]+"</em></span></div><div class=\"shopInfo\"><p><a href=\"#\">酷开官方旗舰店</a></p><p class=\"totalVolume\" style=\"display:block\">店铺总成交<em>44</em>笔</p></div></li>";
// 		}
// 		$("#proMainContent").html(_html);
// 	}
// 	this.initData=function(){
// 		var _self=this;
// 		$.post("../json/prolist.json",function(data){
// 			data=window.eval(data);
// 			_self.loadImg(data,0,_self.size);
// 			_self.total=Math.ceil(data.length/_self.size);
// 			//console.log(_self.total);
// 			_self.initButton();
// 		},"json")
// 	}
// }

function glloadImg(){
	this.data=null;

	this.initData=function(url){
		var _self=this;
		$.post(url,function(data){
			_self.initContent(data);
		},"json");
	}

	this.initContent=function(data){//创建元素
		var _html="";
		data=window.eval(data);
		for(var i=0;i<data.length;i++){
			_html+="<li><div class=\"payAttention\"><span>关注</span></div><a href=\"#\" class=\"pic\"><span class=\"img\"><img src=\""+data[i]["imgUrl"]+"\" alt=\"\" /></span></a><div class=\"title\"><a href=\"#\">"+data[i]["title"]+"</a></div><div class=\"pricebox clearfix\"><span class=\"price\">"+data[i]["price"]+"</span></div><div class=\"volume\"><span>销量数<em>&nbsp;"+data[i]["sale"]+"</em></span><span class=\"evaluation\">评价数<em>&nbsp;"+data[i]["comment"]+"</em></span></div><div class=\"shopInfo\"><p><a href=\"#\">酷开官方旗舰店</a></p><p class=\"totalVolume\" style=\"display:block\">店铺总成交<em>44</em>笔</p></div></li>";
		}
		$("#proMainContent").html(_html);

		var oLi=$($("#proMainContent").children());
		var _cookie=new DealCookie();
		var dDate=null;		
		for(var i=0;i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i].onclick=function(){
				if(this.index%2==0){
					
					dDate=new Date();
					dDate.setDate(dDate.getDate()+7);
					_cookie.editCookie("proId","1001","/",dDate);
					if(_cookie.getCookie("pro1")===null){
						_cookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":0}","/",dDate);
					}
					
					window.open("procontent.html");
				}else{
					dDate=new Date();
					dDate.setDate(dDate.getDate()+7);
					_cookie.editCookie("proId","1002","/",dDate);
					if(_cookie.getCookie("pro2")===null){
						_cookie.editCookie("pro2","{\"proId2\":\"1002\",\"proNum\":0}","/",dDate);
					}
					
					window.open("procontent.html");
				}
			}
		}
	}
}

function proactive(){
	this.data=null;

	this.initData=function(url){
		var _self=this;
		$.post(url,function(data){
			_self.initContent(data);
		},"json");
	}

	this.initContent=function(data){//创建元素
		var _html="";
		data=window.eval(data);
		for(var i=0;i<data.length;i++){
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" alt=\"\" /></a></li>";
		}
		$("#activing .activitySection .list").html(_html);
	}
}
