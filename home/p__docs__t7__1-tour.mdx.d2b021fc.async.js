(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"0+zf":function(e,a,t){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F","map-wrapper":"map-wrapper___3T9JX"}},10:function(e,a){},11:function(e,a){},2:function(e,a){},3:function(e,a){},4:function(e,a){},5:function(e,a){},6:function(e,a){},"6JAd":function(e,a,t){"use strict";t("XGli");var n=t("NHyu"),o=(t("ufv1"),t("QYgq")),c=t("qIgq"),r=t.n(c),i=(t("tU7J"),t("wFql")),l=t("q1tI"),s=t.n(l),d=t("99qe"),f=t.n(d),b=function(e){return s.a.createElement("span",{className:f.a.confidential,onClick:e.onClick},e.children)};t.d(a,"d",function(){return h}),t.d(a,"b",function(){return O}),t.d(a,"a",function(){return j});var u=t("CFOr"),p=i["a"].Text,m=i["a"].Paragraph,h="secretKey",g=e=>{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)},y=(e,a)=>{var t=window.URL||window.webkitURL||window,n=new Blob([a]),o=document.createElementNS("http://www.w3.org/1999/xhtml","a");o.href=t.createObjectURL(n),o.download=e,g(o)},O=e=>new u(localStorage.getItem(h)).decode(e);a["c"]=function(e){var a=Object(l["useState"])(!0),t=r()(a,2),n=t[0],o=t[1],c=Object(l["useState"])(void 0),i=r()(c,2),d=i[0],f=i[1];return Object(l["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(h)&&f(O(e.children))},[n]),!n&&d?d:s.a.createElement(b,{onClick:()=>{o(!1)}},"string"===typeof e.children&&e.children.substr(0,100))};function j(e){var a=localStorage.getItem(h);if(!e.text)return null;var t=e.img?'<C.CImg src="':"<C.Cryptor>",c=e.img?'" />':"</C.Cryptor>",r=new u(a).encode(e.text),i="".concat(t).concat(e.img?e.name:r).concat(c);return s.a.createElement("div",null,s.a.createElement(m,{copyable:{text:i,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},s.a.createElement(p,{code:!0},i)),s.a.createElement(o["a"],null),e.img&&s.a.createElement(n["a"],{onClick:()=>{y("".concat(e.name,".json")||!1,JSON.stringify(r))}},"Export"))}},7:function(e,a){},"7cJT":function(e,a,t){"use strict";var n,o=t("mjNm"),c=t("6JAd"),r=t("d6i3"),i=t.n(r),l=t("1l/V"),s=t.n(l),d=t("qIgq"),f=t.n(d),b=t("q1tI"),u=t.n(b),p=t("Mu1M"),m=t("PeHE"),h=t("G6/R"),g=function(e){var a=e.src,t=e.alt,o=e.origin,c=void 0!==o&&o,r={src:c?a:"/home/assets/".concat(a),alt:t};return Object(b["useEffect"])(()=>{return()=>{"function"===typeof n&&n()}},[]),u.a.createElement("img",Object.assign({},r,Object(p["a"])({onDblClick:()=>{n=Object(m["a"])(u.a.createElement(h["a"],null,u.a.createElement("img",Object.assign({},r,{width:"100%"}))))}})))},y=function(e){var a=Object(b["useState"])(!0),t=f()(a,2),n=t[0],o=t[1],r=Object(b["useState"])(void 0),l=f()(r,2),d=l[0],m=l[1],h=e.src,y=e.strict,O=e.alt,j=localStorage.getItem(j);return Object(b["useEffect"])(()=>{s()(i.a.mark(function e(){var a;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!j||n){e.next=7;break}return e.next=3,fetch("/home/assets/".concat(h,".json"));case 3:return e.next=5,e.sent.json();case 5:a=e.sent,a&&m(Object(c["b"])(a));case 7:case"end":return e.stop()}},e)}))()},[h]),d&&j?n?u.a.createElement("img",Object.assign({},Object(p["a"])({longTouchTimeout:y?3e4:3e3,onLongPress:()=>{o(!1)}}),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",alt:O,style:{height:"33vw"}})):u.a.createElement(g,{origin:!0,src:d,alt:O}):null},O=t("wd/R"),j=t.n(O),w=function(e){var a=Object(b["useState"])(!1),t=f()(a,2),n=t[0],o=t[1],c=e.date,r=e.nights;function i(){o(!n)}return u.a.createElement("div",{onClick:i,style:{marginBottom:"16px"}},u.a.createElement("i",null,j()(c).format("Do MMM, YYYY")),n&&"number"===typeof r&&u.a.createElement("i",null," - ",j()(c).add(r,"d").format("Do MMM, YYYY")),!n&&"number"===typeof r&&u.a.createElement("i",null,", ",r," nights"))},v=(t("oByq"),t("Wx4G")),I=function(e){var a=e.items,t=e.col,n=void 0===t?3:t;return u.a.createElement(v["a"],{data:a,columnNum:n,renderItem:e=>{return"string"===typeof e?u.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e),")")}},u.a.createElement(g,{src:e,alt:""})):u.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e.src),")")}},u.a.createElement(g,Object.assign({},e,{src:e.src,alt:e.alt})))}})};a["a"]={Map:o["a"],Cryptor:c["c"],CImg:y,HotelNights:w,Img:g,Imgs:I}},8:function(e,a){},9:function(e,a){},"99qe":function(e,a,t){e.exports={confidential:"confidential___3zs5A"}},"G6/R":function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),c=t("NXoE"),r=t("xJKY"),i=t.n(r);a["a"]=function(e){var a=e.children,t=e.__unmount__;return o.a.createElement("div",null,o.a.createElement("div",{className:i.a["modal-mask"]}),o.a.createElement("div",{className:i.a["modal-wrap"]},o.a.createElement("div",{className:i.a["modal-close"]},o.a.createElement(c["a"],{type:"iconclose",onClick:t})),a))}},Mu1M:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t("p0pE"),o=t.n(n),c=function(){var e,a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({longTouchTimeout:1e3,dblclickTimeout:200},t),c=n.longTouchTimeout,r=n.dblclickTimeout,i=n.onLongPress,l=n.onClick,s=n.onDblClick,d=n.style,f=void 0===d?{}:d,b=0,u=0;return{style:o()({},f,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(t){a=!1,e=t,b=setTimeout(function(){a=!0,"function"===typeof i&&i(e)},c),t.preventDefault()},onTouchMove(a){var t=a.touches[0];Math.abs(t.clientY-e.touches[0].touchY)<10&&a.preventDefault()},onTouchEnd(){return b&&!a&&(clearTimeout(b),b=0,u+=1,setTimeout(()=>{1===u?"function"===typeof l&&l(e):2===u&&"function"===typeof s&&s(e),u=0},r)),!1}}}},NXoE:function(e,a,t){"use strict";t("Pwec");var n=t("CtXQ");a["a"]=n["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kzicrv7yexi.js"})},PeHE:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t("q1tI"),o=t("i8i4");function c(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!a)return()=>{};var t=document.createElement("div");function c(){o["unmountComponentAtNode"](t),t&&t.parentNode&&t.parentNode.removeChild(t)}return a.appendChild(t),"function"===typeof e.type?o["render"](n["cloneElement"](e,{__unmount__:c}),t):o["render"](e,t),c}},mjNm:function(e,a,t){"use strict";var n,o,c=t("qIgq"),r=t.n(c),i=t("q1tI"),l=t.n(i),s=t("p0pE"),d=t.n(s);function f(e){return window.Microsoft?Promise.resolve():(o||(o=new Promise((a,t)=>{var o="bingAPIReady",c="https://www.bing.com/api/maps/mapcontrol?callback=".concat(o,"&setLang=en");e&&(c+="&key=".concat(e));var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.defer=!0,r.src=c,window.bingAPIReady=(()=>{n=window.Microsoft,a()}),r.onerror=(e=>{t(e)}),document.body.appendChild(r)})),o)}var b={zoom:14};class u extends i["PureComponent"]{constructor(){super(...arguments),this.mapRef=i["createRef"]()}render(){return i["createElement"]("div",{ref:this.mapRef,className:this.props.className,style:this.props.style})}componentDidMount(){f(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new n.Maps.Map(this.mapRef.current,d()({},e?{mapTypeId:n.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,a=e.center;a=void 0===a?{}:a;var t=a.latitude,o=a.longitude,c=e.zoom;t&&o&&this.map.setView({center:new n.Maps.Location(t,o),zoom:c})}addPoint(){var e=this.props.points,a=void 0===e?[]:e;Array.isArray(a)&&a.length&&a.forEach(e=>{var a=e.latitude,t=e.longitude,o=new n.Maps.Pushpin(new n.Maps.Location(a,t),null),c=new n.Maps.Layer;c.add(o),this.map.layers.insert(c)})}walking(){var e=this.props.walking,a=void 0===e?[]:e;Array.isArray(a)&&a.length&&this.route(a,"walking")}driving(){var e=this.props.driving,a=void 0===e?[]:e;Array.isArray(a)&&a.length&&this.route(a,"driving")}route(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&n.Maps.loadModule("Microsoft.Maps.Directions",()=>{var t=new n.Maps.Directions.DirectionsManager(this.map);t.setRequestOptions({routeMode:n.Maps.Directions.RouteMode[a]}),e.forEach(e=>{var a=e.address,o=e.latitude,c=e.longitude;t.addWaypoint(new n.Maps.Directions.Waypoint({address:a,location:new n.Maps.Location(o,c)}))}),t.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),t.calculateDirections()})}}u.defaultProps=b;var p,m=t("G6/R"),h=t("Mu1M"),g=t("PeHE"),y=t("0+zf"),O=t.n(y),j="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",w=e=>{var a=Object(i["useState"])(!0),t=r()(a,2),n=t[0],o=t[1],c="string"===typeof e.center?e.center.split(","):[],s=r()(c,2),d=s[0],f=s[1],b=Array.isArray(e.points)?e.points.map(e=>{var a=e.split(","),t=r()(a,2),n=t[0],o=t[1];return{latitude:n,longitude:o}}):[],y=d&&f?{latitude:d,longitude:f}:b[0]&&{latitude:b[0].latitude,longitude:b[0].longitude},v=Array.isArray(e.walking)?e.walking.map(e=>{var a=e.split(","),t=r()(a,3),n=t[0],o=t[1],c=t[2];return{latitude:n,longitude:o,address:c}}):[],I=Array.isArray(e.driving)?e.driving.map(e=>{var a=e.split(","),t=r()(a,3),n=t[0],o=t[1],c=t[2];return{latitude:n,longitude:o,address:c}}):[];Object(i["useEffect"])(()=>{return()=>{"function"===typeof p&&p()}},[]);var k=e.fullscreen,A=k?O.a["map-fullscreen"]:O.a["map-wrapper"];return l.a.createElement("div",{className:A,style:{position:"relative"}},!k&&n&&l.a.createElement("div",Object.assign({className:O.a["map-mask"]},Object(h["a"])({onLongPress:()=>{o(!1)},onDblClick:()=>{p=Object(g["a"])(l.a.createElement(m["a"],null,l.a.createElement(w,Object.assign({fullscreen:!0},e))))}}))),l.a.createElement(u,{className:[O.a.map,A].join(" "),apiKey:j,center:y,points:b,walking:v,driving:I,zoom:e.zoom,aerial:e.aerial}))};a["a"]=w},xJKY:function(e,a,t){e.exports={"modal-mask":"modal-mask___2Eqm9","modal-wrap":"modal-wrap___3WcUG","modal-close":"modal-close___3LihS"}},xtQM:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return l});t("q1tI");var n=t("7ljp"),o=t("7cJT");function c(){return c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}const r={},i="wrapper";function l({components:e,...a}){return Object(n["a"])(i,c({},r,a,{components:e,mdxType:"MDXLayout"}),Object(n["a"])("h1",null,"TOUR SOLITARY"),Object(n["a"])("h2",null,"BANGKOK 1"),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"Bangkok, good-time city. Gateway to Southeast Asia. Where dollars and Duetsmarks get turned into counterfeit watches and genuine scars.")),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},'"You need somewhere to stay?"')),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},'"I\'ll be Ok, thanks."')),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},'"What do you want? Sell passport? Tickets? You want silk? I\'ll take you to the best silk place? Diamonds? Come with me, get presents for girlfriend. Maybe no girlfriend. You want a girl, no problem. Good time. Boy girl fucking no problem..."')),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"I was traveling alone for two\nreasons. First of all, being alone\nallows you more opportunity to\nabsorb your experiences on a\npersonal level."),"\n",Object(n["a"])("em",{parentName:"p"},"Secondly, and this\nI felt acutely at that moment,\nthere was no one who wanted to go\nwith me.")),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"What are you doing in thailand? Tourist? You go to Patpong? See smoke from pussy, ping pong ball from pussy, razor blade from pussy; bird from pussy. Why not? Thai girls best in the world. Thai food best in the world. Thai dope best in the world.")),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"- The Beach, 2000")),Object(n["a"])(o["a"].Img,{src:"yinjiaoqin1.jpg",alt:"https://www.instagram.com/p/B02HcpUpO84/"}),Object(n["a"])(o["a"].Imgs,{items:[{src:"yinjiaoqin1.jpg"},{src:"yinjiaoqin1.jpg"},{src:"yinjiaoqin1.jpg"}]}),Object(n["a"])("h3",null,"PRATUNAM"),Object(n["a"])("h4",null,"BAIYOKE SUITE HOTEL"),Object(n["a"])(o["a"].HotelNights,{date:"2013-10-08",nights:4}),Object(n["a"])("p",null,"Road racers, traffic whistle, dove and the air-conditioning.\nNoises can be heard through the sealed window of 9th floor."),Object(n["a"])("h3",null,"COWBOY"),Object(n["a"])("p",null,"I met a white guy there who said he working in Chongqing. He's a farang, and he's waiting for his Thai girlfriend.\nWe drinked till the thai girl come."),Object(n["a"])("h3",null,"NANA"),Object(n["a"])("h3",null,"UNNIE"),Object(n["a"])(o["a"].Cryptor,null,"2e3be1d8b2fc71b70e0d217aa09cd34979b0b17574"),Object(n["a"])("h3",null,Object(n["a"])(o["a"].Cryptor,null,"391acbe8f78875e2202e044d")),Object(n["a"])(o["a"].Cryptor,null,"283ae69185bd4ea10a003066b49ac8513892ba3733d54430459cc8c2f3cbdd957b5a6221a2028036a6206fd6806f9c8c5beb44f9a26bbbf05f7a6d993173ef41a8d21cca2d4cf15d2fe7016f68d5dfc2ec598150815acb31696cf7b401d82d26db9a212013542d5876a56ed150cfa1a718b6f6db668905e9cceb12da531e7dd5ef0904dcc2d2fc7e0c2f7db5052ae7acd5e87134976771a32ee3a0cde257fdde0c74c4761c118f548182fbddf3861c031dfba0030372eec9abaf2afca39c741f377f79f9f614142da6e31d0371efc82c098063d16e7195f931a96184de5764a7c1221eac8feec8172cdffc9407cc217bfa43d57a5587381a0861a368da443ea613ea165eb7aa49a3f793c73ff8ceac8246698523462d2a27f8c90d8db5594dbd80638e55595f482f706062c7e6086b470bd1285f452390bb78cbac809fc85ef31fa2406c0522317469fda72b36e1a5f9a2b70a7edd916f822cd987b3c87cb94cce326cb73e5ea5fcacfc65c8826fc3bdf5c6081043bed12ca81a5aba43e3065b6a25ebbff62a906dd90c42a2ab37eb33c5e51cbbcf90df9364becea78f9ac671aa8c1899f80b088358c9d49e2e943e254c78c84fd2172454eec728fde6cf0bbbcae8da267d05b459b5586920e9c457b0a2c0c51e9ec5465c6262ea1f061e8e6a432668febe5a78808b7bb57ec6a4cd8cb21fe9ce2e74b666377f76429bac722704ab82a3b553ce196407e6e2d8e279a9dc7ba9ba557facbc642b2b62f9f9a9dd0e059f936755fa17b563209524804d4fdf63aec5fbdf53cac73940f9f649aa5228c90423d4590d694ff9933fafdeeb73cd9b116830e6e9514add85c6b5d6507006d47009457c7310832e7e173f764e3114a87f4fbd38cd9a33ad4b4c0929873be0ac9a317ee93a2a0715188b9313ac18f0084f8b8123e801f4eabff17773799808c901f3dbab480ec0f21550a5ec32d31fee74fa4ac66ca3d9d9e5951bf2c5ae64b9697d6e6b65c0187e16e70470b78cbaaea3743a18908b206a1654c622943bf8fae41fea68d136fd8521614af205f9cf8059c2afce8e34cf85888a8b9707bcbec25e528a531f4ec70291115a353e924ec265bf7d01c994c64bf900d58a6a88c0a9d9e4b728d5979788aaeea2fb7de5519b09faea5308bcece9adc1f9a3b529f6e5f7912a515c44d55f6ec34faabe5218928305a056887de2ef9e5e08bfe43ced73c64247b67f709d448bc1e457ef9a837fe4206e03ef2c98cbb9bb23bf59f2d88579fc0e9ce5ebe53ad037b0c0601f9f6ffd5b0a98efde71b848686613bfc2a2607811bbc3e8e4ed0017a8d10c11e22ac956612bfb6b906cc2d6a5b4b78636cb9254522d7110f4b102b337432a0bb378951fe6fa1862f66e91c6192b1e4cc4ba44423b62adf189d74a5dc74cbf549493deae537957a3e40362788cefb99e3cf4c44d46b69ee3c850f50707197e0406effe99de4306cae2556d7fdfc95f1c82d19882f911ae7f3a108a9cd729583d43f33bb2df730f666fe835f028fbdcc7e82840721d0e3b73310489318af6d540d2a7db333b2357e472e19ed91c85668c60d64924d75d7b9eae37e029d04e8b19bb55faeff756332bbcd3f2c3b8cd07e4abf7375f206c31f03748e2031feb90fc926770b03346141e83ed04906bc224f71a4aa2b0e9ebc911f5c5fe73df6c9c4c437091a79ce3fe1643e73237c02f82287edd60cb4da0e14b469872ee72ae51abde17b5bd84ca7c01a0133aa0ab15361d764e02dab329060f0380f009827b73f8664467af1f059211991b8be8eaee4fb42809c8cbf0a430955dae2fe834c4306b2e7377d5970731c08ea962b6e7f7f488ee424d0ac4f47449872bccb4645a8501372dfef85f691a9e5f1f53315411e5c11cab0ca7021ec0fbaaf9ed487ebcce92bb382ef1d3c9f88f79d60270220c0a4984471b7a16716d3807b4a73e7fab419adc8ede7578945270c3f770cff52f8d58aaa1ec3ba6a5d6cb99b1c303ca96980758a3a430548fd7d674e22e14"),Object(n["a"])("h2",null,"SUKHOTHAI"),Object(n["a"])(o["a"].Map,{driving:["13.813143,100.548074,Mo Chit Bus Station","17.014624,99.812901,Sukhothai Bus Terminal"]}),Object(n["a"])("p",null,"Bus stop in downtown, I head to songthaew.\nI asked a discount to ancient city, driver said yes.\nAfter, he told dropping me off at old town east.\nI insist take off at Tourist Information Center in the north.\nI don't remembered did he really give me discount, and I believe not."),Object(n["a"])("p",null,"I saw no resorts around.\nI went to a snack waggon for asking road."),Object(n["a"])("p",null,'"Just go ahead from this road, then turn right.",\na man with thai style uniform answered.'),Object(n["a"])("p",null,'"Thank you." I said.'),Object(n["a"])("p",null,'"I drive you there."'),Object(n["a"])("p",null,"I respectfully declined, but he insist.\nI was thinking of what if he ask me a high price."),Object(n["a"])("p",null,'"Are you a policeman?" I questioned on the car.'),Object(n["a"])("p",null,'"No, I am a teacher."'),Object(n["a"])("p",null,"Scouts I saw when I arrived.\nIt should be what he teach I think."),Object(n["a"])("p",null,"Soon, I arrived."),Object(n["a"])(o["a"].Map,{driving:["17.030496,99.702936,Tourist Information Center","17.032004,99.702915,_","17.031670,99.706329,Baan Rim Klong Resort"],zoom:13}),Object(n["a"])("h3",null,"Baan Rim Klong Resort"),Object(n["a"])(o["a"].HotelNights,{date:"2013-10-12",nights:2}),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"It belongs to a very kind family."),"\n",Object(n["a"])("em",{parentName:"p"},"Good place, just behind The Tourist Center."),"\n",Object(n["a"])("em",{parentName:"p"},"Minutes' riding to sights."),"\n",Object(n["a"])("em",{parentName:"p"},"I rent a bike for only 50 baht."),"\n",Object(n["a"])("em",{parentName:"p"},"Garden house with breakfast."),"\n",Object(n["a"])("em",{parentName:"p"},"The daughter of house owner is really beautiful."),"\n",Object(n["a"])("em",{parentName:"p"},"I still remember the golden doggy Latu and the pussy Momo.")),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"- My review on agoda.com")),Object(n["a"])("p",null,"After meal, the day just black out. And I can't recognize the way back in the black. The sense of direction told me I should ride to north. And I am far away from main road."),Object(n["a"])("p",null,"There's no light on the road, also my bike. I ride with feeling, and ride faster in the black. Tons of flies hit my face, and I tasted some. After crossing, I feel a river beside me, like a square river. The Wat Phrapai Luang I am confident."),Object(n["a"])("p",null,"I met motorbike with a beam headlight riding opposite me that I believe which win't see me. So I have to stop my bike beside the road."),Object(n["a"])("p",null,"At the cross, I saw fireflies, two or three. Not light in the dark, but beautiful."),Object(n["a"])(o["a"].Map,{walking:["17.022397,99.687335,Restaurant","17.031913,99.702393,Fireflies","17.031670,99.706329,Baan Rim Klong Resort"]}),Object(n["a"])(o["a"].Img,{src:"latu.jpg"}),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"@thongmuanthecrispyrolldog")),Object(n["a"])("p",null,"Night, family play cards in parents\u2018 house.\nThey invite me even I can't play.\nWe sit cross-legged on the floor.\nThe cat Momo besides my leg."),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"\u0e51 \u0e52 \u0e53 \u0e54 \u0e55 \u0e56 \u0e57 \u0e58 \u0e59 \u0e51\u0e50")),Object(n["a"])("p",null,"They teach me how to count in thai.\nThat have a lot of funny."),Object(n["a"])(o["a"].Img,{src:"_DSC2996.jpg"}),Object(n["a"])("h3",null,"MORNING"),Object(n["a"])("p",null,"Morning, I'm riding east.\nI found a local path which have banglows along.\nI'm riding in the road and say 'hello' to everyone I saw.."),Object(n["a"])(o["a"].Map,{walking:["17.031670,99.706329,Baan Rim Klong Resort","17.0247242,99.7038567,North Gate","17.018468,99.710928,7-Eleven"]}),Object(n["a"])("h3",null,"ON THE ROAD"),Object(n["a"])(o["a"].Map,{driving:["17.018732,99.712043,Wintour Bus Station","18.799716,99.017627,Chiang Mai Bus Terminal 3"]}),Object(n["a"])("h4",null,"GEM"),Object(n["a"])("h2",null,"CHIANG MAI 1"),Object(n["a"])(o["a"].Map,{walking:["18.7964248,98.9940416,Royal Panerai Hotel","18.7985869,98.9949150,Buffet","18.7962411,98.9993346,Fresh Fruits Market","18.7931204,98.9994647,Nakhon Ping Bridge","18.7908862,99.0016427,Flowers Market","18.7900200,99.0019467,Restaurant","18.7902466,98.9933392,Book Store","18.7964248,98.9940416,Royal Panerai Hotel"]}),Object(n["a"])("h3",null,"SARA"),Object(n["a"])("p",null,'I\'m told that most single girls here are looking for Farangs,\nthai girls learn about "Farangs" when they are small.\nIf one finds a Farangs boyfriend or husband, who is willing to pay on her behalf.\nShe can build a big house back home. A "Farangs" is a simply a "sugar daddy" to them.'),Object(n["a"])(o["a"].Img,{src:"sara.jpg"}),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"#SARA#")),Object(n["a"])(o["a"].Map,{points:["18.7840584,98.9978128,16"]}),"Loi Kroh Boxing Stadium",Object(n["a"])(o["a"].Cryptor,null,"363aeb"),", her name.",Object(n["a"])(o["a"].CImg,{src:"mob.jpg"}),Object(n["a"])("h3",null,"LUCKY"),Object(n["a"])("h2",null,"PHUKET 1"),Object(n["a"])("h3",null,"PATONG"),Object(n["a"])("h3",null,"PHUKET TOWN"),Object(n["a"])("h3",null,"SIRI"),Object(n["a"])("p",null,"It's the last day I stay in Phuket, it heavy rained in the morning,\nand the wind below to East which mean planes will not landing at beach side.\nEven though, I plan to walking to airport, for photos of plane."),Object(n["a"])("p",null,"I hide under my umbrella, elude the strong wind."),Object(n["a"])("p",null,"Rain stopped, wind direction changed! When I reached the end of the road."),Object(n["a"])("p",null,"I leave the road and step on sand, heading airport along the beach.\nAnd a flood stream stopped me, my camera will die if I fall into it."),Object(n["a"])(o["a"].Map,{walking:["8.092336,98.301914,Resort","8.092496,98.299101,.","8.101805,98.299957,."],points:["8.111834,98.302161"]}),Object(n["a"])("p",null,"Finally, I am at the end of runway."),Object(n["a"])("p",null,"A A380 take off over my head, too late to get my camera.\nI watched my plane radar app and waiting for landing.\nI got some plane photos, include a beautiful B747.\nAnd the sky just went to warming and shinning."),Object(n["a"])("p",null,"I did it by perseverance."),Object(n["a"])("h2",null,"BANGKOK 2"),Object(n["a"])("h3",null,"PRATUNAM 2"),Object(n["a"])("h4",null,"BAIYOKE SUITE HOTEL"),Object(n["a"])("p",null,"I can't sleep.\nI lies on the bed, listening to the sound of upstairs engaging in noisy sex.\nHe and his Thai girl did keep me awake. That's Ok, he's on holiday.\nI just has time to enjoy the \"silence\" after turning air-conditioning and television on.\nThen they reach the climax of their activity and fall silent."))}l.isMDXComponent=!0}}]);