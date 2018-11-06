(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game-snake"],{"008b":function(t,e,n){var i=n("9812"),r=n("6d1c"),o=n("21bb"),s=n("ede5");function a(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.heuristic=t.heuristic||o.manhattan,this.weight=t.weight||1,this.diagonalMovement=t.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=s.OnlyWhenNoObstacles:this.diagonalMovement=s.IfAtMostOneObstacle:this.diagonalMovement=s.Never),this.diagonalMovement===s.Never?this.heuristic=t.heuristic||o.manhattan:this.heuristic=t.heuristic||o.octile}a.prototype.findPath=function(t,e,n,o,s){var a,l,h,u,p,c,f,d,g=new i(function(t,e){return t.f-e.f}),b=s.getNodeAt(t,e),v=s.getNodeAt(n,o),y=this.heuristic,k=this.diagonalMovement,m=this.weight,A=Math.abs,w=Math.SQRT2;b.g=0,b.f=0,g.push(b),b.opened=!0;while(!g.empty()){if(a=g.pop(),a.closed=!0,a===v)return r.backtrace(v);for(l=s.getNeighbors(a,k),u=0,p=l.length;u<p;++u)h=l[u],h.closed||(c=h.x,f=h.y,d=a.g+(c-a.x===0||f-a.y===0?1:w),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||m*y(A(c-n),A(f-o)),h.f=h.g+h.h,h.parent=a,h.opened?g.updateItem(h):(g.push(h),h.opened=!0)))}return[]},t.exports=a},"00e3":function(t,e,n){var i=n("008b");function r(t){i.call(this,t),this.heuristic=function(t,e){return 0}}r.prototype=new i,r.prototype.constructor=r,t.exports=r},"21bb":function(t,e){t.exports={manhattan:function(t,e){return t+e},euclidean:function(t,e){return Math.sqrt(t*t+e*e)},octile:function(t,e){var n=Math.SQRT2-1;return t<e?n*t+e:n*e+t},chebyshev:function(t,e){return Math.max(t,e)}}},"30d2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:t.h*t.pix,width:t.w*t.pix}},[n("rect",{style:{stroke:"",fill:t.bg},attrs:{x:"0",y:"0",height:t.h*t.pix,width:t.w*t.pix}}),t._l(t.snake,function(e,i){return t.snake?[n("rect",{key:i,style:{fill:i?"#3c3":"333"},attrs:{x:e[0]*t.pix+t.pix*(1-t.mg)/2,y:e[1]*t.pix+t.pix*(1-t.mg)/2,height:t.pix*t.mg,width:t.pix*t.mg}})]:t._e()}),t.food?n("rect",{style:{fill:"#dc3"},attrs:{x:t.food[0]*t.pix+t.pix*(1-t.mg)/2,y:t.food[1]*t.pix+t.pix*(1-t.mg)/2,height:t.pix*t.mg,width:t.pix*t.mg}}):t._e()],2)},r=[];n("84fb");function o(t){if(Array.isArray(t))return t}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done);i=!0)if(n.push(s.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==a["return"]||a["return"]()}finally{if(r)throw o}}return n}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){return o(t)||s(t,e)||a()}n("25d7"),n("bd2d"),n("f063");function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var c=n("e0e7"),f=function(t,e){return parseInt(t+Math.random()*e)},d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;h(this,t);var i=this,r=Array.from({length:e},function(){return 0}),o=Array.from({length:n||e},function(){return r});this.reload=function(){return i.one=i.clone(o),i.err=!1,i},this.reload()}return p(t,[{key:"clone",value:function(t){var e=t.constructor();for(var n in t)e[n]=this.clone(t[n]);return e}},{key:"revolution",value:function(t){var e=this;return t.forEach(function(t){var n=l(t,2),i=n[0],r=n[1];"undefined"===typeof e.one[r]||"undefined"===typeof e.one[r][i]||1===e.one[r][i]?e.err=!0:e.one[r][i]=1}),this}},{key:"path",value:function(t,e){var n=l(t,2),i=n[0],r=n[1],o=l(e,2),s=o[0],a=o[1],h=new c.Grid(this.one),u=new c.BiBestFirstFinder({allowDiagonal:!1});return u.findPath(i,r,s,a,h)}}]),t}(),g={name:"SnakeGame",data:function(){return{gameover:!1,score:0,mg:.8,food:[8,8],snake:[[1,4],[1,3],[1,2],[1,1]]}},props:{pix:{type:Number,default:10},w:{type:Number,default:11},h:{type:Number,default:11},bg:{type:String,default:"#ddd",validator:function(t){return/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(t)}}},mounted:function(){this.start()},methods:{start:function(){this.feed(),this.autogame()},autogame:function(){var t=this;this.gameover||setTimeout(function(){t.run(),t.autogame()},100)},feed:function(){var t=[f(0,this.w),f(0,this.h)],e=new d(this.w,this.h).revolution(this.snake).revolution([t]);e.err?this.feed():this.food=t},walk:function(t){var e=l(t,2),n=e[0],i=e[1];this.snake.unshift([n,i]),n!==this.food[0]||i!==this.food[1]?this.snake.pop():(this.score+=1,this.feed())},run:function(){var t=new d(this.w,this.h).revolution(this.snake);if(t.err)this.gameover=!0;else{var e=t.path(this.snake[0],this.food);if(e[1]){var n=e[1];this.walk(n)}else{var i=t.path(this.snake[0],this.snake[this.snake.length-1]);if(i[1]){var r=i[1];this.walk(r)}else console.log(i),this.gameover=!0}}}}},b=g,v=n("048f"),y=Object(v["a"])(b,i,r,!1,null,null,null);y.options.__file="snake.vue";e["default"]=y.exports},"38bc":function(t,e,n){"use strict";var i=n("9a0d"),r=n("eaea");t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},"394c":function(t,e,n){var i=n("9812"),r=n("6d1c"),o=n("21bb");n("ede5");function s(t){t=t||{},this.heuristic=t.heuristic||o.manhattan,this.trackJumpRecursion=t.trackJumpRecursion||!1}s.prototype.findPath=function(t,e,n,o,s){var a,l=this.openList=new i(function(t,e){return t.f-e.f}),h=this.startNode=s.getNodeAt(t,e),u=this.endNode=s.getNodeAt(n,o);this.grid=s,h.g=0,h.f=0,l.push(h),h.opened=!0;while(!l.empty()){if(a=l.pop(),a.closed=!0,a===u)return r.expandPath(r.backtrace(u));this._identifySuccessors(a)}return[]},s.prototype._identifySuccessors=function(t){var e,n,i,r,s,a,l,h,u,p,c=this.grid,f=this.heuristic,d=this.openList,g=this.endNode.x,b=this.endNode.y,v=t.x,y=t.y,k=Math.abs;Math.max;for(e=this._findNeighbors(t),r=0,s=e.length;r<s;++r)if(n=e[r],i=this._jump(n[0],n[1],v,y),i){if(a=i[0],l=i[1],p=c.getNodeAt(a,l),p.closed)continue;h=o.octile(k(a-v),k(l-y)),u=t.g+h,(!p.opened||u<p.g)&&(p.g=u,p.h=p.h||f(k(a-g),k(l-b)),p.f=p.g+p.h,p.parent=t,p.opened?d.updateItem(p):(d.push(p),p.opened=!0))}},t.exports=s},4152:function(t,e,n){var i=n("7314");function r(t){i.call(this,t),this.heuristic=function(t,e){return 0}}r.prototype=new i,r.prototype.constructor=r,t.exports=r},"4a7f":function(t,e,n){var i=n("008b");function r(t){i.call(this,t);var e=this.heuristic;this.heuristic=function(t,n){return 1e6*e(t,n)}}r.prototype=new i,r.prototype.constructor=r,t.exports=r},"5cba":function(t,e,n){var i=n("88a9"),r=n("5b8a");t.exports=function(t){return function(e,n){var o,s,a=String(r(e)),l=i(n),h=a.length;return l<0||l>=h?t?"":void 0:(o=a.charCodeAt(l),o<55296||o>56319||l+1===h||(s=a.charCodeAt(l+1))<56320||s>57343?t?a.charAt(l):o:t?a.slice(l,l+2):s-56320+(o-55296<<10)+65536)}}},"6d1c":function(t,e){function n(t){var e=[[t.x,t.y]];while(t.parent)t=t.parent,e.push([t.x,t.y]);return e.reverse()}function i(t,e){var i=n(t),r=n(e);return i.concat(r.reverse())}function r(t){var e,n,i,r,o,s=0;for(e=1;e<t.length;++e)n=t[e-1],i=t[e],r=n[0]-i[0],o=n[1]-i[1],s+=Math.sqrt(r*r+o*o);return s}function o(t,e,n,i){var r,o,s,a,l,h,u=Math.abs,p=[];s=u(n-t),a=u(i-e),r=t<n?1:-1,o=e<i?1:-1,l=s-a;while(1){if(p.push([t,e]),t===n&&e===i)break;h=2*l,h>-a&&(l-=a,t+=r),h<s&&(l+=s,e+=o)}return p}function s(t){var e,n,i,r,s,a,l=[],h=t.length;if(h<2)return l;for(s=0;s<h-1;++s)for(e=t[s],n=t[s+1],i=o(e[0],e[1],n[0],n[1]),r=i.length,a=0;a<r-1;++a)l.push(i[a]);return l.push(t[h-1]),l}function a(t,e){var n,i,r,s,a,l,h,u,p,c,f,d=e.length,g=e[0][0],b=e[0][1],v=e[d-1][0],y=e[d-1][1];for(n=g,i=b,a=[[n,i]],l=2;l<d;++l){for(u=e[l],r=u[0],s=u[1],p=o(n,i,r,s),f=!1,h=1;h<p.length;++h)if(c=p[h],!t.isWalkableAt(c[0],c[1])){f=!0;break}f&&(lastValidCoord=e[l-1],a.push(lastValidCoord),n=lastValidCoord[0],i=lastValidCoord[1])}return a.push([v,y]),a}function l(t){if(t.length<3)return t;var e,n,i,r,o,s,a=[],l=t[0][0],h=t[0][1],u=t[1][0],p=t[1][1],c=u-l,f=p-h;for(o=Math.sqrt(c*c+f*f),c/=o,f/=o,a.push([l,h]),s=2;s<t.length;s++)e=u,n=p,i=c,r=f,u=t[s][0],p=t[s][1],c=u-e,f=p-n,o=Math.sqrt(c*c+f*f),c/=o,f/=o,c===i&&f===r||a.push([e,n]);return a.push([u,p]),a}e.backtrace=n,e.biBacktrace=i,e.pathLength=r,e.interpolate=o,e.expandPath=s,e.smoothenPath=a,e.compressPath=l},7314:function(t,e,n){var i=n("9812"),r=n("6d1c"),o=n("21bb"),s=n("ede5");function a(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.heuristic=t.heuristic||o.manhattan,this.weight=t.weight||1,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=s.OnlyWhenNoObstacles:this.diagonalMovement=s.IfAtMostOneObstacle:this.diagonalMovement=s.Never),this.diagonalMovement===s.Never?this.heuristic=t.heuristic||o.manhattan:this.heuristic=t.heuristic||o.octile}a.prototype.findPath=function(t,e,n,o,s){var a,l,h,u,p,c,f,d,g=function(t,e){return t.f-e.f},b=new i(g),v=new i(g),y=s.getNodeAt(t,e),k=s.getNodeAt(n,o),m=this.heuristic,A=this.diagonalMovement,w=this.weight,W=Math.abs,x=Math.SQRT2,M=1,N=2;y.g=0,y.f=0,b.push(y),y.opened=M,k.g=0,k.f=0,v.push(k),k.opened=N;while(!b.empty()&&!v.empty()){for(a=b.pop(),a.closed=!0,l=s.getNeighbors(a,A),u=0,p=l.length;u<p;++u)if(h=l[u],!h.closed){if(h.opened===N)return r.biBacktrace(a,h);c=h.x,f=h.y,d=a.g+(c-a.x===0||f-a.y===0?1:x),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||w*m(W(c-n),W(f-o)),h.f=h.g+h.h,h.parent=a,h.opened?b.updateItem(h):(b.push(h),h.opened=M))}for(a=v.pop(),a.closed=!0,l=s.getNeighbors(a,A),u=0,p=l.length;u<p;++u)if(h=l[u],!h.closed){if(h.opened===M)return r.biBacktrace(h,a);c=h.x,f=h.y,d=a.g+(c-a.x===0||f-a.y===0?1:x),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||w*m(W(c-t),W(f-e)),h.f=h.g+h.h,h.parent=a,h.opened?v.updateItem(h):(v.push(h),h.opened=N))}}return[]},t.exports=a},"7df9":function(t,e){function n(t,e,n){this.x=t,this.y=e,this.walkable=void 0===n||n}t.exports=n},8970:function(t,e,n){(function(t){(function(){var e,n,i,r,o,s,a,l,h,u,p,c,f,d,g;i=Math.floor,u=Math.min,n=function(t,e){return t<e?-1:t>e?1:0},h=function(t,e,r,o,s){var a;if(null==r&&(r=0),null==s&&(s=n),r<0)throw new Error("lo must be non-negative");null==o&&(o=t.length);while(r<o)a=i((r+o)/2),s(e,t[a])<0?o=a:r=a+1;return[].splice.apply(t,[r,r-r].concat(e)),e},s=function(t,e,i){return null==i&&(i=n),t.push(e),d(t,0,t.length-1,i)},o=function(t,e){var i,r;return null==e&&(e=n),i=t.pop(),t.length?(r=t[0],t[0]=i,g(t,0,e)):r=i,r},l=function(t,e,i){var r;return null==i&&(i=n),r=t[0],t[0]=e,g(t,0,i),r},a=function(t,e,i){var r;return null==i&&(i=n),t.length&&i(t[0],e)<0&&(r=[t[0],e],e=r[0],t[0]=r[1],g(t,0,i)),e},r=function(t,e){var r,o,s,a,l,h;for(null==e&&(e=n),a=function(){h=[];for(var e=0,n=i(t.length/2);0<=n?e<n:e>n;0<=n?e++:e--)h.push(e);return h}.apply(this).reverse(),l=[],o=0,s=a.length;o<s;o++)r=a[o],l.push(g(t,r,e));return l},f=function(t,e,i){var r;if(null==i&&(i=n),r=t.indexOf(e),-1!==r)return d(t,0,r,i),g(t,r,i)},p=function(t,e,i){var o,s,l,h,u;if(null==i&&(i=n),s=t.slice(0,e),!s.length)return s;for(r(s,i),u=t.slice(e),l=0,h=u.length;l<h;l++)o=u[l],a(s,o,i);return s.sort(i).reverse()},c=function(t,e,i){var s,a,l,p,c,f,d,g,b;if(null==i&&(i=n),10*e<=t.length){if(l=t.slice(0,e).sort(i),!l.length)return l;for(a=l[l.length-1],d=t.slice(e),p=0,f=d.length;p<f;p++)s=d[p],i(s,a)<0&&(h(l,s,0,null,i),l.pop(),a=l[l.length-1]);return l}for(r(t,i),b=[],c=0,g=u(e,t.length);0<=g?c<g:c>g;0<=g?++c:--c)b.push(o(t,i));return b},d=function(t,e,i,r){var o,s,a;null==r&&(r=n),o=t[i];while(i>e){if(a=i-1>>1,s=t[a],!(r(o,s)<0))break;t[i]=s,i=a}return t[i]=o},g=function(t,e,i){var r,o,s,a,l;null==i&&(i=n),o=t.length,l=e,s=t[e],r=2*e+1;while(r<o)a=r+1,a<o&&!(i(t[r],t[a])<0)&&(r=a),t[e]=t[r],e=r,r=2*e+1;return t[e]=s,d(t,l,e,i)},e=function(){function t(t){this.cmp=null!=t?t:n,this.nodes=[]}return t.push=s,t.pop=o,t.replace=l,t.pushpop=a,t.heapify=r,t.updateItem=f,t.nlargest=p,t.nsmallest=c,t.prototype.push=function(t){return s(this.nodes,t,this.cmp)},t.prototype.pop=function(){return o(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return l(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return a(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return r(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return f(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return e=new t,e.nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),(null!==t?t.exports:void 0)?t.exports=e:window.Heap=e}).call(this)}).call(this,n("a351")(t))},"8af5":function(t,e,n){var i=n("394c"),r=n("ede5");function o(t){i.call(this,t)}o.prototype=new i,o.prototype.constructor=o,o.prototype._jump=function(t,e,n,i){var r=this.grid,o=t-n,s=e-i;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o&&0!==s){if(r.isWalkableAt(t-o,e+s)&&!r.isWalkableAt(t-o,e)||r.isWalkableAt(t+o,e-s)&&!r.isWalkableAt(t,e-s))return[t,e];if(this._jump(t+o,e,t,e)||this._jump(t,e+s,t,e))return[t,e]}else if(0!==o){if(r.isWalkableAt(t+o,e+1)&&!r.isWalkableAt(t,e+1)||r.isWalkableAt(t+o,e-1)&&!r.isWalkableAt(t,e-1))return[t,e]}else if(r.isWalkableAt(t+1,e+s)&&!r.isWalkableAt(t+1,e)||r.isWalkableAt(t-1,e+s)&&!r.isWalkableAt(t-1,e))return[t,e];return this._jump(t+o,e+s,t,e)},o.prototype._findNeighbors=function(t){var e,n,i,o,s,a,l,h,u=t.parent,p=t.x,c=t.y,f=this.grid,d=[];if(u)e=u.x,n=u.y,i=(p-e)/Math.max(Math.abs(p-e),1),o=(c-n)/Math.max(Math.abs(c-n),1),0!==i&&0!==o?(f.isWalkableAt(p,c+o)&&d.push([p,c+o]),f.isWalkableAt(p+i,c)&&d.push([p+i,c]),f.isWalkableAt(p+i,c+o)&&d.push([p+i,c+o]),f.isWalkableAt(p-i,c)||d.push([p-i,c+o]),f.isWalkableAt(p,c-o)||d.push([p+i,c-o])):0===i?(f.isWalkableAt(p,c+o)&&d.push([p,c+o]),f.isWalkableAt(p+1,c)||d.push([p+1,c+o]),f.isWalkableAt(p-1,c)||d.push([p-1,c+o])):(f.isWalkableAt(p+i,c)&&d.push([p+i,c]),f.isWalkableAt(p,c+1)||d.push([p+i,c+1]),f.isWalkableAt(p,c-1)||d.push([p+i,c-1]));else for(s=f.getNeighbors(t,r.Always),l=0,h=s.length;l<h;++l)a=s[l],d.push([a.x,a.y]);return d},t.exports=o},"8c9f":function(t,e,n){var i=n("6d1c"),r=n("ede5");function o(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=r.OnlyWhenNoObstacles:this.diagonalMovement=r.IfAtMostOneObstacle:this.diagonalMovement=r.Never)}o.prototype.findPath=function(t,e,n,r,o){var s,a,l,h,u,p=o.getNodeAt(t,e),c=o.getNodeAt(n,r),f=[],d=[],g=this.diagonalMovement,b=0,v=1;f.push(p),p.opened=!0,p.by=b,d.push(c),c.opened=!0,c.by=v;while(f.length&&d.length){for(l=f.shift(),l.closed=!0,s=o.getNeighbors(l,g),h=0,u=s.length;h<u;++h)if(a=s[h],!a.closed)if(a.opened){if(a.by===v)return i.biBacktrace(l,a)}else f.push(a),a.parent=l,a.opened=!0,a.by=b;for(l=d.shift(),l.closed=!0,s=o.getNeighbors(l,g),h=0,u=s.length;h<u;++h)if(a=s[h],!a.closed)if(a.opened){if(a.by===b)return i.biBacktrace(a,l)}else d.push(a),a.parent=l,a.opened=!0,a.by=v}return[]},t.exports=o},9808:function(t,e,n){var i=n("6d1c"),r=n("ede5");function o(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=r.OnlyWhenNoObstacles:this.diagonalMovement=r.IfAtMostOneObstacle:this.diagonalMovement=r.Never)}o.prototype.findPath=function(t,e,n,r,o){var s,a,l,h,u,p=[],c=this.diagonalMovement,f=o.getNodeAt(t,e),d=o.getNodeAt(n,r);p.push(f),f.opened=!0;while(p.length){if(l=p.shift(),l.closed=!0,l===d)return i.backtrace(d);for(s=o.getNeighbors(l,c),h=0,u=s.length;h<u;++h)a=s[h],a.closed||a.opened||(p.push(a),a.opened=!0,a.parent=l)}return[]},t.exports=o},9812:function(t,e,n){t.exports=n("8970")},a46c:function(t,e,n){var i=n("7df9"),r=n("ede5");function o(t,e,n){var i;"object"!==typeof t?i=t:(e=t.length,i=t[0].length,n=t),this.width=i,this.height=e,this.nodes=this._buildNodes(i,e,n)}o.prototype._buildNodes=function(t,e,n){var r,o,s=new Array(e);for(r=0;r<e;++r)for(s[r]=new Array(t),o=0;o<t;++o)s[r][o]=new i(o,r);if(void 0===n)return s;if(n.length!==e||n[0].length!==t)throw new Error("Matrix size does not fit");for(r=0;r<e;++r)for(o=0;o<t;++o)n[r][o]&&(s[r][o].walkable=!1);return s},o.prototype.getNodeAt=function(t,e){return this.nodes[e][t]},o.prototype.isWalkableAt=function(t,e){return this.isInside(t,e)&&this.nodes[e][t].walkable},o.prototype.isInside=function(t,e){return t>=0&&t<this.width&&e>=0&&e<this.height},o.prototype.setWalkableAt=function(t,e,n){this.nodes[e][t].walkable=n},o.prototype.getNeighbors=function(t,e){var n=t.x,i=t.y,o=[],s=!1,a=!1,l=!1,h=!1,u=!1,p=!1,c=!1,f=!1,d=this.nodes;if(this.isWalkableAt(n,i-1)&&(o.push(d[i-1][n]),s=!0),this.isWalkableAt(n+1,i)&&(o.push(d[i][n+1]),l=!0),this.isWalkableAt(n,i+1)&&(o.push(d[i+1][n]),u=!0),this.isWalkableAt(n-1,i)&&(o.push(d[i][n-1]),c=!0),e===r.Never)return o;if(e===r.OnlyWhenNoObstacles)a=c&&s,h=s&&l,p=l&&u,f=u&&c;else if(e===r.IfAtMostOneObstacle)a=c||s,h=s||l,p=l||u,f=u||c;else{if(e!==r.Always)throw new Error("Incorrect value of diagonalMovement");a=!0,h=!0,p=!0,f=!0}return a&&this.isWalkableAt(n-1,i-1)&&o.push(d[i-1][n-1]),h&&this.isWalkableAt(n+1,i-1)&&o.push(d[i-1][n+1]),p&&this.isWalkableAt(n+1,i+1)&&o.push(d[i+1][n+1]),f&&this.isWalkableAt(n-1,i+1)&&o.push(d[i+1][n-1]),o},o.prototype.clone=function(){var t,e,n=this.width,r=this.height,s=this.nodes,a=new o(n,r),l=new Array(r);for(t=0;t<r;++t)for(l[t]=new Array(n),e=0;e<n;++e)l[t][e]=new i(e,t,s[t][e].walkable);return a.nodes=l,a},t.exports=o},a99b:function(t,e,n){t.exports={Heap:n("9812"),Node:n("7df9"),Grid:n("a46c"),Util:n("6d1c"),DiagonalMovement:n("ede5"),Heuristic:n("21bb"),AStarFinder:n("008b"),BestFirstFinder:n("4a7f"),BreadthFirstFinder:n("9808"),DijkstraFinder:n("00e3"),BiAStarFinder:n("7314"),BiBestFirstFinder:n("b876"),BiBreadthFirstFinder:n("8c9f"),BiDijkstraFinder:n("4152"),IDAStarFinder:n("c815"),JumpPointFinder:n("e9ba")}},b876:function(t,e,n){var i=n("7314");function r(t){i.call(this,t);var e=this.heuristic;this.heuristic=function(t,n){return 1e6*e(t,n)}}r.prototype=new i,r.prototype.constructor=r,t.exports=r},bd2d:function(t,e,n){"use strict";var i=n("5cba")(!0);n("61b5")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},c815:function(t,e,n){n("6d1c");var i=n("21bb"),r=n("7df9"),o=n("ede5");function s(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.heuristic=t.heuristic||i.manhattan,this.weight=t.weight||1,this.trackRecursion=t.trackRecursion||!1,this.timeLimit=t.timeLimit||1/0,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=o.OnlyWhenNoObstacles:this.diagonalMovement=o.IfAtMostOneObstacle:this.diagonalMovement=o.Never),this.diagonalMovement===o.Never?this.heuristic=t.heuristic||i.manhattan:this.heuristic=t.heuristic||i.octile}s.prototype.findPath=function(t,e,n,i,o){var s,a,l,h=(new Date).getTime(),u=function(t,e){return this.heuristic(Math.abs(e.x-t.x),Math.abs(e.y-t.y))}.bind(this),p=function(t,e){return t.x===e.x||t.y===e.y?1:Math.SQRT2},c=function(t,e,n,i,s){if(0,this.timeLimit>0&&(new Date).getTime()-h>1e3*this.timeLimit)return 1/0;var a,l,f,g,b=e+u(t,d)*this.weight;if(b>n)return b;if(t==d)return i[s]=[t.x,t.y],t;var v=o.getNeighbors(t,this.diagonalMovement);for(f=0,a=1/0;g=v[f];++f){if(this.trackRecursion&&(g.retainCount=g.retainCount+1||1,!0!==g.tested&&(g.tested=!0)),l=c(g,e+p(t,g),n,i,s+1),l instanceof r)return i[s]=[t.x,t.y],l;this.trackRecursion&&0===--g.retainCount&&(g.tested=!1),l<a&&(a=l)}return a}.bind(this),f=o.getNodeAt(t,e),d=o.getNodeAt(n,i),g=u(f,d);for(s=0;1;++s){if(a=[],l=c(f,0,g,a,0),l===1/0)return[];if(l instanceof r)return a;g=l}return[]},t.exports=s},d7ad:function(t,e,n){var i=n("394c"),r=n("ede5");function o(t){i.call(this,t)}o.prototype=new i,o.prototype.constructor=o,o.prototype._jump=function(t,e,n,i){var r=this.grid,o=t-n,s=e-i;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o&&0!==s){if(this._jump(t+o,e,t,e)||this._jump(t,e+s,t,e))return[t,e]}else if(0!==o){if(r.isWalkableAt(t,e-1)&&!r.isWalkableAt(t-o,e-1)||r.isWalkableAt(t,e+1)&&!r.isWalkableAt(t-o,e+1))return[t,e]}else if(0!==s&&(r.isWalkableAt(t-1,e)&&!r.isWalkableAt(t-1,e-s)||r.isWalkableAt(t+1,e)&&!r.isWalkableAt(t+1,e-s)))return[t,e];return r.isWalkableAt(t+o,e)&&r.isWalkableAt(t,e+s)?this._jump(t+o,e+s,t,e):null},o.prototype._findNeighbors=function(t){var e,n,i,o,s,a,l,h,u,p=t.parent,c=t.x,f=t.y,d=this.grid,g=[];if(p){if(e=p.x,n=p.y,i=(c-e)/Math.max(Math.abs(c-e),1),o=(f-n)/Math.max(Math.abs(f-n),1),0!==i&&0!==o)d.isWalkableAt(c,f+o)&&g.push([c,f+o]),d.isWalkableAt(c+i,f)&&g.push([c+i,f]),d.isWalkableAt(c,f+o)&&d.isWalkableAt(c+i,f)&&g.push([c+i,f+o]);else if(0!==i){u=d.isWalkableAt(c+i,f);var b=d.isWalkableAt(c,f+1),v=d.isWalkableAt(c,f-1);u&&(g.push([c+i,f]),b&&g.push([c+i,f+1]),v&&g.push([c+i,f-1])),b&&g.push([c,f+1]),v&&g.push([c,f-1])}else if(0!==o){u=d.isWalkableAt(c,f+o);var y=d.isWalkableAt(c+1,f),k=d.isWalkableAt(c-1,f);u&&(g.push([c,f+o]),y&&g.push([c+1,f+o]),k&&g.push([c-1,f+o])),y&&g.push([c+1,f]),k&&g.push([c-1,f])}}else for(s=d.getNeighbors(t,r.OnlyWhenNoObstacles),l=0,h=s.length;l<h;++l)a=s[l],g.push([a.x,a.y]);return g},t.exports=o},e0e7:function(t,e,n){t.exports=n("a99b")},e9ba:function(t,e,n){var i=n("ede5"),r=n("f345"),o=n("8af5"),s=n("d7ad"),a=n("eeba");function l(t){return t=t||{},t.diagonalMovement===i.Never?new r(t):t.diagonalMovement===i.Always?new o(t):t.diagonalMovement===i.OnlyWhenNoObstacles?new s(t):new a(t)}t.exports=l},ede5:function(t,e){var n={Always:1,Never:2,IfAtMostOneObstacle:3,OnlyWhenNoObstacles:4};t.exports=n},eeba:function(t,e,n){var i=n("394c"),r=n("ede5");function o(t){i.call(this,t)}o.prototype=new i,o.prototype.constructor=o,o.prototype._jump=function(t,e,n,i){var r=this.grid,o=t-n,s=e-i;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o&&0!==s){if(r.isWalkableAt(t-o,e+s)&&!r.isWalkableAt(t-o,e)||r.isWalkableAt(t+o,e-s)&&!r.isWalkableAt(t,e-s))return[t,e];if(this._jump(t+o,e,t,e)||this._jump(t,e+s,t,e))return[t,e]}else if(0!==o){if(r.isWalkableAt(t+o,e+1)&&!r.isWalkableAt(t,e+1)||r.isWalkableAt(t+o,e-1)&&!r.isWalkableAt(t,e-1))return[t,e]}else if(r.isWalkableAt(t+1,e+s)&&!r.isWalkableAt(t+1,e)||r.isWalkableAt(t-1,e+s)&&!r.isWalkableAt(t-1,e))return[t,e];return r.isWalkableAt(t+o,e)||r.isWalkableAt(t,e+s)?this._jump(t+o,e+s,t,e):null},o.prototype._findNeighbors=function(t){var e,n,i,o,s,a,l,h,u=t.parent,p=t.x,c=t.y,f=this.grid,d=[];if(u)e=u.x,n=u.y,i=(p-e)/Math.max(Math.abs(p-e),1),o=(c-n)/Math.max(Math.abs(c-n),1),0!==i&&0!==o?(f.isWalkableAt(p,c+o)&&d.push([p,c+o]),f.isWalkableAt(p+i,c)&&d.push([p+i,c]),(f.isWalkableAt(p,c+o)||f.isWalkableAt(p+i,c))&&d.push([p+i,c+o]),!f.isWalkableAt(p-i,c)&&f.isWalkableAt(p,c+o)&&d.push([p-i,c+o]),!f.isWalkableAt(p,c-o)&&f.isWalkableAt(p+i,c)&&d.push([p+i,c-o])):0===i?f.isWalkableAt(p,c+o)&&(d.push([p,c+o]),f.isWalkableAt(p+1,c)||d.push([p+1,c+o]),f.isWalkableAt(p-1,c)||d.push([p-1,c+o])):f.isWalkableAt(p+i,c)&&(d.push([p+i,c]),f.isWalkableAt(p,c+1)||d.push([p+i,c+1]),f.isWalkableAt(p,c-1)||d.push([p+i,c-1]));else for(s=f.getNeighbors(t,r.IfAtMostOneObstacle),l=0,h=s.length;l<h;++l)a=s[l],d.push([a.x,a.y]);return d},t.exports=o},f063:function(t,e,n){"use strict";var i=n("fffe"),r=n("8718"),o=n("03a4"),s=n("d001"),a=n("1295"),l=n("5896"),h=n("38bc"),u=n("96ec");r(r.S+r.F*!n("c2e9")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,p,c=o(t),f="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,b=void 0!==g,v=0,y=u(c);if(b&&(g=i(g,d>2?arguments[2]:void 0,2)),void 0==y||f==Array&&a(y))for(e=l(c.length),n=new f(e);e>v;v++)h(n,v,b?g(c[v],v):c[v]);else for(p=y.call(c),n=new f;!(r=p.next()).done;v++)h(n,v,b?s(p,g,[r.value,v],!0):r.value);return n.length=v,n}})},f345:function(t,e,n){var i=n("394c"),r=n("ede5");function o(t){i.call(this,t)}o.prototype=new i,o.prototype.constructor=o,o.prototype._jump=function(t,e,n,i){var r=this.grid,o=t-n,s=e-i;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o){if(r.isWalkableAt(t,e-1)&&!r.isWalkableAt(t-o,e-1)||r.isWalkableAt(t,e+1)&&!r.isWalkableAt(t-o,e+1))return[t,e]}else{if(0===s)throw new Error("Only horizontal and vertical movements are allowed");if(r.isWalkableAt(t-1,e)&&!r.isWalkableAt(t-1,e-s)||r.isWalkableAt(t+1,e)&&!r.isWalkableAt(t+1,e-s))return[t,e];if(this._jump(t+1,e,t,e)||this._jump(t-1,e,t,e))return[t,e]}return this._jump(t+o,e+s,t,e)},o.prototype._findNeighbors=function(t){var e,n,i,o,s,a,l,h,u=t.parent,p=t.x,c=t.y,f=this.grid,d=[];if(u)e=u.x,n=u.y,i=(p-e)/Math.max(Math.abs(p-e),1),o=(c-n)/Math.max(Math.abs(c-n),1),0!==i?(f.isWalkableAt(p,c-1)&&d.push([p,c-1]),f.isWalkableAt(p,c+1)&&d.push([p,c+1]),f.isWalkableAt(p+i,c)&&d.push([p+i,c])):0!==o&&(f.isWalkableAt(p-1,c)&&d.push([p-1,c]),f.isWalkableAt(p+1,c)&&d.push([p+1,c]),f.isWalkableAt(p,c+o)&&d.push([p,c+o]));else for(s=f.getNeighbors(t,r.Never),l=0,h=s.length;l<h;++l)a=s[l],d.push([a.x,a.y]);return d},t.exports=o}}]);