$(function(){
	$.post("../json/product.json",function load(data,textStatus){
		if(textStatus=="success"){
			data=window.eval(data);
			var dDate=new Date();
			dDate.setDate(dDate.getDate()+7);
			var pro1Price=data["1001"]["message"]["price"];//pro1单价
			var pro2Price=data["1002"]["message"]["price"];//pro2单价
			var ccookie=new DealCookie();
			var product1=ccookie.getCookie("pro1");
			var product2=ccookie.getCookie("pro2");
			var aProid1,aProid2,nNum1,nNum2,num1,num2;
			var _reg=/^[1-9]{1}\d*$/g;//正则匹配条件
			if(product1!=null){
				product1=product1.replace("{","");
				product1=product1.replace("}","");
				aProid1=product1.split(",");
				nNum1=parseInt(aProid1[1].split(":")[1]);//pro1的数
			}else{
				nNum1=0;
				num1=0;
			}
			if(product2!=null){
				product2=product2.replace("{","");
				product2=product2.replace("}","");
				aProid2=product2.split(",");
				nNum2=parseInt(aProid2[1].split(":")[1]);//pro2的数
			}else{
				nNum2=0;
				num2=0;
			}
			
			
			//获取tbody
			var oTbody=$("tbody");

			//pro1总价
			var pro1Total=pro1Price*nNum1;
			//pro2总价
			var pro2Total=pro2Price*nNum2;
			var priceTotal=pro1Total+pro2Total;
			$(".rmbNum").html(priceTotal);


			if(product1!==null){
				if(nNum1!==0){
					var oTr1=document.createElement("tr");
					oTr1.className="proDesc pro1";
					oTr1.innerHTML="<td colspan=\"2\" class=\"proInfo clearfix\"><input type=\"checkbox\" name=\"proId\" /><a class=\"picbox\" href=\"#\"><img src=\"../images/shopcar/shop1.jpg\" alt=\"\" /></a><div class=\"infoBox\"><h3><a href=\"#\" title=\"酷开(coocaa) U50 50英寸闪电4K 超高清智能液晶平板电视 酷开系统 WIFI(黑色)\">酷开(coocaa) U50 50英寸闪电4K 超高清智能液晶平板电视 酷开系统 WIFI(黑色)</a></h3><div class=\"service clearfix\"><a href=\"#\"></a></div></div></td><td class=\"price\"><span>2399</span></td><td class=\"buyNum\"><div class=\"buynumber\"><a href=\"#\" class=\"minus\">-</a><input type=\"text\" class=\"textNum\" value=\""+nNum1+"\" /><a href=\"#\" class=\"plus\">+</a></div></td><td class=\"youhui\"><div>--</div></td><td class=\"s-total\"><span class=\"price\">"+pro1Total+"</span></td><td class=\"deletePro\"><div class=\"deletebox\"><a href=\"#\">移入收藏夹</a><a href=\"#\" class=\"deleteBtn\">删除</a></div></td>";
					oTbody.append(oTr1);
				}
			}

			if(product2!==null){
				if(nNum2!==0){
					var oTr2=document.createElement("tr");
					oTr2.className="proDesc pro2";
					oTr2.innerHTML="<td colspan=\"2\" class=\"proInfo clearfix\"><input type=\"checkbox\" name=\"proId\" /><a class=\"picbox\" href=\"#\"><img src=\"../images/shopcar/shop2.jpg\" alt=\"\" /></a><div class=\"infoBox\"><h3><a href=\"#\" title=\"酷开(coocaa)40K2 青年小K 40英寸全高清智能网络液晶电视机WiFi(黑)\">酷开(coocaa)40K2 青年小K 40英寸全高清智能网络液晶电视机WiFi(黑)</a></h3><div class=\"service clearfix\"><a href=\"#\"></a></div></div></td><td class=\"price\"><span>1599</span></td><td class=\"buyNum\"><div class=\"buynumber\"><a href=\"#\" class=\"minus\">-</a><input type=\"text\" class=\"textNum\" value=\""+nNum2+"\" /><a href=\"#\" class=\"plus\">+</a></div></td><td class=\"youhui\"><div>--</div></td><td class=\"s-total\"><span class=\"price\">"+pro2Total+"</span></td><td class=\"deletePro\"><div class=\"deletebox\"><a href=\"#\">移入收藏夹</a><a href=\"#\" class=\"deleteBtn\">删除</a></div></td>";
					oTbody.append(oTr2);
				}
			}

			$(".rmbNum").html(priceTotal);
			//产品1点击减号事件
			$(".pro1 .minus").click(function(){
				if(nNum1<=1){
					nNum1=1;
				}else{
					nNum1--;
				}
				
				$(".pro1 .textNum").val(nNum1);
				ccookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+nNum1+"}","/",dDate);
				pro1Total=pro1Price*nNum1;
				$(".pro1 .s-total .price").html(pro1Total);
				//pro1总价
				pro1Total=pro1Price*nNum1;
				//pro2总价
				pro2Total=pro2Price*nNum2;
				priceTotal=pro1Total+pro2Total;
				$(".rmbNum").html(priceTotal);
			});

			$(".pro2 .minus").click(function(){
				if(nNum2<=1){
					nNum2=1;
				}else{
					nNum2--;
				}
				
				$(".pro2 .textNum").val(nNum2);
				ccookie.editCookie("pro2","{\"proId2\":\"1002\",\"proNum\":"+nNum2+"}","/",dDate);
				pro2Total=pro2Price*nNum2;
				$(".pro2 .s-total .price").html(pro2Total);
				//pro1总价
				pro1Total=pro1Price*nNum1;
				//pro2总价
				pro2Total=pro2Price*nNum2;
				priceTotal=pro1Total+pro2Total;
				$(".rmbNum").html(priceTotal);
			});

			$(".pro1 .plus").click(function(){
				nNum1++;
				
				$(".pro1 .textNum").val(nNum1);
				ccookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+nNum1+"}","/",dDate);
				pro1Total=pro1Price*nNum1;
				$(".pro1 .s-total .price").html(pro1Total);
				//pro1总价
				pro1Total=pro1Price*nNum1;
				//pro2总价
				pro2Total=pro2Price*nNum2;
				priceTotal=pro1Total+pro2Total;
				$(".rmbNum").html(priceTotal);
			});

			$(".pro2 .plus").click(function(){
				nNum2++;
				
				$(".pro2 .textNum").val(nNum2);
				ccookie.editCookie("pro2","{\"proId2\":\"1002\",\"proNum\":"+nNum2+"}","/",dDate);
				pro2Total=pro2Price*nNum2;
				$(".pro2 .s-total .price").html(pro2Total);
				//pro1总价
				pro1Total=pro1Price*nNum1;
				//pro2总价
				pro2Total=pro2Price*nNum2;
				priceTotal=pro1Total+pro2Total;
				$(".rmbNum").html(priceTotal);
			});

			$(".pro1 .deleteBtn").click(function(){
				ccookie.delCookie("pro1","/");
				$(".pro1").remove();
				$(".rmbNum").html(pro2Total);
				product1=ccookie.getCookie("pro1");
				product2=ccookie.getCookie("pro2");
				if(product1==null && product2==null){
					$(".rmbNum").html("0.00");
				}
			});

			$(".pro2 .deleteBtn").click(function(){
				ccookie.delCookie("pro2","/");
				$(".pro2").remove();				
				$(".rmbNum").html(pro1Total);
				product1=ccookie.getCookie("pro1");
				product2=ccookie.getCookie("pro2");
				if(product1==null && product2==null){
					$(".rmbNum").html("0.00");
				}
			});

			$(".pro1 .textNum").blur(function(){
				console.log(1);
				num1=$(".pro1 .textNum").val();

				if(_reg.test(num1)==false){
                    _reg.lastIndex=0;
                    if(/^0\d+$/.test(num1)){
                        num1=num1.replace(/^0/,"");
                    }else{
                        num1=1;
                    }
                }

                ccookie.editCookie("pro1","{\"proId1\":\"1001\",\"proNum\":"+num1+"}","/",dDate);
				pro1Total=pro1Price*num1;
				$(".pro1 .s-total .price").html(pro1Total);
				//pro1总价
				pro1Total=pro1Price*num1;
				//pro2总价
				pro2Total=pro2Price*num2;
				priceTotal=pro1Total+pro2Total;
				
				$(".pro1 .s-total .price").html(pro1Total);
				$(".rmbNum").html(priceTotal);

			});

			$(".pro2 .textNum").blur(function(){

				num2=$(".pro2 .textNum").val();

				if(_reg.test(num2)==false){
                    _reg.lastIndex=0;
                    if(/^0\d+$/.test(num2)){
                        num2=num2.replace(/^0/,"");
                    }else{
                        num2=1;
                    }
                }

                ccookie.editCookie("pro2","{\"proId2\":\"1002\",\"proNum\":"+num2+"}","/",dDate);
				pro1Total=pro1Price*num1;
				$(".pro1 .s-total .price").html(pro1Total);
				//pro1总价
				pro1Total=pro1Price*num1;
				//pro2总价
				pro2Total=pro2Price*num2;
				priceTotal=pro1Total+pro2Total;
				
				$(".pro2 .s-total .price").html(pro2Total);
				$(".rmbNum").html(priceTotal);
			});

			product1=ccookie.getCookie("pro1");
			product2=ccookie.getCookie("pro2");
			if(product1==null && product2==null){
				$(".rmbNum").html("0.00");
			}

			$(".calcBtn").click(function(){
				window.open("orderPage.html");
			});
		}
	},"json");
})
