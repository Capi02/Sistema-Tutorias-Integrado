import{Q as l}from"./QSpace.882cb171.js";import{_ as Q,r as n,u as q,l as b,m as C,n as x,p as s,d as e,q as p,Q as d,aL as m,at as y,au as F}from"./index.a087d920.js";import{T as B,Q as u}from"./TresProgress.fcee718f.js";import{B as S,Q as k}from"./QToggle.fdcf5418.js";import{Q as w}from"./QForm.365f5d92.js";import{Q as R}from"./QCard.bce1aac1.js";import{Q as U}from"./QPage.12e4cf25.js";import{a as A}from"./axios.7331a07d.js";import"./QChip.a53fc1c7.js";import"./use-dark.b66c2986.js";import"./use-field.fd25eba3.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.5d6a531f.js";import"./use-file-dom-props.d4990a04.js";import"./format.3e32b8d9.js";import"./QLinearProgress.622d7e3a.js";import"./use-checkbox.cc118b78.js";const D={components:{ButtonProgress:S,TresProgress:B},setup(){const r=n(!1),o=n(null),i=n(null),a=n(null),c=n(null),_=q();async function f(){const t=new FormData;t.append("credencial",o.value),t.append("boleta",i.value),t.append("compromiso",a.value),t.append("conducta",c.value);try{await A.post("http://127.0.0.1:3000/upload",t,{headers:{"Content-Type":"multipart/form-data"}},_.push("/alumno/deportiva/thk")),console.log("Archivos enviados correctamente",t)}catch(V){console.error("Error al enviar los archivos:",V)}}function v(){o.value=null,i.value=null,a.value=null,c.value=null}return{onSubmit:f,onReset:v,accept:r,credencial:o,boleta:i,compromiso:a,conducta:c}}},g=r=>(y("data-v-6313748a"),r=r(),F(),r),I=g(()=>p("p",{class:"title"},"Beca Deportiva",-1)),P=g(()=>p("p",null,"\xA1Adjuntar solo archivos PDF!",-1)),T={class:"q-pa-xs q-pt-lg"},j={class:"row",padding:""},N={class:"col-12 q-pt-lg"};function E(r,o,i,a,c,_){const f=b("button-progress"),v=b("tres-progress");return C(),x(U,{class:"q-pa-md container",padding:""},{default:s(()=>[I,e(f),e(v),e(l),P,e(l),p("div",T,[e(R,{class:"my-card q-card-bordered"},{default:s(()=>[e(w,{onSubmit:a.onSubmit,onReset:a.onReset,class:"q-gutter-md",enctype:"multipart/form-data"},{default:s(()=>[p("div",j,[e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.credencial,"onUpdate:modelValue":o[1]||(o[1]=t=>a.credencial=t),name:"pdfFiles",label:"Credencial, ambos lados",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[0]||(o[0]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.boleta,"onUpdate:modelValue":o[3]||(o[3]=t=>a.boleta=t),name:"pdfFiles",label:"Boleta de calificaciones",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[2]||(o[2]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.compromiso,"onUpdate:modelValue":o[5]||(o[5]=t=>a.compromiso=t),name:"pdfFiles",label:"Carta compromiso y aceptacion de beca",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[4]||(o[4]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(u,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:a.conducta,"onUpdate:modelValue":o[7]||(o[7]=t=>a.conducta=t),name:"pdfFiles",label:"Carta buena conducta",counter:"","max-files":"12",accept:"application/pdf"},{default:s(()=>[e(d,{round:"",dense:"",flat:"",icon:"add",onClick:o[6]||(o[6]=m(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(k,{modelValue:a.accept,"onUpdate:modelValue":o[8]||(o[8]=t=>a.accept=t),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),p("div",N,[e(d,{label:"Continuar",type:"submit",color:"primary"})]),e(l)])]),_:1},8,["onSubmit","onReset"])]),_:1})])]),_:1})}var lo=Q(D,[["render",E],["__scopeId","data-v-6313748a"]]);export{lo as default};
