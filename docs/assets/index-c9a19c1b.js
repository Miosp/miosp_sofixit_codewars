var $e=Object.defineProperty;var et=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Y=(e,t,n)=>(et(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function N(){}const tt=e=>e;function ze(e,t){for(const n in t)e[n]=t[n];return e}function Fe(e){return e()}function Ee(){return Object.create(null)}function ie(e){e.forEach(Fe)}function Je(e){return typeof e=="function"}function de(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ae;function Ke(e,t){return e===t?!0:(ae||(ae=document.createElement("a")),ae.href=t,e===ae.href)}function nt(e){return Object.keys(e).length===0}function it(e,...t){if(e==null){for(const i of t)i(void 0);return N}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function pe(e,t,n){e.$$.on_destroy.push(it(t,n))}const Ue=typeof window<"u";let rt=Ue?()=>window.performance.now():()=>Date.now(),Ve=Ue?e=>requestAnimationFrame(e):N;const ee=new Set;function Ge(e){ee.forEach(t=>{t.c(e)||(ee.delete(t),t.f())}),ee.size!==0&&Ve(Ge)}function ot(e){let t;return ee.size===0&&Ve(Ge),{promise:new Promise(n=>{ee.add(t={c:e,f:n})}),abort(){ee.delete(t)}}}const Qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;class le{constructor(t){Y(this,"_listeners","WeakMap"in Qe?new WeakMap:void 0);Y(this,"_observer");Y(this,"options");this.options=t}observe(t,n){return this._listeners.set(t,n),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(t=>{var n;for(const i of t)le.entries.set(i.target,i),(n=this._listeners.get(i.target))==null||n(i)}))}}le.entries="WeakMap"in Qe?new WeakMap:void 0;function m(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function st(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function z(){return q(" ")}function K(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function lt(e){return Array.from(e.childNodes)}function ge(e,t){t=""+t,e.data!==t&&(e.data=t)}function Oe(e,t){e.value=t??""}function M(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let ce;function ut(){if(ce===void 0){ce=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ce=!0}}return ce}function Pe(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=w("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ut();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=K(window,"message",l=>{l.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{o=K(i.contentWindow,"resize",t),t()}),m(e,i),()=>{(r||o&&i.contentWindow)&&o(),j(i)}}const ft=new le({box:"content-box"});let ve;function oe(e){ve=e}const $=[],I=[];let te=[];const be=[],at=Promise.resolve();let we=!1;function ct(){we||(we=!0,at.then(Xe))}function se(e){te.push(e)}function U(e){be.push(e)}const _e=new Set;let Z=0;function Xe(){if(Z!==0)return;const e=ve;do{try{for(;Z<$.length;){const t=$[Z];Z++,oe(t),ht(t.$$)}}catch(t){throw $.length=0,Z=0,t}for(oe(null),$.length=0,Z=0;I.length;)I.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];_e.has(n)||(_e.add(n),n())}te.length=0}while($.length);for(;be.length;)be.pop()();we=!1,_e.clear(),oe(e)}function ht(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}function dt(e){const t=[],n=[];te.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),te=t}const he=new Set;let G;function Ye(){G={r:0,c:[],p:G}}function Ze(){G.r||ie(G.c),G=G.p}function D(e,t){e&&e.i&&(he.delete(e),e.i(t))}function ne(e,t,n,i){if(e&&e.o){if(he.has(e))return;he.add(e),G.c.push(()=>{he.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function He(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function V(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function xe(e){e&&e.c()}function Ce(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),se(()=>{const o=e.$$.on_mount.map(Fe).filter(Je);e.$$.on_destroy?e.$$.on_destroy.push(...o):ie(o),e.$$.on_mount=[]}),r.forEach(se)}function Re(e,t){const n=e.$$;n.fragment!==null&&(dt(n.after_update),ie(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(e,t){e.$$.dirty[0]===-1&&($.push(e),ct(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ae(e,t,n,i,r,o,l,s=[-1]){const u=ve;oe(e);const f=e.$$={fragment:null,ctx:[],props:o,update:N,not_equal:r,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Ee(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};l&&l(f.root);let d=!1;if(f.ctx=n?n(e,t.props||{},(p,c,...g)=>{const a=g.length?g[0]:c;return f.ctx&&r(f.ctx[p],f.ctx[p]=a)&&(!f.skip_bound&&f.bound[p]&&f.bound[p](a),d&&mt(e,p)),c}):[],f.update(),d=!0,ie(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const p=lt(t.target);f.fragment&&f.fragment.l(p),p.forEach(j)}else f.fragment&&f.fragment.c();t.intro&&D(e.$$.fragment),Ce(e,t.target,t.anchor),Xe()}oe(u)}class Se{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){Re(this,1),this.$destroy=N}$on(t,n){if(!Je(n))return N;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);var _t=pt;function pt(e,t,n){var i=null,r=null,o=function(){i&&(clearTimeout(i),r=null,i=null)},l=function(){var u=r;o(),u&&u()},s=function(){if(!t)return e.apply(this,arguments);var u=this,f=arguments,d=n&&!i;if(o(),r=function(){e.apply(u,f)},i=setTimeout(function(){if(i=null,!d){var p=r;return r=null,p()}},t),d)return r()};return s.cancel=o,s.flush=l,s}const x=[];function bt(e,t=N){let n;const i=new Set;function r(s){if(de(e,s)&&(e=s,n)){const u=!x.length;for(const f of i)f[1](),x.push(f,e);if(u){for(let f=0;f<x.length;f+=2)x[f][0](x[f+1]);x.length=0}}}function o(s){r(s(e))}function l(s,u=N){const f=[s,u];return i.add(f),i.size===1&&(n=t(r,o)||N),s(e),()=>{i.delete(f),i.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:l}}function Le(e){return Object.prototype.toString.call(e)==="[object Date]"}function ye(e){const t=e-1;return t*t*t+1}function Me(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const i=t.map((r,o)=>Me(e[o],r));return r=>i.map(o=>o(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Le(e)&&Le(t)){e=e.getTime(),t=t.getTime();const o=t-e;return l=>new Date(e+l*o)}const i=Object.keys(t),r={};return i.forEach(o=>{r[o]=Me(e[o],t[o])}),o=>{const l={};return i.forEach(s=>{l[s]=r[s](o)}),l}}if(n==="number"){const i=t-e;return r=>e+r*i}throw new Error(`Cannot interpolate ${n} values`)}function ke(e,t={}){const n=bt(e);let i,r=e;function o(l,s){if(e==null)return n.set(e=l),Promise.resolve();r=l;let u=i,f=!1,{delay:d=0,duration:p=400,easing:c=tt,interpolate:g=Me}=ze(ze({},t),s);if(p===0)return u&&(u.abort(),u=null),n.set(e=r),Promise.resolve();const a=rt()+d;let b;return i=ot(R=>{if(R<a)return!0;f||(b=g(e,l),typeof p=="function"&&(p=p(e,l)),f=!0),u&&(u.abort(),u=null);const k=R-a;return k>p?(n.set(e=l),!1):(n.set(e=b(c(k/p))),!0)}),i.promise}return{set:o,update:(l,s)=>o(l(r,e),s),subscribe:n.subscribe}}const wt="/miosp_sofixit_codewars/assets/block-a596561c.png";function We(e){let t;return{c(){t=w("div"),C(t,"class","gradient svelte-5fd1ly"),M(t,"height",(e[3]+e[0])*Math.min(e[1],80)+"px"),M(t,"width",Math.min(e[1],80)+"px")},m(n,i){B(n,t,i)},p(n,i){i&11&&M(t,"height",(n[3]+n[0])*Math.min(n[1],80)+"px"),i&2&&M(t,"width",Math.min(n[1],80)+"px")},d(n){n&&j(t)}}}function yt(e){let t,n,i,r,o=e[2]>0&&We(e);return{c(){t=w("div"),n=w("img"),r=z(),o&&o.c(),Ke(n.src,i=wt)||C(n,"src",i),C(n,"alt","block"),C(n,"class","block svelte-5fd1ly"),M(n,"height",e[0]*Math.min(e[1],80)+"px"),M(n,"width",Math.min(e[1],80)+"px"),M(t,"height",(e[0]+e[2])*Math.min(e[1],80)+"px"),M(t,"width",Math.min(e[1],80)+"px"),M(t,"object-fit","fill")},m(l,s){B(l,t,s),m(t,n),m(t,r),o&&o.m(t,null)},p(l,[s]){s&3&&M(n,"height",l[0]*Math.min(l[1],80)+"px"),s&2&&M(n,"width",Math.min(l[1],80)+"px"),l[2]>0?o?o.p(l,s):(o=We(l),o.c(),o.m(t,null)):o&&(o.d(1),o=null),s&7&&M(t,"height",(l[0]+l[2])*Math.min(l[1],80)+"px"),s&2&&M(t,"width",Math.min(l[1],80)+"px")},i:N,o:N,d(l){l&&j(t),o&&o.d()}}}function Mt(e,t,n){let i,{height:r}=t,{base:o}=t,{fluidHeight:l}=t;const s=ke(0,{duration:1e3,easing:ye});return pe(e,s,u=>n(3,i=u)),e.$$set=u=>{"height"in u&&n(0,r=u.height),"base"in u&&n(1,o=u.base),"fluidHeight"in u&&n(2,l=u.fluidHeight)},e.$$.update=()=>{e.$$.dirty&4&&s.set(l)},[r,o,l,i,s]}class kt extends Se{constructor(t){super(),Ae(this,t,Mt,yt,de,{height:0,base:1,fluidHeight:2})}}function Ie(e,t,n){const i=e.slice();return i[24]=t[n],i}function je(e){let t,n,i,r,o;return{c(){var l,s;t=w("p"),n=q("L"),i=z(),r=w("p"),o=q("R"),C(t,"class","pointer svelte-6qmva5"),M(t,"width",Math.min(e[7],80)+"px"),M(t,"left",(((l=e[4])==null?void 0:l.left)??0)+e[8]*Math.min(e[7],80)+"px"),C(r,"class","pointer svelte-6qmva5"),M(r,"width",Math.min(e[7],80)+"px"),M(r,"left",(((s=e[4])==null?void 0:s.left)??0)+e[9]*Math.min(e[7],80)+"px")},m(l,s){B(l,t,s),m(t,n),B(l,i,s),B(l,r,s),m(r,o)},p(l,s){var u,f;s&128&&M(t,"width",Math.min(l[7],80)+"px"),s&400&&M(t,"left",(((u=l[4])==null?void 0:u.left)??0)+l[8]*Math.min(l[7],80)+"px"),s&128&&M(r,"width",Math.min(l[7],80)+"px"),s&656&&M(r,"left",(((f=l[4])==null?void 0:f.left)??0)+l[9]*Math.min(l[7],80)+"px")},d(l){l&&(j(t),j(i),j(r))}}}function qe(e){let t,n;return t=new kt({props:{height:e[24].height,base:e[7],fluidHeight:e[24].fluidHeight}}),{c(){xe(t.$$.fragment)},m(i,r){Ce(t,i,r),n=!0},p(i,r){const o={};r&64&&(o.height=i[24].height),r&128&&(o.base=i[7]),r&64&&(o.fluidHeight=i[24].fluidHeight),t.$set(o)},i(i){n||(D(t.$$.fragment,i),n=!0)},o(i){ne(t.$$.fragment,i),n=!1},d(i){Re(t,i)}}}function vt(e){let t,n,i,r,o,l,s,u=e[0]&&je(e),f=He(e[6]),d=[];for(let c=0;c<f.length;c+=1)d[c]=qe(Ie(e,f,c));const p=c=>ne(d[c],1,1,()=>{d[c]=null});return{c(){t=w("div"),n=w("div"),u&&u.c(),i=z();for(let c=0;c<d.length;c+=1)d[c].c();C(n,"class","blockContainer svelte-6qmva5"),se(()=>e[22].call(n)),C(t,"class","backgroundContainer svelte-6qmva5"),M(t,"background-size",e[1].length*Math.min(e[7],80)*1.5+"px "+Math.max(...e[1])*Math.min(e[7],80)*1.45+"px"),se(()=>e[23].call(t))},m(c,g){B(c,t,g),m(t,n),u&&u.m(n,null),m(n,i);for(let a=0;a<d.length;a+=1)d[a]&&d[a].m(n,null);r=ft.observe(n,e[21].bind(n)),o=Pe(n,e[22].bind(n)),l=Pe(t,e[23].bind(t)),s=!0},p(c,[g]){if(c[0]?u?u.p(c,g):(u=je(c),u.c(),u.m(n,i)):u&&(u.d(1),u=null),g&192){f=He(c[6]);let a;for(a=0;a<f.length;a+=1){const b=Ie(c,f,a);d[a]?(d[a].p(b,g),D(d[a],1)):(d[a]=qe(b),d[a].c(),D(d[a],1),d[a].m(n,null))}for(Ye(),a=f.length;a<d.length;a+=1)p(a);Ze()}(!s||g&130)&&M(t,"background-size",c[1].length*Math.min(c[7],80)*1.5+"px "+Math.max(...c[1])*Math.min(c[7],80)*1.45+"px")},i(c){if(!s){for(let g=0;g<f.length;g+=1)D(d[g]);s=!0}},o(c){d=d.filter(Boolean);for(let g=0;g<d.length;g+=1)ne(d[g]);s=!1},d(c){c&&j(t),u&&u.d(),st(d,c),r(),o(),l()}}}function Ct(e,t,n){let i,r,o,l,{input:s}=t,u=s.map(_=>0),f,d,p,{simulationRan:c=!1}=t,{running:g=!1}=t,{left:a=0}=t,{right:b=0}=t,{result:R=0}=t,{leftMax:k=0}=t,{rightMax:h=0}=t,v=ke(0,{duration:500,easing:ye});pe(e,v,_=>n(8,o=_));let A=ke(0,{duration:500,easing:ye});pe(e,A,_=>n(9,l=_));async function H(){for(O(),n(15,R=0),n(13,a=0),n(14,b=s.length-1),n(16,k=0),n(17,h=0),v.set(a,{duration:0}),A.set(b,{duration:0}),n(12,g=!0);a<b;)s[a]<s[b]?(s[a]>=k?n(16,k=s[a]):(n(15,R+=k-s[a]),n(20,u[a]=k-s[a],u),await new Promise(_=>setTimeout(_,1e3))),n(13,a++,a),v.set(a),await new Promise(_=>setTimeout(_,1e3))):(s[b]>=h?n(17,h=s[b]):(n(15,R+=h-s[b]),n(20,u[b]=h-s[b],u),await new Promise(_=>setTimeout(_,1e3))),n(14,b--,b),A.set(b),await new Promise(_=>setTimeout(_,1e3)));n(12,g=!1)}function O(){n(0,c=!1),n(20,u=s.map(_=>0))}let L;function Q(){var _;p=(_=le.entries.get(this))==null?void 0:_.contentRect,n(4,p)}function W(){L=this.offsetWidth,n(5,L)}function X(){d=this.clientHeight,f=this.clientWidth,n(3,d),n(2,f)}return e.$$set=_=>{"input"in _&&n(1,s=_.input),"simulationRan"in _&&n(0,c=_.simulationRan),"running"in _&&n(12,g=_.running),"left"in _&&n(13,a=_.left),"right"in _&&n(14,b=_.right),"result"in _&&n(15,R=_.result),"leftMax"in _&&n(16,k=_.leftMax),"rightMax"in _&&n(17,h=_.rightMax)},e.$$.update=()=>{e.$$.dirty&14&&n(7,i=Math.min(d/Math.max(...s),f/s.length)*.6),e.$$.dirty&1048578&&n(6,r=s.map((_,F)=>({height:_,fluidHeight:u[F]}))),e.$$.dirty&4096&&g&&n(0,c=!0)},[c,s,f,d,p,L,r,i,o,l,v,A,g,a,b,R,k,h,H,O,u,Q,W,X]}class Rt extends Se{constructor(t){super(),Ae(this,t,Ct,vt,de,{input:1,simulationRan:0,running:12,left:13,right:14,result:15,leftMax:16,rightMax:17,runSimulation:18,cleanSimulation:19})}get runSimulation(){return this.$$.ctx[18]}get cleanSimulation(){return this.$$.ctx[19]}}const At="/miosp_sofixit_codewars/assets/back-arrow-ea3b13ec.svg";function Ne(e){let t;return{c(){t=w("p"),t.textContent="Input must be a comma separated list of positive numbers",M(t,"color","red")},m(n,i){B(n,t,i)},d(n){n&&j(t)}}}function Be(e){let t,n,i,r,o,l,s,u,f,d,p,c;return{c(){t=w("div"),n=w("p"),i=q("Left maximum: "),r=q(e[10]),o=z(),l=w("p"),s=q("Right maximum: "),u=q(e[9]),f=z(),d=w("p"),p=q("Result: "),c=q(e[8])},m(g,a){B(g,t,a),m(t,n),m(n,i),m(n,r),m(t,o),m(t,l),m(l,s),m(l,u),m(t,f),m(t,d),m(d,p),m(d,c)},p(g,a){a&1024&&ge(r,g[10]),a&512&&ge(u,g[9]),a&256&&ge(c,g[8])},d(g){g&&j(t)}}}function De(e){let t,n,i,r,o,l,s,u,f;function d(h){e[21](h)}function p(h){e[22](h)}function c(h){e[23](h)}function g(h){e[24](h)}function a(h){e[25](h)}function b(h){e[26](h)}function R(h){e[27](h)}let k={input:e[11]};return e[6]!==void 0&&(k.right=e[6]),e[7]!==void 0&&(k.left=e[7]),e[8]!==void 0&&(k.result=e[8]),e[5]!==void 0&&(k.running=e[5]),e[4]!==void 0&&(k.simulationRan=e[4]),e[10]!==void 0&&(k.leftMax=e[10]),e[9]!==void 0&&(k.rightMax=e[9]),t=new Rt({props:k}),e[20](t),I.push(()=>V(t,"right",d)),I.push(()=>V(t,"left",p)),I.push(()=>V(t,"result",c)),I.push(()=>V(t,"running",g)),I.push(()=>V(t,"simulationRan",a)),I.push(()=>V(t,"leftMax",b)),I.push(()=>V(t,"rightMax",R)),{c(){xe(t.$$.fragment)},m(h,v){Ce(t,h,v),f=!0},p(h,v){const A={};v&2048&&(A.input=h[11]),!n&&v&64&&(n=!0,A.right=h[6],U(()=>n=!1)),!i&&v&128&&(i=!0,A.left=h[7],U(()=>i=!1)),!r&&v&256&&(r=!0,A.result=h[8],U(()=>r=!1)),!o&&v&32&&(o=!0,A.running=h[5],U(()=>o=!1)),!l&&v&16&&(l=!0,A.simulationRan=h[4],U(()=>l=!1)),!s&&v&1024&&(s=!0,A.leftMax=h[10],U(()=>s=!1)),!u&&v&512&&(u=!0,A.rightMax=h[9],U(()=>u=!1)),t.$set(A)},i(h){f||(D(t.$$.fragment,h),f=!0)},o(h){ne(t.$$.fragment,h),f=!1},d(h){e[20](null),Re(t,h)}}}function St(e){let t,n,i,r,o,l,s,u,f,d,p,c,g,a,b,R,k,h,v,A,H,O,L,Q,W,X,_,F,ue,fe,re=!e[1]&&e[0]!=""&&!e[12](),y,me,Te,P=e[1]&&Ne(),E=e[4]&&Be(e),S=re&&De(e);return{c(){t=w("main"),n=w("dialog"),i=w("div"),r=w("h1"),r.textContent="About",o=z(),l=w("button"),s=w("img"),f=z(),d=w("p"),d.textContent="Made By Jan Ludwina",p=z(),c=w("p"),c.innerHTML=`This website is a demo of an implementation of Sofixit Code Wars task. The task was to prepare a function, that solves a given task. <br/><br/>My solution works like that:<br/>
      1. Create two pointers, one on the left and one on the right side of the array, two variables for remembering maximum values which the pointers met and one variable for result<br/>
      2. While the pointers are not pointing at the same element:<br/>
          2.1. Select the pointer with smaller value<br/>
          2.2. If the value in the pointer is bigger than the one in this side&#39;s maximum, set the maximum value of this side, else add to the result this side&#39;s maximum minus height of wall in pointers position<br/>
          2.3. Depending on which pointer was selected, move it to the next element (left to right, and right to left)<br/><br/>
      This works because we need to know the lower of maximums from both sides in order to calculate the value to add to result for each index in the array. If we choose a pointer to move in each iteration, we are sure that value under the pointer is smaller than the one on the other size, so we don&#39;t need to care about other side&#39;s maximum.`,g=z(),a=w("div"),b=w("div"),R=w("p"),R.textContent='Enter arguments for the "material" function:',k=z(),h=w("input"),v=z(),P&&P.c(),A=z(),H=w("div"),O=w("div"),L=w("button"),L.textContent="Run!",Q=z(),W=w("button"),X=q("Clean"),_=z(),F=w("button"),F.textContent="?",ue=z(),E&&E.c(),fe=z(),S&&S.c(),M(r,"margin","unset"),Ke(s.src,u=At)||C(s,"src",u),C(s,"alt","back"),C(s,"class","backIcon svelte-l2rikr"),C(l,"class","backButton svelte-l2rikr"),C(i,"class","dialogRowContainer svelte-l2rikr"),M(c,"font-size","0.8rem"),C(h,"type","text"),C(h,"name","functionInput"),C(h,"id","mainInput"),M(L,"margin-bottom","0.5rem"),M(W,"margin-bottom","0.5rem"),W.disabled=e[5],C(O,"class","buttonContainer svelte-l2rikr"),C(H,"class","yetAnotherContainer svelte-l2rikr"),C(a,"class","rowContainer svelte-l2rikr"),C(t,"class","svelte-l2rikr")},m(T,J){B(T,t,J),m(t,n),m(n,i),m(i,r),m(i,o),m(i,l),m(l,s),m(n,f),m(n,d),m(n,p),m(n,c),e[15](n),m(t,g),m(t,a),m(a,b),m(b,R),m(b,k),m(b,h),Oe(h,e[0]),m(b,v),P&&P.m(b,null),m(a,A),m(a,H),m(H,O),m(O,L),m(O,Q),m(O,W),m(W,X),m(O,_),m(O,F),m(H,ue),E&&E.m(H,null),m(t,fe),S&&S.m(t,null),y=!0,me||(Te=[K(l,"click",e[14]),K(h,"input",e[16]),K(h,"keyup",e[13]),K(L,"click",e[17]),K(W,"click",e[18]),K(F,"click",e[19])],me=!0)},p(T,[J]){J&1&&h.value!==T[0]&&Oe(h,T[0]),T[1]?P||(P=Ne(),P.c(),P.m(b,null)):P&&(P.d(1),P=null),(!y||J&32)&&(W.disabled=T[5]),T[4]?E?E.p(T,J):(E=Be(T),E.c(),E.m(H,null)):E&&(E.d(1),E=null),J&3&&(re=!T[1]&&T[0]!=""&&!T[12]()),re?S?(S.p(T,J),J&3&&D(S,1)):(S=De(T),S.c(),D(S,1),S.m(t,null)):S&&(Ye(),ne(S,1,1,()=>{S=null}),Ze())},i(T){y||(D(S),y=!0)},o(T){ne(S),y=!1},d(T){T&&j(t),e[15](null),P&&P.d(),E&&E.d(),S&&S.d(),me=!1,ie(Te)}}}function Tt(e,t,n){let i,r="",o=!1,l=_t(()=>n(1,o=R()),1e3),s,u,f=!1,d=!1,p=0,c=0,g=0,a=0,b=0;function R(){const y=/^\d+(?:,\d+)*$/;return r!=""&&!y.test(r)}function k(){o&&n(1,o=!1),l()}const h=()=>{u.close()};function v(y){I[y?"unshift":"push"](()=>{u=y,n(3,u)})}function A(){r=this.value,n(0,r)}const H=()=>{!o&&r!=""&&!R()&&s.runSimulation()},O=()=>{!o&&r!=""&&!R()&&(s.cleanSimulation(),n(4,f=!1))},L=()=>{u.showModal()};function Q(y){I[y?"unshift":"push"](()=>{s=y,n(2,s)})}function W(y){p=y,n(6,p)}function X(y){c=y,n(7,c)}function _(y){g=y,n(8,g)}function F(y){d=y,n(5,d)}function ue(y){f=y,n(4,f)}function fe(y){b=y,n(10,b)}function re(y){a=y,n(9,a)}return e.$$.update=()=>{e.$$.dirty&1&&n(11,i=r.split(",").map(y=>Number(y)))},[r,o,s,u,f,d,p,c,g,a,b,i,R,k,h,v,A,H,O,L,Q,W,X,_,F,ue,fe,re]}class zt extends Se{constructor(t){super(),Ae(this,t,Tt,St,de,{})}}new zt({target:document.getElementById("app")});
