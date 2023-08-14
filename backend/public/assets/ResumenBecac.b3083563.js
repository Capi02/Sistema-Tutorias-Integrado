import{Q as S}from"./QCardSection.e191772e.js";import{_ as B,u as G,r as e,o as M,l as E,m as O,n as w,p as d,q as o,d as i,t as y,as as t,Q as R,at as x,au as F}from"./index.a087d920.js";import{Q as J}from"./QCardActions.a321ca49.js";import{Q as P}from"./QCard.bce1aac1.js";import{Q as L}from"./QForm.365f5d92.js";import{Q as j}from"./QPage.12e4cf25.js";import{a as c}from"./axios.7331a07d.js";import"./QSpace.882cb171.js";import"./QLinearProgress.622d7e3a.js";import"./use-dark.b66c2986.js";import"./focus-manager.02955f48.js";const V={setup(){const m=G(),_=e({nombre:"",matricula:"",curp:"",telefono:"",correoinstitucional:"",beca:"",carrera:"",area:"",grado:"",cuatrimestre:"",grupo:"",correotutor:"",genero:""}),f=e({nombre:"",matricula:"",domicilio:"",telefono:"",celular:"",correoper:"",nacimiento:"",estadocivil:"",genero:"",beca:"",nivelestudios:"",nombreescuela:"",tipoescuela:"",municipio:"",promedio:"",carrera:"",area:"",cuatrisoli:"",grupo:"",promedioult:"",apoyo:"",nombreapoyo:"",cuanto:"",motivo:""}),a=e({nombre:"",nacimiento:"",domicilio:"",conquienvive:"",telefono:"",celular:"",transporte:"",ingreso:"",padre:"",madre:"",hermanos:"",total:"",alimentacion:"",telefonia:"",credito:"",renta:"",servicios:"",abonos:"",importe:"",totale:"",vivienda:"",paredes:"",techos:"",pisos:"",mobiliario:"",servmedico:"",asistencia:"",cronicas:"",tipo:"",consumo:"",finde:"",actividades:"",traslado:"",mediotra:""}),v=e(""),h=e([]),g=e([]),D=e([]),q=e([]),C=e([]),N=n=>{const r=h.value.find(l=>l.value===n);return r?r.label:""},A=n=>{const r=g.value.find(l=>l.value===n);return r?r.label:""},I=n=>{const r=D.value.find(l=>l.value===n);return r?r.label:""},T=n=>{const r=q.value.find(l=>l.value===n);return r?r.label:""},Q=n=>{const r=C.value.find(l=>l.value===n);return r?r.label:""};return M(async()=>{try{const n=await c.get("http://127.0.0.1:3000/api/carrera"),r=n.data;r&&r.length>0&&(h.value=r.map(l=>({label:l.carrera,value:l.idcarrera}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/area"),r=n.data;r&&r.length>0&&(g.value=r.map(l=>({label:l.area,value:l.idarea}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/grado"),r=n.data;r&&r.length>0&&(D.value=r.map(p=>({label:p.grado,value:p.idgrado}))),console.log(n);const l=JSON.parse(localStorage.getItem("formData"));l&&(Object.assign(_.value,l),console.log(l));const u=JSON.parse(localStorage.getItem("formDataCarta"));u&&(Object.assign(f.value,u),console.log(u));const b=JSON.parse(localStorage.getItem("formDataSocio"));b&&(Object.assign(a.value,b),console.log(b))}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/genero"),r=n.data;r&&r.length>0&&(q.value=r.map(l=>({label:l.genero,value:l.idgenero}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/becas/all"),r=n.data;r&&r.length>0&&(C.value=r.map(l=>({label:l.beca,value:l.idbeca}))),console.log(n)}catch(n){console.error("Error al obtener la beca:",n)}}),{formData:_,formDataCarta:f,formDataSocio:a,onSubmit:()=>{v.value==="Cultural"&&(_.value.beca=2),localStorage.setItem("formData",JSON.stringify(_.value)),c.post("http://127.0.0.1:3000/api/form",_.value).then(n=>{console.log("Datos enviados correctamente")}).catch(n=>{console.error("Error al enviar los datos:",n.response.data)}),localStorage.removeItem("formData"),localStorage.setItem("formDataCarta",JSON.stringify(f.value)),c.post("http://127.0.0.1:3000/api/form/carta",f.value).then(n=>{console.log("Datos enviados correctamente")}).catch(n=>{console.error("Error al enviar los datos:",n.response.data)}),localStorage.removeItem("formDataCarta"),localStorage.setItem("formDataSocio",JSON.stringify(a.value)),c.post("http://127.0.0.1:3000/api/form/socio",a.value).then(n=>{console.log("Datos enviados correctamente")}).catch(n=>{console.error("Error al enviar los datos:",n.response.data)}),localStorage.removeItem("formDataSocio"),m.push({path:"/alumno/cultural/paso3"})},beca:v,getCarreraContent:N,getAreaContent:A,getGradoContent:I,getGeneroContent:T,carreras:h,getBecaContent:Q}}},s=m=>(x("data-v-28b00c51"),m=m(),F(),m),k={class:"q-pa-md"},U=s(()=>o("div",{class:"title"},"Beca Cultural",-1)),z={class:"q-gutter-md container"},H={class:"q-pt-lg"},K={class:"q-pa-md"},W=s(()=>o("p",{class:"q-mb-sm"},"Los datos de la solicitud a enviar son:",-1)),X={class:"q-mb-sm"},Y=s(()=>o("strong",null,"Apellido Paterno:",-1)),Z={class:"q-mb-sm"},$=s(()=>o("strong",null,"Apellido Materno:",-1)),oo={class:"q-mb-sm"},ao=s(()=>o("strong",null,"Nombre:",-1)),so={class:"q-mb-sm"},to=s(()=>o("strong",null,"Matr\xEDcula:",-1)),no={class:"q-mb-sm"},ro=s(()=>o("strong",null,"CURP:",-1)),lo={class:"q-mb-sm"},eo=s(()=>o("strong",null,"Tel\xE9fono:",-1)),io={class:"q-mb-sm"},co=s(()=>o("strong",null,"Correo Institucional:",-1)),mo={class:"q-mb-sm"},_o=s(()=>o("strong",null,"Carrera:",-1)),fo={class:"q-mb-sm"},ho=s(()=>o("strong",null,"\xC1rea:",-1)),go={class:"q-mb-sm"},Do=s(()=>o("strong",null,"Grado:",-1)),vo={class:"q-mb-sm"},uo=s(()=>o("strong",null,"Cuatrimestre:",-1)),bo={class:"q-mb-sm"},So=s(()=>o("strong",null,"Grupo:",-1)),qo={class:"q-mb-sm"},Co=s(()=>o("strong",null,"Correo Tutor:",-1)),po={class:"q-mb-sm"},Eo=s(()=>o("strong",null,"G\xE9nero:",-1)),yo={class:"q-pa-md"},No=s(()=>o("p",{class:"q-mb-sm"},"Los datos del solicitante a enviar son:",-1)),Ao={class:"q-mb-sm"},Io=s(()=>o("strong",null,"Nombre:",-1)),To={class:"q-mb-sm"},Qo=s(()=>o("strong",null,"Matr\xEDcula:",-1)),Bo={class:"q-mb-sm"},Go=s(()=>o("strong",null,"Domicilio:",-1)),Mo={class:"q-mb-sm"},Oo=s(()=>o("strong",null,"Tel\xE9fono:",-1)),wo={class:"q-mb-sm"},Ro=s(()=>o("strong",null,"Celular:",-1)),xo={class:"q-mb-sm"},Fo=s(()=>o("strong",null,"Correo:",-1)),Jo={class:"q-mb-sm"},Po=s(()=>o("strong",null,"Nacimiento:",-1)),Lo={class:"q-mb-sm"},jo=s(()=>o("strong",null,"Estado Civil:",-1)),Vo={class:"q-mb-sm"},ko=s(()=>o("strong",null,"G\xE9nero:",-1)),Uo={class:"q-mb-sm"},zo=s(()=>o("strong",null,"Beca:",-1)),Ho={class:"q-mb-sm"},Ko=s(()=>o("strong",null,"Nivel de Estudios:",-1)),Wo={class:"q-mb-sm"},Xo=s(()=>o("strong",null,"Nombre de la Escuela:",-1)),Yo={class:"q-mb-sm"},Zo=s(()=>o("strong",null,"Tipo de la Escuela:",-1)),$o={class:"q-mb-sm"},oa=s(()=>o("strong",null,"Municipio de la Escuela:",-1)),aa={class:"q-mb-sm"},sa=s(()=>o("strong",null,"Promedio de la Escuela:",-1)),ta={class:"q-mb-sm"},na=s(()=>o("strong",null,"Carrera:",-1)),ra={class:"q-mb-sm"},la=s(()=>o("strong",null,"\xC1rea:",-1)),ea={class:"q-mb-sm"},ia=s(()=>o("strong",null,"Cuatrimestre:",-1)),ca={class:"q-mb-sm"},ma=s(()=>o("strong",null,"Ultimo promedio obtenido:",-1)),da={class:"q-mb-sm"},_a=s(()=>o("strong",null,"Grupo:",-1)),fa={class:"q-mb-sm"},ha=s(()=>o("strong",null,"Apoyo:",-1)),ga={class:"q-mb-sm"},Da=s(()=>o("strong",null,"Nombre del Apoyo:",-1)),va={class:"q-mb-sm"},ua=s(()=>o("strong",null,"Cantidad del Apoyo:",-1)),ba={class:"q-mb-sm"},Sa=s(()=>o("strong",null,"Motivo:",-1)),qa={class:"q-pa-md"},Ca=s(()=>o("p",{class:"q-mb-sm"}," Los datos enviados de los socioeconomicos son: ",-1)),pa={class:"q-mb-sm"},Ea=s(()=>o("strong",null,"Nombre:",-1)),ya={class:"q-mb-sm"},Na=s(()=>o("strong",null,"Nacimiento:",-1)),Aa={class:"q-mb-sm"},Ia=s(()=>o("strong",null,"Domicilio:",-1)),Ta={class:"q-mb-sm"},Qa=s(()=>o("strong",null,"Con quien vives actualmente:",-1)),Ba={class:"q-mb-sm"},Ga=s(()=>o("strong",null,"Tel\xE9fono:",-1)),Ma={class:"q-mb-sm"},Oa=s(()=>o("strong",null,"Celular:",-1)),wa={class:"q-mb-sm"},Ra=s(()=>o("strong",null,"Modo de trasporte para llegar al domicilio:",-1)),xa={class:"q-mb-sm"},Fa=s(()=>o("strong",null,"Ingresos mensuales propios:",-1)),Ja={class:"q-mb-sm"},Pa=s(()=>o("strong",null,"Aporte a los ingresos del padre:",-1)),La={class:"q-mb-sm"},ja=s(()=>o("strong",null,"Aporte a los ingresos del madre:",-1)),Va={class:"q-mb-sm"},ka=s(()=>o("strong",null,"Aporte a los ingresos de los hermanos:",-1)),Ua={class:"q-mb-sm"},za=s(()=>o("strong",null,"Total de ingresos mensuales:",-1)),Ha={class:"q-mb-sm"},Ka=s(()=>o("strong",null,"Egresos en alimentacion mensuales:",-1)),Wa={class:"q-mb-sm"},Xa=s(()=>o("strong",null,"Egresos en telefonia mensuales:",-1)),Ya={class:"q-mb-sm"},Za=s(()=>o("strong",null,"Egresos en credito de vivienda mensuales:",-1)),$a={class:"q-mb-sm"},os=s(()=>o("strong",null,"Egresos en renta mensuales:",-1)),as={class:"q-mb-sm"},ss=s(()=>o("strong",null,"Egresos en servicios basicos mensuales:",-1)),ts={class:"q-mb-sm"},ns=s(()=>o("strong",null,"Egresos en abonos o creditos mensuales:",-1)),rs={class:"q-mb-sm"},ls=s(()=>o("strong",null,"Egresos en importe de transorte mensuales:",-1)),es={class:"q-mb-sm"},is=s(()=>o("strong",null,"Total de egresos mensuales:",-1)),cs={class:"q-mb-sm"},ms=s(()=>o("strong",null,"La situaci\xF3n de tu vivienda:",-1)),ds={class:"q-mb-sm"},_s=s(()=>o("strong",null,"Tus paredes son de:",-1)),fs={class:"q-mb-sm"},hs=s(()=>o("strong",null,"Tu techo es de:",-1)),gs={class:"q-mb-sm"},Ds=s(()=>o("strong",null,"Tu piso es de:",-1)),vs={class:"q-mb-sm"},us=s(()=>o("strong",null,"Cuentas con un mobiliario de:",-1)),bs={class:"q-mb-sm"},Ss=s(()=>o("strong",null,"Servicios M\xE9dicos con los que cuenta la familia:",-1)),qs={class:"q-mb-sm"},Cs=s(()=>o("strong",null,"Frecuencia con la que asiste al m\xE9dico:",-1)),ps={class:"q-mb-sm"},Es=s(()=>o("strong",null,"Padeces de enfermedad cronica:",-1)),ys={class:"q-mb-sm"},Ns=s(()=>o("strong",null,"El tipo de enfermedad cronica es de:",-1)),As={class:"q-mb-sm"},Is=s(()=>o("strong",null,"Alimentacion que prefieres o consumes regularmente es de:",-1)),Ts={class:"q-mb-sm"},Qs=s(()=>o("strong",null,"Actividades Familiares el fin de semana:",-1)),Bs={class:"q-mb-sm"},Gs=s(()=>o("strong",null,"Actividades del alumno:",-1)),Ms={class:"q-mb-sm"},Os=s(()=>o("strong",null,"Tiempo de traslado:",-1)),ws={class:"q-mb-sm"},Rs=s(()=>o("strong",null,"Medio de Transporte:",-1));function xs(m,_,f,a,v,h){const g=E("button-progress"),D=E("dos-progreso-bar");return O(),w(j,null,{default:d(()=>[o("div",k,[U,i(g),i(D),o("div",z,[i(L,{onSubmit:a.onSubmit,onReset:m.onReset},{default:d(()=>[o("div",H,[i(P,{class:"q-pa-md"},{default:d(()=>[i(S,null,{default:d(()=>[o("div",K,[W,o("p",X,[Y,y(" "+t(a.formData&&a.formData.apellidopat),1)]),o("p",Z,[$,y(" "+t(a.formData&&a.formData.apellidomat),1)]),o("div",oo,[ao,o("span",null,t(a.formData&&a.formData.nombre),1)]),o("div",so,[to,o("span",null,t(a.formData&&a.formData.matricula),1)]),o("div",no,[ro,o("span",null,t(a.formData&&a.formData.curp),1)]),o("div",lo,[eo,o("span",null,t(a.formData&&a.formData.telefono),1)]),o("div",io,[co,o("span",null,t(a.formData&&a.formData.correoinstitucional),1)]),o("div",mo,[_o,o("span",null,t(a.getCarreraContent(a.formData&&a.formData.carrera)),1)]),o("div",fo,[ho,o("span",null,t(a.getAreaContent(a.formData&&a.formData.area)),1)]),o("div",go,[Do,o("span",null,t(a.getGradoContent(a.formData&&a.formData.grado)),1)]),o("div",vo,[uo,o("span",null,t(a.formData&&a.formData.cuatrimestre),1)]),o("div",bo,[So,o("span",null,t(a.formData&&a.formData.grupo),1)]),o("div",qo,[Co,o("span",null,t(a.formData&&a.formData.correotutor),1)]),o("div",po,[Eo,o("span",null,t(a.getGeneroContent(a.formData&&a.formData.genero)),1)])])]),_:1}),i(S,null,{default:d(()=>[o("div",yo,[No,o("div",Ao,[Io,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombre),1)]),o("div",To,[Qo,o("span",null,t(a.formDataCarta&&a.formDataCarta.matricula),1)]),o("div",Bo,[Go,o("span",null,t(a.formDataCarta&&a.formDataCarta.domicilio),1)]),o("div",Mo,[Oo,o("span",null,t(a.formDataCarta&&a.formDataCarta.telefono),1)]),o("div",wo,[Ro,o("span",null,t(a.formDataCarta&&a.formDataCarta.celular),1)]),o("div",xo,[Fo,o("span",null,t(a.formDataCarta&&a.formDataCarta.correoper),1)]),o("div",Jo,[Po,o("span",null,t(a.formDataCarta&&a.formDataCarta.nacimiento),1)]),o("div",Lo,[jo,o("span",null,t(a.formDataCarta&&a.formDataCarta.estadocivil),1)]),o("div",Vo,[ko,o("span",null,t(a.getGeneroContent(a.formDataCarta&&a.formDataCarta.genero)),1)]),o("div",Uo,[zo,o("span",null,t(a.getBecaContent(a.formDataCarta&&a.formDataCarta.beca)),1)]),o("div",Ho,[Ko,o("span",null,t(a.formDataCarta&&a.formDataCarta.nivelestudios),1)]),o("div",Wo,[Xo,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombreescuela),1)]),o("div",Yo,[Zo,o("span",null,t(a.formDataCarta&&a.formDataCarta.tipoescuela),1)]),o("div",$o,[oa,o("span",null,t(a.formDataCarta&&a.formDataCarta.municipio),1)]),o("div",aa,[sa,o("span",null,t(a.formDataCarta&&a.formDataCarta.promedio),1)]),o("div",ta,[na,o("span",null,t(a.getCarreraContent(a.formDataCarta&&a.formDataCarta.carrera)),1)]),o("div",ra,[la,o("span",null,t(a.getAreaContent(a.formDataCarta&&a.formDataCarta.area)),1)]),o("div",ea,[ia,o("span",null,t(a.formDataCarta&&a.formDataCarta.cuatrisoli),1)]),o("div",ca,[ma,o("span",null,t(a.formDataCarta&&a.formDataCarta.promedioult),1)]),o("div",da,[_a,o("span",null,t(a.formDataCarta&&a.formDataCarta.grupo),1)]),o("div",fa,[ha,o("span",null,t(a.formDataCarta&&a.formDataCarta.apoyo),1)]),o("div",ga,[Da,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombreapoyo),1)]),o("div",va,[ua,o("span",null,t(a.formDataCarta&&a.formDataCarta.cuanto),1)]),o("div",ba,[Sa,o("span",null,t(a.formDataCarta&&a.formDataCarta.motivo),1)])])]),_:1}),i(S,null,{default:d(()=>[o("div",qa,[Ca,o("div",pa,[Ea,o("span",null,t(a.formDataSocio&&a.formDataSocio.nombre),1)]),o("div",ya,[Na,o("span",null,t(a.formDataSocio&&a.formDataSocio.nacimiento),1)]),o("div",Aa,[Ia,o("span",null,t(a.formDataSocio&&a.formDataSocio.domicilio),1)]),o("div",Ta,[Qa,o("span",null,t(a.formDataSocio&&a.formDataSocio.conquienvive),1)]),o("div",Ba,[Ga,o("span",null,t(a.formDataSocio&&a.formDataSocio.telefono),1)]),o("div",Ma,[Oa,o("span",null,t(a.formDataSocio&&a.formDataSocio.celular),1)]),o("div",wa,[Ra,o("span",null,t(a.formDataSocio&&a.formDataSocio.transporte),1)]),o("div",xa,[Fa,o("span",null,t(a.formDataSocio&&a.formDataSocio.ingreso),1)]),o("div",Ja,[Pa,o("span",null,t(a.formDataSocio&&a.formDataSocio.padre),1)]),o("div",La,[ja,o("span",null,t(a.formDataSocio&&a.formDataSocio.madre),1)]),o("div",Va,[ka,o("span",null,t(a.formDataSocio&&a.formDataSocio.hermanos),1)]),o("div",Ua,[za,o("span",null,t(a.formDataSocio&&a.formDataSocio.total),1)]),o("div",Ha,[Ka,o("span",null,t(a.formDataSocio&&a.formDataSocio.alimentacion),1)]),o("div",Wa,[Xa,o("span",null,t(a.formDataSocio&&a.formDataSocio.telefonia),1)]),o("div",Ya,[Za,o("span",null,t(a.formDataSocio&&a.formDataSocio.credito),1)]),o("div",$a,[os,o("span",null,t(a.formDataSocio&&a.formDataSocio.renta),1)]),o("div",as,[ss,o("span",null,t(a.formDataSocio&&a.formDataSocio.servicios),1)]),o("div",ts,[ns,o("span",null,t(a.formDataSocio&&a.formDataSocio.abonos),1)]),o("div",rs,[ls,o("span",null,t(a.formDataSocio&&a.formDataSocio.importe),1)]),o("div",es,[is,o("span",null,t(a.formDataSocio&&a.formDataSocio.totale),1)]),o("div",cs,[ms,o("span",null,t(a.formDataSocio&&a.formDataSocio.vivienda),1)]),o("div",ds,[_s,o("span",null,t(a.formDataSocio&&a.formDataSocio.paredes),1)]),o("div",fs,[hs,o("span",null,t(a.formDataSocio&&a.formDataSocio.techos),1)]),o("div",gs,[Ds,o("span",null,t(a.formDataSocio&&a.formDataSocio.pisos),1)]),o("div",vs,[us,o("span",null,t(a.formDataSocio&&a.formDataSocio.mobiliario),1)]),o("div",bs,[Ss,o("span",null,t(a.formDataSocio&&a.formDataSocio.servmedico),1)]),o("div",qs,[Cs,o("span",null,t(a.formDataSocio&&a.formDataSocio.asistencia),1)]),o("div",ps,[Es,o("span",null,t(a.formDataSocio&&a.formDataSocio.cronicas),1)]),o("div",ys,[Ns,o("span",null,t(a.formDataSocio&&a.formDataSocio.tipo),1)]),o("div",As,[Is,o("span",null,t(a.formDataSocio&&a.formDataSocio.consumo),1)]),o("div",Ts,[Qs,o("span",null,t(a.formDataSocio&&a.formDataSocio.finde),1)]),o("div",Bs,[Gs,o("span",null,t(a.formDataSocio&&a.formDataSocio.actividades),1)]),o("div",Ms,[Os,o("span",null,t(a.formDataSocio&&a.formDataSocio.traslado),1)]),o("div",ws,[Rs,o("span",null,t(a.formDataSocio&&a.formDataSocio.mediotra),1)])])]),_:1}),i(J,{align:"right"},{default:d(()=>[i(R,{label:"Subir",type:"submit",color:"primary",class:"q-mb-md"})]),_:1})]),_:1})])]),_:1},8,["onSubmit","onReset"])])])]),_:1})}var Xs=B(V,[["render",xs],["__scopeId","data-v-28b00c51"]]);export{Xs as default};
