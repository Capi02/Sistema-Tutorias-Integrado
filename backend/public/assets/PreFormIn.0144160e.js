import{Q as t}from"./QSpace.02cacd90.js";import{Q as s}from"./QInput.4dc5f0e4.js";import{Q as K}from"./QDate.092d78ca.js";import{Q as V}from"./QSelect.bbd29f10.js";import{B as L,Q as W}from"./QToggle.5d1502cb.js";import{_ as X,r,u as Z,o as p,l as O,m as _,n as $,p as Y,d as o,q as d,Q as ee,at as le,au as oe}from"./index.0a4cc95d.js";import{Q as ae}from"./QForm.2e491152.js";import{Q as re}from"./QPage.6f2780ac.js";import{u as te}from"./use-quasar.9c505f7f.js";import{P as ne}from"./ProgresoBar.588b5f78.js";import{a as b}from"./axios.7331a07d.js";import"./use-key-composition.d5947e72.js";import"./use-dark.73e1a64d.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./format.3e32b8d9.js";import"./QChip.e9cf1f0c.js";import"./QMenu.cc6fd88d.js";import"./use-prevent-scroll.36779d27.js";import"./use-checkbox.3c6e425b.js";import"./QLinearProgress.2e1dc632.js";const se={components:{ButtonProgress:L,ProgresoBar:ne},setup(){const i=te(),a=r(!1),Q=Z(),l=r(),y=r(),q=r(),f=r(),v=r(),e=r(),B=r(new Date),D=r(),P=r(null),g=r({value:null,label:""}),N=r(),w=r(),h=r(),x=r(),k=r(),U=r({value:null,label:""}),z=r({value:null,label:""}),F=r(),M=r(),T=r(),R=r(),A=r(),G=r(),J=r(),H=r([]),S=r([]),I=r([]),C=r([]),E=r();p(async()=>{try{const n=sessionStorage.getItem("key");E.value=n}catch(n){console.error("Error al obtener los datos del estudiante:",n)}}),p(async()=>{try{const n=await b.get("http://127.0.0.1:3000/api/becas/6"),u=n.data;u&&(g.value=u.beca),console.log(n)}catch(n){console.error("Error al obtener la beca:",n)}}),p(async()=>{try{const n=await b.get("http://127.0.0.1:3000/api/carrera"),u=n.data;u&&u.length>0&&(S.value=u.map(c=>({label:c.carrera,value:c.idcarrera})),U.value=S.value[0]),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}}),p(async()=>{try{const n=await b.get("http://127.0.0.1:3000/api/area"),u=n.data;u&&u.length>0&&(I.value=u.map(c=>({label:c.area,value:c.idarea})),z.value=I.value[0]),console.log(n)}catch(n){console.error("Error al obtener el area:",n)}}),p(async()=>{try{const n=await b.get("http://127.0.0.1:3000/api/genero"),u=n.data;u&&u.length>0&&(C.value=u.map(c=>({label:c.genero,value:c.idgenero})),P.value=C.value[0]),console.log(n)}catch(n){console.error("Error al obtener el genero:",n)}});const m=r({nombre:"",matricula:"",domicilio:"",telefono:"",celular:"",correoper:"",nacimiento:"",estadocivil:"",genero:[],beca:[],nivelestudios:"",nombreescuela:"",tipoescuela:"",municipio:"",promedio:"",carrera:[],area:[],cuatrisoli:"",grupo:"",promedioult:"",apoyo:"",nombreapoyo:"",cuanto:"",motivo:"",studentId:""});return localStorage.setItem("formDataCarta",JSON.stringify(m.value)),{onSubmit:()=>{m.value={nombre:l.value,matricula:y.value,domicilio:q.value,telefono:f.value,celular:v.value,correoper:e.value,nacimiento:B.value,estadocivil:D.value,genero:P.value.value,beca:g.value.value,nivelestudios:N.value,nombreescuela:w.value,tipoescuela:h.value,municipio:x.value,promedio:k.value,carrera:U.value.value,area:z.value.value,cuatrisoli:F.value,grupo:M.value,promedioult:T.value,apoyo:R.value,nombreapoyo:A.value,cuanto:G.value,motivo:J.value,studentId:E.value},g.value==="Inclusion"&&(m.value.beca=6),localStorage.setItem("formDataCarta",JSON.stringify(m.value)),b.post("http://127.0.0.1:3000/api/form/carta",m).then(n=>{i.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Datos enviados correctamente"}),Q.push("/alumno/inclusion/socio")}).catch(n=>{console.error("Error al enviar los datos:",n),i.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error al enviar los datos"})})},nombre:l,matricula:y,domicilio:q,telefono:f,celular:v,correoper:e,nacimiento:B,estadocivil:D,genero:P,beca:g,nivelestudios:N,nombreescuela:w,tipoescuela:h,municipio:x,promedio:k,carrera:U,area:z,cuatrisoli:F,grupo:M,promedioult:T,apoyo:R,nombreapoyo:A,cuanto:G,motivo:J,accept:a,becas:H,carreras:S,areas:I,generos:C,studentId:E}}},j=i=>(le("data-v-0b0707b0"),i=i(),oe(),i),ue=j(()=>d("p",{class:"title"},"Beca Inclusi\xF3n",-1)),ie=j(()=>d("div",{class:"seccion"},[d("p",null,"Informaci\xF3n del Solicitante")],-1)),ce={class:"q-pa-xs q-pt-lg"},de={class:"row"};function me(i,a,Q,l,y,q){const f=O("ButtonProgress"),v=O("ProgresoBar");return _(),$(re,{class:"q-pa-md container",padding:""},{default:Y(()=>[ue,o(f),o(v),o(t),o(t),ie,d("div",ce,[o(ae,{onSubmit:l.onSubmit,onReset:i.onReset,class:"q-gutter-md"},{default:Y(()=>[d("div",de,[o(s,{filled:"",modelValue:l.studentId,"onUpdate:modelValue":a[0]||(a[0]=e=>l.studentId=e),class:"col-5 q-pt-lg",hint:"Tu ID",dense:i.dense,disable:"",readonly:""},null,8,["modelValue","dense"]),o(t),o(s,{filled:"",modelValue:l.nombre,"onUpdate:modelValue":a[1]||(a[1]=e=>l.nombre=e),label:"Nombre Completo",hint:"Empezando","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.matricula,"onUpdate:modelValue":a[2]||(a[2]=e=>l.matricula=e),label:"Matricula",hint:"Matricula de la escuela","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.domicilio,"onUpdate:modelValue":a[3]||(a[3]=e=>l.domicilio=e),label:"Ingrese su domicilio",hint:"Domicilio en el cual vive","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.telefono,"onUpdate:modelValue":a[4]||(a[4]=e=>l.telefono=e),label:"Telefono",hint:"Numero propio","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.celular,"onUpdate:modelValue":a[5]||(a[5]=e=>l.celular=e),label:"Celular",hint:"Numero de celular","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"email",modelValue:l.correoper,"onUpdate:modelValue":a[6]||(a[6]=e=>l.correoper=e),label:"Correo",hint:"Correo Personal","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(K,{filled:"",modelValue:l.nacimiento,"onUpdate:modelValue":a[7]||(a[7]=e=>l.nacimiento=e),label:"Fecha de nacimiento",hint:"Fecha valida","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.estadocivil,"onUpdate:modelValue":a[8]||(a[8]=e=>l.estadocivil=e),label:"Estado civl",hint:"Soltero o casado","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(V,{filled:"",modelValue:l.genero,"onUpdate:modelValue":a[9]||(a[9]=e=>l.genero=e),label:"Sexo",hint:"Selecciona tu genero","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.generos},null,8,["modelValue","rules","options"]),o(t),o(V,{filled:"",modelValue:l.beca,"onUpdate:modelValue":a[10]||(a[10]=e=>l.beca=e),label:"Tipo de beca",hint:"Beca que desea solicitar","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.becas},null,8,["modelValue","rules","options"]),o(t),o(s,{filled:"",modelValue:l.nivelestudios,"onUpdate:modelValue":a[11]||(a[11]=e=>l.nivelestudios=e),label:"Nivel de estudios",hint:"Escribe el nivel de estudios","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.nombreescuela,"onUpdate:modelValue":a[12]||(a[12]=e=>l.nombreescuela=e),label:"Nombre de la escuela",hint:"Escribe el nombre de la escuela","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.tipoescuela,"onUpdate:modelValue":a[13]||(a[13]=e=>l.tipoescuela=e),label:"Tipo de escuela publica o privada",hint:"Escribe el tipo de la escuela","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.municipio,"onUpdate:modelValue":a[14]||(a[14]=e=>l.municipio=e),label:"Municipio donde se encuentra",hint:"Escribe el tipo de la escuela","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.promedio,"onUpdate:modelValue":a[15]||(a[15]=e=>l.promedio=e),label:"Promedio de calificaci\xF3n obtenida",hint:"Escribe el promedio de calificaci\xF3n","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(V,{filled:"",modelValue:l.carrera,"onUpdate:modelValue":a[16]||(a[16]=e=>l.carrera=e),label:"Carrera",hint:"Carrera cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.carreras},null,8,["modelValue","rules","options"]),o(t),o(V,{filled:"",modelValue:l.area,"onUpdate:modelValue":a[17]||(a[17]=e=>l.area=e),label:"Area",hint:"Area cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.areas},null,8,["modelValue","rules","options"]),o(t),o(s,{filled:"",modelValue:l.cuatrisoli,"onUpdate:modelValue":a[18]||(a[18]=e=>l.cuatrisoli=e),label:"Cuatrimestre",hint:"\xBFEn que cuatrimestre se encuentra al momento de solicitar la beca?","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.promedioult,"onUpdate:modelValue":a[19]||(a[19]=e=>l.promedioult=e),label:"Promedio de calificaci\xF3n obtenida en el ultimo cuatrimestre cursado",hint:"Escribe tu promedio pasado","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.grupo,"onUpdate:modelValue":a[20]||(a[20]=e=>l.grupo=e),label:"Grupo",hint:"Grupo al que perteneces","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.apoyo,"onUpdate:modelValue":a[21]||(a[21]=e=>l.apoyo=e),label:"Si o No",hint:"\xBFCuenta con algun apoyo econ\xF3mico o especie para su educacionde algun organismo p\xFAblico o privado?",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(t),o(s,{filled:"",modelValue:l.nombreapoyo,"onUpdate:modelValue":a[22]||(a[22]=e=>l.nombreapoyo=e),label:"Nombre del apoyo",hint:"Si es que no cuenta con uno escriba NA",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(t),o(s,{filled:"",type:"number",modelValue:l.cuanto,"onUpdate:modelValue":a[23]||(a[23]=e=>l.cuanto=e),label:"\xBFCon c\xFAanto lo apoyan?",hint:"Escribe la cantidad que recibes de apoyo",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(t),o(s,{filled:"",modelValue:l.motivo,"onUpdate:modelValue":a[24]||(a[24]=e=>l.motivo=e),label:"Motivo",hint:"Escribe el motivo por el cual cree que se le debe conceder la beca","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t)]),o(W,{modelValue:l.accept,"onUpdate:modelValue":a[25]||(a[25]=e=>l.accept=e),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),d("div",null,[o(ee,{label:"Continuar",type:"submit",color:"primary",onClick:l.onSubmit,to:"/alumno/inclusion/socio"},null,8,["onClick"])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var ke=X(se,[["render",me],["__scopeId","data-v-0b0707b0"]]);export{ke as default};
