import{Q as l}from"./QSpace.02cacd90.js";import{Q}from"./QInput.4dc5f0e4.js";import{_ as y,r as c,u as V,l as _,m as q,n as I,p as n,d as o,q as d,Q as u,aN as v,at as h,au as C}from"./index.0a4cc95d.js";import{T as S,Q as g}from"./TresProgress.b81cb0ac.js";import{B as x,Q as B}from"./QToggle.5d1502cb.js";import{Q as F}from"./QForm.2e491152.js";import{Q as E}from"./QCard.30b991a5.js";import{Q as k}from"./QPage.6f2780ac.js";import{a as w}from"./axios.7331a07d.js";import"./use-key-composition.d5947e72.js";import"./use-dark.73e1a64d.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./QChip.e9cf1f0c.js";import"./format.3e32b8d9.js";import"./QLinearProgress.2e1dc632.js";import"./use-checkbox.3c6e425b.js";const A={components:{ButtonProgress:x,TresProgress:S},setup(){const r=c(!1),e=c(null),i=c(null),t=V();async function f(){const a=new FormData;a.append("studentId",p.value),a.append("compromiso",e.value),a.append("escrito",i.value);try{await w.post("http://127.0.0.1:3000/upload",a,{headers:{"Content-Type":"multipart/form-data"}},t.push("/alumno/economica/thk")),console.log("Archivos enviados correctamente",a)}catch(s){console.error("Error al enviar los archivos:",s)}}const p=c();onMounted(async()=>{try{const a=sessionStorage.getItem("key");p.value=a}catch(a){console.error("Error al obtener los datos del estudiante:",a)}});function m(){e.value=null,i.value=null}return{onSubmit:f,onReset:m,accept:r,compromiso:e,escrito:i,studentId:p}}},b=r=>(h("data-v-265fc860"),r=r(),C(),r),R=b(()=>d("p",{class:"title"},"Beca Econ\xF3mica",-1)),T=b(()=>d("p",null,"\xA1Adjuntar solo archivos PDF!",-1)),D={class:"q-pa-xs q-pt-lg"},P={class:"row",padding:""},U={class:"col-12 q-pt-lg"};function j(r,e,i,t,f,p){const m=_("button-progress"),a=_("tres-progress");return q(),I(k,{class:"q-pa-md container",padding:""},{default:n(()=>[R,o(m),o(a),o(l),T,o(l),d("div",D,[o(E,{class:"my-card q-card-bordered"},{default:n(()=>[o(F,{onSubmit:t.onSubmit,onReset:t.onReset,class:"q-gutter-md",enctype:"multipart/form-data"},{default:n(()=>[d("div",P,[o(Q,{filled:"",modelValue:t.studentId,"onUpdate:modelValue":e[0]||(e[0]=s=>t.studentId=s),class:"col-5 q-pt-lg",hint:"Tu ID",dense:r.dense,disable:"",readonly:""},null,8,["modelValue","dense"]),o(l),o(g,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:t.compromiso,"onUpdate:modelValue":e[2]||(e[2]=s=>t.compromiso=s),name:"pdfFiles",label:"Carta compromiso y aceptacion de beca",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[o(u,{round:"",dense:"",flat:"",icon:"add",onClick:e[1]||(e[1]=v(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),o(l),o(g,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:t.escrito,"onUpdate:modelValue":e[4]||(e[4]=s=>t.escrito=s),name:"pdfFiles",label:"Escrito de petici\xF3n de BECA en pu\xF1o y letra del interesado hacia la universidad",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[o(u,{round:"",dense:"",flat:"",icon:"add",onClick:e[3]||(e[3]=v(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),o(l),o(B,{modelValue:t.accept,"onUpdate:modelValue":e[5]||(e[5]=s=>t.accept=s),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),d("div",U,[o(u,{label:"Continuar",type:"submit",color:"primary"})]),o(l)])]),_:1},8,["onSubmit","onReset"])]),_:1})])]),_:1})}var ao=y(A,[["render",j],["__scopeId","data-v-265fc860"]]);export{ao as default};