import{Q as K}from"./QChip.a53fc1c7.js";import{u as M,a as X,b as Y,c as G,f as B}from"./use-field.fd25eba3.js";import{u as H,a as J}from"./use-form.5d6a531f.js";import{r as E,c as f,g as L,$ as Z,B as R,S as ee,h as F,v as te,L as ne,D as le,_ as ae,m as ie,aq as re,d as ue}from"./index.a087d920.js";import{u as se}from"./use-file-dom-props.d4990a04.js";import{h as oe}from"./format.3e32b8d9.js";import{Q as ce}from"./QLinearProgress.622d7e3a.js";function x(e,o,b,g){const r=[];return e.forEach(s=>{g(s)===!0?r.push(s):o.push({failedPropValidation:b,file:s})}),r}function D(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),R(e)}const fe={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},de=["rejected"];function me({editable:e,dnd:o,getFileInput:b,addFilesToQueue:g}){const{props:r,emit:s,proxy:h}=L(),y=E(null),C=f(()=>r.accept!==void 0?r.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),z=f(()=>parseInt(r.maxFiles,10)),V=f(()=>parseInt(r.maxTotalSize,10));function N(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&Z(t);else{const m=b();m&&m!==t.target&&m.click(t)}}function P(t){e.value&&t&&g(null,t)}function A(t,m,S,_){let l=Array.from(m||t.target.files);const d=[],p=()=>{d.length!==0&&s("rejected",d)};if(r.accept!==void 0&&C.value.indexOf("*/")===-1&&(l=x(l,d,"accept",a=>C.value.some(u=>a.type.toUpperCase().startsWith(u)||a.name.toUpperCase().endsWith(u))),l.length===0))return p();if(r.maxFileSize!==void 0){const a=parseInt(r.maxFileSize,10);if(l=x(l,d,"max-file-size",u=>u.size<=a),l.length===0)return p()}if(r.multiple!==!0&&l.length!==0&&(l=[l[0]]),l.forEach(a=>{a.__key=a.webkitRelativePath+a.lastModified+a.name+a.size}),_===!0){const a=S.map(u=>u.__key);l=x(l,d,"duplicate",u=>a.includes(u.__key)===!1)}if(l.length===0)return p();if(r.maxTotalSize!==void 0){let a=_===!0?S.reduce((u,I)=>u+I.size,0):0;if(l=x(l,d,"max-total-size",u=>(a+=u.size,a<=V.value)),l.length===0)return p()}if(typeof r.filter=="function"){const a=r.filter(l);l=x(l,d,"filter",u=>a.includes(u))}if(r.maxFiles!==void 0){let a=_===!0?S.length:0;if(l=x(l,d,"max-files",()=>(a++,a<=z.value)),l.length===0)return p()}if(p(),l.length!==0)return l}function T(t){D(t),o.value!==!0&&(o.value=!0)}function i(t){R(t),(t.relatedTarget!==null||ee.is.safari!==!0?t.relatedTarget!==y.value:document.elementsFromPoint(t.clientX,t.clientY).includes(y.value)===!1)===!0&&(o.value=!1)}function j(t){D(t);const m=t.dataTransfer.files;m.length!==0&&g(null,m),o.value=!1}function q(t){if(o.value===!0)return F("div",{ref:y,class:`q-${t}__dnd absolute-full`,onDragenter:D,onDragover:D,onDragleave:i,onDrop:j})}return Object.assign(h,{pickFiles:N,addFiles:P}),{pickFiles:N,addFiles:P,onDragover:T,onDragleave:i,processFiles:A,getDndNode:q,maxFilesNumber:z,maxTotalSizeNumber:V}}var Ce=te({name:"QFile",inheritAttrs:!1,props:{...M,...H,...fe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...X,...de],setup(e,{slots:o,emit:b,attrs:g}){const{proxy:r}=L(),s=Y(),h=E(null),y=E(!1),C=J(e),{pickFiles:z,onDragover:V,onDragleave:N,processFiles:P,getDndNode:A}=me({editable:s.editable,dnd:y,getFileInput:$,addFilesToQueue:Q}),T=se(e),i=f(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),j=f(()=>B(i.value)),q=f(()=>i.value.map(n=>n.name).join(", ")),t=f(()=>oe(i.value.reduce((n,c)=>n+c.size,0))),m=f(()=>({totalSize:t.value,filesNumber:i.value.length,maxFiles:e.maxFiles})),S=f(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:C.value,...g,id:s.targetUid.value,disabled:s.editable.value!==!0})),_=f(()=>"q-file q-field--auto-height"+(y.value===!0?" q-file--dnd":"")),l=f(()=>e.multiple===!0&&e.append===!0);function d(n){const c=i.value.slice();c.splice(n,1),a(c)}function p(n){const c=i.value.indexOf(n);c>-1&&d(c)}function a(n){b("update:modelValue",e.multiple===!0?n:n[0])}function u(n){n.keyCode===13&&le(n)}function I(n){(n.keyCode===13||n.keyCode===32)&&z(n)}function $(){return h.value}function Q(n,c){const v=P(n,c,i.value,l.value),O=$();O!=null&&(O.value=""),v!==void 0&&((e.multiple===!0?e.modelValue&&v.every(W=>i.value.includes(W)):e.modelValue===v[0])||a(l.value===!0?i.value.concat(v):v))}function k(){return[F("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function U(){if(o.file!==void 0)return i.value.length===0?k():i.value.map((c,v)=>o.file({index:v,file:c,ref:this}));if(o.selected!==void 0)return i.value.length===0?k():o.selected({files:i.value,ref:this});if(e.useChips===!0)return i.value.length===0?k():i.value.map((c,v)=>F(K,{key:"file-"+v,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{d(v)}},()=>F("span",{class:"ellipsis",textContent:c.name})));const n=e.displayValue!==void 0?e.displayValue:q.value;return n.length!==0?[F("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:k()}function w(){const n={ref:h,...S.value,...T.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Q};return e.multiple===!0&&(n.multiple=!0),F("input",n)}return Object.assign(s,{fieldClass:_,emitValue:a,hasValue:j,inputRef:h,innerValue:i,floatingLabel:f(()=>j.value===!0||B(e.displayValue)),computedCounter:f(()=>{if(e.counterLabel!==void 0)return e.counterLabel(m.value);const n=e.maxFiles;return`${i.value.length}${n!==void 0?" / "+n:""} (${t.value})`}),getControlChild:()=>A("file"),getControl:()=>{const n={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(n,{onDragover:V,onDragleave:N,onKeydown:u,onKeyup:I}),F("div",n,[w()].concat(U()))}}),Object.assign(r,{removeAtIndex:d,removeFile:p,getNativeElement:()=>h.value}),ne(r,"nativeEl",()=>h.value),G(s)}});const ve={setup(){return{progress:.7}}},ge={class:"q-pa-md"};function pe(e,o,b,g,r,s){return ie(),re("div",ge,[ue(ce,{rounded:"",size:"20px",value:g.progress,color:"primary",class:"q-mt-sm"},null,8,["value"])])}var ze=ae(ve,[["render",pe]]);export{Ce as Q,ze as T};
