import{Q as s}from"./QSpace.882cb171.js";import{Q as i}from"./QInput.ff8271ab.js";import{Q as p}from"./QSelect.457920ea.js";import{B as T,Q as F}from"./QToggle.fdcf5418.js";import{_ as J,r as t,u as O,o as g,l as N,m as L,n as Y,p as G,d as l,q as f,Q as _,at as j,au as H}from"./index.a087d920.js";import{Q as K}from"./QForm.365f5d92.js";import{Q as W}from"./QPage.12e4cf25.js";import{u as X}from"./use-quasar.5151adfb.js";import{P as Z}from"./ProgresoBar.fbda61f6.js";import{a as d}from"./axios.7331a07d.js";import"./use-field.fd25eba3.js";import"./use-dark.b66c2986.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.5d6a531f.js";import"./use-file-dom-props.d4990a04.js";import"./use-key-composition.ec24de95.js";import"./QChip.a53fc1c7.js";import"./QMenu.a0461e97.js";import"./use-prevent-scroll.cb9388ba.js";import"./format.3e32b8d9.js";import"./use-checkbox.cc118b78.js";import"./QLinearProgress.622d7e3a.js";const $={components:{ButtonProgress:T,ProgresoBar:Z},setup(){const c=X(),a=t(!1),D=O(),o=t(),q=t(),P=t(),v=t(),b=t(),e=t(),I=t(),V=t(null),U=t({value:null,label:""}),h=t({value:null,label:""}),S=t({value:null,label:""}),E=t(),x=t(),A=t(),C=t(null),y=t(null),k=t([]),M=t([]),z=t([]),Q=t([]),B=t([]),w=t([]);g(async()=>{try{const r=await d.get("http://127.0.0.1:3000/api/becas/3"),n=r.data;n&&(V.value=n.beca),console.log(r)}catch(r){console.error("Error al obtener la beca:",r)}}),g(async()=>{try{const r=await d.get("http://127.0.0.1:3000/api/estados/1"),n=r.data;n&&(y.value=n.estado),console.log(r)}catch(r){console.error("Error al obtener la beca:",r)}}),g(async()=>{try{const r=await d.get("http://127.0.0.1:3000/api/carrera"),n=r.data;n&&n.length>0&&(z.value=n.map(u=>({label:u.carrera,value:u.idcarrera})),U.value=z.value[0]),console.log(r)}catch(r){console.error("Error al obtener la carrera:",r)}}),g(async()=>{try{const r=await d.get("http://127.0.0.1:3000/api/area"),n=r.data;n&&n.length>0&&(Q.value=n.map(u=>({label:u.area,value:u.idarea})),h.value=Q.value[0]),console.log(r)}catch(r){console.error("Error al obtener el area:",r)}}),g(async()=>{try{const r=await d.get("http://127.0.0.1:3000/api/grado"),n=r.data;n&&n.length>0&&(B.value=n.map(u=>({label:u.grado,value:u.idgrado})),S.value=B.value[0]),console.log(r)}catch(r){console.error("Error al obtener el grado:",r)}}),g(async()=>{try{const r=await d.get("http://127.0.0.1:3000/api/genero"),n=r.data;n&&n.length>0&&(w.value=n.map(u=>({label:u.genero,value:u.idgenero})),C.value=w.value[0]),console.log(r)}catch(r){console.error("Error al obtener el genero:",r)}});const m=t({apellidopat:"",apellidomat:"",nombre:"",matricula:"",curp:"",telefono:"",correoinstitucional:"",beca:[],carrera:[],area:[],grado:[],cuatrimestre:"",grupo:"",correotutor:"",genero:[],estado:[]});return localStorage.setItem("formData",JSON.stringify(m.value)),{onSubmit:()=>{m.value={apellidopat:o.value,apellidomat:q.value,nombre:P.value,matricula:v.value,curp:b.value,telefono:e.value,correoinstitucional:I.value,beca:V.value,carrera:U.value.value,area:h.value.value,grado:S.value.value,cuatrimestre:E.value,grupo:x.value,correotutor:A.value,genero:C.value.value,estado:y.value.value},V.value==="Deportiva"&&(m.value.beca=3),y.value==="Pendiente"&&(m.value.estado=1),localStorage.setItem("formData",JSON.stringify(m.value)),d.post("http://127.0.0.1:3000/api/form",m).then(r=>{c.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Datos enviados correctamente"}),D.push("/alumno/deportiva/paso2")}).catch(r=>{console.error("Error al enviar los datos:",r),c.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error al enviar los datos"})})},apellidopat:o,apellidomat:q,nombre:P,matricula:v,curp:b,telefono:e,correoinstitucional:I,beca:V,carrera:U,area:h,grado:S,cuatrimestre:E,grupo:x,correotutor:A,genero:C,estado:y,accept:a,becas:k,estados:M,carreras:z,areas:Q,grados:B,generos:w}}},R=c=>(j("data-v-0bf99e79"),c=c(),H(),c),ee=R(()=>f("p",{class:"title"},"Beca Deportiva",-1)),oe=R(()=>f("div",{class:"seccion"},[f("p",null,"Solicitud")],-1)),le={class:"q-pa-xs q-pt-lg"},ae={class:"row"};function re(c,a,D,o,q,P){const v=N("ButtonProgress"),b=N("ProgresoBar");return L(),Y(W,{class:"q-pa-md container",padding:""},{default:G(()=>[ee,l(v),l(b),l(s),l(s),oe,f("div",le,[l(K,{onSubmit:o.onSubmit,onReset:c.onReset,class:"q-gutter-md"},{default:G(()=>[f("div",ae,[l(i,{filled:"",modelValue:o.apellidopat,"onUpdate:modelValue":a[0]||(a[0]=e=>o.apellidopat=e),label:"Apellido paterno",hint:"Primer Apellido","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(i,{filled:"",modelValue:o.apellidomat,"onUpdate:modelValue":a[1]||(a[1]=e=>o.apellidomat=e),label:"Apellido Materno",hint:"Segundo Apellido",class:"col-5 q-pt-lg"},null,8,["modelValue"]),l(s),l(i,{filled:"",modelValue:o.nombre,"onUpdate:modelValue":a[2]||(a[2]=e=>o.nombre=e),label:"Nombre Completo",hint:"Empezando por apellidos","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(i,{filled:"",type:"number",modelValue:o.matricula,"onUpdate:modelValue":a[3]||(a[3]=e=>o.matricula=e),label:"Matricula",hint:"Matricula de la escuela","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(i,{filled:"",modelValue:o.curp,"onUpdate:modelValue":a[4]||(a[4]=e=>o.curp=e),label:"Ingrese su curp",hint:"Clave \xDAnica de Registro de Poblaci\xF3n","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(i,{filled:"",type:"number",modelValue:o.telefono,"onUpdate:modelValue":a[5]||(a[5]=e=>o.telefono=e),label:"Telefono",hint:"Numero propio","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(i,{filled:"",type:"email",modelValue:o.correoinstitucional,"onUpdate:modelValue":a[6]||(a[6]=e=>o.correoinstitucional=e),label:"Correo",hint:"Correo Institucional","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(p,{filled:"",modelValue:o.beca,"onUpdate:modelValue":a[7]||(a[7]=e=>o.beca=e),label:"Tipo de beca",hint:"Beca que desea solicitar","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.becas},null,8,["modelValue","rules","options"]),l(s),l(p,{filled:"",modelValue:o.carrera,"onUpdate:modelValue":a[8]||(a[8]=e=>o.carrera=e),label:"Carrera",hint:"Carrera cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.carreras},null,8,["modelValue","rules","options"]),l(s),l(p,{filled:"",modelValue:o.area,"onUpdate:modelValue":a[9]||(a[9]=e=>o.area=e),label:"Area",hint:"Area cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.areas},null,8,["modelValue","rules","options"]),l(s),l(p,{filled:"",modelValue:o.grado,"onUpdate:modelValue":a[10]||(a[10]=e=>o.grado=e),label:"Grado",hint:"Grado al que perteneces ya sea TSU, LIC o ING","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.grados},null,8,["modelValue","rules","options"]),l(s),l(i,{filled:"",modelValue:o.cuatrimestre,"onUpdate:modelValue":a[11]||(a[11]=e=>o.cuatrimestre=e),label:"Cuatrimestre",hint:"Cuatrimestre al que deseas aplicar la beca","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(i,{filled:"",modelValue:o.grupo,"onUpdate:modelValue":a[12]||(a[12]=e=>o.grupo=e),label:"Grupo",hint:"Grupo al que perteneces","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(i,{filled:"",modelValue:o.correotutor,"onUpdate:modelValue":a[13]||(a[13]=e=>o.correotutor=e),label:"Correo del tutor",hint:"Correo de tutor","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),l(s),l(p,{filled:"",modelValue:o.genero,"onUpdate:modelValue":a[14]||(a[14]=e=>o.genero=e),label:"Genero",hint:"Selecciona tu genero","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.generos},null,8,["modelValue","rules","options"]),l(s),l(p,{filled:"",modelValue:o.estado,"onUpdate:modelValue":a[15]||(a[15]=e=>o.estado=e),label:"Pendiente",hint:"As\xED inicia el estado de tu beca","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:o.estados},null,8,["modelValue","rules","options"]),l(s)]),l(F,{modelValue:o.accept,"onUpdate:modelValue":a[16]||(a[16]=e=>o.accept=e),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),f("div",null,[l(_,{label:"Continuar",type:"submit",color:"primary",onClick:o.onSubmit,to:"/alumno/deportiva/paso2"},null,8,["onClick"])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var we=J($,[["render",re],["__scopeId","data-v-0bf99e79"]]);export{we as default};
