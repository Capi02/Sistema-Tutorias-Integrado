import{Q as M}from"./QInput.4dc5f0e4.js";import{Q as O}from"./QSpace.02cacd90.js";import{Q as q}from"./QCardSection.dca3ec06.js";import{_ as w,u as R,r as i,o as I,l as E,m as F,n as J,p as _,q as o,d as l,t as A,ar as t,Q as V,at as x,au as P}from"./index.0a4cc95d.js";import{Q as L}from"./QCardActions.ad60c45d.js";import{Q as j}from"./QCard.30b991a5.js";import{Q as k}from"./QForm.2e491152.js";import{Q as U}from"./QPage.6f2780ac.js";import{a as d}from"./axios.7331a07d.js";import"./QLinearProgress.2e1dc632.js";import"./use-key-composition.d5947e72.js";import"./use-dark.73e1a64d.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";const z={setup(){const c=R(),m=i({nombre:"",matricula:"",curp:"",telefono:"",correoinstitucional:"",beca:"",carrera:"",area:"",grado:"",cuatrimestre:"",grupo:"",correotutor:"",genero:"",studentId:""}),f=i({nombre:"",matricula:"",domicilio:"",telefono:"",celular:"",correoper:"",nacimiento:"",estadocivil:"",genero:"",beca:"",nivelestudios:"",nombreescuela:"",tipoescuela:"",municipio:"",promedio:"",carrera:"",area:"",cuatrisoli:"",grupo:"",promedioult:"",apoyo:"",nombreapoyo:"",cuanto:"",motivo:"",studentId:""}),a=i({nombre:"",nacimiento:"",domicilio:"",conquienvive:"",telefono:"",celular:"",transporte:"",ingreso:"",padre:"",madre:"",hermanos:"",total:"",alimentacion:"",telefonia:"",credito:"",renta:"",servicios:"",abonos:"",importe:"",totale:"",vivienda:"",paredes:"",techos:"",pisos:"",mobiliario:"",servmedico:"",asistencia:"",cronicas:"",tipo:"",consumo:"",finde:"",actividades:"",traslado:"",mediotra:"",studentId:""}),u=i();I(async()=>{try{const n=sessionStorage.getItem("key");u.value=n}catch(n){console.error("Error al obtener los datos del estudiante:",n)}});const v=i(""),h=i([]),g=i([]),D=i([]),C=i([]),p=i([]),N=n=>{const r=h.value.find(e=>e.value===n);return r?r.label:""},Q=n=>{const r=g.value.find(e=>e.value===n);return r?r.label:""},T=n=>{const r=D.value.find(e=>e.value===n);return r?r.label:""},B=n=>{const r=C.value.find(e=>e.value===n);return r?r.label:""},G=n=>{const r=p.value.find(e=>e.value===n);return r?r.label:""};return I(async()=>{try{const n=await d.get("http://127.0.0.1:3000/api/carrera"),r=n.data;r&&r.length>0&&(h.value=r.map(e=>({label:e.carrera,value:e.idcarrera}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await d.get("http://127.0.0.1:3000/api/area"),r=n.data;r&&r.length>0&&(g.value=r.map(e=>({label:e.area,value:e.idarea}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await d.get("http://127.0.0.1:3000/api/grado"),r=n.data;r&&r.length>0&&(D.value=r.map(y=>({label:y.grado,value:y.idgrado}))),console.log(n);const e=JSON.parse(localStorage.getItem("formData"));e&&(Object.assign(m.value,e),console.log(e));const b=JSON.parse(localStorage.getItem("formDataCarta"));b&&(Object.assign(f.value,b),console.log(b));const S=JSON.parse(localStorage.getItem("formDataSocio"));S&&(Object.assign(a.value,S),console.log(S))}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await d.get("http://127.0.0.1:3000/api/genero"),r=n.data;r&&r.length>0&&(C.value=r.map(e=>({label:e.genero,value:e.idgenero}))),console.log(n)}catch(n){console.error("Error al obtener la carrera:",n)}try{const n=await d.get("http://127.0.0.1:3000/api/becas/all"),r=n.data;r&&r.length>0&&(p.value=r.map(e=>({label:e.beca,value:e.idbeca}))),console.log(n)}catch(n){console.error("Error al obtener la beca:",n)}}),{formData:m,formDataCarta:f,formDataSocio:a,onSubmit:()=>{v.value==="Academica"&&(m.value.beca=1),localStorage.setItem("formData",JSON.stringify(m.value)),d.post("http://127.0.0.1:3000/api/form",m.value).then(n=>{console.log("Datos enviados correctamente")}).catch(n=>{console.error("Error al enviar los datos:",n.response.data)}),localStorage.removeItem("formData"),localStorage.setItem("formDataCarta",JSON.stringify(f.value)),d.post("http://127.0.0.1:3000/api/form/carta",f.value).then(n=>{console.log("Datos enviados correctamente")}).catch(n=>{console.error("Error al enviar los datos:",n.response.data)}),localStorage.removeItem("formDataCarta"),localStorage.setItem("formDataSocio",JSON.stringify(a.value)),d.post("http://127.0.0.1:3000/api/form/socio",a.value).then(n=>{console.log("Datos enviados correctamente")}).catch(n=>{console.error("Error al enviar los datos:",n.response.data)}),localStorage.removeItem("formDataSocio"),c.push({path:"/alumno/academica/paso2"})},beca:v,getCarreraContent:N,getAreaContent:Q,getGradoContent:T,getGeneroContent:B,carreras:h,getBecaContent:G,studentId:u}}},s=c=>(x("data-v-2d71b6fa"),c=c(),P(),c),H={class:"q-pa-md"},K=s(()=>o("div",{class:"title"},"Beca Academica",-1)),W={class:"q-gutter-md container"},X={class:"q-pt-lg"},Y={class:"q-pa-md"},Z=s(()=>o("p",{class:"q-mb-sm"},"Los datos de la solicitud a enviar son:",-1)),$={class:"q-mb-sm"},oo=s(()=>o("strong",null,"Apellido Paterno:",-1)),ao={class:"q-mb-sm"},so=s(()=>o("strong",null,"Apellido Materno:",-1)),to={class:"q-mb-sm"},no=s(()=>o("strong",null,"Nombre:",-1)),ro={class:"q-mb-sm"},eo=s(()=>o("strong",null,"Matr\xEDcula:",-1)),lo={class:"q-mb-sm"},io=s(()=>o("strong",null,"CURP:",-1)),co={class:"q-mb-sm"},mo=s(()=>o("strong",null,"Tel\xE9fono:",-1)),_o={class:"q-mb-sm"},fo=s(()=>o("strong",null,"Correo Institucional:",-1)),ho={class:"q-mb-sm"},go=s(()=>o("strong",null,"Carrera:",-1)),Do={class:"q-mb-sm"},uo=s(()=>o("strong",null,"\xC1rea:",-1)),vo={class:"q-mb-sm"},bo=s(()=>o("strong",null,"Grado:",-1)),So={class:"q-mb-sm"},qo=s(()=>o("strong",null,"Cuatrimestre:",-1)),Co={class:"q-mb-sm"},po=s(()=>o("strong",null,"Grupo:",-1)),yo={class:"q-mb-sm"},Io=s(()=>o("strong",null,"Correo Tutor:",-1)),Eo={class:"q-mb-sm"},Ao=s(()=>o("strong",null,"G\xE9nero:",-1)),No={class:"q-pa-md"},Qo=s(()=>o("p",{class:"q-mb-sm"},"Los datos del solicitante a enviar son:",-1)),To={class:"q-mb-sm"},Bo=s(()=>o("strong",null,"Nombre:",-1)),Go={class:"q-mb-sm"},Mo=s(()=>o("strong",null,"Matr\xEDcula:",-1)),Oo={class:"q-mb-sm"},wo=s(()=>o("strong",null,"Domicilio:",-1)),Ro={class:"q-mb-sm"},Fo=s(()=>o("strong",null,"Tel\xE9fono:",-1)),Jo={class:"q-mb-sm"},Vo=s(()=>o("strong",null,"Celular:",-1)),xo={class:"q-mb-sm"},Po=s(()=>o("strong",null,"Correo:",-1)),Lo={class:"q-mb-sm"},jo=s(()=>o("strong",null,"Nacimiento:",-1)),ko={class:"q-mb-sm"},Uo=s(()=>o("strong",null,"Estado Civil:",-1)),zo={class:"q-mb-sm"},Ho=s(()=>o("strong",null,"G\xE9nero:",-1)),Ko={class:"q-mb-sm"},Wo=s(()=>o("strong",null,"Beca:",-1)),Xo={class:"q-mb-sm"},Yo=s(()=>o("strong",null,"Nivel de Estudios:",-1)),Zo={class:"q-mb-sm"},$o=s(()=>o("strong",null,"Nombre de la Escuela:",-1)),oa={class:"q-mb-sm"},aa=s(()=>o("strong",null,"Tipo de la Escuela:",-1)),sa={class:"q-mb-sm"},ta=s(()=>o("strong",null,"Municipio de la Escuela:",-1)),na={class:"q-mb-sm"},ra=s(()=>o("strong",null,"Promedio de la Escuela:",-1)),ea={class:"q-mb-sm"},la=s(()=>o("strong",null,"Carrera:",-1)),ia={class:"q-mb-sm"},ca=s(()=>o("strong",null,"\xC1rea:",-1)),ma={class:"q-mb-sm"},da=s(()=>o("strong",null,"Cuatrimestre:",-1)),_a={class:"q-mb-sm"},fa=s(()=>o("strong",null,"Ultimo promedio obtenido:",-1)),ha={class:"q-mb-sm"},ga=s(()=>o("strong",null,"Grupo:",-1)),Da={class:"q-mb-sm"},ua=s(()=>o("strong",null,"Apoyo:",-1)),va={class:"q-mb-sm"},ba=s(()=>o("strong",null,"Nombre del Apoyo:",-1)),Sa={class:"q-mb-sm"},qa=s(()=>o("strong",null,"Cantidad del Apoyo:",-1)),Ca={class:"q-mb-sm"},pa=s(()=>o("strong",null,"Motivo:",-1)),ya={class:"q-pa-md"},Ia=s(()=>o("p",{class:"q-mb-sm"}," Los datos enviados de los socioeconomicos son: ",-1)),Ea={class:"q-mb-sm"},Aa=s(()=>o("strong",null,"Nombre:",-1)),Na={class:"q-mb-sm"},Qa=s(()=>o("strong",null,"Nacimiento:",-1)),Ta={class:"q-mb-sm"},Ba=s(()=>o("strong",null,"Domicilio:",-1)),Ga={class:"q-mb-sm"},Ma=s(()=>o("strong",null,"Con quien vives actualmente:",-1)),Oa={class:"q-mb-sm"},wa=s(()=>o("strong",null,"Tel\xE9fono:",-1)),Ra={class:"q-mb-sm"},Fa=s(()=>o("strong",null,"Celular:",-1)),Ja={class:"q-mb-sm"},Va=s(()=>o("strong",null,"Modo de trasporte para llegar al domicilio:",-1)),xa={class:"q-mb-sm"},Pa=s(()=>o("strong",null,"Ingresos mensuales propios:",-1)),La={class:"q-mb-sm"},ja=s(()=>o("strong",null,"Aporte a los ingresos del padre:",-1)),ka={class:"q-mb-sm"},Ua=s(()=>o("strong",null,"Aporte a los ingresos del madre:",-1)),za={class:"q-mb-sm"},Ha=s(()=>o("strong",null,"Aporte a los ingresos de los hermanos:",-1)),Ka={class:"q-mb-sm"},Wa=s(()=>o("strong",null,"Total de ingresos mensuales:",-1)),Xa={class:"q-mb-sm"},Ya=s(()=>o("strong",null,"Egresos en alimentacion mensuales:",-1)),Za={class:"q-mb-sm"},$a=s(()=>o("strong",null,"Egresos en telefonia mensuales:",-1)),os={class:"q-mb-sm"},as=s(()=>o("strong",null,"Egresos en credito de vivienda mensuales:",-1)),ss={class:"q-mb-sm"},ts=s(()=>o("strong",null,"Egresos en renta mensuales:",-1)),ns={class:"q-mb-sm"},rs=s(()=>o("strong",null,"Egresos en servicios basicos mensuales:",-1)),es={class:"q-mb-sm"},ls=s(()=>o("strong",null,"Egresos en abonos o creditos mensuales:",-1)),is={class:"q-mb-sm"},cs=s(()=>o("strong",null,"Egresos en importe de transorte mensuales:",-1)),ms={class:"q-mb-sm"},ds=s(()=>o("strong",null,"Total de egresos mensuales:",-1)),_s={class:"q-mb-sm"},fs=s(()=>o("strong",null,"La situaci\xF3n de tu vivienda:",-1)),hs={class:"q-mb-sm"},gs=s(()=>o("strong",null,"Tus paredes son de:",-1)),Ds={class:"q-mb-sm"},us=s(()=>o("strong",null,"Tu techo es de:",-1)),vs={class:"q-mb-sm"},bs=s(()=>o("strong",null,"Tu piso es de:",-1)),Ss={class:"q-mb-sm"},qs=s(()=>o("strong",null,"Cuentas con un mobiliario de:",-1)),Cs={class:"q-mb-sm"},ps=s(()=>o("strong",null,"Servicios M\xE9dicos con los que cuenta la familia:",-1)),ys={class:"q-mb-sm"},Is=s(()=>o("strong",null,"Frecuencia con la que asiste al m\xE9dico:",-1)),Es={class:"q-mb-sm"},As=s(()=>o("strong",null,"Padeces de enfermedad cronica:",-1)),Ns={class:"q-mb-sm"},Qs=s(()=>o("strong",null,"El tipo de enfermedad cronica es de:",-1)),Ts={class:"q-mb-sm"},Bs=s(()=>o("strong",null,"Alimentacion que prefieres o consumes regularmente es de:",-1)),Gs={class:"q-mb-sm"},Ms=s(()=>o("strong",null,"Actividades Familiares el fin de semana:",-1)),Os={class:"q-mb-sm"},ws=s(()=>o("strong",null,"Actividades del alumno:",-1)),Rs={class:"q-mb-sm"},Fs=s(()=>o("strong",null,"Tiempo de traslado:",-1)),Js={class:"q-mb-sm"},Vs=s(()=>o("strong",null,"Medio de Transporte:",-1));function xs(c,m,f,a,u,v){const h=E("button-progress"),g=E("dos-progreso-bar");return F(),J(U,null,{default:_(()=>[o("div",H,[K,l(h),l(g),o("div",W,[l(k,{onSubmit:a.onSubmit,onReset:c.onReset},{default:_(()=>[o("div",X,[l(j,{class:"q-pa-md"},{default:_(()=>[l(q,null,{default:_(()=>[l(M,{filled:"",modelValue:a.studentId,"onUpdate:modelValue":m[0]||(m[0]=D=>a.studentId=D),class:"col-5 q-pt-lg",hint:"Tu ID",dense:c.dense,disable:"",readonly:""},null,8,["modelValue","dense"]),l(O),o("div",Y,[Z,o("p",$,[oo,A(" "+t(a.formData&&a.formData.apellidopat),1)]),o("p",ao,[so,A(" "+t(a.formData&&a.formData.apellidomat),1)]),o("div",to,[no,o("span",null,t(a.formData&&a.formData.nombre),1)]),o("div",ro,[eo,o("span",null,t(a.formData&&a.formData.matricula),1)]),o("div",lo,[io,o("span",null,t(a.formData&&a.formData.curp),1)]),o("div",co,[mo,o("span",null,t(a.formData&&a.formData.telefono),1)]),o("div",_o,[fo,o("span",null,t(a.formData&&a.formData.correoinstitucional),1)]),o("div",ho,[go,o("span",null,t(a.getCarreraContent(a.formData&&a.formData.carrera)),1)]),o("div",Do,[uo,o("span",null,t(a.getAreaContent(a.formData&&a.formData.area)),1)]),o("div",vo,[bo,o("span",null,t(a.getGradoContent(a.formData&&a.formData.grado)),1)]),o("div",So,[qo,o("span",null,t(a.formData&&a.formData.cuatrimestre),1)]),o("div",Co,[po,o("span",null,t(a.formData&&a.formData.grupo),1)]),o("div",yo,[Io,o("span",null,t(a.formData&&a.formData.correotutor),1)]),o("div",Eo,[Ao,o("span",null,t(a.getGeneroContent(a.formData&&a.formData.genero)),1)])])]),_:1}),l(q,null,{default:_(()=>[o("div",No,[Qo,o("div",To,[Bo,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombre),1)]),o("div",Go,[Mo,o("span",null,t(a.formDataCarta&&a.formDataCarta.matricula),1)]),o("div",Oo,[wo,o("span",null,t(a.formDataCarta&&a.formDataCarta.domicilio),1)]),o("div",Ro,[Fo,o("span",null,t(a.formDataCarta&&a.formDataCarta.telefono),1)]),o("div",Jo,[Vo,o("span",null,t(a.formDataCarta&&a.formDataCarta.celular),1)]),o("div",xo,[Po,o("span",null,t(a.formDataCarta&&a.formDataCarta.correoper),1)]),o("div",Lo,[jo,o("span",null,t(a.formDataCarta&&a.formDataCarta.nacimiento),1)]),o("div",ko,[Uo,o("span",null,t(a.formDataCarta&&a.formDataCarta.estadocivil),1)]),o("div",zo,[Ho,o("span",null,t(a.getGeneroContent(a.formDataCarta&&a.formDataCarta.genero)),1)]),o("div",Ko,[Wo,o("span",null,t(a.getBecaContent(a.formDataCarta&&a.formDataCarta.beca)),1)]),o("div",Xo,[Yo,o("span",null,t(a.formDataCarta&&a.formDataCarta.nivelestudios),1)]),o("div",Zo,[$o,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombreescuela),1)]),o("div",oa,[aa,o("span",null,t(a.formDataCarta&&a.formDataCarta.tipoescuela),1)]),o("div",sa,[ta,o("span",null,t(a.formDataCarta&&a.formDataCarta.municipio),1)]),o("div",na,[ra,o("span",null,t(a.formDataCarta&&a.formDataCarta.promedio),1)]),o("div",ea,[la,o("span",null,t(a.getCarreraContent(a.formDataCarta&&a.formDataCarta.carrera)),1)]),o("div",ia,[ca,o("span",null,t(a.getAreaContent(a.formDataCarta&&a.formDataCarta.area)),1)]),o("div",ma,[da,o("span",null,t(a.formDataCarta&&a.formDataCarta.cuatrisoli),1)]),o("div",_a,[fa,o("span",null,t(a.formDataCarta&&a.formDataCarta.promedioult),1)]),o("div",ha,[ga,o("span",null,t(a.formDataCarta&&a.formDataCarta.grupo),1)]),o("div",Da,[ua,o("span",null,t(a.formDataCarta&&a.formDataCarta.apoyo),1)]),o("div",va,[ba,o("span",null,t(a.formDataCarta&&a.formDataCarta.nombreapoyo),1)]),o("div",Sa,[qa,o("span",null,t(a.formDataCarta&&a.formDataCarta.cuanto),1)]),o("div",Ca,[pa,o("span",null,t(a.formDataCarta&&a.formDataCarta.motivo),1)])])]),_:1}),l(q,null,{default:_(()=>[o("div",ya,[Ia,o("div",Ea,[Aa,o("span",null,t(a.formDataSocio&&a.formDataSocio.nombre),1)]),o("div",Na,[Qa,o("span",null,t(a.formDataSocio&&a.formDataSocio.nacimiento),1)]),o("div",Ta,[Ba,o("span",null,t(a.formDataSocio&&a.formDataSocio.domicilio),1)]),o("div",Ga,[Ma,o("span",null,t(a.formDataSocio&&a.formDataSocio.conquienvive),1)]),o("div",Oa,[wa,o("span",null,t(a.formDataSocio&&a.formDataSocio.telefono),1)]),o("div",Ra,[Fa,o("span",null,t(a.formDataSocio&&a.formDataSocio.celular),1)]),o("div",Ja,[Va,o("span",null,t(a.formDataSocio&&a.formDataSocio.transporte),1)]),o("div",xa,[Pa,o("span",null,t(a.formDataSocio&&a.formDataSocio.ingreso),1)]),o("div",La,[ja,o("span",null,t(a.formDataSocio&&a.formDataSocio.padre),1)]),o("div",ka,[Ua,o("span",null,t(a.formDataSocio&&a.formDataSocio.madre),1)]),o("div",za,[Ha,o("span",null,t(a.formDataSocio&&a.formDataSocio.hermanos),1)]),o("div",Ka,[Wa,o("span",null,t(a.formDataSocio&&a.formDataSocio.total),1)]),o("div",Xa,[Ya,o("span",null,t(a.formDataSocio&&a.formDataSocio.alimentacion),1)]),o("div",Za,[$a,o("span",null,t(a.formDataSocio&&a.formDataSocio.telefonia),1)]),o("div",os,[as,o("span",null,t(a.formDataSocio&&a.formDataSocio.credito),1)]),o("div",ss,[ts,o("span",null,t(a.formDataSocio&&a.formDataSocio.renta),1)]),o("div",ns,[rs,o("span",null,t(a.formDataSocio&&a.formDataSocio.servicios),1)]),o("div",es,[ls,o("span",null,t(a.formDataSocio&&a.formDataSocio.abonos),1)]),o("div",is,[cs,o("span",null,t(a.formDataSocio&&a.formDataSocio.importe),1)]),o("div",ms,[ds,o("span",null,t(a.formDataSocio&&a.formDataSocio.totale),1)]),o("div",_s,[fs,o("span",null,t(a.formDataSocio&&a.formDataSocio.vivienda),1)]),o("div",hs,[gs,o("span",null,t(a.formDataSocio&&a.formDataSocio.paredes),1)]),o("div",Ds,[us,o("span",null,t(a.formDataSocio&&a.formDataSocio.techos),1)]),o("div",vs,[bs,o("span",null,t(a.formDataSocio&&a.formDataSocio.pisos),1)]),o("div",Ss,[qs,o("span",null,t(a.formDataSocio&&a.formDataSocio.mobiliario),1)]),o("div",Cs,[ps,o("span",null,t(a.formDataSocio&&a.formDataSocio.servmedico),1)]),o("div",ys,[Is,o("span",null,t(a.formDataSocio&&a.formDataSocio.asistencia),1)]),o("div",Es,[As,o("span",null,t(a.formDataSocio&&a.formDataSocio.cronicas),1)]),o("div",Ns,[Qs,o("span",null,t(a.formDataSocio&&a.formDataSocio.tipo),1)]),o("div",Ts,[Bs,o("span",null,t(a.formDataSocio&&a.formDataSocio.consumo),1)]),o("div",Gs,[Ms,o("span",null,t(a.formDataSocio&&a.formDataSocio.finde),1)]),o("div",Os,[ws,o("span",null,t(a.formDataSocio&&a.formDataSocio.actividades),1)]),o("div",Rs,[Fs,o("span",null,t(a.formDataSocio&&a.formDataSocio.traslado),1)]),o("div",Js,[Vs,o("span",null,t(a.formDataSocio&&a.formDataSocio.mediotra),1)])])]),_:1}),l(L,{align:"right"},{default:_(()=>[l(V,{label:"Subir",type:"submit",color:"primary",class:"q-mb-md"})]),_:1})]),_:1})])]),_:1},8,["onSubmit","onReset"])])])]),_:1})}var st=w(z,[["render",xs],["__scopeId","data-v-2d71b6fa"]]);export{st as default};
