(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{QeBL:function(e,t,o){"use strict";o.r(t);o("9tFu");var n=o("kFp1"),r=o("/0b7"),i=o.n(r),s=o("L5c0"),a=o("iHE4"),c=o("sOi4"),l={backgroundColor:"#ebebef",color:"#bbb",textAlign:"center",height:"30px",lineHeight:"30px",width:"100%"},p=e=>i.a.createElement("div",{style:l},"hello, ",JSON.stringify(e.store),"!");class u extends r["PureComponent"]{componentDidMount(){setInterval(()=>{this.props.dispatch(Object(c["setCookie"])({a:Math.random()})),setTimeout(()=>{this.props.dispatch(Object(c["setCookie"])({a:null}))},1e3)},3e3)}render(){var e=this.props,t=(e.dispatch,e.store),o=e.cookie;return i.a.createElement(n["a"],null,i.a.createElement(n["a"].Item,null,i.a.createElement(p,{store:t}),i.a.createElement("div",null,JSON.stringify(o))))}}t["default"]=Object(a["a"])(Object(s["connect"])(e=>{var t=e.store,o=e.cookie;return{store:t,cookie:o}})(u))}}]);