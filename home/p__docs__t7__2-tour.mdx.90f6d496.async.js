(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"0+zf":function(e,t,n){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F"}},10:function(e,t){},11:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},"6JAd":function(e,t,n){"use strict";n("XGli");var a=n("NHyu"),r=(n("ufv1"),n("QYgq")),o=n("qIgq"),i=n.n(o),c=(n("tU7J"),n("wFql")),l=n("q1tI"),s=n.n(l),u=n("99qe"),d=n.n(u),p=function(e){return s.a.createElement("span",{className:d.a.confidential,onClick:e.onClick},e.children)};n.d(t,"d",function(){return h}),n.d(t,"b",function(){return y}),n.d(t,"a",function(){return w});var m=n("CFOr"),f=c["a"].Text,g=c["a"].Paragraph,h="secretKey",v=e=>{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},b=(e,t)=>{var n=window.URL||window.webkitURL||window,a=new Blob([t]),r=document.createElementNS("http://www.w3.org/1999/xhtml","a");r.href=n.createObjectURL(a),r.download=e,v(r)},y=e=>new m(localStorage.getItem(h)).decode(e);t["c"]=function(e){var t=Object(l["useState"])(!0),n=i()(t,2),a=n[0],r=n[1],o=Object(l["useState"])(void 0),c=i()(o,2),u=c[0],d=c[1];return Object(l["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(h)&&d(y(e.children))},[a]),!a&&u?u:s.a.createElement(p,{onClick:()=>{r(!1)}},e.children)};function w(e){var t=localStorage.getItem(h);if(!e.text)return null;var n=e.img?'<C.CImg src="':"<C.Cryptor>",o=e.img?'" />':"</C.Cryptor>",i=new m(t).encode(e.text),c="".concat(n).concat(e.img?e.name:i).concat(o);return s.a.createElement("div",null,s.a.createElement(g,{copyable:{text:c,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},s.a.createElement(f,{code:!0},c)),s.a.createElement(r["a"],null),e.img&&s.a.createElement(a["a"],{onClick:()=>{b("".concat(e.name,".json")||!1,JSON.stringify(i))}},"Export"))}},7:function(e,t){},"7cJT":function(e,t,n){"use strict";var a,r=n("mjNm"),o=n("6JAd"),i=n("d6i3"),c=n.n(i),l=n("1l/V"),s=n.n(l),u=n("qIgq"),d=n.n(u),p=n("q1tI"),m=n.n(p),f=n("Mu1M"),g=function(e){var t=Object(p["useState"])(!0),n=d()(t,2),a=n[0],r=n[1],i=Object(p["useState"])(void 0),l=d()(i,2),u=l[0],g=l[1],h=e.src,v=e.strict;return Object(p["useEffect"])(()=>{s()(c.a.mark(function e(){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem(o["d"])){e.next=7;break}return e.next=3,fetch("/home/assets/".concat(h,".json"));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,t&&g(Object(o["b"])(t));case 7:case"end":return e.stop()}},e)}))()},[h]),u&&localStorage.getItem(o["d"])?a?m.a.createElement("img",Object.assign({},Object(f["a"])({longTouchTimeout:v?3e4:3e3,onLongPress:()=>{r(!1)}}),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICRAEAOw==",alt:"",style:{height:"33vw"}})):m.a.createElement("img",{src:u,alt:""}):null},h=n("wd/R"),v=n.n(h),b=function(e){var t=Object(p["useState"])(!1),n=d()(t,2),a=n[0],r=n[1],o=e.date,i=e.nights;function c(){r(!a)}return m.a.createElement("div",{onClick:c,style:{marginBottom:"16px"}},m.a.createElement("i",null,v()(o).format("Do MMM, YYYY")),a&&"number"===typeof i&&m.a.createElement("i",null," - ",v()(o).add(i,"d").format("Do MMM, YYYY")),!a&&"number"===typeof i&&m.a.createElement("i",null,", ",i," nights"))},y=n("PeHE"),w=n("G6/R"),A={position:"absolute",top:"0",bottom:"0",margin:"auto"},E=function(e){var t=e.src,n=e.alt,r={src:"/home/assets/".concat(t),alt:n};return Object(p["useEffect"])(()=>{return()=>{"function"===typeof a&&a()}},[]),m.a.createElement("img",Object.assign({},r,Object(f["a"])({onDblClick:()=>{a=Object(y["a"])(m.a.createElement(w["a"],null,m.a.createElement("img",Object.assign({},r,{width:"100%",style:A}))))}})))},O=(n("oByq"),n("Wx4G")),j=function(e){var t=e.items,n=e.col,a=void 0===n?3:n;return m.a.createElement(O["a"],{data:t,columnNum:a,renderItem:e=>{return"string"===typeof e?m.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e),")")}},m.a.createElement(E,{src:e,alt:""})):m.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e.src),")")}},m.a.createElement(E,Object.assign({},e,{src:e.src,alt:e.alt})))}})};t["a"]={Map:r["a"],Cryptor:o["c"],CImg:g,HotelNights:b,Img:E,Imgs:j}},8:function(e,t){},9:function(e,t){},"99qe":function(e,t,n){e.exports={confidential:"confidential___3zs5A"}},"G6/R":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NXoE"),i=n("xJKY"),c=n.n(i);t["a"]=function(e){var t=e.children,n=e.__unmount__;return r.a.createElement("div",{className:c.a["modal-root"]},r.a.createElement("div",{className:c.a["modal-wrapper"]},r.a.createElement("div",{className:c.a["modal-close"]},r.a.createElement(o["a"],{type:"iconclose",onClick:n})),t))}},IOGx:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});n("q1tI");var a=n("7ljp"),r=n("7cJT");function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}const i={},c="wrapper";function l({components:e,...t}){return Object(a["a"])(c,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a["a"])("h1",null,"TOUR TWO BACKPACKER"),Object(a["a"])("h2",null,"KULA LUMPUR 1"),Object(a["a"])("h2",null,"KOTA KINABALU 1"),Object(a["a"])(r["a"].Map,{driving:["5.943993,116.050642,KKIA Terminal 2","6.0093078,116.00786,Borneo Backpackers"]}),Object(a["a"])("p",null,"A couple get on the bus, sit behind me. They talked about is this bus go downtown.\nI turned and told them it did. They are lovers, from Wuhan.\nFall in love by riding. They just stay near by my hostel."),Object(a["a"])(r["a"].Cryptor,null,"3634fdd8beb043ac07410e73"),Object(a["a"])("h3",null,"SAPI"),Object(a["a"])(r["a"].Map,{points:["5.9834548,116.0775237"]}),Object(a["a"])("h2",null,"MABUL 1"),Object(a["a"])("p",null,"My phone out of power after landing. I found a sim card store for charging.\nI missed the transform. A guy ask to buy a SIM card,I ask can I take a ride.\nThen I found we start at the same hostel. Brasil."),Object(a["a"])(r["a"].Map,{driving:["4.313783,118.113794,Tawau Airport","4.479184,118.617147,Borneo Global Sipadan Backpackers"]}),Object(a["a"])("p",null,"Arrive I met feng cheche.\nAnd she will go penang after semporna."),Object(a["a"])(r["a"].Img,{src:"dd.jpg"}),Object(a["a"])("h3",null,"UNCLE CHANG BANGELOW"),Object(a["a"])(r["a"].Map,{points:["4.2477133,118.6271726"]}),Object(a["a"])(r["a"].Img,{src:"mabul-1.jgp"}),Object(a["a"])(r["a"].Img,{src:"mabul-2.jpg"}),Object(a["a"])("h2",null,"KOTA KINABALU 2"),Object(a["a"])("h3",null,"MAEILYNE"),Object(a["a"])(r["a"].Map,{points:["5.9830424,116.0764658"]}),Object(a["a"])("h2",null,"GERGORE TOWN"),Object(a["a"])(r["a"].Img,{src:"gt-1.jpg"}),Object(a["a"])(r["a"].Cryptor,null,"3226e6c2f7854f"),Object(a["a"])("p",null,"Night bar, riding danger"),Object(a["a"])("h2",null,"KULA LUMPUR 2"))}l.isMDXComponent=!0},Mu1M:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("p0pE"),r=n.n(a),o=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=r()({longTouchTimeout:1e3,dblclickTimeout:200},n),o=a.longTouchTimeout,i=a.dblclickTimeout,c=a.onLongPress,l=a.onClick,s=a.onDblClick,u=a.style,d=void 0===u?{}:u,p=0,m=0;return{style:r()({},d,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(n){t=!1,e=n,p=setTimeout(function(){t=!0,"function"===typeof c&&c(e)},o),n.preventDefault()},onTouchMove(t){var n=t.touches[0];Math.abs(n.clientY-e.touches[0].touchY)<10&&t.preventDefault()},onTouchEnd(){return p&&!t&&(clearTimeout(p),p=0,m+=1,setTimeout(()=>{1===m?"function"===typeof l&&l(e):2===m&&"function"===typeof s&&s(e),m=0},i)),!1}}}},NXoE:function(e,t,n){"use strict";n("Pwec");var a=n("CtXQ");t["a"]=a["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kefrv97j18o.js"})},PeHE:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("q1tI"),r=n("i8i4");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!t)return()=>{};var n=document.createElement("div");function o(){r["unmountComponentAtNode"](n),n&&n.parentNode&&n.parentNode.removeChild(n)}return t.appendChild(n),"function"===typeof e.type?r["render"](a["cloneElement"](e,{__unmount__:o}),n):r["render"](e,n),o}},mjNm:function(e,t,n){"use strict";var a,r,o=n("qIgq"),i=n.n(o),c=n("q1tI"),l=n.n(c),s=n("p0pE"),u=n.n(s);function d(e){return window.Microsoft?Promise.resolve():(r||(r=new Promise((t,n)=>{var r="bingAPIReady",o="https://www.bing.com/api/maps/mapcontrol?callback=".concat(r,"&setLang=en");e&&(o+="&key=".concat(e));var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.defer=!0,i.src=o,window.bingAPIReady=(()=>{a=window.Microsoft,t()}),i.onerror=(e=>{n(e)}),document.body.appendChild(i)})),r)}var p={zoom:14};class m extends c["PureComponent"]{constructor(){super(...arguments),this.mapRef=c["createRef"]()}render(){return c["createElement"]("div",{ref:this.mapRef,className:this.props.className})}componentDidMount(){d(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new a.Maps.Map(this.mapRef.current,u()({},e?{mapTypeId:a.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,t=e.center;t=void 0===t?{}:t;var n=t.latitude,r=t.longitude,o=e.zoom;n&&r&&this.map.setView({center:new a.Maps.Location(n,r),zoom:o})}addPoint(){var e=this.props.points,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&t.forEach(e=>{var t=e.latitude,n=e.longitude,r=new a.Maps.Pushpin(new a.Maps.Location(t,n),null),o=new a.Maps.Layer;o.add(r),this.map.layers.insert(o)})}walking(){var e=this.props.walking,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"walking")}driving(){var e=this.props.driving,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"driving")}route(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&a.Maps.loadModule("Microsoft.Maps.Directions",()=>{var n=new a.Maps.Directions.DirectionsManager(this.map);n.setRequestOptions({routeMode:a.Maps.Directions.RouteMode[t]}),e.forEach(e=>{var t=e.address,r=e.latitude,o=e.longitude;n.addWaypoint(new a.Maps.Directions.Waypoint({address:t,location:new a.Maps.Location(r,o)}))}),n.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),n.calculateDirections()})}}m.defaultProps=p;var f,g=n("NXoE"),h=n("G6/R"),v=n("Mu1M"),b=n("PeHE"),y=n("0+zf"),w=n.n(y),A="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",E=e=>{var t=Object(c["useState"])(!0),n=i()(t,2),a=n[0],r=n[1],o="string"===typeof e.center?e.center.split(","):[],s=i()(o,2),u=s[0],d=s[1],p=Array.isArray(e.points)?e.points.map(e=>{var t=e.split(","),n=i()(t,2),a=n[0],r=n[1];return{latitude:a,longitude:r}}):[],y=u&&d?{latitude:u,longitude:d}:p[0]&&{latitude:p[0].latitude,longitude:p[0].longitude},O=Array.isArray(e.walking)?e.walking.map(e=>{var t=e.split(","),n=i()(t,3),a=n[0],r=n[1],o=n[2];return{latitude:a,longitude:r,address:o}}):[],j=Array.isArray(e.driving)?e.driving.map(e=>{var t=e.split(","),n=i()(t,3),a=n[0],r=n[1],o=n[2];return{latitude:a,longitude:r,address:o}}):[];Object(c["useEffect"])(()=>{return()=>{"function"===typeof f&&f()}},[]);var M=e.fullscreen,C=M?w.a["map-fullscreen"]:"";return l.a.createElement("div",{className:C,style:{position:"relative"}},!M&&a&&l.a.createElement("div",Object.assign({className:w.a["map-mask"]},Object(v["a"])({onLongPress:()=>{r(!1)},onDblClick:()=>{f=Object(b["a"])(l.a.createElement(h["a"],null,l.a.createElement(E,Object.assign({fullscreen:!0},e))))}})),l.a.createElement(g["a"],{type:"iconunlock"})),l.a.createElement(m,{className:[w.a.map,C].join(" "),apiKey:A,center:y,points:p,walking:O,driving:j,zoom:e.zoom,aerial:e.aerial}))};t["a"]=E},xJKY:function(e,t,n){e.exports={"modal-root":"modal-root___33IwE","modal-wrapper":"modal-wrapper___2srJn","modal-close":"modal-close___3LihS"}}}]);