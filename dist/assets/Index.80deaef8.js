import{r as p,i as P,c as U,w as e,a as n,o as s,b as t,d as l,e as r,f as V,F as g,g as w,v as x,h as o,t as v,u as B,s as C,j as W}from"./index.d87b3baf.js";import{_ as q}from"./list.3e4eaa89.js";import{u as z,i as G,a as H}from"./installSVGRenderer.5bf627bd.js";const J={style:{width:"100%",height:"500px"},id:"chart-container"},K={class:"mb-2"},Q=o("br",null,null,-1),R=o("div",null,"\u96A7\u9053\u6570\u91CF: 3 \u6761",-1),X=o("div",null,"\u5E26\u5BBD: \u221E Mbps",-1),Y=o("a",{href:"https://dash.laecloud.com"},"\u83B1\u4E91",-1),Z=o("br",null,null,-1),tt=o("br",null,null,-1),et=o("div",null,"Aehxy \u8FD0\u8425/\u7B56\u5212",-1),ot=o("div",null,[o("a",{href:"https://dash.laecloud.com"},"\u83B1\u4E91 \u6240\u6709")],-1),nt=o("br",null,null,-1),lt=o("div",null,"MirrorEdge \u5C5E\u4E8E \u7EAF\u516C\u76CA\u670D\u52A1, \u4E0D\u9650\u5E26\u5BBD/\u6D41\u91CF\uFF0C\u6839\u672C\u662F\u4E0D\u80FD\u76C8\u5229\u7684\uFF0C\u505A\u8FD9\u4E48\u4E45\u7684\u514D\u8D39\u670D\u52A1\u4E5F\u7EAF\u7EAF\u9760\u826F\u5FC3\uFF0C\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u89C9\u5F97 \u955C\u7F18\u6620\u5C04 \u662F\u4E2A\u597D\u670D\u52A1",-1),at=o("div",null,"\u90A3\u4E48\u5C31\u8BF7\u5C3D\u60A8\u7684\u7EF5\u8584\u4E4B\u529B\uFF0C\u52A9\u6211\u4EEC\u8D70\u7684\u66F4\u4E45\u5427\uFF01",-1),st=o("div",null,"\u670D\u52A1\u5668\u8D5E\u52A9\u8BF7\u8054\u7CFB 1878832944",-1),rt=o("br",null,null,-1),_t=o("br",null,null,-1),ct={class:"list-group mt-3"},it={key:0},dt=["href"],ut={class:"d-flex w-100 justify-content-between"},pt={class:"mb-1 text-success"},vt={data:()=>({drawer:111})},gt=Object.assign(vt,{__name:"Index",setup(mt){z([G,H]);const m=p([]),h=p(""),f=p(!1),E=p({});return E.value=!1,P.get("forum/pinned").then(a=>{m.value=a.data,h.value=m.value.base_url,setTimeout(()=>{f.value=!0},1e3)}),(a,_)=>{const M=n("v-app-bar-nav-icon"),N=n("v-toolbar-title"),j=n("v-list-item"),D=n("v-app-bar"),F=n("v-navigation-drawer"),S=n("v-alert"),$=n("v-card-subtitle"),y=n("router-link"),b=n("v-btn"),c=n("v-card-text"),i=n("v-card"),k=n("v-col"),A=n("v-img"),L=n("v-row"),T=n("v-container"),I=n("v-main"),O=n("v-app");return s(),U(O,{id:"inspire"},{default:e(()=>[t(D,{color:"primary"},{default:e(()=>[t(M,{onClick:_[0]||(_[0]=d=>a.drawer=!a.drawer)}),t(N,null,{default:e(()=>[l("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1}),t(j,{"prepend-icon":"login",title:"\u5982\u679C\u957F\u65F6\u95F4\u767D\u5C4F\uFF0C\u8BF7\u70B9\u51FB\u6B64\u5904\u6765\u767B\u5F55",to:{name:"login"}})]),_:1}),t(F,{modelValue:a.drawer,"onUpdate:modelValue":_[1]||(_[1]=d=>a.drawer=d),"expand-on-hover":"",rail:"",permanent:""},{default:e(()=>[t(q)]),_:1},8,["modelValue"]),t(I,null,{default:e(()=>[t(T,null,{default:e(()=>[(s(),r(g,null,V(1,d=>(s(),r(g,{key:d},[w(o("div",J,null,512),[[x,!f.value]]),w(o("div",K,[t(S,{type:"success",color:"primary",title:"Welcome\uFF01",variant:"tonal"},{default:e(()=>[l("\u6B22\u8FCE\u4F7F\u7528 MirrorEdge \u955C\u7F18\u6620\u5C04")]),_:1}),Q,t(L,{class:"mb-6","no-gutters":""},{default:e(()=>[t(k,{cols:"5.5"},{default:e(()=>[t(i,{stext:"\u7528\u6237\u4FE1\u606F"},{default:e(()=>[t($,null,{default:e(()=>[l(v(B(C).state.user.name),1)]),_:1}),t(c,null,{default:e(()=>[R,X,o("div",null,[l("\u4F59\u989D: "+v(B(C).state.user.balance)+" \u5143\uFF08",1),Y,l("\u8D26\u6237\u4F59\u989D \u76EE\u524D\u6CA1\u5565\u7528\uFF09")]),t(y,{class:"text-auto",to:{name:"billing.transactions"}},{default:e(()=>[l(" \u4EA4\u6613\u8BB0\u5F55")]),_:1},8,["to"]),Z,t(y,{class:"text-auto",to:{name:"billing.charge"}},{default:e(()=>[l("\u5145\u503C")]),_:1},8,["to"]),tt,et,ot,t(b,{color:"primary",href:"https://dash.laecloud.com"},{default:e(()=>[l("\u6B22\u8FCE\u4F53\u9A8C\u66F4\u591A \u83B1\u4E91 \u7684\u4F18\u79C0\u670D\u52A1")]),_:1})]),_:1})]),_:1}),nt,t(i,{text:"\u8D5E\u52A9"},{default:e(()=>[t(c,null,{default:e(()=>[lt,at,t(b,{color:"primary",href:"https://afdian.net/a/aehxy"},{default:e(()=>[l("\u8D5E\u52A9(\u73B0\u91D1)")]),_:1}),st,o("div",null,[l("\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8D2D\u4E70\u548C\u4F7F\u7528 "),t(b,{color:"primary",href:"https://dash.laecloud.com"},{default:e(()=>[l("\u83B1\u4E91")]),_:1}),l(" \u7684\u5176\u4ED6\u670D\u52A1\u6765\u652F\u6301\u6211\u4EEC\uFF01")])]),_:1})]),_:1})]),_:1}),t(k,{cols:"2.5",offset:"2.5"},{default:e(()=>[t(i,{href:"https://dash.laecloud.com/modules/gct"},{default:e(()=>[t(c,null,{default:e(()=>[t(A,{width:"300",src:"https://cdn.5-5.site/gct.png"})]),_:1})]),_:1})]),_:1})]),_:1}),rt,_t,t(i,{text:"\u516C\u544A"},{default:e(()=>[t(c,null,{default:e(()=>[w(o("div",null,[(s(!0),r(g,null,V(m.value,u=>(s(),r("div",ct,[u.attributes?(s(),r("span",it,[o("a",{class:"list-group-item list-group-item-action shadow-sm rounded",target:"_blank",href:h.value+"/d/"+u.attributes.slug},[o("div",ut,[o("h5",pt,v(u.attributes.title),1),o("small",null,v(new Date(u.attributes.lastPostedAt).toLocaleString()),1)])],8,dt)])):W("",!0)]))),256))],512),[[x,h.value]])]),_:1})]),_:1})],512),[[x,f.value]])],64))),64))]),_:1})]),_:1})]),_:1})}}});export{gt as default};