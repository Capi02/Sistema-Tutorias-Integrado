import{v as $,c as g,h as r,x as Q,g as H,C as bt,Y as $e,r as A,w as M,av as De,o as je,al as mt,P as St,H as Ee,J as Oe,ab as yt,ae as ht,ah as pe,aw as me,ax as Fe,ay as wt,E as Qe,az as _t,L as N,Q as ee}from"./index.a087d920.js";import{u as Se,a as ye}from"./use-dark.b66c2986.js";import{a as qt}from"./ClosePopup.97d7bfb8.js";import{u as Ct,a as Pt,c as Ae,Q as kt}from"./QSelect.457920ea.js";import{e as Rt}from"./use-prevent-scroll.cb9388ba.js";import{Q as Tt}from"./QLinearProgress.622d7e3a.js";import{Q as ge}from"./QCheckbox.0a877cfa.js";var ul=$({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=H(),d=g(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:d.value},Q(l.default));const o=n.vnode.key,v=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(v===void 0)return;const{row:i}=e.props;return r("td",{class:d.value+v.__tdClass(i),style:v.__tdStyle(i)},Q(l.default))}}}),cl=$({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const n=g(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>r("tr",{class:n.value},Q(l.default))}}),xt=$({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const d=H(),{proxy:{$q:o}}=d,v=i=>{n("click",i)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},Q(l.default));let i,u;const c=d.vnode.key;if(c){if(i=e.props.colsMap[c],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const a=i.align==="right"?"unshift":"push";u=bt(l.default,[]),u[a](r($e,{class:i.__iconClass,name:o.iconSet.table.arrowUp}))}else u=Q(l.default);const f={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:a=>{i.sortable===!0&&e.props.sort(i),v(a)}};return r("th",f,u)}}});const Bt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},be={xs:2,sm:4,md:8,lg:16,xl:24};var Ot=$({name:"QSeparator",props:{...Se,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=H(),n=ye(e,l.proxy.$q),d=g(()=>e.vertical===!0?"vertical":"horizontal"),o=g(()=>` q-separator--${d.value}`),v=g(()=>e.inset!==!1?`${o.value}-${Bt[e.inset]}`:""),i=g(()=>`q-separator${o.value}${v.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),u=g(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${be.md}px`:e.spaced in be?`${be[e.spaced]}px`:e.spaced,a=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${a[0]}`]=c[`margin${a[1]}`]=f}return c});return()=>r("hr",{class:i.value,style:u.value,"aria-orientation":d.value})}});const pt=["horizontal","vertical","cell","none"];var Ft=$({name:"QMarkupTable",props:{...Se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>pt.includes(e)}},setup(e,{slots:l}){const n=H(),d=ye(e,n.proxy.$q),o=g(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},Q(l.default))])}});function He(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const Lt={list:qt,table:Ft},Mt=["list","table","__qtable"];var Vt=$({name:"QVirtualScroll",props:{...Ct,type:{type:String,default:"list",validator:e=>Mt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let d;const o=A(null),v=g(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:u,padVirtualScroll:c,onVirtualScrollEvt:f}=Pt({virtualScrollLength:v,getVirtualScrollTarget:k,getVirtualScrollEl:q}),a=g(()=>{if(v.value===0)return[];const O=(p,R)=>({index:i.value.from+R,item:p});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(O):e.itemsFn(i.value.from,i.value.to-i.value.from).map(O)}),S=g(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=g(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(v,()=>{u()}),M(()=>e.scrollTarget,()=>{h(),w()});function q(){return o.value.$el||o.value}function k(){return d}function w(){d=Rt(q(),e.scrollTarget),d.addEventListener("scroll",f,Oe.passive)}function h(){d!==void 0&&(d.removeEventListener("scroll",f,Oe.passive),d=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),yt(l.after,O)}return De(()=>{u()}),je(()=>{w()}),mt(()=>{w()}),St(()=>{h()}),Ee(()=>{h()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+S.value},B()):r(Lt[e.type],{...n,ref:o,class:[n.class,S.value],..._.value},B)}}});let z=0;const $t={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Dt=["update:fullscreen","fullscreen"];function jt(){const e=H(),{props:l,emit:n,proxy:d}=e;let o,v,i;const u=A(!1);ht(e)===!0&&M(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),M(()=>l.fullscreen,S=>{u.value!==S&&c()}),M(u,S=>{n("update:fullscreen",S),n("fullscreen",S)});function c(){u.value===!0?a():f()}function f(){u.value!==!0&&(u.value=!0,i=d.$el.parentNode,i.replaceChild(v,d.$el),document.body.appendChild(d.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:a},pe.add(o))}function a(){u.value===!0&&(o!==void 0&&(pe.remove(o),o=void 0),i.replaceChild(d.$el,v),u.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return De(()=>{v=document.createElement("span")}),je(()=>{l.fullscreen===!0&&f()}),Ee(a),Object.assign(d,{toggleFullscreen:c,setFullscreen:f,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:c}}function Et(e,l){return new Date(e)-new Date(l)}const Qt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function At(e,l,n,d){const o=g(()=>{const{sortBy:u}=l.value;return u&&n.value.find(c=>c.name===u)||null}),v=g(()=>e.sortMethod!==void 0?e.sortMethod:(u,c,f)=>{const a=n.value.find(q=>q.name===c);if(a===void 0||a.field===void 0)return u;const S=f===!0?-1:1,_=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return u.sort((q,k)=>{let w=_(q),h=_(k);return w==null?-1*S:h==null?1*S:a.sort!==void 0?a.sort(w,h,q,k)*S:me(w)===!0&&me(h)===!0?(w-h)*S:Fe(w)===!0&&Fe(h)===!0?Et(w,h)*S:typeof w=="boolean"&&typeof h=="boolean"?(w-h)*S:([w,h]=[w,h].map(B=>(B+"").toLocaleString().toLowerCase()),w<h?-1*S:w===h?0:S)})});function i(u){let c=e.columnSortOrder;if(wt(u)===!0)u.sortOrder&&(c=u.sortOrder),u=u.name;else{const S=n.value.find(_=>_.name===u);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:f,descending:a}=l.value;f!==u?(f=u,a=c==="da"):e.binaryStateSort===!0?a=!a:a===!0?c==="ad"?f=null:a=!1:c==="ad"?a=!0:f=null,d({sortBy:f,descending:a,page:1})}return{columnToSort:o,computedSortMethod:v,sort:i}}const Ht={filter:[String,Object],filterMethod:Function};function Nt(e,l){const n=g(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,v,i)=>{const u=o?o.toLowerCase():"";return d.filter(c=>v.some(f=>{const a=i(f,c)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return M(()=>e.filter,()=>{Qe(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function zt(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Ut={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function It(e,l){const{props:n,emit:d}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),v=g(()=>{const a=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Le(a)}),i=g(()=>v.value.rowsNumber!==void 0);function u(a){c({pagination:a,filter:n.filter})}function c(a={}){Qe(()=>{d("request",{pagination:a.pagination||v.value,filter:a.filter||n.filter,getCellValue:l})})}function f(a,S){const _=Le({...v.value,...a});if(zt(v.value,_)===!0){i.value===!0&&S===!0&&u(_);return}if(i.value===!0){u(_);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?d("update:pagination",_):o.value=_}return{innerPagination:o,computedPagination:v,isServerSide:i,requestServerInteraction:c,setPagination:f}}function Wt(e,l,n,d,o,v){const{props:i,emit:u,proxy:{$q:c}}=e,f=g(()=>d.value===!0?n.value.rowsNumber||0:v.value),a=g(()=>{const{page:R,rowsPerPage:T}=n.value;return(R-1)*T}),S=g(()=>{const{page:R,rowsPerPage:T}=n.value;return R*T}),_=g(()=>n.value.page===1),q=g(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(f.value/n.value.rowsPerPage))),k=g(()=>S.value===0?!0:n.value.page>=q.value),w=g(()=>(i.rowsPerPageOptions.includes(l.value.rowsPerPage)?i.rowsPerPageOptions:[l.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));M(q,(R,T)=>{if(R===T)return;const U=n.value.page;R&&!U?o({page:1}):R<U&&o({page:R})});function h(){o({page:1})}function B(){const{page:R}=n.value;R>1&&o({page:R-1})}function O(){const{page:R,rowsPerPage:T}=n.value;S.value>0&&R*T<f.value&&o({page:R+1})}function p(){o({page:q.value})}return i["onUpdate:pagination"]!==void 0&&u("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:S,isFirstPage:_,isLastPage:k,pagesNumber:q,computedRowsPerPageOptions:w,computedRowsNumber:f,firstPage:h,prevPage:B,nextPage:O,lastPage:p}}const Kt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Gt=["update:selected","selection"];function Jt(e,l,n,d){const o=g(()=>{const k={};return e.selected.map(d.value).forEach(w=>{k[w]=!0}),k}),v=g(()=>e.selection!=="none"),i=g(()=>e.selection==="single"),u=g(()=>e.selection==="multiple"),c=g(()=>n.value.length!==0&&n.value.every(k=>o.value[d.value(k)]===!0)),f=g(()=>c.value!==!0&&n.value.some(k=>o.value[d.value(k)]===!0)),a=g(()=>e.selected.length);function S(k){return o.value[k]===!0}function _(){l("update:selected",[])}function q(k,w,h,B){l("selection",{rows:w,added:h,keys:k,evt:B});const O=i.value===!0?h===!0?w:[]:h===!0?e.selected.concat(w):e.selected.filter(p=>k.includes(d.value(p))===!1);l("update:selected",O)}return{hasSelectionMode:v,singleSelection:i,multipleSelection:u,allRowsSelected:c,someRowsSelected:f,rowsSelectedNumber:a,isRowSelected:S,clearSelection:_,updateSelection:q}}function Me(e){return Array.isArray(e)?e.slice():[]}const Yt={expanded:Array},Xt=["update:expanded"];function Zt(e,l){const n=A(Me(e.expanded));M(()=>e.expanded,i=>{n.value=Me(i)});function d(i){return n.value.includes(i)}function o(i){e.expanded!==void 0?l("update:expanded",i):n.value=i}function v(i,u){const c=n.value.slice(),f=c.indexOf(i);u===!0?f===-1&&(c.push(i),o(c)):f!==-1&&(c.splice(f,1),o(c))}return{isRowExpanded:d,setExpanded:o,updateExpanded:v}}const el={visibleColumns:Array};function tl(e,l,n){const d=g(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(c=>({name:c,label:c.toUpperCase(),field:c,align:me(u[c])?"right":"left",sortable:!0})):[]}),o=g(()=>{const{sortBy:u,descending:c}=l.value;return(e.visibleColumns!==void 0?d.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):d.value).map(a=>{const S=a.align||"right",_=`text-${S}`;return{...a,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:_+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>_+" "+a.classes:q=>_+" "+a.classes(q):()=>_}})}),v=g(()=>{const u={};return o.value.forEach(c=>{u[c.name]=c}),u}),i=g(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:v,computedColspan:i}}const te="q-table__bottom row items-center",Ne={};Ae.forEach(e=>{Ne[e]={}});var dl=$({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ne,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Se,...$t,...el,...Ht,...Ut,...Yt,...Kt,...Qt},emits:["request","virtualScroll",...Dt,...Xt,...Gt],setup(e,{slots:l,emit:n}){const d=H(),{proxy:{$q:o}}=d,v=ye(e,o),{inFullscreen:i,toggleFullscreen:u}=jt(),c=g(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),f=A(null),a=A(null),S=g(()=>e.grid!==!0&&e.virtualScroll===!0),_=g(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=g(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),k=g(()=>q.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{S.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:w,computedPagination:h,isServerSide:B,requestServerInteraction:O,setPagination:p}=It(d,j),{computedFilterMethod:R}=Nt(e,p),{isRowExpanded:T,setExpanded:U,updateExpanded:ze}=Zt(e,n),le=g(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:b}=h.value;return e.filter&&(t=R.value(t,e.filter,F.value,j)),Ge.value!==null&&(t=Je.value(e.rows===t?t.slice():t,s,b)),t}),he=g(()=>le.value.length),V=g(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:s}=h.value;return s!==0&&(W.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(W.value,K.value)),t}),{hasSelectionMode:D,singleSelection:Ue,multipleSelection:we,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:We,updateSelection:I}=Jt(e,n,V,c),{colList:Ke,computedCols:F,computedColsMap:qe,computedColspan:Ce}=tl(e,h,D),{columnToSort:Ge,computedSortMethod:Je,sort:oe}=At(e,h,Ke,p),{firstRowIndex:W,lastRowIndex:K,isFirstPage:re,isLastPage:ie,pagesNumber:G,computedRowsPerPageOptions:Ye,computedRowsNumber:J,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=Wt(d,w,h,B,p,he),Xe=g(()=>V.value.length===0),Ze=g(()=>{const t={};return Ae.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){S.value===!0&&a.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?xe:null;if(S.value===!0){const b=l["top-row"],m=l["bottom-row"],y={default:P=>ke(P.item,l.body,P.index)};if(b!==void 0){const P=r("tbody",b({cols:F.value}));y.before=t===null?()=>P:()=>[t()].concat(P)}else t!==null&&(y.before=t);return m!==void 0&&(y.after=()=>r("tbody",m({cols:F.value}))),r(Vt,{ref:a,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:Ce.value,onVirtualScroll:at},y)}const s=[nt()];return t!==null&&s.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function lt(t,s){if(a.value!==null){a.value.scrollTo(t,s);return}t=parseInt(t,10);const b=f.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(b!==null){const m=f.value.querySelector(".q-table__middle.scroll"),y=b.offsetTop-e.virtualScrollStickySizeStart,P=y<m.scrollTop?"decrease":"increase";m.scrollTop=y,n("virtualScroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:P})}}function at(t){n("virtualScroll",t)}function Pe(){return[r(Tt,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function ke(t,s,b){const m=c.value(t),y=ne(m);if(s!==void 0)return s(Re({key:m,row:t,pageIndex:b,__trClass:y?"selected":""}));const P=l["body-cell"],C=F.value.map(x=>{const X=l[`body-cell-${x.name}`],Z=X!==void 0?X:P;return Z!==void 0?Z(ot({key:m,row:t,pageIndex:b,col:x})):r("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},j(x,t))});if(D.value===!0){const x=l["body-selection"],X=x!==void 0?x(rt({key:m,row:t,pageIndex:b})):[r(ge,{modelValue:y,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(Z,gt)=>{I([m],[t],Z,gt)}})];C.unshift(r("td",{class:"q-table--col-auto-width"},X))}const L={key:m,class:{selected:y}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=x=>{n("RowClick",x,t,b)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=x=>{n("RowDblclick",x,t,b)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=x=>{n("RowContextmenu",x,t,b)}),r("tr",L,C)}function nt(){const t=l.body,s=l["top-row"],b=l["bottom-row"];let m=V.value.map((y,P)=>ke(y,t,P));return s!==void 0&&(m=s({cols:F.value}).concat(m)),b!==void 0&&(m=m.concat(b({cols:F.value}))),r("tbody",m)}function Re(t){return ve(t),t.cols=t.cols.map(s=>N({...s},"value",()=>j(s,t.row))),t}function ot(t){return ve(t),N(t,"value",()=>j(t.col,t.row)),t}function rt(t){return ve(t),t}function ve(t){Object.assign(t,{cols:F.value,colsMap:qe.value,sort:oe,rowIndex:W.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),D.value===!0&&N(t,"selected",()=>ne(t.key),(s,b)=>{I([t.key],[t.row],s,b)}),N(t,"expand",()=>T(t.key),s=>{ze(t.key,s)})}function j(t,s){const b=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(b,s):b}const E=g(()=>({pagination:h.value,pagesNumber:G.value,isFirstPage:re.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:i.value,toggleFullscreen:u}));function it(){const t=l.top,s=l["top-left"],b=l["top-right"],m=l["top-selection"],y=D.value===!0&&m!==void 0&&ae.value>0,P="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:P},[t(E.value)]);let C;if(y===!0?C=m(E.value).slice():(C=[],s!==void 0?C.push(r("div",{class:"q-table__control"},[s(E.value)])):e.title&&C.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),b!==void 0&&(C.push(r("div",{class:"q-table__separator col"})),C.push(r("div",{class:"q-table__control"},[b(E.value)]))),C.length!==0)return r("div",{class:P},C)}const Te=g(()=>_e.value===!0?null:Ie.value);function xe(){const t=st();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:Ce.value},Pe())])),r("thead",t)}function st(){const t=l.header,s=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const b=F.value.map(m=>{const y=l[`header-cell-${m.name}`],P=y!==void 0?y:s,C=fe({col:m});return P!==void 0?P(C):r(xt,{key:m.name,props:C},()=>m.label)});if(Ue.value===!0&&e.grid!==!0)b.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(we.value===!0){const m=l["header-selection"],y=m!==void 0?m(fe({})):[r(ge,{color:e.color,modelValue:Te.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":Be})];b.unshift(r("th",{class:"q-table--col-auto-width"},y))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},b)]}function fe(t){return Object.assign(t,{cols:F.value,sort:oe,colsMap:qe.value,color:e.color,dark:v.value,dense:e.dense}),we.value===!0&&N(t,"selected",()=>Te.value,Be),t}function Be(t){_e.value===!0&&(t=!1),I(V.value.map(c.value),V.value,t)}const Y=g(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Xe.value===!0){if(e.hideNoData===!0)return;const b=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,m=l["no-data"],y=m!==void 0?[m({message:b,icon:o.iconSet.table.warning,filter:e.filter})]:[r($e,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),b];return r("div",{class:te+" q-table__bottom--nodata"},y)}const t=l.bottom;if(t!==void 0)return r("div",{class:te},[t(E.value)]);const s=e.hideSelectedBanner!==!0&&D.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:te+" justify-end"},dt(s));if(s.length!==0)return r("div",{class:te},s)}function ct(t){p({page:1,rowsPerPage:t.value})}function dt(t){let s;const{rowsPerPage:b}=h.value,m=e.paginationLabel||o.lang.table.pagination,y=l.pagination,P=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),P===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(kt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:b,options:Ye.value,displayValue:b===0?o.lang.table.allRows:b,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),y!==void 0)s=y(E.value);else if(s=[r("span",b!==0?{class:"q-table__bottom-item"}:{},[b?m(W.value+1,Math.min(K.value,J.value),J.value):m(1,he.value,J.value)])],b!==0&&G.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),G.value>2&&s.push(r(ee,{key:"pgFirst",...C,icon:Y.value[0],disable:re.value,onClick:se})),s.push(r(ee,{key:"pgPrev",...C,icon:Y.value[1],disable:re.value,onClick:ue}),r(ee,{key:"pgNext",...C,icon:Y.value[2],disable:ie.value,onClick:ce})),G.value>2&&s.push(r(ee,{key:"pgLast",...C,icon:Y.value[3],disable:ie.value,onClick:de}))}return t.push(r("div",{class:"q-table__control"},s)),t}function vt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[xe()])]:e.loading===!0&&l.loading===void 0?Pe():void 0;return r("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:s=>{const b=s.cols.map(y=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[y.label]),r("div",{class:"q-table__grid-item-value"},[y.value])]));if(D.value===!0){const y=l["body-selection"],P=y!==void 0?y(s):[r(ge,{modelValue:s.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(C,L)=>{I([s.key],[s.row],C,L)}})];b.unshift(r("div",{class:"q-table__grid-item-row"},P),r(Ot,{dark:v.value}))}const m={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=y=>{n("RowClick",y,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=y=>{n("RowDblclick",y,s.row,s.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[r("div",m,b)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((s,b)=>t(Re({key:c.value(s),row:s,pageIndex:b}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:p,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:We,isRowExpanded:T,setExpanded:U,sort:oe,resetVirtualScroll:et,scrollTo:lt,getCellValue:j}),_t(d.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>V.value,computedRowsNumber:()=>J.value}),()=>{const t=[it()],s={ref:f,class:k.value};return e.grid===!0?t.push(vt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",s,t)}}});function Ve(e){setTimeout(()=>{window.URL.revokeObjectURL(e.href)},1e4),e.remove()}function vl(e,l,n={}){const{mimeType:d,byteOrderMark:o,encoding:v}=typeof n=="string"?{mimeType:n}:n,i=v!==void 0?new TextEncoder(v).encode([l]):l,u=o!==void 0?[o,i]:[i],c=new Blob(u,{type:d||"application/octet-stream"}),f=document.createElement("a");f.href=window.URL.createObjectURL(c),f.setAttribute("download",e),typeof f.download=="undefined"&&f.setAttribute("target","_blank"),f.classList.add("hidden"),f.style.position="fixed",document.body.appendChild(f);try{return f.click(),Ve(f),!0}catch(a){return Ve(f),a}}export{dl as Q,cl as a,ul as b,vl as e};
