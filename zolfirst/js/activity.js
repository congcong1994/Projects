function citylist(){
	$("#ftCity").mouseover(function(){
		$("#ftCity .citylist").show();
		$("#ftCity .citylist").children().click(function(){
			$("#ftCity .cityname").html($(this).html());
			if($("#ftCity .cityname").html()==="北京"){
				$("#beijing").show();
				$("#liaoning").hide();
			}else if($("#ftCity .cityname").html()==="辽宁"){
				$("#liaoning").show();
				$("#beijing").hide();
			}
			$("#ftCity .citylist").hide();
		});
	});

	$("#ftCity").mouseout(function(){
		$("#ftCity .citylist").hide();
	});
}
//floorfour
function floorfourload(){
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
			_html+="<li><a class=\"picbox\" href=\"#\"><img src=\""+data[i]["imgUrl"]+"\" alt=\"\" /></a><div class=\"price\">促销价：￥<span>"+data[i]["price"]+"</span></div><div class=\"desc\"><p class=\"versions\">"+data[i]["versions"]+"</p><p>"+data[i]["desc"]+"</p></div><a class=\"btn\" href=\"#\">点击购买</a></li>";
		}
		$("#floorFour .ffourContent .content1").html(_html);
	}
}
