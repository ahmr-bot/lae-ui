import{_ as U}from"./list.83618aa3.js";import{r as b,i as g,m as $,n as B,p as j,c as r,w as t,a as o,o as l,b as e,d as u,e as p,f as k,F as v,h as n,t as _}from"./index.159ef66f.js";const D=n("thead",null,[n("tr",null,[n("th",null,"\u670D\u52A1"),n("th",null,"\u540D\u79F0\u548C\u72B6\u6001"),n("th",null,"\u4ECA\u65E5\u5165\u7F51"),n("th",null,"\u4ECA\u65E5\u51FA\u7F51")])],-1),L=n("thead",null,[n("tr",null,[n("th",null,"\u670D\u52A1"),n("th",null,"\u540D\u79F0\u548C\u72B6\u6001")])],-1),O={data:()=>({drawer:111})},A=Object.assign(O,{__name:"Servers",setup(T){const f=b([]),h=b([]),F=b([]);return g.get("/servers").then(s=>{f.value=s.data,F.value=s.data.meta.toFixed(4)}),g.get("/modules").then(s=>{h.value=s.data}),$(()=>{B.channel("servers").listen(".servers",s=>{f.value=s.data,g.get("/modules").then(d=>{h.value=d.data})})}),j(()=>{B.leave("servers")}),(s,d)=>{const V=o("v-app-bar-nav-icon"),C=o("v-toolbar-title"),N=o("v-app-bar"),E=o("v-navigation-drawer"),w=o("v-card-title"),c=o("v-list-item-title"),i=o("v-list-item"),y=o("v-table"),x=o("v-card"),G=o("v-container"),M=o("v-main"),S=o("v-app");return l(),r(S,{id:"inspire"},{default:t(()=>[e(N,{color:"primary"},{default:t(()=>[e(V,{onClick:d[0]||(d[0]=m=>s.drawer=!s.drawer)}),e(C,null,{default:t(()=>[u("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1})]),_:1}),e(E,{modelValue:s.drawer,"onUpdate:modelValue":d[1]||(d[1]=m=>s.drawer=m),"expand-on-hover":"",rail:"",permanent:""},{default:t(()=>[e(U)]),_:1},8,["modelValue"]),e(M,null,{default:t(()=>[e(G,null,{default:t(()=>[(l(),p(v,null,k(1,m=>(l(),p(v,{key:m},[e(x,null,{default:t(()=>[e(w,null,{default:t(()=>[u("\u670D\u52A1\u5668\u5217\u8868")]),_:1}),e(y,{class:"table"},{default:t(()=>[D,n("tbody",null,[(l(!0),p(v,null,k(f.value,a=>(l(),p("tr",null,[n("td",null,_(a.module.name),1),n("td",null,[a.status=="up"?(l(),r(i,{key:0,"item-props":"",class:"text-success","prepend-icon":"check_circle"},{default:t(()=>[e(c,null,{default:t(()=>[u("\xA0 "+_(a.name),1)]),_:2},1024)]),_:2},1024)):a.status=="maintenance"?(l(),r(i,{key:1,"item-props":"",class:"text-warning","prepend-icon":"build_circle"},{default:t(()=>[e(c,null,{default:t(()=>[u("\xA0 "+_(a.name),1)]),_:2},1024)]),_:2},1024)):(l(),r(i,{key:2,"item-props":"",class:"text-danger","prepend-icon":"error_outline"},{default:t(()=>[e(c,null,{default:t(()=>[u("\xA0 "+_(a.name),1)]),_:2},1024)]),_:2},1024))]),n("td",null,_((a.meta.total_traffic_in/1024/1024/1024).toFixed(4))+" GB",1),n("td",null,_((a.meta.total_traffic_out/1024/1024/1024).toFixed(4))+" GB",1)]))),256))])]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(w,null,{default:t(()=>[u(" \u6A21\u5757\u72B6\u6001 ")]),_:1}),e(y,{class:"table"},{default:t(()=>[L,n("tbody",null,[(l(!0),p(v,null,k(h.value,a=>(l(),p("tr",null,[n("td",null,_(a.name),1),n("td",null,[a.status=="up"?(l(),r(i,{key:0,"item-props":"",class:"text-success","prepend-icon":"check_circle"},{default:t(()=>[e(c,null,{default:t(()=>[u("\xA0 \u6B63\u5E38")]),_:1})]),_:1})):a.status=="maintenance"?(l(),r(i,{key:1,"item-props":"",class:"text-warning","prepend-icon":"build_circle"},{default:t(()=>[e(c,null,{default:t(()=>[u("\xA0 \u7EF4\u62A4\u4E2D")]),_:1})]),_:1})):(l(),r(i,{key:2,"item-props":"",class:"text-danger","prepend-icon":"error_outline"},{default:t(()=>[e(c,null,{default:t(()=>[u("\xA0 \u4E0D\u53EF\u7528")]),_:1})]),_:1}))])]))),256))])]),_:1})]),_:1})],64))),64))]),_:1})]),_:1})]),_:1})}}});export{A as default};
