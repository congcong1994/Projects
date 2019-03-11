$(function(){
	//创建订单列表
	$.post("../json/product.json",function load(data,textStatus){
		if(textStatus=="success"){
			data=window.eval(data);
			var dDate=new Date();
			dDate.setDate(dDate.getDate()+7);
			var oTbody=$(".orderList .cell2 .goods tbody");
			var oUl=$(".addressList");
			var ccookie=new DealCookie();


			var aCheck=[],aReceiver=[],aProvince=[],aCity=[],aCountry=[],aAddress=[],aMobilephone=[];
			if(ccookie.getCookie("check")===null){
				aCheck=[];
				$(".addressList .addEdits").css("display","block");
				$(".add-address").css("display","none");
			}else if(ccookie.getCookie("check")===""){
				aCheck=[];
				$(".addressList .addEdits").css("display","block");
				$(".add-address").css("display","none");
			}else{
				aCheck.push(ccookie.getCookie("check"));
				$(".addressList .addEdits").removeClass("nowBox");
				$(".addressList .addEdits").css("display","none");
				$(".add-address").css("display","block");
			}

			if(ccookie.getCookie("receiver")===null){
				aReceiver=[];
			}else{
				aReceiver.push(ccookie.getCookie("receiver"));
			}

			if(ccookie.getCookie("province")===null){
				aProvince=[];
			}else{
				aProvince.push(ccookie.getCookie("province"));
			}

			if(ccookie.getCookie("city")===null){
				aCity=[];
			}else{
				aCity.push(ccookie.getCookie("city"));
			}

			if(ccookie.getCookie("country")===null){
				aCountry=[];
			}else{
				aCountry.push(ccookie.getCookie("country"));
			}

			if(ccookie.getCookie("address")===null){
				aAddress=[];
			}else{
				aAddress.push(ccookie.getCookie("address"));
			}

			if(ccookie.getCookie("mobilephone")===null){
				aMobilephone=[];
			}else{
				aMobilephone.push(ccookie.getCookie("mobilephone"));
			}

			// console.log(aMobilephone instanceof Array);
			// console.log(eval(aMobilephone).length);
			// var ccc=document.cookie;
			// ccc=ccc.split("; ");
			//console.log(ccc);
			// aaa1=ccc[ccc.length-1];
			// console.log(aaa1);
			// aaa1=aaa1.split("=");
			// console.log(aaa1);
			// console.log(aaa1[1]);
			// console.log(aaa1[1].length);
			// function sliceArr(array, size) {
   //              var result = [];
   //              for (var x = 0; x < Math.ceil(array.length / size); x++) {
   //                  var start = x * size;
   //                  var end = start + size;
   //                  result.push(array.slice(start, end));
   //              }
   //              return result;
   //          }
   //          var aaa=sliceArr(ccc,1);

   //          console.log(aaa);





   			if(ccookie.getCookie("check")===null && ccookie.getCookie("receiver")===null && ccookie.getCookie("province")===null && ccookie.getCookie("city")===null && ccookie.getCookie("country")===null && ccookie.getCookie("address")===null && ccookie.getCookie("mobilephone")===null){
   				$(".addressList .addEdits").css("display","block");
				$(".add-address").css("display","none");
				$(".addressList .addEdits").addClass("nowBox");
   			}else{
   				var amobile=ccookie.getCookie("mobilephone");
				aamobile=amobile.split(",");
				



				var oLi=document.createElement("li");
				oLi.className="current";

				if(aamobile.length===1){
					if(aCheck[0]==="1"){
						oLi.innerHTML="<label><input type=\"radio\" checked=\"checked\" name=\"addressCheck\" /><span><strong>[默认]<em>"+aReceiver[0]+"</em></strong></span>"+aProvince[0]+" "+aCity[0]+" "+aCountry[0]+" "+aAddress[0]+" "+aMobilephone[0]+"</label><div class=\"operate\"><a href=\"javascript:\">编辑</a><a href=\"javascript:\">删除</a></div>";
						$(oLi).addClass("nowBox");
					}else if(aCheck[0]==="0"){
						oLi.innerHTML="<label><input type=\"radio\" name=\"addressCheck\" /><span><strong><em>"+aReceiver[0]+"</em></strong></span>"+aProvince[0]+" "+aCity[0]+" "+aCountry[0]+" "+aAddress[0]+" "+aMobilephone[0]+"</label><div class=\"operate\"><a href=\"javascript:\">编辑</a><a href=\"javascript:\">删除</a></div>";
					}
					oUl.append(oLi);
				}else{
					var areceiver=ccookie.getCookie("receiver").split(",");
					var aprovince=ccookie.getCookie("province").split(",");
					var acity=ccookie.getCookie("city").split(",");
					var acountry=ccookie.getCookie("country").split(",");
					var aaddress=ccookie.getCookie("address").split(",");
					var acheck=ccookie.getCookie("check").split(",");
					// console.log(areceiver);
					// console.log(aprovince);
					// console.log(acity);
					// console.log(acountry);
					// console.log(aaddress);
					// console.log(acheck);

					for(var i=0;i<aamobile.length;i++){

						if(aamobile.length[i]!==""){
							//console.log(1);
							var oLi=document.createElement("li");
							oLi.className="current";
							aamobile[i].index=i;
							//console.log(i);
							if(acheck[i]==="1"){
								//console.log(2);
								oLi.innerHTML="<label><input type=\"radio\" checked=\"checked\" name=\"addressCheck\" /><span><strong>[默认]<em>"+areceiver[i]+" </em></strong></span>"+aprovince[i]+" "+acity[i]+" "+acountry[i]+" "+aaddress[i]+" "+aamobile[i]+"</label><div class=\"operate\"><a href=\"javascript:\">编辑</a><a href=\"javascript:\">删除</a></div>";
								$(oLi).addClass("nowBox");
							}else if(acheck[i]==="0"){
								//console.log(3);
								oLi.innerHTML="<label><input type=\"radio\" name=\"addressCheck\" /><span><strong><em>"+areceiver[i]+" </em></strong></span>"+aprovince[i]+" "+acity[i]+" "+acountry[i]+" "+aaddress[i]+" "+aamobile[i]+"</label><div class=\"operate\"><a href=\"javascript:\">编辑</a><a href=\"javascript:\">删除</a></div>";
							}
							oUl.append(oLi);
						}
						
					}
					oUl.children().eq(1).addClass("nowBox");
				}
   			}


			



			

			//var aCheck=[],aReceiver=[],aProvince=[],aCity=[],aCountry=[],aAddress=[],aMobilephone=[];
			var pro1Price=data["1001"]["message"]["price"];//pro1单价
			var pro2Price=data["1002"]["message"]["price"];//pro2单价
			
			var product1=ccookie.getCookie("pro1");
			var product2=ccookie.getCookie("pro2");
			var aProid1,aProid2,nNum1,nNum2,num1,num2;
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

			//pro1总价
			var pro1Total=pro1Price*nNum1;
			//pro2总价
			var pro2Total=pro2Price*nNum2;
			//产品总价
			var priceTotal=pro1Total+pro2Total;
			// console.log(nNum1);
			// console.log(nNum2);
			// console.log(pro1Total);
			// console.log(pro2Total);
			// console.log(priceTotal);
			$("#goods-total-price").html(priceTotal);
			$("#total-price").html(priceTotal);

			

			//创建产品1订单
			if(product1!==null){
				if(nNum1!==0){
					var oTr1=document.createElement("tr");
					oTr1.innerHTML="<td class=\"infor\"><a href=\"#\" target=\"_blank\" class=\"pic\"><img width=\"60\" height=\"60\" src=\"../images/orderPage/orderpage1.jpg\" /></a><h3 class=\"title\"><a href=\"#\" target=\"_blank\">酷开（coocaa）U50 50英寸闪电4K 超高清智能液晶平板电视 酷开系统 WIFI(黑色)</a></h3></td><td class=\"colorSuits\">-</td><td class=\"saletype\">-</td><td class=\"price\">￥2399</td><td>-</td><td class=\"proNumber\">"+nNum1+"</td><td class=\"totalPrice\">￥"+pro1Total+"</td>";
					oTbody.append(oTr1);
				}
			}

			//创建产品2订单
			if(product2!==null){
				if(nNum2!==0){
					var oTr2=document.createElement("tr");
					oTr2.innerHTML="<td class=\"infor\"><a href=\"#\" target=\"_blank\" class=\"pic\"><img width=\"60\" height=\"60\" src=\"../images/orderPage/orderpage2.jpg\" /></a><h3 class=\"title\"><a href=\"#\" target=\"_blank\"> 酷开(coocaa)40K2 青年小K 40英寸全高清智能网络液晶电视机WiFi(黑)</a></h3></td><td class=\"colorSuits\">-</td><td class=\"saletype\">-</td><td class=\"price\">￥1599</td><td>-</td><td class=\"proNumber\">"+nNum2+"</td><td class=\"totalPrice\">￥"+pro2Total+"</td>";
					oTbody.append(oTr2);
				}
			}

			//收货人地址
			var buyerName,areaProvince,areaCity,areaCountry,address,mobileNum;
			$("#deliverName").blur(function(){
				buyerName=$("#deliverName").val();
				if(buyerName===""){
					$("#deliverNameTips").removeClass("none");
				}else{
					$("#deliverNameTips").addClass("none");
					aReceiver.push(buyerName);
				}
			});

			
			$("#s_province").blur(function(){
				areaProvince=$("#s_province").val();
				if(areaProvince==="省份"){
					alert("请选择省份");
				}else{
					aProvince.push(areaProvince);
				}
			});

			$("#s_city").blur(function(){
				areaCity=$("#s_city").val();
				if(areaCity==="地级市"){
					alert("请选择地级市");
				}else{
					aCity.push(areaCity);
				}
			});

			$("#s_county").blur(function(){
				areaCountry=$("#s_county").val();
				if(areaCountry==="市、县级市"){
					alert("请选择市、县级市");
				}else{
					aCountry.push(areaCountry);
				}
			});

			$("#deliverAddress").blur(function(){
				address=$("#deliverAddress").val();
				var addLength=address.length;
				if(addLength<5 || addLength>30){
					$("#deliverAddressTips").removeClass("none");
				}else{
					$("#deliverAddressTips").addClass("none");
					aAddress.push(address);
				}
			});

			$("#deliverMobile").blur(function(){
				mobileNum=$("#deliverMobile").val();
				var _reg=/^((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9]){1,3})([0-9]{8})$/;
				if(_reg.test(mobileNum)==false){
					$("#deliverMobileTips").removeClass("none");
				}else{
					$("#deliverMobileTips").addClass("none");
					aMobilephone.push(mobileNum);
				}
			});

			$("#deliverButton").click(function(){
				if($("#deliverMobileTips").has("none") && $("#deliverAddressTips").has("none") && $("#deliverNameTips").has("none") && areaProvince!=="省份" && areaCity!=="地级市" && areaCountry!=="市、县级市"){
					if($("#deliverDefault").is(":checked")){
						aCheck.push("1");
						ccookie.editCookie("check",aCheck,"/",dDate);
					}else{
						aCheck.push("0");
						ccookie.editCookie("check",aCheck,"/",dDate);
					}
					ccookie.editCookie("receiver",aReceiver,"/",dDate);
					ccookie.editCookie("province",aProvince,"/",dDate);
					ccookie.editCookie("city",aCity,"/",dDate);
					ccookie.editCookie("country",aCountry,"/",dDate);
					ccookie.editCookie("address",aAddress,"/",dDate);
					ccookie.editCookie("mobilephone",aMobilephone,"/",dDate);

					$(".addressList .addEdits").css("display","none");

					var sReceiver=ccookie.getCookie("receiver");
					var sCheck=ccookie.getCookie("check");
					var sProvince=ccookie.getCookie("province");
					var sCity=ccookie.getCookie("city");
					var sCountry=ccookie.getCookie("country");
					var sAddress=ccookie.getCookie("address");
					var sMobilephone=ccookie.getCookie("mobilephone");

					var aaReceiver=sReceiver.split(",");
					var aaCheck=sCheck.split(",");
					var aaProvince=sProvince.split(",");
					var aaCity=sCity.split(",");
					var aaCountry=sCountry.split(",");
					var aaAddress=sAddress.split(",");
					var aaMobilephone=sMobilephone.split(",");


					var oLi=document.createElement("li");
					oLi.className="current";

					if(aaCheck[aaCheck.length-1]==="1"){
						oLi.innerHTML="<label><input type=\"radio\" checked=\"checked\" name=\"addressCheck\" /><span><strong>[默认]<em>"+aaReceiver[aaReceiver.length-1]+" </em></strong></span>"+aaProvince[aaProvince.length-1]+" "+aaCity[aaCity.length-1]+" "+aaCountry[aaCountry.length-1]+" "+aaAddress[aaAddress.length-1]+" "+aaMobilephone[aaMobilephone.length-1]+"</label><div class=\"operate\"><a href=\"javascript:\">编辑</a><a href=\"javascript:\">删除</a></div>";
						$(oLi).addClass("nowBox");
					}else if(aaCheck[aaCheck.length-1]==="0"){
						oLi.innerHTML="<label><input type=\"radio\" name=\"addressCheck\" /><span><strong><em>"+aaReceiver[aaReceiver.length-1]+" </em></strong></span>"+aaProvince[aaProvince.length-1]+" "+aaCity[aaCity.length-1]+" "+aaCountry[aaCountry.length-1]+" "+aaAddress[aaAddress.length-1]+" "+aaMobilephone[aaMobilephone.length-1]+"</label><div class=\"operate\"><a href=\"javascript:\">编辑</a><a href=\"javascript:\">删除</a></div>";
					}
					oUl.append(oLi);
					$(".add-address").css("display","block");


					// var oLi=document.createElement("li");
					// oLi.className="current";
					// oLi.innerHTML="<label><input type=\"radio\" checked=\"checked\" /><span><strong><em>username</em></strong></span></label><div class=\"operate\"><a href=\"javascript:\">编辑</a><a href=\"javascript:\">删除</a></div>";
				}else{
					alert("请完善相关资料");
				}
			});

			$(".addressList .current label").click(function(){
				$(".addressList .current").not(this).removeClass("nowBox");
				$(".add-address").removeClass("nowBox");
				$(this).parent().addClass("nowBox");
			});

			$(".add-address").click(function(){
				$(this).siblings(".addressList").children().removeClass("nowBox");
				//$(this).addClass("nowBox");
				$(this).css("display","none");
				$(".addEdits").css("display","block");
				$(".addEdits").attr("checked","checked");
				$(".addEdits").addClass("nowBox");
				$(".addEdits .saveBtn").click(function(){
					$("#deliverButton").click;
					$(".add-address").css("display","block");
				});
			});


			
			//删除按钮
			for(var i=0;i<$(".operate").children().length;i++){
				$(".operate").children().index=i;
				if(i%2!=0){
					$(".operate").children().eq(i).click(function(){
						$(this).parent().parent().css("display","none");
						//$(this).parent().parent()找到父元素li
						var oLi=$(this).parent().parent();
						//获取到strong标签，是否默认，收件人姓名
						var oStrong=oLi.children().eq(0).children().eq(1).children();
						//获取em标签，即收件人姓名
						var oEm=oStrong.children().html();//收件人姓名
						//获取是否默认
						//var oStronginner=oStrong.html().replace("<em></em>","");
						var oStronginner=oStrong.html();
						var checkNot;//是否默认
						oStronginner=oStronginner.split("<em>")[0];
						if(oStronginner===""){
							checkNot=0;
						}else{
							checkNot=1;
						}

						var oLocation=oLi.children().eq(0).html();
						var aLocation=oLocation.split("</span>")[1].split(" ");
						var oPro,oCi,oCoun,oAdd,oMobile;
						oPro=aLocation[0];//省
						oCi=aLocation[1];//市
						oCoun=aLocation[2];//县
						oAddress=aLocation[3];//详细地址
						oMobile=aLocation[4];//手机号
						oEm=$.trim(oEm);
						// console.log(checkNot);
						// console.log(oEm);
						// console.log(typeof oEm);
						// console.log(oPro);
						// console.log(oCi);
						// console.log(oCoun);
						// console.log(oMobile);
						// console.log(typeof oMobile);

						//读取cookie
						var aRece=ccookie.getCookie("receiver").split(",");
						var aChe=ccookie.getCookie("check").split(",");
						var aPro=ccookie.getCookie("province").split(",");
						var aCi=ccookie.getCookie("city").split(",");
						var aCoun=ccookie.getCookie("country").split(",");
						var aAdd=ccookie.getCookie("address").split(",");
						var aMob=ccookie.getCookie("mobilephone").split(",");
						// console.log(aRece);
						// console.log(aChe);
						// console.log(aPro);
						// console.log(aCi);
						// console.log(aCoun);
						// console.log(aAdd);
						// console.log(aMob);
						for(var i=0;i<aRece.length;i++){
							if(aRece[i]==oEm){
								aRece[i]="";
							}
							
							// console.log(window.encodeURIComponent(oEm));
							// console.log(window.encodeURIComponent(aRece[0]));
							if(aChe[i]==checkNot){
								aChe[i]="";
							}
							if(aPro[i]==oPro){
								aPro[i]="";
							}
							if(aCi[i]==oCi){
								aCi[i]="";
							}
							if(aCoun[i]==oCoun){
								aCoun[i]="";
							}
							if(aAdd[i]==oAddress){
								aAdd[i]="";
							}
							if(aMob[i]==oMobile){
								aMob[i]="";
							}
						}
						console.log(aRece);
						console.log(aChe);
						console.log(aPro);
						console.log(aCi);
						console.log(aCoun);
						console.log(aAdd);
						console.log(aMob);
						ccookie.editCookie("receiver",aRece,"/",dDate);
						ccookie.editCookie("check",aChe,"/",dDate);
						ccookie.editCookie("province",aPro,"/",dDate);
						ccookie.editCookie("city",aCi,"/",dDate);
						ccookie.editCookie("country",aCoun,"/",dDate);
						ccookie.editCookie("address",aAdd,"/",dDate);
						ccookie.editCookie("mobilephone",aMob,"/",dDate);
					});
				}
			}
			

			
		}
	},"json");
})