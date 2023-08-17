import{Q as u}from"./QCardSection.dca3ec06.js";import{Q as C}from"./QCard.30b991a5.js";import{Q as L}from"./QSelect.bbd29f10.js";import{_ as U,u as z,r as m,o as b,l as H,m as v,n as R,p as d,q as o,d as c,t as i,ar as s,aq as A,as as k,F as T,Q as V}from"./index.0a4cc95d.js";import{Q as J}from"./QSpace.02cacd90.js";import{Q as K}from"./QInput.4dc5f0e4.js";import{Q as O}from"./QForm.2e491152.js";import{Q as W}from"./QPage.6f2780ac.js";import{a as e}from"./axios.7331a07d.js";import"./use-dark.73e1a64d.js";import"./use-key-composition.d5947e72.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./QChip.e9cf1f0c.js";import"./QMenu.cc6fd88d.js";import"./use-prevent-scroll.36779d27.js";import"./format.3e32b8d9.js";const X={props:{idsolicitud:{type:String,required:!0}},setup(D){z();const _=m(null),S=m(null),a=m(null),p=m(null),y=m(null),h=m(null),l=m([]),g=m([]),E=m([]),w=m([]),Q=m([]),q=m([]),N=t=>{const n=l.value.find(r=>r.value===t);return n?n.label:""},G=t=>{const n=g.value.find(r=>r.value===t);return n?n.label:""},B=t=>{const n=E.value.find(r=>r.value===t);return n?n.label:""},M=t=>{const n=w.value.find(r=>r.value===t);return n?n.label:""},j=t=>{const n=Q.value.find(r=>r.value===t);return n?n.label:""},I=t=>{const n=q.value.find(r=>r.value===t);return n?n.label:""},P=async()=>{try{await e.put(`http://127.0.0.1:3000/api/solicitudes/${D.idsolicitud}`,{idestado:_.value.value,porcentaje:S.value}),console.log("Registro actualizado correctamente")}catch(t){console.error("Error al actualizar el registro:",t)}},f=m();return b(async()=>{try{const t=sessionStorage.getItem("key");f.value=t}catch(t){console.error("Error al obtener los datos del estudiante:",t)}}),b(async()=>{try{const t=await e.get("http://127.0.0.1:3000/api/carrera"),n=t.data;n&&n.length>0&&(l.value=n.map(r=>({label:r.carrera,value:r.idcarrera}))),console.log(t)}catch(t){console.error("Error al obtener la carrera:",t)}try{const t=await e.get("http://127.0.0.1:3000/api/carrera"),n=t.data;n&&n.length>0&&(l.value=n.map(r=>({label:r.carrera,value:r.idcarrera}))),console.log(t)}catch(t){console.error("Error al obtener la carrera:",t)}try{const t=await e.get("http://127.0.0.1:3000/api/area"),n=t.data;n&&n.length>0&&(g.value=n.map(r=>({label:r.area,value:r.idarea}))),console.log(t)}catch(t){console.error("Error al obtener el area:",t)}try{const t=await e.get("http://127.0.0.1:3000/api/grado"),n=t.data;n&&n.length>0&&(E.value=n.map(r=>({label:r.grado,value:r.idgrado}))),console.log(t)}catch(t){console.error("Error al obtener el grado:",t)}try{const t=await e.get("http://127.0.0.1:3000/api/genero"),n=t.data;n&&n.length>0&&(w.value=n.map(r=>({label:r.genero,value:r.idgenero}))),console.log(t)}catch(t){console.error("Error al obtener el genero:",t)}try{const t=await e.get("http://127.0.0.1:3000/api/becas/all"),n=t.data;n&&n.length>0&&(Q.value=n.map(r=>({label:r.beca,value:r.idbeca}))),console.log(t)}catch(t){console.error("Error al obtener la beca:",t)}try{const t=await e.get("http://127.0.0.1:3000/api/estado"),n=t.data;n&&n.length>0&&(q.value=n.map(r=>({label:r.estado,value:r.idestado}))),console.log(t)}catch(t){console.error("Error al obtener la beca:",t)}}),b(async()=>{try{const t=sessionStorage.getItem("key");f.value=t;const n=await e.get(`http://127.0.0.1:3000/api/solicitud/${D.idsolicitud}`);a.value=n.data,_.value=a.value.idestado,a.value.studentId=f.value;const r=await e.get(`http://127.0.0.1:3000/api/documentos/${f.value}`);h.value=r.data;const x=await e.get(`http://127.0.0.1:3000/api/carta/estatic/${f.value}`);p.value=x.data[0];const F=await e.get(`http://127.0.0.1:3000/api/socioeconomico/estatic/${f.value}`);y.value=F.data[0]}catch(t){console.error("Error:",t)}}),b(async()=>{try{const t=await e.get(`http://127.0.0.1:3000/api/documentos/${f.value}`);return t.data}catch(t){return console.error("Error al obtener los documentos:",t),[]}}),b(()=>{e.get("http://127.0.0.1:3000/api/becas/all").then(t=>{Q.value=t.data}).catch(t=>{console.error("Error al obtener las becas:",t)}),e.get("http://127.0.0.1:3000/api/carrera").then(t=>{l.value=t.data}).catch(t=>{console.error("Error al obtener las carreras:",t)}),e.get("http://127.0.0.1:3000/api/area").then(t=>{g.value=t.data}).catch(t=>{console.error("Error al obtener las \xE1reas:",t)}),e.get("http://127.0.0.1:3000/api/grado").then(t=>{E.value=t.data}).catch(t=>{console.error("Error al obtener los grados:",t)}),e.get("http://127.0.0.1:3000/api/genero").then(t=>{w.value=t.data}).catch(t=>{console.error("Error al obtener los g\xE9neros:",t)}),e.get("http://127.0.0.1:3000/api/estado").then(t=>{q.value=t.data}).catch(t=>{console.error("Error al obtener los g\xE9neros:",t)})}),{formData:a,formDataCarta:p,formDataSocio:y,formDataDocumentos:h,getCarreraContent:N,getAreaContent:G,getGradoContent:B,getGeneroContent:M,getBecaContent:j,getEstadoContent:I,studentId:f,porcentaje:S,estadoRef:_,estados:q,onSubmit:P}}},Y={class:"q-pa-md row items-start q-gutter-md"},Z={class:"q-gutter-md container"},$={class:"q-pt-lg"},oo={class:"q-col-gutter-md q-row items-start"},ao={class:"row"},to={class:"q-pa-md"},so=o("p",{class:"q-mb-sm"},"Los datos de la solicitud son:",-1),no={class:"q-mb-sm"},ro=o("strong",null,"Apellido Paterno:",-1),eo={class:"q-mb-sm"},lo=o("strong",null,"Apellido Materno:",-1),co={class:"q-mb-sm"},io=o("strong",null,"Nombre:",-1),mo={class:"q-mb-sm"},_o=o("strong",null,"Matr\xEDcula:",-1),fo={class:"q-mb-sm"},ho=o("strong",null,"Telefono:",-1),go={class:"q-mb-sm"},uo=o("strong",null,"Beca:",-1),Do={class:"q-mb-sm"},bo=o("strong",null,"Carrera:",-1),vo={class:"q-mb-sm"},qo=o("strong",null,"Area:",-1),Co={class:"q-mb-sm"},So=o("strong",null,"Grado:",-1),po={class:"q-mb-sm"},yo=o("strong",null,"Cuatrimestre:",-1),Eo={class:"q-mb-sm"},wo=o("strong",null,"Grupo:",-1),Qo={class:"q-mb-sm"},Ao=o("strong",null,"Correo tutor:",-1),Ro={class:"q-mb-sm"},ko=o("strong",null,"Genero:",-1),To={class:"q-mb-sm"},Vo=o("strong",null,"Porcentaje:",-1),No={class:"q-mb-sm"},Go=o("strong",null,"Estado:",-1),Bo={class:"q-pa-md"},Mo=o("p",{class:"q-mb-sm"}," Los datos enviados de los socioeconomicos del estudiante son: ",-1),jo={class:"q-mb-sm"},Io=o("strong",null,"Nombre:",-1),Po={class:"q-mb-sm"},xo=o("strong",null,"Nacimiento:",-1),Fo={class:"q-mb-sm"},Lo=o("strong",null,"Domicilio:",-1),Uo={class:"q-mb-sm"},zo=o("strong",null,"Con quien vives actualmente:",-1),Ho={class:"q-mb-sm"},Jo=o("strong",null,"Tel\xE9fono:",-1),Ko={class:"q-mb-sm"},Oo=o("strong",null,"Celular:",-1),Wo={class:"q-mb-sm"},Xo=o("strong",null,"Modo de trasporte para llegar al domicilio:",-1),Yo={class:"q-mb-sm"},Zo=o("strong",null,"Ingresos mensuales propios:",-1),$o={class:"q-mb-sm"},oa=o("strong",null,"Aporte a los ingresos del padre:",-1),aa={class:"q-mb-sm"},ta=o("strong",null,"Aporte a los ingresos del madre:",-1),sa={class:"q-mb-sm"},na=o("strong",null,"Aporte a los ingresos de los hermanos:",-1),ra={class:"q-mb-sm"},ea=o("strong",null,"Total de ingresos mensuales:",-1),la={class:"q-mb-sm"},ca=o("strong",null,"Egresos en alimentacion mensuales:",-1),ia={class:"q-mb-sm"},da=o("strong",null,"Egresos en telefonia mensuales:",-1),ma={class:"q-mb-sm"},_a=o("strong",null,"Egresos en credito de vivienda mensuales:",-1),fa={class:"q-mb-sm"},ha=o("strong",null,"Egresos en renta mensuales:",-1),ga={class:"q-mb-sm"},ua=o("strong",null,"Egresos en servicios basicos mensuales:",-1),Da={class:"q-mb-sm"},ba=o("strong",null,"Egresos en abonos o creditos mensuales:",-1),va={class:"q-mb-sm"},qa=o("strong",null,"Egresos en importe de transorte mensuales:",-1),Ca={class:"q-mb-sm"},Sa=o("strong",null,"Total de egresos mensuales:",-1),pa={class:"q-mb-sm"},ya=o("strong",null,"La situaci\xF3n de tu vivienda:",-1),Ea={class:"q-mb-sm"},wa=o("strong",null,"Tus paredes son de:",-1),Qa={class:"q-mb-sm"},Aa=o("strong",null,"Tu techo es de:",-1),Ra={class:"q-mb-sm"},ka=o("strong",null,"Tu piso es de:",-1),Ta={class:"q-mb-sm"},Va=o("strong",null,"Cuentas con un mobiliario de:",-1),Na={class:"q-mb-sm"},Ga=o("strong",null,"Servicios M\xE9dicos con los que cuenta la familia:",-1),Ba={class:"q-mb-sm"},Ma=o("strong",null,"Frecuencia con la que asiste al m\xE9dico:",-1),ja={class:"q-mb-sm"},Ia=o("strong",null,"Padeces de enfermedad cronica:",-1),Pa={class:"q-mb-sm"},xa=o("strong",null,"El tipo de enfermedad cronica es de:",-1),Fa={class:"q-mb-sm"},La=o("strong",null,"Alimentacion que prefieres o consumes regularmente es de:",-1),Ua={class:"q-mb-sm"},za=o("strong",null,"Actividades Familiares el fin de semana:",-1),Ha={class:"q-mb-sm"},Ja=o("strong",null,"Actividades del alumno:",-1),Ka={class:"q-mb-sm"},Oa=o("strong",null,"Tiempo de traslado:",-1),Wa={class:"q-mb-sm"},Xa=o("strong",null,"Medio de Transporte:",-1),Ya={class:"q-pa-md"},Za=o("p",{class:"q-mb-sm"},"Los datos del solicitante son:",-1),$a={class:"q-mb-sm"},ot=o("strong",null,"Nombre:",-1),at={class:"q-mb-sm"},tt=o("strong",null,"Matr\xEDcula:",-1),st={class:"q-mb-sm"},nt=o("strong",null,"Domicilio:",-1),rt={class:"q-mb-sm"},et=o("strong",null,"Tel\xE9fono:",-1),lt={class:"q-mb-sm"},ct=o("strong",null,"Celular:",-1),it={class:"q-mb-sm"},dt=o("strong",null,"Correo:",-1),mt={class:"q-mb-sm"},_t=o("strong",null,"Nacimiento:",-1),ft={class:"q-mb-sm"},ht=o("strong",null,"Estado Civil:",-1),gt={class:"q-mb-sm"},ut=o("strong",null,"G\xE9nero:",-1),Dt={class:"q-mb-sm"},bt=o("strong",null,"Beca:",-1),vt={class:"q-mb-sm"},qt=o("strong",null,"Nivel de Estudios:",-1),Ct={class:"q-mb-sm"},St=o("strong",null,"Nombre de la Escuela:",-1),pt={class:"q-mb-sm"},yt=o("strong",null,"Tipo de la Escuela:",-1),Et={class:"q-mb-sm"},wt=o("strong",null,"Municipio de la Escuela:",-1),Qt={class:"q-mb-sm"},At=o("strong",null,"Promedio de la Escuela:",-1),Rt={class:"q-mb-sm"},kt=o("strong",null,"Carrera:",-1),Tt={class:"q-mb-sm"},Vt=o("strong",null,"\xC1rea:",-1),Nt={class:"q-mb-sm"},Gt=o("strong",null,"Cuatrimestre:",-1),Bt={class:"q-mb-sm"},Mt=o("strong",null,"Ultimo promedio obtenido:",-1),jt={class:"q-mb-sm"},It=o("strong",null,"Grupo:",-1),Pt={class:"q-mb-sm"},xt=o("strong",null,"Apoyo:",-1),Ft={class:"q-mb-sm"},Lt=o("strong",null,"Nombre del Apoyo:",-1),Ut={class:"q-mb-sm"},zt=o("strong",null,"Cantidad del Apoyo:",-1),Ht={class:"q-mb-sm"},Jt=o("strong",null,"Motivo:",-1),Kt={class:"q-pa-md"},Ot=o("p",{class:"q-mb-sm"},[o("strong",null,"Documentos:")],-1),Wt=o("strong",null,"Nombre del documento:",-1),Xt=o("br",null,null,-1),Yt=o("strong",null,"Ruta del documento:",-1),Zt=o("br",null,null,-1),$t=["href"],os={class:"q-mb-sm"},as=o("strong",null,"Estado de la beca:",-1),ts={class:"q-mb-sm"},ss=o("strong",null,"Estado de la beca:",-1),ns={class:"q-gutter-md"},rs=o("p",null,"\xA1En caso de ya sea aprovada la beca y deben asignarle un procentaje a la becas y si no se aprueba asignarle el valor de cero!",-1);function es(D,_,S,a,p,y){const h=H("q-col");return v(),R(W,{"style-fn":D.myTweak,padding:""},{default:d(()=>[o("div",Y,[o("div",Z,[c(O,{onSubmit:a.onSubmit,onReset:D.onReset},{default:d(()=>[o("div",$,[o("div",oo,[o("div",ao,[c(h,{cols:"4"},{default:d(()=>[c(C,{class:"my-card"},{default:d(()=>[c(u,{class:"q-col-md-4"},{default:d(()=>[o("div",to,[so,o("p",no,[ro,i(" "+s(a.formData&&a.formData.apellidopat),1)]),o("p",eo,[lo,i(" "+s(a.formData&&a.formData.apellidomat),1)]),o("p",co,[io,i(" "+s(a.formData&&a.formData.nombre),1)]),o("p",mo,[_o,i(" "+s(a.formData&&a.formData.matricula),1)]),o("p",fo,[ho,i(" "+s(a.formData&&a.formData.telefono),1)]),o("p",go,[uo,i(" "+s(a.getBecaContent(a.formData&&a.formData.idbeca)),1)]),o("p",Do,[bo,i(" "+s(a.getCarreraContent(a.formData&&a.formData.idcarrera)),1)]),o("p",vo,[qo,i(" "+s(a.getAreaContent(a.formData&&a.formData.idarea)),1)]),o("p",Co,[So,i(" "+s(a.getGradoContent(a.formData&&a.formData.idgrado)),1)]),o("p",po,[yo,i(" "+s(a.formData&&a.formData.cuatrimestre),1)]),o("p",Eo,[wo,i(" "+s(a.formData&&a.formData.grupo),1)]),o("p",Qo,[Ao,i(" "+s(a.formData&&a.formData.correotutor),1)]),o("p",Ro,[ko,i(" "+s(a.getGeneroContent(a.formData&&a.formData.idgenero)),1)]),o("p",To,[Vo,i(" "+s(a.formData&&a.formData.porcentaje),1)]),o("p",No,[Go,i(" "+s(a.getEstadoContent(a.formData&&a.formData.idestado)),1)])])]),_:1})]),_:1})]),_:1}),c(h,{cols:"4"},{default:d(()=>[c(C,{class:"my-card"},{default:d(()=>[c(u,{class:"q-col-md-4"},{default:d(()=>[o("div",Bo,[Mo,o("div",jo,[Io,o("span",null,s(a.formDataSocio&&a.formDataSocio.nombre),1)]),o("div",Po,[xo,o("span",null,s(a.formDataSocio&&a.formDataSocio.nacimiento),1)]),o("div",Fo,[Lo,o("span",null,s(a.formDataSocio&&a.formDataSocio.domicilio),1)]),o("div",Uo,[zo,o("span",null,s(a.formDataSocio&&a.formDataSocio.conquienvive),1)]),o("div",Ho,[Jo,o("span",null,s(a.formDataSocio&&a.formDataSocio.telefono),1)]),o("div",Ko,[Oo,o("span",null,s(a.formDataSocio&&a.formDataSocio.celular),1)]),o("div",Wo,[Xo,o("span",null,s(a.formDataSocio&&a.formDataSocio.transporte),1)]),o("div",Yo,[Zo,o("span",null,s(a.formDataSocio&&a.formDataSocio.ingreso),1)]),o("div",$o,[oa,o("span",null,s(a.formDataSocio&&a.formDataSocio.padre),1)]),o("div",aa,[ta,o("span",null,s(a.formDataSocio&&a.formDataSocio.madre),1)]),o("div",sa,[na,o("span",null,s(a.formDataSocio&&a.formDataSocio.hermanos),1)]),o("div",ra,[ea,o("span",null,s(a.formDataSocio&&a.formDataSocio.total),1)]),o("div",la,[ca,o("span",null,s(a.formDataSocio&&a.formDataSocio.alimentacion),1)]),o("div",ia,[da,o("span",null,s(a.formDataSocio&&a.formDataSocio.telefonia),1)]),o("div",ma,[_a,o("span",null,s(a.formDataSocio&&a.formDataSocio.credito),1)]),o("div",fa,[ha,o("span",null,s(a.formDataSocio&&a.formDataSocio.renta),1)]),o("div",ga,[ua,o("span",null,s(a.formDataSocio&&a.formDataSocio.servicios),1)]),o("div",Da,[ba,o("span",null,s(a.formDataSocio&&a.formDataSocio.abonos),1)]),o("div",va,[qa,o("span",null,s(a.formDataSocio&&a.formDataSocio.importe),1)]),o("div",Ca,[Sa,o("span",null,s(a.formDataSocio&&a.formDataSocio.totale),1)]),o("div",pa,[ya,o("span",null,s(a.formDataSocio&&a.formDataSocio.vivienda),1)]),o("div",Ea,[wa,o("span",null,s(a.formDataSocio&&a.formDataSocio.paredes),1)]),o("div",Qa,[Aa,o("span",null,s(a.formDataSocio&&a.formDataSocio.techos),1)]),o("div",Ra,[ka,o("span",null,s(a.formDataSocio&&a.formDataSocio.pisos),1)]),o("div",Ta,[Va,o("span",null,s(a.formDataSocio&&a.formDataSocio.mobiliario),1)]),o("div",Na,[Ga,o("span",null,s(a.formDataSocio&&a.formDataSocio.servmedico),1)]),o("div",Ba,[Ma,o("span",null,s(a.formDataSocio&&a.formDataSocio.asistencia),1)]),o("div",ja,[Ia,o("span",null,s(a.formDataSocio&&a.formDataSocio.cronicas),1)]),o("div",Pa,[xa,o("span",null,s(a.formDataSocio&&a.formDataSocio.tipo),1)]),o("div",Fa,[La,o("span",null,s(a.formDataSocio&&a.formDataSocio.consumo),1)]),o("div",Ua,[za,o("span",null,s(a.formDataSocio&&a.formDataSocio.finde),1)]),o("div",Ha,[Ja,o("span",null,s(a.formDataSocio&&a.formDataSocio.actividades),1)]),o("div",Ka,[Oa,o("span",null,s(a.formDataSocio&&a.formDataSocio.traslado),1)]),o("div",Wa,[Xa,o("span",null,s(a.formDataSocio&&a.formDataSocio.mediotra),1)])])]),_:1})]),_:1})]),_:1}),c(h,{cols:"4"},{default:d(()=>[c(C,{class:"my-card"},{default:d(()=>[c(u,{class:"q-col-md-4"},{default:d(()=>[o("div",Ya,[Za,o("div",$a,[ot,o("span",null,s(a.formDataCarta&&a.formDataCarta.nombre),1)]),o("div",at,[tt,o("span",null,s(a.formDataCarta&&a.formDataCarta.matricula),1)]),o("div",st,[nt,o("span",null,s(a.formDataCarta&&a.formDataCarta.domicilio),1)]),o("div",rt,[et,o("span",null,s(a.formDataCarta&&a.formDataCarta.telefono),1)]),o("div",lt,[ct,o("span",null,s(a.formDataCarta&&a.formDataCarta.celular),1)]),o("div",it,[dt,o("span",null,s(a.formDataCarta&&a.formDataCarta.correoper),1)]),o("div",mt,[_t,o("span",null,s(a.formDataCarta&&a.formDataCarta.nacimiento),1)]),o("div",ft,[ht,o("span",null,s(a.formDataCarta&&a.formDataCarta.estadocivil),1)]),o("div",gt,[ut,o("span",null,s(a.getGeneroContent(a.formDataCarta&&a.formDataCarta.genero)),1)]),o("div",Dt,[bt,o("span",null,s(a.getBecaContent(a.formDataCarta&&a.formDataCarta.beca)),1)]),o("div",vt,[qt,o("span",null,s(a.formDataCarta&&a.formDataCarta.nivelestudios),1)]),o("div",Ct,[St,o("span",null,s(a.formDataCarta&&a.formDataCarta.nombreescuela),1)]),o("div",pt,[yt,o("span",null,s(a.formDataCarta&&a.formDataCarta.tipoescuela),1)]),o("div",Et,[wt,o("span",null,s(a.formDataCarta&&a.formDataCarta.municipio),1)]),o("div",Qt,[At,o("span",null,s(a.formDataCarta&&a.formDataCarta.promedio),1)]),o("div",Rt,[kt,o("span",null,s(a.getCarreraContent(a.formDataCarta&&a.formDataCarta.carrera)),1)]),o("div",Tt,[Vt,o("span",null,s(a.getAreaContent(a.formDataCarta&&a.formDataCarta.area)),1)]),o("div",Nt,[Gt,o("span",null,s(a.formDataCarta&&a.formDataCarta.cuatrisoli),1)]),o("div",Bt,[Mt,o("span",null,s(a.formDataCarta&&a.formDataCarta.promedioult),1)]),o("div",jt,[It,o("span",null,s(a.formDataCarta&&a.formDataCarta.grupo),1)]),o("div",Pt,[xt,o("span",null,s(a.formDataCarta&&a.formDataCarta.apoyo),1)]),o("div",Ft,[Lt,o("span",null,s(a.formDataCarta&&a.formDataCarta.nombreapoyo),1)]),o("div",Ut,[zt,o("span",null,s(a.formDataCarta&&a.formDataCarta.cuanto),1)]),o("div",Ht,[Jt,o("span",null,s(a.formDataCarta&&a.formDataCarta.motivo),1)])])]),_:1})]),_:1})]),_:1}),c(C,{class:"my-card"},{default:d(()=>[c(u,null,{default:d(()=>[o("div",Kt,[Ot,(v(!0),A(T,null,k(a.formDataDocumentos,l=>(v(),A("div",{key:l.iddocumento,class:"q-mb-sm"},[Wt,o("span",null,s(l.nombre),1),Xt,Yt,o("span",null,s(l.documento),1),Zt,o("a",{href:`http://127.0.0.1:3000/api/documentos/${a.formData.studentId}/${l.nombre}`,target:"_blank"},"Ver documento",8,$t)]))),128))])]),_:1})]),_:1}),c(u,null,{default:d(()=>[o("p",os,[as,i(" "+s(a.getEstadoContent(a.formData&&a.formData.idestado)),1)]),c(L,{modelValue:a.estadoRef,"onUpdate:modelValue":_[0]||(_[0]=l=>a.estadoRef=l),options:a.estados,label:"Estado"},null,8,["modelValue","options"])]),_:1}),c(u,null,{default:d(()=>[o("p",ts,[ss,i(" "+s(a.getEstadoContent(a.formData&&a.formData.idestado)),1)]),o("div",ns,[(v(!0),A(T,null,k(a.estados,l=>(v(),R(V,{key:l.value,modelValue:a.estadoRef,"onUpdate:modelValue":_[1]||(_[1]=g=>a.estadoRef=g),onClick:g=>a.estadoRef=l,color:a.estadoRef===l?"primary":"default",label:l.label,class:"q-mb-md","text-color":"black","color:primary":""},null,8,["modelValue","onClick","color","label"]))),128))]),c(J),c(K,{modelValue:a.porcentaje,"onUpdate:modelValue":_[2]||(_[2]=l=>a.porcentaje=l),type:"text",class:"col-5 q-pt-lg",label:"Porcentaje que se le asignara a la beca"},null,8,["modelValue"]),rs,c(V,{type:"submit",color:"primary",label:"Guardar",class:"q-mt-md",onClick:a.onSubmit},null,8,["onClick"])]),_:1})])])])]),_:1},8,["onSubmit","onReset"])])])]),_:1},8,["style-fn"])}var ys=U(X,[["render",es]]);export{ys as default};
