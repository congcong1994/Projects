

//轮播图下方产品列表
function bannerBottom(){
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
			_html+="<li><a class=\"lititle\" href=\"#\">"+data[i]["name"]+"</a><p>"+data[i]["price"]+"</p><a class=\"liimages\" href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#banBLBottom").html(_html);
	}
}
//全国团购
function NationalBuy(){
	this.data=null;

	this.initData=function(url){
		var _self=this;
		$.post(url,function(data){
			_self.initContent(data);
		},"json");
	}

	this.initContent=function(data){
		var _html="";
		data=window.eval(data);
		var asHour=[];
		var aaHour=[];
		var asMin=[];
		var aaMin=[];
		var asSec=[];
		var aaSec=[];
		for(var i=0;i<data.length;i++){
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a><div class=\"countDown\"><p>剩余时间：</p><span class=\"shour\"></span><span class=\"ahour\"></span><p>时</p><span class=\"smin\"></span><span class=\"amin\"></span><p>分</p><span class=\"ssec\"></span><span class=\"asec\"></span><p>秒</p></div></li>";
			var nowTime=new Date();//获取当前时间
			var futTime=new Date(data[i]["endTime"]);//获取活动结束时间
			var dTime=(futTime.getTime()-nowTime.getTime())/1000;//获取时间差differences
			// 计算时间差
			var hour = Math.floor(dTime/3600);
			var min = Math.floor(dTime/60 % 60);
			var seconds = Math.floor(dTime% 60);
			//小时的十位数字
			var sHour=parseInt(hour/10);
			asHour.push(sHour);
			//小时的个位数字
			var aHour=hour%10;
			aaHour.push(aHour);
			//分钟的十位数字
			var sMin=parseInt(min/10);
			asMin.push(sMin);
			//分钟的个位数字
			var aMin=min%10;
			aaMin.push(aMin);
			//秒的十位数字
			var sSec=parseInt(seconds/10);
			asSec.push(sSec);
			//秒的个位数字
			var aSec=seconds%10;
			aaSec.push(aSec);
		}
		$("#ngBottom").html(_html);
		var aLi=$("#ngBottom")[0].children;
		for(var i=0;i<aLi.length;i++){
			$($("#ngBottom").children()[i]).find("span")[0].innerHTML=asHour[i];
			$($("#ngBottom").children()[i]).find("span")[1].innerHTML=aaHour[i];
			$($("#ngBottom").children()[i]).find("span")[2].innerHTML=asMin[i];
			$($("#ngBottom").children()[i]).find("span")[3].innerHTML=aaMin[i];
			$($("#ngBottom").children()[i]).find("span")[4].innerHTML=asSec[i];
			$($("#ngBottom").children()[i]).find("span")[5].innerHTML=aaSec[i];

			switch(true){
				case asHour[i]==0:
					$($("#ngBottom").children()[i]).find("span")[0].className="n0";
					break;
				case asHour[i]==1:
					$($("#ngBottom").children()[i]).find("span")[0].className="n1";
					break;
				case asHour[i]==2:
					$($("#ngBottom").children()[i]).find("span")[0].className="n2";
					break;
				case asHour[i]==3:
					$($("#ngBottom").children()[i]).find("span")[0].className="n3";
					break;
				case asHour[i]==4:
					$($("#ngBottom").children()[i]).find("span")[0].className="n4";
					break;
				case asHour[i]==5:
					$($("#ngBottom").children()[i]).find("span")[0].className="n5";
					break;
				case asHour[i]==6:
					$($("#ngBottom").children()[i]).find("span")[0].className="n6";
					break;
				case asHour[i]==7:
					$($("#ngBottom").children()[i]).find("span")[0].className="n7";
					break;
				case asHour[i]==8:
					$($("#ngBottom").children()[i]).find("span")[0].className="n8";
					break;
				case asHour[i]==9:
					$($("#ngBottom").children()[i]).find("span")[0].className="n9";
					break;
			}

			switch(true){
				case aaHour[i]==0:
					$($("#ngBottom").children()[i]).find("span")[1].className="n0";
					break;
				case aaHour[i]==1:
					$($("#ngBottom").children()[i]).find("span")[1].className="n1";
					break;
				case aaHour[i]==2:
					$($("#ngBottom").children()[i]).find("span")[1].className="n2";
					break;
				case aaHour[i]==3:
					$($("#ngBottom").children()[i]).find("span")[1].className="n3";
					break;
				case aaHour[i]==4:
					$($("#ngBottom").children()[i]).find("span")[1].className="n4";
					break;
				case aaHour[i]==5:
					$($("#ngBottom").children()[i]).find("span")[1].className="n5";
					break;
				case aaHour[i]==6:
					$($("#ngBottom").children()[i]).find("span")[1].className="n6";
					break;
				case aaHour[i]==7:
					$($("#ngBottom").children()[i]).find("span")[1].className="n7";
					break;
				case aaHour[i]==8:
					$($("#ngBottom").children()[i]).find("span")[1].className="n8";
					break;
				case aaHour[i]==9:
					$($("#ngBottom").children()[i]).find("span")[1].className="n9";
					break;
			}

			switch(true){
				case asMin[i]==0:
					$($("#ngBottom").children()[i]).find("span")[2].className="n0";
					break;
				case asMin[i]==1:
					$($("#ngBottom").children()[i]).find("span")[2].className="n1";
					break;
				case asMin[i]==2:
					$($("#ngBottom").children()[i]).find("span")[2].className="n2";
					break;
				case asMin[i]==3:
					$($("#ngBottom").children()[i]).find("span")[2].className="n3";
					break;
				case asMin[i]==4:
					$($("#ngBottom").children()[i]).find("span")[2].className="n4";
					break;
				case asMin[i]==5:
					$($("#ngBottom").children()[i]).find("span")[2].className="n5";
					break;
				case asMin[i]==6:
					$($("#ngBottom").children()[i]).find("span")[2].className="n6";
					break;
				case asMin[i]==7:
					$($("#ngBottom").children()[i]).find("span")[2].className="n7";
					break;
				case asMin[i]==8:
					$($("#ngBottom").children()[i]).find("span")[2].className="n8";
					break;
				case asMin[i]==9:
					$($("#ngBottom").children()[i]).find("span")[2].className="n9";
					break;
			}

			switch(true){
				case aaMin[i]==0:
					$($("#ngBottom").children()[i]).find("span")[3].className="n0";
					break;
				case aaMin[i]==1:
					$($("#ngBottom").children()[i]).find("span")[3].className="n1";
					break;
				case aaMin[i]==2:
					$($("#ngBottom").children()[i]).find("span")[3].className="n2";
					break;
				case aaMin[i]==3:
					$($("#ngBottom").children()[i]).find("span")[3].className="n3";
					break;
				case aaMin[i]==4:
					$($("#ngBottom").children()[i]).find("span")[3].className="n4";
					break;
				case aaMin[i]==5:
					$($("#ngBottom").children()[i]).find("span")[3].className="n5";
					break;
				case aaMin[i]==6:
					$($("#ngBottom").children()[i]).find("span")[3].className="n6";
					break;
				case aaMin[i]==7:
					$($("#ngBottom").children()[i]).find("span")[3].className="n7";
					break;
				case aaMin[i]==8:
					$($("#ngBottom").children()[i]).find("span")[3].className="n8";
					break;
				case aaMin[i]==9:
					$($("#ngBottom").children()[i]).find("span")[3].className="n9";
					break;
			}

			switch(true){
				case asSec[i]==0:
					$($("#ngBottom").children()[i]).find("span")[4].className="n0";
					break;
				case asSec[i]==1:
					$($("#ngBottom").children()[i]).find("span")[4].className="n1";
					break;
				case asSec[i]==2:
					$($("#ngBottom").children()[i]).find("span")[4].className="n2";
					break;
				case asSec[i]==3:
					$($("#ngBottom").children()[i]).find("span")[4].className="n3";
					break;
				case asSec[i]==4:
					$($("#ngBottom").children()[i]).find("span")[4].className="n4";
					break;
				case asSec[i]==5:
					$($("#ngBottom").children()[i]).find("span")[4].className="n5";
					break;
				case asSec[i]==6:
					$($("#ngBottom").children()[i]).find("span")[4].className="n6";
					break;
				case asSec[i]==7:
					$($("#ngBottom").children()[i]).find("span")[4].className="n7";
					break;
				case asSec[i]==8:
					$($("#ngBottom").children()[i]).find("span")[4].className="n8";
					break;
				case asSec[i]==9:
					$($("#ngBottom").children()[i]).find("span")[4].className="n9";
					break;
			}

			switch(true){
				case aaSec[i]==0:
					$($("#ngBottom").children()[i]).find("span")[5].className="n0";
					break;
				case aaSec[i]==1:
					$($("#ngBottom").children()[i]).find("span")[5].className="n1";
					break;
				case aaSec[i]==2:
					$($("#ngBottom").children()[i]).find("span")[5].className="n2";
					break;
				case aaSec[i]==3:
					$($("#ngBottom").children()[i]).find("span")[5].className="n3";
					break;
				case aaSec[i]==4:
					$($("#ngBottom").children()[i]).find("span")[5].className="n4";
					break;
				case aaSec[i]==5:
					$($("#ngBottom").children()[i]).find("span")[5].className="n5";
					break;
				case aaSec[i]==6:
					$($("#ngBottom").children()[i]).find("span")[5].className="n6";
					break;
				case aaSec[i]==7:
					$($("#ngBottom").children()[i]).find("span")[5].className="n7";
					break;
				case aaSec[i]==8:
					$($("#ngBottom").children()[i]).find("span")[5].className="n8";
					break;
				case aaSec[i]==9:
					$($("#ngBottom").children()[i]).find("span")[5].className="n9";
					break;
			}

			
			
		}

	}
}

//本地团
function localBuy(){
	this.data=null;

	this.initData=function(url){
		var _self=this;
		$.post(url,function(data){
			_self.initContent(data);
		},"json");
	}

	this.initContent=function(data){
		var _html="";
		data=window.eval(data);
		var asHour=[];
		var aaHour=[];
		var asMin=[];
		var aaMin=[];
		var asSec=[];
		var aaSec=[];
		for(var i=0;i<data.length;i++){
			_html+="<li><div class=\"lcliTop\"><a class=\"lcPicbox\" href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a><div class=\"lcDesc\"><h4><a href=\"#\">"+data[i]["name"]+"</a></h4><p class=\"lcPrice\">抢购价：￥<span>"+data[i]["snapp"]+"</span></p><p class=\"prePrice\">原价："+data[i]["prePrice"]+"</p><div class=\"lcButton clearfix\"><p>"+data[i]["cheap"]+"</p><a href=\"#\">抢购</a></div></div></div><div class=\"countdown\"><p>剩余时间：</p><span class=\"shour\"></span><span class=\"ahour\"></span><p>时</p><span class=\"smin\"></span><span class=\"amin\"></span><p>分</p><span class=\"ssec\"></span><span class=\"asec\"></span><p>秒</p></div></li>";
			var nowTime=new Date();//获取当前时间
			var futTime=new Date(data[i]["endTime"]);//获取活动结束时间
			var dTime=(futTime.getTime()-nowTime.getTime())/1000;
			//获取时间差differences秒数
			// 计算时间差
			var hour = Math.floor(dTime/3600);
			var min = Math.floor(dTime/60 % 60);
			var seconds = Math.floor(dTime% 60);
			//小时的十位数字
			var sHour=parseInt(hour/10);
			asHour.push(sHour);
			//小时的个位数字
			var aHour=hour%10;
			aaHour.push(aHour);
			//分钟的十位数字
			var sMin=parseInt(min/10);
			asMin.push(sMin);
			//分钟的个位数字
			var aMin=min%10;
			aaMin.push(aMin);
			//秒的十位数字
			var sSec=parseInt(seconds/10);
			asSec.push(sSec);
			//秒的个位数字
			var aSec=seconds%10;
			aaSec.push(aSec);
		}
		$("#lcBottom").html(_html);
		var aLi=$("#lcBottom")[0].children;
		for(var i=0;i<aLi.length;i++){
			//console.log($($("#lcBottom").children()[i]).find("span")[0]);
			$($("#lcBottom").children()[i]).find("span")[1].innerHTML=asHour[i];
			$($("#lcBottom").children()[i]).find("span")[2].innerHTML=aaHour[i];
			$($("#lcBottom").children()[i]).find("span")[3].innerHTML=asMin[i];
			$($("#lcBottom").children()[i]).find("span")[4].innerHTML=aaMin[i];
			$($("#lcBottom").children()[i]).find("span")[5].innerHTML=asSec[i];
			$($("#lcBottom").children()[i]).find("span")[6].innerHTML=aaSec[i];
			// $($("#lcBottom").children()[i]).find("span")[0].innerHTML=aaHour[i];
			// $($("#lcBottom").children()[i]).find("span")[1].innerHTML=asHour[i];
			// $($("#lcBottom").children()[i]).find("span")[2].innerHTML=aaMin[i];
			// $($("#lcBottom").children()[i]).find("span")[3].innerHTML=asMin[i];
			// $($("#lcBottom").children()[i]).find("span")[4].innerHTML=aaSec[i];
			// $($("#lcBottom").children()[i]).find("span")[5].innerHTML=asSec[i];
			switch(true){
				case asHour[i]==0:
					$($("#lcBottom").children()[i]).find("span")[1].className="n0";
					break;
				case asHour[i]==1:
					$($("#lcBottom").children()[i]).find("span")[1].className="n1";
					break;
				case asHour[i]==2:
					$($("#lcBottom").children()[i]).find("span")[1].className="n2";
					break;
				case asHour[i]==3:
					$($("#lcBottom").children()[i]).find("span")[1].className="n3";
					break;
				case asHour[i]==4:
					$($("#lcBottom").children()[i]).find("span")[1].className="n4";
					break;
				case asHour[i]==5:
					$($("#lcBottom").children()[i]).find("span")[1].className="n5";
					break;
				case asHour[i]==6:
					$($("#lcBottom").children()[i]).find("span")[1].className="n6";
					break;
				case asHour[i]==7:
					$($("#lcBottom").children()[i]).find("span")[1].className="n7";
					break;
				case asHour[i]==8:
					$($("#lcBottom").children()[i]).find("span")[1].className="n8";
					break;
				case asHour[i]==9:
					$($("#lcBottom").children()[i]).find("span")[1].className="n9";
					break;
			}

			switch(true){
				case aaHour[i]==0:
					$($("#lcBottom").children()[i]).find("span")[2].className="n0";
					break;
				case aaHour[i]==1:
					$($("#lcBottom").children()[i]).find("span")[2].className="n1";
					break;
				case aaHour[i]==2:
					$($("#lcBottom").children()[i]).find("span")[2].className="n2";
					break;
				case aaHour[i]==3:
					$($("#lcBottom").children()[i]).find("span")[2].className="n3";
					break;
				case aaHour[i]==4:
					$($("#lcBottom").children()[i]).find("span")[2].className="n4";
					break;
				case aaHour[i]==5:
					$($("#lcBottom").children()[i]).find("span")[2].className="n5";
					break;
				case aaHour[i]==6:
					$($("#lcBottom").children()[i]).find("span")[2].className="n6";
					break;
				case aaHour[i]==7:
					$($("#lcBottom").children()[i]).find("span")[2].className="n7";
					break;
				case aaHour[i]==8:
					$($("#lcBottom").children()[i]).find("span")[2].className="n8";
					break;
				case aaHour[i]==9:
					$($("#lcBottom").children()[i]).find("span")[2].className="n9";
					break;
			}

			switch(true){
				case asMin[i]==0:
					$($("#lcBottom").children()[i]).find("span")[3].className="n0";
					break;
				case asMin[i]==1:
					$($("#lcBottom").children()[i]).find("span")[3].className="n1";
					break;
				case asMin[i]==2:
					$($("#lcBottom").children()[i]).find("span")[3].className="n2";
					break;
				case asMin[i]==3:
					$($("#lcBottom").children()[i]).find("span")[3].className="n3";
					break;
				case asMin[i]==4:
					$($("#lcBottom").children()[i]).find("span")[3].className="n4";
					break;
				case asMin[i]==5:
					$($("#lcBottom").children()[i]).find("span")[3].className="n5";
					break;
				case asMin[i]==6:
					$($("#lcBottom").children()[i]).find("span")[3].className="n6";
					break;
				case asMin[i]==7:
					$($("#lcBottom").children()[i]).find("span")[3].className="n7";
					break;
				case asMin[i]==8:
					$($("#lcBottom").children()[i]).find("span")[3].className="n8";
					break;
				case asMin[i]==9:
					$($("#lcBottom").children()[i]).find("span")[3].className="n9";
					break;
			}

			switch(true){
				case aaMin[i]==0:
					$($("#lcBottom").children()[i]).find("span")[4].className="n0";
					break;
				case aaMin[i]==1:
					$($("#lcBottom").children()[i]).find("span")[4].className="n1";
					break;
				case aaMin[i]==2:
					$($("#lcBottom").children()[i]).find("span")[4].className="n2";
					break;
				case aaMin[i]==3:
					$($("#lcBottom").children()[i]).find("span")[4].className="n3";
					break;
				case aaMin[i]==4:
					$($("#lcBottom").children()[i]).find("span")[4].className="n4";
					break;
				case aaMin[i]==5:
					$($("#lcBottom").children()[i]).find("span")[4].className="n5";
					break;
				case aaMin[i]==6:
					$($("#lcBottom").children()[i]).find("span")[4].className="n6";
					break;
				case aaMin[i]==7:
					$($("#lcBottom").children()[i]).find("span")[4].className="n7";
					break;
				case aaMin[i]==8:
					$($("#lcBottom").children()[i]).find("span")[4].className="n8";
					break;
				case aaMin[i]==9:
					$($("#lcBottom").children()[i]).find("span")[4].className="n9";
					break;
			}

			switch(true){
				case asSec[i]==0:
					$($("#lcBottom").children()[i]).find("span")[5].className="n0";
					break;
				case asSec[i]==1:
					$($("#lcBottom").children()[i]).find("span")[5].className="n1";
					break;
				case asSec[i]==2:
					$($("#lcBottom").children()[i]).find("span")[5].className="n2";
					break;
				case asSec[i]==3:
					$($("#lcBottom").children()[i]).find("span")[5].className="n3";
					break;
				case asSec[i]==4:
					$($("#lcBottom").children()[i]).find("span")[5].className="n4";
					break;
				case asSec[i]==5:
					$($("#lcBottom").children()[i]).find("span")[5].className="n5";
					break;
				case asSec[i]==6:
					$($("#lcBottom").children()[i]).find("span")[5].className="n6";
					break;
				case asSec[i]==7:
					$($("#lcBottom").children()[i]).find("span")[5].className="n7";
					break;
				case asSec[i]==8:
					$($("#lcBottom").children()[i]).find("span")[5].className="n8";
					break;
				case asSec[i]==9:
					$($("#lcBottom").children()[i]).find("span")[5].className="n9";
					break;
			}

			switch(true){
				case aaSec[i]==0:
					$($("#lcBottom").children()[i]).find("span")[6].className="n0";
					break;
				case aaSec[i]==1:
					$($("#lcBottom").children()[i]).find("span")[6].className="n1";
					break;
				case aaSec[i]==2:
					$($("#lcBottom").children()[i]).find("span")[6].className="n2";
					break;
				case aaSec[i]==3:
					$($("#lcBottom").children()[i]).find("span")[6].className="n3";
					break;
				case aaSec[i]==4:
					$($("#lcBottom").children()[i]).find("span")[6].className="n4";
					break;
				case aaSec[i]==5:
					$($("#lcBottom").children()[i]).find("span")[6].className="n5";
					break;
				case aaSec[i]==6:
					$($("#lcBottom").children()[i]).find("span")[6].className="n6";
					break;
				case aaSec[i]==7:
					$($("#lcBottom").children()[i]).find("span")[6].className="n7";
					break;
				case aaSec[i]==8:
					$($("#lcBottom").children()[i]).find("span")[6].className="n8";
					break;
				case aaSec[i]==9:
					$($("#lcBottom").children()[i]).find("span")[6].className="n9";
					break;
			}
		}
	}
}
//firstFloorCenter
function ffCenter(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#ffBottom .ffCenter").html(_html);
		$("#ffBottom .ffCenter")[0].children[0].className="ffli1";
	}
}
//firstFloorBottom
function ffBottomb(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#ffBottom .ffBottomb").html(_html);
	}
}
//mobileBrand
function mobilebrand(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#mobileBrand").html(_html);
	}
}
//hotbannerbottom
function hbBottom(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#secondFloor .sfCenter .sfcRight .rightBottom .sfhot .hotBottombox").html(_html);
	}
}
//secondfloorComputer
function sfComputer(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a><p class=\"listName\"><a href=\"#\">"+data[i]["name"]+"</a></p><p class=\"listPrice\">"+data[i]["price"]+"</p></li>";
		}
		$("#secondFloor .sfCenter .sfcRight .rightBottom .sfComputer .sfcList").html(_html);
	}
}
//secondfloorTablet
function sfTablet(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a><p class=\"listName\"><a href=\"#\">"+data[i]["name"]+"</a></p><div class=\"listPrice\"><p>"+data[i]["price"]+"</p><span>"+data[i]["activity"]+"</span></div></li>";
		}
		$("#secondFloor .sfCenter .sfcRight .rightBottom .sfTablet .sfcList").html(_html);
		//s
		for(var i=0;i<data.length;i++){
			if(data[i]["activity"]==""){
				$($("#secondFloor .sfCenter .sfcRight .rightBottom .sfTablet .sfcList")[0].children[i]).find("span")[0].className="noSpan";
			}
		}
		//e
	}
}
//选项卡
function tableChange(obj1,obj2){
	var oUltop=$(obj1)[0];//获取上面的ul
	var aLitop=oUltop.children;
	//获取下面的ul
	var oUlbottom=$(obj2)[0];
	var aLibottom=oUlbottom.children;
	for(var i=0;i<aLitop.length;i++){
		aLitop[i].index=i;
		aLitop[i].onmouseover=function(){
			for(var i=0;i<aLitop.length;i++){
				aLitop[i].className="";
				aLibottom[i].style.display="none";
			}
			this.className="active";
			aLibottom[this.index].style.display="block";
		}
	}
}
//secondfloorCombrand
function computerbrand(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#secondFloor .sfBottom").html(_html);
	}
}


/*thirdFloor*/
//thirdhotbannerbottom
function thirdhbBottom(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#thirdFloor .sfCenter .sfcRight .rightBottom .sfhot .hotBottombox").html(_html);
	}
}
//thirdfloorCamera
function tfCamera(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a><p class=\"listName\"><a href=\"#\">"+data[i]["name"]+"</a></p><div class=\"listPrice\"><p>"+data[i]["price"]+"</p><span>"+data[i]["activity1"]+"</span><span>"+data[i]["activity2"]+"</span></div></li>";
		}
		$("#thirdFloor .sfCenter .sfcRight .rightBottom .sfComputer .sfcList").html(_html);
		for(var i=0;i<data.length;i++){
			if(data[i]["activity1"]==""){
				$($("#thirdFloor .sfCenter .sfcRight .rightBottom .sfComputer .sfcList")[0].children[i]).find("span")[0].className="noSpan";
			}
			if(data[i]["activity2"]==""){
				$($("#thirdFloor .sfCenter .sfcRight .rightBottom .sfComputer .sfcList")[0].children[i]).find("span")[1].className="noSpan";
			}
		}
	}
}

//thirdfloorDigital
function tfDigital(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a><p class=\"listName\"><a href=\"#\">"+data[i]["name"]+"</a></p><div class=\"listPrice\"><p>"+data[i]["price"]+"</p><span>"+data[i]["activity1"]+"</span><span>"+data[i]["activity2"]+"</span></div></li>";
		}
		$("#thirdFloor .sfCenter .sfcRight .rightBottom .sfTablet .sfcList").html(_html);
		//s
		for(var i=0;i<data.length;i++){
			if(data[i]["activity1"]==""){
				$($("#thirdFloor .sfCenter .sfcRight .rightBottom .sfTablet .sfcList")[0].children[i]).find("span")[0].className="noSpan";
			}
			if(data[i]["activity2"]==""){
				$($("#thirdFloor .sfCenter .sfcRight .rightBottom .sfTablet .sfcList")[0].children[i]).find("span")[1].className="noSpan";
			}
		}
		//e
	}
}

//thirdfloorCombrand
function digitalbrand(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" /></a></li>";
		}
		$("#thirdFloor .sfBottom").html(_html);
	}
}

//hotSale
function hotsale(){
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
			_html+="<li><a href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" alt=\"\" /></a><p class=\"hotlistName\"><a href=\"#\">"+data[i]["name"]+"</a></p><div class=\"listPrice\"><p>"+data[i]["price"]+"</p><span>"+data[i]["activity"]+"</span></div></li>";
		}
		$("#hotSale .hotsaleList").html(_html);
		for(var i=0;i<data.length;i++){
			if(data[i]["activity"]==""){
				$($("#hotSale .hotsaleList")[0].children[i]).find("span")[0].className="noSpan";
			}
		}
	}
}

//logo secondary menu
function logoMenu(){
	var oPbox=$("#logoRightbox .cityAdd p")[0];
	var oUl=$("#logoRightbox .cityAdd ul")[0];
	var oSpan=$("#logoRightbox .cityAdd p")[0].children[0];
	var aLi=oUl.children;
	oPbox.onmouseover=oUl.onmouseover=function(){
		oUl.style.display="block";
		oPbox.style.border="1px solid #eee";
		oPbox.style.borderBottom=0;
		oPbox.style.position="relative";
		oPbox.style.zIndex=5;
		oSpan.style.backgroundImage="url(images/cityico.jpg)";
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				oPbox.innerHTML=this.innerText+"<span></span>";
				oUl.style.display="none";
				oPbox.style.border="none";
				for(var i=0;i<aLi.length;i++){
					aLi[i].className="";
				}
				this.className="active";
			}
		}
		oPbox.onmouseout=oUl.onmouseout=function(){
			oUl.style.display="none";
			oSpan.style.backgroundImage="url(images/city-icon.png)"
			oPbox.style.border="none";
		}
		
	}
}

//fixtop
function fixtop(){
	var oCityname=$("#fixTopCon .logorightbox .logorightcityloc .cityname")[0];
	var oUl=$("#fixTopCon .logorightbox .logorightcityloc .cityList")[0];
	var aLi=oUl.children;
	oCityname.onmouseover=oUl.onmouseover=function(){
		oUl.style.display="block";
		oCityname.style.border="1px solid #eee";
		oCityname.style.borderBottom="none";
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				oCityname.innerHTML=this.innerText+"<span></span>";
				oUl.style.display="none";
				oCityname.style.border="none";
				for(var i=0;i<aLi.length;i++){
					aLi[i].className="";
				}
				this.className="active";
			}
		}
		oCityname.onmouseout=oUl.onmouseout=function(){
			oUl.style.display="none";
			oCityname.style.border="none";
		}
	}
}
//fixtopBlock
function fixtopBlock(){
	window.onscroll=function(){
		var nScroll = document.documentElement.scrollTop || document.body.scrollTop;
		if(nScroll>=600){
			$("#fixTop")[0].style.display="block";
		}else{
			$("#fixTop")[0].style.display="none";
		}
	}
}

//rightfix
function rightFixbox(){
	$("#rightfixTop .fixtopIcon").stop().hover(function(){
		$(this).find('div').css('visibility','visible');
		$(this).find('div').stop().animate({left:"-68px"},300);
	},function(){
		$(this).find('div').css('visibility','hidden');
		$(this).find('div').stop().animate({left:"38px"},200);
	});
}
