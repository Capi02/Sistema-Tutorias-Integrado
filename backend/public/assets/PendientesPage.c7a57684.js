import{Q as h,a as C,b as y}from"./QMenu.e381fa2f.js";import{Q as w,a as B,C as x}from"./ClosePopup.2afa2955.js";import{e as X,Q as Y,a as Z,b as $}from"./export-file.52a74110.js";import{_ as ee,u as ae,r as t,c as M,o as D,l as le,m as n,aq as m,q as d,d as r,p as l,F as f,as as k,Q as oe,at as re,au as te,s as Q,n as v,t as _,ar as b}from"./index.4d9ae8b7.js";import{u as ne}from"./use-quasar.6a26505b.js";import{a as g}from"./axios.7331a07d.js";import"./use-dark.db2d3901.js";import"./use-prevent-scroll.f4872ba6.js";import"./focus-manager.02955f48.js";import"./uid.42677368.js";import"./QSelect.d90c48dd.js";import"./use-form.641640a1.js";import"./QChip.3c0858c7.js";import"./use-key-composition.03d9e8eb.js";import"./format.3e32b8d9.js";import"./QLinearProgress.ab837cd5.js";import"./use-checkbox.98c7abc1.js";const A=[{name:"nombre",required:!0,label:"Nombre",align:"left",field:s=>s.nombre,format:s=>`${s}`,sortable:!0},{name:"beca",align:"center",label:"Beca",field:"beca",sortable:!0},{name:"carrera",label:"Programa Educativo",field:"carrera",sortable:!0},{name:"area",label:"\xC1rea",field:"area"},{name:"grado",label:"Nivel Educativo",field:"grado"},{name:"genero",label:"G\xE9nero",field:"genero"},{name:"idsolicitud",label:"Solicitud",field:"idsolicitud"}];function z(s,i,q){let a=i!==void 0?i(s,q):s;return a=a==null?"":String(a),a=a.split('"').join('""'),`"${a}"`}const se={name:"DetailsPage",data(){return{}},methods:{loadData(){}},components:{},setup(){const s=ae(),i=t([]),q=ne(),a=t(null),O=t([]),I=t([]),E=t([]),o=t([]),c=t([]),P=t(null),S=t(null),N=t(null),T=t(null),V=t(!1),j=t(!1),L=t(!1),F=t(!1),R=t(!1),J=M(()=>i.value.filter(e=>{const G=!a.value||e.beca===a.value,p=!P.value||e.carrera===P.value,u=!S.value||e.area===S.value,U=!N.value||e.grado===N.value,W=!T.value||e.genero===T.value;return G&&p&&u&&U&&W}));M(()=>s.currentRoute.value.params.idsolicitud),D(()=>{g.get("http://127.0.0.1:3000/api/becas/all").then(e=>{O.value=e.data}).catch(e=>{console.error("Error al obtener las becas:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/carrera").then(e=>{I.value=e.data}).catch(e=>{console.error("Error al obtener las carreras:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/area").then(e=>{E.value=e.data}).catch(e=>{console.error("Error al obtener las areas:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/grado").then(e=>{o.value=e.data}).catch(e=>{console.error("Error al obtener las grados:",e)})}),D(()=>{g.get("http://127.0.0.1:3000/api/genero").then(e=>{c.value=e.data}).catch(e=>{console.error("Error al obtener las generos:",e)})}),g.get("http://127.0.0.1:3000/api/columns/pendientes").then(e=>{i.value=e.data}).catch(e=>{console.error("Error al obtener los datos:",e)});function K(e,G){switch(G){case"beca":a.value=e;break;case"carrera":P.value=e;break;case"area":S.value=e;break;case"grado":N.value=e;break;case"genero":T.value=e;break}V.value=!1,j.value=!1,L.value=!1,F.value=!1,R.value=!1}return{columns:A,data:i,selectedBeca:a,filteredData:J,onItemClick:K,becas:O,carreras:I,areas:E,grados:o,generos:c,isBecaDropdownOpen:V,isCarreraDropdownOpen:j,isAreaDropdownOpen:L,isGradoDropdownOpen:F,isGeneroDropdownOpen:R,exportTable(){const e=[A.map(p=>z(p.label))].concat(i.value.map(p=>A.map(u=>z(typeof u.field=="function"?u.field(p):p[u.field===void 0?u.name:u.field],u.format,p)).join(","))).join(`\r
`);X("table-export.csv",e,"text/csv")!==!0&&q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}}},H=s=>(re("data-v-5b9466e4"),s=s(),te(),s),ce=H(()=>d("p",{class:"titulo"},"Becas Pendientes",-1)),de={class:"q-pa-md-container"},ie=H(()=>d("div",{class:"botonesfilt"},[d("p",{class:""},"Botones de filtrado")],-1)),ue={class:"q-pa-md"},me={class:"q-pa-md"},fe={class:"q-pa-md"},pe={class:"q-pa-md"},ve={class:"q-pa-md"},_e={class:"q-pa-md"};function be(s,i,q,a,O,I){const E=le("router-link");return n(),m(f,null,[ce,d("div",de,[ie,d("div",ue,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Becas","model-value":a.isBecaDropdownOpen},{default:l(()=>[r(B,null,{default:l(()=>[(n(!0),m(f,null,k(a.becas,o=>Q((n(),v(h,{key:o.idbeca,clickable:"",onClick:c=>a.onItemClick(o.beca,"beca")},{default:l(()=>[r(C,null,{default:l(()=>[r(y,null,{default:l(()=>[_(b(o.beca),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",me,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Carrera","model-value":a.isCarreraDropdownOpen},{default:l(()=>[r(B,null,{default:l(()=>[(n(!0),m(f,null,k(a.carreras,o=>Q((n(),v(h,{key:o.idcarrera,clickable:"",onClick:c=>a.onItemClick(o.carrera,"carrera")},{default:l(()=>[r(C,null,{default:l(()=>[r(y,null,{default:l(()=>[_(b(o.carrera),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",fe,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Area","model-value":a.isAreaDropdownOpen},{default:l(()=>[r(B,null,{default:l(()=>[(n(!0),m(f,null,k(a.areas,o=>Q((n(),v(h,{key:o.idarea,clickable:"",onClick:c=>a.onItemClick(o.area,"area")},{default:l(()=>[r(C,null,{default:l(()=>[r(y,null,{default:l(()=>[_(b(o.area),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",pe,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Nivel","model-value":a.isGradoDropdownOpen},{default:l(()=>[r(B,null,{default:l(()=>[(n(!0),m(f,null,k(a.grados,o=>Q((n(),v(h,{key:o.idgrado,clickable:"",onClick:c=>a.onItemClick(o.grado,"grado")},{default:l(()=>[r(C,null,{default:l(()=>[r(y,null,{default:l(()=>[_(b(o.grado),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])]),d("div",ve,[r(w,{color:"secondary",class:"buttoms","text-color":"black",label:"Genero","model-value":a.isGeneroDropdownOpen},{default:l(()=>[r(B,null,{default:l(()=>[(n(!0),m(f,null,k(a.generos,o=>Q((n(),v(h,{key:o.idgenero,clickable:"",onClick:c=>a.onItemClick(o.genero,"genero")},{default:l(()=>[r(C,null,{default:l(()=>[r(y,null,{default:l(()=>[_(b(o.genero),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1},8,["model-value"])])]),d("div",_e,[r(Y,{flat:"",bordered:"",title:"Solicitudes pendientes",rows:a.filteredData,columns:a.columns,color:"primary","row-key":"name"},{body:l(o=>[r(Z,{props:o},{default:l(()=>[(n(!0),m(f,null,k(o.cols,c=>(n(),v($,{key:c.name,props:o},{default:l(()=>[c.name==="nombre"?(n(),v(E,{key:0,to:"/details/"+o.row.idsolicitud},{default:l(()=>[_(b(o.row[c.name]),1)]),_:2},1032,["to"])):(n(),m(f,{key:1},[_(b(o.row[c.name]),1)],64))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":l(()=>[r(oe,{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":"",onClick:a.exportTable},null,8,["onClick"])]),_:1},8,["rows","columns"])])],64)}var Ne=ee(se,[["render",be],["__scopeId","data-v-5b9466e4"]]);export{Ne as default};
