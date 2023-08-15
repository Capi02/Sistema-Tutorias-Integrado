import{Q as s}from"./QSpace.882cb171.js";import{Q as i}from"./QInput.ff8271ab.js";import{Q as K}from"./QDate.b1fb78b6.js";import{B as L,Q as W}from"./QToggle.fdcf5418.js";import{_ as X,r as n,u as Z,l as H,m as _,n as $,p as O,d as o,q as r,Q as ee,at as le,au as oe}from"./index.a087d920.js";import{Q as ae}from"./QForm.365f5d92.js";import{Q as se}from"./QPage.12e4cf25.js";import{u as ne}from"./use-quasar.5151adfb.js";import{P as ie}from"./ProgresoBar.fbda61f6.js";import{a as te}from"./axios.7331a07d.js";import"./use-field.fd25eba3.js";import"./use-dark.b66c2986.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.5d6a531f.js";import"./use-file-dom-props.d4990a04.js";import"./use-key-composition.ec24de95.js";import"./format.3e32b8d9.js";import"./use-checkbox.cc118b78.js";import"./QLinearProgress.622d7e3a.js";const re={components:{ButtonProgress:L,ProgresoBar:ie},setup(){const t=ne(),a=n(!1),v=Z(),l=n(),c=n(new Date),p=n(),d=n(),m=n(),e=n(),V=n(),f=n(),g=n(),b=n(),q=n(),U=n(),S=n(),E=n(),P=n(),y=n(),C=n(),I=n(),Q=n(),x=n(),z=n(),B=n(),A=n(),D=n(),T=n(),N=n(),w=n(),G=n(),M=n(),R=n(),k=n(),F=n(),h=n(),J=n(),u=n({nombre:"",nacimiento:"",domicilio:"",conquienvive:"",telefono:"",celular:"",transporte:"",ingreso:"",padre:"",madre:"",hermanos:"",total:"",alimentacion:"",telefonia:"",credito:"",renta:"",servicios:"",abonos:"",importe:"",totale:"",vivienda:"",paredes:"",techos:"",pisos:"",mobiliario:"",servmedico:"",asistencia:"",cronicas:"",tipo:"",consumo:"",finde:"",actividades:"",traslado:"",mediotra:""});return localStorage.setItem("formDataSocio",JSON.stringify(u.value)),{onSubmit:()=>{u.value={nombre:l.value,nacimiento:c.value,domicilio:p.value,conquienvive:d.value,telefono:m.value,celular:e.value,transporte:V.value,ingreso:f.value,padre:g.value,madre:b.value,hermanos:q.value,total:U.value,alimentacion:S.value,telefonia:E.value,credito:P.value,renta:y.value,servicios:C.value,abonos:I.value,importe:Q.value,totale:x.value,vivienda:z.value,paredes:B.value,techos:A.value,pisos:D.value,mobiliario:T.value,servmedico:N.value,asistencia:w.value,cronicas:G.value,tipo:M.value,consumo:R.value,finde:k.value,actividades:F.value,traslado:h.value,mediotra:J.value},localStorage.setItem("formDataSocio",JSON.stringify(u.value)),te.post("http://127.0.0.1:3000/api/form/socio",u).then(j=>{t.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Datos enviados correctamente"}),v.push("/alumno/excelencia/paso1")}).catch(j=>{console.error("Error al enviar los datos:",j),t.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error al enviar los datos"})})},nombre:l,nacimiento:c,domicilio:p,conquienvive:d,telefono:m,celular:e,transporte:V,ingreso:f,padre:g,madre:b,hermanos:q,total:U,alimentacion:S,telefonia:E,credito:P,renta:y,servicios:C,abonos:I,importe:Q,totale:x,vivienda:z,paredes:B,techos:A,pisos:D,mobiliario:T,servmedico:N,asistencia:w,cronicas:G,tipo:M,consumo:R,finde:k,actividades:F,traslado:h,mediotra:J,accept:a}}},Y=t=>(le("data-v-78c8a3c0"),t=t(),oe(),t),de=Y(()=>r("p",{class:"title"},"Beca Excelencia",-1)),me=Y(()=>r("div",{class:"seccion"},[r("p",null,"Informaci\xF3n de Socioeconomica")],-1)),ue={class:"q-pa-xs q-pt-lg"},ce={class:"row"};function pe(t,a,v,l,c,p){const d=H("ButtonProgress"),m=H("ProgresoBar");return _(),$(se,{class:"q-pa-md container",padding:""},{default:O(()=>[de,o(d),o(m),o(s),o(s),me,r("div",ue,[o(ae,{onSubmit:l.onSubmit,onReset:t.onReset,class:"q-gutter-md"},{default:O(()=>[r("div",ce,[o(i,{filled:"",modelValue:l.nombre,"onUpdate:modelValue":a[0]||(a[0]=e=>l.nombre=e),label:"Nombre Completo",hint:"Empezando por apellidos","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(K,{filled:"",modelValue:l.nacimiento,"onUpdate:modelValue":a[1]||(a[1]=e=>l.nacimiento=e),label:"Fecha de nacimiento",hint:"Fecha valida",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.domicilio,"onUpdate:modelValue":a[2]||(a[2]=e=>l.domicilio=e),label:"Ingrese su domicilio",hint:"Domicilio en el cual vive","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",modelValue:l.conquienvive,"onUpdate:modelValue":a[3]||(a[3]=e=>l.conquienvive=e),label:"\xBFCon quien vives?",hint:"\xBFCon quien vives actualmente?","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",type:"number",modelValue:l.telefono,"onUpdate:modelValue":a[4]||(a[4]=e=>l.telefono=e),label:"Telefono",hint:"Numero propio","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",type:"number",modelValue:l.celular,"onUpdate:modelValue":a[5]||(a[5]=e=>l.celular=e),label:"Celular",hint:"Numero de celular","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",modelValue:l.transporte,"onUpdate:modelValue":a[6]||(a[6]=e=>l.transporte=e),label:"Transporte que utiliza",hint:"Transporte para llegar al domicilio","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",modelValue:l.ingreso,"onUpdate:modelValue":a[7]||(a[7]=e=>l.ingreso=e),label:"Ingresos propios mensuales",hint:"Ingresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.padre,"onUpdate:modelValue":a[8]||(a[8]=e=>l.padre=e),label:"Aporte de ingresos del padre",hint:"Ingresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.madre,"onUpdate:modelValue":a[9]||(a[9]=e=>l.madre=e),label:"Aporte de ingresos de la madre",hint:"Ingresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.hermanos,"onUpdate:modelValue":a[10]||(a[10]=e=>l.hermanos=e),label:"Aporte de ingresos de tus hermanos",hint:"Escribe el nivel de estudios",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.total,"onUpdate:modelValue":a[11]||(a[11]=e=>l.total=e),label:"Total de ingresos mensuales",hint:"Ingresos mensuales","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",modelValue:l.alimentacion,"onUpdate:modelValue":a[12]||(a[12]=e=>l.alimentacion=e),label:"Gastos en alimentaci\xF3n",hint:"Egresos mensuales","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",modelValue:l.telefonia,"onUpdate:modelValue":a[13]||(a[13]=e=>l.telefonia=e),label:"Gastos en telefonia",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.credito,"onUpdate:modelValue":a[14]||(a[14]=e=>l.credito=e),label:"Gastos en credito de vivienda",hint:"Egresos mensuales","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",modelValue:l.renta,"onUpdate:modelValue":a[15]||(a[15]=e=>l.renta=e),label:"Gastos en renta",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.servicios,"onUpdate:modelValue":a[16]||(a[16]=e=>l.servicios=e),label:"Gastos en servicios basicos",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.abonos,"onUpdate:modelValue":a[17]||(a[17]=e=>l.abonos=e),label:"Gastos en abonos y creditos",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.importe,"onUpdate:modelValue":a[18]||(a[18]=e=>l.importe=e),label:"Gastos en importe del transporte",hint:"Egresos mensuales",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.totale,"onUpdate:modelValue":a[19]||(a[19]=e=>l.totale=e),label:"Total de los egresos mensuales",hint:"Escribe el total de los egresos mensuales","lazy-rules":"",rules:[e=>e!==null&&e!==""||"Por favor completa este campo"],class:"col-5 q-pt-lg"},null,8,["modelValue","rules"]),o(s),o(i,{filled:"",modelValue:l.vivienda,"onUpdate:modelValue":a[20]||(a[20]=e=>l.vivienda=e),label:"\xBFCu\xE1l es la situacion de tu vivienda?",hint:"Propia, Casa, Rentada, Departamento, Prestada, Vecindad",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.paredes,"onUpdate:modelValue":a[21]||(a[21]=e=>l.paredes=e),label:"Especifica de que material estan hechas las paredes",hint:"Tabique, madera, carton u otro",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.techos,"onUpdate:modelValue":a[22]||(a[22]=e=>l.techos=e),label:"Especifica de que material esta hecho tu techo",hint:"Concreto, lamina de asbesto u otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.pisos,"onUpdate:modelValue":a[23]||(a[23]=e=>l.pisos=e),label:"Especifica de que material esta hecho tu piso",hint:"Madera, cemento, mosaico u otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.mobiliario,"onUpdate:modelValue":a[24]||(a[24]=e=>l.mobiliario=e),label:"Escribe con que mobiliario cuenta tu vivienda",hint:"Escribe los aparatos electronicos y electrodomesticos con los que cuenta tu vivienda",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.servmedico,"onUpdate:modelValue":a[25]||(a[25]=e=>l.servmedico=e),label:" Escribe los Servicios M\xE9dicos con los que cuenta la familia",hint:"IMSS, ISSTE, Seguro Popular, Medico Provado u otro",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.asistencia,"onUpdate:modelValue":a[26]||(a[26]=e=>l.asistencia=e),label:"Escribe la frecuencia con la que asiste al m\xE9dico",hint:"Una vez por semana, mensualmente, Anualmente, Cuando se enferma",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.cronicas,"onUpdate:modelValue":a[27]||(a[27]=e=>l.cronicas=e),label:"\xBFPadece Enfermedades Cr\xF3nicas?",hint:"Si o No",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.tipo,"onUpdate:modelValue":a[28]||(a[28]=e=>l.tipo=e),label:"Si padece de enfermedades cronicas especifique cuales son: ",hint:"De no padecer escribe NA",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.consumo,"onUpdate:modelValue":a[29]||(a[29]=e=>l.consumo=e),label:"\xBFQu\xE9 tipo de Alimentaci\xF3n prefieres o consumes regularmente",hint:"Enlista los alimentos que consumes regularmente o que son de tu preferencia",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.finde,"onUpdate:modelValue":a[30]||(a[30]=e=>l.finde=e),label:"Actividades Familiares el fin de semana",hint:"Practicar deporte, ir al cine, trabaja, videojuegos, otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.actividades,"onUpdate:modelValue":a[31]||(a[31]=e=>l.actividades=e),label:"Actividades del alumno",hint:"Estudia, Deporte, Hace sus tareas, Juega con amigos, otros",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.traslado,"onUpdate:modelValue":a[32]||(a[32]=e=>l.traslado=e),label:"Tiempo de traslado a la instituci\xF3n",hint:"Hasta 20 minutos, De 20 a 40, M\xE1s de 40 minutos",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s),o(i,{filled:"",modelValue:l.mediotra,"onUpdate:modelValue":a[33]||(a[33]=e=>l.mediotra=e),label:"Medio de Transporte",hint:"Automovil, Taxi, Motoneta, otro medio",class:"col-5 q-pt-lg"},null,8,["modelValue"]),o(s)]),o(W,{modelValue:l.accept,"onUpdate:modelValue":a[34]||(a[34]=e=>l.accept=e),label:"Ya revise que las respuestas sean correctas"},null,8,["modelValue"]),r("div",null,[o(ee,{label:"Continuar",type:"submit",color:"primary",onClick:l.onSubmit,to:"/alumno/excelencia/paso1"},null,8,["onClick"])])]),_:1},8,["onSubmit","onReset"])])]),_:1})}var we=X(re,[["render",pe],["__scopeId","data-v-78c8a3c0"]]);export{we as default};
