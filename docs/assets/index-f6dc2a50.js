var Ie=Object.defineProperty;var De=(e,t,n)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>(De(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function P(){}const Be=e=>e;function ge(e,t){for(const n in t)e[n]=t[n];return e}function Oe(e){return e()}function _e(){return Object.create(null)}function Q(e){e.forEach(Oe)}function Ce(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ee;function Fe(e,t){return e===t?!0:(ee||(ee=document.createElement("a")),ee.href=t,e===ee.href)}function Ke(e){return Object.keys(e).length===0}function Ue(e,...t){if(e==null){for(const i of t)i(void 0);return P}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function le(e,t,n){e.$$.on_destroy.push(Ue(t,n))}const Te=typeof window<"u";let Ve=Te?()=>window.performance.now():()=>Date.now(),Pe=Te?e=>requestAnimationFrame(e):P;const V=new Set;function He(e){V.forEach(t=>{t.c(e)||(V.delete(t),t.f())}),V.size!==0&&Pe(He)}function Ge(e){let t;return V.size===0&&Pe(He),{promise:new Promise(n=>{V.add(t={c:e,f:n})}),abort(){V.delete(t)}}}const Le=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;class ${constructor(t){D(this,"_listeners","WeakMap"in Le?new WeakMap:void 0);D(this,"_observer");D(this,"options");this.options=t}observe(t,n){return this._listeners.set(t,n),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(t=>{var n;for(const i of t)$.entries.set(i.target,i),(n=this._listeners.get(i.target))==null||n(i)}))}}$.entries="WeakMap"in Le?new WeakMap:void 0;function g(e,t){e.appendChild(t)}function H(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function Je(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function A(){return T(" ")}function U(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Qe(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function be(e,t){e.value=t??""}function w(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let te;function Xe(){if(te===void 0){te=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{te=!0}}return te}function we(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=k("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Xe();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=U(window,"message",l=>{l.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{s=U(i.contentWindow,"resize",t),t()}),g(e,i),()=>{(r||s&&i.contentWindow)&&s(),O(i)}}const Ye=new $({box:"content-box"});let ae;function Z(e){ae=e}const K=[],j=[];let G=[];const oe=[],Ze=Promise.resolve();let ue=!1;function xe(){ue||(ue=!0,Ze.then(je))}function x(e){G.push(e)}function X(e){oe.push(e)}const se=new Set;let B=0;function je(){if(B!==0)return;const e=ae;do{try{for(;B<K.length;){const t=K[B];B++,Z(t),$e(t.$$)}}catch(t){throw K.length=0,B=0,t}for(Z(null),K.length=0,B=0;j.length;)j.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];se.has(n)||(se.add(n),n())}G.length=0}while(K.length);for(;oe.length;)oe.pop()();ue=!1,se.clear(),Z(e)}function $e(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}function et(e){const t=[],n=[];G.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),G=t}const ne=new Set;let N;function qe(){N={r:0,c:[],p:N}}function Ne(){N.r||Q(N.c),N=N.p}function L(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function J(e,t,n,i){if(e&&e.o){if(ne.has(e))return;ne.add(e),N.c.push(()=>{ne.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Y(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function We(e){e&&e.c()}function de(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),x(()=>{const s=e.$$.on_mount.map(Oe).filter(Ce);e.$$.on_destroy?e.$$.on_destroy.push(...s):Q(s),e.$$.on_mount=[]}),r.forEach(x)}function he(e,t){const n=e.$$;n.fragment!==null&&(et(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,t){e.$$.dirty[0]===-1&&(K.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,i,r,s,l,o=[-1]){const f=ae;Z(e);const c=e.$$={fragment:null,ctx:[],props:s,update:P,not_equal:r,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:_e(),dirty:o,skip_bound:!1,root:t.target||f.$$.root};l&&l(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(m,a,...h)=>{const u=h.length?h[0]:a;return c.ctx&&r(c.ctx[m],c.ctx[m]=u)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](u),d&&tt(e,m)),a}):[],c.update(),d=!0,Q(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const m=Qe(t.target);c.fragment&&c.fragment.l(m),m.forEach(O)}else c.fragment&&c.fragment.c();t.intro&&L(e.$$.fragment),de(e,t.target,t.anchor),je()}Z(f)}class pe{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){he(this,1),this.$destroy=P}$on(t,n){if(!Ce(n))return P;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nt);var it=rt;function rt(e,t,n){var i=null,r=null,s=function(){i&&(clearTimeout(i),r=null,i=null)},l=function(){var f=r;s(),f&&f()},o=function(){if(!t)return e.apply(this,arguments);var f=this,c=arguments,d=n&&!i;if(s(),r=function(){e.apply(f,c)},i=setTimeout(function(){if(i=null,!d){var m=r;return r=null,m()}},t),d)return r()};return o.cancel=s,o.flush=l,o}const F=[];function st(e,t=P){let n;const i=new Set;function r(o){if(ie(e,o)&&(e=o,n)){const f=!F.length;for(const c of i)c[1](),F.push(c,e);if(f){for(let c=0;c<F.length;c+=2)F[c][0](F[c+1]);F.length=0}}}function s(o){r(o(e))}function l(o,f=P){const c=[o,f];return i.add(c),i.size===1&&(n=t(r,s)||P),o(e),()=>{i.delete(c),i.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:l}}function ve(e){return Object.prototype.toString.call(e)==="[object Date]"}function lt(e){const t=e-1;return t*t*t+1}function fe(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const i=t.map((r,s)=>fe(e[s],r));return r=>i.map(s=>s(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ve(e)&&ve(t)){e=e.getTime(),t=t.getTime();const s=t-e;return l=>new Date(e+l*s)}const i=Object.keys(t),r={};return i.forEach(s=>{r[s]=fe(e[s],t[s])}),s=>{const l={};return i.forEach(o=>{l[o]=r[o](s)}),l}}if(n==="number"){const i=t-e;return r=>e+r*i}throw new Error(`Cannot interpolate ${n} values`)}function ce(e,t={}){const n=st(e);let i,r=e;function s(l,o){if(e==null)return n.set(e=l),Promise.resolve();r=l;let f=i,c=!1,{delay:d=0,duration:m=400,easing:a=Be,interpolate:h=fe}=ge(ge({},t),o);if(m===0)return f&&(f.abort(),f=null),n.set(e=r),Promise.resolve();const u=Ve()+d;let p;return i=Ge(y=>{if(y<u)return!0;c||(p=h(e,l),typeof m=="function"&&(m=m(e,l)),c=!0),f&&(f.abort(),f=null);const z=y-u;return z>m?(n.set(e=l),!1):(n.set(e=p(a(z/m))),!0)}),i.promise}return{set:s,update:(l,o)=>s(l(r,e),o),subscribe:n.subscribe}}const ot="/miosp_sofixit_codewars/assets/block-a596561c.png";function Me(e){let t;return{c(){t=k("div"),E(t,"class","gradient svelte-5fd1ly"),w(t,"height",(e[3]+e[0])*Math.min(e[1],80)+"px"),w(t,"width",Math.min(e[1],80)+"px")},m(n,i){H(n,t,i)},p(n,i){i&11&&w(t,"height",(n[3]+n[0])*Math.min(n[1],80)+"px"),i&2&&w(t,"width",Math.min(n[1],80)+"px")},d(n){n&&O(t)}}}function ut(e){let t,n,i,r,s=e[2]>0&&Me(e);return{c(){t=k("div"),n=k("img"),r=A(),s&&s.c(),Fe(n.src,i=ot)||E(n,"src",i),E(n,"alt","block"),E(n,"class","block svelte-5fd1ly"),w(n,"height",e[0]*Math.min(e[1],80)+"px"),w(n,"width",Math.min(e[1],80)+"px"),w(t,"height",(e[0]+e[2])*Math.min(e[1],80)+"px"),w(t,"width",Math.min(e[1],80)+"px"),w(t,"object-fit","fill")},m(l,o){H(l,t,o),g(t,n),g(t,r),s&&s.m(t,null)},p(l,[o]){o&3&&w(n,"height",l[0]*Math.min(l[1],80)+"px"),o&2&&w(n,"width",Math.min(l[1],80)+"px"),l[2]>0?s?s.p(l,o):(s=Me(l),s.c(),s.m(t,null)):s&&(s.d(1),s=null),o&7&&w(t,"height",(l[0]+l[2])*Math.min(l[1],80)+"px"),o&2&&w(t,"width",Math.min(l[1],80)+"px")},i:P,o:P,d(l){l&&O(t),s&&s.d()}}}function ft(e,t,n){let i,{height:r}=t,{base:s}=t,{fluidHeight:l}=t;const o=ce(0,{duration:1e3,easing:lt});return le(e,o,f=>n(3,i=f)),e.$$set=f=>{"height"in f&&n(0,r=f.height),"base"in f&&n(1,s=f.base),"fluidHeight"in f&&n(2,l=f.fluidHeight)},e.$$.update=()=>{e.$$.dirty&4&&o.set(l)},[r,s,l,i,o]}class ct extends pe{constructor(t){super(),me(this,t,ft,ut,ie,{height:0,base:1,fluidHeight:2})}}function ke(e,t,n){const i=e.slice();return i[22]=t[n],i}function Re(e){let t,n,i,r,s;return{c(){var l,o;t=k("p"),n=T("L"),i=A(),r=k("p"),s=T("R"),E(t,"class","pointer svelte-6qmva5"),w(t,"width",Math.min(e[7],80)+"px"),w(t,"left",(((l=e[4])==null?void 0:l.left)??0)+e[8]*Math.min(e[7],80)+"px"),E(r,"class","pointer svelte-6qmva5"),w(r,"width",Math.min(e[7],80)+"px"),w(r,"left",(((o=e[4])==null?void 0:o.left)??0)+e[9]*Math.min(e[7],80)+"px")},m(l,o){H(l,t,o),g(t,n),H(l,i,o),H(l,r,o),g(r,s)},p(l,o){var f,c;o&128&&w(t,"width",Math.min(l[7],80)+"px"),o&400&&w(t,"left",(((f=l[4])==null?void 0:f.left)??0)+l[8]*Math.min(l[7],80)+"px"),o&128&&w(r,"width",Math.min(l[7],80)+"px"),o&656&&w(r,"left",(((c=l[4])==null?void 0:c.left)??0)+l[9]*Math.min(l[7],80)+"px")},d(l){l&&(O(t),O(i),O(r))}}}function Ee(e){let t,n;return t=new ct({props:{height:e[22].height,base:e[7],fluidHeight:e[22].fluidHeight}}),{c(){We(t.$$.fragment)},m(i,r){de(t,i,r),n=!0},p(i,r){const s={};r&64&&(s.height=i[22].height),r&128&&(s.base=i[7]),r&64&&(s.fluidHeight=i[22].fluidHeight),t.$set(s)},i(i){n||(L(t.$$.fragment,i),n=!0)},o(i){J(t.$$.fragment,i),n=!1},d(i){he(t,i)}}}function at(e){let t,n,i,r,s,l,o,f=e[0]&&Re(e),c=ye(e[6]),d=[];for(let a=0;a<c.length;a+=1)d[a]=Ee(ke(e,c,a));const m=a=>J(d[a],1,1,()=>{d[a]=null});return{c(){t=k("div"),n=k("div"),f&&f.c(),i=A();for(let a=0;a<d.length;a+=1)d[a].c();E(n,"class","blockContainer svelte-6qmva5"),x(()=>e[20].call(n)),E(t,"class","backgroundContainer svelte-6qmva5"),w(t,"background-size",e[1].length*Math.min(e[7],80)*1.5+"px "+Math.max(...e[1])*Math.min(e[7],80)*1.45+"px"),x(()=>e[21].call(t))},m(a,h){H(a,t,h),g(t,n),f&&f.m(n,null),g(n,i);for(let u=0;u<d.length;u+=1)d[u]&&d[u].m(n,null);r=Ye.observe(n,e[19].bind(n)),s=we(n,e[20].bind(n)),l=we(t,e[21].bind(t)),o=!0},p(a,[h]){if(a[0]?f?f.p(a,h):(f=Re(a),f.c(),f.m(n,i)):f&&(f.d(1),f=null),h&192){c=ye(a[6]);let u;for(u=0;u<c.length;u+=1){const p=ke(a,c,u);d[u]?(d[u].p(p,h),L(d[u],1)):(d[u]=Ee(p),d[u].c(),L(d[u],1),d[u].m(n,null))}for(qe(),u=c.length;u<d.length;u+=1)m(u);Ne()}(!o||h&130)&&w(t,"background-size",a[1].length*Math.min(a[7],80)*1.5+"px "+Math.max(...a[1])*Math.min(a[7],80)*1.45+"px")},i(a){if(!o){for(let h=0;h<c.length;h+=1)L(d[h]);o=!0}},o(a){d=d.filter(Boolean);for(let h=0;h<d.length;h+=1)J(d[h]);o=!1},d(a){a&&O(t),f&&f.d(),Je(d,a),r(),s(),l()}}}function dt(e,t,n){let i,r,s,l,{input:o}=t,f=o.map(_=>0),c,d,m,{simulationRan:a=!1}=t,{running:h=!1}=t,{left:u=0}=t,{right:p=0}=t,{result:y=0}=t,z=ce(0,{duration:500});le(e,z,_=>n(8,s=_));let C=ce(0,{duration:500});le(e,C,_=>n(9,l=_));async function W(){S(),n(15,y=0),n(13,u=0),n(14,p=o.length-1);let _=0,I=0;for(z.set(u,{duration:0}),C.set(p,{duration:0}),n(12,h=!0);u<p;)o[u]<o[p]?(o[u]>=_?_=o[u]:(n(15,y+=_-o[u]),n(18,f[u]=_-o[u],f),await new Promise(q=>setTimeout(q,1e3))),n(13,u++,u),z.set(u),await new Promise(q=>setTimeout(q,1e3))):(o[p]>=I?I=o[p]:(n(15,y+=I-o[p]),n(18,f[p]=I-o[p],f),await new Promise(q=>setTimeout(q,1e3))),n(14,p--,p),C.set(p),await new Promise(q=>setTimeout(q,1e3)));n(12,h=!1)}function S(){n(0,a=!1),n(18,f=o.map(_=>0))}let R;function v(){var _;m=(_=$.entries.get(this))==null?void 0:_.contentRect,n(4,m)}function M(){R=this.offsetWidth,n(5,R)}function b(){d=this.clientHeight,c=this.clientWidth,n(3,d),n(2,c)}return e.$$set=_=>{"input"in _&&n(1,o=_.input),"simulationRan"in _&&n(0,a=_.simulationRan),"running"in _&&n(12,h=_.running),"left"in _&&n(13,u=_.left),"right"in _&&n(14,p=_.right),"result"in _&&n(15,y=_.result)},e.$$.update=()=>{e.$$.dirty&14&&n(7,i=Math.min(d/Math.max(...o),c/o.length)*.6),e.$$.dirty&262146&&n(6,r=o.map((_,I)=>({height:_,fluidHeight:f[I]}))),e.$$.dirty&4096&&h&&n(0,a=!0)},[a,o,c,d,m,R,r,i,s,l,z,C,h,u,p,y,W,S,f,v,M,b]}class ht extends pe{constructor(t){super(),me(this,t,dt,at,ie,{input:1,simulationRan:0,running:12,left:13,right:14,result:15,runSimulation:16,cleanSimulation:17})}get runSimulation(){return this.$$.ctx[16]}get cleanSimulation(){return this.$$.ctx[17]}}function Se(e){let t;return{c(){t=k("p"),t.textContent="Input must be a comma separated list of positive numbers",w(t,"color","red"),E(t,"class","svelte-enmxyb")},m(n,i){H(n,t,i)},d(n){n&&O(t)}}}function ze(e){let t,n,i,r,s,l,o,f,c,d,m,a;return{c(){t=k("div"),n=k("p"),i=T("Left pointer: "),r=T(e[6]),s=A(),l=k("p"),o=T("Right pointer: "),f=T(e[5]),c=A(),d=k("p"),m=T("Result: "),a=T(e[7]),E(n,"class","svelte-enmxyb"),E(l,"class","svelte-enmxyb"),E(d,"class","svelte-enmxyb")},m(h,u){H(h,t,u),g(t,n),g(n,i),g(n,r),g(t,s),g(t,l),g(l,o),g(l,f),g(t,c),g(t,d),g(d,m),g(d,a)},p(h,u){u&64&&re(r,h[6]),u&32&&re(f,h[5]),u&128&&re(a,h[7])},d(h){h&&O(t)}}}function Ae(e){let t,n,i,r,s,l,o;function f(u){e[15](u)}function c(u){e[16](u)}function d(u){e[17](u)}function m(u){e[18](u)}function a(u){e[19](u)}let h={input:e[8]};return e[5]!==void 0&&(h.right=e[5]),e[6]!==void 0&&(h.left=e[6]),e[7]!==void 0&&(h.result=e[7]),e[4]!==void 0&&(h.running=e[4]),e[3]!==void 0&&(h.simulationRan=e[3]),t=new ht({props:h}),e[14](t),j.push(()=>Y(t,"right",f)),j.push(()=>Y(t,"left",c)),j.push(()=>Y(t,"result",d)),j.push(()=>Y(t,"running",m)),j.push(()=>Y(t,"simulationRan",a)),{c(){We(t.$$.fragment)},m(u,p){de(t,u,p),o=!0},p(u,p){const y={};p&256&&(y.input=u[8]),!n&&p&32&&(n=!0,y.right=u[5],X(()=>n=!1)),!i&&p&64&&(i=!0,y.left=u[6],X(()=>i=!1)),!r&&p&128&&(r=!0,y.result=u[7],X(()=>r=!1)),!s&&p&16&&(s=!0,y.running=u[4],X(()=>s=!1)),!l&&p&8&&(l=!0,y.simulationRan=u[3],X(()=>l=!1)),t.$set(y)},i(u){o||(L(t.$$.fragment,u),o=!0)},o(u){J(t.$$.fragment,u),o=!1},d(u){e[14](null),he(t,u)}}}function mt(e){let t,n,i,r,s,l,o,f,c,d,m,a,h,u,p,y=!e[1]&&e[0]!=""&&!e[9](),z,C,W,S=e[1]&&Se(),R=e[3]&&ze(e),v=y&&Ae(e);return{c(){t=k("main"),n=k("div"),i=k("div"),r=k("p"),r.textContent='Enter arguments for the "material" function:',s=A(),l=k("input"),o=A(),S&&S.c(),f=A(),c=k("div"),d=k("button"),d.textContent="Run!",m=A(),a=k("button"),h=T("Clean"),u=A(),R&&R.c(),p=A(),v&&v.c(),E(r,"class","svelte-enmxyb"),E(l,"type","text"),E(l,"name","functionInput"),E(l,"id","mainInput"),E(l,"class","svelte-enmxyb"),w(i,"padding-right","2%"),w(d,"margin-bottom","5%"),a.disabled=e[4],E(c,"class","buttonContainer svelte-enmxyb"),E(n,"class","rowContainer svelte-enmxyb"),E(t,"class","svelte-enmxyb")},m(M,b){H(M,t,b),g(t,n),g(n,i),g(i,r),g(i,s),g(i,l),be(l,e[0]),g(i,o),S&&S.m(i,null),g(n,f),g(n,c),g(c,d),g(c,m),g(c,a),g(a,h),g(n,u),R&&R.m(n,null),g(t,p),v&&v.m(t,null),z=!0,C||(W=[U(l,"input",e[11]),U(l,"keyup",e[10]),U(d,"click",e[12]),U(a,"click",e[13])],C=!0)},p(M,[b]){b&1&&l.value!==M[0]&&be(l,M[0]),M[1]?S||(S=Se(),S.c(),S.m(i,null)):S&&(S.d(1),S=null),(!z||b&16)&&(a.disabled=M[4]),M[3]?R?R.p(M,b):(R=ze(M),R.c(),R.m(n,null)):R&&(R.d(1),R=null),b&3&&(y=!M[1]&&M[0]!=""&&!M[9]()),y?v?(v.p(M,b),b&3&&L(v,1)):(v=Ae(M),v.c(),L(v,1),v.m(t,null)):v&&(qe(),J(v,1,1,()=>{v=null}),Ne())},i(M){z||(L(v),z=!0)},o(M){J(v),z=!1},d(M){M&&O(t),S&&S.d(),R&&R.d(),v&&v.d(),C=!1,Q(W)}}}function pt(e,t,n){let i,r="",s=!1,l=it(()=>n(1,s=h()),1e3),o,f=!1,c=!1,d=0,m=0,a=0;function h(){const b=/^\d+(?:,\d+)*$/;return r!=""&&!b.test(r)}function u(){s&&n(1,s=!1),l()}function p(){r=this.value,n(0,r)}const y=()=>{!s&&r!=""&&!h()&&o.runSimulation()},z=()=>{!s&&r!=""&&!h()&&(o.cleanSimulation(),n(3,f=!1))};function C(b){j[b?"unshift":"push"](()=>{o=b,n(2,o)})}function W(b){d=b,n(5,d)}function S(b){m=b,n(6,m)}function R(b){a=b,n(7,a)}function v(b){c=b,n(4,c)}function M(b){f=b,n(3,f)}return e.$$.update=()=>{e.$$.dirty&1&&n(8,i=r.split(",").map(b=>Number(b)))},[r,s,o,f,c,d,m,a,i,h,u,p,y,z,C,W,S,R,v,M]}class gt extends pe{constructor(t){super(),me(this,t,pt,mt,ie,{})}}new gt({target:document.getElementById("app")});
