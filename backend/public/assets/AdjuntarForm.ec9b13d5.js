import{Q as l}from"./QSpace.2217e137.js";import{_ as Q,r as d,u as q,l as g,m as x,n as F,p as n,d as e,q as m,Q as p,aN as i,at as y,au as k}from"./index.4d9ae8b7.js";import{T as B,Q as c}from"./TresProgress.52e9fba4.js";import{B as S,Q as w}from"./QToggle.d16fd0db.js";import{Q as U}from"./QForm.a065764b.js";import{Q as A}from"./QCard.53c235ed.js";import{Q as R}from"./QPage.c06d248b.js";import{a as I}from"./axios.7331a07d.js";import"./QChip.3c0858c7.js";import"./use-dark.db2d3901.js";import"./use-form.641640a1.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-file-dom-props.ac404a48.js";import"./format.3e32b8d9.js";import"./QLinearProgress.ab837cd5.js";import"./use-checkbox.98c7abc1.js";const P={components:{ButtonProgress:S,TresProgress:B},setup(){const r=d(!1),o=d(null),u=d(null),a=d(null),f=d(null),b=d(null),v=q();async function _(){const s=new FormData;s.append("credencial",o.value),s.append("boleta",u.value),s.append("comprobante",a.value),s.append("compromiso",f.value),s.append("conducta",b.value);try{await I.post("http://127.0.0.1:3000/upload",s,{headers:{"Content-Type":"multipart/form-data"}},v.push("/alumno/academica/thk")),console.log("Archivos enviados correctamente",s)}catch(C){console.error("Error al enviar los archivos:",C)}}function t(){o.value=null,u.value=null,a.value=null,f.value=null,b.value=null}return{onSubmit:_,onReset:t,accept:r,credencial:o,boleta:u,comprobante:a,compromiso:f,conducta:b}}},V=r=>(y("data-v-bbbed29a"),r=r(),k(),r),T=V(()=>m("p",{class:"title"},"Beca Academica",-1)),j=V(()=>m("p",null,"\xA1Adjuntar solo archivos PDF!",-1)),D={class:"q-pa-xs q-pt-lg"},N={class:"row",padding:""},E={class:"col-12 q-pt-lg"};function M(r,o,u,a,f,b){const v=g("button-progress"),_=g("tres-progress");return x(),F(R,{class:"q-pa-md container",padding:""},{default:n(()=>[T,e(v),e(_),e(l),j,e(l),m("div",D,[e(A,{class:"my-card q-card-bordered"},{default:n(()=>[e(U,{onSubmit:a.onSubmit,onReset:a.onReset,class:"q-gutter-md",enctype:"multipart/form-data"},{default:n(()=>[m("div",N,[e(c,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.credencial,"onUpdate:modelValue":o[1]||(o[1]=t=>a.credencial=t),name:"pdfFiles",label:"Credencial, ambos lados",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[e(p,{round:"",dense:"",flat:"",icon:"add",onClick:o[0]||(o[0]=i(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(c,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.boleta,"onUpdate:modelValue":o[3]||(o[3]=t=>a.boleta=t),name:"pdfFiles",label:"Boleta de calificaciones",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[e(p,{round:"",dense:"",flat:"",icon:"add",onClick:o[2]||(o[2]=i(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(c,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.comprobante,"onUpdate:modelValue":o[5]||(o[5]=t=>a.comprobante=t),name:"pdfFiles",label:"Comprobante de ingresos",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[e(p,{round:"",dense:"",flat:"",icon:"add",onClick:o[4]||(o[4]=i(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(c,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.compromiso,"onUpdate:modelValue":o[7]||(o[7]=t=>a.compromiso=t),name:"pdfFiles",label:"Carta compromiso y aceptacion de beca",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[e(p,{round:"",dense:"",flat:"",icon:"add",onClick:o[6]||(o[6]=i(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(c,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.conducta,"onUpdate:modelValue":o[9]||(o[9]=t=>a.conducta=t),name:"pdfFiles",label:"Carta buena conducta",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[e(p,{round:"",dense:"",flat:"",icon:"add",onClick:o[8]||(o[8]=i(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(w,{modelValue:a.accept,"onUpdate:modelValue":o[10]||(o[10]=t=>a.accept=t),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),m("div",E,[e(p,{label:"Continuar",type:"submit",color:"primary"})]),e(l)])]),_:1},8,["onSubmit","onReset"])]),_:1})])]),_:1})}var lo=Q(P,[["render",M],["__scopeId","data-v-bbbed29a"]]);export{lo as default};
