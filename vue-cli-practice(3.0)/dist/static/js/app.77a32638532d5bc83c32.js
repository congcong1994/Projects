webpackJsonp([1],{"/0uN":function(e,t){},"/kuU":function(e,t){},0:function(e,t){},"8C4o":function(e,t){},EWyr:function(e,t){},MmaJ:function(e,t,n){e.exports=n.p+"static/img/sign.0a8d47f.png"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("kV13"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("C7Lr")({name:"App"},r,!1,function(e){n("8C4o")},null,null).exports,i=n("7LQH"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},s,!1,function(e){n("/0uN")},"data-v-3b884edb",null).exports,u=n("T71r"),c={data:function(){return{futureHideDate:"",arr:[{date:"2019/6/4",className:"mark1"},{date:"2019/6/20",className:"mark2"}]}},components:{Calendar:n.n(u).a},created:function(){this.futureHideDate=this.formatDate()},methods:{formatDate:function(){var e=new Date;return e.setDate(e.getDate()+15),(e.getTime()/1e3).toString()},clickDay:function(e){event.target.getAttribute("class").indexOf("mark")>-1||console.log(e)},changeDate:function(e){console.log(e)}}},d={render:function(){var e=this.$createElement;return(this._self._c||e)("Calendar",{attrs:{futureDayHide:this.futureHideDate,markDateMore:this.arr},on:{choseDay:this.clickDay,changeMonth:this.changeDate}})},staticRenderFns:[]};var p=n("C7Lr")(c,d,!1,function(e){n("wi2R")},null,null).exports,f=n("6xlI"),v={data:function(){return{showImgArr:[],previewImgArr:[]}},created:function(){},methods:{onRead:function(e){console.log(e),this.showImgArr.push(e),this.previewImgArr.push(e)},overSizeFun:function(e){alert("图片过大！")},delCurrentImg:function(e){this.showImgArr.splice(e,1),this.previewImgArr.splice(e,1)},previewCurrentImg:function(e){Object(f.a)({images:[this.previewImgArr[e].content],showIndex:!1,loop:!1})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showImgArr.length>0?n("div",e._l(e.showImgArr,function(t,a){return n("div",{key:a},[n("img",{attrs:{src:t.content,alt:""},on:{click:function(t){return e.previewCurrentImg(a)}}}),e._v(" "),n("van-icon",{attrs:{name:"delete"},on:{click:function(t){return e.delCurrentImg(a)}}})],1)}),0):e._e(),e._v(" "),n("van-uploader",{attrs:{"after-read":e.onRead,accept:"image/*","max-size":5242880},on:{oversize:e.overSizeFun}},[n("van-icon",{attrs:{name:"photograph"}})],1)],1)},staticRenderFns:[]};var g=n("C7Lr")(v,h,!1,function(e){n("ymjC")},"data-v-6fcdf7e3",null).exports,m={data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/webm",src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"}],poster:"../assets/logo.png",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0},fullscreen:{options:{navigationUI:"show"}}}}},mounted:function(){console.log("this is current player instance object",this.player)},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay:function(e){},onPlayerPause:function(e){console.log(e)},onPlayerEnded:function(e){console.log(e)},onPlayerWaiting:function(e){console.log(e)},onPlayerPlaying:function(e){console.log(e)},onPlayerLoadeddata:function(e){console.log(e)},onPlayerTimeupdate:function(e){console.log(e)},onPlayerCanplay:function(e){console.log(e)},onPlayerCanplaythrough:function(e){console.log(e)},playerStateChanged:function(e){console.log(e)},playerReadied:function(){}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions},on:{play:function(t){return e.onPlayerPlay(t)},pause:function(t){return e.onPlayerPause(t)},ended:function(t){return e.onPlayerEnded(t)},waiting:function(t){return e.onPlayerWaiting(t)},playing:function(t){return e.onPlayerPlaying(t)},loadeddata:function(t){return e.onPlayerLoadeddata(t)},timeupdate:function(t){return e.onPlayerTimeupdate(t)},canplay:function(t){return e.onPlayerCanplay(t)},canplaythrough:function(t){return e.onPlayerCanplaythrough(t)},statechanged:function(t){return e.playerStateChanged(t)},ready:e.playerReadied}})],1)},staticRenderFns:[]};var y=n("C7Lr")(m,_,!1,function(e){n("EWyr")},"data-v-a1ebb1e8",null).exports,C={data:function(){return{option:{penColor:"#1989fa",backgroundColor:"#fff"},initBackImg:n("MmaJ")}},methods:{save:function(){var e=this.$refs.signature.save();console.log(e)},clear:function(){this.$refs.signature.clear()}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"canvas-test-wrapper"},[n("van-nav-bar",{attrs:{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":""}}),e._v(" "),n("div",{staticClass:"canvasBox"},[n("div",{staticClass:"button-box"},[n("button",{on:{click:e.save}},[e._v("保存")]),e._v(" "),n("button",{on:{click:e.clear}},[e._v("清除")])]),e._v(" "),n("div",{staticClass:"canvas-box"},[n("vueSignature",{ref:"signature",attrs:{sigOption:e.option,defaultUrl:e.initBackImg}})],1)])],1)},staticRenderFns:[]};var k=n("C7Lr")(C,b,!1,function(e){n("cLEA")},"data-v-48f52dd2",null).exports;a.a.use(i.a);var w=new i.a({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/calendar",name:"Calendar",component:p},{path:"/uploader",name:"Uploader",component:g},{path:"/video",name:"Video",component:y},{path:"/canvas",name:"Canvas",component:k}]}),P=(n("Z7KP"),n("CRWL")),D=n.n(P),x=n("jFBR"),I=n.n(x);n("/kuU"),n("r8N3"),a.a.config.productionTip=!1,a.a.use(f.b),a.a.use(D.a),a.a.use(I.a),new a.a({el:"#app",router:w,components:{App:o},template:"<App/>"})},Z7KP:function(e,t){},cLEA:function(e,t){},r8N3:function(e,t){},wi2R:function(e,t){},ymjC:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.77a32638532d5bc83c32.js.map