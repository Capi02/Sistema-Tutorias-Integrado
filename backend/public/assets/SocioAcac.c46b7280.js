import{Q as s}from"./QSpace.02cacd90.js";import{Q as t}from"./QInput.4dc5f0e4.js";import{Q as L}from"./QDate.092d78ca.js";import{B as W,Q as X}from"./QToggle.5d1502cb.js";import{_ as Z,r as n,u as _,o as $,l as O,m as ee,n as le,p as Y,d as o,q as d,Q as oe,at as ae,au as se}from"./index.0a4cc95d.js";import{Q as ne}from"./QForm.2e491152.js";import{Q as te}from"./QPage.6f2780ac.js";import{u as ie}from"./use-quasar.9c505f7f.js";import{P as re}from"./ProgresoBar.588b5f78.js";import{a as de}from"./axios.7331a07d.js";import"./use-key-composition.d5947e72.js";import"./use-dark.73e1a64d.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./format.3e32b8d9.js";import"./use-checkbox.3c6e425b.js";import"./QLinearProgress.2e1dc632.js";const me={components:{ButtonProgress:W,ProgresoBar:re},setup(){const i=ie(),a=n(!1),f=_(),l=n(),p=n(new Date),v=n(),m=n(),u=n(),e=n(),g=n(),b=n(),q=n(),U=n(),S=n(),y=n(),E=n(),P=n(),I=n(),C=n(),Q=n(),z=n(),B=n(),D=n(),T=n(),A=n(),N=n(),x=n(),M=n(),w=n(),G=n(),k=n(),R=n(),F=n(),h=n(),J=n(),j=n(),H=n(),V=n();$(async()=>{try{const r=sessionStorage.getItem("key");V.value=r}catch(r){console.error("Error al obtener los datos del estudiante:",r)}});const c=n({nombre:"",nacimiento:"",domicilio:"",conquienvive:"",telefono:"",celular:"",transporte:"",ingreso:"",padre:"",madre:"",hermanos:"",total:"",alimentacion:"",telefonia:"",credito:"",renta:"",servicios:"",abonos:"",importe:"",totale:"",vivienda:"",paredes:"",techos:"",pisos:"",mobiliario:"",servmedico:"",asistencia:"",cronicas:"",tipo:"",consumo:"",finde:"",actividades:"",traslado:"",mediotra:"",studentId:""});return localStorage.setItem("formDataSocio",JSON.stringify(c.value)),{onSubmit:()=>{c.value={nombre:l.value,nacimiento:p.value,domicilio:v.value,conquienvive:m.value,telefono:u.value,celular:e.value,transporte:g.value,ingreso:b.value,padre:q.value,madre:U.value,hermanos:S.value,total:y.value,alimentacion:E.value,telefonia:P.value,credito:I.value,renta:C.value,servicios:Q.value,abonos:z.value,importe:B.value,totale:D.value,vivienda:T.value,paredes:A.value,techos:N.value,pisos:x.value,mobiliario:M.value,servmedico:w.value,asistencia:G.value,cronicas:k.value,tipo:R.value,consumo:F.value,finde:h.value,actividades:J.value,traslado:j.value,mediotra:H.value,studentId:V.value},localStorage.setItem("formDataSocio",JSON.stringify(c.value)),de.post("http://127.0.0.1:3000/api/form/socio",c).then(r=>{i.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Datos enviados correctamente"}),f.push("/alumno/cultural/paso1")}).catch(r=>{console.error("Error al enviar los datos:",r),i.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error al enviar los datos"})})},nombre:l,nacimiento:p,domicilio:v,conquienvive:m,telefono:u,celular:e,transporte:g,ingreso:b,padre:q,madre:U,hermanos:S,total:y,alimentacion:E,telefonia:P,credito:I,renta:C,servicios:Q,abonos:z,importe:B,totale:D,vivienda:T,paredes:A,techos:N,pisos:x,mobiliario:M,servmedico:w,asistencia:G,cronicas:k,tipo:R,consumo:F,finde:h,actividades:J,traslado:j,mediotra:H,studentId:V,accept:a}}},K=i=>(ae("data-v-4da89f10"),i=i(),se(),i),ue=K(()=>d("p",{class:"title"},"Beca Cultural",-1)),ce=K(()=>d("div",{class:"seccion"},[d("p",null,"Informaci\xF3n de Socioeconomica")],-1)),pe={class:"q-pa-xs q-pt-lg"},ve={class:"row"};function Ve(i,a,f,l,p,v){const m=O("ButtonProgress"),u=O("ProgresoBar");return ee(),le(te,{class:"q-pa-md container",padding:""},{default:Y(()=>[ue,o(m),o(u),o(s),o(s),ce,d("div",pe,[o(ne,{onSubmit:l.onSubmit,onReset:i.onReset,class:"q-gutter-md"},{default:Y(()=>[d("div",ve,[o(t,{filled:"",modelValue:l.studentId,"onUpdate:modelValue":a[0]||(a[0]=e=>l.studentId=e),class:"col-5 q-pt-lg",hint:"Tu ID",dense:i.dense,disable:"",readonly:""},null,8,["modelValue","dense"]),o(s),o(t,{filled:"",modelValue:l.nombre,"onUpdate:modelValue":a[1]||(a[1]=e=>l.nombre=e),label:"Nombre Completo",hint:"Empezando por apellidos","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(L,{filled:"",modelValue:l.nacimiento,"onUpdate:modelValue":a[2]||(a[2]=e=>l.nacimiento=e),label:"Fecha de nacimiento",hint:"Fecha valida",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.domicilio,"onUpdate:modelValue":a[3]||(a[3]=e=>l.domicilio=e),label:"Ingrese su domicilio",hint:"Domicilio en el cual vive","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.conquienvive,"onUpdate:modelValue":a[4]||(a[4]=e=>l.conquienvive=e),label:"\xBFCon quien vives?",hint:"\xBFCon quien vives actualmente?","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.telefono,"onUpdate:modelValue":a[5]||(a[5]=e=>l.telefono=e),label:"Telefono",hint:"Numero propio","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.celular,"onUpdate:modelValue":a[6]||(a[6]=e=>l.celular=e),label:"Celular",hint:"Numero de celular","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.transporte,"onUpdate:modelValue":a[7]||(a[7]=e=>l.transporte=e),label:"Transporte que utiliza",hint:"Transporte para llegar al domicilio","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.ingreso,"onUpdate:modelValue":a[8]||(a[8]=e=>l.ingreso=e),label:"Ingresos propios mensuales",hint:"Ingresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.padre,"onUpdate:modelValue":a[9]||(a[9]=e=>l.padre=e),label:"Aporte de ingresos del padre",hint:"Ingresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.madre,"onUpdate:modelValue":a[10]||(a[10]=e=>l.madre=e),label:"Aporte de ingresos de la madre",hint:"Ingresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.hermanos,"onUpdate:modelValue":a[11]||(a[11]=e=>l.hermanos=e),label:"Aporte de ingresos de tus hermanos",hint:"Escribe el nivel de estudios",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.total,"onUpdate:modelValue":a[12]||(a[12]=e=>l.total=e),label:"Total de ingresos mensuales",hint:"Ingresos mensuales","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.alimentacion,"onUpdate:modelValue":a[13]||(a[13]=e=>l.alimentacion=e),label:"Gastos en alimentaci\xF3n",hint:"Egresos mensuales","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.telefonia,"onUpdate:modelValue":a[14]||(a[14]=e=>l.telefonia=e),label:"Gastos en telefonia",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.credito,"onUpdate:modelValue":a[15]||(a[15]=e=>l.credito=e),label:"Gastos en credito de vivienda",hint:"Egresos mensuales","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.renta,"onUpdate:modelValue":a[16]||(a[16]=e=>l.renta=e),label:"Gastos en renta",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.servicios,"onUpdate:modelValue":a[17]||(a[17]=e=>l.servicios=e),label:"Gastos en servicios basicos",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.abonos,"onUpdate:modelValue":a[18]||(a[18]=e=>l.abonos=e),label:"Gastos en abonos y creditos",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.importe,"onUpdate:modelValue":a[19]||(a[19]=e=>l.importe=e),label:"Gastos en importe del transporte",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.totale,"onUpdate:modelValue":a[20]||(a[20]=e=>l.totale=e),label:"Total de los egresos mensuales",hint:"Escribe el total de los egresos mensuales","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(t,{filled:"",modelValue:l.vivienda,"onUpdate:modelValue":a[21]||(a[21]=e=>l.vivienda=e),label:"\xBFCu\xE1l es la situacion de tu vivienda?",hint:"Propia, Casa, Rentada, Departamento, Prestada, Vecindad",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.paredes,"onUpdate:modelValue":a[22]||(a[22]=e=>l.paredes=e),label:"Especifica de que material estan hechas las paredes",hint:"Tabique, madera, carton u otro",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.techos,"onUpdate:modelValue":a[23]||(a[23]=e=>l.techos=e),label:"Especifica de que material esta hecho tu techo",hint:"Concreto, lamina de asbesto u otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.pisos,"onUpdate:modelValue":a[24]||(a[24]=e=>l.pisos=e),label:"Especifica de que material esta hecho tu piso",hint:"Madera, cemento, mosaico u otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.mobiliario,"onUpdate:modelValue":a[25]||(a[25]=e=>l.mobiliario=e),label:"Escribe con que mobiliario cuenta tu vivienda",hint:"Escribe los aparatos electronicos y electrodomesticos con los que cuenta tu vivienda",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.servmedico,"onUpdate:modelValue":a[26]||(a[26]=e=>l.servmedico=e),label:" Escribe los Servicios M\xE9dicos con los que cuenta la familia",hint:"IMSS, ISSTE, Seguro Popular, Medico Provado u otro",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.asistencia,"onUpdate:modelValue":a[27]||(a[27]=e=>l.asistencia=e),label:"Escribe la frecuencia con la que asiste al m\xE9dico",hint:"Una vez por semana, mensualmente, Anualmente, Cuando se enferma",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.cronicas,"onUpdate:modelValue":a[28]||(a[28]=e=>l.cronicas=e),label:"\xBFPadece Enfermedades Cr\xF3nicas?",hint:"Si o No",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.tipo,"onUpdate:modelValue":a[29]||(a[29]=e=>l.tipo=e),label:"Si padece de enfermedades cronicas especifique cuales son: ",hint:"De no padecer escribe NA",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.consumo,"onUpdate:modelValue":a[30]||(a[30]=e=>l.consumo=e),label:"\xBFQu\xE9 tipo de Alimentaci\xF3n prefieres o consumes regularmente",hint:"Enlista los alimentos que consumes regularmente o que son de tu preferencia",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.finde,"onUpdate:modelValue":a[31]||(a[31]=e=>l.finde=e),label:"Actividades Familiares el fin de semana",hint:"Practicar deporte, ir al cine, trabaja, videojuegos, otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.actividades,"onUpdate:modelValue":a[32]||(a[32]=e=>l.actividades=e),label:"Actividades del alumno",hint:"Estudia, Deporte, Hace sus tareas, Juega con amigos, otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.traslado,"onUpdate:modelValue":a[33]||(a[33]=e=>l.traslado=e),label:"Tiempo de traslado a la instituci\xF3n",hint:"Hasta 20 minutos, De 20 a 40, M\xE1s de 40 minutos",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(t,{filled:"",modelValue:l.mediotra,"onUpdate:modelValue":a[34]||(a[34]=e=>l.mediotra=e),label:"Medio de Transporte",hint:"Automovil, Taxi, Motoneta, otro medio",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s)]),o(X,{modelValue:l.accept,"onUpdate:modelValue":a[35]||(a[35]=e=>l.accept=e),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),d("div",null,[o(oe,{label:"Continuar",type:"submit",color:"primary",onClick:l.onSubmit,to:"/alumno/cultural/paso1"},null,8,["onClick"])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var xe=Z(me,[["render",Ve],["__scopeId","data-v-4da89f10"]]);export{xe as default};
