<?php
error_reporting(E_ALL || ~E_NOTICE);
header("Content-type:text/html; charset=utf-8");
require_once "../sdk/jssdk.php";
$jssdk = new JSSDK("wx371a32ce98c564d5", "f7c84e9ad635421d17ae42625e9e51b9");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
		<title></title>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script type="text/javascript">
			//通过config接口注入权限验证配置
			wx.config({
			    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			    appId: '<?php echo $signPackage["appId"];?>', // 必填，公众号的唯一标识
			    timestamp: '<?php echo $signPackage["timestamp"];?>', // 必填，生成签名的时间戳
			    nonceStr: '<?php echo $signPackage["nonceStr"];?>', // 必填，生成签名的随机串
			    signature: '<?php echo $signPackage["signature"];?>',// 必填，签名
			    jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表
			});
			//通过ready接口处理成功验证
//			wx.ready(function(){
//				// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后
//			});
		</script>
	</head>
	<body>
		<button id="chooseIMG">选择图片</button>
		<div id="imgBox"></div>
		<script>
			wx.ready(function(){
				document.getElementById("chooseIMG").onclick=function(){
					wx.chooseImage({
						count: 1, // 默认9
    					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    					success: function (res) {
        					var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        					alert(localIds);
        					var thisimg=new Image();
        					thisimg.src=localIds;
        					thisimg.onload=function(){
        						document.getElementById("imgBox").appendChild(thisimg);
        					}
    					}
					});
				};
			});
		</script>
	</body>
</html>
