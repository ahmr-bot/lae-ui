import{_ as $}from"./list.83618aa3.js";import{r as F,p as I,c as N,w as a,i as x,a as n,o as r,b as e,d as m,e as _,f as v,F as d,h as t,t as i,l as D}from"./index.159ef66f.js";import{_ as E}from"./WorkOrderStatus.62098336.js";const L=t("h3",null,"\u5DE5\u5355",-1),S={class:"overflow-auto"},U={class:"table table-hover"},j=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"\u540D\u79F0"),t("th",{scope:"col"},"\u4E3B\u673A"),t("th",{scope:"col"},"\u63A5\u6536\u65B9"),t("th",{scope:"col"},"\u72B6\u6001"),t("th",{scope:"col"},"\u4E0A\u6B21\u66F4\u65B0")])],-1),M=["onClick"],T={class:"btn-group",role:"group"},W={data:()=>({drawer:111})},J=Object.assign(W,{__name:"Index",setup(q){const u=F([]);function p(){x.get("/work-orders").then(o=>{u.value=o.data})}p();let f=setInterval(p,1e4);I(()=>{clearInterval(f)});function h(o){D.push({name:"work-orders.show",params:{id:o}})}return(o,s)=>{const b=n("v-app-bar-nav-icon"),w=n("v-toolbar-title"),g=n("v-app-bar"),k=n("v-navigation-drawer"),y=n("v-btn"),V=n("v-container"),C=n("v-main"),B=n("v-app");return r(),N(B,{id:"inspire"},{default:a(()=>[e(g,{color:"primary"},{default:a(()=>[e(b,{onClick:s[0]||(s[0]=c=>o.drawer=!o.drawer)}),e(w,null,{default:a(()=>[m("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1})]),_:1}),e(k,{modelValue:o.drawer,"onUpdate:modelValue":s[1]||(s[1]=c=>o.drawer=c),"expand-on-hover":"",rail:"",permanent:""},{default:a(()=>[e($)]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(V,null,{default:a(()=>[(r(),_(d,null,v(1,c=>(r(),_(d,{key:c},[t("div",null,[L,t("div",S,[t("table",U,[j,t("tbody",null,[(r(!0),_(d,null,v(u.value,l=>(r(),_("tr",{class:"cursor-pointer",onClick:z=>h(l.id)},[t("td",null,i(l.title),1),t("td",null,i(l.host.name),1),t("td",null,i(l.module.name),1),t("td",null,[e(E,{status:l.status},null,8,["status"])]),t("td",null,i(new Date(l.updated_at).toLocaleString()),1)],8,M))),256))])])])]),t("div",null,[t("div",T,[e(y,{color:"primary",type:"button",class:"btn btn-outline-primary",to:{name:"work-orders.create"}},{default:a(()=>[m("\u63D0\u4EA4\u5DE5\u5355 ")]),_:1},8,["to"])])])],64))),64))]),_:1})]),_:1})]),_:1})}}});export{J as default};
