import{Q as m}from"./QInput.9603ce98.js";import{_ as f,j as _,k as v,u as h,r as d,aj as l,m as g,n as b,p as n,q as o,d as a,Y as y,Q as I}from"./index.467b1f04.js";import{Q as c}from"./QCardSection.d6a69534.js";import{Q as P}from"./QForm.7b778d13.js";import{api as Q}from"./axios.d91489af.js";import"./use-form.972fb87a.js";import"./use-dark.b2e99491.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-file-dom-props.b0b88407.js";import"./use-key-composition.3e77a200.js";import"./axios.7331a07d.js";const S=_({name:"IndexPage",components:{},setup(){const e=v(),t=h(),r=d(),i=d();function u(){Q.post("http://127.0.0.1:3000/api/login",{correo:r.value,contrasena:i.value}).then(s=>{s.data.msg?alert(s.data.msg):s.data.contrasenaCorrecta?(l.set("usuario",s.data),e.setUser(s.data),t.push({name:"index"})):alert("Usuario y/o Contrase\xF1a Incorrecta")}).catch(s=>{console.error(s)})}function p(){r.value="",i.value=""}return{isPwd:d(!0),correo:r,contrasena:i,userStore:e,router:t,onSubmit:u,onReset:p}},beforeMount(){l.getItem("usuario")&&(this.userStore.setUser(l.getItem("usuario")),this.router.push({name:"index"}))}}),C={class:"my-card"},V={class:"back"},w=o("p",{class:"bien"},"Bienvenido",-1),q={class:"q-pa-md"},U={class:"q-ps-xs"},k=o("p",null,"Correo",-1),B={class:"q-ps-xs"},R=o("p",null,"Contrase\xF1a",-1),$={class:""},x=o("p",{class:"texto"},"Iniciar Session",-1);function j(e,t,r,i,u,p){return g(),b(P,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md"},{default:n(()=>[o("div",C,[o("div",V,[w,a(c,null,{default:n(()=>[o("div",q,[a(c,{class:"rectanglei"},{default:n(()=>[o("div",U,[k,a(m,{class:"input",outlined:"",square:"",filled:"",modelValue:e.correo,"onUpdate:modelValue":t[0]||(t[0]=s=>e.correo=s),type:"email",dense:e.dense},null,8,["modelValue","dense"])]),o("div",B,[R,a(m,{modelValue:e.contrasena,"onUpdate:modelValue":t[2]||(t[2]=s=>e.contrasena=s),filled:"",type:e.isPwd?"password":"text"},{append:n(()=>[a(y,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=s=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),o("div",$,[a(I,{class:"buttom",type:"submit"},{default:n(()=>[x]),_:1})])]),_:1})])]),_:1})])])]),_:1},8,["onSubmit","onReset"])}var L=f(S,[["render",j]]);export{L as default};
