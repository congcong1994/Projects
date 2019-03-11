//轮播图
function zolIndex(){
	this.data=null;
	this.timer=null;
//左滑按钮$("#bannerFront")  右滑按钮$("#bannerNext")
//li列表:$("#bannerBox")[0].children
//ul:$("#bannerBox")
//span圆点:$("#bannerPage")[0].children

	
	//用ajax加载图片，实现轮播图效果
	this.loadImg=function(url,obj,objSpan,objBigBox,btnNext,btnFront){
		$.post(url,function load(data,textStatus){//jq中ajax的写法
			if(textStatus=="success"){
				this.data=window.eval(data);
				for(var i=0;i<this.data.length;i++){
					var obanLi=document.createElement("li");
					//$("#bannerBox")[0].children[i].innerHTML="<a href='#'><img src="+this.data[i]["imgUrl"]+" /></a>";
					obanLi.innerHTML="<a href='#'><img src="+this.data[i]["imgUrl"]+" /></a>";
					$(obj).append(obanLi);
				}
				var imgOne=$(obj)[0].children[0];
				//克隆第一个li
				var clone=imgOne.cloneNode(true);
				//把克隆的li放到ul内
				$(obj).append(clone);
				//给ul设置宽度
				var liLength=$(obj)[0].children.length;
				var numWidth=imgOne.offsetWidth*liLength;
				$(obj).css("width",imgOne.offsetWidth*liLength+"px");
				var index=0;//设置当前显示的图片
				var aSpan=$(objSpan)[0].children;
				var that=this;
				function start(){
					if(index == liLength-1){
						index = 1;
						$(obj).css("left",0);
					}else{
						index++;
					}
					move($(obj)[0],'left',-imgOne.offsetWidth*index);
					//圆点事件
					
					for(var i = 0 ; i < aSpan.length; i ++){
						aSpan[i].className = '';
					}
					if(index==liLength-1){
						aSpan[0].className = 'active';
					}else{
						aSpan[index].className = 'active';
					}
				}
				that.timer=setInterval(start,3000);	//自动轮播功能

				//鼠标滑入定时器停止
				$(objBigBox).mouseover(function(){
					clearInterval(that.timer);
				});

				//鼠标滑出定时器开启
				$(objBigBox).mouseout(function(){
					clearInterval(that.timer);
					that.timer=setInterval(start,3000);
				});

				//右按钮点击事件
				$(btnNext).mouseover(function(){
					$(this).css("background-position","-39px -65px");
					$(this).click(function(){
						start();
					});
					$(this).mouseout(function(){
						clearInterval(that.timer);
						that.timer=setInterval(start,3000);
						$(this).css("background-position","0 -65px");
					});
				});

				//左按钮点击事件
				$(btnFront).mouseover(function(){
					$(this).css("background-position","-39px 0");
					$(this).click(function(){
						if(index==0){
							index = liLength-2;
							$(obj).css("left",-imgOne.offsetWidth*(liLength-1)+"px");
						}else{
							index--;
						}
						move($(obj)[0],'left',-imgOne.offsetWidth*index);
						for(var i = 0 ; i < aSpan.length; i ++){
							aSpan[i].className = '';
						}
						if(index == liLength - 1){
							aSpan[0].className = 'active';
						}else{
							aSpan[index].className = 'active';
						}
					});
					$(this).mouseout(function(){
						clearInterval(that.timer);
						that.timer=setInterval(start,3000);
						$(this).css("background-position","0 0");
					});
				});

				//圆点点击事件
				for(var i=0;i<aSpan.length;i++){
					aSpan[i].index = i;
					$(aSpan[i]).click(function(){
						index = this.index;
						for(var i = 0 ; i < aSpan.length; i ++){
							aSpan[i].className = '';
						}
						aSpan[index].className = 'active';
						move($(obj)[0],'left',-imgOne.offsetWidth*index);
					});
				}
			}
		},"text");
	}
}