import{Q as l}from"./QSpace.882cb171.js";import{_ as Q,r as c,u as y,l as _,m as V,n as q,p as n,d as o,q as p,Q as m,aL as v,at as h,au as x}from"./index.a087d920.js";import{T as C,Q as g}from"./TresProgress.fcee718f.js";import{B,Q as F}from"./QToggle.fdcf5418.js";import{Q as S}from"./QForm.365f5d92.js";import{Q as P}from"./QCard.bce1aac1.js";import{Q as w}from"./QPage.12e4cf25.js";import{a as k}from"./axios.7331a07d.js";import"./QChip.a53fc1c7.js";import"./use-dark.b66c2986.js";import"./use-field.fd25eba3.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.5d6a531f.js";import"./use-file-dom-props.d4990a04.js";import"./format.3e32b8d9.js";import"./QLinearProgress.622d7e3a.js";import"./use-checkbox.cc118b78.js";const A={components:{ButtonProgress:B,TresProgress:C},setup(){const a=c(!1),e=c(null),i=c(null),t=y();async function u(){const s=new FormData;s.append("compromiso",e.value),s.append("escrito",i.value);try{await k.post("http://127.0.0.1:3000/upload",s,{headers:{"Content-Type":"multipart/form-data"}},t.push("/alumno/postgrado/thk")),console.log("Archivos enviados correctamente",s)}catch(d){console.error("Error al enviar los archivos:",d)}}function f(){e.value=null,i.value=null}return{onSubmit:u,onReset:f,accept:a,compromiso:e,escrito:i}}},b=a=>(h("data-v-00b845f6"),a=a(),x(),a),R=b(()=>p("p",{class:"title"},"Beca Postgrado",-1)),I=b(()=>p("p",null,"\xA1Adjuntar solo archivos PDF!",-1)),T={class:"q-pa-xs q-pt-lg"},j={class:"row",padding:""},D={class:"col-12 q-pt-lg"};function E(a,e,i,t,u,f){const s=_("button-progress"),d=_("tres-progress");return V(),q(w,{class:"q-pa-md container",padding:""},{default:n(()=>[R,o(s),o(d),o(l),I,o(l),p("div",T,[o(P,{class:"my-card q-card-bordered"},{default:n(()=>[o(S,{onSubmit:t.onSubmit,onReset:t.onReset,class:"q-gutter-md",enctype:"multipart/form-data"},{default:n(()=>[p("div",j,[o(g,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:t.compromiso,"onUpdate:modelValue":e[1]||(e[1]=r=>t.compromiso=r),name:"pdfFiles",label:"Carta compromiso y aceptacion de beca",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[o(m,{round:"",dense:"",flat:"",icon:"add",onClick:e[0]||(e[0]=v(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),o(l),o(g,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:t.escrito,"onUpdate:modelValue":e[3]||(e[3]=r=>t.escrito=r),name:"pdfFiles",label:"Escrito de petici\xF3n de BECA en pu\xF1o y letra del interesado hacia la universidad",counter:"","max-files":"12",accept:"application/pdf"},{default:n(()=>[o(m,{round:"",dense:"",flat:"",icon:"add",onClick:e[2]||(e[2]=v(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),o(l),o(F,{modelValue:t.accept,"onUpdate:modelValue":e[4]||(e[4]=r=>t.accept=r),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),p("div",D,[o(m,{label:"Continuar",type:"submit",color:"primary"})]),o(l)])]),_:1},8,["onSubmit","onReset"])]),_:1})])]),_:1})}var ao=Q(A,[["render",E],["__scopeId","data-v-00b845f6"]]);export{ao as default};
