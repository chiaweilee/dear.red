(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)o=u[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={4:0},a={4:0},i=[];function u(e){return s.p+""+({1:"layouts__index",2:"p__index",3:"p__test"}[e]||e)+"."+{1:"dc317e6f",2:"85416388",3:"58bd628a"}[e]+".async.js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={1:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r=({1:"layouts__index",2:"p__index",3:"p__test"}[e]||e)+"."+{1:"ffc51df6",2:"31d6cfe0",3:"31d6cfe0"}[e]+".chunk.css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e),c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("KyW6")},1:function(e,t){},"8QPw":function(e,t,n){"use strict";n.r(t);var r=n("cxda"),o=n.n(r);n.d(t,"default",function(){return o.a})},D8xB:function(e,t,n){"use strict";n.r(t);var r=n("NTxs"),o=n.n(r),a=n("o2MN"),i=n.n(a),u=function(e,t){return s.apply(this,arguments)};function s(){return s=i()(o.a.mark(function e(t,n){var r,a,i;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(`${t}?${n}`);case 2:return e.next=4,e.sent.json();case 4:return r=e.sent,a=r.data,i=r.errors,e.abrupt("return",i?{}:a);case 8:case"end":return e.stop()}},e)})),s.apply(this,arguments)}t["default"]={namespace:"store",state:{},subscriptions:{init(e){var t=e.dispatch;t({type:"fetch"})},interval(e){var t=e.dispatch;setInterval(t.bind(null,{type:"fetch"}),1e3)}},reducers:{set(e,t){var n=t.t;return{t:n}}},effects:{fetch:o.a.mark(function e(t,n){var r,a,i;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.put,e.next=3,u("q","{t}");case 3:return a=e.sent,i=a.t,e.next=7,r({type:"set",t:new Date-i});case 7:case"end":return e.stop()}},e)})}}},ERIh:function(e,t,n){"use strict";n.r(t);n("FpLh");var r=n("L5c0"),o=n.n(r),a=n("yLME"),i=n.n(a);var u=o()({history:i()(),initialState:{}});t["default"]=u},KyW6:function(e,t,n){"use strict";n.r(t);n("LbLp"),n("4MFX"),n("q1b5"),n("MOi+"),n("ulhM"),n("QQId"),n("mB38"),n("48kz"),n("10ot"),n("vXCg"),n("LFlM"),n("vAdX"),n("XlbJ"),n("EocZ"),n("U9pp"),n("0Pj+"),n("ZvVo"),n("8Q4B"),n("+Rq+"),n("6mWl"),n("qqTr"),n("SPtx"),n("WfqR"),n("QPi4"),n("C7EE"),n("zKZv"),n("6Yor"),n("SYxl"),n("2uQf"),n("ORTA"),n("JGHl"),n("RjNp"),n("pu6U"),n("dbyl"),n("wYMz"),n("H7NX"),n("0jDT"),n("8qXh"),n("j7TX"),n("3IxZ"),n("TDBL"),n("YS/I"),n("RFOA"),n("NY+s");var r=n("MmxP");r["a"].onChangeOrientation(()=>{});var o=n("8Af/");Object(o["config"])("1089854_twzp03gxxgq");n("eEpB");var a=n("FpLh"),i=n.n(a),u=n("/8/I"),s=n.n(u),c=n("gWxT"),l=n.n(c);window.g_plugins=n("szqo"),window.g_plugins.init({validKeys:["patchRoutes","render","rootContainer","modifyRouteProps","onRouteChange","dva"]}),window.g_plugins.use(n("fvEl")),window.g_plugins.use(n("ERIh")),document.addEventListener("DOMContentLoaded",()=>{l.a.attach(document.body)},!1),n("VVNZ");var d=()=>{var e=window.g_plugins.apply("rootContainer",{initialValue:i.a.createElement(n("i4x8").default)});s.a.render(e,document.getElementById("root"))},p=window.g_plugins.compose("render",{initialValue:d}),f=[];Promise.all(f).then(()=>{p()}).catch(e=>{window.console&&window.console.error(e)}),n("hh8c");var h=n("wDPc").default;h("sw.js")},"NY+s":function(e,t){window.addEventListener("contextmenu",function(e){e.preventDefault()}),document.body.addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1})},VVNZ:function(e,t,n){"use strict";n.r(t);var r=n("smUt"),o=n.n(r),a=n("L5c0"),i=n.n(a),u=n("T6qi"),s=n.n(u),c=window.g_plugins.mergeConfig("dva"),l=i()(o()({history:window.g_history},c.config||{}));window.g_app=l,l.use(s()()),(c.plugins||[]).forEach(e=>{l.use(e)}),l.model(o()({namespace:"cookie"},n("8QPw").default)),l.model(o()({namespace:"store"},n("D8xB").default))},aYsz:function(e,t,n){"use strict";n.r(t);var r=n("FpLh");class o extends r["Component"]{render(){return window.g_app.router(()=>this.props.children),window.g_app.start()()}}t["default"]=o},eEpB:function(e,t,n){window.g_history=n("7cL2").default({})},hh8c:function(e,t,n){},i4x8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var r=n("FpLh"),o=n.n(r),a=n("eSPx"),i=n("w4QH"),u=n.n(i),s=n("vkNP").routerRedux.ConnectedRouter,c=[{path:"/",component:u()({component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"+ego"))}),routes:[{path:"/",exact:!0,component:u()({component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"QeBL"))}),_title:"dear.red",_title_default:"dear.red"},{path:"/test",exact:!0,component:u()({component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"GnSH"))}),_title:"dear.red",_title_default:"dear.red"}],_title:"dear.red",_title_default:"dear.red"}];function l(e,t){window.g_plugins.applyForEach("onRouteChange",{initialValue:{routes:c,location:e,action:t}})}function d(){return o.a.createElement(s,{history:window.g_history},Object(a["a"])(c,{}))}window.g_routes=c,window.g_plugins.applyForEach("patchRoutes",{initialValue:c}),window.g_history.listen(l),l(window.g_history.location)}});