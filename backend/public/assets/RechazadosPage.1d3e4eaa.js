import{Q as g,a as C,b as y}from"./QMenu.cc6fd88d.js";import{Q as w,a as B,C as x}from"./ClosePopup.6a43dc5b.js";import{e as X,Q as Y,a as Z,b as $}from"./export-file.aa10660d.js";import{_ as ee,u as ae,r as t,c as F,o as D,l as oe,m as n,aq as m,q as d,d as r,p as o,F as f,as as k,Q as le,at as re,au as te,s as Q,n as v,t as _,ar as b}from"./index.0a4cc95d.js";import{u as ne}from"./use-quasar.9c505f7f.js";import{a as h}from"./axios.7331a07d.js";import"./use-dark.73e1a64d.js";import"./use-prevent-scroll.36779d27.js";import"./focus-manager.02955f48.js";import"./uid.42677368.js";import"./QSelect.bbd29f10.js";import"./use-key-composition.d5947e72.js";import"./QChip.e9cf1f0c.js";import"./format.3e32b8d9.js";import"./QLinearProgress.2e1dc632.js";import"./use-checkbox.3c6e425b.js";const A=[{name:"nombre",required:!0,label:"Nombre",align:"left",field:s=>s.nombre,format:s=>`${s}`,sortable:!0},{name:"beca",align:"center",label:"Beca",field:"beca",sortable:!0},{name:"carrera",label:"Programa Educativo",field:"carrera",sortable:!0},{name:"area",label:"\xC1rea",field:"area"},{name:"grado",label:"Nivel Educativo",field:"grado"},{name:"genero",label:"G\xE9nero",field:"genero"},{name:"idsolicitud",label:"Solicitud",field:"idsolicitud"}];function M(s,i,q){let a=i!==void 0?i(s,q):s;return a=a==null?"":String(a),a=a.split('"').join('""'),`"${a}"`}const se={name:"DetailsPage",data(){return{}},methods:{loadData(){}},components:{},setup(){const s=ae(),i=t([]),q=ne(),a=t(null),O=t([]),I=t([]),E=t([]),l=t([]),c=t([]),S=t(null),N=t(null),T=t(null),z=t(null),P=t(!1),R=t(!1),V=t(!1),j=t(!1),L=t(!1),J=F(()=>i.value.filter(e=>{const G=!a.value||e.beca===a.value,p=!S.value||e.carrera===S.value,u=!N.value||e.area===N.value,U=!T.value||e.grado===T.value,W=!z.value||e.genero===z.value;return G&&p&&u&&U&&W}));F(()=>s.currentRoute.value.params.idsolicitud),D(()=>{h.get("http://127.0.0.1:3000/api/becas/all").then(e=>{O.value=e.data}).catch(e=>{console.error("Error al obtener las becas:",e)})}),D(()=>{h.get("http://127.0.0.1:3000/api/carrera").then(e=>{I.value=e.data}).catch(e=>{console.error("Error al obtener las carreras:",e)})}),D(()=>{h.get("http://127.0.0.1:3000/api/area").then(e=>{E.value=e.data}).catch(e=>{console.error("Error al obtener las areas:",e)})}),D(()=>{h.get("http://127.0.0.1:3000/api/grado").then(e=>{l.value=e.data}).catch(e=>{console.error("Error al obtener las grados:",e)})}),D(()=>{h.get("http://127.0.0.1:3000/api/genero").then(e=>{c.value=e.data}).catch(e=>{console.error("Error al obtener las generos:",e)})}),h.get("http://127.0.0.1:3000/api/columns/rechazada").then(e=>{i.value=e.data}).catch(e=>{console.error("Error al obtener los datos:",e)});function K(e,G){switch(G){case"beca":a.value=e;break;case"carrera":S.value=e;break;case"area":N.value=e;break;case"grado":T.value=e;break;case"genero":z.value=e;break}P.value=!1,R.value=!1,V.value=!1,j.value=!1,L.value=!1}return{columns:A,data:i,selectedBeca:a,filteredData:J,onItemClick:K,becas:O,carreras:I,areas:E,grados:l,generos:c,isBecaDropdownOpen:P,isCarreraDropdownOpen:R,isAreaDropdownOpen:V,isGradoDropdownOpen:j,isGeneroDropdownOpen:L,exportTable(){const e=[A.map(p=>M(p.label))].concat(i.value.map(p=>A.map(u=>M(typeof u.field=="function"?u.field(p):p[u.field===void 0?u.name:u.field],u.format,p)).join(","))).join(`\r
`);X("table-export.csv",e,"text/csv")!==!0&&q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}}},H=s=>(re("data-v-8f4c05f2"),s=s(),te(),s),ce=H(()=>d("p",{class:"titulo"},"Becas rechazadas",-1)),de={class:"q-pa-md-container"},ie=H(()=>d("div",{class:"botonesfilt"},[d("p",{class:""},"Botones de filtrado")],-1)),ue={class:"q-pa-md"},me={class:"q-pa-md"},fe={class:"q-pa-md"},pe={class:"q-pa-md"},ve={class:"q-pa-md"},_e={class:"q-pa-md"};function be(s,i,q,a,O,I){const E=oe("router-link");return n(),m(f,null,[ce,d("div",de,[ie,d("div",ue,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Becas","model-value":a.isBecaDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.becas,l=>Q((n(),v(g,{key:l.idbeca,clickable:"",onClick:c=>a.onItemClick(l.beca,"beca")},{default:o(()=>[r(C,null,{default:o(()=>[r(y,null,{default:o(()=>[_(b(l.beca),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",me,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Carrera","model-value":a.isCarreraDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.carreras,l=>Q((n(),v(g,{key:l.idcarrera,clickable:"",onClick:c=>a.onItemClick(l.carrera,"carrera")},{default:o(()=>[r(C,null,{default:o(()=>[r(y,null,{default:o(()=>[_(b(l.carrera),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",fe,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Area","model-value":a.isAreaDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.areas,l=>Q((n(),v(g,{key:l.idarea,clickable:"",onClick:c=>a.onItemClick(l.area,"area")},{default:o(()=>[r(C,null,{default:o(()=>[r(y,null,{default:o(()=>[_(b(l.area),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",pe,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Nivel","model-value":a.isGradoDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.grados,l=>Q((n(),v(g,{key:l.idgrado,clickable:"",onClick:c=>a.onItemClick(l.grado,"grado")},{default:o(()=>[r(C,null,{default:o(()=>[r(y,null,{default:o(()=>[_(b(l.grado),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",ve,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Genero","model-value":a.isGeneroDropdownOpen},{default:o(()=>[r(B,null,{default:o(()=>[(n(!0),m(f,null,k(a.generos,l=>Q((n(),v(g,{key:l.idgenero,clickable:"",onClick:c=>a.onItemClick(l.genero,"genero")},{default:o(()=>[r(C,null,{default:o(()=>[r(y,null,{default:o(()=>[_(b(l.genero),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])])]),d("div",_e,[r(Y,{flat:"",bordered:"",title:"Solicitudes rechazadas",rows:a.filteredData,columns:a.columns,color:"primary","row-key":"name"},{body:o(l=>[r(Z,{props:l},{default:o(()=>[(n(!0),m(f,null,k(l.cols,c=>(n(),v($,{key:c.name,props:l},{default:o(()=>[c.name==="nombre"?(n(),v(E,{key:0,to:"/details/"+l.row.idsolicitud},{default:o(()=>[_(b(l.row[c.name]),1)]),_:2},1032,["to"])):(n(),m(f,{key:1},[_(b(l.row[c.name]),1)],64))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":o(()=>[r(le,{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":"",onClick:a.exportTable},null,8,["onClick"])]),_:1},8,["rows","columns"])])],64)}var Ne=ee(se,[["render",be],["__scopeId","data-v-8f4c05f2"]]);export{Ne as default};
