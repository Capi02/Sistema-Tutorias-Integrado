import{Q as l}from"./QSpace.02cacd90.js";import{Q as v}from"./QInput.4dc5f0e4.js";import{_ as b,r as c,u as Q,l as _,m as h,n as y,p,d as e,q as r,Q as g,aN as I,at as q,au as V}from"./index.0a4cc95d.js";import{T as S,Q as F}from"./TresProgress.b81cb0ac.js";import{B as R,Q as x}from"./QToggle.5d1502cb.js";import{Q as B}from"./QForm.2e491152.js";import{Q as C}from"./QCard.30b991a5.js";import{Q as w}from"./QPage.6f2780ac.js";import{a as k}from"./axios.7331a07d.js";import"./use-key-composition.d5947e72.js";import"./use-dark.73e1a64d.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./QChip.e9cf1f0c.js";import"./format.3e32b8d9.js";import"./QLinearProgress.2e1dc632.js";import"./use-checkbox.3c6e425b.js";const A={components:{ButtonProgress:R,TresProgress:S},setup(){const s=c(!1),o=c(!1),u=Q();async function t(){const a=new FormData;a.append("studentId",d.value),a.append("pagoref",o.value);try{await k.post("http://127.0.0.1:3000/upload",a,{headers:{"Content-Type":"multipart/form-data"}},u.push("/alumno/referencia/thk")),console.log("Archivos enviados correctamente",a)}catch(i){console.error("Error al enviar los archivos:",i)}}const d=c();onMounted(async()=>{try{const a=sessionStorage.getItem("key");d.value=a}catch(a){console.error("Error al obtener los datos del estudiante:",a)}});function f(){o.value=null}return{onSubmit:t,onReset:f,accept:s,pagoref:o,studentId:d}}},m=s=>(q("data-v-5ee0fe5a"),s=s(),V(),s),D=m(()=>r("p",{class:"title"},"Beca Referencia",-1)),O=m(()=>r("p",null,"\xA1Adjuntar solo archivos PDF!",-1)),T={class:"q-pa-xs q-pt-lg"},N={class:"row",padding:""},P=m(()=>r("p",null,'\xA1NO SOLO FOLIO! Debe ser el recibo donde compruebe que se realiz\xF3 el pago antes de la fecha establecida "de Agosto"',-1)),j={class:"col-12 q-pt-lg"};function U(s,o,u,t,d,f){const a=_("button-progress"),i=_("tres-progress");return h(),y(w,{class:"q-pa-md container",padding:""},{default:p(()=>[D,e(a),e(i),e(l),O,e(l),r("div",T,[e(C,{class:"my-card q-card-bordered"},{default:p(()=>[e(B,{onSubmit:t.onSubmit,onReset:t.onReset,class:"q-gutter-md",enctype:"multipart/form-data"},{default:p(()=>[r("div",N,[e(v,{filled:"",modelValue:t.studentId,"onUpdate:modelValue":o[0]||(o[0]=n=>t.studentId=n),class:"col-5 q-pt-lg",hint:"Tu ID",dense:s.dense,disable:"",readonly:""},null,8,["modelValue","dense"]),e(l),P,e(F,{filled:"","bottom-slots":"",class:"col-5 q-pt-lg",modelValue:t.pagoref,"onUpdate:modelValue":o[2]||(o[2]=n=>t.pagoref=n),name:"pdfFiles",label:"Comprobante de pago del referenciado",counter:"","max-files":"12",accept:"application/pdf"},{default:p(()=>[e(g,{round:"",dense:"",flat:"",icon:"add",onClick:o[1]||(o[1]=I(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue"]),e(l),e(x,{modelValue:t.accept,"onUpdate:modelValue":o[3]||(o[3]=n=>t.accept=n),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),r("div",j,[e(g,{label:"Continuar",type:"submit",color:"primary"})]),e(l)])]),_:1},8,["onSubmit","onReset"])]),_:1})])]),_:1})}var se=b(A,[["render",U],["__scopeId","data-v-5ee0fe5a"]]);export{se as default};
