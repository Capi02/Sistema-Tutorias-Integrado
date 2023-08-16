import{Q as f}from"./QImg.511b803b.js";import{Q as p}from"./QCardSection.e52e323e.js";import{Q as u}from"./QSelect.d90c48dd.js";import{_ as U,r as e,o as P,m as s,n as m,p as r,q as c,d as o,ar as D,Q as y,aJ as g}from"./index.4d9ae8b7.js";import{Q as v}from"./QCardActions.1bd126aa.js";import{Q as x}from"./QCard.53c235ed.js";import{Q as S}from"./QForm.a065764b.js";import{a as n}from"./axios.7331a07d.js";/* empty css                                                      */import"./use-form.641640a1.js";import"./use-dark.db2d3901.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./QChip.3c0858c7.js";import"./QMenu.e381fa2f.js";import"./use-prevent-scroll.f4872ba6.js";import"./use-key-composition.03d9e8eb.js";import"./format.3e32b8d9.js";const I={props:{idbeca:{type:String,required:!0}},setup(Q){const i=e([]),V=e(null),a=e(null),E=e(null),q=e(null),t=e(null),k=e(null),C=e(null),_=e(null),h=e(null),A=e(null),j=["S\xED","No"],b=(l,z)=>{n.get(`http://127.0.0.1:3000/api/becas/${l}`).then(R=>{z.value={...R.data}}).catch(R=>{console.error("Error al obtener las becas:",R)})},O=async()=>{try{await Promise.all([d(V),d(a),d(E),d(q),d(t),d(k),d(C),d(h),d(_),d(A)]),console.log("Disponibilidad actualizada exitosamente")}catch(l){console.error("Error al actualizar la disponibilidad:",l)}},d=async l=>{try{const z=await n.put(`http://127.0.0.1:3000/api/becasdis/${l.idbeca}`,{disponible:l.disponible});console.log(z.data.mensaje)}catch(z){console.error("Error al actualizar la disponibilidad:",z)}};return b(1,V),b(2,a),b(3,E),b(4,q),b(5,t),b(6,k),b(7,C),b(8,h),b(9,_),b(10,A),P(()=>{n.get("http://127.0.0.1:3000/api/becas/1").then(l=>{V.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/2").then(l=>{a.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/3").then(l=>{E.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/4").then(l=>{q.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/5").then(l=>{t.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/6").then(l=>{k.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/7").then(l=>{C.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/8").then(l=>{_.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/9").then(l=>{h.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)}),n.get("http://127.0.0.1:3000/api/becas/10").then(l=>{A.value=l.data}).catch(l=>{console.error("Error al obtener las becas:",l)})}),{expanded:e(!1),formDataAca:V,formDataCul:a,formDataDep:E,formDataEco:q,formDataExc:t,formDataInc:k,formDataPos:C,formDataRef:_,formDataRei:h,formDataTra:A,formDataArray:i,onSubmit:O,disponibilidadOptions:j,actualizarDisponibilidad:d}}},T={class:"q-pa-md row items-start q-gutter-md"},B={class:"text-h5 q-mt-sm q-mb-xs"},w={class:"text-h5 q-mt-sm q-mb-xs"},N={class:"text-h5 q-mt-sm q-mb-xs"},F={class:"text-h5 q-mt-sm q-mb-xs"},H={class:"text-h5 q-mt-sm q-mb-xs"},J={class:"text-h5 q-mt-sm q-mb-xs"},M={class:"text-h5 q-mt-sm q-mb-xs"},G={class:"text-h5 q-mt-sm q-mb-xs"},K={class:"text-h5 q-mt-sm q-mb-xs"},L={class:"text-h5 q-mt-sm q-mb-xs"};function W(Q,i,V,a,E,q){return s(),m(S,{onSubmit:a.onSubmit,onReset:Q.onReset},{default:r(()=>[c("div",T,[a.formDataAca?(s(),m(x,{key:0,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/academic.jpg"}),o(p,null,{default:r(()=>[c("div",B,D(a.formDataAca.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataAca.disponible,"onUpdate:modelValue":i[0]||(i[0]=t=>a.formDataAca.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[1]||(i[1]=t=>a.actualizarDisponibilidad(a.formDataAca))})]),_:1})]),_:1})):g("",!0),a.formDataCul?(s(),m(x,{key:1,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/cultural.jpg"}),o(p,null,{default:r(()=>[c("div",w,D(a.formDataCul&&a.formDataCul.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataCul.disponible,"onUpdate:modelValue":i[2]||(i[2]=t=>a.formDataCul.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[3]||(i[3]=t=>a.actualizarDisponibilidad(a.formDataCul))})]),_:1})]),_:1})):g("",!0),a.formDataDep?(s(),m(x,{key:2,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/deportiva.jpg"}),o(p,null,{default:r(()=>[c("div",N,D(a.formDataDep&&a.formDataDep.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataDep.disponible,"onUpdate:modelValue":i[4]||(i[4]=t=>a.formDataDep.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[5]||(i[5]=t=>a.actualizarDisponibilidad(a.formDataDep))})]),_:1})]),_:1})):g("",!0),a.formDataEco?(s(),m(x,{key:3,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/economica.jpg"}),o(p,null,{default:r(()=>[c("div",F,D(a.formDataEco&&a.formDataEco.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataEco.disponible,"onUpdate:modelValue":i[6]||(i[6]=t=>a.formDataEco.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[7]||(i[7]=t=>a.actualizarDisponibilidad(a.formDataEco))})]),_:1})]),_:1})):g("",!0),a.formDataExc?(s(),m(x,{key:4,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/excelenciaa.jpg"}),o(p,null,{default:r(()=>[c("div",H,D(a.formDataExc&&a.formDataExc.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataExc.disponible,"onUpdate:modelValue":i[8]||(i[8]=t=>a.formDataExc.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[9]||(i[9]=t=>a.actualizarDisponibilidad(a.formDataExc))})]),_:1})]),_:1})):g("",!0),a.formDataInc?(s(),m(x,{key:5,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/inclusion.jpg"}),o(p,null,{default:r(()=>[c("div",J,D(a.formDataInc&&a.formDataInc.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataInc.disponible,"onUpdate:modelValue":i[10]||(i[10]=t=>a.formDataInc.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[11]||(i[11]=t=>a.actualizarDisponibilidad(a.formDataInc))})]),_:1})]),_:1})):g("",!0),a.formDataPos?(s(),m(x,{key:6,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/postgrado.jpg"}),o(p,null,{default:r(()=>[c("div",M,D(a.formDataPos&&a.formDataPos.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataPos.disponible,"onUpdate:modelValue":i[12]||(i[12]=t=>a.formDataPos.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[13]||(i[13]=t=>a.actualizarDisponibilidad(a.formDataPos))})]),_:1})]),_:1})):g("",!0),a.formDataRef?(s(),m(x,{key:7,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/referencia.jpg"}),o(p,null,{default:r(()=>[c("div",G,D(a.formDataRef&&a.formDataRef.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataRef.disponible,"onUpdate:modelValue":i[14]||(i[14]=t=>a.formDataRef.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[15]||(i[15]=t=>a.actualizarDisponibilidad(a.formDataRef))})]),_:1})]),_:1})):g("",!0),a.formDataRei?(s(),m(x,{key:8,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/reincorporacion.jpg"}),o(p,null,{default:r(()=>[c("div",K,D(a.formDataRei&&a.formDataRei.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataRei.disponible,"onUpdate:modelValue":i[16]||(i[16]=t=>a.formDataRei.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[17]||(i[17]=t=>a.actualizarDisponibilidad(a.formDataRei))})]),_:1})]),_:1})):g("",!0),a.formDataTra?(s(),m(x,{key:9,class:"my-card",flat:"",bordered:""},{default:r(()=>[o(f,{src:"public/img/transporte.jpg"}),o(p,null,{default:r(()=>[c("div",L,D(a.formDataTra&&a.formDataTra.beca),1)]),_:1}),o(v,null,{default:r(()=>[o(u,{modelValue:a.formDataTra.disponible,"onUpdate:modelValue":i[18]||(i[18]=t=>a.formDataTra.disponible=t),label:"Disponible",options:a.disponibilidadOptions},null,8,["modelValue","options"]),o(y,{label:"Actualizar",type:"submit",color:"primary",onClick:i[19]||(i[19]=t=>a.actualizarDisponibilidad(a.formDataTra))})]),_:1})]),_:1})):g("",!0)])]),_:1},8,["onSubmit","onReset"])}var pa=U(I,[["render",W]]);export{pa as default};