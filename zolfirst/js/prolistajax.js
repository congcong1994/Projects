$(function(){
	$.post("../json/product.json",function load(data,textStatus){
		if(textStatus=="success"){
			this.data=window.eval(data);
			var _html="";
			var mainBox=$("#protop .protopBottom .prodetail");
			var cCookie=new DealCookie();
			var k=String(cCookie.readCookie("proId"));
			var nCookie=new DealCookie();
			var dDate=new Date();
			var proNumber=null;
			var _read=null;
			var _reg=/^[1-9]{1}\d*$/g;//正则匹配条件
			window.onfocus=function(){
				var proid1=nCookie.getCookie("pro1");
				var proid2=nCookie.getCookie("pro2");
				
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
			// var proid1=nCookie.getCookie("pro1");
			// var proid2=nCookie.getCookie("pro2");
			// var _reg=/^[1-9]{1}\d*$/g;//正则匹配条件
			// //s--页面加载后购物车数量

			// var proid1=nCookie.getCookie("pro1");
			// var proid2=nCookie.getCookie("pro2");
			// // console.log(proid1);
			// // console.log(proid2);

			// if(proid1!==null){
			// 	proid1=proid1.replace("{","");
			// 	proid1=proid1.replace("}","");
			// 	var aProid1=proid1.split(",");
			// 	var nNum1=parseInt(aProid1[1].split(":")[1]);
			// }else{
			// 	nNum1=0;
			// }
			// if(proid2!==null){
			// 	proid2=proid2.replace("{","");
			// 	proid2=proid2.replace("}","");
			// 	var aProid2=proid2.split(",");
			// 	var nNum2=parseInt(aProid2[1].split(":")[1]);
			// }else{
			// 	nNum2=0;
			// }
			
			// var nNumtotal=nNum1+nNum2;
			
			
			// $($("#topCon .topright")[0].children[2]).html("<a href=\"#\">购物车"+nNumtotal+"件</a>");
			//  $("#rightfixTop .topShopcar span").html(nNumtotal);

			// _read=String(_read);
			// _read=_read.replace("{","");
			// _read=_read.replace("}","");
			// var aRead=_read.split(",");
			// console.log(aRead);
			// var nNum=parseInt(aRead[1].split(":")[1]);
			// console.log(nNum);









			//e
			// if(proid1!==null){
				// proid1=proid1.replace("{","");
				// proid1=proid1.replace("}","");
				// var aProid1=proid1.split(",");
				// var nNum1=parseInt(aProid1[1].split(":")[1]);
			// }else{
				// nNum1=0;
			// }
			// if(proid2!==null){
				// proid2=proid2.replace("{","");
				// proid2=proid2.replace("}","");
				// var aProid2=proid2.split(",");
				// var nNum2=parseInt(aProid2[1].split(":")[1]);
			// }else{
			// 	// nNum2=0;
			// }
			
			// var nNumtotal=nNum1+nNum2;
			// console.log(nNumtotal);
			// $($("#topCon .topright")[0].children[2]).html("<li><a href=\"#\">购物车"+nNumtotal+"件</a></li>");
			// $("#rightfixTop .topShopcar span").html(nNumtotal);

			// _read=String(_read);
			// _read=_read.replace("{","");
			// _read=_read.replace("}","");
			// var aRead=_read.split(",");
			// var nNum=parseInt(aRead[1].split(":")[1]);
			// console.log(nNum);

			
				if(k==="1001"){
					_html+="<div class=\"focus\"><div class=\"bigPicbox\"><a href=\"#\"><img src=\"../images/procontent/prolist1/magnifiger"+data[k]["message"]["bigpicUrl"]+".jpg\" alt=\"\" /><div class=\"magniSpan\"></div></a></div><div class=\"zoombig\"><div class=\"maginzoomBigImgcont\"><div class=\"bigimgcont1\"><img src=\"../images/procontent/prolist1/magnifiger"+data[k]["message"]["bigCont"]+".jpg\" alt=\"\" /></div></div></div><div class=\"picChange\"><div class=\"changeList\"><ul>";

					for(var i=0;i<data[k]["message"]["picchangeUrl"].length;i++){
						if(i==0){
							_html+="<li id=\"picchange1\"><a href=\"javascript:\"><img src=\"../images/procontent/prolist1/magnifiger"+data[k]["message"]["picchangeUrl"][i]+".jpg\" alt=\"\" /></a><i class=\"iborder active\"></i></li>";
						}else{
							_html+="<li id=\"picchange1\"><a href=\"javascript:\"><img src=\"../images/procontent/prolist1/magnifiger"+data[k]["message"]["picchangeUrl"][i]+".jpg\" alt=\"\" /></a><i class=\"iborder\"></i></li>";
						}
					}

					_html+="</ul></div></div></div><div class=\"dealwrap\"><h3 class=\"title\">"+data[k]["message"]["title"]+"</h3><div class=\"salePrice\"><dl><dt>价&nbsp;&nbsp;格：</dt><dd class=\"clearfix\"><span class=\"pro-price\">￥</span><em id=\"coocaa-goods-price\">"+data[k]["message"]["price"]+"</em></dd></dl></div><div class=\"detailInfo\"><dl class=\"distribution\"><dt>配&nbsp;&nbsp;送：</dt><dd class=\"clearfix\"><div class=\"distributionArea\"><div class=\"wrapBox clearfix\"><div class=\"areaSelected\"><span class=\"areaName\">北京</span><div class=\"selectarea\"><a href=\"javascript:\" class=\"close\"></a><ul class=\"select-tab clearfix\"><li class=\"current\"><span>北京</span></li></ul><div class=\"listBox\"><div class=\"areaList clearfix\"><a href=\"javascript:\">北京</a><a href=\"javascript:\">上海</a><a href=\"javascript:\">天津</a><a href=\"javascript:\">重庆</a><a href=\"javascript:\">黑龙江</a><a href=\"javascript:\">辽宁</a><a href=\"javascript:\">吉林</a><a href=\"javascript:\">河北</a><a href=\"javascript:\">内蒙</a><a href=\"javascript:\">陕西</a><a href=\"javascript:\">山西</a><a href=\"javascript:\">甘肃</a><a href=\"javascript:\">宁夏</a><a href=\"javascript:\">新疆</a><a href=\"javascript:\">西藏</a><a href=\"javascript:\">青海</a><a href=\"javascript:\">四川</a><a href=\"javascript:\">云南</a><a href=\"javascript:\">贵州</a><a href=\"javascript:\">湖南</a><a href=\"javascript:\">湖北</a><a href=\"javascript:\">河南</a><a href=\"javascript:\">山东</a><a href=\"javascript:\">安徽</a><a href=\"javascript:\">江苏</a><a href=\"javascript:\">浙江</a><a href=\"javascript:\">广东</a><a href=\"javascript:\">广西</a><a href=\"javascript:\">江西</a><a href=\"javascript:\">福建</a><a href=\"javascript:\">海南</a><a href=\"javascript:\">其它</a></div></div></div><div class=\"area-selectedInfo\">可送达<span>顺丰包邮</span></div></div></div></div></dd></dl><dl class=\"proComment\"><dt>评&nbsp;&nbsp;价：</dt><dd><a href=\"#\" class=\"proreview\">购买评价&nbsp;<span>"+data[k]["message"]["comment"]+"</span></a><span class=\"line\">|</span><a href=\"#\" class=\"buyRecord\">成交记录&nbsp;<span>"+data[k]["message"]["record"]+"</span></a></dd></dl><dl class=\"servicePromise\"><dt>服务保障：</dt><dd class=\"clearfix\">由&nbsp;<span><a href=\"#\">酷开官方旗舰店</a></span>&nbsp;发货并承诺提供以下服务保障</dd><dd><ul class=\"clearfix\"><li><a href=\"#\"><i class=\"iconfont\">&#xe60a;</i>行货保证</a></li><li><a href=\"#\"><i class=\"iconfont\">&#xe604;</i>发票保障</a></li><li><a href=\"#\"><i class=\"iconfont\">&#xe6b8;</i>顺丰包邮</a></li><li><a href=\"#\"><i class=\"iconfont\">&#xe66b;</i>无忧退换</a></li></ul></dd></dl><div class=\"buyCar\"><form><dl class=\"buyNumber\"><dt>购买数量：</dt><dd class=\"clearfix\"><div class=\"buyAmount\"><span class=\"numDecrease\"></span><input type=\"text\" id=\"goodsNumber\" value=\"1\" /><span class=\"numIncrease\"></span></div><span class=\"textPart\">件<em>(限购"+data[k]["message"]["xiangou"]+"件)</em></span><span class=\"wrongTips\">您填写的数量不正确</span></dd></dl><div class=\"buyBtn clearfix\"><a href=\"#\" class=\"buynow\">立即购买</a><a href=\"javascript:\" class=\"addincar\">加入购物车</a></div></form></div></div></div>";

					$("#protop .protopBottom .prodetail").html(_html);









					//s--点击加减
					dDate.setDate(dDate.getDate()+7);
					proNumber=$("#goodsNumber").val();
					//nCookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+proNumber+"}","/",dDate);
					_read=String(nCookie.getCookie("pro1"));
					//console.log(_read);
					//_read=String(nCookie.getCookie("pro1"));
					_read=_read.replace("{","");
					_read=_read.replace("}","");
					var aRead=_read.split(",");
					var nNum=parseInt(aRead[1].split(":")[1]);
					//console.log(nNum);
					// if(nNum===1){
					// 	$("#rightfixTop .topShopcar span").html(nNum-1);
					// 	$($("#topCon .topright")[0].children[2]).html("<a href=\"#\">购物车0件</a>");
					// }else{
					// 	$("#rightfixTop .topShopcar span").html(nNum);
					// 	$($("#topCon .topright")[0].children[2]).html("<a href=\"#\">购物车"+nNum+"件</a>");
					// }



					// document.getElementById("num").onchange=function(){
		   //              var _reg=/^[1-9]{1}\d*$/g;
		   //              if(!_reg.test(this.value)){
		   //                  _reg.lastIndex=0;
		   //                  if(/^0\d+$/.test(this.value)){
		   //                      this.value=this.value.replace(/^0/,"");
		   //                  }else{
		   //                      this.value=1;
		   //                  }
		   //              }
		   //          }
					


					//商品数量加加
					function numAdd(){
						//console.log($(".numIncrease"));
						$(".numIncrease").click(function(){
							var num=$("#goodsNumber").val();
							

							
							// if(_reg.test(num)==false){
			    //                 _reg.lastIndex=0;
			    //                 if(/^0\d+$/.test(num)){
			    //                     num=Number(num.replace(/^0/,""));
			    //                 }else{
			    //                     num=1;
			    //                 }
			    //             }
			                



			                // $("#goodsNumber").blur(function(){
			                // 	
			                // });
			                

							num++;
							$("#goodsNumber").val(num);
							$(".numDecrease").css("background-position","0 -169px");
							// _read=String(_read);
							// _read=_read.replace("{","");
							// _read=_read.replace("}","");
							// var aRead=_read.split(",");
							// var nNum=parseInt(aRead[1].split(":")[1]);
							// console.log(nNum);
							//nCookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+num+"}","/",dDate);

							//$("#rightfixTop .topShopcar span").html(num);

						});
						
					}



					//商品数量减减
					function numSub(){
						var num=null;
						$(".numDecrease").click(function(){
							//alert(1)
							num=$("#goodsNumber").val();
							// if(num>1){
							// 	num--;
							// 	$("#goodsNumber").val(num);

							// }else{
							// 	num=1;
							// 	$(".numDecrease").css({"background-position":"0 -197px","disabled":"disabled"});
								
							// 	$("#goodsNumber").val(num);
							// }

							// if(_reg.test(num)==false){
			    //                 _reg.lastIndex=0;
			    //                 if(/^0\d+$/.test(num)){
			    //                     num=num.replace(/^0/,"");
			    //                 }else{
			    //                     num=1;
			    //                 }
			    //             }







							if(num>2){
								num--;
								
								$("#goodsNumber").val(num);
							}else{
								num=1;
								$(".numDecrease").css({"background-position":"0 -197px","disabled":"disabled"});
								$("#goodsNumber").val(num);
							}
							//nCookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+num+"}","/",dDate);
						});
						if(num==1){
							$(".numDecrease").css({"background-position":"0 -197px","disabled":"disabled"});
						}
					}

					function addinCar(){
						$(".addincar").click(function(){



							//s--页面加载后购物车数量

							// proid1=nCookie.getCookie("pro1");
							// proid2=nCookie.getCookie("pro2");
							// // console.log(proid1);
							// // console.log(proid2);

							// if(proid1!==null){
							// 	proid1=proid1.replace("{","");
							// 	proid1=proid1.replace("}","");
							// 	var aProid1=proid1.split(",");
							// 	var nNum1=parseInt(aProid1[1].split(":")[1]);
							// }else{
							// 	nNum1=0;
							// }
							// if(proid2!==null){
							// 	proid2=proid2.replace("{","");
							// 	proid2=proid2.replace("}","");
							// 	var aProid2=proid2.split(",");
							// 	var nNum2=parseInt(aProid2[1].split(":")[1]);
							// }else{
							// 	nNum2=0;
							// }
							
							// var nNumtotal=nNum1+nNum2;
							// console.log(nNumtotal);
							// // $($("#topCon .topright")[0].children[2]).html("<li><a href=\"#\">购物车"+nNumtotal+"件</a></li>");
							// // $("#rightfixTop .topShopcar span").html(nNumtotal);
							// // console.log($("#topCon .topright")[0].children[2]);
							// // $($("#topCon .topright")[0].children[2]).html("<a href=\"#\">购物车"+nNumtotal+"件</a>");

							// // _read=String(_read);
							// // _read=_read.replace("{","");
							// // _read=_read.replace("}","");
							// // var aRead=_read.split(",");
							// // console.log(aRead);
							// // var nNum=parseInt(aRead[1].split(":")[1]);
							// // console.log(nNum);



							// //e

							
							// $("#rightfixTop .topShopcar span").html(nNumtotal);
							// $($("#topCon .topright")[0].children[2]).html("<li><a href=\"#\">购物车"+nNumtotal+"件</a></li>");


							//1、点击加入购物车时，先获取input框内的数值
							var num=$("#goodsNumber").val();



							// if(_reg.test(num)==false){
			    //                 _reg.lastIndex=0;
			    //                 if(/^0\d+$/.test(num)){
			    //                     num=parseInt(num.replace(/^0/,""));
			    //                 }else{
			    //                     num=1;
			    //                 }
			    //             }else{
			    //             	num=parseInt(num);
			    //             }

							//2、读取cookie
							var cccookie=new DealCookie();
							var product1=cccookie.getCookie("pro1");
							//console.log(product1);
							product1=product1.replace("{","");
							product1=product1.replace("}","");
							var aRead=product1.split(",");
							//console.log(aRead);
							var nNum=parseInt(aRead[1].split(":")[1]);
							//console.log(nNum);
							var m=parseInt(nNum)+parseInt(num);//数量和
							cccookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+m+"}","/",dDate);
							product1=cccookie.getCookie("pro1");
							var product2=cccookie.getCookie("pro2");



							//console.log(product1);

							//购物车上标改变
							var nnnum2;
							if(product2===null){
								nnnum2=0;
							}else{
								product2=product2.replace("{","");
								product2=product2.replace("}","");
								var aRead2=product2.split(",");
								nnnum2=parseInt(aRead2[1].split(":")[1]);
							}
							
							product1=product1.replace("{","");
							product1=product1.replace("}","");
							var aRead1=product1.split(",");
							var nnnum1=parseInt(aRead1[1].split(":")[1]);
							var nntotal=nnnum1+nnnum2;
							$("#rightfixTop .topShopcar span").html(nntotal);
							$($("#topCon .topright")[0].children[2]).html("<a href=\"#\">购物车"+nntotal+"件</a>");
							

						});
						
					}
					numAdd();
					numSub();
					addinCar();
					




					//e










				}else if(k==="1002"){
					_html+="<div class=\"focus\"><div class=\"bigPicbox\"><a href=\"#\"><img src=\"../images/procontent/prolist2/magnifiger"+data[k]["message"]["bigpicUrl"]+".jpg\" alt=\"\" /><div class=\"magniSpan\"></div></a></div><div class=\"zoombig\"><div class=\"maginzoomBigImgcont\"><div class=\"bigimgcont1\"><img src=\"../images/procontent/prolist2/magnifiger"+data[k]["message"]["bigCont"]+".jpg\" alt=\"\" /></div></div></div><div class=\"picChange\"><div class=\"changeList\"><ul>";

					for(var i=0;i<data[k]["message"]["picchangeUrl"].length;i++){
						if(i==0){
							_html+="<li id=\"picchange1\"><a href=\"javascript:\"><img src=\"../images/procontent/prolist2/magnifiger"+data[k]["message"]["picchangeUrl"][i]+".jpg\" alt=\"\" /></a><i class=\"iborder active\"></i></li>";
						}else{
							_html+="<li id=\"picchange1\"><a href=\"javascript:\"><img src=\"../images/procontent/prolist2/magnifiger"+data[k]["message"]["picchangeUrl"][i]+".jpg\" alt=\"\" /></a><i class=\"iborder\"></i></li>";
						}
					}

					_html+="</ul></div></div></div><div class=\"dealwrap\"><h3 class=\"title\">"+data[k]["message"]["title"]+"</h3><div class=\"salePrice\"><dl><dt>价&nbsp;&nbsp;格：</dt><dd class=\"clearfix\"><span class=\"pro-price\">￥</span><em id=\"coocaa-goods-price\">"+data[k]["message"]["price"]+"</em></dd></dl></div><div class=\"detailInfo\"><dl class=\"distribution\"><dt>配&nbsp;&nbsp;送：</dt><dd class=\"clearfix\"><div class=\"distributionArea\"><div class=\"wrapBox clearfix\"><div class=\"areaSelected\"><span class=\"areaName\">北京</span><div class=\"selectarea\"><a href=\"javascript:\" class=\"close\"></a><ul class=\"select-tab clearfix\"><li class=\"current\"><span>北京</span></li></ul><div class=\"listBox\"><div class=\"areaList clearfix\"><a href=\"javascript:\">北京</a><a href=\"javascript:\">上海</a><a href=\"javascript:\">天津</a><a href=\"javascript:\">重庆</a><a href=\"javascript:\">黑龙江</a><a href=\"javascript:\">辽宁</a><a href=\"javascript:\">吉林</a><a href=\"javascript:\">河北</a><a href=\"javascript:\">内蒙</a><a href=\"javascript:\">陕西</a><a href=\"javascript:\">山西</a><a href=\"javascript:\">甘肃</a><a href=\"javascript:\">宁夏</a><a href=\"javascript:\">新疆</a><a href=\"javascript:\">西藏</a><a href=\"javascript:\">青海</a><a href=\"javascript:\">四川</a><a href=\"javascript:\">云南</a><a href=\"javascript:\">贵州</a><a href=\"javascript:\">湖南</a><a href=\"javascript:\">湖北</a><a href=\"javascript:\">河南</a><a href=\"javascript:\">山东</a><a href=\"javascript:\">安徽</a><a href=\"javascript:\">江苏</a><a href=\"javascript:\">浙江</a><a href=\"javascript:\">广东</a><a href=\"javascript:\">广西</a><a href=\"javascript:\">江西</a><a href=\"javascript:\">福建</a><a href=\"javascript:\">海南</a><a href=\"javascript:\">其它</a></div></div></div><div class=\"area-selectedInfo\">可送达<span>顺丰包邮</span></div></div></div></div></dd></dl><dl class=\"proComment\"><dt>评&nbsp;&nbsp;价：</dt><dd><a href=\"#\" class=\"proreview\">购买评价&nbsp;<span>"+data[k]["message"]["comment"]+"</span></a><span class=\"line\">|</span><a href=\"#\" class=\"buyRecord\">成交记录&nbsp;<span>"+data[k]["message"]["record"]+"</span></a></dd></dl><dl class=\"servicePromise\"><dt>服务保障：</dt><dd class=\"clearfix\">由&nbsp;<span><a href=\"#\">酷开官方旗舰店</a></span>&nbsp;发货并承诺提供以下服务保障</dd><dd><ul class=\"clearfix\"><li><a href=\"#\"><i class=\"iconfont\">&#xe60a;</i>行货保证</a></li><li><a href=\"#\"><i class=\"iconfont\">&#xe604;</i>发票保障</a></li><li><a href=\"#\"><i class=\"iconfont\">&#xe6b8;</i>顺丰包邮</a></li><li><a href=\"#\"><i class=\"iconfont\">&#xe66b;</i>无忧退换</a></li></ul></dd></dl><div class=\"buyCar\"><form><dl class=\"buyNumber\"><dt>购买数量：</dt><dd class=\"clearfix\"><div class=\"buyAmount\"><span class=\"numDecrease\"></span><input type=\"text\" id=\"goodsNumber\" value=\"1\" /><span class=\"numIncrease\"></span></div><span class=\"textPart\">件<em>(限购"+data[k]["message"]["xiangou"]+"件)</em></span><span class=\"wrongTips\">您填写的数量不正确</span></dd></dl><div class=\"buyBtn clearfix\"><a href=\"#\" class=\"buynow\">立即购买</a><a href=\"#\" class=\"addincar\">加入购物车</a></div></form></div></div></div>";

					$("#protop .protopBottom .prodetail").html(_html);

					//s
					dDate.setDate(dDate.getDate()+7);
					proNumber=$("#goodsNumber").val();
					//nCookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+proNumber+"}","/",dDate);
					_read=String(nCookie.getCookie("pro2"));
					//console.log(_read);
					//_read=String(nCookie.getCookie("pro1"));
					_read=_read.replace("{","");
					_read=_read.replace("}","");
					var aRead=_read.split(",");
					var nNum=parseInt(aRead[1].split(":")[1]);
					// if(nNum===1){
					// 	$("#rightfixTop .topShopcar span").html(nNum-1);
					// 	$($("#topCon .topright")[0].children[2]).html("<li><a href=\"#\">购物车0件</a></li>");
					// }else{
					// 	$("#rightfixTop .topShopcar span").html(nNum);
					// 	$($("#topCon .topright")[0].children[2]).html("<li><a href=\"#\">购物车"+nNum+"件</a></li>");
					// }
					


					//商品数量加加
					function numAdd(){
						//console.log($(".numIncrease"));
						$(".numIncrease").click(function(){

							var num=$("#goodsNumber").val();
							//var num=parseInt($("#goodsNumber").val());


							
							// console.log(num);


							// if(_reg.test(num)==false){
			    //                 _reg.lastIndex=0;
			    //                 if(/^0\d+$/.test(num)==true){
			    //                     num=num.replace(/^0/,"");
			    //                     //console.log(1);
			    //                 }else{
			    //                     num=1;
			    //                     //console.log(2);
			    //                 }
			    //             }


							num++;
							$("#goodsNumber").val(num);
							$(".numDecrease").css("background-position","0 -169px");
							// _read=String(_read);
							// _read=_read.replace("{","");
							// _read=_read.replace("}","");
							// var aRead=_read.split(",");
							// var nNum=parseInt(aRead[1].split(":")[1]);
							// console.log(nNum);
							//nCookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+num+"}","/",dDate);

							//$("#rightfixTop .topShopcar span").html(num);

						});

						
						
					}

					
					//商品数量减减
					function numSub(){
						var num=null;
						$(".numDecrease").click(function(){
							//alert(1)
							num=$("#goodsNumber").val();
							// if(num>1){
							// 	num--;
							// 	$("#goodsNumber").val(num);

							// }else{
							// 	num=1;
							// 	$(".numDecrease").css({"background-position":"0 -197px","disabled":"disabled"});
								
							// 	$("#goodsNumber").val(num);
							// }


							// if(_reg.test(num)==false){
			    //                 _reg.lastIndex=0;
			    //                 if(/^0\d+$/.test(num)){
			    //                     num=num.replace(/^0/,"");
			    //                 }else{
			    //                     num=1;
			    //                 }
			    //             }

							if(num>2){
								num--;
								
								$("#goodsNumber").val(num);
							}else{
								num=1;
								$(".numDecrease").css({"background-position":"0 -197px","disabled":"disabled"});
								$("#goodsNumber").val(num);
							}
							//nCookie.editCookie("pro2","{\"proId2\":\"1002\",\"proNum\":"+num+"}","/",dDate);
						});
						if(num==1){
							$(".numDecrease").css({"background-position":"0 -197px","disabled":"disabled"});
						}
					}

					function addinCar(){
						$(".addincar").click(function(){

							//1、点击加入购物车时，先获取input框内的数值
							var num=$("#goodsNumber").val();


							// if(_reg.test(num)==false){
			    //                 _reg.lastIndex=0;
			    //                 if(/^0\d+$/.test(num)){
			    //                     num=num.replace(/^0/,"");
			    //                 }else{
			    //                     num=1;
			    //                 }
			    //             }

							//2、读取cookie
							var cccookie=new DealCookie();
							var product2=cccookie.getCookie("pro2");

							//console.log(product1);
							product2=product2.replace("{","");
							product2=product2.replace("}","");
							var aRead=product2.split(",");
							//console.log(aRead);
							var nNum=parseInt(aRead[1].split(":")[1]);
							//console.log(nNum);
							var m=parseInt(nNum)+parseInt(num);//数量和
							cccookie.editCookie("pro2","{\"proId2\":\"1002\",\"proNum\":"+m+"}","/",dDate);
							product2=cccookie.getCookie("pro2");
							var product1=cccookie.getCookie("pro1");
							//console.log(product1);

							//购物车上标改变

							var nnnum1;
							if(product1===null){
								nnnum1=0;
							}else{
								product1=product1.replace("{","");
								product1=product1.replace("}","");
								var aRead1=product1.split(",");
								nnnum1=parseInt(aRead1[1].split(":")[1]);
							}
							product2=product2.replace("{","");
							product2=product2.replace("}","");
							var aRead2=product2.split(",");
							var nnnum2=parseInt(aRead2[1].split(":")[1]);
							
							var nntotal=nnnum1+nnnum2;
							$("#rightfixTop .topShopcar span").html(nntotal);
							$($("#topCon .topright")[0].children[2]).html("<a href=\"#\">购物车"+nntotal+"件</a>");
							
							
						});
						
					}
					numAdd();
					numSub();
					addinCar();
					//e
				}
			fnmagnifier();
			addList();
			fixUl();
			Louti();

			function shopcarPage(){
				$(".topShopcar")[0].onclick=$("#topCon .topright")[0].children[2].onclick=function(){
					window.open("shopcar.html");
				}
			}
			shopcarPage();

		}
	},"json");
})

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
		var e=e || window.event;

		var left=e.clientX-oSpan[0].offsetWidth/2-oBox[0].offsetLeft-$("#protop .protopBottom .prodetail .focus")[0].offsetLeft;
		if(left<0){
			left=0;
		}else if(left>oBox[0].offsetWidth-oSpan[0].offsetWidth){
			left=oBox[0].offsetWidth-oSpan[0].offsetWidth;
		}
		oSpan.css("left",left+"px");

		var top=e.clientY-oSpan[0].offsetHeight/2-oBox[0].offsetTop-$("#protop .protopBottom .prodetail .focus")[0].offsetTop+(document.documentElement.scrollTop || document.body.scrollTop);
		if(top<0){
			top=0;
		}else if(top>oBox[0].offsetHeight-oSpan[0].offsetHeight){
			top=oBox[0].offsetHeight-oSpan[0].offsetHeight;
		}
		oSpan.css("top",top+"px");
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
	var cCookie=new DealCookie();
	var k=String(cCookie.readCookie("proId"));

	for(var i=0;i<oLi.length;i++){
		oLi[i].index=[i];
		oLi[i].onclick=function(){
			for(var i=0;i<oLi.length;i++){
				oLi[i].children[1].className="border";
			}
			oLi[this.index].children[1].className="active";
			num=Number(this.index)+1;
			if(k=="1001"){
				obigPic.attr("src","../images/procontent/prolist1/magnifiger"+num+".jpg");
				oPic.attr("src","../images/procontent/prolist1/magnifiger"+num+num+".jpg");
			}else if(k=="1002"){
				obigPic.attr("src","../images/procontent/prolist2/magnifiger"+num+".jpg");
				oPic.attr("src","../images/procontent/prolist2/magnifiger"+num+num+".jpg");
			}
			
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



