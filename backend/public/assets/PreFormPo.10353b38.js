import{Q as t}from"./QSpace.882cb171.js";import{Q as s}from"./QInput.ff8271ab.js";import{Q as H}from"./QDate.b1fb78b6.js";import{Q as v}from"./QSelect.457920ea.js";import{B as K,Q as L}from"./QToggle.fdcf5418.js";import{_ as W,r,u as X,o as V,l as J,m as Z,n as _,p as O,d as o,q as m,Q as $,at as ee,au as le}from"./index.a087d920.js";import{Q as oe}from"./QForm.365f5d92.js";import{Q as ae}from"./QPage.12e4cf25.js";import{u as re}from"./use-quasar.5151adfb.js";import{P as te}from"./ProgresoBar.fbda61f6.js";import{a as p}from"./axios.7331a07d.js";import"./use-field.fd25eba3.js";import"./use-dark.b66c2986.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.5d6a531f.js";import"./use-file-dom-props.d4990a04.js";import"./use-key-composition.ec24de95.js";import"./format.3e32b8d9.js";import"./QChip.a53fc1c7.js";import"./QMenu.a0461e97.js";import"./use-prevent-scroll.cb9388ba.js";import"./use-checkbox.cc118b78.js";import"./QLinearProgress.622d7e3a.js";const ne={components:{ButtonProgress:K,ProgresoBar:te},setup(){const i=re(),a=r(!1),Q=X(),l=r(),y=r(),P=r(),b=r(),f=r(),e=r(),B=r(new Date),w=r(),q=r(null),g=r({value:null,label:""}),D=r(),N=r(),h=r(),x=r(),I=r(),U=r({value:null,label:""}),z=r({value:null,label:""}),F=r(),M=r(),k=r(),R=r(),T=r(),A=r(),G=r(),j=r([]),S=r([]),C=r([]),E=r([]);V(async()=>{try{const n=await p.get("http://127.0.0.1:3000/api/becas/7"),u=n.data;u&&(g.value=u.beca),console.log(n)}catch(n){console.error("Error al obtener la beca:",n)}}),V(async()=>{try{const n=await p.get("http://127.0.0.1:3000/api/carrera"),u=n.data;u&&u.length>0&&(S.value=u.map(c=>({label:c.carrera,value:c.idcarrera})),U.value=S.value[0]),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}}),V(async()=>{try{const n=await p.get("http://127.0.0.1:3000/api/area"),u=n.data;u&&u.length>0&&(C.value=u.map(c=>({label:c.area,value:c.idarea})),z.value=C.value[0]),console.log(n)}catch(n){console.error("Error al obtener el area:",n)}}),V(async()=>{try{const n=await p.get("http://127.0.0.1:3000/api/genero"),u=n.data;u&&u.length>0&&(E.value=u.map(c=>({label:c.genero,value:c.idgenero})),q.value=E.value[0]),console.log(n)}catch(n){console.error("Error al obtener el genero:",n)}});const d=r({nombre:"",matricula:"",domicilio:"",telefono:"",celular:"",correoper:"",nacimiento:"",estadocivil:"",genero:[],beca:[],nivelestudios:"",nombreescuela:"",tipoescuela:"",municipio:"",promedio:"",carrera:[],area:[],cuatrisoli:"",grupo:"",promedioult:"",apoyo:"",nombreapoyo:"",cuanto:"",motivo:""});return localStorage.setItem("formDataCarta",JSON.stringify(d.value)),{onSubmit:()=>{d.value={nombre:l.value,matricula:y.value,domicilio:P.value,telefono:b.value,celular:f.value,correoper:e.value,nacimiento:B.value,estadocivil:w.value,genero:q.value.value,beca:g.value.value,nivelestudios:D.value,nombreescuela:N.value,tipoescuela:h.value,municipio:x.value,promedio:I.value,carrera:U.value.value,area:z.value.value,cuatrisoli:F.value,grupo:M.value,promedioult:k.value,apoyo:R.value,nombreapoyo:T.value,cuanto:A.value,motivo:G.value},g.value==="Postgrado"&&(d.value.beca=7),localStorage.setItem("formDataCarta",JSON.stringify(d.value)),p.post("http://127.0.0.1:3000/api/form/carta",d).then(n=>{i.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Datos enviados correctamente"}),Q.push("/alumno/postgrado/socio")}).catch(n=>{console.error("Error al enviar los datos:",n),i.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error al enviar los datos"})})},nombre:l,matricula:y,domicilio:P,telefono:b,celular:f,correoper:e,nacimiento:B,estadocivil:w,genero:q,beca:g,nivelestudios:D,nombreescuela:N,tipoescuela:h,municipio:x,promedio:I,carrera:U,area:z,cuatrisoli:F,grupo:M,promedioult:k,apoyo:R,nombreapoyo:T,cuanto:A,motivo:G,accept:a,becas:j,carreras:S,areas:C,generos:E}}},Y=i=>(ee("data-v-2a493d16"),i=i(),le(),i),se=Y(()=>m("p",{class:"title"},"Beca Postgrado",-1)),ue=Y(()=>m("div",{class:"seccion"},[m("p",null,"Informaci\xF3n del Solicitante")],-1)),ie={class:"q-pa-xs q-pt-lg"},ce={class:"row"};function me(i,a,Q,l,y,P){const b=J("ButtonProgress"),f=J("ProgresoBar");return Z(),_(ae,{class:"q-pa-md container",padding:""},{default:O(()=>[se,o(b),o(f),o(t),o(t),ue,m("div",ie,[o(oe,{onSubmit:l.onSubmit,onReset:i.onReset,class:"q-gutter-md"},{default:O(()=>[m("div",ce,[o(s,{filled:"",modelValue:l.nombre,"onUpdate:modelValue":a[0]||(a[0]=e=>l.nombre=e),label:"Nombre Completo",hint:"Empezando por apellidos","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.matricula,"onUpdate:modelValue":a[1]||(a[1]=e=>l.matricula=e),label:"Matricula",hint:"Matricula de la escuela","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.domicilio,"onUpdate:modelValue":a[2]||(a[2]=e=>l.domicilio=e),label:"Ingrese su domicilio",hint:"Domicilio en el cual vive","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.telefono,"onUpdate:modelValue":a[3]||(a[3]=e=>l.telefono=e),label:"Telefono",hint:"Numero propio","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.celular,"onUpdate:modelValue":a[4]||(a[4]=e=>l.celular=e),label:"Celular",hint:"Numero de celular","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"email",modelValue:l.correoper,"onUpdate:modelValue":a[5]||(a[5]=e=>l.correoper=e),label:"Correo",hint:"Correo Personal","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(H,{filled:"",modelValue:l.nacimiento,"onUpdate:modelValue":a[6]||(a[6]=e=>l.nacimiento=e),label:"Fecha de nacimiento",hint:"Fecha valida","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.estadocivil,"onUpdate:modelValue":a[7]||(a[7]=e=>l.estadocivil=e),label:"Estado civl",hint:"Soltero o casado","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(v,{filled:"",modelValue:l.genero,"onUpdate:modelValue":a[8]||(a[8]=e=>l.genero=e),label:"Sexo",hint:"Selecciona tu genero","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.generos},null,8,["modelValue","rules","options"]),o(t),o(v,{filled:"",modelValue:l.beca,"onUpdate:modelValue":a[9]||(a[9]=e=>l.beca=e),label:"Tipo de beca",hint:"Beca que desea solicitar","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.becas},null,8,["modelValue","rules","options"]),o(t),o(s,{filled:"",modelValue:l.nivelestudios,"onUpdate:modelValue":a[10]||(a[10]=e=>l.nivelestudios=e),label:"Nivel de estudios",hint:"Escribe el nivel de estudios","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.nombreescuela,"onUpdate:modelValue":a[11]||(a[11]=e=>l.nombreescuela=e),label:"Nombre de la escuela",hint:"Escribe el nombre de la escuela","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.tipoescuela,"onUpdate:modelValue":a[12]||(a[12]=e=>l.tipoescuela=e),label:"Tipo de escuela publica o privada",hint:"Escribe el tipo de la escuela","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.municipio,"onUpdate:modelValue":a[13]||(a[13]=e=>l.municipio=e),label:"Municipio donde se encuentra",hint:"Escribe el tipo de la escuela","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.promedio,"onUpdate:modelValue":a[14]||(a[14]=e=>l.promedio=e),label:"Promedio de calificaci\xF3n obtenida",hint:"Escribe el promedio de calificaci\xF3n","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(v,{filled:"",modelValue:l.carrera,"onUpdate:modelValue":a[15]||(a[15]=e=>l.carrera=e),label:"Carrera",hint:"Carrera cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.carreras},null,8,["modelValue","rules","options"]),o(t),o(v,{filled:"",modelValue:l.area,"onUpdate:modelValue":a[16]||(a[16]=e=>l.area=e),label:"Area",hint:"Area cursando","lazy-rules":"",rules:[e=>e!=null||"Por favor completa este campo"],class:"col-5 q-pt-lg",options:l.areas},null,8,["modelValue","rules","options"]),o(t),o(s,{filled:"",modelValue:l.cuatrisoli,"onUpdate:modelValue":a[17]||(a[17]=e=>l.cuatrisoli=e),label:"Cuatrimestre",hint:"\xBFEn que cuatrimestre se encuentra al momento de solicitar la beca?","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",type:"number",modelValue:l.promedioult,"onUpdate:modelValue":a[18]||(a[18]=e=>l.promedioult=e),label:"Promedio de calificaci\xF3n obtenida en el ultimo cuatrimestre cursado",hint:"Escribe tu promedio pasado","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.grupo,"onUpdate:modelValue":a[19]||(a[19]=e=>l.grupo=e),label:"Grupo",hint:"Grupo al que perteneces","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t),o(s,{filled:"",modelValue:l.apoyo,"onUpdate:modelValue":a[20]||(a[20]=e=>l.apoyo=e),label:"Si o No",hint:"\xBFCuenta con algun apoyo econ\xF3mico o especie para su educacionde algun organismo p\xFAblico o privado?",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(t),o(s,{filled:"",modelValue:l.nombreapoyo,"onUpdate:modelValue":a[21]||(a[21]=e=>l.nombreapoyo=e),label:"Nombre del apoyo",hint:"Si es que cuenta con uno",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(t),o(s,{filled:"",type:"number",modelValue:l.cuanto,"onUpdate:modelValue":a[22]||(a[22]=e=>l.cuanto=e),label:"\xBFCon c\xFAanto lo apoyan?",hint:"Escribe la cantidad que recibes de apoyo",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(t),o(s,{filled:"",modelValue:l.motivo,"onUpdate:modelValue":a[23]||(a[23]=e=>l.motivo=e),label:"Motivo",hint:"Escribe el motivo por el cual cree que se le debe conceder la beca","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(t)]),o(L,{modelValue:l.accept,"onUpdate:modelValue":a[24]||(a[24]=e=>l.accept=e),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),m("div",null,[o($,{label:"Continuar",type:"submit",color:"primary",onClick:l.onSubmit,to:"/alumno/postgrado/socio"},null,8,["onClick"])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var ke=W(ne,[["render",me],["__scopeId","data-v-2a493d16"]]);export{ke as default};
