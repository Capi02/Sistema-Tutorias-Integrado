import{Q as l}from"./QSpace.2217e137.js";import{_ as Q,r,u as q,l as b,m as C,n as x,p as s,d as e,q as p,Q as d,aN as m,at as y,au as F}from"./index.4d9ae8b7.js";import{T as B,Q as u}from"./TresProgress.52e9fba4.js";import{B as S,Q as k}from"./QToggle.d16fd0db.js";import{Q as w}from"./QForm.a065764b.js";import{Q as R}from"./QCard.53c235ed.js";import{Q as U}from"./QPage.c06d248b.js";import{a as A}from"./axios.7331a07d.js";import"./QChip.3c0858c7.js";import"./use-dark.db2d3901.js";import"./use-form.641640a1.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-file-dom-props.ac404a48.js";import"./format.3e32b8d9.js";import"./QLinearProgress.ab837cd5.js";import"./use-checkbox.98c7abc1.js";const D={components:{ButtonProgress:S,TresProgress:B},setup(){const n=r(!1),o=r(null),i=r(null),a=r(null),c=r(null),_=q();async function f(){const t=new FormData;t.append("credencial",o.value),t.append("boleta",i.value),t.append("compromiso",a.value),t.append("conducta",c.value);try{await A.post("http://127.0.0.1:3000/upload",t,{headers:{"Content-Type":"multipart/form-data"}},_.push("/alumno/deportiva/thk")),console.log("Archivos enviados correctamente",t)}catch(V){console.error("Error al enviar los archivos:",V)}}function v(){o.value=null,i.value=null,a.value=null,c.value=null}return{onSubmit:f,onReset:v,accept:n,credencial:o,boleta:i,compromiso:a,conducta:c}}},g=n=>(y("data-v-664e8c7c"),n=n(),F(),n),I=g(()=>p("p",{class:"title"},"Beca Deportiva",-1)),P=g(()=>p("p",null,"\xA1Adjuntar solo archivos PDF!",-1)),T={class:"q-pa-xs q-pt-lg"},j={class:"row",padding:""},N={class:"col-12 q-pt-lg"};function E(n,o,i,a,c,_){const f=b("button-progress"),v=b("tres-progress");return C(),x(U,{class:"q-pa-md container",padding:""},{default:s(()=>[I,e(f),e(v),e(l),P,e(l),p("div",T,[e(R,{class:"my-card q-card-bordered"},{default:s(()=>[e(w,{onSubmit:a.onSubmit,onReset:a.onReset,class:"q-gutter-md",enctype:"multipart/form-data"},{default:s(()=>[p("div",j,[e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.credencial,"onUpdate:modelValue":o[1]||(o[1]=t=>a.credencial=t),name:"pdfFiles",label:"Credencial, ambos lados",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[0]||(o[0]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.boleta,"onUpdate:modelValue":o[3]||(o[3]=t=>a.boleta=t),name:"pdfFiles",label:"Boleta de calificaciones",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[2]||(o[2]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.compromiso,"onUpdate:modelValue":o[5]||(o[5]=t=>a.compromiso=t),name:"pdfFiles",label:"Carta compromiso y aceptacion de beca",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[4]||(o[4]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.conducta,"onUpdate:modelValue":o[7]||(o[7]=t=>a.conducta=t),name:"pdfFiles",label:"Carta buena conducta",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[6]||(o[6]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(k,{modelValue:a.accept,"onUpdate:modelValue":o[8]||(o[8]=t=>a.accept=t),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),p("div",N,[e(d,{label:"Continuar",type:"submit",color:"primary"})]),e(l)])]),_:1},8,["onSubmit","onReset"])]),_:1})])]),_:1})}var to=Q(D,[["render",E],["__scopeId","data-v-664e8c7c"]]);export{to as default};
