import{r as d,i as r,e as a,j as n,h as t,t as p,g as u,x as h,by as v,o as l}from"./index.d87b3baf.js";const m={key:0},g={key:0},y=t("span",{class:"badge bg-success"},"\u5DF2\u540C\u6B65",-1),f=[y],k={key:1},w=t("span",{class:"badge bg-warning"},"\u540C\u6B65\u4E2D",-1),x=[w],C={key:2},B=["textContent"],N=t("ul",{class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"pills-basic-tab","data-bs-toggle":"pill","data-bs-target":"#pills-basic",type:"button",role:"tab","aria-controls":"pills-basic","aria-selected":"true"}," \u57FA\u672C\u914D\u7F6E ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-cache-tab","data-bs-toggle":"pill","data-bs-target":"#pills-cache",type:"button",role:"tab","aria-controls":"pills-feature","aria-selected":"false"}," \u7F13\u5B58\u914D\u7F6E ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-template-tab","data-bs-toggle":"pill","data-bs-target":"#pills-template",type:"button",role:"tab","aria-controls":"pills-template","aria-selected":"false"}," \u91CD\u8BBE\u6A21\u677F ")])],-1),T={class:"tab-content",id:"pills-tabContent"},V={class:"tab-pane fade show active",id:"pills-basic",role:"tabpanel","aria-labelledby":"pills-basic-tab"},D={class:"row row-cols-3 w-75"},E=t("div",{class:"col"},"CNAME",-1),M={class:"col"},S=["textContent"],j={class:"row row-cols-3 w-75"},A=t("div",{class:"col"},"HTTP \u7AEF\u53E3",-1),H={class:"col"},P=t("div",{class:"tab-pane fade",id:"pills-cache",role:"tabpanel","aria-labelledby":"pills-cache-tab"}," 2 ",-1),q={__name:"Show",setup(R){const o=d({}),s=d(!1),i=v();r.get("/modules/cdn/hosts/"+i.params.id).then(e=>{s.value=e.data.site,o.value=e.data.host});function _(){r.put("/modules/cdn/hosts/"+i.params.id,s.value).then(e=>{console.log(e)})}return(e,c)=>(l(),a("div",null,[s.value?(l(),a("div",m,[s.value.sync_state=="done"?(l(),a("span",g,f)):s.value.sync_state=="syncing"?(l(),a("span",k,x)):n("",!0),o.value?(l(),a("div",C,[t("h3",{textContent:p(o.value.name)},null,8,B)])):n("",!0),N,t("div",T,[t("div",V,[t("div",D,[E,t("div",M,[t("span",{textContent:p(s.value.cname_hostname+"."+s.value.cname_hostname2+"."+s.value.cname_domain)},null,8,S)])]),t("div",j,[A,t("div",H,[u(t("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=b=>s.value.http_listen.port=b)},null,512),[[h,s.value.http_listen.port]])])])])]),P])):n("",!0),t("div",{class:"mt-3"},[t("button",{class:"btn btn-primary",onClick:_},"\u4FDD\u5B58")])]))}};export{q as default};