import{v as $,c as v,h as o,x as Q,g as H,C as gt,Y as he,r as A,w as M,av as De,o as Ee,al as mt,P as ht,H as je,J as pe,ab as St,ae as yt,ah as Fe,aw as me,ax as Le,ay as wt,E as Qe,az as _t,L as N,Q as ee}from"./index.0a4cc95d.js";import{u as Se,a as ye}from"./use-dark.73e1a64d.js";import{a as qt}from"./ClosePopup.6a43dc5b.js";import{u as Ct,a as Pt,c as Ae,Q as kt}from"./QSelect.bbd29f10.js";import{e as xt}from"./use-prevent-scroll.36779d27.js";import{Q as Rt}from"./QLinearProgress.2e1dc632.js";import{u as Tt,a as Bt,b as Ot}from"./use-checkbox.3c6e425b.js";var fl=$({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=H(),c=v(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:c.value},Q(l.default));const r=n.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(f===void 0)return;const{row:i}=e.props;return o("td",{class:c.value+f.__tdClass(i),style:f.__tdStyle(i)},Q(l.default))}}}),bl=$({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const n=v(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>o("tr",{class:n.value},Q(l.default))}}),pt=$({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const c=H(),{proxy:{$q:r}}=c,f=i=>{n("click",i)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},Q(l.default));let i,u;const d=c.vnode.key;if(d){if(i=e.props.colsMap[d],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const a=i.align==="right"?"unshift":"push";u=gt(l.default,[]),u[a](o(he,{class:i.__iconClass,name:r.iconSet.table.arrowUp}))}else u=Q(l.default);const b={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:a=>{i.sortable===!0&&e.props.sort(i),f(a)}};return o("th",b,u)}}});const Ft={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},be={xs:2,sm:4,md:8,lg:16,xl:24};var Lt=$({name:"QSeparator",props:{...Se,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=H(),n=ye(e,l.proxy.$q),c=v(()=>e.vertical===!0?"vertical":"horizontal"),r=v(()=>` q-separator--${c.value}`),f=v(()=>e.inset!==!1?`${r.value}-${Ft[e.inset]}`:""),i=v(()=>`q-separator${r.value}${f.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),u=v(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const b=e.spaced===!0?`${be.md}px`:e.spaced in be?`${be[e.spaced]}px`:e.spaced,a=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${a[0]}`]=d[`margin${a[1]}`]=b}return d});return()=>o("hr",{class:i.value,style:u.value,"aria-orientation":c.value})}});const Mt=["horizontal","vertical","cell","none"];var Vt=$({name:"QMarkupTable",props:{...Se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Mt.includes(e)}},setup(e,{slots:l}){const n=H(),c=ye(e,n.proxy.$q),r=v(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(c.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>o("div",{class:r.value},[o("table",{class:"q-table"},Q(l.default))])}});function He(e,l){return o("div",e,[o("table",{class:"q-table"},l)])}const $t={list:qt,table:Vt},Dt=["list","table","__qtable"];var Et=$({name:"QVirtualScroll",props:{...Ct,type:{type:String,default:"list",validator:e=>Dt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let c;const r=A(null),f=v(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:u,padVirtualScroll:d,onVirtualScrollEvt:b}=Pt({virtualScrollLength:f,getVirtualScrollTarget:k,getVirtualScrollEl:q}),a=v(()=>{if(f.value===0)return[];const O=(p,x)=>({index:i.value.from+x,item:p});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(O):e.itemsFn(i.value.from,i.value.to-i.value.from).map(O)}),h=v(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=v(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(f,()=>{u()}),M(()=>e.scrollTarget,()=>{y(),w()});function q(){return r.value.$el||r.value}function k(){return c}function w(){c=xt(q(),e.scrollTarget),c.addEventListener("scroll",b,pe.passive)}function y(){c!==void 0&&(c.removeEventListener("scroll",b,pe.passive),c=void 0)}function B(){let O=d(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),St(l.after,O)}return De(()=>{u()}),Ee(()=>{w()}),mt(()=>{w()}),ht(()=>{y()}),je(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:r,class:"q-table__middle "+h.value},B()):o($t[e.type],{...n,ref:r,class:[n.class,h.value],..._.value},B)}}});const jt=o("div",{key:"svg",class:"q-checkbox__bg absolute"},[o("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[o("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),o("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ge=$({name:"QCheckbox",props:Tt,emits:Bt,setup(e){function l(n,c){const r=v(()=>(n.value===!0?e.checkedIcon:c.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[o("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[o(he,{class:"q-checkbox__icon",name:r.value})])]:[jt]}return Ot("checkbox",l)}});let z=0;const Qt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},At=["update:fullscreen","fullscreen"];function Ht(){const e=H(),{props:l,emit:n,proxy:c}=e;let r,f,i;const u=A(!1);yt(e)===!0&&M(()=>c.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),M(()=>l.fullscreen,h=>{u.value!==h&&d()}),M(u,h=>{n("update:fullscreen",h),n("fullscreen",h)});function d(){u.value===!0?a():b()}function b(){u.value!==!0&&(u.value=!0,i=c.$el.parentNode,i.replaceChild(f,c.$el),document.body.appendChild(c.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:a},Fe.add(r))}function a(){u.value===!0&&(r!==void 0&&(Fe.remove(r),r=void 0),i.replaceChild(c.$el,f),u.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return De(()=>{f=document.createElement("span")}),Ee(()=>{l.fullscreen===!0&&b()}),je(a),Object.assign(c,{toggleFullscreen:d,setFullscreen:b,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:d}}function Nt(e,l){return new Date(e)-new Date(l)}const zt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ut(e,l,n,c){const r=v(()=>{const{sortBy:u}=l.value;return u&&n.value.find(d=>d.name===u)||null}),f=v(()=>e.sortMethod!==void 0?e.sortMethod:(u,d,b)=>{const a=n.value.find(q=>q.name===d);if(a===void 0||a.field===void 0)return u;const h=b===!0?-1:1,_=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return u.sort((q,k)=>{let w=_(q),y=_(k);return w==null?-1*h:y==null?1*h:a.sort!==void 0?a.sort(w,y,q,k)*h:me(w)===!0&&me(y)===!0?(w-y)*h:Le(w)===!0&&Le(y)===!0?Nt(w,y)*h:typeof w=="boolean"&&typeof y=="boolean"?(w-y)*h:([w,y]=[w,y].map(B=>(B+"").toLocaleString().toLowerCase()),w<y?-1*h:w===y?0:h)})});function i(u){let d=e.columnSortOrder;if(wt(u)===!0)u.sortOrder&&(d=u.sortOrder),u=u.name;else{const h=n.value.find(_=>_.name===u);h!==void 0&&h.sortOrder&&(d=h.sortOrder)}let{sortBy:b,descending:a}=l.value;b!==u?(b=u,a=d==="da"):e.binaryStateSort===!0?a=!a:a===!0?d==="ad"?b=null:a=!1:d==="ad"?a=!0:b=null,c({sortBy:b,descending:a,page:1})}return{columnToSort:r,computedSortMethod:f,sort:i}}const It={filter:[String,Object],filterMethod:Function};function Wt(e,l){const n=v(()=>e.filterMethod!==void 0?e.filterMethod:(c,r,f,i)=>{const u=r?r.toLowerCase():"";return c.filter(d=>f.some(b=>{const a=i(b,d)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return M(()=>e.filter,()=>{Qe(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Kt(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Me(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Gt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Jt(e,l){const{props:n,emit:c}=e,r=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),f=v(()=>{const a=n["onUpdate:pagination"]!==void 0?{...r.value,...n.pagination}:r.value;return Me(a)}),i=v(()=>f.value.rowsNumber!==void 0);function u(a){d({pagination:a,filter:n.filter})}function d(a={}){Qe(()=>{c("request",{pagination:a.pagination||f.value,filter:a.filter||n.filter,getCellValue:l})})}function b(a,h){const _=Me({...f.value,...a});if(Kt(f.value,_)===!0){i.value===!0&&h===!0&&u(_);return}if(i.value===!0){u(_);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?c("update:pagination",_):r.value=_}return{innerPagination:r,computedPagination:f,isServerSide:i,requestServerInteraction:d,setPagination:b}}function Yt(e,l,n,c,r,f){const{props:i,emit:u,proxy:{$q:d}}=e,b=v(()=>c.value===!0?n.value.rowsNumber||0:f.value),a=v(()=>{const{page:x,rowsPerPage:R}=n.value;return(x-1)*R}),h=v(()=>{const{page:x,rowsPerPage:R}=n.value;return x*R}),_=v(()=>n.value.page===1),q=v(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(b.value/n.value.rowsPerPage))),k=v(()=>h.value===0?!0:n.value.page>=q.value),w=v(()=>(i.rowsPerPageOptions.includes(l.value.rowsPerPage)?i.rowsPerPageOptions:[l.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(R=>({label:R===0?d.lang.table.allRows:""+R,value:R})));M(q,(x,R)=>{if(x===R)return;const U=n.value.page;x&&!U?r({page:1}):x<U&&r({page:x})});function y(){r({page:1})}function B(){const{page:x}=n.value;x>1&&r({page:x-1})}function O(){const{page:x,rowsPerPage:R}=n.value;h.value>0&&x*R<b.value&&r({page:x+1})}function p(){r({page:q.value})}return i["onUpdate:pagination"]!==void 0&&u("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:h,isFirstPage:_,isLastPage:k,pagesNumber:q,computedRowsPerPageOptions:w,computedRowsNumber:b,firstPage:y,prevPage:B,nextPage:O,lastPage:p}}const Xt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Zt=["update:selected","selection"];function el(e,l,n,c){const r=v(()=>{const k={};return e.selected.map(c.value).forEach(w=>{k[w]=!0}),k}),f=v(()=>e.selection!=="none"),i=v(()=>e.selection==="single"),u=v(()=>e.selection==="multiple"),d=v(()=>n.value.length!==0&&n.value.every(k=>r.value[c.value(k)]===!0)),b=v(()=>d.value!==!0&&n.value.some(k=>r.value[c.value(k)]===!0)),a=v(()=>e.selected.length);function h(k){return r.value[k]===!0}function _(){l("update:selected",[])}function q(k,w,y,B){l("selection",{rows:w,added:y,keys:k,evt:B});const O=i.value===!0?y===!0?w:[]:y===!0?e.selected.concat(w):e.selected.filter(p=>k.includes(c.value(p))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:i,multipleSelection:u,allRowsSelected:d,someRowsSelected:b,rowsSelectedNumber:a,isRowSelected:h,clearSelection:_,updateSelection:q}}function Ve(e){return Array.isArray(e)?e.slice():[]}const tl={expanded:Array},ll=["update:expanded"];function al(e,l){const n=A(Ve(e.expanded));M(()=>e.expanded,i=>{n.value=Ve(i)});function c(i){return n.value.includes(i)}function r(i){e.expanded!==void 0?l("update:expanded",i):n.value=i}function f(i,u){const d=n.value.slice(),b=d.indexOf(i);u===!0?b===-1&&(d.push(i),r(d)):b!==-1&&(d.splice(b,1),r(d))}return{isRowExpanded:c,setExpanded:r,updateExpanded:f}}const nl={visibleColumns:Array};function ol(e,l,n){const c=v(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(d=>({name:d,label:d.toUpperCase(),field:d,align:me(u[d])?"right":"left",sortable:!0})):[]}),r=v(()=>{const{sortBy:u,descending:d}=l.value;return(e.visibleColumns!==void 0?c.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):c.value).map(a=>{const h=a.align||"right",_=`text-${h}`;return{...a,align:h,__iconClass:`q-table__sort-icon q-table__sort-icon--${h}`,__thClass:_+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>_+" "+a.classes:q=>_+" "+a.classes(q):()=>_}})}),f=v(()=>{const u={};return r.value.forEach(d=>{u[d.name]=d}),u}),i=v(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(n.value===!0?1:0));return{colList:c,computedCols:r,computedColsMap:f,computedColspan:i}}const te="q-table__bottom row items-center",Ne={};Ae.forEach(e=>{Ne[e]={}});var gl=$({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ne,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Se,...Qt,...nl,...It,...Gt,...tl,...Xt,...zt},emits:["request","virtualScroll",...At,...ll,...Zt],setup(e,{slots:l,emit:n}){const c=H(),{proxy:{$q:r}}=c,f=ye(e,r),{inFullscreen:i,toggleFullscreen:u}=Ht(),d=v(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),b=A(null),a=A(null),h=v(()=>e.grid!==!0&&e.virtualScroll===!0),_=v(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=v(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),k=v(()=>q.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{h.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:w,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:p}=Jt(c,E),{computedFilterMethod:x}=Wt(e,p),{isRowExpanded:R,setExpanded:U,updateExpanded:ze}=al(e,n),le=v(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=y.value;return e.filter&&(t=x.value(t,e.filter,F.value,E)),Ge.value!==null&&(t=Je.value(e.rows===t?t.slice():t,s,g)),t}),we=v(()=>le.value.length),V=v(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:s}=y.value;return s!==0&&(W.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(W.value,K.value)),t}),{hasSelectionMode:D,singleSelection:Ue,multipleSelection:_e,allRowsSelected:Ie,someRowsSelected:qe,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:We,updateSelection:I}=el(e,n,V,d),{colList:Ke,computedCols:F,computedColsMap:Ce,computedColspan:Pe}=ol(e,y,D),{columnToSort:Ge,computedSortMethod:Je,sort:oe}=Ut(e,y,Ke,p),{firstRowIndex:W,lastRowIndex:K,isFirstPage:re,isLastPage:ie,pagesNumber:G,computedRowsPerPageOptions:Ye,computedRowsNumber:J,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=Yt(c,w,y,B,p,we),Xe=v(()=>V.value.length===0),Ze=v(()=>{const t={};return Ae.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){h.value===!0&&a.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Be:null;if(h.value===!0){const g=l["top-row"],m=l["bottom-row"],S={default:P=>xe(P.item,l.body,P.index)};if(g!==void 0){const P=o("tbody",g({cols:F.value}));S.before=t===null?()=>P:()=>[t()].concat(P)}else t!==null&&(S.before=t);return m!==void 0&&(S.after=()=>o("tbody",m({cols:F.value}))),o(Et,{ref:a,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:Pe.value,onVirtualScroll:at},S)}const s=[nt()];return t!==null&&s.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function lt(t,s){if(a.value!==null){a.value.scrollTo(t,s);return}t=parseInt(t,10);const g=b.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const m=b.value.querySelector(".q-table__middle.scroll"),S=g.offsetTop-e.virtualScrollStickySizeStart,P=S<m.scrollTop?"decrease":"increase";m.scrollTop=S,n("virtualScroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:P})}}function at(t){n("virtualScroll",t)}function ke(){return[o(Rt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function xe(t,s,g){const m=d.value(t),S=ne(m);if(s!==void 0)return s(Re({key:m,row:t,pageIndex:g,__trClass:S?"selected":""}));const P=l["body-cell"],C=F.value.map(T=>{const X=l[`body-cell-${T.name}`],Z=X!==void 0?X:P;return Z!==void 0?Z(ot({key:m,row:t,pageIndex:g,col:T})):o("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},E(T,t))});if(D.value===!0){const T=l["body-selection"],X=T!==void 0?T(rt({key:m,row:t,pageIndex:g})):[o(ge,{modelValue:S,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Z,bt)=>{I([m],[t],Z,bt)}})];C.unshift(o("td",{class:"q-table--col-auto-width"},X))}const L={key:m,class:{selected:S}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{n("RowClick",T,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{n("RowDblclick",T,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{n("RowContextmenu",T,t,g)}),o("tr",L,C)}function nt(){const t=l.body,s=l["top-row"],g=l["bottom-row"];let m=V.value.map((S,P)=>xe(S,t,P));return s!==void 0&&(m=s({cols:F.value}).concat(m)),g!==void 0&&(m=m.concat(g({cols:F.value}))),o("tbody",m)}function Re(t){return ve(t),t.cols=t.cols.map(s=>N({...s},"value",()=>E(s,t.row))),t}function ot(t){return ve(t),N(t,"value",()=>E(t.col,t.row)),t}function rt(t){return ve(t),t}function ve(t){Object.assign(t,{cols:F.value,colsMap:Ce.value,sort:oe,rowIndex:W.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),D.value===!0&&N(t,"selected",()=>ne(t.key),(s,g)=>{I([t.key],[t.row],s,g)}),N(t,"expand",()=>R(t.key),s=>{ze(t.key,s)})}function E(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const j=v(()=>({pagination:y.value,pagesNumber:G.value,isFirstPage:re.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:i.value,toggleFullscreen:u}));function it(){const t=l.top,s=l["top-left"],g=l["top-right"],m=l["top-selection"],S=D.value===!0&&m!==void 0&&ae.value>0,P="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:P},[t(j.value)]);let C;if(S===!0?C=m(j.value).slice():(C=[],s!==void 0?C.push(o("div",{class:"q-table__control"},[s(j.value)])):e.title&&C.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(C.push(o("div",{class:"q-table__separator col"})),C.push(o("div",{class:"q-table__control"},[g(j.value)]))),C.length!==0)return o("div",{class:P},C)}const Te=v(()=>qe.value===!0?null:Ie.value);function Be(){const t=st();return e.loading===!0&&l.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:Pe.value},ke())])),o("thead",t)}function st(){const t=l.header,s=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const g=F.value.map(m=>{const S=l[`header-cell-${m.name}`],P=S!==void 0?S:s,C=fe({col:m});return P!==void 0?P(C):o(pt,{key:m.name,props:C},()=>m.label)});if(Ue.value===!0&&e.grid!==!0)g.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(_e.value===!0){const m=l["header-selection"],S=m!==void 0?m(fe({})):[o(ge,{color:e.color,modelValue:Te.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Oe})];g.unshift(o("th",{class:"q-table--col-auto-width"},S))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function fe(t){return Object.assign(t,{cols:F.value,sort:oe,colsMap:Ce.value,color:e.color,dark:f.value,dense:e.dense}),_e.value===!0&&N(t,"selected",()=>Te.value,Oe),t}function Oe(t){qe.value===!0&&(t=!1),I(V.value.map(d.value),V.value,t)}const Y=v(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Xe.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,m=l["no-data"],S=m!==void 0?[m({message:g,icon:r.iconSet.table.warning,filter:e.filter})]:[o(he,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),g];return o("div",{class:te+" q-table__bottom--nodata"},S)}const t=l.bottom;if(t!==void 0)return o("div",{class:te},[t(j.value)]);const s=e.hideSelectedBanner!==!0&&D.value===!0&&ae.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:te+" justify-end"},dt(s));if(s.length!==0)return o("div",{class:te},s)}function ct(t){p({page:1,rowsPerPage:t.value})}function dt(t){let s;const{rowsPerPage:g}=y.value,m=e.paginationLabel||r.lang.table.pagination,S=l.pagination,P=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),P===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),o(kt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Ye.value,displayValue:g===0?r.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),S!==void 0)s=S(j.value);else if(s=[o("span",g!==0?{class:"q-table__bottom-item"}:{},[g?m(W.value+1,Math.min(K.value,J.value),J.value):m(1,we.value,J.value)])],g!==0&&G.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),G.value>2&&s.push(o(ee,{key:"pgFirst",...C,icon:Y.value[0],disable:re.value,onClick:se})),s.push(o(ee,{key:"pgPrev",...C,icon:Y.value[1],disable:re.value,onClick:ue}),o(ee,{key:"pgNext",...C,icon:Y.value[2],disable:ie.value,onClick:ce})),G.value>2&&s.push(o(ee,{key:"pgLast",...C,icon:Y.value[3],disable:ie.value,onClick:de}))}return t.push(o("div",{class:"q-table__control"},s)),t}function vt(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[Be()])]:e.loading===!0&&l.loading===void 0?ke():void 0;return o("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:s=>{const g=s.cols.map(S=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[S.label]),o("div",{class:"q-table__grid-item-value"},[S.value])]));if(D.value===!0){const S=l["body-selection"],P=S!==void 0?S(s):[o(ge,{modelValue:s.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(C,L)=>{I([s.key],[s.row],C,L)}})];g.unshift(o("div",{class:"q-table__grid-item-row"},P),o(Lt,{dark:f.value}))}const m={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=S=>{n("RowClick",S,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=S=>{n("RowDblclick",S,s.row,s.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[o("div",m,g)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((s,g)=>t(Re({key:d.value(s),row:s,pageIndex:g}))))}return Object.assign(c.proxy,{requestServerInteraction:O,setPagination:p,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:We,isRowExpanded:R,setExpanded:U,sort:oe,resetVirtualScroll:et,scrollTo:lt,getCellValue:E}),_t(c.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>V.value,computedRowsNumber:()=>J.value}),()=>{const t=[it()],s={ref:b,class:k.value};return e.grid===!0?t.push(vt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),o("div",s,t)}}});function $e(e){setTimeout(()=>{window.URL.revokeObjectURL(e.href)},1e4),e.remove()}function ml(e,l,n={}){const{mimeType:c,byteOrderMark:r,encoding:f}=typeof n=="string"?{mimeType:n}:n,i=f!==void 0?new TextEncoder(f).encode([l]):l,u=r!==void 0?[r,i]:[i],d=new Blob(u,{type:c||"application/octet-stream"}),b=document.createElement("a");b.href=window.URL.createObjectURL(d),b.setAttribute("download",e),typeof b.download=="undefined"&&b.setAttribute("target","_blank"),b.classList.add("hidden"),b.style.position="fixed",document.body.appendChild(b);try{return b.click(),$e(b),!0}catch(a){return $e(b),a}}export{gl as Q,bl as a,fl as b,ml as e};