import{Q as f}from"./QCardSection.d6a69534.js";import{Q as G}from"./QCard.31b63ebc.js";import{Q as x}from"./QPage.0c926a39.js";import{a as c}from"./axios.7331a07d.js";import{_ as I,u as Q,r as e,o as v,m as b,n as k,p as m,q as o,d as _,ar as t,aq as E,as as P,F,at as L,au as R}from"./index.467b1f04.js";import"./QSpace.5cb9d878.js";import"./QLinearProgress.59fe65c5.js";import"./use-dark.b2e99491.js";const V={setup(){Q();const d=e(""),h=e([]),D=e([]),a=e([]),u=e([]),g=e([]),i=e([]),q=e(null),C=e(null),S=e(null),p=e(null),y=n=>{const r=h.value.find(l=>l.value===n);return r?r.label:""},A=n=>{const r=D.value.find(l=>l.value===n);return r?r.label:""},T=n=>{const r=a.value.find(l=>l.value===n);return r?r.label:""},M=n=>{const r=u.value.find(l=>l.value===n);return r?r.label:""},N=n=>{const r=g.value.find(l=>l.value===n);return r?r.label:""},w=n=>{const r=i.value.find(l=>l.value===n);return r?r.label:""};v(async()=>{try{const n=await c.get("http://127.0.0.1:3000/api/carrera"),r=n.data;r&&r.length>0&&(h.value=r.map(l=>({label:l.carrera,value:l.idcarrera}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/area"),r=n.data;r&&r.length>0&&(D.value=r.map(l=>({label:l.area,value:l.idarea}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/grado"),r=n.data;r&&r.length>0&&(a.value=r.map(l=>({label:l.grado,value:l.idgrado}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/genero"),r=n.data;r&&r.length>0&&(u.value=r.map(l=>({label:l.genero,value:l.idgenero}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/becas/all"),r=n.data;r&&r.length>0&&(g.value=r.map(l=>({label:l.beca,value:l.idbeca}))),console.log(n)}catch(n){console.error("Error al obtener la beca:",n)}try{const n=await c.get("http://127.0.0.1:3000/api/estado"),r=n.data;r&&r.length>0&&(i.value=r.map(l=>({label:l.estado,value:l.idestado}))),console.log(n)}catch(n){console.error("Error al obtener la beca:",n)}}),v(()=>{c.get("http://127.0.0.1:3000/api/lasolicitud/estatic").then(n=>{q.value=n.data[0]}).catch(n=>{console.error("Error al obtener los detalles del registro:",n)}),c.get("http://127.0.0.1:3000/api/carta/estatic").then(n=>{C.value=n.data[0]}).catch(n=>{console.error("Error al obtener los detalles de la carta:",n)}),c.get("http://127.0.0.1:3000/api/socioeconomico/estatic").then(n=>{S.value=n.data[0]}).catch(n=>{console.error("Error al obtener los detalles socioecon\xF3micos:",n)})});async function B(n){try{return(await c.get("http://127.0.0.1:3000/api/documentos",{params:{idDocumentos:n}})).data}catch(r){return console.error("Error al obtener los documentos:",r),[]}}return v(async()=>{const r=await B([1,2]);p.value=r}),{formData:q,formDataCarta:C,formDataSocio:S,formDataDocumentos:p,beca:d,getCarreraContent:y,getAreaContent:A,getGradoContent:T,getGeneroContent:M,carreras:h,getBecaContent:N,getEstadoContent:w}}},s=d=>(L("data-v-b276f208"),d=d(),R(),d),j={class:"q-pa-md"},U=s(()=>o("p",{class:"titulo"},"Mi Beca",-1)),z={class:"q-gutter-md container"},H={class:"q-pt-lg"},J={class:"q-pa-md"},K=s(()=>o("p",{class:"q-mb-sm"},"Los datos de su solicitud son:",-1)),O={class:"q-mb-sm"},W=s(()=>o("strong",null,"Nombre:",-1)),X={class:"q-mb-sm"},Y=s(()=>o("strong",null,"Matr\xEDcula:",-1)),Z={class:"q-mb-sm"},$=s(()=>o("strong",null,"CURP:",-1)),oo={class:"q-mb-sm"},ao=s(()=>o("strong",null,"Tel\xE9fono:",-1)),so={class:"q-mb-sm"},to=s(()=>o("strong",null,"Correo Institucional:",-1)),no={class:"q-mb-sm"},ro=s(()=>o("strong",null,"Carrera:",-1)),lo={class:"q-mb-sm"},eo=s(()=>o("strong",null,"\xC1rea:",-1)),co={class:"q-mb-sm"},io=s(()=>o("strong",null,"Grado:",-1)),mo={class:"q-mb-sm"},_o=s(()=>o("strong",null,"Cuatrimestre:",-1)),ho={class:"q-mb-sm"},fo=s(()=>o("strong",null,"Grupo:",-1)),Do={class:"q-mb-sm"},uo=s(()=>o("strong",null,"Correo Tutor:",-1)),go={class:"q-mb-sm"},vo=s(()=>o("strong",null,"G\xE9nero:",-1)),bo={class:"q-mb-sm"},qo=s(()=>o("strong",null,"Estado:",-1)),Co={class:"q-mb-sm"},So=s(()=>o("strong",null,"Porcentaje obtenido:",-1)),po={class:"q-pa-md"},Eo=s(()=>o("p",{class:"q-mb-sm"},"Sus datos solicitante son:",-1)),yo={class:"q-mb-sm"},Ao=s(()=>o("strong",null,"Nombre:",-1)),To={class:"q-mb-sm"},Mo=s(()=>o("strong",null,"Matr\xEDcula:",-1)),No={class:"q-mb-sm"},wo=s(()=>o("strong",null,"Domicilio:",-1)),Bo={class:"q-mb-sm"},Go=s(()=>o("strong",null,"Tel\xE9fono:",-1)),xo={class:"q-mb-sm"},Io=s(()=>o("strong",null,"Celular:",-1)),Qo={class:"q-mb-sm"},ko=s(()=>o("strong",null,"Correo:",-1)),Po={class:"q-mb-sm"},Fo=s(()=>o("strong",null,"Nacimiento:",-1)),Lo={class:"q-mb-sm"},Ro=s(()=>o("strong",null,"Estado Civil:",-1)),Vo={class:"q-mb-sm"},jo=s(()=>o("strong",null,"G\xE9nero:",-1)),Uo={class:"q-mb-sm"},zo=s(()=>o("strong",null,"Beca:",-1)),Ho={class:"q-mb-sm"},Jo=s(()=>o("strong",null,"Nivel de Estudios:",-1)),Ko={class:"q-mb-sm"},Oo=s(()=>o("strong",null,"Nombre de la Escuela:",-1)),Wo={class:"q-mb-sm"},Xo=s(()=>o("strong",null,"Tipo de la Escuela:",-1)),Yo={class:"q-mb-sm"},Zo=s(()=>o("strong",null,"Municipio de la Escuela:",-1)),$o={class:"q-mb-sm"},oa=s(()=>o("strong",null,"Promedio de la Escuela:",-1)),aa={class:"q-mb-sm"},sa=s(()=>o("strong",null,"Carrera:",-1)),ta={class:"q-mb-sm"},na=s(()=>o("strong",null,"\xC1rea:",-1)),ra={class:"q-mb-sm"},la=s(()=>o("strong",null,"Cuatrimestre:",-1)),ea={class:"q-mb-sm"},ca=s(()=>o("strong",null,"Ultimo promedio obtenido:",-1)),ia={class:"q-mb-sm"},da=s(()=>o("strong",null,"Grupo:",-1)),ma={class:"q-mb-sm"},_a=s(()=>o("strong",null,"Apoyo:",-1)),ha={class:"q-mb-sm"},fa=s(()=>o("strong",null,"Nombre del Apoyo:",-1)),Da={class:"q-mb-sm"},ua=s(()=>o("strong",null,"Cantidad del Apoyo:",-1)),ga={class:"q-mb-sm"},va=s(()=>o("strong",null,"Motivo:",-1)),ba={class:"q-pa-md"},qa=s(()=>o("p",{class:"q-mb-sm"}," Sus datos socioeconomicos son: ",-1)),Ca={class:"q-mb-sm"},Sa=s(()=>o("strong",null,"Nombre:",-1)),pa={class:"q-mb-sm"},Ea=s(()=>o("strong",null,"Nacimiento:",-1)),ya={class:"q-mb-sm"},Aa=s(()=>o("strong",null,"Domicilio:",-1)),Ta={class:"q-mb-sm"},Ma=s(()=>o("strong",null,"Con quien vives actualmente:",-1)),Na={class:"q-mb-sm"},wa=s(()=>o("strong",null,"Tel\xE9fono:",-1)),Ba={class:"q-mb-sm"},Ga=s(()=>o("strong",null,"Celular:",-1)),xa={class:"q-mb-sm"},Ia=s(()=>o("strong",null,"Modo de trasporte para llegar al domicilio:",-1)),Qa={class:"q-mb-sm"},ka=s(()=>o("strong",null,"Ingresos mensuales propios:",-1)),Pa={class:"q-mb-sm"},Fa=s(()=>o("strong",null,"Aporte a los ingresos del padre:",-1)),La={class:"q-mb-sm"},Ra=s(()=>o("strong",null,"Aporte a los ingresos del madre:",-1)),Va={class:"q-mb-sm"},ja=s(()=>o("strong",null,"Aporte a los ingresos de los hermanos:",-1)),Ua={class:"q-mb-sm"},za=s(()=>o("strong",null,"Total de ingresos mensuales:",-1)),Ha={class:"q-mb-sm"},Ja=s(()=>o("strong",null,"Egresos en alimentacion mensuales:",-1)),Ka={class:"q-mb-sm"},Oa=s(()=>o("strong",null,"Egresos en telefonia mensuales:",-1)),Wa={class:"q-mb-sm"},Xa=s(()=>o("strong",null,"Egresos en credito de vivienda mensuales:",-1)),Ya={class:"q-mb-sm"},Za=s(()=>o("strong",null,"Egresos en renta mensuales:",-1)),$a={class:"q-mb-sm"},os=s(()=>o("strong",null,"Egresos en servicios basicos mensuales:",-1)),as={class:"q-mb-sm"},ss=s(()=>o("strong",null,"Egresos en abonos o creditos mensuales:",-1)),ts={class:"q-mb-sm"},ns=s(()=>o("strong",null,"Egresos en importe de transorte mensuales:",-1)),rs={class:"q-mb-sm"},ls=s(()=>o("strong",null,"Total de egresos mensuales:",-1)),es={class:"q-mb-sm"},cs=s(()=>o("strong",null,"La situaci\xF3n de tu vivienda:",-1)),is={class:"q-mb-sm"},ds=s(()=>o("strong",null,"Tus paredes son de:",-1)),ms={class:"q-mb-sm"},_s=s(()=>o("strong",null,"Tu techo es de:",-1)),hs={class:"q-mb-sm"},fs=s(()=>o("strong",null,"Tu piso es de:",-1)),Ds={class:"q-mb-sm"},us=s(()=>o("strong",null,"Cuentas con un mobiliario de:",-1)),gs={class:"q-mb-sm"},vs=s(()=>o("strong",null,"Servicios M\xE9dicos con los que cuenta la familia:",-1)),bs={class:"q-mb-sm"},qs=s(()=>o("strong",null,"Frecuencia con la que asiste al m\xE9dico:",-1)),Cs={class:"q-mb-sm"},Ss=s(()=>o("strong",null,"Padeces de enfermedad cronica:",-1)),ps={class:"q-mb-sm"},Es=s(()=>o("strong",null,"El tipo de enfermedad cronica es de:",-1)),ys={class:"q-mb-sm"},As=s(()=>o("strong",null,"Alimentacion que prefieres o consumes regularmente es de:",-1)),Ts={class:"q-mb-sm"},Ms=s(()=>o("strong",null,"Actividades Familiares el fin de semana:",-1)),Ns={class:"q-mb-sm"},ws=s(()=>o("strong",null,"Actividades del alumno:",-1)),Bs={class:"q-mb-sm"},Gs=s(()=>o("strong",null,"Tiempo de traslado:",-1)),xs={class:"q-mb-sm"},Is=s(()=>o("strong",null,"Medio de Transporte:",-1)),Qs={class:"q-pa-md"},ks=s(()=>o("p",{class:"q-mb-sm"},"Sus documentos son:",-1)),Ps=s(()=>o("strong",null,"Nombre del documento:",-1)),Fs=s(()=>o("br",null,null,-1)),Ls=s(()=>o("strong",null,"Ruta del documento:",-1)),Rs=s(()=>o("br",null,null,-1)),Vs=["href"];function js(d,h,D,a,u,g){return b(),k(x,null,{default:m(()=>[o("div",j,[U,o("div",z,[o("div",H,[_(G,{class:"q-pa-md"},{default:m(()=>[_(f,null,{default:m(()=>[o("div",J,[K,o("div",O,[W,o("span",null,t(a.formData&&a.formData.nombre),1)]),o("div",X,[Y,o("span",null,t(a.formData&&a.formData.matricula),1)]),o("div",Z,[$,o("span",null,t(a.formData&&a.formData.curp),1)]),o("div",oo,[ao,o("span",null,t(a.formData&&a.formData.telefono),1)]),o("div",so,[to,o("span",null,t(a.formData&&a.formData.correoinstitucional),1)]),o("div",no,[ro,o("span",null,t(a.getCarreraContent(a.formData&&a.formData.idcarrera)),1)]),o("div",lo,[eo,o("span",null,t(a.getAreaContent(a.formData&&a.formData.idarea)),1)]),o("div",co,[io,o("span",null,t(a.getGradoContent(a.formData&&a.formData.idgrado)),1)]),o("div",mo,[_o,o("span",null,t(a.formData&&a.formData.cuatrimestre),1)]),o("div",ho,[fo,o("span",null,t(a.formData&&a.formData.grupo),1)]),o("div",Do,[uo,o("span",null,t(a.formData&&a.formData.correotutor),1)]),o("div",go,[vo,o("span",null,t(a.getGeneroContent(a.formData&&a.formData.idgenero)),1)]),o("div",bo,[qo,o("span",null,t(a.getEstadoContent(a.formData&&a.formData.idestado)),1)]),o("div",Co,[So,o("span",null,t(a.formData&&a.formData.porcentaje),1)])])]),_:1}),_(f,null,{default:m(()=>[o("div",po,[Eo,o("div",yo,[Ao,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombre),1)]),o("div",To,[Mo,o("span",null,t(a.formDataCarta&&a.formDataCarta.matricula),1)]),o("div",No,[wo,o("span",null,t(a.formDataCarta&&a.formDataCarta.domicilio),1)]),o("div",Bo,[Go,o("span",null,t(a.formDataCarta&&a.formDataCarta.telefono),1)]),o("div",xo,[Io,o("span",null,t(a.formDataCarta&&a.formDataCarta.celular),1)]),o("div",Qo,[ko,o("span",null,t(a.formDataCarta&&a.formDataCarta.correoper),1)]),o("div",Po,[Fo,o("span",null,t(a.formDataCarta&&a.formDataCarta.nacimiento),1)]),o("div",Lo,[Ro,o("span",null,t(a.formDataCarta&&a.formDataCarta.estadocivil),1)]),o("div",Vo,[jo,o("span",null,t(a.getGeneroContent(a.formDataCarta&&a.formDataCarta.genero)),1)]),o("div",Uo,[zo,o("span",null,t(a.getBecaContent(a.formDataCarta&&a.formDataCarta.beca)),1)]),o("div",Ho,[Jo,o("span",null,t(a.formDataCarta&&a.formDataCarta.nivelestudios),1)]),o("div",Ko,[Oo,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombreescuela),1)]),o("div",Wo,[Xo,o("span",null,t(a.formDataCarta&&a.formDataCarta.tipoescuela),1)]),o("div",Yo,[Zo,o("span",null,t(a.formDataCarta&&a.formDataCarta.municipio),1)]),o("div",$o,[oa,o("span",null,t(a.formDataCarta&&a.formDataCarta.promedio),1)]),o("div",aa,[sa,o("span",null,t(a.getCarreraContent(a.formDataCarta&&a.formDataCarta.carrera)),1)]),o("div",ta,[na,o("span",null,t(a.getAreaContent(a.formDataCarta&&a.formDataCarta.area)),1)]),o("div",ra,[la,o("span",null,t(a.formDataCarta&&a.formDataCarta.cuatrisoli),1)]),o("div",ea,[ca,o("span",null,t(a.formDataCarta&&a.formDataCarta.promedioult),1)]),o("div",ia,[da,o("span",null,t(a.formDataCarta&&a.formDataCarta.grupo),1)]),o("div",ma,[_a,o("span",null,t(a.formDataCarta&&a.formDataCarta.apoyo),1)]),o("div",ha,[fa,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombreapoyo),1)]),o("div",Da,[ua,o("span",null,t(a.formDataCarta&&a.formDataCarta.cuanto),1)]),o("div",ga,[va,o("span",null,t(a.formDataCarta&&a.formDataCarta.motivo),1)])])]),_:1}),_(f,null,{default:m(()=>[o("div",ba,[qa,o("div",Ca,[Sa,o("span",null,t(a.formDataSocio&&a.formDataSocio.nombre),1)]),o("div",pa,[Ea,o("span",null,t(a.formDataSocio&&a.formDataSocio.nacimiento),1)]),o("div",ya,[Aa,o("span",null,t(a.formDataSocio&&a.formDataSocio.domicilio),1)]),o("div",Ta,[Ma,o("span",null,t(a.formDataSocio&&a.formDataSocio.conquienvive),1)]),o("div",Na,[wa,o("span",null,t(a.formDataSocio&&a.formDataSocio.telefono),1)]),o("div",Ba,[Ga,o("span",null,t(a.formDataSocio&&a.formDataSocio.celular),1)]),o("div",xa,[Ia,o("span",null,t(a.formDataSocio&&a.formDataSocio.transporte),1)]),o("div",Qa,[ka,o("span",null,t(a.formDataSocio&&a.formDataSocio.ingreso),1)]),o("div",Pa,[Fa,o("span",null,t(a.formDataSocio&&a.formDataSocio.padre),1)]),o("div",La,[Ra,o("span",null,t(a.formDataSocio&&a.formDataSocio.madre),1)]),o("div",Va,[ja,o("span",null,t(a.formDataSocio&&a.formDataSocio.hermanos),1)]),o("div",Ua,[za,o("span",null,t(a.formDataSocio&&a.formDataSocio.total),1)]),o("div",Ha,[Ja,o("span",null,t(a.formDataSocio&&a.formDataSocio.alimentacion),1)]),o("div",Ka,[Oa,o("span",null,t(a.formDataSocio&&a.formDataSocio.telefonia),1)]),o("div",Wa,[Xa,o("span",null,t(a.formDataSocio&&a.formDataSocio.credito),1)]),o("div",Ya,[Za,o("span",null,t(a.formDataSocio&&a.formDataSocio.renta),1)]),o("div",$a,[os,o("span",null,t(a.formDataSocio&&a.formDataSocio.servicios),1)]),o("div",as,[ss,o("span",null,t(a.formDataSocio&&a.formDataSocio.abonos),1)]),o("div",ts,[ns,o("span",null,t(a.formDataSocio&&a.formDataSocio.importe),1)]),o("div",rs,[ls,o("span",null,t(a.formDataSocio&&a.formDataSocio.totale),1)]),o("div",es,[cs,o("span",null,t(a.formDataSocio&&a.formDataSocio.vivienda),1)]),o("div",is,[ds,o("span",null,t(a.formDataSocio&&a.formDataSocio.paredes),1)]),o("div",ms,[_s,o("span",null,t(a.formDataSocio&&a.formDataSocio.techos),1)]),o("div",hs,[fs,o("span",null,t(a.formDataSocio&&a.formDataSocio.pisos),1)]),o("div",Ds,[us,o("span",null,t(a.formDataSocio&&a.formDataSocio.mobiliario),1)]),o("div",gs,[vs,o("span",null,t(a.formDataSocio&&a.formDataSocio.servmedico),1)]),o("div",bs,[qs,o("span",null,t(a.formDataSocio&&a.formDataSocio.asistencia),1)]),o("div",Cs,[Ss,o("span",null,t(a.formDataSocio&&a.formDataSocio.cronicas),1)]),o("div",ps,[Es,o("span",null,t(a.formDataSocio&&a.formDataSocio.tipo),1)]),o("div",ys,[As,o("span",null,t(a.formDataSocio&&a.formDataSocio.consumo),1)]),o("div",Ts,[Ms,o("span",null,t(a.formDataSocio&&a.formDataSocio.finde),1)]),o("div",Ns,[ws,o("span",null,t(a.formDataSocio&&a.formDataSocio.actividades),1)]),o("div",Bs,[Gs,o("span",null,t(a.formDataSocio&&a.formDataSocio.traslado),1)]),o("div",xs,[Is,o("span",null,t(a.formDataSocio&&a.formDataSocio.mediotra),1)])])]),_:1}),_(f,null,{default:m(()=>[o("div",Qs,[ks,(b(!0),E(F,null,P(a.formDataDocumentos,i=>(b(),E("div",{key:i.iddocumento,class:"q-mb-sm"},[Ps,o("span",null,t(i.nombre),1),Fs,Ls,o("span",null,t(i.documento),1),Rs,o("a",{href:`http://127.0.0.1:3000/api/documentos/${i.documento}`,target:"_blank"},"Ver documento",8,Vs)]))),128))])]),_:1})]),_:1})])])])]),_:1})}var Ys=I(V,[["render",js],["__scopeId","data-v-b276f208"]]);export{Ys as default};
