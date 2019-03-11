function fnmagnifier(){
	var oSpan=$("#protop .protopBottom .prodetail .focus .bigPicbox a .magniSpan");
	var oBox=$("#protop .protopBottom .prodetail .focus .bigPicbox");
	var obigPic=$("#protop .protopBottom .prodetail .focus .bigPicbox a img");
	var oPic=$("#protop .protopBottom .prodetail .focus .zoombig .maginzoomBigImgcont .bigimgcont1 img");

	oBox.mouseover(function(){
		$("#protop .protopBottom .prodetail .focus .zoombig").css("display","block");
		oSpan.css("visibility","visible");
		$("#protop .protopBottom .prodetail .focus .zoombig .maginzoomBigImgcont").children().css("visibility","visible");
	});

	oBox.mousemove(function(e){
		var e=event || window.event;

		//var left=e.clientX-oSpan[0].offsetWidth/2;
		var left=e.clientX-oSpan[0].offsetWidth/2-oBox[0].offsetLeft;

		// if(left<0){
		// 	left=0;
		// }else if(left>oBox[0].offsetWidth-oSpan[0].offsetWidth){
		// 	left=oBox[0].offsetWidth-oSpan[0].offsetWidth
		// }
		if(left<0){
			left=0;
		}else if(left>oBox[0].offsetWidth-oSpan[0].offsetWidth){
			left=oBox[0].offsetWidth-oSpan[0].offsetWidth;
		}
		oSpan.css("left",left+"px");

		//var top=e.clientY-oSpan[0].offsetHeight/2;

		var top=e.clientY-oSpan[0].offsetHeight/2-oBox[0].offsetTop;
		// if(top<0){
		// 	top=0;
		// }else if(top>oBox[0].offsetHeight-oSpan[0].offsetHeight){
		// 	top=oBox[0].offsetHeight-oSpan[0].offsetHeight
		// }
		if(top<0){
			top=0;
		}else if(top>oBox[0].offsetHeight-oSpan[0].offsetHeight){
			top=oBox[0].offsetHeight-oSpan[0].offsetHeight;
		}
		oSpan.css("top",top+"px");

		// var proportionX=left/(oBox[0].offsetWidth-oSpan[0].offsetWidth);
		// var proportionY=top/(oBox[0].offsetHeight-oSpan[0].offsetHeight);

		// oPic[0].style.left=-4*(oPic[0].offsetWidth-oBox[0].offsetWidth)+'px';

		// oPic[0].style.top=-4*(oPic[0].offsetHeight-oBox[0].offsetHeight)+'px';
		oPic[0].style.left=-2*parseInt(left)+"px";
		oPic[0].style.top=-2*parseInt(top)+"px";
	});

	$("#protop .protopBottom .prodetail .focus .bigPicbox").mouseout(function(){
		$("#protop .protopBottom .prodetail .focus .zoombig").css("display","none");
		$("#protop .protopBottom .prodetail .focus .bigPicbox a .magniSpan").css("visibility","hidden");
	});

	//图片切换
	var oUl=$("#protop .protopBottom .prodetail .focus .picChange .changeList ul");
	var oLi=oUl[0].children;
	var num=null;

	for(var i=0;i<oLi.length;i++){
		oLi[i].index=[i];
		oLi[i].onclick=function(){
			for(var i=0;i<oLi.length;i++){
				oLi[i].children[1].className="border";
			}
			oLi[this.index].children[1].className="active";
			num=Number(this.index)+1;
			obigPic.attr("src","../images/procontent/prolist1/magnifiger"+num+".jpg");
			oPic.attr("src","../images/procontent/prolist1/magnifiger"+num+num+".jpg");
		}
	}


}

function addList(){
	var oSpan=$("#protop .protopBottom .detailInfo .distribution dd .distributionArea .wrapBox .areaSelected .areaName");
	var oDiv=$("#protop .protopBottom .detailInfo .distribution dd .distributionArea .wrapBox .areaSelected .selectarea");
	var oListbox=$("#protop .protopBottom .detailInfo .distribution dd .distributionArea .wrapBox .areaSelected .selectarea .listBox .areaList a");
	var oSpan1=$("#protop .protopBottom .detailInfo .distribution dd .distributionArea .wrapBox .areaSelected .selectarea .select-tab .current span");
	var oBox=$("#protop .protopBottom .detailInfo .distribution dd .distributionArea .wrapBox .areaSelected");
	//var oLi_a=oListbox[0].children;

	oBox.hover(function(){
		oDiv.css("display","block");
		oSpan.css({"background-color":"#c00","background-position":"100% -30px","color":"#fff"});

		oListbox.click(function(){
			oSpan.html($(this).html());
			oSpan1.html($(this).html());
			oDiv.css("display","none");
			oSpan.css({"background-color":"#fff","background-position":"100% 0","color":"#333"});
		});

		$(".close").click(function(){
			oDiv.css("display","none");
			oSpan.css({"background-color":"#fff","background-position":"100% 0","color":"#333"});
		});



	},function(){
		oDiv.css("display","none");
		oSpan.css({"background-color":"#fff","background-position":"100% 0","color":"#333"});
	});
}

function fixUl(){
	var oUl=$("#proBottom .bottomMain .tabbarNav ul");
	var ny=-(document.documentElement.clientHeight || document.body.clientHeight)/2+"px";
	var obuyBtn=$(oUl.children())[7];
	window.onscroll=function(){
		var nTop=document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(nTop);

		if(nTop>=787){
			$(".whole").css("display","block");
			oUl.css({"position":"fixed","left":"50%","margin-left":"-390px","top":"50%","margin-top":ny,"z-index":"200"});
			$("#proBottom .bottomMain .tabbarNav ul .zs-buy-btn").css({"display":"block","margin-left":"108px"});
			$(".sidebar").css({"position":"fixed","top":"50%","right":"50%","margin-top":(parseInt(ny)+38)+"px","margin-right":"-596px"});
		}else{
			$(".whole").css("display","none");
			oUl.css({"position":"static","margin-left":"0","margin-top":"0"});
			$("#proBottom .bottomMain .tabbarNav ul .zs-buy-btn").css({"display":"none"});
			$(".sidebar").css({"position":"static","margin-top":"0","margin-right":"0"});
		}

	}
	
}

function Louti(){
	

	var oLi = $(".sidebar .quick-menu ul li");
    var floorTitle = $("#proBottom .bottomMain .zs-container .goodsDetail .service-title");//楼梯->内容
    //console.log(floorTitle);
        oLi.click(function () {
            var index = $(this).index();//获取点击的是第几个li
            //var ot = floorTitle.eq(index).offset().top;//获取当前楼层相对于文档的top值,
			var ot = floorTitle.eq(index).offset().top;
			//console.log(ot)

            $("body,html").stop(true).animate({scrollTop: ot});
            //让对应的li选中,select是选中的类
            $(this).addClass("cur").siblings().removeClass("cur");
        });

    //2.滚动到顶部,scrollTop为0即可
    // $(".lastli").click(function () {
    //     $("body,html").animate({scrollTop: 0});
    // });

    //3.用户在手动滚动的时候检测是第几楼
    //滚动时检测 scrollTop值
    //获取到scrollTop之后和 这11个楼层的 offset().top ... 进行比较,
    //如果 scrollTop <  xxx,取第一次满足条件的就是对应的楼层
    //需要使用循环遍历
    $(window).scroll(function () {
        var st = $(window).scrollTop();//获取当前滚动的距离
            for(var i = 0,len = floorTitle.size(); i<len; i++) {
                //每一楼层都有一个临界值
                //(第一次找到时)滚动不超过这个楼层的一半就算这个楼层
                //一旦超过一半就看下一次
               var boundValue = floorTitle.eq(i).offset().top + floorTitle.eq(i).height()/2;
                //找到第一个满足条件的,不满足进行下一次寻找
                // console.log(st);
                // console.log(boundValue);
                if(st < boundValue) {
                    oLi.eq(i).addClass("cur").siblings().removeClass("cur");
                    break;//
                }
            }
    });

}
