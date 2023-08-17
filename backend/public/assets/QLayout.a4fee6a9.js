import{v as R,c as v,h as S,x as me,r as x,a1 as Be,o as N,H as I,a2 as ge,E as G,g as A,J as fe,i as ye,a3 as E,w as C,C as Xe,a4 as J,a0 as Ue,S as W,a5 as Ye,G as U,a6 as re,D as Se,$ as le,U as ve,I as ue,B as Ke,s as Ge,a7 as ze,a8 as Oe,a9 as Je,aa as Y,a as Ze,ab as et}from"./index.0a4cc95d.js";import{c as tt,u as at,a as nt,b as it,d as ot,f as rt,h as lt,e as ut,i as st,j as ct,g as se}from"./use-prevent-scroll.36779d27.js";import{u as dt,a as ft}from"./use-dark.73e1a64d.js";import{b as K}from"./format.3e32b8d9.js";var zt=R({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:i.value,role:"toolbar"},me(o.default))}});function vt(){const e=x(!Be.value);return e.value===!1&&N(()=>{e.value=!0}),e}const Ee=typeof ResizeObserver!="undefined",xe=Ee===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var he=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:c,offsetHeight:l}=u;(c!==t.width||l!==t.height)&&(t={width:c,height:l},o("resize",t))}}const{proxy:h}=A();if(Ee===!0){let c;const l=r=>{u=h.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):r!==!0&&G(()=>{l(!0)})};return N(()=>{l()}),I(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),ge}else{let r=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",a,fe.passive),l=void 0)},w=function(){r(),u&&u.contentDocument&&(l=u.contentDocument.defaultView,l.addEventListener("resize",a,fe.passive),s())};const c=vt();let l;return N(()=>{G(()=>{u=h.$el,u&&w()})}),I(r),h.trigger=a,()=>{if(c.value===!0)return S("object",{style:xe.style,tabindex:-1,type:"text/html",data:xe.url,"aria-hidden":"true",onLoad:w})}}}}),xt=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=A(),t=ye(J,E);if(t===E)return console.error("QHeader needs to be child of QLayout"),E;const a=x(parseInt(e.heightHint,10)),s=x(!0),h=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),l=v(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=v(()=>{const d=t.rows.value.top,T={};return d[0]==="l"&&t.left.space===!0&&(T[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(T[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function f(d,T){t.update("header",d,T)}function m(d,T){d.value!==T&&(d.value=T)}function k({height:d}){m(a,d),f("size",d)}function z(d){r.value===!0&&m(s,!0),i("focusin",d)}C(()=>e.modelValue,d=>{f("space",d),m(s,!0),t.animate()}),C(c,d=>{f("offset",d)}),C(()=>e.reveal,d=>{d===!1&&m(s,e.modelValue)}),C(s,d=>{t.animate(),i("reveal",d)}),C(t.scroll,d=>{e.reveal===!0&&m(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&f("size",a.value),f("space",e.modelValue),f("offset",c.value),I(()=>{t.instances.header===b&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const d=Xe(o.default,[]);return e.elevated===!0&&d.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(S(he,{debounce:0,onResize:k})),S("header",{class:w.value,style:p.value,onFocusin:z},d)}}});const be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ht=Object.keys(be);be.all=!0;function Te(e){const o={};for(const i of ht)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?be:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const mt=["INPUT","TEXTAREA"];function $e(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&mt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ce(e,o,i){const u=ve(e);let t,a=u.left-o.event.x,s=u.top-o.event.y,h=Math.abs(a),c=Math.abs(s);const l=o.direction;l.horizontal===!0&&l.vertical!==!0?t=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=s<0?"up":"down":l.up===!0&&s<0?(t="up",h>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.down===!0&&s>0?(t="down",h>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.left===!0&&a<0?(t="left",h<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down"))):l.right===!0&&a>0&&(t="right",h<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=a,h=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:u,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:h,y:c},offset:{x:a,y:s},delta:{x:u.left-o.event.lastX,y:u.top-o.event.lastY}}}}let gt=0;var de=Ue({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&W.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?Ke(a):(i.stop===!0&&le(a),i.prevent===!0&&Se(a))}const t={uid:"qvtp_"+gt++,handler:o,modifiers:i,direction:Te(i),noop:ge,mouseStart(a){$e(a,t)&&Ye(a)&&(U(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if($e(a,t)){const s=a.target;U(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(W.is.firefox===!0&&re(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Se(l),a.cancelBubble===!0&&le(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:l}}le(a)}const{left:h,top:c}=ve(a);t.event={x:h,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:c}},move(a){if(t.event===void 0)return;const s=ve(a),h=s.left-t.event.x,c=s.top-t.event.y;if(h===0&&c===0)return;t.lastEvt=a;const l=t.event.mouse===!0,r=()=>{u(a,l);let f;i.preserveCursor!==!0&&i.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),tt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),l===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{k(),m()},50):k()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:f,synthetic:m}=ce(a,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=m===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const w=Math.abs(h),p=Math.abs(c);w!==p&&(t.direction.horizontal===!0&&w>p||t.direction.vertical===!0&&w<p||t.direction.up===!0&&w<p&&c<0||t.direction.down===!0&&w<p&&c>0||t.direction.left===!0&&w>p&&h<0||t.direction.right===!0&&w>p&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ue(t,"temp"),W.is.firefox===!0&&re(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ce(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=ce(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";U(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}W.has.touch===!0&&U(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Te(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ue(o,"main"),ue(o,"temp"),W.is.firefox===!0&&re(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Le=150;var Tt=R({name:"QDrawer",inheritAttrs:!1,props:{...at,...dt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...nt,"onLayout","miniState"],setup(e,{slots:o,emit:i,attrs:u}){const t=A(),{proxy:{$q:a}}=t,s=ft(e,a),{preventBodyScroll:h}=lt(),{registerTimeout:c,removeTimeout:l}=it(),r=ye(J,E);if(r===E)return console.error("QDrawer needs to be child of QLayout"),E;let w,p=null,f;const m=x(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),k=v(()=>e.mini===!0&&m.value!==!0),z=v(()=>k.value===!0?e.miniWidth:e.width),b=x(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),d=v(()=>e.persistent!==!0&&(m.value===!0||Pe.value===!0));function T(n,g){if(D(),n!==!1&&r.animate(),B(0),m.value===!0){const $=r.instances[j.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),P(1),r.isContainer.value!==!0&&h(!0)}else P(0),n!==!1&&ne(!1);c(()=>{n!==!1&&ne(!0),g!==!0&&i("show",n)},Le)}function y(n,g){F(),n!==!1&&r.animate(),P(0),B(_.value*z.value),ie(),g!==!0?c(()=>{i("hide",n)},Le):l()}const{show:q,hide:L}=ot({showing:b,hideOnRouteChange:d,handleShow:T,handleHide:y}),{addToHistory:D,removeFromHistory:F}=rt(b,L,d),H={belowBreakpoint:m,hide:L},O=v(()=>e.side==="right"),_=v(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),pe=x(0),Q=x(!1),Z=x(!1),we=x(z.value*_.value),j=v(()=>O.value===!0?"left":"right"),ee=v(()=>b.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),te=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")>-1||a.platform.is.ios===!0&&r.isContainer.value===!0),V=v(()=>e.overlay===!1&&b.value===!0&&m.value===!1),Pe=v(()=>e.overlay===!0&&b.value===!0&&m.value===!1),Me=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&Q.value===!1?" hidden":"")),De=v(()=>({backgroundColor:`rgba(0,0,0,${pe.value*.4})`})),Ce=v(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),He=v(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Re=v(()=>{const n={};return r.header.space===!0&&Ce.value===!1&&(te.value===!0?n.top=`${r.header.offset}px`:r.header.space===!0&&(n.top=`${r.header.size}px`)),r.footer.space===!0&&He.value===!1&&(te.value===!0?n.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(n.bottom=`${r.footer.size}px`)),n}),_e=v(()=>{const n={width:`${z.value}px`,transform:`translateX(${we.value}px)`};return m.value===!0?n:Object.assign(n,Re.value)}),Qe=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ae=v(()=>`q-drawer q-drawer--${e.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(Q.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(te.value===!0||V.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ce.value===!0?" q-drawer--top-padding":""))),Fe=v(()=>{const n=a.lang.rtl===!0?e.side:j.value;return[[de,Ie,void 0,{[n]:!0,mouse:!0}]]}),Ve=v(()=>{const n=a.lang.rtl===!0?j.value:e.side;return[[de,qe,void 0,{[n]:!0,mouse:!0}]]}),We=v(()=>{const n=a.lang.rtl===!0?j.value:e.side;return[[de,qe,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){je(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}C(m,n=>{n===!0?(w=b.value,b.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?(B(0),P(0),ie()):q(!1))}),C(()=>e.side,(n,g)=>{r.instances[g]===H&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[n]=H,r[n].size=z.value,r[n].space=V.value,r[n].offset=ee.value}),C(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),C(()=>e.behavior+e.breakpoint,ae),C(r.isContainer,n=>{b.value===!0&&h(n!==!0),n===!0&&ae()}),C(r.scrollbarWidth,()=>{B(b.value===!0?0:void 0)}),C(ee,n=>{M("offset",n)}),C(V,n=>{i("onLayout",n),M("space",n)}),C(O,()=>{B()}),C(z,n=>{B(),oe(e.miniToOverlay,n)}),C(()=>e.miniToOverlay,n=>{oe(n,z.value)}),C(()=>a.lang.rtl,()=>{B()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ne(),r.animate())}),C(k,n=>{i("miniState",n)});function B(n){n===void 0?G(()=>{n=b.value===!0?0:z.value,B(_.value*n)}):(r.isContainer.value===!0&&O.value===!0&&(m.value===!0||Math.abs(n)===z.value)&&(n+=_.value*r.scrollbarWidth.value),we.value=n)}function P(n){pe.value=n}function ne(n){const g=n===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function Ne(){p!==null&&clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,p=setTimeout(()=>{p=null,Z.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ie(n){if(b.value!==!1)return;const g=z.value,$=K(n.distance.x,0,g);if(n.isFinal===!0){$>=Math.min(75,g)===!0?q():(r.animate(),P(0),B(_.value*g)),Q.value=!1;return}B((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(g-$,0):Math.min(0,$-g)),P(K($/g,0,1)),n.isFirst===!0&&(Q.value=!0)}function qe(n){if(b.value!==!0)return;const g=z.value,$=n.direction===e.side,X=(a.lang.rtl===!0?$!==!0:$)?K(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(X)<Math.min(75,g)===!0?(r.animate(),P(1),B(0)):L(),Q.value=!1;return}B(_.value*X),P(K(1-X/g,0,1)),n.isFirst===!0&&(Q.value=!0)}function ie(){h(!1),ne(!0)}function M(n,g){r.update(e.side,n,g)}function je(n,g){n.value!==g&&(n.value=g)}function oe(n,g){M("size",n===!0?e.miniWidth:g)}return r.instances[e.side]=H,oe(e.miniToOverlay,z.value),M("space",V.value),M("offset",ee.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),N(()=>{i("onLayout",V.value),i("miniState",k.value),w=e.showIfAbove===!0;const n=()=>{(b.value===!0?T:y)(!1,!0)};if(r.totalWidth.value!==0){G(n);return}f=C(r.totalWidth,()=>{f(),f=void 0,b.value===!1&&e.showIfAbove===!0&&m.value===!1?q(!1):n()})}),I(()=>{f!==void 0&&f(),p!==null&&(clearTimeout(p),p=null),b.value===!0&&ie(),r.instances[e.side]===H&&(r.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const n=[];m.value===!0&&(e.noSwipeOpen===!1&&n.push(Ge(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Fe.value)),n.push(ze("div",{ref:"backdrop",class:Me.value,style:De.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>We.value)));const g=k.value===!0&&o.mini!==void 0,$=[S("div",{...u,key:""+g,class:[Qe.value,u.class]},g===!0?o.mini():me(o.default))];return e.elevated===!0&&b.value===!0&&$.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(ze("aside",{ref:"content",class:Ae.value,style:_e.value},$,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ve.value)),S("div",{class:"q-drawer-container"},n)}}}),$t=R({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=A(),u=ye(J,E);if(u===E)return console.error("QPageContainer needs to be child of QLayout"),E;Oe(Je,!0);const t=v(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},me(o.default))}});const{passive:ke}=fe,yt=["both","horizontal","vertical"];var bt=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>yt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;C(()=>e.scrollTarget,()=>{c(),h()});function s(){u!==null&&u();const w=Math.max(0,st(t)),p=ct(t),f={top:w-i.position.top,left:p-i.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const m=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";i.position={top:w,left:p},i.directionChanged=i.direction!==m,i.delta=f,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),o("scroll",{...i})}function h(){t=ut(a,e.scrollTarget),t.addEventListener("scroll",l,ke),l(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",l,ke),t=void 0)}function l(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[p,f]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{f(p),u=null}}}const{proxy:r}=A();return C(()=>r.$q.lang.rtl,s),N(()=>{a=r.$el.parentNode,h()}),I(()=>{u!==null&&u(),c()}),Object.assign(r,{trigger:l,getPosition:()=>i}),ge}}),Lt=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=A(),t=x(null),a=x(u.screen.height),s=x(e.container===!0?0:u.screen.width),h=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),l=x(Be.value===!0?0:se()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),p=v(()=>l.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),f=v(()=>l.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function m(y){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};h.value=q,e.onScroll!==void 0&&i("scroll",q)}}function k(y){const{height:q,width:L}=y;let D=!1;a.value!==q&&(D=!0,a.value=q,e.onScrollHeight!==void 0&&i("scrollHeight",q),b()),s.value!==L&&(D=!0,s.value=L),D===!0&&e.onResize!==void 0&&i("resize",y)}function z({height:y}){c.value!==y&&(c.value=y,b())}function b(){if(e.container===!0){const y=a.value>c.value?se():0;l.value!==y&&(l.value=y)}}let d=null;const T={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:l,totalWidth:v(()=>s.value+l.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:Y({size:0,offset:0,space:!1}),right:Y({size:300,offset:0,space:!1}),footer:Y({size:0,offset:0,space:!1}),left:Y({size:300,offset:0,space:!1}),scroll:h,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,q,L){T[y][q]=L}};if(Oe(J,T),se()>0){let L=function(){y=null,q.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(q.scrollHeight>u.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(L,300)},F=function(H){y!==null&&H==="remove"&&(clearTimeout(y),L()),window[`${H}EventListener`]("resize",D)},y=null;const q=document.body;C(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),Ze(()=>{F("remove")})}return()=>{const y=et(o.default,[S(bt,{onScroll:m}),S(he,{onResize:k})]),q=S("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(he,{onResize:z}),S("div",{class:"absolute-full",style:p.value},[S("div",{class:"scroll",style:f.value},[q])])]):q}}});export{Lt as Q,zt as a,xt as b,Tt as c,$t as d};
