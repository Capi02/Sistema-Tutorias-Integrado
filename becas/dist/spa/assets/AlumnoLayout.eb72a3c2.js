import{_ as i,r as u,l as d,m,n as _,p as t,d as e,q as l,Q as a}from"./index.467b1f04.js";import{Q as f,a as p,b as k,c as b,d as v}from"./QLayout.af15172a.js";import"./use-prevent-scroll.904b08a6.js";import"./use-dark.b2e99491.js";import"./format.3e32b8d9.js";const C=sessionStorage.getItem("key");fetch(`${window.location.origin}/api/student/${C}`).then(o=>o.json()).then(o=>console.log(o));const g={setup(){const o=u(!1);return{leftDrawerOpen:o,toggleLeftDrawer(){o.value=!o.value}}}},h={class:"toolbar-left"},w=l("img",{class:"contlogo",src:"public/img/logouttn.png"},null,-1),y={class:"toolbar-right"},Q={class:"menu"},B={class:"menu-container"},D={class:"bottoms"};function L(o,s,V,n,x,O){const r=d("router-view");return m(),_(f,{view:"hHh LpR fFf"},{default:t(()=>[e(k,{elevated:"",class:"custom-header"},{default:t(()=>[e(p,{class:"custom-toolbar"},{default:t(()=>[l("div",h,[e(a,{dense:"",flat:"",round:"",icon:"menu",onClick:n.toggleLeftDrawer},null,8,["onClick"])]),w,l("div",y,[e(a,{dense:"",flat:"",round:"",icon:"house",onClick:o.onClick},null,8,["onClick"])])]),_:1})]),_:1}),e(b,{"show-if-above":"",class:"menu-container",modelValue:n.leftDrawerOpen,"onUpdate:modelValue":s[0]||(s[0]=c=>n.leftDrawerOpen=c),side:"left",bordered:""},{default:t(()=>[l("div",Q,[l("div",B,[l("div",D,[e(a,{color:"secondary",class:"buttoms","text-color":"black",label:"Becas",onClick:o.onClick,to:"/alumno"},null,8,["onClick"]),e(a,{color:"secondary",class:"buttoms","text-color":"black",label:"Formatos",onClick:o.onClick,to:"/alumno/formatos"},null,8,["onClick"]),e(a,{color:"secondary",class:"buttoms","text-color":"black",label:"Mi Beca",onClick:o.onClick,to:"/alumno/mibeca"},null,8,["onClick"])])])])]),_:1},8,["modelValue"]),e(v,null,{default:t(()=>[e(r)]),_:1})]),_:1})}var j=i(g,[["render",L]]);export{j as default};
