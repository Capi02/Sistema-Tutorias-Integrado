import{Q as l}from"./QSpace.5cb9d878.js";import{_ as Q,r as i,u as x,l as _,m as V,n as q,p as n,d as o,q as c,Q as m,aN as v,at as y,au as h}from"./index.467b1f04.js";import{T as B,Q as b}from"./TresProgress.23c26b2f.js";import{B as C,Q as F}from"./QToggle.b54af496.js";import{Q as S}from"./QForm.7b778d13.js";import{Q as w}from"./QCard.31b63ebc.js";import{Q as k}from"./QPage.0c926a39.js";import{a as R}from"./axios.7331a07d.js";import"./QChip.298ff4e0.js";import"./use-dark.b2e99491.js";import"./use-form.972fb87a.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-file-dom-props.b0b88407.js";import"./format.3e32b8d9.js";import"./QLinearProgress.59fe65c5.js";import"./use-checkbox.d37e59bc.js";const A={components:{ButtonProgress:C,TresProgress:B},setup(){const a=i(!1),e=i(null),d=i(null),t=x();async function u(){const s=new FormData;s.append("boleta",e.value),s.append("conducta",d.value);try{await R.post("http://127.0.0.1:3000/upload",s,{headers:{"Content-Type":"multipart/form-data"}},t.push("/alumno/excelencia/thk")),console.log("Archivos enviados correctamente",s)}catch(p){console.error("Error al enviar los archivos:",p)}}function f(){e.value=null,d.value=null}return{onSubmit:u,onReset:f,accept:a,credencial,boleta:e,comprobante,compromiso,conducta:d}}},g=a=>(y("data-v-040ae2c8"),a=a(),h(),a),E=g(()=>c("p",{class:"title"},"Beca Excelencia",-1)),I=g(()=>c("p",null,"\xA1Adjuntar solo archivos PDF!",-1)),P={class:"q-pa-xs q-pt-lg"},T={class:"row",padding:""},j={class:"col-12 q-pt-lg"};function D(a,e,d,t,u,f){const s=_("button-progress"),p=_("tres-progress");return V(),q(k,{class:"q-pa-md container",padding:""},{default:n(()=>[E,o(s),o(p),o(l),I,o(l),c("div",P,[o(w,{class:"my-card q-card-bordered"},{default:n(()=>[o(S,{onSubmit:t.onSubmit,onReset:t.onReset,class:"q-gutter-md",enctype:"multipart/form-data"},{default:n(()=>[c("div",T,[o(b,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:t.boleta,"onUpdate:modelValue":e[1]||(e[1]=r=>t.boleta=r),name:"pdfFiles",label:"Boleta de calificaciones",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[o(m,{round:"",dense:"",flat:"",icon:"add",onClick:e[0]||(e[0]=v(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),o(l),o(b,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:t.conducta,"onUpdate:modelValue":e[3]||(e[3]=r=>t.conducta=r),name:"pdfFiles",label:"Carta buena conducta",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[o(m,{round:"",dense:"",flat:"",icon:"add",onClick:e[2]||(e[2]=v(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),o(l),o(F,{modelValue:t.accept,"onUpdate:modelValue":e[4]||(e[4]=r=>t.accept=r),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),c("div",j,[o(m,{label:"Continuar",type:"submit",color:"primary"})]),o(l)])]),_:1},8,["onSubmit","onReset"])]),_:1})])]),_:1})}var to=Q(A,[["render",D],["__scopeId","data-v-040ae2c8"]]);export{to as default};
