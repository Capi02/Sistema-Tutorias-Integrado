import{a as h,b as C,Q as y}from"./QMenu.a0461e97.js";import{Q as w,a as B,C as x}from"./ClosePopup.97d7bfb8.js";import{e as X,Q as Y,a as Z,b as $}from"./export-file.b10388b7.js";import{_ as ee,u as ae,r as t,c as M,o as D,l as oe,m as n,aq as m,q as d,d as r,p as o,F as f,ar as k,s as Q,n as v,t as _,as as b,Q as le,at as re,au as te}from"./index.a087d920.js";import{u as ne}from"./use-quasar.5151adfb.js";import{a as g}from"./axios.7331a07d.js";import"./use-dark.b66c2986.js";import"./use-prevent-scroll.cb9388ba.js";import"./focus-manager.02955f48.js";import"./uid.42677368.js";import"./QSelect.457920ea.js";import"./use-field.fd25eba3.js";import"./QChip.a53fc1c7.js";import"./use-form.5d6a531f.js";import"./use-key-composition.ec24de95.js";import"./format.3e32b8d9.js";import"./QLinearProgress.622d7e3a.js";import"./QCheckbox.0a877cfa.js";import"./use-checkbox.cc118b78.js";const N=[{name:"nombre",required:!0,label:"Nombre",align:"left",field:s=>s.nombre,format:s=>`${s}`,sortable:!0},{name:"beca",align:"center",label:"Beca",field:"beca",sortable:!0},{name:"carrera",label:"Programa Educativo",field:"carrera",sortable:!0},{name:"area",label:"\xC1rea",field:"area"},{name:"grado",label:"Nivel Educativo",field:"grado"},{name:"genero",label:"G\xE9nero",field:"genero"},{name:"idsolicitud",label:"Solicitud",field:"idsolicitud"}];function z(s,i,G){let a=i!==void 0?i(s,G):s;return a=a==null?"":String(a),a=a.split('"').join('""'),`"${a}"`}const se={name:"DetailsPage",data(){return{}},methods:{loadData(){}},components:{},setup(){const s=ae(),i=t([]),G=ne(),a=t(null),I=t([]),O=t([]),q=t([]),l=t([]),c=t([]),S=t(null),T=t(null),V=t(null),A=t(null),j=t(!1),L=t(!1),P=t(!1),F=t(!1),R=t(!1),J=M(()=>i.value.filter(e=>{const E=!a.value||e.beca===a.value,p=!S.value||e.carrera===S.value,u=!T.value||e.area===T.value,U=!V.value||e.grado===V.value,W=!A.value||e.genero===A.value;return E&&p&&u&&U&&W}));M(()=>s.currentRoute.value.params.idsolicitud),D(()=>{g.get("http://127.0.0.1:3000/api/becas/all").then(e=>{I.value=e.data}).catch(e=>{console.error("Error al obtener las becas:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/carrera").then(e=>{O.value=e.data}).catch(e=>{console.error("Error al obtener las carreras:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/area").then(e=>{q.value=e.data}).catch(e=>{console.error("Error al obtener las areas:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/grado").then(e=>{l.value=e.data}).catch(e=>{console.error("Error al obtener las grados:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/genero").then(e=>{c.value=e.data}).catch(e=>{console.error("Error al obtener las generos:",e)})}),g.get("http://127.0.0.1:3000/api/columns").then(e=>{i.value=e.data}).catch(e=>{console.error("Error al obtener los datos:",e)});function K(e,E){switch(E){case"beca":a.value=e;break;case"carrera":S.value=e;break;case"area":T.value=e;break;case"grado":V.value=e;break;case"genero":A.value=e;break}j.value=!1,L.value=!1,P.value=!1,F.value=!1,R.value=!1}return{columns:N,data:i,selectedBeca:a,filteredData:J,onItemClick:K,becas:I,carreras:O,areas:q,grados:l,generos:c,isBecaDropdownOpen:j,isCarreraDropdownOpen:L,isAreaDropdownOpen:P,isGradoDropdownOpen:F,isGeneroDropdownOpen:R,exportTable(){const e=[N.map(p=>z(p.label))].concat(i.value.map(p=>N.map(u=>z(typeof u.field=="function"?u.field(p):p[u.field===void 0?u.name:u.field],u.format,p)).join(","))).join(`\r
`);X("table-export.csv",e,"text/csv")!==!0&&G.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}}},H=s=>(re("data-v-695cddae"),s=s(),te(),s),ce=H(()=>d("p",{class:"titulo"},"Inicio",-1)),de={class:"q-pa-md-container"},ie=H(()=>d("div",{class:"botonesfilt"},[d("p",{class:""},"Botones de filtrado")],-1)),ue={class:"q-pa-md"},me={class:"q-pa-md"},fe={class:"q-pa-md"},pe={class:"q-pa-md"},ve={class:"q-pa-md"},_e={class:"q-pa-md"};function be(s,i,G,a,I,O){const q=oe("router-link");return n(),m(f,null,[ce,d("div",de,[ie,d("div",ue,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Becas","model-value":a.isBecaDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.becas,l=>Q((n(),v(y,{key:l.idbeca,clickable:"",onClick:c=>a.onItemClick(l.beca,"beca")},{default:o(()=>[r(h,null,{default:o(()=>[r(C,null,{default:o(()=>[_(b(l.beca),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",me,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Carrera","model-value":a.isCarreraDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.carreras,l=>Q((n(),v(y,{key:l.idcarrera,clickable:"",onClick:c=>a.onItemClick(l.carrera,"carrera")},{default:o(()=>[r(h,null,{default:o(()=>[r(C,null,{default:o(()=>[_(b(l.carrera),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",fe,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Area","model-value":a.isAreaDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.areas,l=>Q((n(),v(y,{key:l.idarea,clickable:"",onClick:c=>a.onItemClick(l.area,"area")},{default:o(()=>[r(h,null,{default:o(()=>[r(C,null,{default:o(()=>[_(b(l.area),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",pe,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Grado","model-value":a.isGradoDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.grados,l=>Q((n(),v(y,{key:l.idgrado,clickable:"",onClick:c=>a.onItemClick(l.grado,"grado")},{default:o(()=>[r(h,null,{default:o(()=>[r(C,null,{default:o(()=>[_(b(l.grado),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",ve,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Genero","model-value":a.isGeneroDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.generos,l=>Q((n(),v(y,{key:l.idgenero,clickable:"",onClick:c=>a.onItemClick(l.genero,"genero")},{default:o(()=>[r(h,null,{default:o(()=>[r(C,null,{default:o(()=>[_(b(l.genero),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])])]),d("div",_e,[r(Y,{flat:"",bordered:"",title:"Solicitudes",rows:a.filteredData,columns:a.columns,color:"primary","row-key":"name"},{body:o(l=>[r(Z,{props:l},{default:o(()=>[(n(!0),m(f,null,k(l.cols,c=>(n(),v($,{key:c.name,props:l},{default:o(()=>[c.name==="nombre"?(n(),v(q,{key:0,to:"/details/"+l.row.idsolicitud},{default:o(()=>[_(b(l.row[c.name]),1)]),_:2},1032,["to"])):(n(),m(f,{key:1},[_(b(l.row[c.name]),1)],64))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":o(()=>[r(le,{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":"",onClick:a.exportTable},null,8,["onClick"])]),_:1},8,["rows","columns"])])],64)}var Ne=ee(se,[["render",be],["__scopeId","data-v-695cddae"]]);export{Ne as default};
