import"./modulepreload-polyfill-ec808ebb.js";function bt(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Zw="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",e0=bt(Zw);function bi(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=oe(s)?Np(s):bi(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(oe(e))return e;if(Ae(e))return e}}const t0=/;(?![^(]*\))/g,n0=/:([^]+)/,s0=/\/\*.*?\*\//gs;function Np(e){const t={};return e.replace(s0,"").split(t0).forEach(n=>{if(n){const s=n.split(n0);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ti(e){let t="";if(oe(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const s=Ti(e[n]);s&&(t+=s+" ")}else if(Ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function r0(e){if(!e)return null;let{class:t,style:n}=e;return t&&!oe(t)&&(e.class=Ti(t)),n&&(e.style=bi(n)),e}const i0="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",o0="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",a0="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",c0=bt(i0),l0=bt(o0),u0=bt(a0),h0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f0=bt(h0);function Rp(e){return!!e||e===""}function d0(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Dn(e[s],t[s]);return n}function Dn(e,t){if(e===t)return!0;let n=Jh(e),s=Jh(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=On(e),s=On(t),n||s)return e===t;if(n=z(e),s=z(t),n||s)return n&&s?d0(e,t):!1;if(n=Ae(e),s=Ae(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Dn(e[o],t[o]))return!1}}return String(e)===String(t)}function ia(e,t){return e.findIndex(n=>Dn(n,t))}const p0=e=>oe(e)?e:e==null?"":z(e)||Ae(e)&&(e.toString===Op||!te(e.toString))?JSON.stringify(e,Dp,2):String(e),Dp=(e,t)=>t&&t.__v_isRef?Dp(e,t.value):Us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Is(t)?{[`Set(${t.size})`]:[...t.values()]}:Ae(t)&&!z(t)&&!Pp(t)?String(t):t,Se={},Bs=[],mt=()=>{},yo=()=>!1,g0=/^on[^a-z]/,Ss=e=>g0.test(e),Yl=e=>e.startsWith("onUpdate:"),we=Object.assign,Xl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},m0=Object.prototype.hasOwnProperty,pe=(e,t)=>m0.call(e,t),z=Array.isArray,Us=e=>_i(e)==="[object Map]",Is=e=>_i(e)==="[object Set]",Jh=e=>_i(e)==="[object Date]",te=e=>typeof e=="function",oe=e=>typeof e=="string",On=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",Jl=e=>Ae(e)&&te(e.then)&&te(e.catch),Op=Object.prototype.toString,_i=e=>Op.call(e),y0=e=>_i(e).slice(8,-1),Pp=e=>_i(e)==="[object Object]",Zl=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rs=bt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),v0=bt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),oa=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},w0=/-(\w)/g,et=oa(e=>e.replace(w0,(t,n)=>n?n.toUpperCase():"")),E0=/\B([A-Z])/g,St=oa(e=>e.replace(E0,"-$1").toLowerCase()),As=oa(e=>e.charAt(0).toUpperCase()+e.slice(1)),js=oa(e=>e?`on${As(e)}`:""),Ys=(e,t)=>!Object.is(e,t),qs=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},So=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},un=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zh;const b0=()=>Zh||(Zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class eu{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!t&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}run(t){if(this.active){const n=_t;try{return _t=this,t()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function T0(e){return new eu(e)}function Mp(e,t=_t){t&&t.active&&t.effects.push(e)}function _0(){return _t}function C0(e){_t&&_t.cleanups.push(e)}const tu=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Lp=e=>(e.w&Pn)>0,Fp=e=>(e.n&Pn)>0,S0=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Pn},I0=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Lp(r)&&!Fp(r)?r.delete(e):t[n++]=r,r.w&=~Pn,r.n&=~Pn}t.length=n}},$c=new WeakMap;let Nr=0,Pn=1;const Vc=30;let jt;const is=Symbol(""),Bc=Symbol("");class Ci{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mp(this,s)}run(){if(!this.active)return this.fn();let t=jt,n=Sn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=jt,jt=this,Sn=!0,Pn=1<<++Nr,Nr<=Vc?S0(this):ef(this),this.fn()}finally{Nr<=Vc&&I0(this),Pn=1<<--Nr,jt=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(ef(this),this.onStop&&this.onStop(),this.active=!1)}}function ef(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function A0(e,t){e.effect&&(e=e.effect.fn);const n=new Ci(e);t&&(we(n,t),t.scope&&Mp(n,t.scope)),(!t||!t.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function k0(e){e.effect.stop()}let Sn=!0;const xp=[];function pr(){xp.push(Sn),Sn=!1}function gr(){const e=xp.pop();Sn=e===void 0?!0:e}function Dt(e,t,n){if(Sn&&jt){let s=$c.get(e);s||$c.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=tu()),$p(r)}}function $p(e,t){let n=!1;Nr<=Vc?Fp(e)||(e.n|=Pn,n=!Lp(e)):n=!e.has(jt),n&&(e.add(jt),jt.deps.push(e))}function hn(e,t,n,s,r,i){const o=$c.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&z(e)){const c=un(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":z(e)?Zl(n)&&a.push(o.get("length")):(a.push(o.get(is)),Us(e)&&a.push(o.get(Bc)));break;case"delete":z(e)||(a.push(o.get(is)),Us(e)&&a.push(o.get(Bc)));break;case"set":Us(e)&&a.push(o.get(is));break}if(a.length===1)a[0]&&Uc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Uc(tu(c))}}function Uc(e,t){const n=z(e)?e:[...e];for(const s of n)s.computed&&tf(s);for(const s of n)s.computed||tf(s)}function tf(e,t){(e!==jt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N0=bt("__proto__,__v_isRef,__isVue"),Vp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(On)),R0=aa(),D0=aa(!1,!0),O0=aa(!0),P0=aa(!0,!0),nf=M0();function M0(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=me(this);for(let i=0,o=this.length;i<o;i++)Dt(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(me)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pr();const s=me(this)[t].apply(this,n);return gr(),s}}),e}function aa(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?zp:Kp:t?Hp:qp).get(s))return s;const o=z(s);if(!e&&o&&pe(nf,r))return Reflect.get(nf,r,i);const a=Reflect.get(s,r,i);return(On(r)?Vp.has(r):N0(r))||(e||Dt(s,"get",r),t)?a:ze(a)?o&&Zl(r)?a:a.value:Ae(a)?e?su(a):mr(a):a}}const L0=Bp(),F0=Bp(!0);function Bp(e=!1){return function(n,s,r,i){let o=n[s];if(ps(o)&&ze(o)&&!ze(r))return!1;if(!e&&(!Xr(r)&&!ps(r)&&(o=me(o),r=me(r)),!z(n)&&ze(o)&&!ze(r)))return o.value=r,!0;const a=z(n)&&Zl(s)?Number(s)<n.length:pe(n,s),c=Reflect.set(n,s,r,i);return n===me(i)&&(a?Ys(r,o)&&hn(n,"set",s,r):hn(n,"add",s,r)),c}}function x0(e,t){const n=pe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&hn(e,"delete",t,void 0),s}function $0(e,t){const n=Reflect.has(e,t);return(!On(t)||!Vp.has(t))&&Dt(e,"has",t),n}function V0(e){return Dt(e,"iterate",z(e)?"length":is),Reflect.ownKeys(e)}const Up={get:R0,set:L0,deleteProperty:x0,has:$0,ownKeys:V0},jp={get:O0,set(e,t){return!0},deleteProperty(e,t){return!0}},B0=we({},Up,{get:D0,set:F0}),U0=we({},jp,{get:P0}),nu=e=>e,ca=e=>Reflect.getPrototypeOf(e);function Yi(e,t,n=!1,s=!1){e=e.__v_raw;const r=me(e),i=me(t);n||(t!==i&&Dt(r,"get",t),Dt(r,"get",i));const{has:o}=ca(r),a=s?nu:n?ou:Jr;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function Xi(e,t=!1){const n=this.__v_raw,s=me(n),r=me(e);return t||(e!==r&&Dt(s,"has",e),Dt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Ji(e,t=!1){return e=e.__v_raw,!t&&Dt(me(e),"iterate",is),Reflect.get(e,"size",e)}function sf(e){e=me(e);const t=me(this);return ca(t).has.call(t,e)||(t.add(e),hn(t,"add",e,e)),this}function rf(e,t){t=me(t);const n=me(this),{has:s,get:r}=ca(n);let i=s.call(n,e);i||(e=me(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Ys(t,o)&&hn(n,"set",e,t):hn(n,"add",e,t),this}function of(e){const t=me(this),{has:n,get:s}=ca(t);let r=n.call(t,e);r||(e=me(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&hn(t,"delete",e,void 0),i}function af(){const e=me(this),t=e.size!==0,n=e.clear();return t&&hn(e,"clear",void 0,void 0),n}function Zi(e,t){return function(s,r){const i=this,o=i.__v_raw,a=me(o),c=t?nu:e?ou:Jr;return!e&&Dt(a,"iterate",is),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function eo(e,t,n){return function(...s){const r=this.__v_raw,i=me(r),o=Us(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...s),u=n?nu:t?ou:Jr;return!t&&Dt(i,"iterate",c?Bc:is),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function yn(e){return function(...t){return e==="delete"?!1:this}}function j0(){const e={get(i){return Yi(this,i)},get size(){return Ji(this)},has:Xi,add:sf,set:rf,delete:of,clear:af,forEach:Zi(!1,!1)},t={get(i){return Yi(this,i,!1,!0)},get size(){return Ji(this)},has:Xi,add:sf,set:rf,delete:of,clear:af,forEach:Zi(!1,!0)},n={get(i){return Yi(this,i,!0)},get size(){return Ji(this,!0)},has(i){return Xi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Zi(!0,!1)},s={get(i){return Yi(this,i,!0,!0)},get size(){return Ji(this,!0)},has(i){return Xi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=eo(i,!1,!1),n[i]=eo(i,!0,!1),t[i]=eo(i,!1,!0),s[i]=eo(i,!0,!0)}),[e,n,t,s]}const[q0,H0,K0,z0]=j0();function la(e,t){const n=t?e?z0:K0:e?H0:q0;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(pe(n,r)&&r in s?n:s,r,i)}const W0={get:la(!1,!1)},G0={get:la(!1,!0)},Q0={get:la(!0,!1)},Y0={get:la(!0,!0)},qp=new WeakMap,Hp=new WeakMap,Kp=new WeakMap,zp=new WeakMap;function X0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J0(e){return e.__v_skip||!Object.isExtensible(e)?0:X0(y0(e))}function mr(e){return ps(e)?e:ua(e,!1,Up,W0,qp)}function Wp(e){return ua(e,!1,B0,G0,Hp)}function su(e){return ua(e,!0,jp,Q0,Kp)}function Z0(e){return ua(e,!0,U0,Y0,zp)}function ua(e,t,n,s,r){if(!Ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=J0(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function os(e){return ps(e)?os(e.__v_raw):!!(e&&e.__v_isReactive)}function ps(e){return!!(e&&e.__v_isReadonly)}function Xr(e){return!!(e&&e.__v_isShallow)}function ru(e){return os(e)||ps(e)}function me(e){const t=e&&e.__v_raw;return t?me(t):e}function iu(e){return So(e,"__v_skip",!0),e}const Jr=e=>Ae(e)?mr(e):e,ou=e=>Ae(e)?su(e):e;function au(e){Sn&&jt&&(e=me(e),$p(e.dep||(e.dep=tu())))}function ha(e,t){e=me(e),e.dep&&Uc(e.dep)}function ze(e){return!!(e&&e.__v_isRef===!0)}function Lr(e){return Qp(e,!1)}function Gp(e){return Qp(e,!0)}function Qp(e,t){return ze(e)?e:new eE(e,t)}class eE{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:me(t),this._value=n?t:Jr(t)}get value(){return au(this),this._value}set value(t){const n=this.__v_isShallow||Xr(t)||ps(t);t=n?t:me(t),Ys(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Jr(t),ha(this))}}function tE(e){ha(e)}function as(e){return ze(e)?e.value:e}const nE={get:(e,t,n)=>as(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ze(r)&&!ze(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function cu(e){return os(e)?e:new Proxy(e,nE)}class sE{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>au(this),()=>ha(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function rE(e){return new sE(e)}function iE(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=Yp(e,n);return t}class oE{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Yp(e,t,n){const s=e[t];return ze(s)?s:new oE(e,t,n)}var Xp;class aE{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xp]=!1,this._dirty=!0,this.effect=new Ci(t,()=>{this._dirty||(this._dirty=!0,ha(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=me(this);return au(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Xp="__v_isReadonly";function cE(e,t,n=!1){let s,r;const i=te(e);return i?(s=e,r=mt):(s=e.get,r=e.set),new aE(s,r,i||!r,n)}function lE(e,...t){}function cn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){ks(i,t,n)}return r}function At(e,t,n,s){if(te(e)){const i=cn(e,t,n,s);return i&&Jl(i)&&i.catch(o=>{ks(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(At(e[i],t,n,s));return r}function ks(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,a]);return}}uE(e,n,r,s)}function uE(e,t,n,s=!0){console.error(e)}let Zr=!1,jc=!1;const it=[];let Gt=0;const Hs=[];let rn=null,Yn=0;const Jp=Promise.resolve();let lu=null;function fa(e){const t=lu||Jp;return e?t.then(this?e.bind(this):e):t}function hE(e){let t=Gt+1,n=it.length;for(;t<n;){const s=t+n>>>1;ei(it[s])<e?t=s+1:n=s}return t}function da(e){(!it.length||!it.includes(e,Zr&&e.allowRecurse?Gt+1:Gt))&&(e.id==null?it.push(e):it.splice(hE(e.id),0,e),Zp())}function Zp(){!Zr&&!jc&&(jc=!0,lu=Jp.then(eg))}function fE(e){const t=it.indexOf(e);t>Gt&&it.splice(t,1)}function uu(e){z(e)?Hs.push(...e):(!rn||!rn.includes(e,e.allowRecurse?Yn+1:Yn))&&Hs.push(e),Zp()}function cf(e,t=Zr?Gt+1:0){for(;t<it.length;t++){const n=it[t];n&&n.pre&&(it.splice(t,1),t--,n())}}function Io(e){if(Hs.length){const t=[...new Set(Hs)];if(Hs.length=0,rn){rn.push(...t);return}for(rn=t,rn.sort((n,s)=>ei(n)-ei(s)),Yn=0;Yn<rn.length;Yn++)rn[Yn]();rn=null,Yn=0}}const ei=e=>e.id==null?1/0:e.id,dE=(e,t)=>{const n=ei(e)-ei(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function eg(e){jc=!1,Zr=!0,it.sort(dE);const t=mt;try{for(Gt=0;Gt<it.length;Gt++){const n=it[Gt];n&&n.active!==!1&&cn(n,null,14)}}finally{Gt=0,it.length=0,Io(),Zr=!1,lu=null,(it.length||Hs.length)&&eg()}}let Ms,to=[];function tg(e,t){var n,s;Ms=e,Ms?(Ms.enabled=!0,to.forEach(({event:r,args:i})=>Ms.emit(r,...i)),to=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{tg(i,t)}),setTimeout(()=>{Ms||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,to=[])},3e3)):to=[]}function pE(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Se;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Se;f&&(r=n.map(d=>oe(d)?d.trim():d)),h&&(r=n.map(un))}let a,c=s[a=js(t)]||s[a=js(et(t))];!c&&i&&(c=s[a=js(St(t))]),c&&At(c,e,6,r);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,At(l,e,6,r)}}function ng(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!te(e)){const c=l=>{const u=ng(l,t,!0);u&&(a=!0,we(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Ae(e)&&s.set(e,null),null):(z(i)?i.forEach(c=>o[c]=null):we(o,i),Ae(e)&&s.set(e,o),o)}function pa(e,t){return!e||!Ss(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,St(t))||pe(e,t))}let Ze=null,ga=null;function ti(e){const t=Ze;return Ze=e,ga=e&&e.type.__scopeId||null,t}function gE(e){ga=e}function mE(){ga=null}const yE=e=>hu;function hu(e,t=Ze,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Qc(-1);const i=ti(t);let o;try{o=e(...r)}finally{ti(i),s._d&&Qc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vo(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:w}=e;let T,v;const g=ti(e);try{if(n.shapeFlag&4){const C=r||s;T=Ct(u.call(C,C,h,i,d,f,m)),v=c}else{const C=t;T=Ct(C.length>1?C(i,{attrs:c,slots:a,emit:l}):C(i,null)),v=t.props?c:wE(c)}}catch(C){Vr.length=0,ks(C,e,1),T=Re(at)}let E=T;if(v&&w!==!1){const C=Object.keys(v),{shapeFlag:k}=E;C.length&&k&7&&(o&&C.some(Yl)&&(v=EE(v,o)),E=en(E,v))}return n.dirs&&(E=en(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),T=E,ti(g),T}function vE(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(Mn(s)){if(s.type!==at||s.children==="v-if"){if(t)return;t=s}}else return}return t}const wE=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ss(n))&&((t||(t={}))[n]=e[n]);return t},EE=(e,t)=>{const n={};for(const s in e)(!Yl(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function bE(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?lf(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!pa(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?lf(s,o,l):!0:!!o;return!1}function lf(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!pa(n,i))return!0}return!1}function fu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const sg=e=>e.__isSuspense,TE={name:"Suspense",__isSuspense:!0,process(e,t,n,s,r,i,o,a,c,l){e==null?CE(t,n,s,r,i,o,a,c,l):SE(e,t,n,s,r,o,a,c,l)},hydrate:IE,create:du,normalize:AE},_E=TE;function ni(e,t){const n=e.props&&e.props[t];te(n)&&n()}function CE(e,t,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=e.suspense=du(e,r,s,t,h,n,i,o,a,c);l(null,f.pendingBranch=e.ssContent,h,null,s,f,i,o),f.deps>0?(ni(e,"onPending"),ni(e,"onFallback"),l(null,e.ssFallback,t,n,s,null,i,o),Ks(f,e.ssFallback)):f.resolve()}function SE(e,t,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const f=t.ssContent,d=t.ssFallback,{activeBranch:m,pendingBranch:w,isInFallback:T,isHydrating:v}=h;if(w)h.pendingBranch=f,Qt(f,w)?(c(w,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():T&&(c(m,d,n,s,r,null,i,o,a),Ks(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=w):l(w,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(m,d,n,s,r,null,i,o,a),Ks(h,d))):m&&Qt(f,m)?(c(m,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&Qt(f,m))c(m,f,n,s,r,h,i,o,a),Ks(h,f);else if(ni(t,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:E}=h;g>0?setTimeout(()=>{h.pendingId===E&&h.fallback(d)},g):g===0&&h.fallback(d)}}function du(e,t,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:m,o:{parentNode:w,remove:T}}=l,v=un(e.props&&e.props.timeout),g={vnode:e,parent:t,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:C,activeBranch:k,pendingBranch:V,pendingId:N,effects:b,parentComponent:M,container:F}=g;if(g.isHydrating)g.isHydrating=!1;else if(!E){const H=k&&V.transition&&V.transition.mode==="out-in";H&&(k.transition.afterLeave=()=>{N===g.pendingId&&f(V,F,B,0)});let{anchor:B}=g;k&&(B=m(k),d(k,M,g,!0)),H||f(V,F,B,0)}Ks(g,V),g.pendingBranch=null,g.isInFallback=!1;let P=g.parent,R=!1;for(;P;){if(P.pendingBranch){P.effects.push(...b),R=!0;break}P=P.parent}R||uu(b),g.effects=[],ni(C,"onResolve")},fallback(E){if(!g.pendingBranch)return;const{vnode:C,activeBranch:k,parentComponent:V,container:N,isSVG:b}=g;ni(C,"onFallback");const M=m(k),F=()=>{g.isInFallback&&(h(null,E,N,M,V,null,b,a,c),Ks(g,E))},P=E.transition&&E.transition.mode==="out-in";P&&(k.transition.afterLeave=F),g.isInFallback=!0,d(k,V,null,!0),P||F()},move(E,C,k){g.activeBranch&&f(g.activeBranch,E,C,k),g.container=E},next(){return g.activeBranch&&m(g.activeBranch)},registerDep(E,C){const k=!!g.pendingBranch;k&&g.deps++;const V=E.vnode.el;E.asyncDep.catch(N=>{ks(N,E,0)}).then(N=>{if(E.isUnmounted||g.isUnmounted||g.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:b}=E;Yc(E,N,!1),V&&(b.el=V);const M=!V&&E.subTree.el;C(E,b,w(V||E.subTree.el),V?null:m(E.subTree),g,o,c),M&&T(M),fu(E,b.el),k&&--g.deps===0&&g.resolve()})},unmount(E,C){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,E,C),g.pendingBranch&&d(g.pendingBranch,n,E,C)}};return g}function IE(e,t,n,s,r,i,o,a,c){const l=t.suspense=du(t,s,n,e.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function AE(e){const{shapeFlag:t,children:n}=e,s=t&32;e.ssContent=uf(s?n.default:n),e.ssFallback=s?uf(n.fallback):Re(at)}function uf(e){let t;if(te(e)){const n=ys&&e._c;n&&(e._d=!1,ba()),e=e(),n&&(e._d=!0,t=wt,Rg())}return z(e)&&(e=vE(e)),e=Ct(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function rg(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):uu(e)}function Ks(e,t){e.activeBranch=t;const{vnode:n,parentComponent:s}=e,r=n.el=t.el;s&&s.subTree===n&&(s.vnode.el=r,fu(s,r))}function Fr(e,t){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[e]=t}}function Jt(e,t,n=!1){const s=je||Ze;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&te(t)?t.call(s.proxy):t}}function kE(e,t){return Si(e,null,t)}function ig(e,t){return Si(e,null,{flush:"post"})}function NE(e,t){return Si(e,null,{flush:"sync"})}const no={};function zs(e,t,n){return Si(e,t,n)}function Si(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Se){const a=je;let c,l=!1,u=!1;if(ze(e)?(c=()=>e.value,l=Xr(e)):os(e)?(c=()=>e,s=!0):z(e)?(u=!0,l=e.some(E=>os(E)||Xr(E)),c=()=>e.map(E=>{if(ze(E))return E.value;if(os(E))return Jn(E);if(te(E))return cn(E,a,2)})):te(e)?t?c=()=>cn(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),At(e,a,3,[f])}:c=mt,t&&s){const E=c;c=()=>Jn(E())}let h,f=E=>{h=v.onStop=()=>{cn(E,a,4)}},d;if(Js)if(f=mt,t?n&&At(t,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const E=qg();d=E.__watcherHandles||(E.__watcherHandles=[])}else return mt;let m=u?new Array(e.length).fill(no):no;const w=()=>{if(v.active)if(t){const E=v.run();(s||l||(u?E.some((C,k)=>Ys(C,m[k])):Ys(E,m)))&&(h&&h(),At(t,a,3,[E,m===no?void 0:u&&m[0]===no?[]:m,f]),m=E)}else v.run()};w.allowRecurse=!!t;let T;r==="sync"?T=w:r==="post"?T=()=>Ye(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),T=()=>da(w));const v=new Ci(c,T);t?n?w():m=v.run():r==="post"?Ye(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&Xl(a.scope.effects,v)};return d&&d.push(g),g}function RE(e,t,n){const s=this.proxy,r=oe(e)?e.includes(".")?og(s,e):()=>s[e]:e.bind(s,s);let i;te(t)?i=t:(i=t.handler,n=t);const o=je;Ln(this);const a=Si(r,i.bind(s),n);return o?Ln(o):In(),a}function og(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Jn(e,t){if(!Ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ze(e))Jn(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)Jn(e[n],t);else if(Is(e)||Us(e))e.forEach(n=>{Jn(n,t)});else if(Pp(e))for(const n in e)Jn(e[n],t);return e}function pu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ki(()=>{e.isMounted=!0}),wa(()=>{e.isUnmounting=!0}),e}const Mt=[Function,Array],DE={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},setup(e,{slots:t}){const n=Un(),s=pu();let r;return()=>{const i=t.default&&ma(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==at){o=w;break}}const a=me(e),{mode:c}=a;if(s.isLeaving)return ac(o);const l=hf(o);if(!l)return ac(o);const u=Xs(l,a,s,n);gs(l,u);const h=n.subTree,f=h&&hf(h);let d=!1;const{getTransitionKey:m}=l.type;if(m){const w=m();r===void 0?r=w:w!==r&&(r=w,d=!0)}if(f&&f.type!==at&&(!Qt(l,f)||d)){const w=Xs(f,a,s,n);if(gs(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ac(o);c==="in-out"&&l.type!==at&&(w.delayLeave=(T,v,g)=>{const E=ag(s,f);E[String(f.key)]=f,T._leaveCb=()=>{v(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},gu=DE;function ag(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Xs(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:m,onBeforeAppear:w,onAppear:T,onAfterAppear:v,onAppearCancelled:g}=t,E=String(e.key),C=ag(n,e),k=(b,M)=>{b&&At(b,s,9,M)},V=(b,M)=>{const F=M[1];k(b,M),z(b)?b.every(P=>P.length<=1)&&F():b.length<=1&&F()},N={mode:i,persisted:o,beforeEnter(b){let M=a;if(!n.isMounted)if(r)M=w||a;else return;b._leaveCb&&b._leaveCb(!0);const F=C[E];F&&Qt(e,F)&&F.el._leaveCb&&F.el._leaveCb(),k(M,[b])},enter(b){let M=c,F=l,P=u;if(!n.isMounted)if(r)M=T||c,F=v||l,P=g||u;else return;let R=!1;const H=b._enterCb=B=>{R||(R=!0,B?k(P,[b]):k(F,[b]),N.delayedLeave&&N.delayedLeave(),b._enterCb=void 0)};M?V(M,[b,H]):H()},leave(b,M){const F=String(e.key);if(b._enterCb&&b._enterCb(!0),n.isUnmounting)return M();k(h,[b]);let P=!1;const R=b._leaveCb=H=>{P||(P=!0,M(),H?k(m,[b]):k(d,[b]),b._leaveCb=void 0,C[F]===e&&delete C[F])};C[F]=e,f?V(f,[b,R]):R()},clone(b){return Xs(b,t,n,s)}};return N}function ac(e){if(Ai(e))return e=en(e),e.children=null,e}function hf(e){return Ai(e)?e.children?e.children[0]:void 0:e}function gs(e,t){e.shapeFlag&6&&e.component?gs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ma(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Je?(o.patchFlag&128&&r++,s=s.concat(ma(o.children,t,a))):(t||o.type!==at)&&s.push(a!=null?en(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ii(e){return te(e)?{setup:e,name:e.name}:e}const cs=e=>!!e.type.__asyncLoader;function OE(e){te(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=e;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=t().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((w,T)=>{a(m,()=>w(h()),()=>T(m),u+1)});throw m}).then(m=>d!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),l=m,m)))};return Ii({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=je;if(l)return()=>cc(l,d);const m=g=>{c=null,ks(g,d,13,!s)};if(o&&d.suspense||Js)return f().then(g=>()=>cc(g,d)).catch(g=>(m(g),()=>s?Re(s,{error:g}):null));const w=Lr(!1),T=Lr(),v=Lr(!!r);return r&&setTimeout(()=>{v.value=!1},r),i!=null&&setTimeout(()=>{if(!w.value&&!T.value){const g=new Error(`Async component timed out after ${i}ms.`);m(g),T.value=g}},i),f().then(()=>{w.value=!0,d.parent&&Ai(d.parent.vnode)&&da(d.parent.update)}).catch(g=>{m(g),T.value=g}),()=>{if(w.value&&l)return cc(l,d);if(T.value&&s)return Re(s,{error:T.value});if(n&&!v.value)return Re(n)}}})}function cc(e,t){const{ref:n,props:s,children:r,ce:i}=t.vnode,o=Re(e,s,r);return o.ref=n,o.ce=i,delete t.vnode.ce,o}const Ai=e=>e.type.__isKeepAlive,PE={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Un(),s=n.ctx;if(!s.renderer)return()=>{const g=t.default&&t.default();return g&&g.length===1?g[0]:g};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(g,E,C,k,V)=>{const N=g.component;l(g,E,C,0,a),c(N.vnode,g,E,C,N,a,k,g.slotScopeIds,V),Ye(()=>{N.isDeactivated=!1,N.a&&qs(N.a);const b=g.props&&g.props.onVnodeMounted;b&&vt(b,N.parent,g)},a)},s.deactivate=g=>{const E=g.component;l(g,f,null,1,a),Ye(()=>{E.da&&qs(E.da);const C=g.props&&g.props.onVnodeUnmounted;C&&vt(C,E.parent,g),E.isDeactivated=!0},a)};function d(g){lc(g),u(g,n,a,!0)}function m(g){r.forEach((E,C)=>{const k=Jc(E.type);k&&(!g||!g(k))&&w(C)})}function w(g){const E=r.get(g);!o||E.type!==o.type?d(E):o&&lc(o),r.delete(g),i.delete(g)}zs(()=>[e.include,e.exclude],([g,E])=>{g&&m(C=>Rr(g,C)),E&&m(C=>!Rr(E,C))},{flush:"post",deep:!0});let T=null;const v=()=>{T!=null&&r.set(T,uc(n.subTree))};return ki(v),va(v),wa(()=>{r.forEach(g=>{const{subTree:E,suspense:C}=n,k=uc(E);if(g.type===k.type){lc(k);const V=k.component.da;V&&Ye(V,C);return}d(g)})}),()=>{if(T=null,!t.default)return null;const g=t.default(),E=g[0];if(g.length>1)return o=null,g;if(!Mn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let C=uc(E);const k=C.type,V=Jc(cs(C)?C.type.__asyncResolved||{}:k),{include:N,exclude:b,max:M}=e;if(N&&(!V||!Rr(N,V))||b&&V&&Rr(b,V))return o=C,E;const F=C.key==null?k:C.key,P=r.get(F);return C.el&&(C=en(C),E.shapeFlag&128&&(E.ssContent=C)),T=F,P?(C.el=P.el,C.component=P.component,C.transition&&gs(C,C.transition),C.shapeFlag|=512,i.delete(F),i.add(F)):(i.add(F),M&&i.size>parseInt(M,10)&&w(i.values().next().value)),C.shapeFlag|=256,o=C,sg(E.type)?E:C}}},ME=PE;function Rr(e,t){return z(e)?e.some(n=>Rr(n,t)):oe(e)?e.split(",").includes(t):e.test?e.test(t):!1}function cg(e,t){ug(e,"a",t)}function lg(e,t){ug(e,"da",t)}function ug(e,t,n=je){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ya(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ai(r.parent.vnode)&&LE(s,t,n,r),r=r.parent}}function LE(e,t,n,s){const r=ya(t,e,s,!0);Ea(()=>{Xl(s[t],r)},n)}function lc(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function uc(e){return e.shapeFlag&128?e.ssContent:e}function ya(e,t,n=je,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;pr(),Ln(n);const a=At(t,n,e,o);return In(),gr(),a});return s?r.unshift(i):r.push(i),i}}const mn=e=>(t,n=je)=>(!Js||e==="sp")&&ya(e,(...s)=>t(...s),n),hg=mn("bm"),ki=mn("m"),fg=mn("bu"),va=mn("u"),wa=mn("bum"),Ea=mn("um"),dg=mn("sp"),pg=mn("rtg"),gg=mn("rtc");function mg(e,t=je){ya("ec",e,t)}function FE(e,t){const n=Ze;if(n===null)return e;const s=_a(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=Se]=t[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&Jn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Wt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(pr(),At(c,n,8,[e.el,a,e,t]),gr())}}const mu="components",xE="directives";function $E(e,t){return yu(mu,e,!0,t)||e}const yg=Symbol();function VE(e){return oe(e)?yu(mu,e,!1)||e:e||yg}function BE(e){return yu(xE,e)}function yu(e,t,n=!0,s=!1){const r=Ze||je;if(r){const i=r.type;if(e===mu){const a=Jc(i,!1);if(a&&(a===t||a===et(t)||a===As(et(t))))return i}const o=ff(r[e]||i[e],t)||ff(r.appContext[e],t);return!o&&s?i:o}}function ff(e,t){return e&&(e[t]||e[et(t)]||e[As(et(t))])}function UE(e,t,n,s){let r;const i=n&&n[s];if(z(e)||oe(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(Ae(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=t(e[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function jE(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(z(s))for(let r=0;r<s.length;r++)e[s[r].name]=s[r].fn;else s&&(e[s.name]=s.key?(...r)=>{const i=s.fn(...r);return i&&(i.key=s.key),i}:s.fn)}return e}function qE(e,t,n={},s,r){if(Ze.isCE||Ze.parent&&cs(Ze.parent)&&Ze.parent.isCE)return t!=="default"&&(n.name=t),Re("slot",n,s&&s());let i=e[t];i&&i._c&&(i._d=!1),ba();const o=i&&vg(i(n)),a=bu(Je,{key:n.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function vg(e){return e.some(t=>Mn(t)?!(t.type===at||t.type===Je&&!vg(t.children)):!0)?e:null}function HE(e,t){const n={};for(const s in e)n[t&&/[A-Z]/.test(s)?`on:${s}`:js(s)]=e[s];return n}const qc=e=>e?Fg(e)?_a(e)||e.proxy:qc(e.parent):null,xr=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qc(e.parent),$root:e=>qc(e.root),$emit:e=>e.emit,$options:e=>vu(e),$forceUpdate:e=>e.f||(e.f=()=>da(e.update)),$nextTick:e=>e.n||(e.n=fa.bind(e.proxy)),$watch:e=>RE.bind(e)}),hc=(e,t)=>e!==Se&&!e.__isScriptSetup&&pe(e,t),Hc={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(hc(s,t))return o[t]=1,s[t];if(r!==Se&&pe(r,t))return o[t]=2,r[t];if((l=e.propsOptions[0])&&pe(l,t))return o[t]=3,i[t];if(n!==Se&&pe(n,t))return o[t]=4,n[t];Kc&&(o[t]=0)}}const u=xr[t];let h,f;if(u)return t==="$attrs"&&Dt(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Se&&pe(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,pe(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return hc(r,t)?(r[t]=n,!0):s!==Se&&pe(s,t)?(s[t]=n,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==Se&&pe(e,o)||hc(t,o)||(a=i[0])&&pe(a,o)||pe(s,o)||pe(xr,o)||pe(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},KE=we({},Hc,{get(e,t){if(t!==Symbol.unscopables)return Hc.get(e,t,e)},has(e,t){return t[0]!=="_"&&!e0(t)}});let Kc=!0;function zE(e){const t=vu(e),n=e.proxy,s=e.ctx;Kc=!1,t.beforeCreate&&df(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:w,deactivated:T,beforeDestroy:v,beforeUnmount:g,destroyed:E,unmounted:C,render:k,renderTracked:V,renderTriggered:N,errorCaptured:b,serverPrefetch:M,expose:F,inheritAttrs:P,components:R,directives:H,filters:B}=t;if(l&&WE(l,s,null,e.appContext.config.unwrapInjectedRef),o)for(const be in o){const ye=o[be];te(ye)&&(s[be]=ye.bind(n))}if(r){const be=r.call(n,n);Ae(be)&&(e.data=mr(be))}if(Kc=!0,i)for(const be in i){const ye=i[be],ft=te(ye)?ye.bind(n,n):te(ye.get)?ye.get.bind(n,n):mt,Kn=!te(ye)&&te(ye.set)?ye.set.bind(n):mt,Bt=It({get:ft,set:Kn});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:yt=>Bt.value=yt})}if(a)for(const be in a)wg(a[be],s,n,be);if(c){const be=te(c)?c.call(n):c;Reflect.ownKeys(be).forEach(ye=>{Fr(ye,be[ye])})}u&&df(u,e,"c");function ce(be,ye){z(ye)?ye.forEach(ft=>be(ft.bind(n))):ye&&be(ye.bind(n))}if(ce(hg,h),ce(ki,f),ce(fg,d),ce(va,m),ce(cg,w),ce(lg,T),ce(mg,b),ce(gg,V),ce(pg,N),ce(wa,g),ce(Ea,C),ce(dg,M),z(F))if(F.length){const be=e.exposed||(e.exposed={});F.forEach(ye=>{Object.defineProperty(be,ye,{get:()=>n[ye],set:ft=>n[ye]=ft})})}else e.exposed||(e.exposed={});k&&e.render===mt&&(e.render=k),P!=null&&(e.inheritAttrs=P),R&&(e.components=R),H&&(e.directives=H)}function WE(e,t,n=mt,s=!1){z(e)&&(e=zc(e));for(const r in e){const i=e[r];let o;Ae(i)?"default"in i?o=Jt(i.from||r,i.default,!0):o=Jt(i.from||r):o=Jt(i),ze(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function df(e,t,n){At(z(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function wg(e,t,n,s){const r=s.includes(".")?og(n,s):()=>n[s];if(oe(e)){const i=t[e];te(i)&&zs(r,i)}else if(te(e))zs(r,e.bind(n));else if(Ae(e))if(z(e))e.forEach(i=>wg(i,t,n,s));else{const i=te(e.handler)?e.handler.bind(n):t[e.handler];te(i)&&zs(r,i,e)}}function vu(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(l=>Ao(c,l,o,!0)),Ao(c,t,o)),Ae(t)&&i.set(t,c),c}function Ao(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Ao(e,i,n,!0),r&&r.forEach(o=>Ao(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=GE[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const GE={data:pf,props:Gn,emits:Gn,methods:Gn,computed:Gn,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Gn,directives:Gn,watch:YE,provide:pf,inject:QE};function pf(e,t){return t?e?function(){return we(te(e)?e.call(this,this):e,te(t)?t.call(this,this):t)}:t:e}function QE(e,t){return Gn(zc(e),zc(t))}function zc(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function dt(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?we(we(Object.create(null),e),t):t}function YE(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const s in t)n[s]=dt(e[s],t[s]);return n}function XE(e,t,n,s=!1){const r={},i={};So(i,Ta,1),e.propsDefaults=Object.create(null),Eg(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Wp(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function JE(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=me(r),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(pa(e.emitsOptions,f))continue;const d=t[f];if(c)if(pe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const m=et(f);r[m]=Wc(c,a,m,d,e,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{Eg(e,t,r,i)&&(l=!0);let u;for(const h in a)(!t||!pe(t,h)&&((u=St(h))===h||!pe(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Wc(c,a,h,void 0,e,!0)):delete r[h]);if(i!==a)for(const h in i)(!t||!pe(t,h))&&(delete i[h],l=!0)}l&&hn(e,"set","$attrs")}function Eg(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(rs(c))continue;const l=t[c];let u;r&&pe(r,u=et(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:pa(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=me(n),l=a||Se;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Wc(r,c,h,l[h],e,!pe(l,h))}}return o}function Wc(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=pe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ln(r),s=l[n]=c.call(null,t),In())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===St(n))&&(s=!0))}return s}function bg(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!te(e)){const u=h=>{c=!0;const[f,d]=bg(h,t,!0);we(o,f),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Ae(e)&&s.set(e,Bs),Bs;if(z(i))for(let u=0;u<i.length;u++){const h=et(i[u]);gf(h)&&(o[h]=Se)}else if(i)for(const u in i){const h=et(u);if(gf(h)){const f=i[u],d=o[h]=z(f)||te(f)?{type:f}:Object.assign({},f);if(d){const m=vf(Boolean,d.type),w=vf(String,d.type);d[0]=m>-1,d[1]=w<0||m<w,(m>-1||pe(d,"default"))&&a.push(h)}}}const l=[o,a];return Ae(e)&&s.set(e,l),l}function gf(e){return e[0]!=="$"}function mf(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function yf(e,t){return mf(e)===mf(t)}function vf(e,t){return z(t)?t.findIndex(n=>yf(n,e)):te(t)&&yf(t,e)?0:-1}const Tg=e=>e[0]==="_"||e==="$stable",wu=e=>z(e)?e.map(Ct):[Ct(e)],ZE=(e,t,n)=>{if(t._n)return t;const s=hu((...r)=>wu(t(...r)),n);return s._c=!1,s},_g=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Tg(r))continue;const i=e[r];if(te(i))t[r]=ZE(r,i,s);else if(i!=null){const o=wu(i);t[r]=()=>o}}},Cg=(e,t)=>{const n=wu(t);e.slots.default=()=>n},eb=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=me(t),So(t,"_",n)):_g(t,e.slots={})}else e.slots={},t&&Cg(e,t);So(e.slots,Ta,1)},tb=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=Se;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(we(r,t),!n&&a===1&&delete r._):(i=!t.$stable,_g(t,r)),o=t}else t&&(Cg(e,t),o={default:1});if(i)for(const a in r)!Tg(a)&&!(a in o)&&delete r[a]};function Sg(){return{app:null,config:{isNativeTag:yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nb=0;function sb(e,t){return function(s,r=null){te(s)||(s=Object.assign({},s)),r!=null&&!Ae(r)&&(r=null);const i=Sg(),o=new Set;let a=!1;const c=i.app={_uid:nb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Kg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Re(s,r);return f.appContext=i,u&&t?t(f,l):e(f,l,h),a=!0,c._container=l,l.__vue_app__=c,_a(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function ko(e,t,n,s,r=!1){if(z(e)){e.forEach((f,d)=>ko(f,t&&(z(t)?t[d]:t),n,s,r));return}if(cs(s)&&!r)return;const i=s.shapeFlag&4?_a(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(oe(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):ze(l)&&(l.value=null)),te(c))cn(c,a,12,[o,u]);else{const f=oe(c),d=ze(c);if(f||d){const m=()=>{if(e.f){const w=f?pe(h,c)?h[c]:u[c]:c.value;r?z(w)&&Xl(w,i):z(w)?w.includes(i)||w.push(i):f?(u[c]=[i],pe(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else f?(u[c]=o,pe(h,c)&&(h[c]=o)):d&&(c.value=o,e.k&&(u[e.k]=o))};o?(m.id=-1,Ye(m,n)):m()}}}let vn=!1;const so=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",ro=e=>e.nodeType===8;function rb(e){const{mt:t,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=e,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),Io(),g._vnode=v;return}vn=!1,h(g.firstChild,v,null,null,null),Io(),g._vnode=v,vn&&console.error("Hydration completed but contains mismatches.")},h=(v,g,E,C,k,V=!1)=>{const N=ro(v)&&v.data==="[",b=()=>w(v,g,E,C,k,N),{type:M,ref:F,shapeFlag:P,patchFlag:R}=g;let H=v.nodeType;g.el=v,R===-2&&(V=!1,g.dynamicChildren=null);let B=null;switch(M){case ms:H!==3?g.children===""?(c(g.el=r(""),o(v),v),B=v):B=b():(v.data!==g.children&&(vn=!0,v.data=g.children),B=i(v));break;case at:H!==8||N?B=b():B=i(v);break;case ls:if(N&&(v=i(v),H=v.nodeType),H===1||H===3){B=v;const fe=!g.children.length;for(let ce=0;ce<g.staticCount;ce++)fe&&(g.children+=B.nodeType===1?B.outerHTML:B.data),ce===g.staticCount-1&&(g.anchor=B),B=i(B);return N?i(B):B}else b();break;case Je:N?B=m(v,g,E,C,k,V):B=b();break;default:if(P&1)H!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?B=b():B=f(v,g,E,C,k,V);else if(P&6){g.slotScopeIds=k;const fe=o(v);if(t(g,fe,null,E,C,so(fe),V),B=N?T(v):i(v),B&&ro(B)&&B.data==="teleport end"&&(B=i(B)),cs(g)){let ce;N?(ce=Re(Je),ce.anchor=B?B.previousSibling:fe.lastChild):ce=v.nodeType===3?_u(""):Re("div"),ce.el=v,g.component.subTree=ce}}else P&64?H!==8?B=b():B=g.type.hydrate(v,g,E,C,k,V,e,d):P&128&&(B=g.type.hydrate(v,g,E,C,so(o(v)),k,V,e,h))}return F!=null&&ko(F,null,C,g),B},f=(v,g,E,C,k,V)=>{V=V||!!g.dynamicChildren;const{type:N,props:b,patchFlag:M,shapeFlag:F,dirs:P}=g,R=N==="input"&&P||N==="option";if(R||M!==-1){if(P&&Wt(g,null,E,"created"),b)if(R||!V||M&48)for(const B in b)(R&&B.endsWith("value")||Ss(B)&&!rs(B))&&s(v,B,null,b[B],!1,void 0,E);else b.onClick&&s(v,"onClick",null,b.onClick,!1,void 0,E);let H;if((H=b&&b.onVnodeBeforeMount)&&vt(H,E,g),P&&Wt(g,null,E,"beforeMount"),((H=b&&b.onVnodeMounted)||P)&&rg(()=>{H&&vt(H,E,g),P&&Wt(g,null,E,"mounted")},C),F&16&&!(b&&(b.innerHTML||b.textContent))){let B=d(v.firstChild,g,v,E,C,k,V);for(;B;){vn=!0;const fe=B;B=B.nextSibling,a(fe)}}else F&8&&v.textContent!==g.children&&(vn=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,E,C,k,V,N)=>{N=N||!!g.dynamicChildren;const b=g.children,M=b.length;for(let F=0;F<M;F++){const P=N?b[F]:b[F]=Ct(b[F]);if(v)v=h(v,P,C,k,V,N);else{if(P.type===ms&&!P.children)continue;vn=!0,n(null,P,E,null,C,k,so(E),V)}}return v},m=(v,g,E,C,k,V)=>{const{slotScopeIds:N}=g;N&&(k=k?k.concat(N):N);const b=o(v),M=d(i(v),g,b,E,C,k,V);return M&&ro(M)&&M.data==="]"?i(g.anchor=M):(vn=!0,c(g.anchor=l("]"),b,M),M)},w=(v,g,E,C,k,V)=>{if(vn=!0,g.el=null,V){const M=T(v);for(;;){const F=i(v);if(F&&F!==M)a(F);else break}}const N=i(v),b=o(v);return a(v),n(null,g,b,N,E,C,so(b),k),N},T=v=>{let g=0;for(;v;)if(v=i(v),v&&ro(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return i(v);g--}return v};return[u,h]}const Ye=rg;function Ig(e){return kg(e)}function Ag(e){return kg(e,rb)}function kg(e,t){const n=b0();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=mt,insertStaticContent:m}=e,w=(p,y,_,S=null,A=null,$=null,q=!1,x=null,U=!!y.dynamicChildren)=>{if(p===y)return;p&&!Qt(p,y)&&(S=j(p),yt(p,A,$,!0),p=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:D,ref:Z,shapeFlag:G}=y;switch(D){case ms:T(p,y,_,S);break;case at:v(p,y,_,S);break;case ls:p==null&&g(y,_,S,q);break;case Je:R(p,y,_,S,A,$,q,x,U);break;default:G&1?k(p,y,_,S,A,$,q,x,U):G&6?H(p,y,_,S,A,$,q,x,U):(G&64||G&128)&&D.process(p,y,_,S,A,$,q,x,U,de)}Z!=null&&A&&ko(Z,p&&p.ref,$,y||p,!y)},T=(p,y,_,S)=>{if(p==null)s(y.el=a(y.children),_,S);else{const A=y.el=p.el;y.children!==p.children&&l(A,y.children)}},v=(p,y,_,S)=>{p==null?s(y.el=c(y.children||""),_,S):y.el=p.el},g=(p,y,_,S)=>{[p.el,p.anchor]=m(p.children,y,_,S,p.el,p.anchor)},E=({el:p,anchor:y},_,S)=>{let A;for(;p&&p!==y;)A=f(p),s(p,_,S),p=A;s(y,_,S)},C=({el:p,anchor:y})=>{let _;for(;p&&p!==y;)_=f(p),r(p),p=_;r(y)},k=(p,y,_,S,A,$,q,x,U)=>{q=q||y.type==="svg",p==null?V(y,_,S,A,$,q,x,U):M(p,y,A,$,q,x,U)},V=(p,y,_,S,A,$,q,x)=>{let U,D;const{type:Z,props:G,shapeFlag:ee,transition:se,dirs:ue}=p;if(U=p.el=o(p.type,$,G&&G.is,G),ee&8?u(U,p.children):ee&16&&b(p.children,U,null,S,A,$&&Z!=="foreignObject",q,x),ue&&Wt(p,null,S,"created"),G){for(const Ie in G)Ie!=="value"&&!rs(Ie)&&i(U,Ie,null,G[Ie],$,p.children,S,A,K);"value"in G&&i(U,"value",null,G.value),(D=G.onVnodeBeforeMount)&&vt(D,S,p)}N(U,p,p.scopeId,q,S),ue&&Wt(p,null,S,"beforeMount");const ke=(!A||A&&!A.pendingBranch)&&se&&!se.persisted;ke&&se.beforeEnter(U),s(U,y,_),((D=G&&G.onVnodeMounted)||ke||ue)&&Ye(()=>{D&&vt(D,S,p),ke&&se.enter(U),ue&&Wt(p,null,S,"mounted")},A)},N=(p,y,_,S,A)=>{if(_&&d(p,_),S)for(let $=0;$<S.length;$++)d(p,S[$]);if(A){let $=A.subTree;if(y===$){const q=A.vnode;N(p,q,q.scopeId,q.slotScopeIds,A.parent)}}},b=(p,y,_,S,A,$,q,x,U=0)=>{for(let D=U;D<p.length;D++){const Z=p[D]=x?Tn(p[D]):Ct(p[D]);w(null,Z,y,_,S,A,$,q,x)}},M=(p,y,_,S,A,$,q)=>{const x=y.el=p.el;let{patchFlag:U,dynamicChildren:D,dirs:Z}=y;U|=p.patchFlag&16;const G=p.props||Se,ee=y.props||Se;let se;_&&zn(_,!1),(se=ee.onVnodeBeforeUpdate)&&vt(se,_,y,p),Z&&Wt(y,p,_,"beforeUpdate"),_&&zn(_,!0);const ue=A&&y.type!=="foreignObject";if(D?F(p.dynamicChildren,D,x,_,S,ue,$):q||ye(p,y,x,null,_,S,ue,$,!1),U>0){if(U&16)P(x,y,G,ee,_,S,A);else if(U&2&&G.class!==ee.class&&i(x,"class",null,ee.class,A),U&4&&i(x,"style",G.style,ee.style,A),U&8){const ke=y.dynamicProps;for(let Ie=0;Ie<ke.length;Ie++){const Fe=ke[Ie],Ut=G[Fe],Ds=ee[Fe];(Ds!==Ut||Fe==="value")&&i(x,Fe,Ut,Ds,A,p.children,_,S,K)}}U&1&&p.children!==y.children&&u(x,y.children)}else!q&&D==null&&P(x,y,G,ee,_,S,A);((se=ee.onVnodeUpdated)||Z)&&Ye(()=>{se&&vt(se,_,y,p),Z&&Wt(y,p,_,"updated")},S)},F=(p,y,_,S,A,$,q)=>{for(let x=0;x<y.length;x++){const U=p[x],D=y[x],Z=U.el&&(U.type===Je||!Qt(U,D)||U.shapeFlag&70)?h(U.el):_;w(U,D,Z,null,S,A,$,q,!0)}},P=(p,y,_,S,A,$,q)=>{if(_!==S){if(_!==Se)for(const x in _)!rs(x)&&!(x in S)&&i(p,x,_[x],null,q,y.children,A,$,K);for(const x in S){if(rs(x))continue;const U=S[x],D=_[x];U!==D&&x!=="value"&&i(p,x,D,U,q,y.children,A,$,K)}"value"in S&&i(p,"value",_.value,S.value)}},R=(p,y,_,S,A,$,q,x,U)=>{const D=y.el=p?p.el:a(""),Z=y.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:ee,slotScopeIds:se}=y;se&&(x=x?x.concat(se):se),p==null?(s(D,_,S),s(Z,_,S),b(y.children,_,Z,A,$,q,x,U)):G>0&&G&64&&ee&&p.dynamicChildren?(F(p.dynamicChildren,ee,_,A,$,q,x),(y.key!=null||A&&y===A.subTree)&&Eu(p,y,!0)):ye(p,y,_,Z,A,$,q,x,U)},H=(p,y,_,S,A,$,q,x,U)=>{y.slotScopeIds=x,p==null?y.shapeFlag&512?A.ctx.activate(y,_,S,q,U):B(y,_,S,A,$,q,U):fe(p,y,U)},B=(p,y,_,S,A,$,q)=>{const x=p.component=Lg(p,S,A);if(Ai(p)&&(x.ctx.renderer=de),xg(x),x.asyncDep){if(A&&A.registerDep(x,ce),!p.el){const U=x.subTree=Re(at);v(null,U,y,_)}return}ce(x,p,y,_,A,$,q)},fe=(p,y,_)=>{const S=y.component=p.component;if(bE(p,y,_))if(S.asyncDep&&!S.asyncResolved){be(S,y,_);return}else S.next=y,fE(S.update),S.update();else y.el=p.el,S.vnode=y},ce=(p,y,_,S,A,$,q)=>{const x=()=>{if(p.isMounted){let{next:Z,bu:G,u:ee,parent:se,vnode:ue}=p,ke=Z,Ie;zn(p,!1),Z?(Z.el=ue.el,be(p,Z,q)):Z=ue,G&&qs(G),(Ie=Z.props&&Z.props.onVnodeBeforeUpdate)&&vt(Ie,se,Z,ue),zn(p,!0);const Fe=vo(p),Ut=p.subTree;p.subTree=Fe,w(Ut,Fe,h(Ut.el),j(Ut),p,A,$),Z.el=Fe.el,ke===null&&fu(p,Fe.el),ee&&Ye(ee,A),(Ie=Z.props&&Z.props.onVnodeUpdated)&&Ye(()=>vt(Ie,se,Z,ue),A)}else{let Z;const{el:G,props:ee}=y,{bm:se,m:ue,parent:ke}=p,Ie=cs(y);if(zn(p,!1),se&&qs(se),!Ie&&(Z=ee&&ee.onVnodeBeforeMount)&&vt(Z,ke,y),zn(p,!0),G&&le){const Fe=()=>{p.subTree=vo(p),le(G,p.subTree,p,A,null)};Ie?y.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=vo(p);w(null,Fe,_,S,p,A,$),y.el=Fe.el}if(ue&&Ye(ue,A),!Ie&&(Z=ee&&ee.onVnodeMounted)){const Fe=y;Ye(()=>vt(Z,ke,Fe),A)}(y.shapeFlag&256||ke&&cs(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&Ye(p.a,A),p.isMounted=!0,y=_=S=null}},U=p.effect=new Ci(x,()=>da(D),p.scope),D=p.update=()=>U.run();D.id=p.uid,zn(p,!0),D()},be=(p,y,_)=>{y.component=p;const S=p.vnode.props;p.vnode=y,p.next=null,JE(p,y.props,S,_),tb(p,y.children,_),pr(),cf(),gr()},ye=(p,y,_,S,A,$,q,x,U=!1)=>{const D=p&&p.children,Z=p?p.shapeFlag:0,G=y.children,{patchFlag:ee,shapeFlag:se}=y;if(ee>0){if(ee&128){Kn(D,G,_,S,A,$,q,x,U);return}else if(ee&256){ft(D,G,_,S,A,$,q,x,U);return}}se&8?(Z&16&&K(D,A,$),G!==D&&u(_,G)):Z&16?se&16?Kn(D,G,_,S,A,$,q,x,U):K(D,A,$,!0):(Z&8&&u(_,""),se&16&&b(G,_,S,A,$,q,x,U))},ft=(p,y,_,S,A,$,q,x,U)=>{p=p||Bs,y=y||Bs;const D=p.length,Z=y.length,G=Math.min(D,Z);let ee;for(ee=0;ee<G;ee++){const se=y[ee]=U?Tn(y[ee]):Ct(y[ee]);w(p[ee],se,_,null,A,$,q,x,U)}D>Z?K(p,A,$,!0,!1,G):b(y,_,S,A,$,q,x,U,G)},Kn=(p,y,_,S,A,$,q,x,U)=>{let D=0;const Z=y.length;let G=p.length-1,ee=Z-1;for(;D<=G&&D<=ee;){const se=p[D],ue=y[D]=U?Tn(y[D]):Ct(y[D]);if(Qt(se,ue))w(se,ue,_,null,A,$,q,x,U);else break;D++}for(;D<=G&&D<=ee;){const se=p[G],ue=y[ee]=U?Tn(y[ee]):Ct(y[ee]);if(Qt(se,ue))w(se,ue,_,null,A,$,q,x,U);else break;G--,ee--}if(D>G){if(D<=ee){const se=ee+1,ue=se<Z?y[se].el:S;for(;D<=ee;)w(null,y[D]=U?Tn(y[D]):Ct(y[D]),_,ue,A,$,q,x,U),D++}}else if(D>ee)for(;D<=G;)yt(p[D],A,$,!0),D++;else{const se=D,ue=D,ke=new Map;for(D=ue;D<=ee;D++){const Tt=y[D]=U?Tn(y[D]):Ct(y[D]);Tt.key!=null&&ke.set(Tt.key,D)}let Ie,Fe=0;const Ut=ee-ue+1;let Ds=!1,Qh=0;const _r=new Array(Ut);for(D=0;D<Ut;D++)_r[D]=0;for(D=se;D<=G;D++){const Tt=p[D];if(Fe>=Ut){yt(Tt,A,$,!0);continue}let zt;if(Tt.key!=null)zt=ke.get(Tt.key);else for(Ie=ue;Ie<=ee;Ie++)if(_r[Ie-ue]===0&&Qt(Tt,y[Ie])){zt=Ie;break}zt===void 0?yt(Tt,A,$,!0):(_r[zt-ue]=D+1,zt>=Qh?Qh=zt:Ds=!0,w(Tt,y[zt],_,null,A,$,q,x,U),Fe++)}const Yh=Ds?ib(_r):Bs;for(Ie=Yh.length-1,D=Ut-1;D>=0;D--){const Tt=ue+D,zt=y[Tt],Xh=Tt+1<Z?y[Tt+1].el:S;_r[D]===0?w(null,zt,_,Xh,A,$,q,x,U):Ds&&(Ie<0||D!==Yh[Ie]?Bt(zt,_,Xh,2):Ie--)}}},Bt=(p,y,_,S,A=null)=>{const{el:$,type:q,transition:x,children:U,shapeFlag:D}=p;if(D&6){Bt(p.component.subTree,y,_,S);return}if(D&128){p.suspense.move(y,_,S);return}if(D&64){q.move(p,y,_,de);return}if(q===Je){s($,y,_);for(let G=0;G<U.length;G++)Bt(U[G],y,_,S);s(p.anchor,y,_);return}if(q===ls){E(p,y,_);return}if(S!==2&&D&1&&x)if(S===0)x.beforeEnter($),s($,y,_),Ye(()=>x.enter($),A);else{const{leave:G,delayLeave:ee,afterLeave:se}=x,ue=()=>s($,y,_),ke=()=>{G($,()=>{ue(),se&&se()})};ee?ee($,ue,ke):ke()}else s($,y,_)},yt=(p,y,_,S=!1,A=!1)=>{const{type:$,props:q,ref:x,children:U,dynamicChildren:D,shapeFlag:Z,patchFlag:G,dirs:ee}=p;if(x!=null&&ko(x,null,_,p,!0),Z&256){y.ctx.deactivate(p);return}const se=Z&1&&ee,ue=!cs(p);let ke;if(ue&&(ke=q&&q.onVnodeBeforeUnmount)&&vt(ke,y,p),Z&6)I(p.component,_,S);else{if(Z&128){p.suspense.unmount(_,S);return}se&&Wt(p,null,y,"beforeUnmount"),Z&64?p.type.remove(p,y,_,A,de,S):D&&($!==Je||G>0&&G&64)?K(D,y,_,!1,!0):($===Je&&G&384||!A&&Z&16)&&K(U,y,_),S&&Rs(p)}(ue&&(ke=q&&q.onVnodeUnmounted)||se)&&Ye(()=>{ke&&vt(ke,y,p),se&&Wt(p,null,y,"unmounted")},_)},Rs=p=>{const{type:y,el:_,anchor:S,transition:A}=p;if(y===Je){Qi(_,S);return}if(y===ls){C(p);return}const $=()=>{r(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:q,delayLeave:x}=A,U=()=>q(_,$);x?x(p.el,$,U):U()}else $()},Qi=(p,y)=>{let _;for(;p!==y;)_=f(p),r(p),p=_;r(y)},I=(p,y,_)=>{const{bum:S,scope:A,update:$,subTree:q,um:x}=p;S&&qs(S),A.stop(),$&&($.active=!1,yt(q,p,y,_)),x&&Ye(x,y),Ye(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},K=(p,y,_,S=!1,A=!1,$=0)=>{for(let q=$;q<p.length;q++)yt(p[q],y,_,S,A)},j=p=>p.shapeFlag&6?j(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),X=(p,y,_)=>{p==null?y._vnode&&yt(y._vnode,null,null,!0):w(y._vnode||null,p,y,null,null,null,_),cf(),Io(),y._vnode=p},de={p:w,um:yt,m:Bt,r:Rs,mt:B,mc:b,pc:ye,pbc:F,n:j,o:e};let Pe,le;return t&&([Pe,le]=t(de)),{render:X,hydrate:Pe,createApp:sb(X,Pe)}}function zn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Eu(e,t,n=!1){const s=e.children,r=t.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Tn(r[i]),a.el=o.el),n||Eu(o,a)),a.type===ms&&(a.el=o.el)}}function ib(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(r=n[n.length-1],e[r]<l){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const ob=e=>e.__isTeleport,$r=e=>e&&(e.disabled||e.disabled===""),wf=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Gc=(e,t)=>{const n=e&&e.to;return oe(n)?t?t(n):null:n},ab={__isTeleport:!0,process(e,t,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:m,createText:w,createComment:T}}=l,v=$r(t.props);let{shapeFlag:g,children:E,dynamicChildren:C}=t;if(e==null){const k=t.el=w(""),V=t.anchor=w("");d(k,n,s),d(V,n,s);const N=t.target=Gc(t.props,m),b=t.targetAnchor=w("");N&&(d(b,N),o=o||wf(N));const M=(F,P)=>{g&16&&u(E,F,P,r,i,o,a,c)};v?M(n,V):N&&M(N,b)}else{t.el=e.el;const k=t.anchor=e.anchor,V=t.target=e.target,N=t.targetAnchor=e.targetAnchor,b=$r(e.props),M=b?n:V,F=b?k:N;if(o=o||wf(V),C?(f(e.dynamicChildren,C,M,r,i,o,a),Eu(e,t,!0)):c||h(e,t,M,F,r,i,o,a,!1),v)b||io(t,n,k,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const P=t.target=Gc(t.props,m);P&&io(t,P,null,l,0)}else b&&io(t,V,N,l,1)}Ng(t)},remove(e,t,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=e;if(h&&i(u),(o||!$r(f))&&(i(l),a&16))for(let d=0;d<c.length;d++){const m=c[d];r(m,t,n,!0,!!m.dynamicChildren)}},move:io,hydrate:cb};function io(e,t,n,{o:{insert:s},m:r},i=2){i===0&&s(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,h=i===2;if(h&&s(o,t,n),(!h||$r(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],t,n,2);h&&s(a,t,n)}function cb(e,t,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=Gc(t.props,c);if(u){const h=u._lpa||u.firstChild;if(t.shapeFlag&16)if($r(t.props))t.anchor=l(o(e),t,a(e),n,s,r,i),t.targetAnchor=h;else{t.anchor=o(e);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(h,t,u,n,s,r,i)}Ng(t)}return t.anchor&&o(t.anchor)}const lb=ab;function Ng(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Je=Symbol(void 0),ms=Symbol(void 0),at=Symbol(void 0),ls=Symbol(void 0),Vr=[];let wt=null;function ba(e=!1){Vr.push(wt=e?null:[])}function Rg(){Vr.pop(),wt=Vr[Vr.length-1]||null}let ys=1;function Qc(e){ys+=e}function Dg(e){return e.dynamicChildren=ys>0?wt||Bs:null,Rg(),ys>0&&wt&&wt.push(e),e}function ub(e,t,n,s,r,i){return Dg(Tu(e,t,n,s,r,i,!0))}function bu(e,t,n,s,r){return Dg(Re(e,t,n,s,r,!0))}function Mn(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}function hb(e){}const Ta="__vInternal",Og=({key:e})=>e??null,wo=({ref:e,ref_key:t,ref_for:n})=>e!=null?oe(e)||ze(e)||te(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function Tu(e,t=null,n=null,s=0,r=null,i=e===Je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Og(t),ref:t&&wo(t),scopeId:ga,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Cu(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),ys>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const Re=fb;function fb(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===yg)&&(e=at),Mn(e)){const a=en(e,t,!0);return n&&Cu(a,n),ys>0&&!i&&wt&&(a.shapeFlag&6?wt[wt.indexOf(e)]=a:wt.push(a)),a.patchFlag|=-2,a}if(Eb(e)&&(e=e.__vccOpts),t){t=Pg(t);let{class:a,style:c}=t;a&&!oe(a)&&(t.class=Ti(a)),Ae(c)&&(ru(c)&&!z(c)&&(c=we({},c)),t.style=bi(c))}const o=oe(e)?1:sg(e)?128:ob(e)?64:Ae(e)?4:te(e)?2:0;return Tu(e,t,n,s,r,o,i,!0)}function Pg(e){return e?ru(e)||Ta in e?we({},e):e:null}function en(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?Mg(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Og(a),ref:t&&t.ref?n&&r?z(r)?r.concat(wo(t)):[r,wo(t)]:wo(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Je?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function _u(e=" ",t=0){return Re(ms,null,e,t)}function db(e,t){const n=Re(ls,null,e);return n.staticCount=t,n}function pb(e="",t=!1){return t?(ba(),bu(at,null,e)):Re(at,null,e)}function Ct(e){return e==null||typeof e=="boolean"?Re(at):z(e)?Re(Je,null,e.slice()):typeof e=="object"?Tn(e):Re(ms,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:en(e)}function Cu(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Cu(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Ta in t)?t._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),s&64?(n=16,t=[_u(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mg(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ti([t.class,s.class]));else if(r==="style")t.style=bi([t.style,s.style]);else if(Ss(r)){const i=t[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function vt(e,t,n,s=null){At(e,t,7,[n,s])}const gb=Sg();let mb=0;function Lg(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||gb,i={uid:mb++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new eu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bg(s,r),emitsOptions:ng(s,r),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=pE.bind(null,i),e.ce&&e.ce(i),i}let je=null;const Un=()=>je||Ze,Ln=e=>{je=e,e.scope.on()},In=()=>{je&&je.scope.off(),je=null};function Fg(e){return e.vnode.shapeFlag&4}let Js=!1;function xg(e,t=!1){Js=t;const{props:n,children:s}=e.vnode,r=Fg(e);XE(e,n,r,t),eb(e,s);const i=r?yb(e,t):void 0;return Js=!1,i}function yb(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=iu(new Proxy(e.ctx,Hc));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Bg(e):null;Ln(e),pr();const i=cn(s,e,0,[e.props,r]);if(gr(),In(),Jl(i)){if(i.then(In,In),t)return i.then(o=>{Yc(e,o,t)}).catch(o=>{ks(o,e,0)});e.asyncDep=i}else Yc(e,i,t)}else Vg(e,t)}function Yc(e,t,n){te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)&&(e.setupState=cu(t)),Vg(e,n)}let No,Xc;function $g(e){No=e,Xc=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,KE))}}const vb=()=>!No;function Vg(e,t,n){const s=e.type;if(!e.render){if(!t&&No&&!s.render){const r=s.template||vu(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=we(we({isCustomElement:i,delimiters:a},o),c);s.render=No(r,l)}}e.render=s.render||mt,Xc&&Xc(e)}Ln(e),pr(),zE(e),gr(),In()}function wb(e){return new Proxy(e.attrs,{get(t,n){return Dt(e,"get","$attrs"),t[n]}})}function Bg(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=wb(e))},slots:e.slots,emit:e.emit,expose:t}}function _a(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(cu(iu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xr)return xr[n](e)},has(t,n){return n in t||n in xr}}))}function Jc(e,t=!0){return te(e)?e.displayName||e.name:e.name||t&&e.__name}function Eb(e){return te(e)&&"__vccOpts"in e}const It=(e,t)=>cE(e,t,Js);function bb(){return null}function Tb(){return null}function _b(e){}function Cb(e,t){return null}function Sb(){return Ug().slots}function Ib(){return Ug().attrs}function Ug(){const e=Un();return e.setupContext||(e.setupContext=Bg(e))}function Ab(e,t){const n=z(e)?e.reduce((s,r)=>(s[r]={},s),{}):e;for(const s in t){const r=n[s];r?z(r)||te(r)?n[s]={type:r,default:t[s]}:r.default=t[s]:r===null&&(n[s]={default:t[s]})}return n}function kb(e,t){const n={};for(const s in e)t.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>e[s]});return n}function Nb(e){const t=Un();let n=e();return In(),Jl(n)&&(n=n.catch(s=>{throw Ln(t),s})),[n,()=>Ln(t)]}function Ca(e,t,n){const s=arguments.length;return s===2?Ae(t)&&!z(t)?Mn(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Mn(n)&&(n=[n]),Re(e,t,n))}const jg=Symbol(""),qg=()=>Jt(jg);function Rb(){}function Db(e,t,n,s){const r=n[s];if(r&&Hg(r,e))return r;const i=t();return i.memo=e.slice(),n[s]=i}function Hg(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let s=0;s<n.length;s++)if(Ys(n[s],t[s]))return!1;return ys>0&&wt&&wt.push(e),!0}const Kg="3.2.45",Ob={createComponentInstance:Lg,setupComponent:xg,renderComponentRoot:vo,setCurrentRenderingInstance:ti,isVNode:Mn,normalizeVNode:Ct},Pb=Ob,Mb=null,Lb=null,Fb="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,Ef=Xn&&Xn.createElement("template"),xb={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Xn.createElementNS(Fb,e):Xn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ef.innerHTML=s?`<svg>${e}</svg>`:e;const a=Ef.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $b(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vb(e,t,n){const s=e.style,r=oe(n);if(n&&!r){for(const i in n)Zc(s,i,n[i]);if(t&&!oe(t))for(const i in t)n[i]==null&&Zc(s,i,"")}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const bf=/\s*!important$/;function Zc(e,t,n){if(z(n))n.forEach(s=>Zc(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Bb(e,t);bf.test(n)?e.setProperty(St(s),n.replace(bf,""),"important"):e[s]=n}}const Tf=["Webkit","Moz","ms"],fc={};function Bb(e,t){const n=fc[t];if(n)return n;let s=et(t);if(s!=="filter"&&s in e)return fc[t]=s;s=As(s);for(let r=0;r<Tf.length;r++){const i=Tf[r]+s;if(i in e)return fc[t]=i}return t}const _f="http://www.w3.org/1999/xlink";function Ub(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_f,t.slice(6,t.length)):e.setAttributeNS(_f,t,n);else{const i=f0(t);n==null||i&&!Rp(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function jb(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Rp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function on(e,t,n,s){e.addEventListener(t,n,s)}function qb(e,t,n,s){e.removeEventListener(t,n,s)}function Hb(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=Kb(t);if(s){const l=i[t]=Gb(s,r);on(e,a,l,c)}else o&&(qb(e,a,o,c),i[t]=void 0)}}const Cf=/(?:Once|Passive|Capture)$/;function Kb(e){let t;if(Cf.test(e)){t={};let s;for(;s=e.match(Cf);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let dc=0;const zb=Promise.resolve(),Wb=()=>dc||(zb.then(()=>dc=0),dc=Date.now());function Gb(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(Qb(s,n.value),t,5,[s])};return n.value=e,n.attached=Wb(),n}function Qb(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Sf=/^on[a-z]/,Yb=(e,t,n,s,r=!1,i,o,a,c)=>{t==="class"?$b(e,s,r):t==="style"?Vb(e,n,s):Ss(t)?Yl(t)||Hb(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xb(e,t,s,r))?jb(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ub(e,t,s,r))};function Xb(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Sf.test(t)&&te(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Sf.test(t)&&oe(n)?!1:t in e}function zg(e,t){const n=Ii(e);class s extends Sa{constructor(i){super(n,i,t)}}return s.def=n,s}const Jb=e=>zg(e,am),Zb=typeof HTMLElement<"u"?HTMLElement:class{};class Sa extends Zb{constructor(t,n={},s){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,fa(()=>{this._connected||(nl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const t=(s,r=!1)=>{const{props:i,styles:o}=s;let a;if(i&&!z(i))for(const c in i){const l=i[c];(l===Number||l&&l.type===Number)&&(c in this._props&&(this._props[c]=un(this._props[c])),(a||(a=Object.create(null)))[et(c)]=!0)}this._numberProps=a,r&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>t(s,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,s=z(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map(et))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(i){this._setProp(r,i)}})}_setAttr(t){let n=this.getAttribute(t);const s=et(t);this._numberProps&&this._numberProps[s]&&(n=un(n)),this._setProp(s,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,s=!0,r=!0){n!==this._props[t]&&(this._props[t]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(St(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(St(t),n+""):n||this.removeAttribute(St(t))))}_update(){nl(this._createVNode(),this.shadowRoot)}_createVNode(){const t=Re(this._def,we({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const s=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{s(i,o),St(i)!==i&&s(St(i),o)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof Sa){n.parent=r._instance,n.provides=r._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function eT(e="$style"){{const t=Un();if(!t)return Se;const n=t.type.__cssModules;if(!n)return Se;const s=n[e];return s||Se}}function tT(e){const t=Un();if(!t)return;const n=t.ut=(r=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i=>tl(i,r))},s=()=>{const r=e(t.proxy);el(t.subTree,r),n(r)};ig(s),ki(()=>{const r=new MutationObserver(s);r.observe(t.subTree.el.parentNode,{childList:!0}),Ea(()=>r.disconnect())})}function el(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{el(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)tl(e.el,t);else if(e.type===Je)e.children.forEach(n=>el(n,t));else if(e.type===ls){let{el:n,anchor:s}=e;for(;n&&(tl(n,t),n!==s);)n=n.nextSibling}}function tl(e,t){if(e.nodeType===1){const n=e.style;for(const s in t)n.setProperty(`--${s}`,t[s])}}const wn="transition",Cr="animation",Su=(e,{slots:t})=>Ca(gu,Gg(e),t);Su.displayName="Transition";const Wg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nT=Su.props=we({},gu.props,Wg),Wn=(e,t=[])=>{z(e)?e.forEach(n=>n(...t)):e&&e(...t)},If=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function Gg(e){const t={};for(const R in e)R in Wg||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,m=sT(r),w=m&&m[0],T=m&&m[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:E,onLeave:C,onLeaveCancelled:k,onBeforeAppear:V=v,onAppear:N=g,onAppearCancelled:b=E}=t,M=(R,H,B)=>{bn(R,H?u:a),bn(R,H?l:o),B&&B()},F=(R,H)=>{R._isLeaving=!1,bn(R,h),bn(R,d),bn(R,f),H&&H()},P=R=>(H,B)=>{const fe=R?N:g,ce=()=>M(H,R,B);Wn(fe,[H,ce]),Af(()=>{bn(H,R?c:i),sn(H,R?u:a),If(fe)||kf(H,s,w,ce)})};return we(t,{onBeforeEnter(R){Wn(v,[R]),sn(R,i),sn(R,o)},onBeforeAppear(R){Wn(V,[R]),sn(R,c),sn(R,l)},onEnter:P(!1),onAppear:P(!0),onLeave(R,H){R._isLeaving=!0;const B=()=>F(R,H);sn(R,h),Yg(),sn(R,f),Af(()=>{R._isLeaving&&(bn(R,h),sn(R,d),If(C)||kf(R,s,T,B))}),Wn(C,[R,B])},onEnterCancelled(R){M(R,!1),Wn(E,[R])},onAppearCancelled(R){M(R,!0),Wn(b,[R])},onLeaveCancelled(R){F(R),Wn(k,[R])}})}function sT(e){if(e==null)return null;if(Ae(e))return[pc(e.enter),pc(e.leave)];{const t=pc(e);return[t,t]}}function pc(e){return un(e)}function sn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function bn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Af(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let rT=0;function kf(e,t,n,s){const r=e._endId=++rT,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Qg(e,t);if(!o)return s();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,f),i()},f=d=>{d.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,f)}function Qg(e,t){const n=window.getComputedStyle(e),s=m=>(n[m]||"").split(", "),r=s(`${wn}Delay`),i=s(`${wn}Duration`),o=Nf(r,i),a=s(`${Cr}Delay`),c=s(`${Cr}Duration`),l=Nf(a,c);let u=null,h=0,f=0;t===wn?o>0&&(u=wn,h=o,f=i.length):t===Cr?l>0&&(u=Cr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?wn:Cr:null,f=u?u===wn?i.length:c.length:0);const d=u===wn&&/\b(transform|all)(,|$)/.test(s(`${wn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Nf(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Rf(n)+Rf(e[s])))}function Rf(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Yg(){return document.body.offsetHeight}const Xg=new WeakMap,Jg=new WeakMap,iT={name:"TransitionGroup",props:we({},nT,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Un(),s=pu();let r,i;return va(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!uT(r[0].el,n.vnode.el,o))return;r.forEach(aT),r.forEach(cT);const a=r.filter(lT);Yg(),a.forEach(c=>{const l=c.el,u=l.style;sn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,bn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=me(e),a=Gg(o);let c=o.tag||Je;r=i,i=t.default?ma(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&gs(u,Xs(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];gs(u,Xs(u,a,s,n)),Xg.set(u,u.el.getBoundingClientRect())}return Re(c,null,i)}}},oT=iT;function aT(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function cT(e){Jg.set(e,e.el.getBoundingClientRect())}function lT(e){const t=Xg.get(e),n=Jg.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",e}}function uT(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Qg(s);return r.removeChild(s),i}const Fn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>qs(t,n):t};function hT(e){e.target.composing=!0}function Df(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ro={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Fn(r);const i=s||r.props&&r.props.type==="number";on(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=un(a)),e._assign(a)}),n&&on(e,"change",()=>{e.value=e.value.trim()}),t||(on(e,"compositionstart",hT),on(e,"compositionend",Df),on(e,"change",Df))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=Fn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&un(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Iu={deep:!0,created(e,t,n){e._assign=Fn(n),on(e,"change",()=>{const s=e._modelValue,r=Zs(e),i=e.checked,o=e._assign;if(z(s)){const a=ia(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(Is(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(em(e,i))})},mounted:Of,beforeUpdate(e,t,n){e._assign=Fn(n),Of(e,t,n)}};function Of(e,{value:t,oldValue:n},s){e._modelValue=t,z(t)?e.checked=ia(t,s.props.value)>-1:Is(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=Dn(t,em(e,!0)))}const Au={created(e,{value:t},n){e.checked=Dn(t,n.props.value),e._assign=Fn(n),on(e,"change",()=>{e._assign(Zs(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=Fn(s),t!==n&&(e.checked=Dn(t,s.props.value))}},Zg={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=Is(t);on(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?un(Zs(o)):Zs(o));e._assign(e.multiple?r?new Set(i):i:i[0])}),e._assign=Fn(s)},mounted(e,{value:t}){Pf(e,t)},beforeUpdate(e,t,n){e._assign=Fn(n)},updated(e,{value:t}){Pf(e,t)}};function Pf(e,t){const n=e.multiple;if(!(n&&!z(t)&&!Is(t))){for(let s=0,r=e.options.length;s<r;s++){const i=e.options[s],o=Zs(i);if(n)z(t)?i.selected=ia(t,o)>-1:i.selected=t.has(o);else if(Dn(Zs(i),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Zs(e){return"_value"in e?e._value:e.value}function em(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const tm={created(e,t,n){oo(e,t,n,null,"created")},mounted(e,t,n){oo(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){oo(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){oo(e,t,n,s,"updated")}};function nm(e,t){switch(e){case"SELECT":return Zg;case"TEXTAREA":return Ro;default:switch(t){case"checkbox":return Iu;case"radio":return Au;default:return Ro}}}function oo(e,t,n,s,r){const o=nm(e.tagName,n.props&&n.props.type)[r];o&&o(e,t,n,s)}function fT(){Ro.getSSRProps=({value:e})=>({value:e}),Au.getSSRProps=({value:e},t)=>{if(t.props&&Dn(t.props.value,e))return{checked:!0}},Iu.getSSRProps=({value:e},t)=>{if(z(e)){if(t.props&&ia(e,t.props.value)>-1)return{checked:!0}}else if(Is(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},tm.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=nm(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const dT=["ctrl","shift","alt","meta"],pT={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dT.some(n=>e[`${n}Key`]&&!t.includes(n))},gT=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=pT[t[r]];if(i&&i(n,t))return}return e(n,...s)},mT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yT=(e,t)=>n=>{if(!("key"in n))return;const s=St(n.key);if(t.some(r=>r===s||mT[r]===s))return e(n)},sm={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Sr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Sr(e,!0),s.enter(e)):s.leave(e,()=>{Sr(e,!1)}):Sr(e,t))},beforeUnmount(e,{value:t}){Sr(e,t)}};function Sr(e,t){e.style.display=t?e._vod:"none"}function vT(){sm.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const rm=we({patchProp:Yb},xb);let Br,Mf=!1;function im(){return Br||(Br=Ig(rm))}function om(){return Br=Mf?Br:Ag(rm),Mf=!0,Br}const nl=(...e)=>{im().render(...e)},am=(...e)=>{om().hydrate(...e)},cm=(...e)=>{const t=im().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=lm(s);if(!r)return;const i=t._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t},wT=(...e)=>{const t=om().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=lm(s);if(r)return n(r,!0,r instanceof SVGElement)},t};function lm(e){return oe(e)?document.querySelector(e):e}let Lf=!1;const ET=()=>{Lf||(Lf=!0,fT(),vT())},bT=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:gu,Comment:at,EffectScope:eu,Fragment:Je,KeepAlive:ME,ReactiveEffect:Ci,Static:ls,Suspense:_E,Teleport:lb,Text:ms,Transition:Su,TransitionGroup:oT,VueElement:Sa,callWithAsyncErrorHandling:At,callWithErrorHandling:cn,camelize:et,capitalize:As,cloneVNode:en,compatUtils:Lb,computed:It,createApp:cm,createBlock:bu,createCommentVNode:pb,createElementBlock:ub,createElementVNode:Tu,createHydrationRenderer:Ag,createPropsRestProxy:kb,createRenderer:Ig,createSSRApp:wT,createSlots:jE,createStaticVNode:db,createTextVNode:_u,createVNode:Re,customRef:rE,defineAsyncComponent:OE,defineComponent:Ii,defineCustomElement:zg,defineEmits:Tb,defineExpose:_b,defineProps:bb,defineSSRCustomElement:Jb,get devtools(){return Ms},effect:A0,effectScope:T0,getCurrentInstance:Un,getCurrentScope:_0,getTransitionRawChildren:ma,guardReactiveProps:Pg,h:Ca,handleError:ks,hydrate:am,initCustomFormatter:Rb,initDirectivesForSSR:ET,inject:Jt,isMemoSame:Hg,isProxy:ru,isReactive:os,isReadonly:ps,isRef:ze,isRuntimeOnly:vb,isShallow:Xr,isVNode:Mn,markRaw:iu,mergeDefaults:Ab,mergeProps:Mg,nextTick:fa,normalizeClass:Ti,normalizeProps:r0,normalizeStyle:bi,onActivated:cg,onBeforeMount:hg,onBeforeUnmount:wa,onBeforeUpdate:fg,onDeactivated:lg,onErrorCaptured:mg,onMounted:ki,onRenderTracked:gg,onRenderTriggered:pg,onScopeDispose:C0,onServerPrefetch:dg,onUnmounted:Ea,onUpdated:va,openBlock:ba,popScopeId:mE,provide:Fr,proxyRefs:cu,pushScopeId:gE,queuePostFlushCb:uu,reactive:mr,readonly:su,ref:Lr,registerRuntimeCompiler:$g,render:nl,renderList:UE,renderSlot:qE,resolveComponent:$E,resolveDirective:BE,resolveDynamicComponent:VE,resolveFilter:Mb,resolveTransitionHooks:Xs,setBlockTracking:Qc,setDevtoolsHook:tg,setTransitionHooks:gs,shallowReactive:Wp,shallowReadonly:Z0,shallowRef:Gp,ssrContextKey:jg,ssrUtils:Pb,stop:k0,toDisplayString:p0,toHandlerKey:js,toHandlers:HE,toRaw:me,toRef:Yp,toRefs:iE,transformVNodeArgs:hb,triggerRef:tE,unref:as,useAttrs:Ib,useCssModule:eT,useCssVars:tT,useSSRContext:qg,useSlots:Sb,useTransitionState:pu,vModelCheckbox:Iu,vModelDynamic:tm,vModelRadio:Au,vModelSelect:Zg,vModelText:Ro,vShow:sm,version:Kg,warn:lE,watch:zs,watchEffect:kE,watchPostEffect:ig,watchSyncEffect:NE,withAsyncContext:Nb,withCtx:hu,withDefaults:Cb,withDirectives:FE,withKeys:yT,withMemo:Db,withModifiers:gT,withScopeId:yE},Symbol.toStringTag,{value:"Module"}));function ku(e){throw e}function um(e){}function Oe(e,t,n,s){const r=e,i=new SyntaxError(String(r));return i.code=e,i.loc=t,i}const si=Symbol(""),Ur=Symbol(""),Nu=Symbol(""),Do=Symbol(""),hm=Symbol(""),vs=Symbol(""),fm=Symbol(""),dm=Symbol(""),Ru=Symbol(""),Du=Symbol(""),Ni=Symbol(""),Ou=Symbol(""),pm=Symbol(""),Pu=Symbol(""),Oo=Symbol(""),Mu=Symbol(""),Lu=Symbol(""),Fu=Symbol(""),xu=Symbol(""),gm=Symbol(""),mm=Symbol(""),Ia=Symbol(""),Po=Symbol(""),$u=Symbol(""),Vu=Symbol(""),ri=Symbol(""),Ri=Symbol(""),Bu=Symbol(""),sl=Symbol(""),TT=Symbol(""),rl=Symbol(""),Mo=Symbol(""),_T=Symbol(""),CT=Symbol(""),Uu=Symbol(""),ST=Symbol(""),IT=Symbol(""),ju=Symbol(""),ym=Symbol(""),er={[si]:"Fragment",[Ur]:"Teleport",[Nu]:"Suspense",[Do]:"KeepAlive",[hm]:"BaseTransition",[vs]:"openBlock",[fm]:"createBlock",[dm]:"createElementBlock",[Ru]:"createVNode",[Du]:"createElementVNode",[Ni]:"createCommentVNode",[Ou]:"createTextVNode",[pm]:"createStaticVNode",[Pu]:"resolveComponent",[Oo]:"resolveDynamicComponent",[Mu]:"resolveDirective",[Lu]:"resolveFilter",[Fu]:"withDirectives",[xu]:"renderList",[gm]:"renderSlot",[mm]:"createSlots",[Ia]:"toDisplayString",[Po]:"mergeProps",[$u]:"normalizeClass",[Vu]:"normalizeStyle",[ri]:"normalizeProps",[Ri]:"guardReactiveProps",[Bu]:"toHandlers",[sl]:"camelize",[TT]:"capitalize",[rl]:"toHandlerKey",[Mo]:"setBlockTracking",[_T]:"pushScopeId",[CT]:"popScopeId",[Uu]:"withCtx",[ST]:"unref",[IT]:"isRef",[ju]:"withMemo",[ym]:"isMemoSame"};function AT(e){Object.getOwnPropertySymbols(e).forEach(t=>{er[t]=e[t]})}const Pt={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function kT(e,t=Pt){return{type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}function ii(e,t,n,s,r,i,o,a=!1,c=!1,l=!1,u=Pt){return e&&(a?(e.helper(vs),e.helper(sr(e.inSSR,l))):e.helper(nr(e.inSSR,l)),o&&e.helper(Fu)),{type:13,tag:t,props:n,children:s,patchFlag:r,dynamicProps:i,directives:o,isBlock:a,disableTracking:c,isComponent:l,loc:u}}function Di(e,t=Pt){return{type:17,loc:t,elements:e}}function Ft(e,t=Pt){return{type:15,loc:t,properties:e}}function Me(e,t){return{type:16,loc:Pt,key:oe(e)?ae(e,!0):e,value:t}}function ae(e,t=!1,n=Pt,s=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:s}}function qt(e,t=Pt){return{type:8,loc:t,children:e}}function Ve(e,t=[],n=Pt){return{type:14,loc:n,callee:e,arguments:t}}function tr(e,t=void 0,n=!1,s=!1,r=Pt){return{type:18,params:e,returns:t,newline:n,isSlot:s,loc:r}}function il(e,t,n,s=!0){return{type:19,test:e,consequent:t,alternate:n,newline:s,loc:Pt}}function NT(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:Pt}}function RT(e){return{type:21,body:e,loc:Pt}}const Et=e=>e.type===4&&e.isStatic,$s=(e,t)=>e===t||e===St(t);function vm(e){if($s(e,"Teleport"))return Ur;if($s(e,"Suspense"))return Nu;if($s(e,"KeepAlive"))return Do;if($s(e,"BaseTransition"))return hm}const DT=/^\d|[^\$\w]/,qu=e=>!DT.test(e),OT=/[A-Za-z_$\xA0-\uFFFF]/,PT=/[\.\?\w$\xA0-\uFFFF]/,MT=/\s+[.[]\s*|\s*[.[]\s+/g,LT=e=>{e=e.trim().replace(MT,o=>o.trim());let t=0,n=[],s=0,r=0,i=null;for(let o=0;o<e.length;o++){const a=e.charAt(o);switch(t){case 0:if(a==="[")n.push(t),t=1,s++;else if(a==="(")n.push(t),t=2,r++;else if(!(o===0?OT:PT).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(t),t=3,i=a):a==="["?s++:a==="]"&&(--s||(t=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(t),t=3,i=a;else if(a==="(")r++;else if(a===")"){if(o===e.length-1)return!1;--r||(t=n.pop())}break;case 3:a===i&&(t=n.pop(),i=null);break}}return!s&&!r},wm=LT;function Em(e,t,n){const r={source:e.source.slice(t,t+n),start:Lo(e.start,e.source,t),end:e.end};return n!=null&&(r.end=Lo(e.start,e.source,t+n)),r}function Lo(e,t,n=t.length){return Fo(we({},e),t,n)}function Fo(e,t,n=t.length){let s=0,r=-1;for(let i=0;i<n;i++)t.charCodeAt(i)===10&&(s++,r=i);return e.offset+=n,e.line+=s,e.column=r===-1?e.column+n:n-r,e}function Lt(e,t,n=!1){for(let s=0;s<e.props.length;s++){const r=e.props[s];if(r.type===7&&(n||r.exp)&&(oe(t)?r.name===t:t.test(r.name)))return r}}function Aa(e,t,n=!1,s=!1){for(let r=0;r<e.props.length;r++){const i=e.props[r];if(i.type===6){if(n)continue;if(i.name===t&&(i.value||s))return i}else if(i.name==="bind"&&(i.exp||s)&&Zn(i.arg,t))return i}}function Zn(e,t){return!!(e&&Et(e)&&e.content===t)}function FT(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function gc(e){return e.type===5||e.type===2}function xT(e){return e.type===7&&e.name==="slot"}function xo(e){return e.type===1&&e.tagType===3}function $o(e){return e.type===1&&e.tagType===2}function nr(e,t){return e||t?Ru:Du}function sr(e,t){return e||t?fm:dm}const $T=new Set([ri,Ri]);function bm(e,t=[]){if(e&&!oe(e)&&e.type===14){const n=e.callee;if(!oe(n)&&$T.has(n))return bm(e.arguments[0],t.concat(e))}return[e,t]}function Vo(e,t,n){let s,r=e.type===13?e.props:e.arguments[2],i=[],o;if(r&&!oe(r)&&r.type===14){const a=bm(r);r=a[0],i=a[1],o=i[i.length-1]}if(r==null||oe(r))s=Ft([t]);else if(r.type===14){const a=r.arguments[0];!oe(a)&&a.type===15?Ff(t,a)||a.properties.unshift(t):r.callee===Bu?s=Ve(n.helper(Po),[Ft([t]),r]):r.arguments.unshift(Ft([t])),!s&&(s=r)}else r.type===15?(Ff(t,r)||r.properties.unshift(t),s=r):(s=Ve(n.helper(Po),[Ft([t]),r]),o&&o.callee===Ri&&(o=i[i.length-2]));e.type===13?o?o.arguments[0]=s:e.props=s:o?o.arguments[0]=s:e.arguments[2]=s}function Ff(e,t){let n=!1;if(e.key.type===4){const s=e.key.content;n=t.properties.some(r=>r.key.type===4&&r.key.content===s)}return n}function oi(e,t){return`_${t}_${e.replace(/[^\w]/g,(n,s)=>n==="-"?"_":e.charCodeAt(s).toString())}`}function VT(e){return e.type===14&&e.callee===ju?e.arguments[1].returns:e}function Hu(e,{helper:t,removeHelper:n,inSSR:s}){e.isBlock||(e.isBlock=!0,n(nr(s,e.isComponent)),t(vs),t(sr(s,e.isComponent)))}function xf(e,t){const n=t.options?t.options.compatConfig:t.compatConfig,s=n&&n[e];return e==="MODE"?s||3:s}function us(e,t){const n=xf("MODE",t),s=xf(e,t);return n===3?s===!0:s!==!1}function ai(e,t,n,...s){return us(e,t)}const BT=/&(gt|lt|amp|apos|quot);/g,UT={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},$f={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:yo,isPreTag:yo,isCustomElement:yo,decodeEntities:e=>e.replace(BT,(t,n)=>UT[n]),onError:ku,onWarn:um,comments:!1};function jT(e,t={}){const n=qT(e,t),s=kt(n);return kT(Ku(n,0,[]),Vt(n,s))}function qT(e,t){const n=we({},$f);let s;for(s in t)n[s]=t[s]===void 0?$f[s]:t[s];return{options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:n.onWarn}}function Ku(e,t,n){const s=ka(n),r=s?s.ns:0,i=[];for(;!JT(e,t,n);){const a=e.source;let c;if(t===0||t===1){if(!e.inVPre&&ot(a,e.options.delimiters[0]))c=YT(e,t);else if(t===0&&a[0]==="<")if(a.length===1)Ce(e,5,1);else if(a[1]==="!")ot(a,"<!--")?c=KT(e):ot(a,"<!DOCTYPE")?c=Ir(e):ot(a,"<![CDATA[")?r!==0?c=HT(e,n):(Ce(e,1),c=Ir(e)):(Ce(e,11),c=Ir(e));else if(a[1]==="/")if(a.length===2)Ce(e,5,2);else if(a[2]===">"){Ce(e,14,2),qe(e,3);continue}else if(/[a-z]/i.test(a[2])){Ce(e,23),ol(e,1,s);continue}else Ce(e,12,2),c=Ir(e);else/[a-z]/i.test(a[1])?(c=zT(e,n),us("COMPILER_NATIVE_TEMPLATE",e)&&c&&c.tag==="template"&&!c.props.some(l=>l.type===7&&Tm(l.name))&&(c=c.children)):a[1]==="?"?(Ce(e,21,1),c=Ir(e)):Ce(e,12,1)}if(c||(c=XT(e,t)),z(c))for(let l=0;l<c.length;l++)Vf(i,c[l]);else Vf(i,c)}let o=!1;if(t!==2&&t!==1){const a=e.options.whitespace!=="preserve";for(let c=0;c<i.length;c++){const l=i[c];if(l.type===2)if(e.inPre)l.content=l.content.replace(/\r\n/g,`
`);else if(/[^\t\r\n\f ]/.test(l.content))a&&(l.content=l.content.replace(/[\t\r\n\f ]+/g," "));else{const u=i[c-1],h=i[c+1];!u||!h||a&&(u.type===3&&h.type===3||u.type===3&&h.type===1||u.type===1&&h.type===3||u.type===1&&h.type===1&&/[\r\n]/.test(l.content))?(o=!0,i[c]=null):l.content=" "}else l.type===3&&!e.options.comments&&(o=!0,i[c]=null)}if(e.inPre&&s&&e.options.isPreTag(s.tag)){const c=i[0];c&&c.type===2&&(c.content=c.content.replace(/^\r?\n/,""))}}return o?i.filter(Boolean):i}function Vf(e,t){if(t.type===2){const n=ka(e);if(n&&n.type===2&&n.loc.end.offset===t.loc.start.offset){n.content+=t.content,n.loc.end=t.loc.end,n.loc.source+=t.loc.source;return}}e.push(t)}function HT(e,t){qe(e,9);const n=Ku(e,3,t);return e.source.length===0?Ce(e,6):qe(e,3),n}function KT(e){const t=kt(e);let n;const s=/--(\!)?>/.exec(e.source);if(!s)n=e.source.slice(4),qe(e,e.source.length),Ce(e,7);else{s.index<=3&&Ce(e,0),s[1]&&Ce(e,10),n=e.source.slice(4,s.index);const r=e.source.slice(0,s.index);let i=1,o=0;for(;(o=r.indexOf("<!--",i))!==-1;)qe(e,o-i+1),o+4<r.length&&Ce(e,16),i=o+1;qe(e,s.index+s[0].length-i+1)}return{type:3,content:n,loc:Vt(e,t)}}function Ir(e){const t=kt(e),n=e.source[1]==="?"?1:2;let s;const r=e.source.indexOf(">");return r===-1?(s=e.source.slice(n),qe(e,e.source.length)):(s=e.source.slice(n,r),qe(e,r+1)),{type:3,content:s,loc:Vt(e,t)}}function zT(e,t){const n=e.inPre,s=e.inVPre,r=ka(t),i=ol(e,0,r),o=e.inPre&&!n,a=e.inVPre&&!s;if(i.isSelfClosing||e.options.isVoidTag(i.tag))return o&&(e.inPre=!1),a&&(e.inVPre=!1),i;t.push(i);const c=e.options.getTextMode(i,r),l=Ku(e,c,t);t.pop();{const u=i.props.find(h=>h.type===6&&h.name==="inline-template");if(u&&ai("COMPILER_INLINE_TEMPLATE",e,u.loc)){const h=Vt(e,i.loc.end);u.value={type:2,content:h.source,loc:h}}}if(i.children=l,al(e.source,i.tag))ol(e,1,r);else if(Ce(e,24,0,i.loc.start),e.source.length===0&&i.tag.toLowerCase()==="script"){const u=l[0];u&&ot(u.loc.source,"<!--")&&Ce(e,8)}return i.loc=Vt(e,i.loc.start),o&&(e.inPre=!1),a&&(e.inVPre=!1),i}const Tm=bt("if,else,else-if,for,slot");function ol(e,t,n){const s=kt(e),r=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),i=r[1],o=e.options.getNamespace(i,n);qe(e,r[0].length),ci(e);const a=kt(e),c=e.source;e.options.isPreTag(i)&&(e.inPre=!0);let l=Bf(e,t);t===0&&!e.inVPre&&l.some(f=>f.type===7&&f.name==="pre")&&(e.inVPre=!0,we(e,a),e.source=c,l=Bf(e,t).filter(f=>f.name!=="v-pre"));let u=!1;if(e.source.length===0?Ce(e,9):(u=ot(e.source,"/>"),t===1&&u&&Ce(e,4),qe(e,u?2:1)),t===1)return;let h=0;return e.inVPre||(i==="slot"?h=2:i==="template"?l.some(f=>f.type===7&&Tm(f.name))&&(h=3):WT(i,l,e)&&(h=1)),{type:1,ns:o,tag:i,tagType:h,props:l,isSelfClosing:u,children:[],loc:Vt(e,s),codegenNode:void 0}}function WT(e,t,n){const s=n.options;if(s.isCustomElement(e))return!1;if(e==="component"||/^[A-Z]/.test(e)||vm(e)||s.isBuiltInComponent&&s.isBuiltInComponent(e)||s.isNativeTag&&!s.isNativeTag(e))return!0;for(let r=0;r<t.length;r++){const i=t[r];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(ai("COMPILER_IS_ON_ELEMENT",n,i.loc))return!0}}else{if(i.name==="is")return!0;if(i.name==="bind"&&Zn(i.arg,"is")&&ai("COMPILER_IS_ON_ELEMENT",n,i.loc))return!0}}}function Bf(e,t){const n=[],s=new Set;for(;e.source.length>0&&!ot(e.source,">")&&!ot(e.source,"/>");){if(ot(e.source,"/")){Ce(e,22),qe(e,1),ci(e);continue}t===1&&Ce(e,3);const r=GT(e,s);r.type===6&&r.value&&r.name==="class"&&(r.value.content=r.value.content.replace(/\s+/g," ").trim()),t===0&&n.push(r),/^[^\t\r\n\f />]/.test(e.source)&&Ce(e,15),ci(e)}return n}function GT(e,t){const n=kt(e),r=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];t.has(r)&&Ce(e,2),t.add(r),r[0]==="="&&Ce(e,19);{const a=/["'<]/g;let c;for(;c=a.exec(r);)Ce(e,17,c.index)}qe(e,r.length);let i;/^[\t\r\n\f ]*=/.test(e.source)&&(ci(e),qe(e,1),ci(e),i=QT(e),i||Ce(e,13));const o=Vt(e,n);if(!e.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(r)){const a=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(r);let c=ot(r,"."),l=a[1]||(c||ot(r,":")?"bind":ot(r,"@")?"on":"slot"),u;if(a[2]){const f=l==="slot",d=r.lastIndexOf(a[2]),m=Vt(e,Uf(e,n,d),Uf(e,n,d+a[2].length+(f&&a[3]||"").length));let w=a[2],T=!0;w.startsWith("[")?(T=!1,w.endsWith("]")?w=w.slice(1,w.length-1):(Ce(e,27),w=w.slice(1))):f&&(w+=a[3]||""),u={type:4,content:w,isStatic:T,constType:T?3:0,loc:m}}if(i&&i.isQuoted){const f=i.loc;f.start.offset++,f.start.column++,f.end=Lo(f.start,i.content),f.source=f.source.slice(1,-1)}const h=a[3]?a[3].slice(1).split("."):[];return c&&h.push("prop"),l==="bind"&&u&&h.includes("sync")&&ai("COMPILER_V_BIND_SYNC",e,o,u.loc.source)&&(l="model",h.splice(h.indexOf("sync"),1)),{type:7,name:l,exp:i&&{type:4,content:i.content,isStatic:!1,constType:0,loc:i.loc},arg:u,modifiers:h,loc:o}}return!e.inVPre&&ot(r,"v-")&&Ce(e,26),{type:6,name:r,value:i&&{type:2,content:i.content,loc:i.loc},loc:o}}function QT(e){const t=kt(e);let n;const s=e.source[0],r=s==='"'||s==="'";if(r){qe(e,1);const i=e.source.indexOf(s);i===-1?n=jr(e,e.source.length,4):(n=jr(e,i,4),qe(e,1))}else{const i=/^[^\t\r\n\f >]+/.exec(e.source);if(!i)return;const o=/["'<=`]/g;let a;for(;a=o.exec(i[0]);)Ce(e,18,a.index);n=jr(e,i[0].length,4)}return{content:n,isQuoted:r,loc:Vt(e,t)}}function YT(e,t){const[n,s]=e.options.delimiters,r=e.source.indexOf(s,n.length);if(r===-1){Ce(e,25);return}const i=kt(e);qe(e,n.length);const o=kt(e),a=kt(e),c=r-n.length,l=e.source.slice(0,c),u=jr(e,c,t),h=u.trim(),f=u.indexOf(h);f>0&&Fo(o,l,f);const d=c-(u.length-h.length-f);return Fo(a,l,d),qe(e,s.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:h,loc:Vt(e,o,a)},loc:Vt(e,i)}}function XT(e,t){const n=t===3?["]]>"]:["<",e.options.delimiters[0]];let s=e.source.length;for(let o=0;o<n.length;o++){const a=e.source.indexOf(n[o],1);a!==-1&&s>a&&(s=a)}const r=kt(e);return{type:2,content:jr(e,s,t),loc:Vt(e,r)}}function jr(e,t,n){const s=e.source.slice(0,t);return qe(e,t),n===2||n===3||!s.includes("&")?s:e.options.decodeEntities(s,n===4)}function kt(e){const{column:t,line:n,offset:s}=e;return{column:t,line:n,offset:s}}function Vt(e,t,n){return n=n||kt(e),{start:t,end:n,source:e.originalSource.slice(t.offset,n.offset)}}function ka(e){return e[e.length-1]}function ot(e,t){return e.startsWith(t)}function qe(e,t){const{source:n}=e;Fo(e,n,t),e.source=n.slice(t)}function ci(e){const t=/^[\t\r\n\f ]+/.exec(e.source);t&&qe(e,t[0].length)}function Uf(e,t,n){return Lo(t,e.originalSource.slice(t.offset,n),n)}function Ce(e,t,n,s=kt(e)){n&&(s.offset+=n,s.column+=n),e.options.onError(Oe(t,{start:s,end:s,source:""}))}function JT(e,t,n){const s=e.source;switch(t){case 0:if(ot(s,"</")){for(let r=n.length-1;r>=0;--r)if(al(s,n[r].tag))return!0}break;case 1:case 2:{const r=ka(n);if(r&&al(s,r.tag))return!0;break}case 3:if(ot(s,"]]>"))return!0;break}return!s}function al(e,t){return ot(e,"</")&&e.slice(2,2+t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||">")}function ZT(e,t){Eo(e,t,_m(e,e.children[0]))}function _m(e,t){const{children:n}=e;return n.length===1&&t.type===1&&!$o(t)}function Eo(e,t,n=!1){const{children:s}=e,r=s.length;let i=0;for(let o=0;o<s.length;o++){const a=s[o];if(a.type===1&&a.tagType===0){const c=n?0:xt(a,t);if(c>0){if(c>=2){a.codegenNode.patchFlag=-1+"",a.codegenNode=t.hoist(a.codegenNode),i++;continue}}else{const l=a.codegenNode;if(l.type===13){const u=Am(l);if((!u||u===512||u===1)&&Sm(a,t)>=2){const h=Im(a);h&&(l.props=t.hoist(h))}l.dynamicProps&&(l.dynamicProps=t.hoist(l.dynamicProps))}}}if(a.type===1){const c=a.tagType===1;c&&t.scopes.vSlot++,Eo(a,t),c&&t.scopes.vSlot--}else if(a.type===11)Eo(a,t,a.children.length===1);else if(a.type===9)for(let c=0;c<a.branches.length;c++)Eo(a.branches[c],t,a.branches[c].children.length===1)}i&&t.transformHoist&&t.transformHoist(s,t,e),i&&i===r&&e.type===1&&e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&z(e.codegenNode.children)&&(e.codegenNode.children=t.hoist(Di(e.codegenNode.children)))}function xt(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const s=n.get(e);if(s!==void 0)return s;const r=e.codegenNode;if(r.type!==13||r.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject")return 0;if(Am(r))return n.set(e,0),0;{let a=3;const c=Sm(e,t);if(c===0)return n.set(e,0),0;c<a&&(a=c);for(let l=0;l<e.children.length;l++){const u=xt(e.children[l],t);if(u===0)return n.set(e,0),0;u<a&&(a=u)}if(a>1)for(let l=0;l<e.props.length;l++){const u=e.props[l];if(u.type===7&&u.name==="bind"&&u.exp){const h=xt(u.exp,t);if(h===0)return n.set(e,0),0;h<a&&(a=h)}}if(r.isBlock){for(let l=0;l<e.props.length;l++)if(e.props[l].type===7)return n.set(e,0),0;t.removeHelper(vs),t.removeHelper(sr(t.inSSR,r.isComponent)),r.isBlock=!1,t.helper(nr(t.inSSR,r.isComponent))}return n.set(e,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return xt(e.content,t);case 4:return e.constType;case 8:let o=3;for(let a=0;a<e.children.length;a++){const c=e.children[a];if(oe(c)||On(c))continue;const l=xt(c,t);if(l===0)return 0;l<o&&(o=l)}return o;default:return 0}}const e_=new Set([$u,Vu,ri,Ri]);function Cm(e,t){if(e.type===14&&!oe(e.callee)&&e_.has(e.callee)){const n=e.arguments[0];if(n.type===4)return xt(n,t);if(n.type===14)return Cm(n,t)}return 0}function Sm(e,t){let n=3;const s=Im(e);if(s&&s.type===15){const{properties:r}=s;for(let i=0;i<r.length;i++){const{key:o,value:a}=r[i],c=xt(o,t);if(c===0)return c;c<n&&(n=c);let l;if(a.type===4?l=xt(a,t):a.type===14?l=Cm(a,t):l=0,l===0)return l;l<n&&(n=l)}}return n}function Im(e){const t=e.codegenNode;if(t.type===13)return t.props}function Am(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function t_(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:s=!1,cacheHandlers:r=!1,nodeTransforms:i=[],directiveTransforms:o={},transformHoist:a=null,isBuiltInComponent:c=mt,isCustomElement:l=mt,expressionPlugins:u=[],scopeId:h=null,slotted:f=!0,ssr:d=!1,inSSR:m=!1,ssrCssVars:w="",bindingMetadata:T=Se,inline:v=!1,isTS:g=!1,onError:E=ku,onWarn:C=um,compatConfig:k}){const V=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),N={selfName:V&&As(et(V[1])),prefixIdentifiers:n,hoistStatic:s,cacheHandlers:r,nodeTransforms:i,directiveTransforms:o,transformHoist:a,isBuiltInComponent:c,isCustomElement:l,expressionPlugins:u,scopeId:h,slotted:f,ssr:d,inSSR:m,ssrCssVars:w,bindingMetadata:T,inline:v,isTS:g,onError:E,onWarn:C,compatConfig:k,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(b){const M=N.helpers.get(b)||0;return N.helpers.set(b,M+1),b},removeHelper(b){const M=N.helpers.get(b);if(M){const F=M-1;F?N.helpers.set(b,F):N.helpers.delete(b)}},helperString(b){return`_${er[N.helper(b)]}`},replaceNode(b){N.parent.children[N.childIndex]=N.currentNode=b},removeNode(b){const M=N.parent.children,F=b?M.indexOf(b):N.currentNode?N.childIndex:-1;!b||b===N.currentNode?(N.currentNode=null,N.onNodeRemoved()):N.childIndex>F&&(N.childIndex--,N.onNodeRemoved()),N.parent.children.splice(F,1)},onNodeRemoved:()=>{},addIdentifiers(b){},removeIdentifiers(b){},hoist(b){oe(b)&&(b=ae(b)),N.hoists.push(b);const M=ae(`_hoisted_${N.hoists.length}`,!1,b.loc,2);return M.hoisted=b,M},cache(b,M=!1){return NT(N.cached++,b,M)}};return N.filters=new Set,N}function n_(e,t){const n=t_(e,t);Na(e,n),t.hoistStatic&&ZT(e,n),t.ssr||s_(e,n),e.helpers=[...n.helpers.keys()],e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.filters=[...n.filters]}function s_(e,t){const{helper:n}=t,{children:s}=e;if(s.length===1){const r=s[0];if(_m(e,r)&&r.codegenNode){const i=r.codegenNode;i.type===13&&Hu(i,t),e.codegenNode=i}else e.codegenNode=r}else if(s.length>1){let r=64;e.codegenNode=ii(t,n(si),void 0,e.children,r+"",void 0,void 0,!0,void 0,!1)}}function r_(e,t){let n=0;const s=()=>{n--};for(;n<e.children.length;n++){const r=e.children[n];oe(r)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=s,Na(r,t))}}function Na(e,t){t.currentNode=e;const{nodeTransforms:n}=t,s=[];for(let i=0;i<n.length;i++){const o=n[i](e,t);if(o&&(z(o)?s.push(...o):s.push(o)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(Ni);break;case 5:t.ssr||t.helper(Ia);break;case 9:for(let i=0;i<e.branches.length;i++)Na(e.branches[i],t);break;case 10:case 11:case 1:case 0:r_(e,t);break}t.currentNode=e;let r=s.length;for(;r--;)s[r]()}function km(e,t){const n=oe(e)?s=>s===e:s=>e.test(s);return(s,r)=>{if(s.type===1){const{props:i}=s;if(s.tagType===3&&i.some(xT))return;const o=[];for(let a=0;a<i.length;a++){const c=i[a];if(c.type===7&&n(c.name)){i.splice(a,1),a--;const l=t(s,c,r);l&&o.push(l)}}return o}}}const Ra="/*#__PURE__*/",Nm=e=>`${er[e]}: _${er[e]}`;function i_(e,{mode:t="function",prefixIdentifiers:n=t==="module",sourceMap:s=!1,filename:r="template.vue.html",scopeId:i=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:c="vue",ssrRuntimeModuleName:l="vue/server-renderer",ssr:u=!1,isTS:h=!1,inSSR:f=!1}){const d={mode:t,prefixIdentifiers:n,sourceMap:s,filename:r,scopeId:i,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:c,ssrRuntimeModuleName:l,ssr:u,isTS:h,inSSR:f,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(w){return`_${er[w]}`},push(w,T){d.code+=w},indent(){m(++d.indentLevel)},deindent(w=!1){w?--d.indentLevel:m(--d.indentLevel)},newline(){m(d.indentLevel)}};function m(w){d.push(`
`+"  ".repeat(w))}return d}function o_(e,t={}){const n=i_(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:s,push:r,prefixIdentifiers:i,indent:o,deindent:a,newline:c,scopeId:l,ssr:u}=n,h=e.helpers.length>0,f=!i&&s!=="module";a_(e,n);const m=u?"ssrRender":"render",T=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(r(`function ${m}(${T}) {`),o(),f&&(r("with (_ctx) {"),o(),h&&(r(`const { ${e.helpers.map(Nm).join(", ")} } = _Vue`),r(`
`),c())),e.components.length&&(mc(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(mc(e.directives,"directive",n),e.temps>0&&c()),e.filters&&e.filters.length&&(c(),mc(e.filters,"filter",n),c()),e.temps>0){r("let ");for(let v=0;v<e.temps;v++)r(`${v>0?", ":""}_temp${v}`)}return(e.components.length||e.directives.length||e.temps)&&(r(`
`),c()),u||r("return "),e.codegenNode?ct(e.codegenNode,n):r("null"),f&&(a(),r("}")),a(),r("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function a_(e,t){const{ssr:n,prefixIdentifiers:s,push:r,newline:i,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:c}=t,l=a;if(e.helpers.length>0&&(r(`const _Vue = ${l}
`),e.hoists.length)){const u=[Ru,Du,Ni,Ou,pm].filter(h=>e.helpers.includes(h)).map(Nm).join(", ");r(`const { ${u} } = _Vue
`)}c_(e.hoists,t),i(),r("return ")}function mc(e,t,{helper:n,push:s,newline:r,isTS:i}){const o=n(t==="filter"?Lu:t==="component"?Pu:Mu);for(let a=0;a<e.length;a++){let c=e[a];const l=c.endsWith("__self");l&&(c=c.slice(0,-6)),s(`const ${oi(c,t)} = ${o}(${JSON.stringify(c)}${l?", true":""})${i?"!":""}`),a<e.length-1&&r()}}function c_(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:s,helper:r,scopeId:i,mode:o}=t;s();for(let a=0;a<e.length;a++){const c=e[a];c&&(n(`const _hoisted_${a+1} = `),ct(c,t),s())}t.pure=!1}function zu(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),Oi(e,t,n),n&&t.deindent(),t.push("]")}function Oi(e,t,n=!1,s=!0){const{push:r,newline:i}=t;for(let o=0;o<e.length;o++){const a=e[o];oe(a)?r(a):z(a)?zu(a,t):ct(a,t),o<e.length-1&&(n?(s&&r(","),i()):s&&r(", "))}}function ct(e,t){if(oe(e)){t.push(e);return}if(On(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:ct(e.codegenNode,t);break;case 2:l_(e,t);break;case 4:Rm(e,t);break;case 5:u_(e,t);break;case 12:ct(e.codegenNode,t);break;case 8:Dm(e,t);break;case 3:f_(e,t);break;case 13:d_(e,t);break;case 14:g_(e,t);break;case 15:m_(e,t);break;case 17:y_(e,t);break;case 18:v_(e,t);break;case 19:w_(e,t);break;case 20:E_(e,t);break;case 21:Oi(e.body,t,!0,!1);break}}function l_(e,t){t.push(JSON.stringify(e.content),e)}function Rm(e,t){const{content:n,isStatic:s}=e;t.push(s?JSON.stringify(n):n,e)}function u_(e,t){const{push:n,helper:s,pure:r}=t;r&&n(Ra),n(`${s(Ia)}(`),ct(e.content,t),n(")")}function Dm(e,t){for(let n=0;n<e.children.length;n++){const s=e.children[n];oe(s)?t.push(s):ct(s,t)}}function h_(e,t){const{push:n}=t;if(e.type===8)n("["),Dm(e,t),n("]");else if(e.isStatic){const s=qu(e.content)?e.content:JSON.stringify(e.content);n(s,e)}else n(`[${e.content}]`,e)}function f_(e,t){const{push:n,helper:s,pure:r}=t;r&&n(Ra),n(`${s(Ni)}(${JSON.stringify(e.content)})`,e)}function d_(e,t){const{push:n,helper:s,pure:r}=t,{tag:i,props:o,children:a,patchFlag:c,dynamicProps:l,directives:u,isBlock:h,disableTracking:f,isComponent:d}=e;u&&n(s(Fu)+"("),h&&n(`(${s(vs)}(${f?"true":""}), `),r&&n(Ra);const m=h?sr(t.inSSR,d):nr(t.inSSR,d);n(s(m)+"(",e),Oi(p_([i,o,a,c,l]),t),n(")"),h&&n(")"),u&&(n(", "),ct(u,t),n(")"))}function p_(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(n=>n||"null")}function g_(e,t){const{push:n,helper:s,pure:r}=t,i=oe(e.callee)?e.callee:s(e.callee);r&&n(Ra),n(i+"(",e),Oi(e.arguments,t),n(")")}function m_(e,t){const{push:n,indent:s,deindent:r,newline:i}=t,{properties:o}=e;if(!o.length){n("{}",e);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&s();for(let c=0;c<o.length;c++){const{key:l,value:u}=o[c];h_(l,t),n(": "),ct(u,t),c<o.length-1&&(n(","),i())}a&&r(),n(a?"}":" }")}function y_(e,t){zu(e.elements,t)}function v_(e,t){const{push:n,indent:s,deindent:r}=t,{params:i,returns:o,body:a,newline:c,isSlot:l}=e;l&&n(`_${er[Uu]}(`),n("(",e),z(i)?Oi(i,t):i&&ct(i,t),n(") => "),(c||a)&&(n("{"),s()),o?(c&&n("return "),z(o)?zu(o,t):ct(o,t)):a&&ct(a,t),(c||a)&&(r(),n("}")),l&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function w_(e,t){const{test:n,consequent:s,alternate:r,newline:i}=e,{push:o,indent:a,deindent:c,newline:l}=t;if(n.type===4){const h=!qu(n.content);h&&o("("),Rm(n,t),h&&o(")")}else o("("),ct(n,t),o(")");i&&a(),t.indentLevel++,i||o(" "),o("? "),ct(s,t),t.indentLevel--,i&&l(),i||o(" "),o(": ");const u=r.type===19;u||t.indentLevel++,ct(r,t),u||t.indentLevel--,i&&c(!0)}function E_(e,t){const{push:n,helper:s,indent:r,deindent:i,newline:o}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(r(),n(`${s(Mo)}(-1),`),o()),n(`_cache[${e.index}] = `),ct(e.value,t),e.isVNode&&(n(","),o(),n(`${s(Mo)}(1),`),o(),n(`_cache[${e.index}]`),i()),n(")")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");const b_=km(/^(if|else|else-if)$/,(e,t,n)=>T_(e,t,n,(s,r,i)=>{const o=n.parent.children;let a=o.indexOf(s),c=0;for(;a-->=0;){const l=o[a];l&&l.type===9&&(c+=l.branches.length)}return()=>{if(i)s.codegenNode=qf(r,c,n);else{const l=__(s.codegenNode);l.alternate=qf(r,c+s.branches.length-1,n)}}}));function T_(e,t,n,s){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const r=t.exp?t.exp.loc:e.loc;n.onError(Oe(28,t.loc)),t.exp=ae("true",!1,r)}if(t.name==="if"){const r=jf(e,t),i={type:9,loc:e.loc,branches:[r]};if(n.replaceNode(i),s)return s(i,r,!0)}else{const r=n.parent.children;let i=r.indexOf(e);for(;i-->=-1;){const o=r[i];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){t.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(Oe(30,e.loc)),n.removeNode();const a=jf(e,t);o.branches.push(a);const c=s&&s(o,a,!1);Na(a,n),c&&c(),n.currentNode=null}else n.onError(Oe(30,e.loc));break}}}function jf(e,t){const n=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:n&&!Lt(e,"for")?e.children:[e],userKey:Aa(e,"key"),isTemplateIf:n}}function qf(e,t,n){return e.condition?il(e.condition,Hf(e,t,n),Ve(n.helper(Ni),['""',"true"])):Hf(e,t,n)}function Hf(e,t,n){const{helper:s}=n,r=Me("key",ae(`${t}`,!1,Pt,2)),{children:i}=e,o=i[0];if(i.length!==1||o.type!==1)if(i.length===1&&o.type===11){const c=o.codegenNode;return Vo(c,r,n),c}else{let c=64;return ii(n,s(si),Ft([r]),i,c+"",void 0,void 0,!0,!1,!1,e.loc)}else{const c=o.codegenNode,l=VT(c);return l.type===13&&Hu(l,n),Vo(l,r,n),c}}function __(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const C_=km("for",(e,t,n)=>{const{helper:s,removeHelper:r}=n;return S_(e,t,n,i=>{const o=Ve(s(xu),[i.source]),a=xo(e),c=Lt(e,"memo"),l=Aa(e,"key"),u=l&&(l.type===6?ae(l.value.content,!0):l.exp),h=l?Me("key",u):null,f=i.source.type===4&&i.source.constType>0,d=f?64:l?128:256;return i.codegenNode=ii(n,s(si),void 0,o,d+"",void 0,void 0,!0,!f,!1,e.loc),()=>{let m;const{children:w}=i,T=w.length!==1||w[0].type!==1,v=$o(e)?e:a&&e.children.length===1&&$o(e.children[0])?e.children[0]:null;if(v?(m=v.codegenNode,a&&h&&Vo(m,h,n)):T?m=ii(n,s(si),h?Ft([h]):void 0,e.children,64+"",void 0,void 0,!0,void 0,!1):(m=w[0].codegenNode,a&&h&&Vo(m,h,n),m.isBlock!==!f&&(m.isBlock?(r(vs),r(sr(n.inSSR,m.isComponent))):r(nr(n.inSSR,m.isComponent))),m.isBlock=!f,m.isBlock?(s(vs),s(sr(n.inSSR,m.isComponent))):s(nr(n.inSSR,m.isComponent))),c){const g=tr(cl(i.parseResult,[ae("_cached")]));g.body=RT([qt(["const _memo = (",c.exp,")"]),qt(["if (_cached",...u?[" && _cached.key === ",u]:[],` && ${n.helperString(ym)}(_cached, _memo)) return _cached`]),qt(["const _item = ",m]),ae("_item.memo = _memo"),ae("return _item")]),o.arguments.push(g,ae("_cache"),ae(String(n.cached++)))}else o.arguments.push(tr(cl(i.parseResult),m,!0))}})});function S_(e,t,n,s){if(!t.exp){n.onError(Oe(31,t.loc));return}const r=Om(t.exp);if(!r){n.onError(Oe(32,t.loc));return}const{addIdentifiers:i,removeIdentifiers:o,scopes:a}=n,{source:c,value:l,key:u,index:h}=r,f={type:11,loc:t.loc,source:c,valueAlias:l,keyAlias:u,objectIndexAlias:h,parseResult:r,children:xo(e)?e.children:[e]};n.replaceNode(f),a.vFor++;const d=s&&s(f);return()=>{a.vFor--,d&&d()}}const I_=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Kf=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,A_=/^\(|\)$/g;function Om(e,t){const n=e.loc,s=e.content,r=s.match(I_);if(!r)return;const[,i,o]=r,a={source:ao(n,o.trim(),s.indexOf(o,i.length)),value:void 0,key:void 0,index:void 0};let c=i.trim().replace(A_,"").trim();const l=i.indexOf(c),u=c.match(Kf);if(u){c=c.replace(Kf,"").trim();const h=u[1].trim();let f;if(h&&(f=s.indexOf(h,l+c.length),a.key=ao(n,h,f)),u[2]){const d=u[2].trim();d&&(a.index=ao(n,d,s.indexOf(d,a.key?f+h.length:l+c.length)))}}return c&&(a.value=ao(n,c,l)),a}function ao(e,t,n){return ae(t,!1,Em(e,n,t.length))}function cl({value:e,key:t,index:n},s=[]){return k_([e,t,n,...s])}function k_(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((n,s)=>n||ae("_".repeat(s+1),!1))}const zf=ae("undefined",!1),N_=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const n=Lt(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},R_=(e,t,n)=>tr(e,t,!1,!0,t.length?t[0].loc:n);function D_(e,t,n=R_){t.helper(Uu);const{children:s,loc:r}=e,i=[],o=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const c=Lt(e,"slot",!0);if(c){const{arg:T,exp:v}=c;T&&!Et(T)&&(a=!0),i.push(Me(T||ae("default",!0),n(v,s,r)))}let l=!1,u=!1;const h=[],f=new Set;let d=0;for(let T=0;T<s.length;T++){const v=s[T];let g;if(!xo(v)||!(g=Lt(v,"slot",!0))){v.type!==3&&h.push(v);continue}if(c){t.onError(Oe(37,g.loc));break}l=!0;const{children:E,loc:C}=v,{arg:k=ae("default",!0),exp:V,loc:N}=g;let b;Et(k)?b=k?k.content:"default":a=!0;const M=n(V,E,C);let F,P,R;if(F=Lt(v,"if"))a=!0,o.push(il(F.exp,co(k,M,d++),zf));else if(P=Lt(v,/^else(-if)?$/,!0)){let H=T,B;for(;H--&&(B=s[H],B.type===3););if(B&&xo(B)&&Lt(B,"if")){s.splice(T,1),T--;let fe=o[o.length-1];for(;fe.alternate.type===19;)fe=fe.alternate;fe.alternate=P.exp?il(P.exp,co(k,M,d++),zf):co(k,M,d++)}else t.onError(Oe(30,P.loc))}else if(R=Lt(v,"for")){a=!0;const H=R.parseResult||Om(R.exp);H?o.push(Ve(t.helper(xu),[H.source,tr(cl(H),co(k,M),!0)])):t.onError(Oe(32,R.loc))}else{if(b){if(f.has(b)){t.onError(Oe(38,N));continue}f.add(b),b==="default"&&(u=!0)}i.push(Me(k,M))}}if(!c){const T=(v,g)=>{const E=n(v,g,r);return t.compatConfig&&(E.isNonScopedSlot=!0),Me("default",E)};l?h.length&&h.some(v=>Pm(v))&&(u?t.onError(Oe(39,h[0].loc)):i.push(T(void 0,h))):i.push(T(void 0,s))}const m=a?2:bo(e.children)?3:1;let w=Ft(i.concat(Me("_",ae(m+"",!1))),r);return o.length&&(w=Ve(t.helper(mm),[w,Di(o)])),{slots:w,hasDynamicSlots:a}}function co(e,t,n){const s=[Me("name",e),Me("fn",t)];return n!=null&&s.push(Me("key",ae(String(n),!0))),Ft(s)}function bo(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(n.tagType===2||bo(n.children))return!0;break;case 9:if(bo(n.branches))return!0;break;case 10:case 11:if(bo(n.children))return!0;break}}return!1}function Pm(e){return e.type!==2&&e.type!==12?!0:e.type===2?!!e.content.trim():Pm(e.content)}const Mm=new WeakMap,O_=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:s,props:r}=e,i=e.tagType===1;let o=i?P_(e,t):`"${s}"`;const a=Ae(o)&&o.callee===Oo;let c,l,u,h=0,f,d,m,w=a||o===Ur||o===Nu||!i&&(s==="svg"||s==="foreignObject");if(r.length>0){const T=Lm(e,t,void 0,i,a);c=T.props,h=T.patchFlag,d=T.dynamicPropNames;const v=T.directives;m=v&&v.length?Di(v.map(g=>L_(g,t))):void 0,T.shouldUseBlock&&(w=!0)}if(e.children.length>0)if(o===Do&&(w=!0,h|=1024),i&&o!==Ur&&o!==Do){const{slots:v,hasDynamicSlots:g}=D_(e,t);l=v,g&&(h|=1024)}else if(e.children.length===1&&o!==Ur){const v=e.children[0],g=v.type,E=g===5||g===8;E&&xt(v,t)===0&&(h|=1),E||g===2?l=v:l=e.children}else l=e.children;h!==0&&(u=String(h),d&&d.length&&(f=F_(d))),e.codegenNode=ii(t,o,c,l,u,f,m,!!w,!1,i,e.loc)};function P_(e,t,n=!1){let{tag:s}=e;const r=ll(s),i=Aa(e,"is");if(i)if(r||us("COMPILER_IS_ON_ELEMENT",t)){const c=i.type===6?i.value&&ae(i.value.content,!0):i.exp;if(c)return Ve(t.helper(Oo),[c])}else i.type===6&&i.value.content.startsWith("vue:")&&(s=i.value.content.slice(4));const o=!r&&Lt(e,"is");if(o&&o.exp)return Ve(t.helper(Oo),[o.exp]);const a=vm(s)||t.isBuiltInComponent(s);return a?(n||t.helper(a),a):(t.helper(Pu),t.components.add(s),oi(s,"component"))}function Lm(e,t,n=e.props,s,r,i=!1){const{tag:o,loc:a,children:c}=e;let l=[];const u=[],h=[],f=c.length>0;let d=!1,m=0,w=!1,T=!1,v=!1,g=!1,E=!1,C=!1;const k=[],V=M=>{l.length&&(u.push(Ft(Wf(l),a)),l=[]),M&&u.push(M)},N=({key:M,value:F})=>{if(Et(M)){const P=M.content,R=Ss(P);if(R&&(!s||r)&&P.toLowerCase()!=="onclick"&&P!=="onUpdate:modelValue"&&!rs(P)&&(g=!0),R&&rs(P)&&(C=!0),F.type===20||(F.type===4||F.type===8)&&xt(F,t)>0)return;P==="ref"?w=!0:P==="class"?T=!0:P==="style"?v=!0:P!=="key"&&!k.includes(P)&&k.push(P),s&&(P==="class"||P==="style")&&!k.includes(P)&&k.push(P)}else E=!0};for(let M=0;M<n.length;M++){const F=n[M];if(F.type===6){const{loc:P,name:R,value:H}=F;let B=!0;if(R==="ref"&&(w=!0,t.scopes.vFor>0&&l.push(Me(ae("ref_for",!0),ae("true")))),R==="is"&&(ll(o)||H&&H.content.startsWith("vue:")||us("COMPILER_IS_ON_ELEMENT",t)))continue;l.push(Me(ae(R,!0,Em(P,0,R.length)),ae(H?H.content:"",B,H?H.loc:P)))}else{const{name:P,arg:R,exp:H,loc:B}=F,fe=P==="bind",ce=P==="on";if(P==="slot"){s||t.onError(Oe(40,B));continue}if(P==="once"||P==="memo"||P==="is"||fe&&Zn(R,"is")&&(ll(o)||us("COMPILER_IS_ON_ELEMENT",t))||ce&&i)continue;if((fe&&Zn(R,"key")||ce&&f&&Zn(R,"vue:before-update"))&&(d=!0),fe&&Zn(R,"ref")&&t.scopes.vFor>0&&l.push(Me(ae("ref_for",!0),ae("true"))),!R&&(fe||ce)){if(E=!0,H)if(fe){if(V(),us("COMPILER_V_BIND_OBJECT_ORDER",t)){u.unshift(H);continue}u.push(H)}else V({type:14,loc:B,callee:t.helper(Bu),arguments:s?[H]:[H,"true"]});else t.onError(Oe(fe?34:35,B));continue}const be=t.directiveTransforms[P];if(be){const{props:ye,needRuntime:ft}=be(F,e,t);!i&&ye.forEach(N),ce&&R&&!Et(R)?V(Ft(ye,a)):l.push(...ye),ft&&(h.push(F),On(ft)&&Mm.set(F,ft))}else v0(P)||(h.push(F),f&&(d=!0))}}let b;if(u.length?(V(),u.length>1?b=Ve(t.helper(Po),u,a):b=u[0]):l.length&&(b=Ft(Wf(l),a)),E?m|=16:(T&&!s&&(m|=2),v&&!s&&(m|=4),k.length&&(m|=8),g&&(m|=32)),!d&&(m===0||m===32)&&(w||C||h.length>0)&&(m|=512),!t.inSSR&&b)switch(b.type){case 15:let M=-1,F=-1,P=!1;for(let B=0;B<b.properties.length;B++){const fe=b.properties[B].key;Et(fe)?fe.content==="class"?M=B:fe.content==="style"&&(F=B):fe.isHandlerKey||(P=!0)}const R=b.properties[M],H=b.properties[F];P?b=Ve(t.helper(ri),[b]):(R&&!Et(R.value)&&(R.value=Ve(t.helper($u),[R.value])),H&&(v||H.value.type===4&&H.value.content.trim()[0]==="["||H.value.type===17)&&(H.value=Ve(t.helper(Vu),[H.value])));break;case 14:break;default:b=Ve(t.helper(ri),[Ve(t.helper(Ri),[b])]);break}return{props:b,directives:h,patchFlag:m,dynamicPropNames:k,shouldUseBlock:d}}function Wf(e){const t=new Map,n=[];for(let s=0;s<e.length;s++){const r=e[s];if(r.key.type===8||!r.key.isStatic){n.push(r);continue}const i=r.key.content,o=t.get(i);o?(i==="style"||i==="class"||Ss(i))&&M_(o,r):(t.set(i,r),n.push(r))}return n}function M_(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=Di([e.value,t.value],e.loc)}function L_(e,t){const n=[],s=Mm.get(e);s?n.push(t.helperString(s)):(t.helper(Mu),t.directives.add(e.name),n.push(oi(e.name,"directive")));const{loc:r}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const i=ae("true",!1,r);n.push(Ft(e.modifiers.map(o=>Me(o,i)),r))}return Di(n,e.loc)}function F_(e){let t="[";for(let n=0,s=e.length;n<s;n++)t+=JSON.stringify(e[n]),n<s-1&&(t+=", ");return t+"]"}function ll(e){return e==="component"||e==="Component"}const x_=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$_=/-(\w)/g,Gf=x_(e=>e.replace($_,(t,n)=>n?n.toUpperCase():"")),V_=(e,t)=>{if($o(e)){const{children:n,loc:s}=e,{slotName:r,slotProps:i}=B_(e,t),o=[t.prefixIdentifiers?"_ctx.$slots":"$slots",r,"{}","undefined","true"];let a=2;i&&(o[2]=i,a=3),n.length&&(o[3]=tr([],n,!1,!1,s),a=4),t.scopeId&&!t.slotted&&(a=5),o.splice(a),e.codegenNode=Ve(t.helper(gm),o,s)}};function B_(e,t){let n='"default"',s;const r=[];for(let i=0;i<e.props.length;i++){const o=e.props[i];o.type===6?o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=Gf(o.name),r.push(o))):o.name==="bind"&&Zn(o.arg,"name")?o.exp&&(n=o.exp):(o.name==="bind"&&o.arg&&Et(o.arg)&&(o.arg.content=Gf(o.arg.content)),r.push(o))}if(r.length>0){const{props:i,directives:o}=Lm(e,t,r,!1,!1);s=i,o.length&&t.onError(Oe(36,o[0].loc))}return{slotName:n,slotProps:s}}const U_=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Fm=(e,t,n,s)=>{const{loc:r,modifiers:i,arg:o}=e;!e.exp&&!i.length&&n.onError(Oe(35,r));let a;if(o.type===4)if(o.isStatic){let h=o.content;h.startsWith("vue:")&&(h=`vnode-${h.slice(4)}`);const f=t.tagType!==0||h.startsWith("vnode")||!/[A-Z]/.test(h)?js(et(h)):`on:${h}`;a=ae(f,!0,o.loc)}else a=qt([`${n.helperString(rl)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(rl)}(`),a.children.push(")");let c=e.exp;c&&!c.content.trim()&&(c=void 0);let l=n.cacheHandlers&&!c&&!n.inVOnce;if(c){const h=wm(c.content),f=!(h||U_.test(c.content)),d=c.content.includes(";");(f||l&&h)&&(c=qt([`${f?"$event":"(...args)"} => ${d?"{":"("}`,c,d?"}":")"]))}let u={props:[Me(a,c||ae("() => {}",!1,r))]};return s&&(u=s(u)),l&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(h=>h.key.isHandlerKey=!0),u},j_=(e,t,n)=>{const{exp:s,modifiers:r,loc:i}=e,o=e.arg;return o.type!==4?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),r.includes("camel")&&(o.type===4?o.isStatic?o.content=et(o.content):o.content=`${n.helperString(sl)}(${o.content})`:(o.children.unshift(`${n.helperString(sl)}(`),o.children.push(")"))),n.inSSR||(r.includes("prop")&&Qf(o,"."),r.includes("attr")&&Qf(o,"^")),!s||s.type===4&&!s.content.trim()?(n.onError(Oe(34,i)),{props:[Me(o,ae("",!0,i))]}):{props:[Me(o,s)]}},Qf=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},q_=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const n=e.children;let s,r=!1;for(let i=0;i<n.length;i++){const o=n[i];if(gc(o)){r=!0;for(let a=i+1;a<n.length;a++){const c=n[a];if(gc(c))s||(s=n[i]=qt([o],o.loc)),s.children.push(" + ",c),n.splice(a,1),a--;else{s=void 0;break}}}}if(!(!r||n.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(i=>i.type===7&&!t.directiveTransforms[i.name])&&e.tag!=="template")))for(let i=0;i<n.length;i++){const o=n[i];if(gc(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!t.ssr&&xt(o,t)===0&&a.push(1+""),n[i]={type:12,content:o,loc:o.loc,codegenNode:Ve(t.helper(Ou),a)}}}}},Yf=new WeakSet,H_=(e,t)=>{if(e.type===1&&Lt(e,"once",!0))return Yf.has(e)||t.inVOnce?void 0:(Yf.add(e),t.inVOnce=!0,t.helper(Mo),()=>{t.inVOnce=!1;const n=t.currentNode;n.codegenNode&&(n.codegenNode=t.cache(n.codegenNode,!0))})},xm=(e,t,n)=>{const{exp:s,arg:r}=e;if(!s)return n.onError(Oe(41,e.loc)),lo();const i=s.loc.source,o=s.type===4?s.content:i,a=n.bindingMetadata[i];if(a==="props"||a==="props-aliased")return n.onError(Oe(44,s.loc)),lo();const c=!1;if(!o.trim()||!wm(o)&&!c)return n.onError(Oe(42,s.loc)),lo();const l=r||ae("modelValue",!0),u=r?Et(r)?`onUpdate:${r.content}`:qt(['"onUpdate:" + ',r]):"onUpdate:modelValue";let h;const f=n.isTS?"($event: any)":"$event";h=qt([`${f} => ((`,s,") = $event)"]);const d=[Me(l,e.exp),Me(u,h)];if(e.modifiers.length&&t.tagType===1){const m=e.modifiers.map(T=>(qu(T)?T:JSON.stringify(T))+": true").join(", "),w=r?Et(r)?`${r.content}Modifiers`:qt([r,' + "Modifiers"']):"modelModifiers";d.push(Me(w,ae(`{ ${m} }`,!1,e.loc,2)))}return lo(d)};function lo(e=[]){return{props:e}}const K_=/[\w).+\-_$\]]/,z_=(e,t)=>{us("COMPILER_FILTER",t)&&(e.type===5&&Bo(e.content,t),e.type===1&&e.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&Bo(n.exp,t)}))};function Bo(e,t){if(e.type===4)Xf(e,t);else for(let n=0;n<e.children.length;n++){const s=e.children[n];typeof s=="object"&&(s.type===4?Xf(s,t):s.type===8?Bo(e,t):s.type===5&&Bo(s.content,t))}}function Xf(e,t){const n=e.content;let s=!1,r=!1,i=!1,o=!1,a=0,c=0,l=0,u=0,h,f,d,m,w=[];for(d=0;d<n.length;d++)if(f=h,h=n.charCodeAt(d),s)h===39&&f!==92&&(s=!1);else if(r)h===34&&f!==92&&(r=!1);else if(i)h===96&&f!==92&&(i=!1);else if(o)h===47&&f!==92&&(o=!1);else if(h===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!c&&!l)m===void 0?(u=d+1,m=n.slice(0,d).trim()):T();else{switch(h){case 34:r=!0;break;case 39:s=!0;break;case 96:i=!0;break;case 40:l++;break;case 41:l--;break;case 91:c++;break;case 93:c--;break;case 123:a++;break;case 125:a--;break}if(h===47){let v=d-1,g;for(;v>=0&&(g=n.charAt(v),g===" ");v--);(!g||!K_.test(g))&&(o=!0)}}m===void 0?m=n.slice(0,d).trim():u!==0&&T();function T(){w.push(n.slice(u,d).trim()),u=d+1}if(w.length){for(d=0;d<w.length;d++)m=W_(m,w[d],t);e.content=m}}function W_(e,t,n){n.helper(Lu);const s=t.indexOf("(");if(s<0)return n.filters.add(t),`${oi(t,"filter")}(${e})`;{const r=t.slice(0,s),i=t.slice(s+1);return n.filters.add(r),`${oi(r,"filter")}(${e}${i!==")"?","+i:i}`}}const Jf=new WeakSet,G_=(e,t)=>{if(e.type===1){const n=Lt(e,"memo");return!n||Jf.has(e)?void 0:(Jf.add(e),()=>{const s=e.codegenNode||t.currentNode.codegenNode;s&&s.type===13&&(e.tagType!==1&&Hu(s,t),e.codegenNode=Ve(t.helper(ju),[n.exp,tr(void 0,s),"_cache",String(t.cached++)]))})}};function Q_(e){return[[H_,b_,G_,C_,z_,V_,O_,N_,q_],{on:Fm,bind:j_,model:xm}]}function Y_(e,t={}){const n=t.onError||ku,s=t.mode==="module";t.prefixIdentifiers===!0?n(Oe(47)):s&&n(Oe(48));const r=!1;t.cacheHandlers&&n(Oe(49)),t.scopeId&&!s&&n(Oe(50));const i=oe(e)?jT(e,t):e,[o,a]=Q_();return n_(i,we({},t,{prefixIdentifiers:r,nodeTransforms:[...o,...t.nodeTransforms||[]],directiveTransforms:we({},a,t.directiveTransforms||{})})),o_(i,we({},t,{prefixIdentifiers:r}))}const X_=()=>({props:[]}),$m=Symbol(""),Vm=Symbol(""),Bm=Symbol(""),Um=Symbol(""),ul=Symbol(""),jm=Symbol(""),qm=Symbol(""),Hm=Symbol(""),Km=Symbol(""),zm=Symbol("");AT({[$m]:"vModelRadio",[Vm]:"vModelCheckbox",[Bm]:"vModelText",[Um]:"vModelSelect",[ul]:"vModelDynamic",[jm]:"withModifiers",[qm]:"withKeys",[Hm]:"vShow",[Km]:"Transition",[zm]:"TransitionGroup"});let Os;function J_(e,t=!1){return Os||(Os=document.createElement("div")),t?(Os.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Os.children[0].getAttribute("foo")):(Os.innerHTML=e,Os.textContent)}const Z_=bt("style,iframe,script,noscript",!0),eC={isVoidTag:u0,isNativeTag:e=>c0(e)||l0(e),isPreTag:e=>e==="pre",decodeEntities:J_,isBuiltInComponent:e=>{if($s(e,"Transition"))return Km;if($s(e,"TransitionGroup"))return zm},getNamespace(e,t){let n=t?t.ns:0;if(t&&n===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(n=0);else t&&n===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(n=0);if(n===0){if(e==="svg")return 1;if(e==="math")return 2}return n},getTextMode({tag:e,ns:t}){if(t===0){if(e==="textarea"||e==="title")return 1;if(Z_(e))return 2}return 0}},tC=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[n]={type:7,name:"bind",arg:ae("style",!0,t.loc),exp:nC(t.value.content,t.loc),modifiers:[],loc:t.loc})})},nC=(e,t)=>{const n=Np(e);return ae(JSON.stringify(n),!1,t,3)};function ln(e,t){return Oe(e,t)}const sC=(e,t,n)=>{const{exp:s,loc:r}=e;return s||n.onError(ln(51,r)),t.children.length&&(n.onError(ln(52,r)),t.children.length=0),{props:[Me(ae("innerHTML",!0,r),s||ae("",!0))]}},rC=(e,t,n)=>{const{exp:s,loc:r}=e;return s||n.onError(ln(53,r)),t.children.length&&(n.onError(ln(54,r)),t.children.length=0),{props:[Me(ae("textContent",!0),s?xt(s,n)>0?s:Ve(n.helperString(Ia),[s],r):ae("",!0))]}},iC=(e,t,n)=>{const s=xm(e,t,n);if(!s.props.length||t.tagType===1)return s;e.arg&&n.onError(ln(56,e.arg.loc));const{tag:r}=t,i=n.isCustomElement(r);if(r==="input"||r==="textarea"||r==="select"||i){let o=Bm,a=!1;if(r==="input"||i){const c=Aa(t,"type");if(c){if(c.type===7)o=ul;else if(c.value)switch(c.value.content){case"radio":o=$m;break;case"checkbox":o=Vm;break;case"file":a=!0,n.onError(ln(57,e.loc));break}}else FT(t)&&(o=ul)}else r==="select"&&(o=Um);a||(s.needRuntime=n.helper(o))}else n.onError(ln(55,e.loc));return s.props=s.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),s},oC=bt("passive,once,capture"),aC=bt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),cC=bt("left,right"),Wm=bt("onkeyup,onkeydown,onkeypress",!0),lC=(e,t,n,s)=>{const r=[],i=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];c==="native"&&ai("COMPILER_V_ON_NATIVE",n)||oC(c)?o.push(c):cC(c)?Et(e)?Wm(e.content)?r.push(c):i.push(c):(r.push(c),i.push(c)):aC(c)?i.push(c):r.push(c)}return{keyModifiers:r,nonKeyModifiers:i,eventOptionModifiers:o}},Zf=(e,t)=>Et(e)&&e.content.toLowerCase()==="onclick"?ae(t,!0):e.type!==4?qt(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,uC=(e,t,n)=>Fm(e,t,n,s=>{const{modifiers:r}=e;if(!r.length)return s;let{key:i,value:o}=s.props[0];const{keyModifiers:a,nonKeyModifiers:c,eventOptionModifiers:l}=lC(i,r,n,e.loc);if(c.includes("right")&&(i=Zf(i,"onContextmenu")),c.includes("middle")&&(i=Zf(i,"onMouseup")),c.length&&(o=Ve(n.helper(jm),[o,JSON.stringify(c)])),a.length&&(!Et(i)||Wm(i.content))&&(o=Ve(n.helper(qm),[o,JSON.stringify(a)])),l.length){const u=l.map(As).join("");i=Et(i)?ae(`${i.content}${u}`,!0):qt(["(",i,`) + "${u}"`])}return{props:[Me(i,o)]}}),hC=(e,t,n)=>{const{exp:s,loc:r}=e;return s||n.onError(ln(59,r)),{props:[],needRuntime:n.helper(Hm)}},fC=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&(t.onError(ln(61,e.loc)),t.removeNode())},dC=[tC],pC={cloak:X_,html:sC,text:rC,model:iC,on:uC,show:hC};function gC(e,t={}){return Y_(e,we({},eC,t,{nodeTransforms:[fC,...dC,...t.nodeTransforms||[]],directiveTransforms:we({},pC,t.directiveTransforms||{}),transformHoist:null}))}const ed=Object.create(null);function mC(e,t){if(!oe(e))if(e.nodeType)e=e.innerHTML;else return mt;const n=e,s=ed[n];if(s)return s;if(e[0]==="#"){const a=document.querySelector(e);e=a?a.innerHTML:""}const r=we({hoistStatic:!0,onError:void 0,onWarn:mt},t);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=a=>!!customElements.get(a));const{code:i}=gC(e,r),o=new Function("Vue",i)(bT);return o._rc=!0,ed[n]=o}$g(mC);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof window<"u";function yC(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Te=Object.assign;function yc(e,t){const n={};for(const s in t){const r=t[s];n[s]=Ht(r)?r.map(e):e(r)}return n}const qr=()=>{},Ht=Array.isArray,vC=/\/$/,wC=e=>e.replace(vC,"");function vc(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),r=e(i)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=_C(s??t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function EC(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function td(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function bC(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&rr(t.matched[s],n.matched[r])&&Gm(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Gm(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!TC(e[n],t[n]))return!1;return!0}function TC(e,t){return Ht(e)?nd(e,t):Ht(t)?nd(t,e):e===t}function nd(e,t){return Ht(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function _C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var li;(function(e){e.pop="pop",e.push="push"})(li||(li={}));var Hr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Hr||(Hr={}));function CC(e){if(!e)if(Ls){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),wC(e)}const SC=/^[^#]+#/;function IC(e,t){return e.replace(SC,"#")+t}function AC(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Da=()=>({left:window.pageXOffset,top:window.pageYOffset});function kC(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=AC(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function sd(e,t){return(history.state?history.state.position-t:-1)+e}const hl=new Map;function NC(e,t){hl.set(e,t)}function RC(e){const t=hl.get(e);return hl.delete(e),t}let DC=()=>location.protocol+"//"+location.host;function Qm(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),td(c,"")}return td(n,e)+s+r}function OC(e,t,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=Qm(e,location),m=n.value,w=t.value;let T=0;if(f){if(n.value=d,t.value=f,o&&o===m){o=null;return}T=w?f.position-w.position:0}else s(d);r.forEach(v=>{v(n.value,m,{delta:T,type:li.pop,direction:T?T>0?Hr.forward:Hr.back:Hr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:Da()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function rd(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Da():null}}function PC(e){const{history:t,location:n}=window,s={value:Qm(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:DC()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=Te({},t.state,rd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Te({},r.value,t.state,{forward:c,scroll:Da()});i(u.current,u,!0);const h=Te({},rd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function MC(e){e=CC(e);const t=PC(e),n=OC(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Te({location:"",base:e,go:s,createHref:IC.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function LC(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),MC(e)}function FC(e){return typeof e=="string"||e&&typeof e=="object"}function Ym(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xm=Symbol("");var id;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(id||(id={}));function ir(e,t){return Te(new Error,{type:e,[Xm]:!0},t)}function nn(e,t){return e instanceof Error&&Xm in e&&(t==null||!!(e.type&t))}const od="[^/]+?",xC={sensitive:!1,strict:!1,start:!0,end:!0},$C=/[.+*?^${}()[\]/\\]/g;function VC(e,t){const n=Te({},xC,t),s=[];let r=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace($C,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:w,optional:T,regexp:v}=f;i.push({name:m,repeatable:w,optional:T});const g=v||od;if(g!==od){d+=10;try{new RegExp(`(${g})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${g}): `+C.message)}}let E=w?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(E=T&&l.length<2?`(?:/${E})`:"/"+E),T&&(E+="?"),r+=E,d+=20,T&&(d+=-8),w&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:w,optional:T}=d,v=m in l?l[m]:"";if(Ht(v)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const g=Ht(v)?v.join("/"):v;if(!g)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=g}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function BC(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function UC(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=BC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ad(s))return 1;if(ad(r))return-1}return r.length-s.length}function ad(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jC={type:0,value:""},qC=/[a-zA-Z0-9_]/;function HC(e){if(!e)return[[]];if(e==="/")return[[jC]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:qC.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function KC(e,t,n){const s=VC(HC(e.path),n),r=Te(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function zC(e,t){const n=[],s=new Map;t=ud({strict:!1,end:!0,sensitive:!1},t);function r(u){return s.get(u)}function i(u,h,f){const d=!f,m=WC(u);m.aliasOf=f&&f.record;const w=ud(t,u),T=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of E)T.push(Te({},m,{components:f?f.record.components:m.components,path:C,aliasOf:f?f.record:m}))}let v,g;for(const E of T){const{path:C}=E;if(h&&C[0]!=="/"){const k=h.record.path,V=k[k.length-1]==="/"?"":"/";E.path=h.record.path+(C&&V+C)}if(v=KC(E,h,w),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!ld(v)&&o(u.name)),m.children){const k=m.children;for(let V=0;V<k.length;V++)i(k[V],v,f&&f.children[V])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return g?()=>{o(g)}:qr}function o(u){if(Ym(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&UC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Jm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ld(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},m,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ir(1,{location:u});w=f.record.name,d=Te(cd(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&cd(u.params,f.keys.map(g=>g.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(g=>g.re.test(m)),f&&(d=f.parse(m),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw ir(1,{location:u,currentLocation:h});w=f.record.name,d=Te({},h.params,u.params),m=f.stringify(d)}const T=[];let v=f;for(;v;)T.unshift(v.record),v=v.parent;return{name:w,path:m,params:d,matched:T,meta:QC(T)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function cd(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function WC(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:GC(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function GC(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function ld(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function QC(e){return e.reduce((t,n)=>Te(t,n.meta),{})}function ud(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Jm(e,t){return t.children.some(n=>n===e||Jm(e,n))}const Zm=/#/g,YC=/&/g,XC=/\//g,JC=/=/g,ZC=/\?/g,ey=/\+/g,eS=/%5B/g,tS=/%5D/g,ty=/%5E/g,nS=/%60/g,ny=/%7B/g,sS=/%7C/g,sy=/%7D/g,rS=/%20/g;function Wu(e){return encodeURI(""+e).replace(sS,"|").replace(eS,"[").replace(tS,"]")}function iS(e){return Wu(e).replace(ny,"{").replace(sy,"}").replace(ty,"^")}function fl(e){return Wu(e).replace(ey,"%2B").replace(rS,"+").replace(Zm,"%23").replace(YC,"%26").replace(nS,"`").replace(ny,"{").replace(sy,"}").replace(ty,"^")}function oS(e){return fl(e).replace(JC,"%3D")}function aS(e){return Wu(e).replace(Zm,"%23").replace(ZC,"%3F")}function cS(e){return e==null?"":aS(e).replace(XC,"%2F")}function Uo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function lS(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ey," "),o=i.indexOf("="),a=Uo(o<0?i:i.slice(0,o)),c=o<0?null:Uo(i.slice(o+1));if(a in t){let l=t[a];Ht(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function hd(e){let t="";for(let n in e){const s=e[n];if(n=oS(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ht(s)?s.map(i=>i&&fl(i)):[s&&fl(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function uS(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ht(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const hS=Symbol(""),fd=Symbol(""),Gu=Symbol(""),ry=Symbol(""),dl=Symbol("");function Ar(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function _n(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ir(4,{from:n,to:t})):h instanceof Error?a(h):FC(h)?a(ir(2,{from:t,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(s&&s.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function wc(e,t,n,s){const r=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(fS(a)){const l=(a.__vccOpts||a)[t];l&&r.push(_n(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=yC(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&_n(f,n,s,i,o)()}))}}return r}function fS(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function dd(e){const t=Jt(Gu),n=Jt(ry),s=It(()=>t.resolve(as(e.to))),r=It(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(rr.bind(null,u));if(f>-1)return f;const d=pd(c[l-2]);return l>1&&pd(u)===d&&h[h.length-1].path!==d?h.findIndex(rr.bind(null,c[l-2])):f}),i=It(()=>r.value>-1&&mS(n.params,s.value.params)),o=It(()=>r.value>-1&&r.value===n.matched.length-1&&Gm(n.params,s.value.params));function a(c={}){return gS(c)?t[as(e.replace)?"replace":"push"](as(e.to)).catch(qr):Promise.resolve()}return{route:s,href:It(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const dS=Ii({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dd,setup(e,{slots:t}){const n=mr(dd(e)),{options:s}=Jt(Gu),r=It(()=>({[gd(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gd(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ca("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),pS=dS;function gS(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mS(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ht(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function pd(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const gd=(e,t,n)=>e??t??n,yS=Ii({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Jt(dl),r=It(()=>e.route||s.value),i=Jt(fd,0),o=It(()=>{let l=as(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=It(()=>r.value.matched[o.value]);Fr(fd,It(()=>o.value+1)),Fr(hS,a),Fr(dl,r);const c=Lr();return zs(()=>[c.value,a.value,e.name],([l,u,h],[f,d,m])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!rr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=r.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return md(n.default,{Component:f,route:l});const d=h.props[u],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,T=Ca(f,Te({},m,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return md(n.default,{Component:T,route:l})||T}}});function md(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const vS=yS;function wS(e){const t=zC(e.routes,e),n=e.parseQuery||lS,s=e.stringifyQuery||hd,r=e.history,i=Ar(),o=Ar(),a=Ar(),c=Gp(En);let l=En;Ls&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yc.bind(null,I=>""+I),h=yc.bind(null,cS),f=yc.bind(null,Uo);function d(I,K){let j,X;return Ym(I)?(j=t.getRecordMatcher(I),X=K):X=I,t.addRoute(X,j)}function m(I){const K=t.getRecordMatcher(I);K&&t.removeRoute(K)}function w(){return t.getRoutes().map(I=>I.record)}function T(I){return!!t.getRecordMatcher(I)}function v(I,K){if(K=Te({},K||c.value),typeof I=="string"){const p=vc(n,I,K.path),y=t.resolve({path:p.path},K),_=r.createHref(p.fullPath);return Te(p,y,{params:f(y.params),hash:Uo(p.hash),redirectedFrom:void 0,href:_})}let j;if("path"in I)j=Te({},I,{path:vc(n,I.path,K.path).path});else{const p=Te({},I.params);for(const y in p)p[y]==null&&delete p[y];j=Te({},I,{params:h(I.params)}),K.params=h(K.params)}const X=t.resolve(j,K),de=I.hash||"";X.params=u(f(X.params));const Pe=EC(s,Te({},I,{hash:iS(de),path:X.path})),le=r.createHref(Pe);return Te({fullPath:Pe,hash:de,query:s===hd?uS(I.query):I.query||{}},X,{redirectedFrom:void 0,href:le})}function g(I){return typeof I=="string"?vc(n,I,c.value.path):Te({},I)}function E(I,K){if(l!==I)return ir(8,{from:K,to:I})}function C(I){return N(I)}function k(I){return C(Te(g(I),{replace:!0}))}function V(I){const K=I.matched[I.matched.length-1];if(K&&K.redirect){const{redirect:j}=K;let X=typeof j=="function"?j(I):j;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=g(X):{path:X},X.params={}),Te({query:I.query,hash:I.hash,params:"path"in X?{}:I.params},X)}}function N(I,K){const j=l=v(I),X=c.value,de=I.state,Pe=I.force,le=I.replace===!0,p=V(j);if(p)return N(Te(g(p),{state:typeof p=="object"?Te({},de,p.state):de,force:Pe,replace:le}),K||j);const y=j;y.redirectedFrom=K;let _;return!Pe&&bC(s,X,j)&&(_=ir(16,{to:y,from:X}),Kn(X,X,!0,!1)),(_?Promise.resolve(_):M(y,X)).catch(S=>nn(S)?nn(S,2)?S:ft(S):be(S,y,X)).then(S=>{if(S){if(nn(S,2))return N(Te({replace:le},g(S.to),{state:typeof S.to=="object"?Te({},de,S.to.state):de,force:Pe}),K||y)}else S=P(y,X,!0,le,de);return F(y,X,S),S})}function b(I,K){const j=E(I,K);return j?Promise.reject(j):Promise.resolve()}function M(I,K){let j;const[X,de,Pe]=ES(I,K);j=wc(X.reverse(),"beforeRouteLeave",I,K);for(const p of X)p.leaveGuards.forEach(y=>{j.push(_n(y,I,K))});const le=b.bind(null,I,K);return j.push(le),Ps(j).then(()=>{j=[];for(const p of i.list())j.push(_n(p,I,K));return j.push(le),Ps(j)}).then(()=>{j=wc(de,"beforeRouteUpdate",I,K);for(const p of de)p.updateGuards.forEach(y=>{j.push(_n(y,I,K))});return j.push(le),Ps(j)}).then(()=>{j=[];for(const p of I.matched)if(p.beforeEnter&&!K.matched.includes(p))if(Ht(p.beforeEnter))for(const y of p.beforeEnter)j.push(_n(y,I,K));else j.push(_n(p.beforeEnter,I,K));return j.push(le),Ps(j)}).then(()=>(I.matched.forEach(p=>p.enterCallbacks={}),j=wc(Pe,"beforeRouteEnter",I,K),j.push(le),Ps(j))).then(()=>{j=[];for(const p of o.list())j.push(_n(p,I,K));return j.push(le),Ps(j)}).catch(p=>nn(p,8)?p:Promise.reject(p))}function F(I,K,j){for(const X of a.list())X(I,K,j)}function P(I,K,j,X,de){const Pe=E(I,K);if(Pe)return Pe;const le=K===En,p=Ls?history.state:{};j&&(X||le?r.replace(I.fullPath,Te({scroll:le&&p&&p.scroll},de)):r.push(I.fullPath,de)),c.value=I,Kn(I,K,j,le),ft()}let R;function H(){R||(R=r.listen((I,K,j)=>{if(!Qi.listening)return;const X=v(I),de=V(X);if(de){N(Te(de,{replace:!0}),X).catch(qr);return}l=X;const Pe=c.value;Ls&&NC(sd(Pe.fullPath,j.delta),Da()),M(X,Pe).catch(le=>nn(le,12)?le:nn(le,2)?(N(le.to,X).then(p=>{nn(p,20)&&!j.delta&&j.type===li.pop&&r.go(-1,!1)}).catch(qr),Promise.reject()):(j.delta&&r.go(-j.delta,!1),be(le,X,Pe))).then(le=>{le=le||P(X,Pe,!1),le&&(j.delta&&!nn(le,8)?r.go(-j.delta,!1):j.type===li.pop&&nn(le,20)&&r.go(-1,!1)),F(X,Pe,le)}).catch(qr)}))}let B=Ar(),fe=Ar(),ce;function be(I,K,j){ft(I);const X=fe.list();return X.length?X.forEach(de=>de(I,K,j)):console.error(I),Promise.reject(I)}function ye(){return ce&&c.value!==En?Promise.resolve():new Promise((I,K)=>{B.add([I,K])})}function ft(I){return ce||(ce=!I,H(),B.list().forEach(([K,j])=>I?j(I):K()),B.reset()),I}function Kn(I,K,j,X){const{scrollBehavior:de}=e;if(!Ls||!de)return Promise.resolve();const Pe=!j&&RC(sd(I.fullPath,0))||(X||!j)&&history.state&&history.state.scroll||null;return fa().then(()=>de(I,K,Pe)).then(le=>le&&kC(le)).catch(le=>be(le,I,K))}const Bt=I=>r.go(I);let yt;const Rs=new Set,Qi={currentRoute:c,listening:!0,addRoute:d,removeRoute:m,hasRoute:T,getRoutes:w,resolve:v,options:e,push:C,replace:k,go:Bt,back:()=>Bt(-1),forward:()=>Bt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:ye,install(I){const K=this;I.component("RouterLink",pS),I.component("RouterView",vS),I.config.globalProperties.$router=K,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>as(c)}),Ls&&!yt&&c.value===En&&(yt=!0,C(r.location).catch(de=>{}));const j={};for(const de in En)j[de]=It(()=>c.value[de]);I.provide(Gu,K),I.provide(ry,mr(j)),I.provide(dl,c);const X=I.unmount;Rs.add(I),I.unmount=function(){Rs.delete(I),Rs.size<1&&(l=En,R&&R(),R=null,c.value=En,yt=!1,ce=!1),X()}}};return Qi}function Ps(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ES(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>rr(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>rr(l,c))||r.push(c))}return[n,s,r]}const bS = {
      name: "switchbtn",
      data() {
        return { isDark: !1 };
      },
      methods: {
        mode() {
          (this.isDark = !this.isDark),
            localStorage.setItem("dark-mode", this.isDark),
            document.body.classList.toggle("dark", this.isDark);
        },
      },
      mounted() {
        this.isDark = localStorage.getItem("dark-mode") === "true";
      },
      template: ` 
  <button class="switch" @click="mode" :class="{ active: isDark }">
    <span v-if="isDark" class="contnet">
      <i class="fa fa-sun"></i>
    </span>
    <span v-else class="contnet">
      <i class="fa fa-moon"></i>
    </span>
  </button>
  `,
    },
    TS = {
      name: "menublog",
      data() {
        return { enlaces: [{ id: 1, link: "/", title: "Home" }] };
      },
      components: { switchButton: bS },
      methods: {
        goToExternalPage() {
          window.open("/webpagelgrr/index.html");
        },
      },
      mounted() {
        document.body.classList.toggle("dark", this.isDark);
      },
      computed: {
        isDark() {
          return localStorage.getItem("dark-mode") === "true";
        },
      },
      template: `
   <nav class="navbar-background navbar navbar-expand-sm fixed-top">
        <div class="container-fluid">
          <a class="navbar-brandt" href="../index.html"
            ><img
              width="50"
              height="40"
              src="/webpagelgrr/assets/logo_LGRR-fcbe0538.png"
              alt="logo"
          /></a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="container collapse navbar-collapse justify-content-center"
            id="navbarCollapse"
          >
            <ul class=" navbar-nav" >  
            <li class="nav-item mx-3">
                 <a class="nav-link text-light" href="/webpagelgrr/index.html">home</a>
              </li>            
              <li class="nav-item mx-3">
                 <router-link class="nav-link text-light" to="/">Blog</router-link>
              </li>
              
            </ul>
            <switch-button></switch-button>
          </div>
        </div>
      </nav>
  `,
    },
    _S = {
      name: "socialMedia",
      data() {
        return {
          socialMediaLinks: [
            {
              id: 1,
              link: "https://www.linkedin.com/in/luis-gerardo-rivera-rivera",
              icon: "fa-linkedin",
            },
            {
              id: 2,
              link: "https://www.instagram.com/luisgerardo4640",
              icon: "fa-instagram",
            },
            { id: 3, link: "https://github.com/LuisGRR", icon: "fa-github" },
          ],
        };
      },
      template: `
    <ul class="icons-list redes-sociales-list" v-for="socialMedia in socialMediaLinks" :key="socialMedia.id">
      <li>
        <a
          :href="socialMedia.link"
          target="_blank"
          class="social-icons"
          ><i class="fa-brands" :class="socialMedia.icon"></i
        ></a>
      </li>
    </ul>
  `,
    },
    CS = {
      name: "footerBlog",
      components: { socialMedia: _S },
      template: `
  <div class="container text-center">
          <h1 class="footer__title animated-header-name-contend">Contacto</h1>
          <ul class="footer__contact-information">
            <li>
              <a href="tel:8331888184" class="contact-styles"
                ><i class="fa-solid fa-phone"></i> Telefono: 8331888184</a
              >
            </li>
            <li>
              <a
                href="mailto:rivera.rivera.gerardo.luis@gmail.com"
                class="contact-styles"
                ><i class="fa-solid fa-envelope"></i> Correo:
                rivera.rivera.gerardo.luis@gmail.com</a
              >
            </li>
            <li>
              <a
                href="https://goo.gl/maps/aRLydV3oGEaiKJFw9"
                class="contact-styles"
                ><i class="fa-solid fa-location-dot"></i> Cd Cuauhtémoc, Ver.</a
              >
            </li>
          </ul>
        </div>
        <hr
          style="
            border: 0;
            border-top: 1px solid #525b60;
            display: block;
            margin-top: 40px;
          "
        />
        <div class="container">
          <div class="d-sm-flex flex-row mb-4 justify-content-center">
            <social-Media></social-Media>
          </div>
          <p class="footer__paragraph">
            Copyright Luis Gerardo Rivera Rivera &copy; 2022
          </p>
        </div>
  `,
    },
    SS = {
      name: "postCard",
      props: {
        id: String,
        title: String,
        description: String,
        date: Object,
        img: String,
        pagina: String,
      },
      methods: {
        formatDate() {
          const e = new Date(
            this.date.seconds * 1e3 + this.date.nanoseconds / 1e6
          );
          return (
            e.getDate().toString().padStart(2, "0") +
            "/" +
            (e.getMonth() + 1).toString().padStart(2, "0") +
            "/" +
            e.getFullYear().toString().substr(-2) +
            " " +
            e.getHours().toString().padStart(2, "0") +
            ":" +
            e.getMinutes().toString().padStart(2, "0")
          );
        },
      },
      template: ` 
      <article class="d-flex flex-column flex-md-row gap-3 my-3"  style="height: 230px;">
        <div class="contentCard flex-shrink-0">
          <img
            style="width: 300px; height: 230px; min-width: 100%;"
            :src="img"
            :alt="title"
            
            />
        </div>
        <div class="card p-3 contentCard flex-grow-1" >
            <h3>
              <router-link :to="'/post/'+id+'/'+pagina" class="titlePostCard">
                {{title}}
              </router-link>
            </h3>
            <time>{{formatDate()}}</time> 
            <p>{{description}}</p>
        </div>
      </article>`,
    };/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},IS=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},oy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(iy(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):IS(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},AS=function(e){const t=iy(e);return oy.encodeByteArray(t,!0)},jo=function(e){return AS(e).replace(/\./g,"")},kS=function(e){try{return oy.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=()=>NS().__FIREBASE_DEFAULTS__,DS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},OS=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kS(e[1]);return t&&JSON.parse(t)},ay=()=>{try{return RS()||DS()||OS()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},PS=e=>{var t,n;return(n=(t=ay())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},MS=e=>{const t=PS(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},LS=()=>{var e;return(e=ay())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),a].join(".")}function $S(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function cy(){try{return typeof indexedDB=="object"}catch{return!1}}function ly(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function VS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="FirebaseError";class jn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=BS,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?US(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new jn(r,a,s)}}function US(e,t){return e.replace(jS,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const jS=/\{\$([^}]+)}/g;function qo(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(yd(i)&&yd(o)){if(!qo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=1e3,HS=2,KS=4*60*60*1e3,zS=.5;function vd(e,t=qS,n=HS){const s=t*Math.pow(n,e),r=Math.round(zS*s*(Math.random()-.5)*2);return Math.min(KS,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e){return e&&e._delegate?e._delegate:e}class fn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new FS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(QS(t))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qn){return this.instances.has(t)}getOptions(t=Qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Qn){return this.component?this.component.multipleInstances?t:Qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GS(e){return e===Qn?void 0:e}function QS(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new WS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ee||(Ee={}));const XS={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},JS=Ee.INFO,ZS={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},eI=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=ZS[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qu{constructor(t){this.name=t,this._logLevel=JS,this._logHandler=eI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?XS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...t),this._logHandler(this,Ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...t),this._logHandler(this,Ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...t),this._logHandler(this,Ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...t),this._logHandler(this,Ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...t),this._logHandler(this,Ee.ERROR,...t)}}const tI=(e,t)=>t.some(n=>e instanceof n);let wd,Ed;function nI(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sI(){return Ed||(Ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uy=new WeakMap,pl=new WeakMap,hy=new WeakMap,Ec=new WeakMap,Yu=new WeakMap;function rI(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(An(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&uy.set(n,e)}).catch(()=>{}),Yu.set(t,e),t}function iI(e){if(pl.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});pl.set(e,t)}let gl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oI(e){gl=e(gl)}function aI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(bc(this),t,...n);return hy.set(s,t.sort?t.sort():[t]),An(s)}:sI().includes(e)?function(...t){return e.apply(bc(this),t),An(uy.get(this))}:function(...t){return An(e.apply(bc(this),t))}}function cI(e){return typeof e=="function"?aI(e):(e instanceof IDBTransaction&&iI(e),tI(e,nI())?new Proxy(e,gl):e)}function An(e){if(e instanceof IDBRequest)return rI(e);if(Ec.has(e))return Ec.get(e);const t=cI(e);return t!==e&&(Ec.set(e,t),Yu.set(t,e)),t}const bc=e=>Yu.get(e);function fy(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=An(o);return s&&o.addEventListener("upgradeneeded",c=>{s(An(o.result),c.oldVersion,c.newVersion,An(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const lI=["get","getKey","getAll","getAllKeys","count"],uI=["put","add","delete","clear"],Tc=new Map;function bd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Tc.get(t))return Tc.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=uI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||lI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Tc.set(t,i),i}oI(e=>({...e,get:(t,n,s)=>bd(t,n)||e.get(t,n,s),has:(t,n)=>!!bd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fI(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ml="@firebase/app",Td="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Qu("@firebase/app"),dI="@firebase/app-compat",pI="@firebase/analytics-compat",gI="@firebase/analytics",mI="@firebase/app-check-compat",yI="@firebase/app-check",vI="@firebase/auth",wI="@firebase/auth-compat",EI="@firebase/database",bI="@firebase/database-compat",TI="@firebase/functions",_I="@firebase/functions-compat",CI="@firebase/installations",SI="@firebase/installations-compat",II="@firebase/messaging",AI="@firebase/messaging-compat",kI="@firebase/performance",NI="@firebase/performance-compat",RI="@firebase/remote-config",DI="@firebase/remote-config-compat",OI="@firebase/storage",PI="@firebase/storage-compat",MI="@firebase/firestore",LI="@firebase/firestore-compat",FI="firebase",xI="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="[DEFAULT]",$I={[ml]:"fire-core",[dI]:"fire-core-compat",[gI]:"fire-analytics",[pI]:"fire-analytics-compat",[yI]:"fire-app-check",[mI]:"fire-app-check-compat",[vI]:"fire-auth",[wI]:"fire-auth-compat",[EI]:"fire-rtdb",[bI]:"fire-rtdb-compat",[TI]:"fire-fn",[_I]:"fire-fn-compat",[CI]:"fire-iid",[SI]:"fire-iid-compat",[II]:"fire-fcm",[AI]:"fire-fcm-compat",[kI]:"fire-perf",[NI]:"fire-perf-compat",[RI]:"fire-rc",[DI]:"fire-rc-compat",[OI]:"fire-gcs",[PI]:"fire-gcs-compat",[MI]:"fire-fst",[LI]:"fire-fst-compat","fire-js":"fire-js",[FI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Map,vl=new Map;function VI(e,t){try{e.container.addComponent(t)}catch(n){Es.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xn(e){const t=e.name;if(vl.has(t))return Es.debug(`There were multiple attempts to register component ${t}.`),!1;vl.set(t,e);for(const n of Ho.values())VI(n,e);return!0}function Pi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new Oa("app","Firebase",BI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=xI;function dy(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:yl,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw kn.create("bad-app-name",{appName:String(r)});if(n||(n=LS()),!n)throw kn.create("no-options");const i=Ho.get(r);if(i){if(qo(n,i.options)&&qo(s,i.config))return i;throw kn.create("duplicate-app",{appName:r})}const o=new YS(r);for(const c of vl.values())o.addComponent(c);const a=new UI(n,s,o);return Ho.set(r,a),a}function py(e=yl){const t=Ho.get(e);if(!t&&e===yl)return dy();if(!t)throw kn.create("no-app",{appName:e});return t}function Zt(e,t,n){var s;let r=(s=$I[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Es.warn(a.join(" "));return}xn(new fn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebase-heartbeat-database",HI=1,ui="firebase-heartbeat-store";let _c=null;function gy(){return _c||(_c=fy(qI,HI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ui)}}}).catch(e=>{throw kn.create("idb-open",{originalErrorMessage:e.message})})),_c}async function KI(e){try{return(await gy()).transaction(ui).objectStore(ui).get(my(e))}catch(t){if(t instanceof jn)Es.warn(t.message);else{const n=kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Es.warn(n.message)}}}async function _d(e,t){try{const s=(await gy()).transaction(ui,"readwrite");return await s.objectStore(ui).put(t,my(e)),s.done}catch(n){if(n instanceof jn)Es.warn(n.message);else{const s=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Es.warn(s.message)}}}function my(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1024,WI=30*24*60*60*1e3;class GI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=WI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cd(),{heartbeatsToSend:n,unsentEntries:s}=QI(this._heartbeatsCache.heartbeats),r=jo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Cd(){return new Date().toISOString().substring(0,10)}function QI(e,t=zI){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Sd(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Sd(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class YI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cy()?ly().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Sd(e){return jo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(e){xn(new fn("platform-logger",t=>new hI(t),"PRIVATE")),xn(new fn("heartbeat",t=>new GI(t),"PRIVATE")),Zt(ml,Td,e),Zt(ml,Td,"esm2017"),Zt("fire-js","")}XI("");var JI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,Xu=Xu||{},ne=JI||self;function Ko(){}function Pa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Mi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ZI(e){return Object.prototype.hasOwnProperty.call(e,Cc)&&e[Cc]||(e[Cc]=++e1)}var Cc="closure_uid_"+(1e9*Math.random()>>>0),e1=0;function t1(e,t,n){return e.call.apply(e.bind,arguments)}function n1(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function lt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=t1:lt=n1,lt.apply(null,arguments)}function uo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function qn(){this.s=this.s,this.o=this.o}var s1=0;qn.prototype.s=!1;qn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),s1!=0)&&ZI(this)};qn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yy=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ju(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Id(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Pa(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function ut(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var r1=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ne.addEventListener("test",Ko,t),ne.removeEventListener("test",Ko,t)}catch{}return e}();function zo(e){return/^[\s\xa0]*$/.test(e)}var Ad=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Sc(e,t){return e<t?-1:e>t?1:0}function Ma(){var e=ne.navigator;return e&&(e=e.userAgent)?e:""}function Yt(e){return Ma().indexOf(e)!=-1}function Zu(e){return Zu[" "](e),e}Zu[" "]=Ko;function i1(e){var t=c1;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var o1=Yt("Opera"),or=Yt("Trident")||Yt("MSIE"),vy=Yt("Edge"),wl=vy||or,wy=Yt("Gecko")&&!(Ma().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),a1=Ma().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function Ey(){var e=ne.document;return e?e.documentMode:void 0}var Wo;e:{var Ic="",Ac=function(){var e=Ma();if(wy)return/rv:([^\);]+)(\)|;)/.exec(e);if(vy)return/Edge\/([\d\.]+)/.exec(e);if(or)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(a1)return/WebKit\/(\S+)/.exec(e);if(o1)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ac&&(Ic=Ac?Ac[1]:""),or){var kc=Ey();if(kc!=null&&kc>parseFloat(Ic)){Wo=String(kc);break e}}Wo=Ic}var c1={};function l1(){return i1(function(){let e=0;const t=Ad(String(Wo)).split("."),n=Ad("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Sc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Sc(r[2].length==0,i[2].length==0)||Sc(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var El;if(ne.document&&or){var kd=Ey();El=kd||parseInt(Wo,10)||void 0}else El=void 0;var u1=El;function hi(e,t){if(ut.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wy){e:{try{Zu(t.nodeName);var r=!0;break e}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:h1[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&hi.X.h.call(this)}}nt(hi,ut);var h1={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Li="closure_listenable_"+(1e6*Math.random()|0),f1=0;function d1(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++f1,this.ba=this.ea=!1}function La(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function eh(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function by(e){const t={};for(const n in e)t[n]=e[n];return t}const Nd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ty(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Nd.length;i++)n=Nd[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Fa(e){this.src=e,this.g={},this.h=0}Fa.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Tl(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new d1(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function bl(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=yy(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(La(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Tl(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var th="closure_lm_"+(1e6*Math.random()|0),Nc={};function _y(e,t,n,s,r){if(s&&s.once)return Sy(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)_y(e,t[i],n,s,r);return null}return n=rh(n),e&&e[Li]?e.N(t,n,Mi(s)?!!s.capture:!!s,r):Cy(e,t,n,!1,s,r)}function Cy(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Mi(r)?!!r.capture:!!r,a=sh(e);if(a||(e[th]=a=new Fa(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=p1(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)r1||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Ay(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function p1(){function e(n){return t.call(e.src,e.listener,n)}const t=g1;return e}function Sy(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Sy(e,t[i],n,s,r);return null}return n=rh(n),e&&e[Li]?e.O(t,n,Mi(s)?!!s.capture:!!s,r):Cy(e,t,n,!0,s,r)}function Iy(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Iy(e,t[i],n,s,r);else s=Mi(s)?!!s.capture:!!s,n=rh(n),e&&e[Li]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Tl(i,n,s,r),-1<n&&(La(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=sh(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Tl(t,n,s,r)),(n=-1<e?t[e]:null)&&nh(n))}function nh(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Li])bl(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ay(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=sh(t))?(bl(n,e),n.h==0&&(n.src=null,t[th]=null)):La(e)}}}function Ay(e){return e in Nc?Nc[e]:Nc[e]="on"+e}function g1(e,t){if(e.ba)e=!0;else{t=new hi(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&nh(e),e=n.call(s,t)}return e}function sh(e){return e=e[th],e instanceof Fa?e:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function rh(e){return typeof e=="function"?e:(e[Rc]||(e[Rc]=function(t){return e.handleEvent(t)}),e[Rc])}function Ge(){qn.call(this),this.i=new Fa(this),this.P=this,this.I=null}nt(Ge,qn);Ge.prototype[Li]=!0;Ge.prototype.removeEventListener=function(e,t,n,s){Iy(this,e,t,n,s)};function tt(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new ut(t,e);else if(t instanceof ut)t.target=t.target||e;else{var r=t;t=new ut(s,e),Ty(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=ho(o,s,!0,t)&&r}if(o=t.g=e,r=ho(o,s,!0,t)&&r,r=ho(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=ho(o,s,!1,t)&&r}Ge.prototype.M=function(){if(Ge.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)La(n[s]);delete e.g[t],e.h--}}this.I=null};Ge.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};Ge.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ho(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&bl(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ih=ne.JSON.stringify;function m1(){var e=Ry;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class y1{constructor(){this.h=this.g=null}add(t,n){const s=ky.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ky=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new v1,e=>e.reset());class v1{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function w1(e){ne.setTimeout(()=>{throw e},0)}function Ny(e,t){_l||E1(),Cl||(_l(),Cl=!0),Ry.add(e,t)}var _l;function E1(){var e=ne.Promise.resolve(void 0);_l=function(){e.then(b1)}}var Cl=!1,Ry=new y1;function b1(){for(var e;e=m1();){try{e.h.call(e.g)}catch(n){w1(n)}var t=ky;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Cl=!1}function xa(e,t){Ge.call(this),this.h=e||1,this.g=t||ne,this.j=lt(this.lb,this),this.l=Date.now()}nt(xa,Ge);Q=xa.prototype;Q.ca=!1;Q.R=null;Q.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tt(this,"tick"),this.ca&&(oh(this),this.start()))}};Q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oh(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}Q.M=function(){xa.X.M.call(this),oh(this),delete this.g};function ah(e,t,n){if(typeof e=="function")n&&(e=lt(e,n));else if(e&&typeof e.handleEvent=="function")e=lt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:ne.setTimeout(e,t||0)}function Dy(e){e.g=ah(()=>{e.g=null,e.i&&(e.i=!1,Dy(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class T1 extends qn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Dy(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(e){qn.call(this),this.h=e,this.g={}}nt(fi,qn);var Rd=[];function Oy(e,t,n,s){Array.isArray(n)||(n&&(Rd[0]=n.toString()),n=Rd);for(var r=0;r<n.length;r++){var i=_y(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Py(e){eh(e.g,function(t,n){this.g.hasOwnProperty(n)&&nh(t)},e),e.g={}}fi.prototype.M=function(){fi.X.M.call(this),Py(this)};fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $a(){this.g=!0}$a.prototype.Aa=function(){this.g=!1};function _1(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function C1(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Vs(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+I1(e,n)+(s?" "+s:"")})}function S1(e,t){e.info(function(){return"TIMEOUT: "+t})}$a.prototype.info=function(){};function I1(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ih(n)}catch{return t}}var Ns={},Dd=null;function Va(){return Dd=Dd||new Ge}Ns.Pa="serverreachability";function My(e){ut.call(this,Ns.Pa,e)}nt(My,ut);function di(e){const t=Va();tt(t,new My(t))}Ns.STAT_EVENT="statevent";function Ly(e,t){ut.call(this,Ns.STAT_EVENT,e),this.stat=t}nt(Ly,ut);function gt(e){const t=Va();tt(t,new Ly(t,e))}Ns.Qa="timingevent";function Fy(e,t){ut.call(this,Ns.Qa,e),this.size=t}nt(Fy,ut);function Fi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){e()},t)}var Ba={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},xy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ch(){}ch.prototype.h=null;function Od(e){return e.h||(e.h=e.i())}function $y(){}var xi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function lh(){ut.call(this,"d")}nt(lh,ut);function uh(){ut.call(this,"c")}nt(uh,ut);var Sl;function Ua(){}nt(Ua,ch);Ua.prototype.g=function(){return new XMLHttpRequest};Ua.prototype.i=function(){return{}};Sl=new Ua;function $i(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new fi(this),this.O=A1,e=wl?125:void 0,this.T=new xa(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vy}function Vy(){this.i=null,this.g="",this.h=!1}var A1=45e3,Il={},Go={};Q=$i.prototype;Q.setTimeout=function(e){this.O=e};function Al(e,t,n){e.K=1,e.v=qa(dn(t)),e.s=n,e.P=!0,By(e,null)}function By(e,t){e.F=Date.now(),Vi(e),e.A=dn(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Gy(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Vy,e.g=gv(e.l,n?t:null,!e.s),0<e.N&&(e.L=new T1(lt(e.La,e,e.g),e.N)),Oy(e.S,e.g,"readystatechange",e.ib),t=e.H?by(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),di(),_1(e.j,e.u,e.A,e.m,e.U,e.s)}Q.ib=function(e){e=e.target;const t=this.L;t&&an(e)==3?t.l():this.La(e)};Q.La=function(e){try{if(e==this.g)e:{const u=an(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||wl||this.g&&(this.h.h||this.g.fa()||Fd(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?di(3):di(2)),ja(this);var n=this.g.aa();this.Y=n;t:if(Uy(this)){var s=Fd(this.g);e="";var r=s.length,i=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),Kr(this);var o="";break t}this.h.i=new ne.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,C1(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zo(a)){var l=a;break t}}l=null}if(n=l)Vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,kl(this,n);else{this.i=!1,this.o=3,gt(12),es(this),Kr(this);break e}}this.P?(jy(this,u,o),wl&&this.i&&u==3&&(Oy(this.S,this.T,"tick",this.hb),this.T.start())):(Vs(this.j,this.m,o,null),kl(this,o)),u==4&&es(this),this.i&&!this.I&&(u==4?hv(this.l,this):(this.i=!1,Vi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),es(this),Kr(this)}}}catch{}finally{}};function Uy(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function jy(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=k1(e,n),r==Go){t==4&&(e.o=4,gt(14),s=!1),Vs(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Il){e.o=4,gt(15),Vs(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Vs(e.j,e.m,r,null),kl(e,r);Uy(e)&&r!=Go&&r!=Il&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yh(t),t.K=!0,gt(11))):(Vs(e.j,e.m,n,"[Invalid Chunked Response]"),es(e),Kr(e))}Q.hb=function(){if(this.g){var e=an(this.g),t=this.g.fa();this.C<t.length&&(ja(this),jy(this,e,t),this.i&&e!=4&&Vi(this))}};function k1(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Go:(n=Number(t.substring(n,s)),isNaN(n)?Il:(s+=1,s+n>t.length?Go:(t=t.substr(s,n),e.C=s+n,t)))}Q.cancel=function(){this.I=!0,es(this)};function Vi(e){e.V=Date.now()+e.O,qy(e,e.O)}function qy(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Fi(lt(e.gb,e),t)}function ja(e){e.B&&(ne.clearTimeout(e.B),e.B=null)}Q.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(S1(this.j,this.A),this.K!=2&&(di(),gt(17)),es(this),this.o=2,Kr(this)):qy(this,this.V-e)};function Kr(e){e.l.G==0||e.I||hv(e.l,e)}function es(e){ja(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,oh(e.T),Py(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function kl(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Nl(n.h,e))){if(!e.J&&Nl(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Xo(n),za(n);else break e;mh(n),gt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fi(lt(n.cb,n),6e3));if(1>=Xy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ts(n,11)}else if((e.J||n.g==e)&&Xo(n),!zo(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(hh(i,i.h),i.h=null))}if(s.D){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,De(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=pv(s,s.H?s.ka:null,s.V),o.J){Jy(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ja(a),Vi(a)),s.g=o}else lv(s);0<n.i.length&&Wa(n)}else l[0]!="stop"&&l[0]!="close"||ts(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ts(n,7):gh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}di(4)}catch{}}function N1(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Pa(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function R1(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Pa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Hy(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Pa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=R1(e),s=N1(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Ky=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D1(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function hs(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof hs){this.h=t!==void 0?t:e.h,Qo(this,e.j),this.s=e.s,this.g=e.g,Yo(this,e.m),this.l=e.l,t=e.i;var n=new pi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Pd(this,n),this.o=e.o}else e&&(n=String(e).match(Ky))?(this.h=!!t,Qo(this,n[1]||"",!0),this.s=Dr(n[2]||""),this.g=Dr(n[3]||"",!0),Yo(this,n[4]),this.l=Dr(n[5]||"",!0),Pd(this,n[6]||"",!0),this.o=Dr(n[7]||"")):(this.h=!!t,this.i=new pi(null,this.h))}hs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Or(t,Md,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Or(t,Md,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Or(n,n.charAt(0)=="/"?M1:P1,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Or(n,F1)),e.join("")};function dn(e){return new hs(e)}function Qo(e,t,n){e.j=n?Dr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Yo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Pd(e,t,n){t instanceof pi?(e.i=t,x1(e.i,e.h)):(n||(t=Or(t,L1)),e.i=new pi(t,e.h))}function De(e,t,n){e.i.set(t,n)}function qa(e){return De(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Or(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,O1),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function O1(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Md=/[#\/\?@]/g,P1=/[#\?:]/g,M1=/[#\?]/g,L1=/[#\?@]/g,F1=/#/g;function pi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Hn(e){e.g||(e.g=new Map,e.h=0,e.i&&D1(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}Q=pi.prototype;Q.add=function(e,t){Hn(this),this.i=null,e=yr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function zy(e,t){Hn(e),t=yr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Wy(e,t){return Hn(e),t=yr(e,t),e.g.has(t)}Q.forEach=function(e,t){Hn(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};Q.oa=function(){Hn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};Q.W=function(e){Hn(this);let t=[];if(typeof e=="string")Wy(this,e)&&(t=t.concat(this.g.get(yr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};Q.set=function(e,t){return Hn(this),this.i=null,e=yr(this,e),Wy(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};Q.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Gy(e,t,n){zy(e,t),0<n.length&&(e.i=null,e.g.set(yr(e,t),Ju(n)),e.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function yr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function x1(e,t){t&&!e.j&&(Hn(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(zy(this,s),Gy(this,r,n))},e)),e.j=t}var $1=class{constructor(e,t){this.h=e,this.g=t}};function Qy(e){this.l=e||V1,ne.PerformanceNavigationTiming?(e=ne.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var V1=10;function Yy(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Xy(e){return e.h?1:e.g?e.g.size:0}function Nl(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function hh(e,t){e.g?e.g.add(t):e.h=t}function Jy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Qy.prototype.cancel=function(){if(this.i=Zy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Zy(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ju(e.i)}function fh(){}fh.prototype.stringify=function(e){return ne.JSON.stringify(e,void 0)};fh.prototype.parse=function(e){return ne.JSON.parse(e,void 0)};function B1(){this.g=new fh}function U1(e,t,n){const s=n||"";try{Hy(e,function(r,i){let o=r;Mi(r)&&(o=ih(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function j1(e,t){const n=new $a;if(ne.Image){const s=new Image;s.onload=uo(fo,n,s,"TestLoadImage: loaded",!0,t),s.onerror=uo(fo,n,s,"TestLoadImage: error",!1,t),s.onabort=uo(fo,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=uo(fo,n,s,"TestLoadImage: timeout",!1,t),ne.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function fo(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Bi(e){this.l=e.ac||null,this.j=e.jb||!1}nt(Bi,ch);Bi.prototype.g=function(){return new Ha(this.l,this.j)};Bi.prototype.i=function(e){return function(){return e}}({});function Ha(e,t){Ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=dh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Ha,Ge);var dh=0;Q=Ha.prototype;Q.open=function(e,t){if(this.readyState!=dh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,gi(this)};Q.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ne).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=dh};Q.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ev(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ev(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}Q.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ui(this):gi(this),this.readyState==3&&ev(this)}};Q.Va=function(e){this.g&&(this.response=this.responseText=e,Ui(this))};Q.Ua=function(e){this.g&&(this.response=e,Ui(this))};Q.ga=function(){this.g&&Ui(this)};function Ui(e){e.readyState=4,e.l=null,e.j=null,e.A=null,gi(e)}Q.setRequestHeader=function(e,t){this.v.append(e,t)};Q.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function gi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var q1=ne.JSON.parse;function Le(e){Ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tv,this.K=this.L=!1}nt(Le,Ge);var tv="",H1=/^https?$/i,K1=["POST","PUT"];Q=Le.prototype;Q.Ka=function(e){this.L=e};Q.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Sl.g(),this.C=this.u?Od(this.u):Od(Sl),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Ld(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ne.FormData&&e instanceof ne.FormData,!(0<=yy(K1,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rv(this),0<this.B&&((this.K=z1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=ah(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Ld(this,i)}};function z1(e){return or&&l1()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}Q.qa=function(){typeof Xu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function Ld(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nv(e),Ka(e)}function nv(e){e.D||(e.D=!0,tt(e,"complete"),tt(e,"error"))}Q.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tt(this,"complete"),tt(this,"abort"),Ka(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ka(this,!0)),Le.X.M.call(this)};Q.Ha=function(){this.s||(this.F||this.v||this.l?sv(this):this.fb())};Q.fb=function(){sv(this)};function sv(e){if(e.h&&typeof Xu<"u"&&(!e.C[1]||an(e)!=4||e.aa()!=2)){if(e.v&&an(e)==4)ah(e.Ha,0,e);else if(tt(e,"readystatechange"),an(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Ky)[1]||null;if(!r&&ne.self&&ne.self.location){var i=ne.self.location.protocol;r=i.substr(0,i.length-1)}s=!H1.test(r?r.toLowerCase():"")}n=s}if(n)tt(e,"complete"),tt(e,"success");else{e.m=6;try{var o=2<an(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",nv(e)}}finally{Ka(e)}}}}function Ka(e,t){if(e.g){rv(e);const n=e.g,s=e.C[0]?Ko:null;e.g=null,e.C=null,t||tt(e,"ready");try{n.onreadystatechange=s}catch{}}}function rv(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ne.clearTimeout(e.A),e.A=null)}function an(e){return e.g?e.g.readyState:0}Q.aa=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};Q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),q1(t)}};function Fd(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case tv:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Ea=function(){return this.m};Q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iv(e){let t="";return eh(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ph(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=iv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):De(e,t,n))}function kr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ov(e){this.Ca=0,this.i=[],this.j=new $a,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=kr("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=kr("baseRetryDelayMs",5e3,e),this.bb=kr("retryDelaySeedMs",1e4,e),this.$a=kr("forwardChannelMaxRetries",2,e),this.ta=kr("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Qy(e&&e.concurrentRequestLimit),this.Fa=new B1,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Q=ov.prototype;Q.ma=8;Q.G=1;function gh(e){if(av(e),e.G==3){var t=e.U++,n=dn(e.F);De(n,"SID",e.I),De(n,"RID",t),De(n,"TYPE","terminate"),ji(e,n),t=new $i(e,e.j,t,void 0),t.K=2,t.v=qa(dn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(t.v.toString(),"")),!n&&ne.Image&&(new Image().src=t.v,n=!0),n||(t.g=gv(t.l,null),t.g.da(t.v)),t.F=Date.now(),Vi(t)}dv(e)}function za(e){e.g&&(yh(e),e.g.cancel(),e.g=null)}function av(e){za(e),e.u&&(ne.clearTimeout(e.u),e.u=null),Xo(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&ne.clearTimeout(e.m),e.m=null)}function Wa(e){Yy(e.h)||e.m||(e.m=!0,Ny(e.Ja,e),e.C=0)}function W1(e,t){return Xy(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Fi(lt(e.Ja,e,t),fv(e,e.C)),e.C++,!0)}Q.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new $i(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=by(i),Ty(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cv(this,r,t),n=dn(this.F),De(n,"RID",e),De(n,"CVER",22),this.D&&De(n,"X-HTTP-Session-Id",this.D),ji(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(iv(i)))+"&"+t:this.o&&ph(n,this.o,i)),hh(this.h,r),this.Ya&&De(n,"TYPE","init"),this.O?(De(n,"$req",t),De(n,"SID","null"),r.Z=!0,Al(r,n,null)):Al(r,n,t),this.G=2}}else this.G==3&&(e?xd(this,e):this.i.length==0||Yy(this.h)||xd(this))};function xd(e,t){var n;t?n=t.m:n=e.U++;const s=dn(e.F);De(s,"SID",e.I),De(s,"RID",n),De(s,"AID",e.T),ji(e,s),e.o&&e.s&&ph(s,e.o,e.s),n=new $i(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=cv(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),hh(e.h,n),Al(n,s,t)}function ji(e,t){e.ia&&eh(e.ia,function(n,s){De(t,s,n)}),e.l&&Hy({},function(n,s){De(t,s,n)})}function cv(e,t,n){n=Math.min(e.i.length,n);var s=e.l?lt(e.l.Ra,e.l,e):null;e:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{U1(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,s}function lv(e){e.g||e.u||(e.Z=1,Ny(e.Ia,e),e.A=0)}function mh(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Fi(lt(e.Ia,e),fv(e,e.A)),e.A++,!0)}Q.Ia=function(){if(this.u=null,uv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Fi(lt(this.eb,this),e)}};Q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,gt(10),za(this),uv(this))};function yh(e){e.B!=null&&(ne.clearTimeout(e.B),e.B=null)}function uv(e){e.g=new $i(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=dn(e.sa);De(t,"RID","rpc"),De(t,"SID",e.I),De(t,"CI",e.L?"0":"1"),De(t,"AID",e.T),De(t,"TYPE","xmlhttp"),ji(e,t),e.o&&e.s&&ph(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=qa(dn(t)),n.s=null,n.P=!0,By(n,e)}Q.cb=function(){this.v!=null&&(this.v=null,za(this),mh(this),gt(19))};function Xo(e){e.v!=null&&(ne.clearTimeout(e.v),e.v=null)}function hv(e,t){var n=null;if(e.g==t){Xo(e),yh(e),e.g=null;var s=2}else if(Nl(e.h,t))n=t.D,Jy(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Va(),tt(s,new Fy(s,n)),Wa(e)}else lv(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&W1(e,t)||s==2&&mh(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:ts(e,5);break;case 4:ts(e,10);break;case 3:ts(e,6);break;default:ts(e,2)}}}function fv(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ts(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=lt(e.kb,e);n||(n=new hs("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Qo(n,"https"),qa(n)),j1(n.toString(),s)}else gt(2);e.G=0,e.l&&e.l.va(t),dv(e),av(e)}Q.kb=function(e){e?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function dv(e){if(e.G=0,e.la=[],e.l){const t=Zy(e.h);(t.length!=0||e.i.length!=0)&&(Id(e.la,t),Id(e.la,e.i),e.h.i.length=0,Ju(e.i),e.i.length=0),e.l.ua()}}function pv(e,t,n){var s=n instanceof hs?dn(n):new hs(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Yo(s,s.m);else{var r=ne.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new hs(null,void 0);s&&Qo(i,s),t&&(i.g=t),r&&Yo(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&De(s,n,t),De(s,"VER",e.ma),ji(e,s),s}function gv(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Le(new Bi({jb:!0})):new Le(e.ra),t.Ka(e.H),t}function mv(){}Q=mv.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Ra=function(){};function Jo(){if(or&&!(10<=Number(u1)))throw Error("Environmental error: no available transport.")}Jo.prototype.g=function(e,t){return new Ot(e,t)};function Ot(e,t){Ge.call(this),this.g=new ov(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!zo(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!zo(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}nt(Ot,Ge);Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=pv(e,null,e.V),Wa(e)};Ot.prototype.close=function(){gh(this.g)};Ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ih(e),e=n);t.i.push(new $1(t.ab++,e)),t.G==3&&Wa(t)};Ot.prototype.M=function(){this.g.l=null,delete this.j,gh(this.g),delete this.g,Ot.X.M.call(this)};function yv(e){lh.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}nt(yv,lh);function vv(){uh.call(this),this.status=1}nt(vv,uh);function vr(e){this.g=e}nt(vr,mv);vr.prototype.xa=function(){tt(this.g,"a")};vr.prototype.wa=function(e){tt(this.g,new yv(e))};vr.prototype.va=function(e){tt(this.g,new vv)};vr.prototype.ua=function(){tt(this.g,"b")};Jo.prototype.createWebChannel=Jo.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Ba.NO_ERROR=0;Ba.TIMEOUT=8;Ba.HTTP_ERROR=6;xy.COMPLETE="complete";$y.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var G1=function(){return new Jo},Q1=function(){return Va()},Dc=Ba,Y1=xy,X1=Ns,$d={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},J1=Bi,po=$y,Z1=Le;const Vd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Qu("@firebase/firestore");function Bd(){return bs.logLevel}function Y(e,...t){if(bs.logLevel<=Ee.DEBUG){const n=t.map(vh);bs.debug(`Firestore (${wr}): ${e}`,...n)}}function pn(e,...t){if(bs.logLevel<=Ee.ERROR){const n=t.map(vh);bs.error(`Firestore (${wr}): ${e}`,...n)}}function Rl(e,...t){if(bs.logLevel<=Ee.WARN){const n=t.map(vh);bs.warn(`Firestore (${wr}): ${e}`,...n)}}function vh(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e="Unexpected state"){const t=`FIRESTORE (${wr}) INTERNAL ASSERTION FAILED: `+e;throw pn(t),new Error(t)}function Ue(e,t){e||ie()}function ve(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends jn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class eA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class tA{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nA{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new wv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ue(t===null||typeof t=="string"),new st(t)}}class sA{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ue(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rA{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new sA(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oA{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ue(typeof n.token=="string"),this.A=n.token,new iA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=aA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function _e(e,t){return e<t?-1:e>t?1:0}function ar(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return We.fromMillis(Date.now())}static fromDate(t){return We.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new We(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_e(this.nanoseconds,t.nanoseconds):_e(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.timestamp=t}static fromTimestamp(t){return new re(t)}static min(){return new re(new We(0,0))}static max(){return new re(new We(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,n,s){n===void 0?n=0:n>t.length&&ie(),s===void 0?s=t.length-n:s>t.length-n&&ie(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return mi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof mi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ne extends mi{construct(t,n,s){return new Ne(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const cA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends mi{construct(t,n,s){return new pt(t,n,s)}static isValidIdentifier(t){return cA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.path=t}static fromPath(t){return new J(Ne.fromString(t))}static fromName(t){return new J(Ne.fromString(t).popFirst(5))}static empty(){return new J(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ne.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ne.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new J(new Ne(t.slice()))}}function lA(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new $n(r,J.empty(),t)}function uA(e){return new $n(e.readTime,e.key,-1)}class $n{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new $n(re.min(),J.empty(),-1)}static max(){return new $n(re.max(),J.empty(),-1)}}function hA(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=J.comparator(e.documentKey,t.documentKey),n!==0?n:_e(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(e){if(e.code!==L.FAILED_PRECONDITION||e.message!==fA)throw e;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new O((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):O.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):O.reject(n)}static resolve(t){return new O((n,s)=>{n(t)})}static reject(t){return new O((n,s)=>{s(t)})}static waitFor(t){return new O((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=O.resolve(!1);for(const s of t)n=n.next(r=>r?O.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new O((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new O((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function qi(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Eh.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class yi{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yi&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Hi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function bv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e){return e==null}function Zo(e){return e===0&&1/e==-1/0}function gA(e){return typeof e=="number"&&Number.isInteger(e)&&!Zo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new ht(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new ht(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _e(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const mA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(e){if(Ue(!!e),typeof e=="string"){let t=0;const n=mA.exec(e);if(Ue(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:$e(e.seconds),nanos:$e(e.nanos)}}function $e(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function cr(e){return typeof e=="string"?ht.fromBase64String(e):ht.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _v(e){const t=e.mapValue.fields.__previous_value__;return Tv(t)?_v(t):t}function vi(e){const t=Vn(e.mapValue.fields.__local_write_time__.timestampValue);return new We(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tv(e)?4:yA(e)?9007199254740991:10:ie()}function tn(e,t){if(e===t)return!0;const n=Ts(e);if(n!==Ts(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return vi(e).isEqual(vi(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Vn(s.timestampValue),o=Vn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return cr(s.bytesValue).isEqual(cr(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return $e(s.geoPointValue.latitude)===$e(r.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return $e(s.integerValue)===$e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=$e(s.doubleValue),o=$e(r.doubleValue);return i===o?Zo(i)===Zo(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ar(e.arrayValue.values||[],t.arrayValue.values||[],tn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ud(i)!==Ud(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!tn(i[a],o[a])))return!1;return!0}(e,t);default:return ie()}}function wi(e,t){return(e.values||[]).find(n=>tn(n,t))!==void 0}function lr(e,t){if(e===t)return 0;const n=Ts(e),s=Ts(t);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=$e(r.integerValue||r.doubleValue),a=$e(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return jd(e.timestampValue,t.timestampValue);case 4:return jd(vi(e),vi(t));case 5:return _e(e.stringValue,t.stringValue);case 6:return function(r,i){const o=cr(r),a=cr(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=_e(o[c],a[c]);if(l!==0)return l}return _e(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=_e($e(r.latitude),$e(i.latitude));return o!==0?o:_e($e(r.longitude),$e(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=lr(o[c],a[c]);if(l)return l}return _e(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===go.mapValue&&i===go.mapValue)return 0;if(r===go.mapValue)return 1;if(i===go.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=_e(a[u],l[u]);if(h!==0)return h;const f=lr(o[a[u]],c[l[u]]);if(f!==0)return f}return _e(a.length,l.length)}(e.mapValue,t.mapValue);default:throw ie()}}function jd(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _e(e,t);const n=Vn(e),s=Vn(t),r=_e(n.seconds,s.seconds);return r!==0?r:_e(n.nanos,s.nanos)}function ur(e){return Dl(e)}function Dl(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Vn(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?cr(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,J.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Dl(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Dl(s.fields[a])}`;return i+"}"}(e.mapValue):ie();var t,n}function qd(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ol(e){return!!e&&"integerValue"in e}function bh(e){return!!e&&"arrayValue"in e}function Hd(e){return!!e&&"nullValue"in e}function Kd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Oc(e){return!!e&&"mapValue"in e}function zr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Hi(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=zr(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=zr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function yA(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,n){this.position=t,this.inclusive=n}}function zd(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=J.comparator(J.fromName(o.referenceValue),n.key):s=lr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wd(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{}class Be extends Cv{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new wA(t,n,s):n==="array-contains"?new TA(t,s):n==="in"?new _A(t,s):n==="not-in"?new CA(t,s):n==="array-contains-any"?new SA(t,s):new Be(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new EA(t,s):new bA(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(lr(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(lr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Kt extends Cv{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Kt(t,n)}matches(t){return Sv(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Sv(e){return e.op==="and"}function Iv(e){return vA(e)&&Sv(e)}function vA(e){for(const t of e.filters)if(t instanceof Kt)return!1;return!0}function Pl(e){if(e instanceof Be)return e.field.canonicalString()+e.op.toString()+ur(e.value);if(Iv(e))return e.filters.map(t=>Pl(t)).join(",");{const t=e.filters.map(n=>Pl(n)).join(",");return`${e.op}(${t})`}}function Av(e,t){return e instanceof Be?function(n,s){return s instanceof Be&&n.op===s.op&&n.field.isEqual(s.field)&&tn(n.value,s.value)}(e,t):e instanceof Kt?function(n,s){return s instanceof Kt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Av(i,s.filters[o]),!0):!1}(e,t):void ie()}function kv(e){return e instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${ur(t.value)}`}(e):e instanceof Kt?function(t){return t.op.toString()+" {"+t.getFilters().map(kv).join(" ,")+"}"}(e):"Filter"}class wA extends Be{constructor(t,n,s){super(t,n,s),this.key=J.fromName(s.referenceValue)}matches(t){const n=J.comparator(t.key,this.key);return this.matchesComparison(n)}}class EA extends Be{constructor(t,n){super(t,"in",n),this.keys=Nv("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class bA extends Be{constructor(t,n){super(t,"not-in",n),this.keys=Nv("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Nv(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>J.fromName(s.referenceValue))}class TA extends Be{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return bh(n)&&wi(n.arrayValue,this.value)}}class _A extends Be{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&wi(this.value.arrayValue,n)}}class CA extends Be{constructor(t,n){super(t,"not-in",n)}matches(t){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!wi(this.value.arrayValue,n)}}class SA extends Be{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!bh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>wi(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,n="asc"){this.field=t,this.dir=n}}function IA(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n){this.comparator=t,this.root=n||Xe.EMPTY}insert(t,n){return new Qe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new Qe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mo(this.root,t,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mo(this.root,t,this.comparator,!0)}}class mo{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??Xe.RED,this.left=r??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new Xe(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const t=this.left.check();if(t!==this.right.check())throw ie();return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.comparator=t,this.data=new Qe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gd(this.data.getIterator())}getIteratorFrom(t){return new Gd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof He)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new He(this.comparator);return n.data=t,n}}class Gd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.fields=t,t.sort(pt.comparator)}static empty(){return new Cn([])}unionWith(t){let n=new He(pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Cn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ar(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.value=t}static empty(){return new Xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Oc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=zr(n)}setAll(t){let n=pt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=zr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return tn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Oc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Hi(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Xt(zr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rt(t,0,re.min(),re.min(),re.min(),Xt.empty(),0)}static newFoundDocument(t,n,s,r){return new rt(t,1,n,re.min(),s,r,0)}static newNoDocument(t,n){return new rt(t,2,n,re.min(),re.min(),Xt.empty(),0)}static newUnknownDocument(t,n){return new rt(t,3,n,re.min(),re.min(),Xt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Qd(e,t=null,n=[],s=[],r=null,i=null,o=null){return new AA(e,t,n,s,r,i,o)}function Th(e){const t=ve(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Pl(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ga(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ur(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ur(s)).join(",")),t.ft=n}return t.ft}function _h(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!IA(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Av(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wd(e.startAt,t.startAt)&&Wd(e.endAt,t.endAt)}function Ml(e){return J.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function kA(e,t,n,s,r,i,o,a){return new Ki(e,t,n,s,r,i,o,a)}function Ch(e){return new Ki(e)}function Yd(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Rv(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Sh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Dv(e){return e.collectionGroup!==null}function Ws(e){const t=ve(e);if(t.dt===null){t.dt=[];const n=Sh(t),s=Rv(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Wr(n)),t.dt.push(new Wr(pt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Wr(pt.keyField(),i))}}}return t.dt}function gn(e){const t=ve(e);if(!t._t)if(t.limitType==="F")t._t=Qd(t.path,t.collectionGroup,Ws(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ws(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Wr(i.field,o))}const s=t.endAt?new ea(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ea(t.startAt.position,t.startAt.inclusive):null;t._t=Qd(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function Ll(e,t){t.getFirstInequalityField(),Sh(e);const n=e.filters.concat([t]);return new Ki(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Fl(e,t,n){return new Ki(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qa(e,t){return _h(gn(e),gn(t))&&e.limitType===t.limitType}function Ov(e){return`${Th(gn(e))}|lt:${e.limitType}`}function xl(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>kv(s)).join(", ")}]`),Ga(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ur(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ur(s)).join(",")),`Target(${n})`}(gn(e))}; limitType=${e.limitType})`}function Ih(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):J.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Ws(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=zd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ws(n),s)||n.endAt&&!function(r,i,o){const a=zd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ws(n),s))}(e,t)}function NA(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pv(e){return(t,n)=>{let s=!1;for(const r of Ws(e)){const i=RA(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function RA(e,t,n){const s=e.field.isKeyField()?J.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?lr(a,c):ie()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zo(t)?"-0":t}}function Lv(e){return{integerValue:""+e}}function DA(e,t){return gA(t)?Lv(t):Mv(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this._=void 0}}function OA(e,t,n){return e instanceof $l?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof ta?Fv(e,t):e instanceof na?xv(e,t):function(s,r){const i=MA(s,r),o=Xd(i)+Xd(s.gt);return Ol(i)&&Ol(s.gt)?Lv(o):Mv(s.yt,o)}(e,t)}function PA(e,t,n){return e instanceof ta?Fv(e,t):e instanceof na?xv(e,t):n}function MA(e,t){return e instanceof Vl?Ol(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class $l extends Ya{}class ta extends Ya{constructor(t){super(),this.elements=t}}function Fv(e,t){const n=$v(t);for(const s of e.elements)n.some(r=>tn(r,s))||n.push(s);return{arrayValue:{values:n}}}class na extends Ya{constructor(t){super(),this.elements=t}}function xv(e,t){let n=$v(t);for(const s of e.elements)n=n.filter(r=>!tn(r,s));return{arrayValue:{values:n}}}class Vl extends Ya{constructor(t,n){super(),this.yt=t,this.gt=n}}function Xd(e){return $e(e.integerValue||e.doubleValue)}function $v(e){return bh(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function LA(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ta&&s instanceof ta||n instanceof na&&s instanceof na?ar(n.elements,s.elements,tn):n instanceof Vl&&s instanceof Vl?tn(n.gt,s.gt):n instanceof $l&&s instanceof $l}(e.transform,t.transform)}class fs{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new fs}static exists(t){return new fs(void 0,t)}static updateTime(t){return new fs(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function To(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ah{}function Vv(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new xA(e.key,fs.none()):new kh(e.key,e.data,fs.none());{const n=e.data,s=Xt.empty();let r=new He(pt.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Xa(e.key,s,new Cn(r.toArray()),fs.none())}}function FA(e,t,n){e instanceof kh?function(s,r,i){const o=s.value.clone(),a=Zd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Xa?function(s,r,i){if(!To(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Zd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Bv(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Gr(e,t,n,s){return e instanceof kh?function(r,i,o,a){if(!To(r.precondition,i))return o;const c=r.value.clone(),l=ep(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Xa?function(r,i,o,a){if(!To(r.precondition,i))return o;const c=ep(r.fieldTransforms,a,i),l=i.data;return l.setAll(Bv(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return To(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Jd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ar(n,s,(r,i)=>LA(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class kh extends Ah{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xa extends Ah{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bv(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Zd(e,t,n){const s=new Map;Ue(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,PA(o,a,n[r]))}return s}function ep(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,OA(i,o,t))}return s}class xA extends Ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,he;function Uv(e){if(e===void 0)return pn("GRPC error has no .code"),L.UNKNOWN;switch(e){case xe.OK:return L.OK;case xe.CANCELLED:return L.CANCELLED;case xe.UNKNOWN:return L.UNKNOWN;case xe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case xe.INTERNAL:return L.INTERNAL;case xe.UNAVAILABLE:return L.UNAVAILABLE;case xe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case xe.NOT_FOUND:return L.NOT_FOUND;case xe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case xe.ABORTED:return L.ABORTED;case xe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case xe.DATA_LOSS:return L.DATA_LOSS;default:return ie()}}(he=xe||(xe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Hi(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new Qe(J.comparator);function Bn(){return VA}const jv=new Qe(J.comparator);function Pr(...e){let t=jv;for(const n of e)t=t.insert(n.key,n);return t}function BA(e){let t=jv;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function ns(){return Qr()}function qv(){return Qr()}function Qr(){return new Er(e=>e.toString(),(e,t)=>e.isEqual(t))}new Qe(J.comparator);const UA=new He(J.comparator);function ge(...e){let t=UA;for(const n of e)t=t.add(n);return t}const jA=new He(_e);function Hv(){return jA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,zi.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ja(re.min(),r,Hv(),Bn(),ge())}}class zi{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new zi(s,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Kv{constructor(t,n){this.targetId=t,this.Et=n}}class zv{constructor(t,n,s=ht.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class tp{constructor(){this.At=0,this.Rt=sp(),this.bt=ht.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=ge(),n=ge(),s=ge();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ie()}}),new zi(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=sp()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class qA{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Bn(),this.qt=np(),this.Ut=new He(_e)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:ie()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Ml(i))if(s===0){const o=new J(i.path);this.Qt(n,o,rt.newNoDocument(o,re.min()))}else Ue(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Ml(a.target)){const c=new J(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,rt.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ge();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Ja(t,n,this.Ut,this.Lt,s);return this.Lt=Bn(),this.qt=np(),this.Ut=new He(_e),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new tp,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new He(_e),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new tp),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function np(){return new Qe(J.comparator)}function sp(){return new Qe(J.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zA=(()=>({and:"AND",or:"OR"}))();class WA{constructor(t,n){this.databaseId=t,this.wt=n}}function Bl(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wv(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Gs(e){return Ue(!!e),re.fromTimestamp(function(t){const n=Vn(t);return new We(n.seconds,n.nanos)}(e))}function Gv(e,t){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Qv(e){const t=Ne.fromString(e);return Ue(Zv(t)),t}function Pc(e,t){const n=Qv(t);if(n.get(1)!==e.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new J(Yv(n))}function Ul(e,t){return Gv(e.databaseId,t)}function GA(e){const t=Qv(e);return t.length===4?Ne.emptyPath():Yv(t)}function rp(e){return new Ne(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Yv(e){return Ue(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function QA(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,l){return c.wt?(Ue(l===void 0||typeof l=="string"),ht.fromBase64String(l||"")):(Ue(l===void 0||l instanceof Uint8Array),ht.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?L.UNKNOWN:Uv(c.code);return new W(l,c.message||"")}(o);n=new zv(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Pc(e,s.document.name),i=Gs(s.document.updateTime),o=s.document.createTime?Gs(s.document.createTime):re.min(),a=new Xt({mapValue:{fields:s.document.fields}}),c=rt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new _o(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Pc(e,s.document),i=s.readTime?Gs(s.readTime):re.min(),o=rt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new _o([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Pc(e,s.document),i=s.removedTargetIds||[];n=new _o([],i,r,null)}else{if(!("filter"in t))return ie();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new $A(r),o=s.targetId;n=new Kv(o,i)}}return n}function YA(e,t){return{documents:[Ul(e,t.path)]}}function XA(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Ul(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ul(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Jv(Kt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Fs(u.field),direction:ek(u.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Ga(l)?l:{value:l}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function JA(e){let t=GA(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ue(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Xv(u);return h instanceof Kt&&Iv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Wr(xs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ga(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ea(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ea(f,h)}(n.endAt)),kA(t,r,o,i,a,"F",c,l)}function ZA(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Xv(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xs(t.unaryFilter.field);return Be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(t.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xs(t.unaryFilter.field);return Be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xs(t.unaryFilter.field);return Be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(e):e.fieldFilter!==void 0?function(t){return Be.create(xs(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Kt.create(t.compositeFilter.filters.map(n=>Xv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ie()}}(t.compositeFilter.op))}(e):ie()}function ek(e){return HA[e]}function tk(e){return KA[e]}function nk(e){return zA[e]}function Fs(e){return{fieldPath:e.canonicalString()}}function xs(e){return pt.fromServerFormat(e.fieldPath)}function Jv(e){return e instanceof Be?function(t){if(t.op==="=="){if(Kd(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NAN"}};if(Hd(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kd(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NOT_NAN"}};if(Hd(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(t.field),op:tk(t.op),value:t.value}}}(e):e instanceof Kt?function(t){const n=t.getFilters().map(s=>Jv(s));return n.length===1?n[0]:{compositeFilter:{op:nk(t.op),filters:n}}}(e):ie()}function Zv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&FA(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Gr(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Gr(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=qv();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Vv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ge())}isEqual(t){return this.batchId===t.batchId&&ar(this.mutations,t.mutations,(n,s)=>Jd(n,s))&&ar(this.baseMutations,t.baseMutations,(n,s)=>Jd(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n,s,r,i=re.min(),o=re.min(),a=ht.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new ds(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new ds(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(t){this.ie=t}}function ok(e){const t=JA({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Fl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.Je=new ck}addToCollectionParentIndex(t,n){return this.Je.add(n),O.resolve()}getCollectionParents(t,n){return O.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return O.resolve()}deleteFieldIndex(t,n){return O.resolve()}getDocumentsMatchingTarget(t,n){return O.resolve(null)}getIndexType(t,n){return O.resolve(0)}getFieldIndexes(t,n){return O.resolve([])}getNextCollectionGroupToUpdate(t){return O.resolve(null)}getMinOffset(t,n){return O.resolve($n.min())}getMinOffsetFromCollectionGroup(t,n){return O.resolve($n.min())}updateCollectionGroup(t,n,s){return O.resolve()}updateIndexEntries(t,n){return O.resolve()}}class ck{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new He(Ne.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new He(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new hr(0)}static vn(){return new hr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.changes=new Er(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,rt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Gr(s.mutation,r,Cn.empty(),We.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,ge()).next(()=>s))}getLocalViewOfDocuments(t,n,s=ge()){const r=ns();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Pr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=ns();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,ge()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Bn();const o=Qr(),a=Qr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Xa)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Gr(u.mutation,l,u.mutation.getFieldMask(),We.now())):o.set(l.key,Cn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new uk(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Qr();let r=new Qe((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Cn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ge()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=qv();u.forEach(f=>{if(!i.has(f)){const d=Vv(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return O.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return J.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Dv(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):O.resolve(ns());let a=-1,c=i;return o.next(l=>O.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?O.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,ge())).next(u=>({batchId:a,changes:BA(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new J(n)).next(s=>{let r=Pr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Pr();return this.indexManager.getCollectionParents(t,r).next(o=>O.forEach(o,a=>{const c=function(l,u){return new Ki(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,rt.newInvalidDocument(l)))});let o=Pr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Gr(l.mutation,c,Cn.empty(),We.now()),Ih(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return O.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Gs(s.createTime)}),O.resolve()}getNamedQuery(t,n){return O.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ok(s.bundledQuery),readTime:Gs(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.overlays=new Qe(J.comparator),this.es=new Map}getOverlay(t,n){return O.resolve(this.overlays.get(n))}getOverlays(t,n){const s=ns();return O.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),O.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),O.resolve()}getOverlaysForCollection(t,n,s){const r=ns(),i=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return O.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new Qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ns(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ns(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return O.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new rk(n,s));let i=this.es.get(n);i===void 0&&(i=ge(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.ns=new He(Ke.ss),this.rs=new He(Ke.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new Ke(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new Ke(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new J(new Ne([])),s=new Ke(n,t),r=new Ke(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new J(new Ne([])),s=new Ke(n,t),r=new Ke(n,t+1);let i=ge();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Ke(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ke{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return J.comparator(t.key,n.key)||_e(t._s,n._s)}static os(t,n){return _e(t._s,n._s)||J.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new He(Ke.ss)}checkEmpty(t){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sk(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(t,n){return O.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ke(n,0),r=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new He(_e);return n.forEach(r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),O.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;J.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new J(i),0);let a=new He(_e);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),O.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){Ue(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return O.forEach(n.mutations,r=>{const i=new Ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new Ke(n,0),r=this.gs.firstAfterOrEqual(s);return O.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,O.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(t){this.Es=t,this.docs=new Qe(J.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(t,n){let s=Bn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():rt.newInvalidDocument(r))}),O.resolve(s)}getAllFromCollection(t,n,s){let r=Bn();const i=new J(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||hA(uA(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return O.resolve(r)}getAllFromCollectionGroup(t,n,s,r){ie()}As(t,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new mk(this)}getSize(t){return O.resolve(this.size)}}class mk extends lk{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),O.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(t){this.persistence=t,this.Rs=new Er(n=>Th(n),_h),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Nh,this.targetCount=0,this.vs=hr.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),O.resolve()}getLastRemoteSnapshotVersion(t){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return O.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),O.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new hr(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,O.resolve()}updateTargetData(t,n){return this.Dn(n),O.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),O.waitFor(i).next(()=>r)}getTargetCount(t){return O.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return O.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),O.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),O.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return O.resolve(s)}containsKey(t,n){return O.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Eh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new yk(this),this.indexManager=new ak,this.remoteDocumentCache=function(s){return new gk(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new ik(n),this.Ns=new fk(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dk,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new pk(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){Y("MemoryPersistence","Starting transaction:",t);const r=new wk(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return O.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class wk extends dA{constructor(t){super(),this.currentSequenceNumber=t}}class Rh{constructor(t){this.persistence=t,this.Fs=new Nh,this.$s=null}static Bs(t){return new Rh(t)}get Ls(){if(this.$s)return this.$s;throw ie()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),O.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),O.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),O.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Ls,s=>{const r=J.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,re.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return O.or([()=>O.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=ge(),r=ge();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Dh(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(Yd(n))return O.resolve(null);let s=gn(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Fl(n,null,"F"),s=gn(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=ge(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(t,Fl(n,null,"F")):this.Bi(t,l,n,c)}))})))}Oi(t,n,s,r){return Yd(n)||r.isEqual(re.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(Bd()<=Ee.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xl(n)),this.Bi(t,o,n,lA(r,-1)))})}Fi(t,n){let s=new He(Pv(t));return n.forEach((r,i)=>{Ih(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return Bd()<=Ee.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",xl(n)),this.Ni.getDocumentsMatchingQuery(t,n,$n.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new Qe(_e),this.Ui=new Er(i=>Th(i),_h),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hk(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function Tk(e,t,n,s){return new bk(e,t,n,s)}async function ew(e,t){const n=ve(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ge();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function tw(e){const t=ve(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function _k(e,t){const n=ve(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(m,w,T){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,d,u)&&a.push(n.Cs.updateTargetData(i,d))});let c=Bn(),l=ge();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Ck(i,o,t.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(re.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function Ck(e,t,n){let s=ge(),r=ge();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Bn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Sk(e,t){const n=ve(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,O.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new ds(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function jl(e,t,n){const s=ve(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qi(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function ip(e,t,n){const s=ve(e);let r=re.min(),i=ge();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ve(a),h=u.Ui.get(l);return h!==void 0?O.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,gn(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:re.min(),n?i:ge())).next(a=>(Ik(s,NA(t),a),{documents:a,Hi:i})))}function Ik(e,t,n){let s=e.Ki.get(t)||re.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class op{constructor(){this.activeTargetIds=Hv()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ak{constructor(){this.Lr=new op,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new op,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);Y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(Y("RestConnection","Received: ",c),c),c=>{throw Rl("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+wr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=Nk[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new Z1;a.setWithCredentials(!0),a.listenOnce(Y1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Dc.NO_ERROR:const l=a.getResponseJson();Y("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Dc.TIMEOUT:Y("Connection",'RPC "'+t+'" timed out'),o(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const u=a.getStatus();if(Y("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(f.status);o(new W(d,f.message))}else o(new W(L.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(L.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{Y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=G1(),o=Q1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new J1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");Y("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new Rk({Hr:m=>{h?Y("Connection","Not sending because WebChannel is closed:",m):(u||(Y("Connection","Opening WebChannel transport."),l.open(),u=!0),Y("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),d=(m,w,T)=>{m.listen(w,v=>{try{T(v)}catch(g){setTimeout(()=>{throw g},0)}})};return d(l,po.EventType.OPEN,()=>{h||Y("Connection","WebChannel transport opened.")}),d(l,po.EventType.CLOSE,()=>{h||(h=!0,Y("Connection","WebChannel transport closed"),f.io())}),d(l,po.EventType.ERROR,m=>{h||(h=!0,Rl("Connection","WebChannel transport errored:",m),f.io(new W(L.UNAVAILABLE,"The operation could not be completed")))}),d(l,po.EventType.MESSAGE,m=>{var w;if(!h){const T=m.data[0];Ue(!!T);const v=T,g=v.error||((w=v[0])===null||w===void 0?void 0:w.error);if(g){Y("Connection","WebChannel received error:",g);const E=g.status;let C=function(V){const N=xe[V];if(N!==void 0)return Uv(N)}(E),k=g.message;C===void 0&&(C=L.INTERNAL,k="Unknown error status: "+E+" with message "+g.message),h=!0,f.io(new W(C,k)),l.close()}else Y("Connection","WebChannel received:",T),f.ro(T)}}),d(o,X1.STAT_EVENT,m=>{m.stat===$d.PROXY?Y("Connection","Detected buffering proxy"):m.stat===$d.NOPROXY&&Y("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e){return new WA(e,!0)}class nw{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&Y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new nw(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new W(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return Y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pk extends Ok{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=QA(this.yt,t),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?Gs(i.readTime):re.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=rp(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Ml(a)?{documents:YA(r,a)}:{query:XA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Wv(r,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=Bl(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=ZA(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=rp(this.yt),n.removeTarget=t,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(L.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(L.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Lk{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(pn(n),this.ou=!1):Y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Gi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ve(a);c._u.add(4),await Wi(c),c.gu.set("Unknown"),c._u.delete(4),await ec(c)}(this))})}),this.gu=new Lk(s,r)}}async function ec(e){if(Gi(e))for(const t of e.wu)await t(!0)}async function Wi(e){for(const t of e.wu)await t(!1)}function sw(e,t){const n=ve(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Mh(n)?Ph(n):br(n).ko()&&Oh(n,t))}function rw(e,t){const n=ve(e),s=br(n);n.du.delete(t),s.ko()&&iw(n,t),n.du.size===0&&(s.ko()?s.Fo():Gi(n)&&n.gu.set("Unknown"))}function Oh(e,t){e.yu.Ot(t.targetId),br(e).zo(t)}function iw(e,t){e.yu.Ot(t),br(e).Ho(t)}function Ph(e){e.yu=new qA({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),br(e).start(),e.gu.uu()}function Mh(e){return Gi(e)&&!br(e).No()&&e.du.size>0}function Gi(e){return ve(e)._u.size===0}function ow(e){e.yu=void 0}async function xk(e){e.du.forEach((t,n)=>{Oh(e,t)})}async function $k(e,t){ow(e),Mh(e)?(e.gu.hu(t),Ph(e)):e.gu.set("Unknown")}async function Vk(e,t,n){if(e.gu.set("Online"),t instanceof zv&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){Y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await cp(e,s)}else if(t instanceof _o?e.yu.Kt(t):t instanceof Kv?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(re.min()))try{const s=await tw(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),iw(r,a);const l=new ds(c.target,a,1,c.sequenceNumber);Oh(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){Y("RemoteStore","Failed to raise snapshot:",s),await cp(e,s)}}async function cp(e,t,n){if(!qi(t))throw t;e._u.add(1),await Wi(e),e.gu.set("Offline"),n||(n=()=>tw(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await ec(e)})}async function lp(e,t){const n=ve(e);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const s=Gi(n);n._u.add(3),await Wi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await ec(n)}async function Bk(e,t){const n=ve(e);t?(n._u.delete(2),await ec(n)):t||(n._u.add(2),await Wi(n),n.gu.set("Unknown"))}function br(e){return e.pu||(e.pu=function(t,n,s){const r=ve(t);return r.su(),new Pk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:xk.bind(null,e),Zr:$k.bind(null,e),Wo:Vk.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Mh(e)?Ph(e):e.gu.set("Unknown")):(await e.pu.stop(),ow(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Lh(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aw(e,t){if(pn("AsyncQueue",`${t}: ${e}`),qi(e))return new W(L.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this.comparator=t?(n,s)=>t(n,s)||J.comparator(n.key,s.key):(n,s)=>J.comparator(n.key,s.key),this.keyedMap=Pr(),this.sortedSet=new Qe(this.comparator)}static emptySet(t){return new Qs(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qs)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qs;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.Tu=new Qe(J.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):ie():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class fr{constructor(t,n,s,r,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fr(t,n,Qs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this.Au=void 0,this.listeners=[]}}class jk{constructor(){this.queries=new Er(t=>Ov(t),Qa),this.onlineState="Unknown",this.Ru=new Set}}async function cw(e,t){const n=ve(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Uk),r)try{i.Au=await n.onListen(s)}catch(o){const a=aw(o,`Initialization of query '${xl(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Fh(n)}async function lw(e,t){const n=ve(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function qk(e,t){const n=ve(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Fh(n)}function Hk(e,t,n){const s=ve(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Fh(e){e.Ru.forEach(t=>{t.next()})}class uw{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new fr(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=fr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t){this.key=t}}class fw{constructor(t){this.key=t}}class Kk{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ge(),this.mutatedKeys=ge(),this.Gu=Pv(t),this.Qu=new Qs(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new up,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,h)=>{const f=r.get(u),d=Ih(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let T=!1;f&&d?f.data.isEqual(d.data)?m!==w&&(s.track({type:3,doc:d}),T=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),T=!0,(c&&this.Gu(d,c)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),T=!0):f&&!d&&(s.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(d?(o=o.add(d),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return d(h)-d(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new fr(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new up,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=ge(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new fw(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new hw(s))}),n}tc(t){this.qu=t.Hi,this.Ku=ge();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return fr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class zk{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Wk{constructor(t){this.key=t,this.nc=!1}}class Gk{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Er(a=>Ov(a),Qa),this.rc=new Map,this.oc=new Set,this.uc=new Qe(J.comparator),this.cc=new Map,this.ac=new Nh,this.hc={},this.lc=new Map,this.fc=hr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Qk(e,t){const n=nN(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Sk(n.localStore,gn(t));n.isPrimaryClient&&sw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Yk(n,t,s,a==="current",o.resumeToken)}return r}async function Yk(e,t,n,s,r){e._c=(h,f,d)=>async function(m,w,T,v){let g=w.view.Wu(T);g.$i&&(g=await ip(m.localStore,w.query,!1).then(({documents:k})=>w.view.Wu(k,g)));const E=v&&v.targetChanges.get(w.targetId),C=w.view.applyChanges(g,m.isPrimaryClient,E);return fp(m,w.targetId,C.Xu),C.snapshot}(e,h,f,d);const i=await ip(e.localStore,t,!0),o=new Kk(t,i.Hi),a=o.Wu(i.documents),c=zi.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),l=o.applyChanges(a,e.isPrimaryClient,c);fp(e,n,l.Xu);const u=new zk(t,n,o);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function Xk(e,t){const n=ve(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Qa(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await jl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),rw(n.remoteStore,s.targetId),ql(n,s.targetId)}).catch(wh)):(ql(n,s.targetId),await jl(n.localStore,s.targetId,!0))}async function dw(e,t){const n=ve(e);try{const s=await _k(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ue(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ue(o.nc):r.removedDocuments.size>0&&(Ue(o.nc),o.nc=!1))}),await gw(n,s,t)}catch(s){await wh(s)}}function hp(e,t,n){const s=ve(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ve(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Fh(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Jk(e,t,n){const s=ve(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new Qe(J.comparator);o=o.insert(i,rt.newNoDocument(i,re.min()));const a=ge().add(i),c=new Ja(re.min(),new Map,new He(_e),o,a);await dw(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),xh(s)}else await jl(s.localStore,t,!1).then(()=>ql(s,t,n)).catch(wh)}function ql(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||pw(e,s)})}function pw(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(rw(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),xh(e))}function fp(e,t,n){for(const s of n)s instanceof hw?(e.ac.addReference(s.key,t),Zk(e,s)):s instanceof fw?(Y("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||pw(e,s.key)):ie()}function Zk(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(Y("SyncEngine","New document in limbo: "+n),e.oc.add(s),xh(e))}function xh(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new J(Ne.fromString(t)),s=e.fc.next();e.cc.set(s,new Wk(n)),e.uc=e.uc.insert(n,s),sw(e.remoteStore,new ds(gn(Ch(n.path)),s,2,Eh.at))}}async function gw(e,t,n){const s=ve(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Dh.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=ve(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!qi(u))throw u;Y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qi.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.qi=l.qi.insert(h,m)}}}(s.localStore,i))}async function eN(e,t){const n=ve(e);if(!n.currentUser.isEqual(t)){Y("SyncEngine","User change. New user:",t.toKey());const s=await ew(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new W(L.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await gw(n,s.ji)}}function tN(e,t){const n=ve(e),s=n.cc.get(t);if(s&&s.nc)return ge().add(s.key);{let r=ge();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function nN(e){const t=ve(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=dw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jk.bind(null,t),t.sc.Wo=qk.bind(null,t.eventManager),t.sc.wc=Hk.bind(null,t.eventManager),t}class sN{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Za(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Tk(this.persistence,new Ek,t.initialUser,this.yt)}yc(t){return new vk(Rh.Bs,this.yt)}gc(t){return new Ak}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rN{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eN.bind(null,this.syncEngine),await Bk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new jk}createDatastore(t){const n=Za(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Dk(r));var r;return function(i,o,a,c){return new Mk(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>hp(this.syncEngine,a,0),o=ap.C()?new ap:new kk,new Fk(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,l){const u=new Gk(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=ve(t);Y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Wi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(e,t,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iN(e,t,n,s){if(t===!0&&s===!0)throw new W(L.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function dp(e){if(!J.isDocumentKey(e))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function pp(e){if(J.isDocumentKey(e))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function tc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ie()}function Ei(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tc(e);throw new W(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new Map;class mp{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,iN("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new eA;switch(n.type){case"gapi":const s=n.client;return new rA(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=gp.get(t);n&&(Y("ComponentProvider","Removing Datastore"),gp.delete(t),n.terminate())}(this),Promise.resolve()}}function oN(e,t,n,s={}){var r;const i=(e=Ei(e,nc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Rl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=st.MOCK_USER;else{o=xS(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(c)}e._authCredentials=new tA(new wv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class Tr{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Tr(this.firestore,t,this._query)}}class Rn extends Tr{constructor(t,n,s){super(t,n,Ch(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new J(t))}withConverter(t){return new Rn(this.firestore,t,this._path)}}function Hl(e,t,...n){if(e=ws(e),mw("collection","path",t),e instanceof nc){const s=Ne.fromString(t,...n);return pp(s),new Rn(e,null,s)}{if(!(e instanceof Nt||e instanceof Rn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Ne.fromString(t,...n));return pp(s),new Rn(e.firestore,null,s)}}function aN(e,t,...n){if(e=ws(e),arguments.length===1&&(t=Ev.R()),mw("doc","path",t),e instanceof nc){const s=Ne.fromString(t,...n);return dp(s),new Nt(e,null,new J(s))}{if(!(e instanceof Nt||e instanceof Rn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Ne.fromString(t,...n));return dp(s),new Nt(e.firestore,e instanceof Rn?e.converter:null,new J(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):pn("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=st.UNAUTHENTICATED,this.clientId=Ev.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{Y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(Y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=aw(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function lN(e,t){e.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ew(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function uN(e,t){e.asyncQueue.verifyOperationInProgress();const n=await hN(e);Y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>lp(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>lp(t.remoteStore,i)),e.onlineComponents=t}async function hN(e){return e.offlineComponents||(Y("FirestoreClient","Using default OfflineComponentProvider"),await lN(e,new sN)),e.offlineComponents}async function fN(e){return e.onlineComponents||(Y("FirestoreClient","Using default OnlineComponentProvider"),await uN(e,new rN)),e.onlineComponents}async function vw(e){const t=await fN(e),n=t.eventManager;return n.onListen=Qk.bind(null,t.syncEngine),n.onUnlisten=Xk.bind(null,t.syncEngine),n}function dN(e,t,n={}){const s=new Nn;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new yw({next:h=>{i.enqueueAndForget(()=>lw(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new uw(Ch(o.path),l,{includeMetadataChanges:!0,Nu:!0});return cw(r,u)}(await vw(e),e.asyncQueue,t,n,s)),s.promise}function pN(e,t,n={}){const s=new Nn;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new yw({next:h=>{i.enqueueAndForget(()=>lw(r,u)),h.fromCache&&a.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new uw(o,l,{includeMetadataChanges:!0,Nu:!0});return cw(r,u)}(await vw(e),e.asyncQueue,t,n,s)),s.promise}class gN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new nw(this,"async_queue_retry"),this.Wc=()=>{const n=Mc();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Mc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Nn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!qi(t))throw t;Y("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw pn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=Lh.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&ie()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class $h extends nc{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new gN,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ew(this),this._firestoreClient.terminate()}}function mN(e,t){const n=typeof e=="object"?e:py(),s=typeof e=="string"?e:t||"(default)",r=Pi(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=MS("firestore");i&&oN(r,...i)}return r}function ww(e){return e._firestoreClient||Ew(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ew(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new pA(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new cN(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new dr(ht.fromBase64String(t))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new dr(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _e(this._lat,t._lat)||_e(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=/^__.*__$/;function _w(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Bh{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Bh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Kl(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(_w(this.sa)&&yN.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class vN{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||Za(t)}da(t,n,s,r=!1){return new Bh({sa:t,methodName:n,fa:s,path:pt.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function wN(e){const t=e._freezeSettings(),n=Za(e._databaseId);return new vN(e._databaseId,!!t.ignoreUndefinedProperties,n)}function EN(e,t,n,s=!1){return Uh(n,e.da(s?4:3,t))}function Uh(e,t){if(Cw(e=ws(e)))return TN("Unsupported field value:",t,e),bN(e,t);if(e instanceof Tw)return function(n,s){if(!_w(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Uh(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=ws(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return DA(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=We.fromDate(n);return{timestampValue:Bl(s.yt,r)}}if(n instanceof We){const r=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bl(s.yt,r)}}if(n instanceof Vh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof dr)return{bytesValue:Wv(s.yt,n._byteString)};if(n instanceof Nt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gv(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${tc(n)}`)}(e,t)}function bN(e,t){const n={};return bv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hi(e,(s,r)=>{const i=Uh(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Cw(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof We||e instanceof Vh||e instanceof dr||e instanceof Nt||e instanceof Tw)}function TN(e,t,n){if(!Cw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=tc(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}const _N=new RegExp("[~\\*/\\[\\]]");function CN(e,t,n){if(t.search(_N)>=0)throw Kl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bw(...t.split("."))._internalPath}catch{throw Kl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Kl(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new W(L.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new SN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(jh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SN extends Sw{data(){return super.data()}}function jh(e,t){return typeof t=="string"?CN(e,t):t instanceof bw?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qh{}class AN extends qh{}function kN(e,t,...n){let s=[];t instanceof qh&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Hh).length,o=r.filter(a=>a instanceof sc).length;if(i>1||i>0&&o>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class sc extends AN{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new sc(t,n,s)}_apply(t){const n=this._parse(t);return Iw(t._query,n),new Tr(t.firestore,t.converter,Ll(t._query,n))}_parse(t){const n=wN(t.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){vp(u,l);const f=[];for(const d of u)f.push(yp(a,r,d));h={arrayValue:{values:f}}}else h=yp(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||vp(u,l),h=EN(o,i,u,l==="in"||l==="not-in");return Be.create(c,l,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function NN(e,t,n){const s=t,r=jh("where",e);return sc._create(r,s,n)}class Hh extends qh{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Hh(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Iw(i,a),i=Ll(i,a)}(t._query,n),new Tr(t.firestore,t.converter,Ll(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yp(e,t,n){if(typeof(n=ws(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dv(t)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Ne.fromString(n));if(!J.isDocumentKey(s))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return qd(e,new J(s))}if(n instanceof Nt)return qd(e,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(n)}.`)}function vp(e,t){if(!Array.isArray(e)||e.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new W(L.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Iw(e,t){if(t.isInequality()){const s=Sh(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Rv(e);i!==null&&RN(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function RN(e,t,n){if(!n.isEqual(t))throw new W(L.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class DN{convertValue(t,n="none"){switch(Ts(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $e(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(cr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw ie()}}convertObject(t,n){const s={};return Hi(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Vh($e(t.latitude),$e(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=_v(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(vi(t));default:return null}}convertTimestamp(t){const n=Vn(t);return new We(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Ne.fromString(t);Ue(Zv(s));const r=new yi(s.get(1),s.get(3)),i=new J(s.popFirst(5));return r.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Aw extends Sw{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(jh("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Co extends Aw{data(t={}){return super.data(t)}}class ON{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Mr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Co(this._firestore,this._userDataWriter,s.key,s,new Mr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Co(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Co(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:PN(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e){e=Ei(e,Nt);const t=Ei(e.firestore,$h);return dN(ww(t),e._key).then(n=>MN(t,e,n))}class kw extends DN{constructor(t){super(),this.firestore=t}convertBytes(t){return new dr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Ep(e){e=Ei(e,Tr);const t=Ei(e.firestore,$h),n=ww(t),s=new kw(t);return IN(e._query),pN(n,e._query).then(r=>new ON(t,s,e,r))}function MN(e,t,n){const s=n.docs.get(t._key),r=new kw(e);return new Aw(e,r,t._key,s,new Mr(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){wr=n})(jI),xn(new fn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new $h(new nA(n.getProvider("auth-internal")),new oA(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Zt(Vd,"3.8.1",e),Zt(Vd,"3.8.1","esm2017")})();const Nw="@firebase/installations",Kh="0.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=1e4,Dw=`w:${Kh}`,Ow="FIS_v2",LN="https://firebaseinstallations.googleapis.com/v1",FN=60*60*1e3,xN="installations",$N="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},_s=new Oa(xN,$N,VN);function Pw(e){return e instanceof jn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw({projectId:e}){return`${LN}/projects/${e}/installations`}function Lw(e){return{token:e.token,requestStatus:2,expiresIn:UN(e.expiresIn),creationTime:Date.now()}}async function Fw(e,t){const s=(await t.json()).error;return _s.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function xw({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function BN(e,{refreshToken:t}){const n=xw(e);return n.append("Authorization",jN(t)),n}async function $w(e){const t=await e();return t.status>=500&&t.status<600?e():t}function UN(e){return Number(e.replace("s","000"))}function jN(e){return`${Ow} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=Mw(e),r=xw(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Ow,appId:e.appId,sdkVersion:Dw},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await $w(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Lw(l.authToken)}}else throw await Fw("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=/^[cdef][\w-]{21}$/,zl="";function zN(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=WN(e);return KN.test(n)?n:zl}catch{return zl}}function WN(e){return HN(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new Map;function Uw(e,t){const n=rc(e);jw(n,t),GN(n,t)}function jw(e,t){const n=Bw.get(e);if(n)for(const s of n)s(t)}function GN(e,t){const n=QN();n&&n.postMessage({key:e,fid:t}),YN()}let ss=null;function QN(){return!ss&&"BroadcastChannel"in self&&(ss=new BroadcastChannel("[Firebase] FID Change"),ss.onmessage=e=>{jw(e.data.key,e.data.fid)}),ss}function YN(){Bw.size===0&&ss&&(ss.close(),ss=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="firebase-installations-database",JN=1,Cs="firebase-installations-store";let Lc=null;function zh(){return Lc||(Lc=fy(XN,JN,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Cs)}}})),Lc}async function sa(e,t){const n=rc(e),r=(await zh()).transaction(Cs,"readwrite"),i=r.objectStore(Cs),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&Uw(e,t.fid),t}async function qw(e){const t=rc(e),s=(await zh()).transaction(Cs,"readwrite");await s.objectStore(Cs).delete(t),await s.done}async function ic(e,t){const n=rc(e),r=(await zh()).transaction(Cs,"readwrite"),i=r.objectStore(Cs),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Uw(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(e){let t;const n=await ic(e.appConfig,s=>{const r=ZN(s),i=eR(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===zl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ZN(e){const t=e||{fid:zN(),registrationStatus:0};return Hw(t)}function eR(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(_s.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=tR(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:nR(e)}:{installationEntry:t}}async function tR(e,t){try{const n=await qN(e,t);return sa(e.appConfig,n)}catch(n){throw Pw(n)&&n.customData.serverCode===409?await qw(e.appConfig):await sa(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function nR(e){let t=await bp(e.appConfig);for(;t.registrationStatus===1;)await Vw(100),t=await bp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Wh(e);return s||n}return t}function bp(e){return ic(e,t=>{if(!t)throw _s.create("installation-not-found");return Hw(t)})}function Hw(e){return sR(e)?{fid:e.fid,registrationStatus:0}:e}function sR(e){return e.registrationStatus===1&&e.registrationTime+Rw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR({appConfig:e,heartbeatServiceProvider:t},n){const s=iR(e,n),r=BN(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Dw,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await $w(()=>fetch(s,a));if(c.ok){const l=await c.json();return Lw(l)}else throw await Fw("Generate Auth Token",c)}function iR(e,{fid:t}){return`${Mw(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(e,t=!1){let n;const s=await ic(e.appConfig,i=>{if(!Kw(i))throw _s.create("not-registered");const o=i.authToken;if(!t&&cR(o))return i;if(o.requestStatus===1)return n=oR(e,t),i;{if(!navigator.onLine)throw _s.create("app-offline");const a=uR(i);return n=aR(e,a),a}});return n?await n:s.authToken}async function oR(e,t){let n=await Tp(e.appConfig);for(;n.authToken.requestStatus===1;)await Vw(100),n=await Tp(e.appConfig);const s=n.authToken;return s.requestStatus===0?Gh(e,t):s}function Tp(e){return ic(e,t=>{if(!Kw(t))throw _s.create("not-registered");const n=t.authToken;return hR(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function aR(e,t){try{const n=await rR(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await sa(e.appConfig,s),n}catch(n){if(Pw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qw(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await sa(e.appConfig,s)}throw n}}function Kw(e){return e!==void 0&&e.registrationStatus===2}function cR(e){return e.requestStatus===2&&!lR(e)}function lR(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+FN}function uR(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function hR(e){return e.requestStatus===1&&e.requestTime+Rw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(e){const t=e,{installationEntry:n,registrationPromise:s}=await Wh(t);return s?s.catch(console.error):Gh(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(e,t=!1){const n=e;return await pR(n),(await Gh(n,t)).token}async function pR(e){const{registrationPromise:t}=await Wh(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(e){if(!e||!e.options)throw Fc("App Configuration");if(!e.name)throw Fc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Fc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Fc(e){return _s.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="installations",mR="installations-internal",yR=e=>{const t=e.getProvider("app").getImmediate(),n=gR(t),s=Pi(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},vR=e=>{const t=e.getProvider("app").getImmediate(),n=Pi(t,zw).getImmediate();return{getId:()=>fR(n),getToken:r=>dR(n,r)}};function wR(){xn(new fn(zw,yR,"PUBLIC")),xn(new fn(mR,vR,"PRIVATE"))}wR();Zt(Nw,Kh);Zt(Nw,Kh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="analytics",ER="firebase_id",bR="origin",TR=60*1e3,_R="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ww="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Qu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function CR(e,t){const n=document.createElement("script");n.src=`${Ww}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function SR(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function IR(e,t,n,s,r,i){const o=s[r];try{if(o)await t[o];else{const c=(await Gw(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(a){Rt.error(a)}e("config",r,i)}async function AR(e,t,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Gw(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",s,r||{})}catch(i){Rt.error(i)}}function kR(e,t,n,s){async function r(i,o,a){try{i==="event"?await AR(e,t,n,o,a):i==="config"?await IR(e,t,n,s,o,a):i==="consent"?e("consent","update",a):e("set",o)}catch(c){Rt.error(c)}}return r}function NR(e,t,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=kR(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function RR(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ww)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},$t=new Oa("analytics","Analytics",DR);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=30,PR=1e3;class MR{constructor(t={},n=PR){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Qw=new MR;function LR(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function FR(e){var t;const{appId:n,apiKey:s}=e,r={method:"GET",headers:LR(s)},i=_R.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function xR(e,t=Qw,n){const{appId:s,apiKey:r,measurementId:i}=e.options;if(!s)throw $t.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw $t.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new BR;return setTimeout(async()=>{a.abort()},n!==void 0?n:TR),Yw({appId:s,apiKey:r,measurementId:i},o,a,t)}async function Yw(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=Qw){var i;const{appId:o,measurementId:a}=e;try{await $R(s,t)}catch(c){if(a)return Rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await FR(e);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!VR(l)){if(r.deleteThrottleMetadata(o),a)return Rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?vd(n,r.intervalMillis,OR):vd(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),Rt.debug(`Calling attemptFetch again in ${u} millis`),Yw(e,h,s,r)}}function $R(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),s($t.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function VR(e){if(!(e instanceof jn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class BR{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function UR(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const i=await t,o=Object.assign(Object.assign({},s),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(){if(cy())try{await ly()}catch(e){return Rt.warn($t.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Rt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qR(e,t,n,s,r,i,o){var a;const c=xR(e);c.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&Rt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Rt.error(d)),t.push(c);const l=jR().then(d=>{if(d)return s.getId()}),[u,h]=await Promise.all([c,l]);RR(i)||CR(i,u.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[bR]="firebase",f.update=!0,h!=null&&(f[ER]=h),r("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(t){this.app=t}_delete(){return delete Yr[this.app.options.appId],Promise.resolve()}}let Yr={},_p=[];const Cp={};let xc="dataLayer",KR="gtag",Sp,Xw,Ip=!1;function zR(){const e=[];if($S()&&e.push("This is a browser extension environment."),VS()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:t});Rt.warn(n.message)}}function WR(e,t,n){zR();const s=e.options.appId;if(!s)throw $t.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(Yr[s]!=null)throw $t.create("already-exists",{id:s});if(!Ip){SR(xc);const{wrappedGtag:i,gtagCore:o}=NR(Yr,_p,Cp,xc,KR);Xw=i,Sp=o,Ip=!0}return Yr[s]=qR(e,_p,Cp,t,Sp,xc,n),new HR(e)}function Wl(e=py()){e=ws(e);const t=Pi(e,ra);return t.isInitialized()?t.getImmediate():GR(e)}function GR(e,t={}){const n=Pi(e,ra);if(n.isInitialized()){const r=n.getImmediate();if(qo(t,n.getOptions()))return r;throw $t.create("already-initialized")}return n.initialize({options:t})}function Gl(e,t,n,s){e=ws(e),UR(Xw,Yr[e.app.options.appId],t,n,s).catch(r=>Rt.error(r))}const Ap="@firebase/analytics",kp="0.9.1";function QR(){xn(new fn(ra,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return WR(s,r,n)},"PUBLIC")),xn(new fn("analytics-internal",e,"PRIVATE")),Zt(Ap,kp),Zt(Ap,kp,"esm2017");function e(t){try{const n=t.getProvider(ra).getImmediate();return{logEvent:(s,r,i)=>Gl(n,s,r,i)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}QR();var YR="firebase",XR="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(YR,XR,"app");const JR={apiKey:"AIzaSyDfme74dwgXaDxr6VNlfEY99Ltx69RVlqU",authDomain:"blogweb-b2edc.firebaseapp.com",projectId:"blogweb-b2edc",storageBucket:"blogweb-b2edc.appspot.com",messagingSenderId:"1074613544061",appId:"1:1074613544061:web:e8a3e199688bb37b7e7d14",measurementId:"G-C29VB6N1D7"},Jw=dy(JR),Ql=mN(Jw);Wl(Jw);const ZR={name:"listPosts",data(){return{posts:{}}},props:{filtre:String},components:{postCard:SS},mounted(){this.filteredPosts()},watch:{filtre:{deep:!0,handler:function(){this.posts=[],this.filteredPosts()}}},methods:{async filteredPosts(){this.filtre!=""?(this.getAnalytycs(this.filtre),await this.getFirebaseStoreFiltrer(this.filtre)):await this.getFirebaseStore()},async getFirebaseStore(){const e=Hl(Ql,"artList"),t=await Ep(e);if(t.empty){console.error("No se han encontrado documentos");return}t.forEach(async n=>{this.posts=Object.assign({},this.posts,{[n.id]:n.data()})})},async getFirebaseStoreFiltrer(e){const t=kN(Hl(Ql,"artList"),NN("category","array-contains",e)),n=await Ep(t);if(n.empty){console.error("No se han encontrado documentos");return}n.forEach(s=>{this.posts=Object.assign({},this.posts,{[s.id]:s.data()})})},getAnalytycs(e){const t=Wl();Gl(t,"view_postFiltre",{postFiltre:e})},getClickPost(e){const t=Wl();Gl(t,"view_postLec",{idPost:e})}},template:`
    <div class="row mb-5" >      
      <section class="col-12 " v-for="(post, id) in posts" >
         <postCard @click="getClickPost(id)" v-if="post.title && post.description && post.creacion && post.imgUrl && post.pagina" :title="post.title" :description="post.description" :date="post.creacion" :img="post.imgUrl" :pagina="post.pagina" :id="id"></postCard>      
      </section>
    </div>
`},eD={name:"asideMain",data(){return{buttonsEtiquetas:[{id:1,value:"",text:"Todos"},{id:2,value:"principios",text:"principios"}]}},emits:["etiquetaName"],template:`
   <aside class="my-5 col-md-2 col-xs-12">
   <div class="d-flex flex-column">
     <h4>Categorias</h4>
     <div class="d-flex flex-wrap gap-1" v-for="(buttonsEtiqueta, id) in buttonsEtiquetas" :key="id">
       <button
         type="button"
         class="p-1 m-1 btn btn-outline-primary btn-sm rounded-4"
         @click="$emit('etiquetaName', buttonsEtiqueta.value)"
       >
         {{buttonsEtiqueta.text}}
       </button>
       
     </div>
   </div>
 </aside>`},tD={name:"homeBlog",data(){return{title:"Blog Post",nameFiltreDoc:""}},components:{listPost:ZR,asideMain:eD},methods:{nameFiltre(e){this.nameFiltreDoc=e}},template:`
  <div class="col-md-10 col-xs-12">
    <section class="my-5 col-12">
      <h1>{{title}} {{nameFiltreDoc}}</h1>
      
      <hr
        style="
          border: 0;
          border-top: 1px solid #525b60;
          display: block;
          margin-top: 40px;"
      />
    </section>
    <div class="col-12">
      <div class="row">
        <list-Post :filtre="nameFiltreDoc"></list-Post> 
      </div>
    </div>

  </div>
  <aside-Main @etiquetaName="nameFiltre"></aside-Main>
  `},nD={name:"infoBlog",data(){return{}},mounted(){},methods:{},template:`
  <h2>info Blog</h2>
  `},sD={name:"post",data(){return{infoPost:[{idnavegacion:"",category:[],creacion:"",title:""}],dataPost:{}}},mounted(){this.getInfoBlog()},methods:{async getInfoBlog(){try{const e=this.$route.params.blogId,t=await wp(aN(Hl(Ql,"artList"),e));if(!t.exists()){console.error("No se han encontrado documentos");return}const n=(await wp(t.data().post)).data();this.infoPost.category=t.data().category,this.infoPost.creacion=this.formatDate(t.data().creacion),this.infoPost.title=t.data().title,this.dataPost=Object.assign({},this.dataPost,{docPost:n})}catch(e){console.error("Error al obtener el documento: ",e)}},formatDate(e){const t=new Date(e.seconds*1e3+e.nanoseconds/1e6);return t.getDate().toString().padStart(2,"0")+"/"+(t.getMonth()+1).toString().padStart(2,"0")+"/"+t.getFullYear().toString().substr(-2)+" "+t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")}},template:`
  <section class="col-12 mt-5 stilePost">
      <div class="stilePostHeader">
        <h1 class="stilePostTitle">{{infoPost.title}}</h1>
        <time class="stilePostMetadata">{{infoPost.creacion}}</time>
      </div>
      <router-view :data="dataPost"></router-view>
  </section>
  `},rD={name:"Introduccion_a_la_programacion_web",data(){return{}},props:["data"],mounted(){},methods:{},template:`
  <section class="stilePostBody">
    <article class="row "> 
      <p>{{data?.docPost?.parrafo1}}</p>
      <p>{{data?.docPost?.parrafo2}}</p>
      <p>{{data?.docPost?.parrafo3}}</p>
      <p>{{data?.docPost?.parrafo4}}</p>
      <p>{{data?.docPost?.parrafo5}}</p>
    </article>
  </section>

 
  `},iD={name:"Como_aprender_programacion_web_los_lenguajes_que_debes_conocer",props:["data"],template:`
    <section class="stilePostBody">
      <article class="row"> 
        <p>{{data?.docPost?.parrafo1}}</p>
        <p>{{data?.docPost?.parrafo2}}</p>
        <ul>
          <li v-for="(post, id) in data?.docPost?.subParrafo1">{{post}}</li>
        </ul>
        <p>{{data?.docPost?.parrafo3}}</p>
        <p>{{data?.docPost?.parrafo4}}</p>
        <p>{{data?.docPost?.parrafo5}}</p>
        <p>{{data?.docPost?.parrafo6}}</p>
        <p>{{data?.docPost?.parrafo7}}</p>
        <p>{{data?.docPost?.parrafo8}}</p>
      </article>
    </section>
  `},oD=[{path:"/",component:tD},{path:"/info",component:nD},{path:"/post/:blogId",component:sD,children:[{path:"Introduccion_a_la_programacion_web",component:rD,props:{data:!0}},{path:"Como_aprender_programacion_web_los_lenguajes_que_debes_conocer",component:iD,props:{data:!0}}]}],oc=cm({data(){return{title:"Blog Post"}}}),aD=wS({history:LC(),routes:oD});oc.use(aD);oc.component("menublog",TS);oc.component("footerBlog",CS);oc.mount("#app");
