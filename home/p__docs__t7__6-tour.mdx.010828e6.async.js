(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"0+zf":function(e,t,a){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F","map-wrapper":"map-wrapper___3T9JX"}},10:function(e,t){},11:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},"6JAd":function(e,t,a){"use strict";a("XGli");var n=a("NHyu"),r=(a("ufv1"),a("QYgq")),o=a("qIgq"),i=a.n(o),c=(a("tU7J"),a("wFql")),l=a("q1tI"),s=a.n(l),u=a("99qe"),m=a.n(u),p=function(e){return s.a.createElement("span",{className:m.a.confidential,onClick:e.onClick},e.children)};a.d(t,"d",function(){return g}),a.d(t,"b",function(){return b}),a.d(t,"a",function(){return w});var d=a("CFOr"),f=c["a"].Text,h=c["a"].Paragraph,g="secretKey",v=e=>{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},y=(e,t)=>{var a=window.URL||window.webkitURL||window,n=new Blob([t]),r=document.createElementNS("http://www.w3.org/1999/xhtml","a");r.href=a.createObjectURL(n),r.download=e,v(r)},b=e=>new d(localStorage.getItem(g)).decode(e);t["c"]=function(e){var t=Object(l["useState"])(!0),a=i()(t,2),n=a[0],r=a[1],o=Object(l["useState"])(void 0),c=i()(o,2),u=c[0],m=c[1];return Object(l["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(g)&&m(b(e.children))},[n]),!n&&u?u:s.a.createElement(p,{onClick:()=>{r(!1)}},"string"===typeof e.children&&e.children.substr(0,100))};function w(e){var t=localStorage.getItem(g);if(!e.text)return null;var a=e.img?'<C.CImg src="':"<C.Cryptor>",o=e.img?'" />':"</C.Cryptor>",i=new d(t).encode(e.text),c="".concat(a).concat(e.img?e.name:i).concat(o);return s.a.createElement("div",null,s.a.createElement(h,{copyable:{text:c,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},s.a.createElement(f,{code:!0},c)),s.a.createElement(r["a"],null),e.img&&s.a.createElement(n["a"],{onClick:()=>{y("".concat(e.name,".json")||!1,JSON.stringify(i))}},"Export"))}},7:function(e,t){},"7cJT":function(e,t,a){"use strict";var n,r=a("mjNm"),o=a("6JAd"),i=a("d6i3"),c=a.n(i),l=a("1l/V"),s=a.n(l),u=a("qIgq"),m=a.n(u),p=a("q1tI"),d=a.n(p),f=a("Mu1M"),h=a("PeHE"),g=a("G6/R"),v=function(e){var t=e.src,a=e.alt,r=e.origin,o=void 0!==r&&r,i={src:o?t:"/home/assets/".concat(t),alt:a};return Object(p["useEffect"])(()=>{return()=>{"function"===typeof n&&n()}},[]),d.a.createElement("img",Object.assign({},i,Object(f["a"])({onDblClick:()=>{n=Object(h["a"])(d.a.createElement(g["a"],null,d.a.createElement("img",Object.assign({},i,{width:"100%"}))))}})))},y=function(e){var t=Object(p["useState"])(!0),a=m()(t,2),n=a[0],r=a[1],i=Object(p["useState"])(void 0),l=m()(i,2),u=l[0],h=l[1],g=e.src,y=e.strict,b=e.alt,w=localStorage.getItem(w);return Object(p["useEffect"])(()=>{s()(c.a.mark(function e(){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!w||n){e.next=7;break}return e.next=3,fetch("/home/assets/".concat(g,".json"));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,t&&h(Object(o["b"])(t));case 7:case"end":return e.stop()}},e)}))()},[g]),u&&w?n?d.a.createElement("img",Object.assign({},Object(f["a"])({longTouchTimeout:y?3e4:3e3,onLongPress:()=>{r(!1)}}),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",alt:b,style:{height:"33vw"}})):d.a.createElement(v,{origin:!0,src:u,alt:b}):null},b=a("wd/R"),w=a.n(b),E=function(e){var t=Object(p["useState"])(!1),a=m()(t,2),n=a[0],r=a[1],o=e.date,i=e.nights;function c(){r(!n)}return d.a.createElement("div",{onClick:c,style:{marginBottom:"16px"}},d.a.createElement("i",null,w()(o).format("Do MMM, YYYY")),n&&"number"===typeof i&&d.a.createElement("i",null," - ",w()(o).add(i,"d").format("Do MMM, YYYY")),!n&&"number"===typeof i&&d.a.createElement("i",null,", ",i," nights"))},A=(a("oByq"),a("Wx4G")),k=function(e){var t=e.items,a=e.col,n=void 0===a?3:a;return d.a.createElement(A["a"],{data:t,columnNum:n,renderItem:e=>{return"string"===typeof e?d.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e),")")}},d.a.createElement(v,{src:e,alt:""})):d.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e.src),")")}},d.a.createElement(v,Object.assign({},e,{src:e.src,alt:e.alt})))}})};t["a"]={Map:r["a"],Cryptor:o["c"],CImg:y,HotelNights:E,Img:v,Imgs:k}},8:function(e,t){},9:function(e,t){},"99qe":function(e,t,a){e.exports={confidential:"confidential___3zs5A"}},"G6/R":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NXoE"),i=a("xJKY"),c=a.n(i);t["a"]=function(e){var t=e.children,a=e.__unmount__;return r.a.createElement("div",null,r.a.createElement("div",{className:c.a["modal-mask"]}),r.a.createElement("div",{className:c.a["modal-wrap"]},r.a.createElement("div",{className:c.a["modal-close"]},r.a.createElement(o["a"],{type:"iconclose",onClick:a})),t))}},Mu1M:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("p0pE"),r=a.n(n),o=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r()({longTouchTimeout:1e3,dblclickTimeout:200},a),o=n.longTouchTimeout,i=n.dblclickTimeout,c=n.onLongPress,l=n.onClick,s=n.onDblClick,u=n.style,m=void 0===u?{}:u,p=0,d=0;return{style:r()({},m,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(a){t=!1,e=a,p=setTimeout(function(){t=!0,"function"===typeof c&&c(e)},o),a.preventDefault()},onTouchMove(t){var a=t.touches[0];Math.abs(a.clientY-e.touches[0].touchY)<10&&t.preventDefault()},onTouchEnd(){return p&&!t&&(clearTimeout(p),p=0,d+=1,setTimeout(()=>{1===d?"function"===typeof l&&l(e):2===d&&"function"===typeof s&&s(e),d=0},i)),!1}}}},NXoE:function(e,t,a){"use strict";a("Pwec");var n=a("CtXQ");t["a"]=n["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kzicrv7yexi.js"})},PeHE:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("q1tI"),r=a("i8i4");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!t)return()=>{};var a=document.createElement("div");function o(){r["unmountComponentAtNode"](a),a&&a.parentNode&&a.parentNode.removeChild(a)}return t.appendChild(a),"function"===typeof e.type?r["render"](n["cloneElement"](e,{__unmount__:o}),a):r["render"](e,a),o}},mjNm:function(e,t,a){"use strict";var n,r,o=a("qIgq"),i=a.n(o),c=a("q1tI"),l=a.n(c),s=a("p0pE"),u=a.n(s);function m(e){return window.Microsoft?Promise.resolve():(r||(r=new Promise((t,a)=>{var r="bingAPIReady",o="https://www.bing.com/api/maps/mapcontrol?callback=".concat(r,"&setLang=en");e&&(o+="&key=".concat(e));var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.defer=!0,i.src=o,window.bingAPIReady=(()=>{n=window.Microsoft,t()}),i.onerror=(e=>{a(e)}),document.body.appendChild(i)})),r)}var p={zoom:14};class d extends c["PureComponent"]{constructor(){super(...arguments),this.mapRef=c["createRef"]()}render(){return c["createElement"]("div",{ref:this.mapRef,className:this.props.className,style:this.props.style})}componentDidMount(){m(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new n.Maps.Map(this.mapRef.current,u()({},e?{mapTypeId:n.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,t=e.center;t=void 0===t?{}:t;var a=t.latitude,r=t.longitude,o=e.zoom;a&&r&&this.map.setView({center:new n.Maps.Location(a,r),zoom:o})}addPoint(){var e=this.props.points,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&t.forEach(e=>{var t=e.latitude,a=e.longitude,r=new n.Maps.Pushpin(new n.Maps.Location(t,a),null),o=new n.Maps.Layer;o.add(r),this.map.layers.insert(o)})}walking(){var e=this.props.walking,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"walking")}driving(){var e=this.props.driving,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"driving")}route(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&n.Maps.loadModule("Microsoft.Maps.Directions",()=>{var a=new n.Maps.Directions.DirectionsManager(this.map);a.setRequestOptions({routeMode:n.Maps.Directions.RouteMode[t]}),e.forEach(e=>{var t=e.address,r=e.latitude,o=e.longitude;a.addWaypoint(new n.Maps.Directions.Waypoint({address:t,location:new n.Maps.Location(r,o)}))}),a.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),a.calculateDirections()})}}d.defaultProps=p;var f,h=a("G6/R"),g=a("Mu1M"),v=a("PeHE"),y=a("0+zf"),b=a.n(y),w="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",E=e=>{var t=Object(c["useState"])(!0),a=i()(t,2),n=a[0],r=a[1],o="string"===typeof e.center?e.center.split(","):[],s=i()(o,2),u=s[0],m=s[1],p=Array.isArray(e.points)?e.points.map(e=>{var t=e.split(","),a=i()(t,2),n=a[0],r=a[1];return{latitude:n,longitude:r}}):[],y=u&&m?{latitude:u,longitude:m}:p[0]&&{latitude:p[0].latitude,longitude:p[0].longitude},A=Array.isArray(e.walking)?e.walking.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],r=a[1],o=a[2];return{latitude:n,longitude:r,address:o}}):[],k=Array.isArray(e.driving)?e.driving.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],r=a[1],o=a[2];return{latitude:n,longitude:r,address:o}}):[];Object(c["useEffect"])(()=>{return()=>{"function"===typeof f&&f()}},[]);var O=e.fullscreen,j=O?b.a["map-fullscreen"]:b.a["map-wrapper"];return l.a.createElement("div",{className:j,style:{position:"relative"}},!O&&n&&l.a.createElement("div",Object.assign({className:b.a["map-mask"]},Object(g["a"])({onLongPress:()=>{r(!1)},onDblClick:()=>{f=Object(v["a"])(l.a.createElement(h["a"],null,l.a.createElement(E,Object.assign({fullscreen:!0},e))))}}))),l.a.createElement(d,{className:[b.a.map,j].join(" "),apiKey:w,center:y,points:p,walking:A,driving:k,zoom:e.zoom,aerial:e.aerial}))};t["a"]=E},xJKY:function(e,t,a){e.exports={"modal-mask":"modal-mask___2Eqm9","modal-wrap":"modal-wrap___3WcUG","modal-close":"modal-close___3LihS"}},zv6B:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});a("q1tI");var n=a("7ljp"),r=a("7cJT");function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}const i={},c="wrapper";function l({components:e,...t}){return Object(n["a"])(c,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n["a"])("h2",null,"TOUR SIX SEXY"),Object(n["a"])("h2",null,"BANGKOK"),Object(n["a"])("h2",null,"SURATTHANI 1"),Object(n["a"])("p",null,"Surat Thani Transport Station - Khao Lak"),Object(n["a"])(r["a"].Map,{driving:["9.1438932,99.3283169,Surat Thani Transport Station","8.9006588,98.5198817,Khao Sok Bus Stop","8.6668406,98.2527142,Khao Lak"]}),Object(n["a"])("h2",null,"KOH SIMILAN 2"),Object(n["a"])("p",null,"Manta Queen 1 - Khao Lak - Phuket bus terminal 2, by Scuba Adventures' mini bus.\nBus terminal - Krabi, by bus to Hat Yai, walked to Krabi town at 2 a.m.\nAwaked at 5 a.m, Lomprayah's bus terminal - Donsak Pier - Koh Phangan Thong Sala Pier - Rin Nai Beach."),Object(n["a"])("h3",null,"THE GREAT"),Object(n["a"])("p",null,"541km, 18 hrs, of course short sleep, a carefully caculately roadmap, a great escape, what do you want?"),Object(n["a"])(r["a"].Map,{driving:["8.644791,98.251189,Khao Lak Scuba Adventures","7.917718,98.395462,Phuket Bus Terminal 2","8.102171,98.907734,Krabi","8.077127,98.904208,Lomprayah","9.318253,99.736982,Donsak","9.709127,99.984432,Thong Sala","9.671759,100.067371,Rin Nai"]}),Object(n["a"])(r["a"].Img,{src:"pubketbusterminal2.jpg"}),Object(n["a"])("h2",null,"KOH PHANGAN 2"),Object(n["a"])(r["a"].HotelNights,{date:"2017-1-12",nights:5}),Object(n["a"])("h2",null,"BANGKOK"))}l.isMDXComponent=!0}}]);