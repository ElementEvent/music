webpackJsonp([0],{0:function(n,t){},"0WW7":function(n,t){},"7MnH":function(n,t){},"8Y+6":function(n,t){},A37m:function(n,t,e){n.exports=e.p+"static/media/yiluxiangbei.98b304e.mp3"},GFXi:function(n,t){},Lxck:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("7+uW"),s={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},s,!1,function(n){e("Ykoy")},null,null).exports,o=e("LyPZ"),c=e("/ocq"),r={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("header",{class:this.muiscClass},[this._v(this._s(this.title))])])},staticRenderFns:[]};var u=e("VU/8")({name:"appheader",props:["title","muisc-class"]},r,!1,function(n){e("isB8")},"data-v-0cbc8b42",null).exports,l={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("footer",[e("ul",{staticClass:"tabList"},[e("li",{on:{click:function(t){n.getIndex(1)}}},[e("router-link",{attrs:{to:"/index"}},[e("i",{staticClass:"iconfont",class:1===n.index?"icon-homepage_fill":"icon-homepage"}),n._v("\n          首页\n        ")])],1),n._v(" "),e("li",{on:{click:function(t){n.getIndex(2)}}},[e("router-link",{attrs:{to:"/MusicListParent"}},[e("i",{staticClass:"iconfont",class:2===n.index?"icon-browse_fill":"icon-browse"}),n._v("\n         发现\n       ")])],1),n._v(" "),e("li",{on:{click:function(t){n.getIndex(3)}}},[e("router-link",{attrs:{to:"/diary"}},[e("i",{staticClass:"iconfont",class:3===n.index?"icon-select_fill":"icon-select"}),n._v("\n          开发日志\n        ")])],1),n._v(" "),e("li",{on:{click:function(t){n.getIndex(4)}}},[e("router-link",{attrs:{to:"/us"}},[e("i",{staticClass:"iconfont",class:4===n.index?"icon-people_fill":"icon-people"}),n._v("\n          关于我\n        ")])],1)])])])},staticRenderFns:[]};var d={render:function(){var n=this.$createElement;return(this._self._c||n)("router-view")},staticRenderFns:[]};var m={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"loding-box",on:{click:function(t){n.hide()}}},[e("div",{staticClass:"loding-body"},[n._m(0),n._v(" "),e("div",{staticClass:"text-body"},[e("p",{staticClass:"text"},[n._v(n._s(n.msg))]),n._v(" "),e("p",{staticClass:"text-show"},[n._v(n._s(n.msg))])])])])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"loding"},[t("span",{staticClass:"X1"}),this._v(" "),t("span",{staticClass:"X2"}),this._v(" "),t("span",{staticClass:"X3"})])}]};var h={name:"Home",data:function(){return{isLodingShow:!0}},components:{"app-header":u,"app-footer":e("VU/8")({name:"appfooter",props:["lodingShow"],data:function(){return{index:1}},methods:{getIndex:function(n){this.index=n}}},l,!1,function(n){e("Lxck")},"data-v-1635100b",null).exports,"app-main":e("VU/8")({name:"appmain"},d,!1,function(n){e("iNHb")},"data-v-13ade2ed",null).exports,loding:e("VU/8")({name:"Loding",data:function(){return{msg:"我的过去常常在追赶着我。"}},methods:{hide:function(){this.$emit("parentHide")}}},m,!1,function(n){e("mq33")},"data-v-5f519ff4",null).exports},methods:{hide:function(){this.isLodingShow=!1}}},p={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticStyle:{height:"100%"}},[e("loding",{directives:[{name:"show",rawName:"v-show",value:n.isLodingShow,expression:"isLodingShow"}],on:{parentHide:function(t){n.hide()}}}),n._v(" "),e("app-main"),n._v(" "),e("app-footer",{attrs:{lodingShow:n.isLodingShow}})],1)},staticRenderFns:[]};var v=e("VU/8")(h,p,!1,function(n){e("tyaC")},"data-v-2d068679",null).exports,f={render:function(){var n=this.$createElement;return(this._self._c||n)("div",[this._v(" index")])},staticRenderFns:[]};var g=e("VU/8")({name:"index"},f,!1,function(n){e("8Y+6")},"data-v-606704d1",null).exports,y={render:function(){var n=this.$createElement;return(this._self._c||n)("div",[this._v("more.vue")])},staticRenderFns:[]};var _=e("VU/8")({name:"more"},y,!1,function(n){e("tm9a")},"data-v-136d5552",null).exports,x={render:function(){var n=this.$createElement;return(this._self._c||n)("div",[this._v("diary")])},staticRenderFns:[]};var I=e("VU/8")({name:"Diary"},x,!1,function(n){e("h+ZV")},"data-v-6df5f090",null).exports,w={render:function(){var n=this.$createElement;return(this._self._c||n)("div",[this._v("us")])},staticRenderFns:[]};var b=e("VU/8")({name:"Us"},w,!1,function(n){e("0WW7")},"data-v-33ec04ec",null).exports,C={name:"music",props:["index-music"],data:function(){return{oAudioAutoPaly:!1,playTime:"0:00",allTime:"0:00",geciJson:[],titileParent:"",geci:"",muiscIndex:0,musicName:"",singerName:"",musicGeci:[{singerName:"周杰伦",name:"晴天",allTime:"269",url:"./MP3/yanyuan.mp3",geci:"[00:01]晴天 - 周杰伦,\n[00:05]作曲 : 周杰伦,\n[00:10]作词 : 周杰伦,\n[00:28]故事的小黄花,\n[00:32]从出生那年就飘着,\n[00:35]童年的荡秋千,\n[00:39]随记忆一直晃到现在,\n[00:42]Re So So Si Do Si La,\n[00:46]So La Si Si Si Si La Si La So,\n[00:49]吹着前奏望着天空,\n[00:52]我想起花瓣试着掉落,\n[00:56]为你翘课的那一天,\n[00:58]花落的那一天,\n[01:00]教室的那一间,\n[01:02]我怎么看不见,\n[01:04]消失的下雨天,\n[01:05]我好想再淋一遍,\n[01:09]没想到失去的勇气我还留着,\n[01:15]好想再问一遍,\n[01:18]你会等待还是离开,\n[01:24]刮风这天我试过握着你手,\n[01:30]但偏偏雨渐渐大到我看你不见,\n[01:38]还要多久我才能在你身边,\n[01:45]等到放晴的那天也许我会比较好一点,\n[01:52]从前从前有个人爱你很久,\n[01:58]但偏偏风渐渐把距离吹得好远,\n[02:05]好不容易又能再多爱一天,\n[02:13]但故事的最后你好像还是说了拜拜,\n[02:22],\n[02:33]为你翘课的那一天,\n[02:36]花落的那一天,\n[02:38]教室的那一间,\n[02:40]我怎么看不见,\n[02:42]消失的下雨天,\n[02:44]我好想再淋一遍,\n[02:47]没想到失去的勇气我还留着,\n[02:54]好想再问一遍,\n[02:56]你会等待还是离开,\n[03:02]刮风这天我试过握着你手,\n[03:07]但偏偏雨渐渐大到我看你不见,\n[03:15]还要多久我才能在你身边,\n[03:23]等到放晴的那天也许我会比较好一点,\n[03:30]从前从前有个人爱你很久,\n[03:36]偏偏风渐渐把距离吹得好远,\n[03:44]好不容易又能再多爱一天,\n[03:51]但故事的最后你好像还是说了拜拜,\n[03:58]刮风这天我试过握着你手,\n[04:02]但偏偏雨渐渐大到我看你不见,\n[04:06]还要多久我才能够在你身边,\n[04:09]等到放晴那天也许我会比较好一点,\n[04:13]从前从前有个人爱你很久,\n[04:16]但偏偏雨渐渐把距离吹得好远,\n[04:19]好不容易又能再多爱一天,\n[04:22]但故事的最后你好像还是说了拜"},{singerName:"周杰伦",name:"一路向北",allTime:"295",url:"./MP3/fangyuanjili.mp3",geci:"[00:01]一路向北 - 周杰伦,\n[00:10]词:方文山,\n[00:15]曲:周杰伦,\n[00:36]后视镜里的世界,\n[00:43]越来越远的道别,\n[00:48]你转身向背,\n[00:51]侧脸还是很美,\n[00:54]我用眼光去追,\n[00:58]竟听见你的泪,\n[01:04]在车窗外面排徊,\n[01:13]是我错失的机会,\n[01:18]你站的方位,\n[01:20]跟我中间隔着泪,\n[01:24]街景一直在后退,\n[01:27]你的崩溃在窗外零碎,\n[01:32]我一路向北,\n[01:34]离开有你的季节,\n[01:39]你说你好累,\n[01:41]已无法再爱上谁,\n[01:46]风在山路吹,\n[01:49]过往的画面,\n[01:51]全都是我不对,\n[01:55]细数惭愧我伤你几回,\n[02:20]后视镜里的世界,\n[02:27]越来越远的道别,\n[02:33]你转身向背,\n[02:36]侧脸还是很美,\n[02:39]我用眼光去追,\n[02:43]竟听见你的泪,\n[02:50]在车窗外面排徊,\n[02:57]是我错失的机会,\n[03:02]你站的方位,\n[03:04]跟我中间隔着泪,\n[03:08]街景一直在后退,\n[03:12]你的崩溃在窗外零碎,\n[03:16]我一路向北,\n[03:18]离开有你的季节,\n[03:23]你说你好累,\n[03:26]已无法再爱上谁,\n[03:30]风在山路吹,\n[03:33]过往的画面,\n[03:35]全都是我不对,\n[03:39]细数惭愧我伤你几回,\n[03:44]我一路向北,\n[03:47]离开有你的季节,\n[03:51]方向盘周围,\n[03:53]回转着我的后悔,\n[03:58]我加速超越,\n[04:01]却甩不掉紧紧跟随的伤悲,\n[04:06]细数惭愧我伤你几回,\n[04:13]停止狼狈就让错纯粹"},{singerName:"于文文",name:"体面",allTime:"282",url:"./MP3/fangyuanjili.mp3",geci:"[00:01]体面 - 于文文,\n[00:05]作词：唐恬,\n[00:10]作曲：于文文,\n[00:15]编曲：郑楠,\n[00:20]和声/和声设计：于文文,\n[00:22]别堆砌怀念让剧情,\n[00:27]变得狗血,\n[00:33]深爱了多年又何必,\n[00:38]毁了经典,\n[00:43]都已成年不拖不欠,\n[00:48]浪费时间是我情愿,\n[00:54]像谢幕的演员,\n[00:58]眼看着灯光熄灭,\n[01:05]来不及,\n[01:07]再轰轰烈烈,\n[01:11]就保留,\n[01:13]告别的尊严,\n[01:16]我爱你不后悔,\n[01:21]也尊重故事结尾,\n[01:28]分手应该体面,\n[01:31]谁都不要说抱歉,\n[01:35]何来亏欠,\n[01:38]我敢给就敢心碎,\n[01:41]镜头前面是从前的我们,\n[01:46]在喝彩,\n[01:48]流着泪声嘶力竭,\n[01:51]离开也很体面,\n[01:55]才没辜负这些年,\n[01:59]爱得热烈,\n[02:01]认真付出的画面,\n[02:04]别让执念,\n[02:06]毁掉了昨天,\n[02:08]我爱过你,\n[02:10]利落干脆,\n[02:35]最熟悉的街主角却,\n[02:40]换了人演,\n[02:47]我哭到哽咽心再痛,\n[02:51]就当破茧,\n[02:56]来不及,\n[02:58]再轰轰烈烈,\n[03:02]就保留,\n[03:04]告别的尊严,\n[03:07]我爱你不后悔,\n[03:11]也尊重故事结尾,\n[03:18]分手应该体面,\n[03:22]谁都不要说抱歉,\n[03:26]何来亏欠,\n[03:28]我敢给就敢心碎,\n[03:31]镜头前面是从前的我们,\n[03:36]在喝彩,\n[03:38]流着泪声嘶力竭,\n[03:41]离开也很体面,\n[03:45]才没辜负这些年,\n[03:49]爱得热烈,\n[03:51]认真付出的画面,\n[03:54]别让执念,\n[03:56]毁掉了昨天,\n[03:59]我爱过你,\n[04:01]利落干脆,\n[04:04]再见,\n[04:08]不负遇见"},{singerName:"Fitz & the Tantrums",name:"HandClap",allTime:"193",url:"./MP3/fangyuanjili.mp3",geci:"[00:01]HandClap - Fitz & the Tantrums,\n[00:05](Turn it up),\n[00:13]Somebody save your soul cause you've been sinning in this city I know,\n[00:17]Too many troubles，all these lovers got you losing control,\n[00:21]You're like a drug to me a luxury  my sugar and gold,\n[00:23]I want the good life,\n[00:25]Every good night you're a hard one to hold,\n[00:28]Cause you don't even know,\n[00:31]I can make your hands clap,\n[00:34]Said I can make your hands clap,\n[00:37]Somebody save your soul cause you've been sinning in this city I know,\n[00:41]Too many troubles， all these lovers got you losing control,\n[00:44]You're like a drug to me， a luxury， my sugar and gold,\n[00:47]I want your sex and your affection when they're holdin' you close,\n[00:53]Cause you don't even know,\n[00:55]I can make your hands clap,\n[00:57]Said I can make your hands clap,\n[01:00]Every night when the stars come out,\n[01:04]Am I the only living soul around?,\n[01:07]Need to believe you could hold me down,\n[01:11]Cause I'm in need of somethin' good right now,\n[01:14]We could be screamin' till the sun comes out,\n[01:18]And when we wake we'd be the only sound,\n[01:21]I get on my knees and say a prayer,\n[01:27]That I can make your hands clap,\n[01:34]That I can make your hands clap,\n[01:39](Turn it up),\n[01:41]That I can make your hands clap,\n[01:43]My flesh is searchin' for your worst and best， don't ever deny,\n[01:46]I'm like a stranger， gimme me danger,\n[01:49]All your wrongs and your rights,\n[01:51]Secrets on Broadway to the freeway， you're a keeper of crimes,\n[01:53]Fear no conviction， grapes of wrath can only sweeten your wine,\n[01:59]But you don't even know,\n[02:00]I can make your hands clap,\n[02:23]Said I can make your hands clap,\n[02:06]Every night when the stars come out,\n[02:09]Am I the only living soul around?,\n[02:13]Need to believe you could hold me down,\n[02:17]Cause I'm in need of somethin' good right now,\n[02:20]We could be screamin' till the sun comes out,\n[02:24]And when we wake we'd be the only sound,\n[02:27]I get on my knees and say a prayer,\n[02:32]That I can make your hands clap,\n[02:40]That I can make your hands clap,\n[02:47]That I can make your hands clap,\n[02:54]That I can make your hands clap,\n[03:01]So can I get a hand clap?"}],geciShowIndex:0,timer:null,userName:"",muiscName:"",muiscTitle:"",musicPlayer:!1}},watch:{indexMusic:{handler:function(n,t){this.muiscIndex=n,this.geciShowIndex=0,this.oAudioAutoPaly=!0,this.musicPlayer=!0,this.titileParent=this.musicGeci[n].name+this.musicGeci[n].singerName,this.musicName=this.musicGeci[n].name,this.singerName=this.musicGeci[n].singerName,this.allTime=this.setTime(this.musicGeci[this.muiscIndex].allTime);var e=this,i=document.getElementById("audio");this.musciCut(),$("#audio")[0].loadedmetadata=void setTimeout(function(){clearInterval(e.timer),e.oAudioAutoPaly=!0;var n=parseInt(e.musicGeci[e.muiscIndex].allTime);e.geci=e.musicGeci[e.muiscIndex].geci,$("#audio").load(),$("#audio")[0].play(),e.setGeci(),e.allTime=e.setTime(e.musicGeci[e.muiscIndex].allTime),e.allTime=e.setTime(n);var t=$("#plan-btn").parents(".plan").width()-10,s=$("#plan-btn").parents(".plan").offset().left,a=$("#plan-btn").parent();e.timer=setInterval(c,500);var o=void 0;function c(){e.oAudioAutoPaly?(o=i.currentTime/n*100+"%",a.css("width",o),e.playTime=function(n){var t=void 0,e=void 0;return(n=parseInt(n))<59?(t="00",e=n<10?"0"+n:n):(t=parseInt(n/60),(e=parseInt(n%60))<10&&(e="0"+e)),t+":"+e}(i.currentTime),e.geciShow(e.geciShowIndex)):clearInterval(e.timer),parseInt(i.currentTime)==parseInt(i.duration)&&(clearInterval(e.timer),e.oAudioAutoPaly=!1)}$("#play").off("touchstart").on("touchstart",function(){console.log(e.oAudioAutoPaly),e.oAudioAutoPaly?($("#audio")[0].pause(),clearInterval(c)):($("#audio")[0].play(),e.timer=setInterval(c,500)),e.oAudioAutoPaly=!e.oAudioAutoPaly});var r=void 0;$("#plan-btn").off("touchstart").on("touchstart",function(o){var c=$(this);o.originalEvent.targetTouches[0],$(document).on("touchmove",function(n){var e=n.originalEvent.targetTouches[0],i=e.clientX-s,o=i/t;o<0?o=0:o>1&&(o=1),o=100*(r=o)+"%",i<0?i=0:i>t&&(i=t),c.css("left",i),a.css("width",o)}),$(document).off("touchend").on("touchend",function(t){t.originalEvent.targetTouches[0],i.currentTime=parseInt(n*r);for(var s=parseInt(i.currentTime),a=$("#geci div"),o=0;o<a.length;o++){var u=parseInt(a.eq(o).attr("data-time")),l=parseInt(a.eq(o+1).attr("data-time"));s>=u&&s<=l?($("#geci").find("div").removeClass("active"),e.geciShowIndex=o,e.geciShow(e.geciShowIndex)):o==$("#geci div").length&&(e.geciShowIndex=$("#geci div").length,e.geciShow(e.geciShowIndex))}c.css("left","auto"),$(this).unbind("touchmove"),$(this).unbind("touchend")})})},50)},deep:!0}},components:{"app-header":u},methods:{musciCut:function(n){if($("#geci").find(".active").removeClass("active"),n){if(this.geciShowIndex=0,"next"==n){if(this.muiscIndex=++this.muiscIndex,this.muiscIndex>this.musicGeci.length-1)return this.muiscIndex=this.musicGeci.length-1,void alert("已经是最后一首啦")}else if(this.muiscIndex=--this.muiscIndex,this.muiscIndex<0)return this.muiscIndex=0,void alert("已经是最后一首啦");this.indexMusic=this.muiscIndex}this.geci=this.musicGeci[this.muiscIndex].geci,this.geciJson=[]},formattingGeci:function(n){var t=(n=n.replace(/(^\s*)|(\s*$)/g,"")).substring(1,6).split(":");return{time:60*parseInt(t[0])+parseInt(t[1]),geci:n.substring(7,n.length)}},setGeci:function(){"string"!=typeof this.geci&&(this.geci=this.geci.toString()),this.geci=this.geci.split(",");for(var n=0;n<this.geci.length;n++){var t=this.formattingGeci(this.geci[n]);this.geciJson.push({time:t.time-2,geci:t.geci})}this.muiscTitle=this.geciJson[0].geci},setTime:function(n,t){var e=n%60;return parseInt(n/60)+":"+(e<10?"0"+e:e)},geciShow:function(n){this.titileParent=$("#geci").find("div").eq(0).text();var t=$("#geci").find("div").eq(n);if(void 0!=t.position()){var e=t.position().top,i=parseInt(t.attr("data-time")),s=t.next(),a=parseInt(s.attr("data-time"));parseInt($("#audio")[0].currentTime)>=i&&parseInt($("#audio")[0].currentTime)<=a?($("#geci").css("transform","translateY(-"+e+"px)"),t.addClass("active")):n==$("#geci div").length-1?$("#geci").find("div").eq($("#geci p").length-1).addClass("active"):(this.geciShowIndex++,$("#geci").find("div").eq(this.geciShowIndex).prev().removeClass("active"))}},playerShow:function(){this.musicPlayer=!this.musicPlayer}},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},mounted:function(){}},S={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"muisc-parent-box"},[i("div",{staticClass:"muisc-parent",class:n.musicPlayer?"top":""},[i("div",{staticClass:"music-box music-bg"},[i("div",{staticClass:"music-body"},[i("div",{staticClass:"music-geci"},[i("div",{staticClass:"geci-body"},[i("div",{attrs:{id:"geci"}},n._l(n.geciJson,function(t){return i("div",{attrs:{"data-time":t.time}},[n._v("\n                "+n._s(t.geci)+"\n              ")])}))])]),n._v(" "),n._m(0)]),n._v(" "),i("audio",{staticStyle:{position:"fixed",left:"-120%",opacity:"0"},attrs:{id:"audio",controls:""}},[0==n.muiscIndex?i("source",{attrs:{src:e("VZHU"),type:"audio/mpeg"}}):n._e(),n._v(" "),1==n.muiscIndex?i("source",{attrs:{src:e("A37m"),type:"audio/mpeg"}}):n._e(),n._v(" "),2==n.muiscIndex?i("source",{attrs:{src:e("nVQ8"),type:"audio/mpeg"}}):n._e(),n._v(" "),3==n.muiscIndex?i("source",{attrs:{src:e("SPmE"),type:"audio/mpeg"}}):n._e()]),n._v(" "),i("div",{staticClass:"music-btn-body"},[i("div",{staticClass:"music-collect-body"},[i("i",{staticClass:"iconfont icon-shoucang"}),n._v(" "),i("i",{staticClass:"iconfont icon-liuyan"}),n._v(" "),i("i",{staticClass:"iconfont icon-msnui-arrow-down",on:{click:n.playerShow}})]),n._v(" "),n._m(1),n._v(" "),i("div",{staticClass:"btn-body"},[i("span",{staticClass:"time"},[n._v(n._s(n.playTime))]),n._v(" "),i("i",{staticClass:"iconfont icon-shangyishou",attrs:{id:"last"},on:{click:function(t){n.musciCut("prev")}}}),n._v(" "),i("i",{staticClass:"iconfont",class:n.oAudioAutoPaly?"icon-bofangqi-zanting":"icon-bofangqi-bofang",attrs:{id:"play"}}),n._v(" "),i("i",{staticClass:"iconfont icon-kuaijin",attrs:{id:"next"},on:{click:function(t){n.musciCut("next")}}}),n._v(" "),i("span",{staticClass:"time"},[n._v(n._s(n.allTime))])])])])]),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:n.oAudioAutoPaly,expression:"oAudioAutoPaly"}],staticClass:"mini-muisc-box",on:{click:n.playerShow}},[i("div",{staticClass:"mini-singer"},[i("p",[n._v(n._s(n.musicName))]),n._v(" "),i("p",[n._v(n._s(n.singerName))])]),n._v(" "),i("i",{staticClass:"iconfont btn-play",class:n.oAudioAutoPaly?"icon-bofangqi-zanting":"icon-bofangqi-bofang"})])])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"img-bg"},[t("img",{attrs:{src:e("oV57"),alt:""}})])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"plan-box"},[t("div",{staticClass:"plan"},[t("div",{staticClass:"new-plan"},[t("i",{attrs:{id:"plan-btn"}})])])])}]};var T=e("VU/8")(C,S,!1,function(n){e("uESO")},"data-v-1eb0e448",null).exports,k={name:"MuicList",data:function(){return{muicListArr:[{userName:"周杰伦",musicName:"晴天",hot:95},{userName:"周杰伦",musicName:"一路向北",hot:85},{userName:"于文文",musicName:"体面",hot:80},{userName:"Fitz & the Tantrums",musicName:"HandClap",hot:70}],index:-1}},components:{"app-header":u,music:T},methods:{linkGoTo:function(n,t,e){this.$router.push({path:n,query:{userId:t,obj:e}})},cutMusic:function(n){this.index=n}}},A={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"music-box"},[e("ul",{staticClass:"music-list"},n._l(n.muicListArr,function(t,i){return e("li",{on:{click:function(t){n.cutMusic(i)}}},[e("div",{staticClass:"list"},[e("p",[n._v(n._s(t.musicName))]),n._v(" "),e("p",{staticClass:"user-name"},[n._v(n._s(t.userName))])]),n._v(" "),e("div",{staticClass:"schedule",style:{width:t.hot+"%"}},[n._v("热度："+n._s(t.hot))])])})),n._v(" "),e("music",{attrs:{"index-music":n.index}})],1)},staticRenderFns:[]};var N=e("VU/8")(k,A,!1,function(n){e("GFXi")},"data-v-41ac6035",null).exports,P={name:"MusicListParent",data:function(){return{}},components:{muiclist:N}},E={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticStyle:{height:"100%"}},[t("muiclist")],1)},staticRenderFns:[]};var L=e("VU/8")(P,E,!1,function(n){e("7MnH")},"data-v-5d10c1f0",null).exports;i.a.use(c.a);var V=new c.a({routes:[{path:"/",component:v,redirect:"/index",children:[{path:"/index",component:g},{path:"/more",component:_},{path:"/diary",component:I},{path:"/us",component:b}]},{path:"/musicList/music",component:T},{path:"/musicList",component:N},{path:"/MusicListParent",component:L}]});i.a.config.productionTip=!1,i.a.use(o.a),new i.a({el:"#app",router:V,components:{App:a},template:"<App/>"})},SPmE:function(n,t,e){n.exports=e.p+"static/media/chiji.092f6bf.mp3"},VZHU:function(n,t,e){n.exports=e.p+"static/media/qingtian.d23be08.mp3"},Ykoy:function(n,t){},"h+ZV":function(n,t){},iNHb:function(n,t){},isB8:function(n,t){},mq33:function(n,t){},nVQ8:function(n,t,e){n.exports=e.p+"static/media/timian.eef1fe1.mp3"},oV57:function(n,t,e){n.exports=e.p+"static/img/timg.c688127.jpg"},tm9a:function(n,t){},tyaC:function(n,t){},uESO:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.9b2ff963d1f5cd2f05b2.js.map