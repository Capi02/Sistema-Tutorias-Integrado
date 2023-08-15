import{v as R,c as x,h as P,x as X,y as $e,z as _e,r as E,A as Y,B as ge,C as Ae,g as K,D as ae,E as be,G as ue,w as W,o as Fe,H as z,I as De,J as V,K as F,a as Qe,L as Re,M as Ke,N as ze,O as Ie,P as Oe,R as je,S as J,U as Ne,V as Ge,W as Ve}from"./index.a087d920.js";import{u as xe,a as ye}from"./use-dark.b66c2986.js";import{c as Ue,g as Xe,u as Ye,a as Je,b as Ze,d as et,e as tt}from"./use-prevent-scroll.cb9388ba.js";import{r as se,a as nt,b as lt}from"./focus-manager.02955f48.js";var St=R({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=x(()=>parseInt(e.lines,10)),l=x(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=x(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>P("div",{style:i.value,class:l.value},X(t.default))}}),Pt=R({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=x(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>P("div",{class:n.value},X(t.default))}}),Ht=R({name:"QItem",props:{...xe,...$e,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=K(),i=ye(e,l),{hasLink:s,linkAttrs:o,linkClass:v,linkTag:h,navigateOnClick:r}=_e(),c=E(null),m=E(null),g=x(()=>e.clickable===!0||s.value===!0||e.tag==="label"),a=x(()=>e.disable!==!0&&g.value===!0),f=x(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),H=x(()=>{if(e.insetLevel===void 0)return null;const d=l.lang.rtl===!0?"Right":"Left";return{["padding"+d]:16+e.insetLevel*56+"px"}});function C(d){a.value===!0&&(m.value!==null&&(d.qKeyEvent!==!0&&document.activeElement===c.value?m.value.focus():document.activeElement===m.value&&c.value.focus()),r(d))}function L(d){if(a.value===!0&&Y(d,13)===!0){ge(d),d.qKeyEvent=!0;const y=new MouseEvent("click",d);y.qKeyEvent=!0,c.value.dispatchEvent(y)}n("keyup",d)}function _(){const d=Ae(t.default,[]);return a.value===!0&&d.unshift(P("div",{class:"q-focus-helper",tabindex:-1,ref:m})),d}return()=>{const d={ref:c,class:f.value,style:H.value,role:"listitem",onClick:C,onKeyup:L};return a.value===!0?(d.tabindex=e.tabindex||"0",Object.assign(d,o.value)):g.value===!0&&(d["aria-disabled"]="true"),P(h.value,d,_())}}});const it={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function ot({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:i,emit:s}=K(),o=E(null);let v=null;function h(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};n===void 0&&(Object.assign(r,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Y(a,13)===!0&&r.toggle(a)},contextClick(a){i.hide(a),ae(a),be(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:ae,mobileTouch(a){if(r.mobileCleanup(a),h(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const f=a.target;ue(r,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),v=setTimeout(()=>{v=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),v!==null&&(clearTimeout(v),v=null),e.value===!0&&a!==void 0&&Ue()}}),n=function(a=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let f;a===!0?i.$q.platform.is.mobile===!0?f=[[o.value,"touchstart","mobileTouch","passive"]]:f=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:f=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],ue(r,"anchor",f)});function c(){De(r,"anchor")}function m(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function g(){if(l.target===!1||l.target===""||i.$el.parentNode===null)o.value=null;else if(l.target===!0)m(i.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return W(()=>l.contextMenu,a=>{o.value!==null&&(c(),n(a))}),W(()=>l.target,()=>{o.value!==null&&c(),g()}),W(()=>l.noParentEvent,a=>{o.value!==null&&(a===!0?c():n())}),Fe(()=>{g(),t!==!0&&l.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),z(()=>{v!==null&&clearTimeout(v),c()}),{anchorEl:o,canShow:h,anchorEvents:r}}function at(e,t){const n=E(null);let l;function i(v,h){const r=`${h!==void 0?"add":"remove"}EventListener`,c=h!==void 0?h:l;v!==window&&v[r]("scroll",c,V.passive),window[r]("scroll",c,V.passive),l=h}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=W(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return z(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const B=[];function Lt(e){return B.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ke(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return F(e)}else if(e.__qPortal===!0){const n=F(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=F(e)}while(e!=null)}function Mt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=ke(e,t);continue}e.hide(t)}e=F(e)}}function ut(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function st(e,t,n,l){const i=E(!1),s=E(!1);let o=null;const v={},h=l==="dialog"&&ut(e);function r(m){if(m===!0){se(v),s.value=!0;return}s.value=!1,i.value===!1&&(h===!1&&o===null&&(o=ze(!1,l)),i.value=!0,B.push(e.proxy),nt(v))}function c(m){if(s.value=!1,m!==!0)return;se(v),i.value=!1;const g=B.indexOf(e.proxy);g!==-1&&B.splice(g,1),o!==null&&(Ie(o),o=null)}return Qe(()=>{c(!0)}),e.proxy.__qPortal=!0,Re(e.proxy,"contentEl",()=>t.value),{showPortal:r,hidePortal:c,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>h===!0?n():i.value===!0?[P(Ke,{to:o},n())]:void 0}}const rt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ct(e,t=()=>{},n=()=>{}){return{transitionProps:x(()=>{const l=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:x(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function dt(){let e;const t=K();function n(){e=void 0}return Oe(n),z(n),{removeTick:n,registerTick(l){e=l,be(()=>{e===l&&(je(t)===!1&&e(),e=void 0)})}}}const p=[];let $;function ft(e){$=e.keyCode===27}function vt(){$===!0&&($=!1)}function ht(e){$===!0&&($=!1,Y(e,27)===!0&&p[p.length-1](e))}function we(e){window[e]("keydown",ft),window[e]("blur",vt),window[e]("keyup",ht),$=!1}function mt(e){J.is.desktop===!0&&(p.push(e),p.length===1&&we("addEventListener"))}function re(e){const t=p.indexOf(e);t>-1&&(p.splice(t,1),p.length===0&&we("removeEventListener"))}const T=[];function qe(e){T[T.length-1](e)}function gt(e){J.is.desktop===!0&&(T.push(e),T.length===1&&document.body.addEventListener("focusin",qe))}function bt(e){const t=T.indexOf(e);t>-1&&(T.splice(t,1),T.length===0&&document.body.removeEventListener("focusin",qe))}const{notPassiveCapture:D}=V,S=[];function Q(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=B.length-1;for(;n>=0;){const l=B[n].$;if(l.type.name==="QTooltip"){n--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=S.length-1;l>=0;l--){const i=S[l];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function xt(e){S.push(e),S.length===1&&(document.addEventListener("mousedown",Q,D),document.addEventListener("touchstart",Q,D))}function ce(e){const t=S.findIndex(n=>n===e);t>-1&&(S.splice(t,1),S.length===0&&(document.removeEventListener("mousedown",Q,D),document.removeEventListener("touchstart",Q,D)))}let de,fe;function ve(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function yt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const U={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{U[`${e}#ltr`]=e,U[`${e}#rtl`]=e});function he(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:U[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function kt(e,t){let{top:n,left:l,right:i,bottom:s,width:o,height:v}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],s+=t[1],i+=t[0],o+=t[0],v+=t[1]),{top:n,bottom:s,height:v,left:l,right:i,width:o,middle:l+(i-l)/2,center:n+(s-n)/2}}function wt(e,t,n){let{top:l,left:i}=e.getBoundingClientRect();return l+=t.top,i+=t.left,n!==void 0&&(l+=n[1],i+=n[0]),{top:l,bottom:l+1,height:1,left:i,right:i+1,width:1,middle:i,center:l}}function qt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function me(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function Ee(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ee(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:v,fit:h,cover:r,maxHeight:c,maxWidth:m}=e;if(J.is.ios===!0&&window.visualViewport!==void 0){const M=document.body.style,{offsetLeft:k,offsetTop:w}=window.visualViewport;k!==de&&(M.setProperty("--q-pe-left",k+"px"),de=k),w!==fe&&(M.setProperty("--q-pe-top",w+"px"),fe=w)}const{scrollLeft:g,scrollTop:a}=n,f=v===void 0?kt(i,r===!0?[0,0]:l):wt(i,v,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:m||"100vw",maxHeight:c||"100vh",visibility:"visible"});const{offsetWidth:H,offsetHeight:C}=n,{elWidth:L,elHeight:_}=h===!0||r===!0?{elWidth:Math.max(f.width,H),elHeight:r===!0?Math.max(f.height,C):C}:{elWidth:H,elHeight:C};let d={maxWidth:m,maxHeight:c};(h===!0||r===!0)&&(d.minWidth=f.width+"px",r===!0&&(d.minHeight=f.height+"px")),Object.assign(n.style,d);const y=qt(L,_);let b=me(f,y,s,o);if(v===void 0||l===void 0)G(b,f,y,s,o);else{const{top:M,left:k}=b;G(b,f,y,s,o);let w=!1;if(b.top!==M){w=!0;const q=2*l[1];f.center=f.top-=q,f.bottom-=q+2}if(b.left!==k){w=!0;const q=2*l[0];f.middle=f.left-=q,f.right-=q+2}w===!0&&(b=me(f,y,s,o),G(b,f,y,s,o))}d={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(d.maxHeight=b.maxHeight+"px",f.height>b.maxHeight&&(d.minHeight=d.maxHeight)),b.maxWidth!==void 0&&(d.maxWidth=b.maxWidth+"px",f.width>b.maxWidth&&(d.minWidth=d.maxWidth)),Object.assign(n.style,d),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==g&&(n.scrollLeft=g)}function G(e,t,n,l,i){const s=n.bottom,o=n.right,v=Xe(),h=window.innerHeight-v,r=document.body.clientWidth;if(e.top<0||e.top+s>h)if(i.vertical==="center")e.top=t[l.vertical]>h/2?Math.max(0,h-s):0,e.maxHeight=Math.min(s,h);else if(t[l.vertical]>h/2){const c=Math.min(h,l.vertical==="center"?t.center:l.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,c),e.top=Math.max(0,c-s)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,h-e.top);if(e.left<0||e.left+o>r)if(e.maxWidth=Math.min(o,r),i.horizontal==="middle")e.left=t[l.horizontal]>r/2?Math.max(0,r-o):0;else if(t[l.horizontal]>r/2){const c=Math.min(r,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(o,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(o,r-e.left)}var Wt=R({name:"QMenu",inheritAttrs:!1,props:{...it,...Ye,...xe,...rt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ve},self:{type:String,validator:ve},offset:{type:Array,validator:yt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Je,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){let i=null,s,o,v;const h=K(),{proxy:r}=h,{$q:c}=r,m=E(null),g=E(!1),a=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=ye(e,c),{registerTick:H,removeTick:C}=dt(),{registerTimeout:L}=Ze(),{transitionProps:_,transitionStyle:d}=ct(e),{localScrollTarget:y,changeScrollEvent:b,unconfigureScrollTarget:M}=at(e,ie),{anchorEl:k,canShow:w}=ot({showing:g}),{hide:q}=et({showing:g,canShow:w,handleShow:Pe,handleHide:He,hideOnRouteChange:a,processOnMount:!0}),{showPortal:Z,hidePortal:ee,renderPortal:Ce}=st(h,m,Me,"menu"),I={anchorEl:k,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&g.value===!0)return q(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&ge(u),!0}},te=x(()=>he(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),pe=x(()=>e.cover===!0?te.value:he(e.self||"top start",c.lang.rtl)),Te=x(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Se=x(()=>e.autoClose===!0?{onClick:Le}:{}),ne=x(()=>g.value===!0&&e.persistent!==!0);W(ne,u=>{u===!0?(mt(j),xt(I)):(re(j),ce(I))});function O(){lt(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function Pe(u){if(i=e.noRefocus===!1?document.activeElement:null,gt(oe),Z(),ie(),s=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const N=Ne(u);if(N.left!==void 0){const{top:We,left:Be}=k.value.getBoundingClientRect();s={left:N.left-Be,top:N.top-We}}}o===void 0&&(o=W(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,A)),e.noFocus!==!0&&document.activeElement.blur(),H(()=>{A(),e.noFocus!==!0&&O()}),L(()=>{c.platform.is.ios===!0&&(v=e.autoClose,m.value.click()),A(),Z(!0),n("show",u)},e.transitionDuration)}function He(u){C(),ee(),le(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),L(()=>{ee(!0),n("hide",u)},e.transitionDuration)}function le(u){s=void 0,o!==void 0&&(o(),o=void 0),(u===!0||g.value===!0)&&(bt(oe),M(),ce(I),re(j)),u!==!0&&(i=null)}function ie(){(k.value!==null||e.scrollTarget!==void 0)&&(y.value=tt(k.value,e.scrollTarget),b(y.value,A))}function Le(u){v!==!0?(ke(r,u),n("click",u)):v=!1}function oe(u){ne.value===!0&&e.noFocus!==!0&&Ve(m.value,u.target)!==!0&&O()}function j(u){n("escapeKey"),q(u)}function A(){Ee({targetEl:m.value,offset:e.offset,anchorEl:k.value,anchorOrigin:te.value,selfOrigin:pe.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Me(){return P(Ge,_.value,()=>g.value===!0?P("div",{role:"menu",...l,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+Te.value,l.class],style:[l.style,d.value],...Se.value},X(t.default)):null)}return z(le),Object.assign(r,{focus:O,updatePosition:A}),Ce}});export{Ht as Q,Pt as a,St as b,Wt as c,Mt as d,dt as e,ct as f,Lt as g,st as h,re as i,gt as j,mt as k,bt as r,rt as u};