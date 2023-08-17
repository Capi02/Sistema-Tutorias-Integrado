import{Q as s}from"./QSpace.02cacd90.js";import{Q as c}from"./QInput.4dc5f0e4.js";import{Q as g}from"./QSelect.bbd29f10.js";import{B as F,Q as J}from"./QToggle.5d1502cb.js";import{_ as O,r as t,u as L,o as i,l as G,m as Y,n as j,p as k,d as l,q as f,Q as H,at as K,au as W}from"./index.0a4cc95d.js";import{Q as X}from"./QForm.2e491152.js";import{Q as Z}from"./QPage.6f2780ac.js";import{u as _}from"./use-quasar.9c505f7f.js";import{P as $}from"./ProgresoBar.588b5f78.js";import{a as m}from"./axios.7331a07d.js";import"./use-key-composition.d5947e72.js";import"./use-dark.73e1a64d.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./QChip.e9cf1f0c.js";import"./QMenu.cc6fd88d.js";import"./use-prevent-scroll.36779d27.js";import"./format.3e32b8d9.js";import"./use-checkbox.3c6e425b.js";import"./QLinearProgress.2e1dc632.js";const ee={components:{ButtonProgress:F,ProgresoBar:$},setup(){const d=_(),a=t(!1),w=L(),o=t(),q=t(),P=t(),b=t(),v=t(),e=t(),D=t(),V=t(null),U=t({value:null,label:""}),S=t({value:null,label:""}),h=t({value:null,label:""}),x=t(),A=t(),N=t(),I=t(null),y=t(null),T=t([]),M=t([]),C=t([]),z=t([]),Q=t([]),E=t([]),B=t();i(async()=>{try{const r=sessionStorage.getItem("key");B.value=r}catch(r){console.error("Error al obtener los datos del estudiante:",r)}}),i(async()=>{try{const r=await m.get("http://127.0.0.1:3000/api/becas/4"),n=r.data;n&&(V.value=n.beca),console.log(r)}catch(r){console.error("Error al obtener la beca:",r)}}),i(async()=>{try{const r=await m.get("http://127.0.0.1:3000/api/estados/1"),n=r.data;n&&(y.value=n.estado),console.log(r)}catch(r){console.error("Error al obtener la beca:",r)}}),i(async()=>{try{const r=await m.get("http://127.0.0.1:3000/api/carrera"),n=r.data;n&&n.length>0&&(C.value=n.map(u=>({label:u.carrera,value:u.idcarrera})),U.value=C.value[0]),console.log(r)}catch(r){console.error("Error al obtener la carrera:",r)}}),i(async()=>{try{const r=await m.get("http://127.0.0.1:3000/api/area"),n=r.data;n&&n.length>0&&(z.value=n.map(u=>({label:u.area,value:u.idarea})),S.value=z.value[0]),console.log(r)}catch(r){console.error("Error al obtener el area:",r)}}),i(async()=>{try{const r=await m.get("http://127.0.0.1:3000/api/grado"),n=r.data;n&&n.length>0&&(Q.value=n.map(u=>({label:u.grado,value:u.idgrado})),h.value=Q.value[0]),console.log(r)}catch(r){console.error("Error al obtener el grado:",r)}}),i(async()=>{try{const r=await m.get("http://127.0.0.1:3000/api/genero"),n=r.data;n&&n.length>0&&(E.value=n.map(u=>({label:u.genero,value:u.idgenero})),I.value=E.value[0]),console.log(r)}catch(r){console.error("Error al obtener el genero:",r)}});const p=t({apellidopat:"",apellidomat:"",nombre:"",matricula:"",curp:"",telefono:"",correoinstitucional:"",beca:[],carrera:[],area:[],grado:[],cuatrimestre:"",grupo:"",correotutor:"",genero:[],estado:[],studentId:""});return localStorage.setItem("formData",JSON.stringify(p.value)),{onSubmit:()=>{p.value={apellidopat:o.value,apellidomat:q.value,nombre:P.value,matricula:b.value,curp:v.value,telefono:e.value,correoinstitucional:D.value,beca:V.value,carrera:U.value.value,area:S.value.value,grado:h.value.value,cuatrimestre:x.value,grupo:A.value,correotutor:N.value,genero:I.value.value,estado:y.value.value,studentId:B.value},V.value==="Economica"&&(p.value.beca=4),y.value==="Pendiente"&&(p.value.estado=1),localStorage.setItem("formData",JSON.stringify(p.value)),m.post("http://127.0.0.1:3000/api/form",p).then(r=>{d.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Datos enviados correctamente"}),w.push("/alumno/economica/paso2")}).catch(r=>{console.error("Error al enviar los datos:",r),d.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error al enviar los datos"})})},apellidopat:o,apellidomat:q,nombre:P,matricula:b,curp:v,telefono:e,correoinstitucional:D,beca:V,carrera:U,area:S,grado:h,cuatrimestre:x,grupo:A,correotutor:N,genero:I,estado:y,accept:a,becas:T,estados:M,carreras:C,areas:z,grados:Q,generos:E,studentId:B}}},R=d=>(K("data-v-26cb555b"),d=d(),W(),d),oe=R(()=>f("p",{class:"title"},"Beca Econ\xF3mica",-1)),le=R(()=>f("div",{class:"seccion"},[f("p",null,"Solicitud")],-1)),ae={class:"q-pa-xs q-pt-lg"},re={class:"row"};function te(d,a,w,o,q,P){const b=G("ButtonProgress"),v=G("ProgresoBar");return Y(),j(Z,{class:"q-pa-md container",padding:""},{default:k(()=>[oe,l(b),l(v),l(s),l(s),le,f("div",ae,[l(X,{onSubmit:o.onSubmit,onReset:d.onReset,class:"q-gutter-md"},{default:k(()=>[f("div",re,[l(c,{filled:"",modelValue:o.studentId,"onUpdate:modelValue":a[0]||(a[0]=e=>o.studentId=e),class:"col-5 q-pt-lg",hint:"Tu ID",dense:d.dense,disable:"",readonly:""},null,8,["modelValue","dense"]),l(s),l(c,{filled:"",modelValue:o.apellidopat,"onUpdate:modelValue":a[1]||(a[1]=e=>o.apellidopat=e),label:"Apellido paterno",hint:"Primer Apellido","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(c,{filled:"",modelValue:o.apellidomat,"onUpdate:modelValue":a[2]||(a[2]=e=>o.apellidomat=e),label:"Apellido Materno",hint:"Segundo Apellido",class:"col-5 q-pt-lg"},null,8,["modelValue"]),l(s),l(c,{filled:"",modelValue:o.nombre,"onUpdate:modelValue":a[3]||(a[3]=e=>o.nombre=e),label:"Nombre o nombres",hint:"Escriba su nombre","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(c,{filled:"",type:"number",modelValue:o.matricula,"onUpdate:modelValue":a[4]||(a[4]=e=>o.matricula=e),label:"Matricula",hint:"Matricula de la escuela","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(c,{filled:"",modelValue:o.curp,"onUpdate:modelValue":a[5]||(a[5]=e=>o.curp=e),label:"Ingrese su curp",hint:"Clave \xDAnica de Registro de Poblaci\xF3n","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(c,{filled:"",modelValue:o.telefono,"onUpdate:modelValue":a[6]||(a[6]=e=>o.telefono=e),label:"Telefono",hint:"Numero propio","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(c,{filled:"",type:"email",modelValue:o.correoinstitucional,"onUpdate:modelValue":a[7]||(a[7]=e=>o.correoinstitucional=e),label:"Correo",hint:"Correo Institucional","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(g,{filled:"",modelValue:o.beca,"onUpdate:modelValue":a[8]||(a[8]=e=>o.beca=e),label:"Tipo de beca",hint:"Beca que desea solicitar","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.becas},null,8,["modelValue","rules","options"]),l(s),l(g,{filled:"",modelValue:o.carrera,"onUpdate:modelValue":a[9]||(a[9]=e=>o.carrera=e),label:"Carrera",hint:"Carrera cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.carreras},null,8,["modelValue","rules","options"]),l(s),l(g,{filled:"",modelValue:o.area,"onUpdate:modelValue":a[10]||(a[10]=e=>o.area=e),label:"Area",hint:"Area cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.areas},null,8,["modelValue","rules","options"]),l(s),l(g,{filled:"",modelValue:o.grado,"onUpdate:modelValue":a[11]||(a[11]=e=>o.grado=e),label:"Grado",hint:"Grado al que perteneces ya sea TSU, LIC o ING","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.grados},null,8,["modelValue","rules","options"]),l(s),l(c,{filled:"",modelValue:o.cuatrimestre,"onUpdate:modelValue":a[12]||(a[12]=e=>o.cuatrimestre=e),label:"Cuatrimestre",hint:"Cuatrimestre al que deseas aplicar la beca","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(c,{filled:"",modelValue:o.grupo,"onUpdate:modelValue":a[13]||(a[13]=e=>o.grupo=e),label:"Grupo",hint:"Grupo al que perteneces","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(c,{filled:"",modelValue:o.correotutor,"onUpdate:modelValue":a[14]||(a[14]=e=>o.correotutor=e),label:"Correo del tutor",hint:"Correo de tutor","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(g,{filled:"",modelValue:o.genero,"onUpdate:modelValue":a[15]||(a[15]=e=>o.genero=e),label:"Genero",hint:"Selecciona tu genero","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.generos},null,8,["modelValue","rules","options"]),l(s),l(g,{filled:"",modelValue:o.estado,"onUpdate:modelValue":a[16]||(a[16]=e=>o.estado=e),label:"Pendiente",hint:"As\xED inicia el estado de tu beca","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.estados},null,8,["modelValue","rules","options"]),l(s)]),l(J,{modelValue:o.accept,"onUpdate:modelValue":a[17]||(a[17]=e=>o.accept=e),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),f("div",null,[l(H,{label:"Continuar",type:"submit",color:"primary",onClick:o.onSubmit,to:"/alumno/economica/paso2"},null,8,["onClick"])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var ze=O(ee,[["render",te],["__scopeId","data-v-26cb555b"]]);export{ze as default};
