var Oe=Object.defineProperty;var He=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(He(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function P(){}const ze=e=>e;function fe(e,t){for(const n in t)e[n]=t[n];return e}function we(e){return e()}function ce(){return Object.create(null)}function F(e){e.forEach(we)}function ke(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function Te(e,t){return e===t?!0:(V||(V=document.createElement("a")),V.href=t,e===V.href)}function je(e){return Object.keys(e).length===0}function Le(e,...t){if(e==null){for(const i of t)i(void 0);return P}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ne(e,t,n){e.$$.on_destroy.push(Le(t,n))}const ve=typeof window<"u";let Ie=ve?()=>window.performance.now():()=>Date.now(),Me=ve?e=>requestAnimationFrame(e):P;const D=new Set;function Ee(e){D.forEach(t=>{t.c(e)||(D.delete(t),t.f())}),D.size!==0&&Me(Ee)}function Re(e){let t;return D.size===0&&Me(Ee),{promise:new Promise(n=>{D.add(t={c:e,f:n})}),abort(){D.delete(t)}}}function g(e,t){e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function qe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function O(){return T(" ")}function q(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function De(e){return Array.from(e.childNodes)}function $(e,t){t=""+t,e.data!==t&&(e.data=t)}function ae(e,t){e.value=t??""}function k(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let G;function Be(){if(G===void 0){G=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{G=!0}}return G}function We(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=w("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const l=Be();let r;return l?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=q(window,"message",u=>{u.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{r=q(i.contentWindow,"resize",t),t()}),g(e,i),()=>{(l||r&&i.contentWindow)&&r(),z(i)}}let re;function U(e){re=e}const R=[],j=[];let B=[];const te=[],Fe=Promise.resolve();let ne=!1;function Ke(){ne||(ne=!0,Fe.then(Se))}function Y(e){B.push(e)}function J(e){te.push(e)}const ee=new Set;let N=0;function Se(){if(N!==0)return;const e=re;do{try{for(;N<R.length;){const t=R[N];N++,U(t),Ue(t.$$)}}catch(t){throw R.length=0,N=0,t}for(U(null),R.length=0,N=0;j.length;)j.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];ee.has(n)||(ee.add(n),n())}B.length=0}while(R.length);for(;te.length;)te.pop()();ne=!1,ee.clear(),U(e)}function Ue(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function Ve(e){const t=[],n=[];B.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),B=t}const X=new Set;let L;function Ae(){L={r:0,c:[],p:L}}function Ce(){L.r||F(L.c),L=L.p}function H(e,t){e&&e.i&&(X.delete(e),e.i(t))}function W(e,t,n,i){if(e&&e.o){if(X.has(e))return;X.add(e),L.c.push(()=>{X.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function de(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Q(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Pe(e){e&&e.c()}function le(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),Y(()=>{const r=e.$$.on_mount.map(we).filter(ke);e.$$.on_destroy?e.$$.on_destroy.push(...r):F(r),e.$$.on_mount=[]}),l.forEach(Y)}function ue(e,t){const n=e.$$;n.fragment!==null&&(Ve(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(R.push(e),Ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,i,l,r,u,o=[-1]){const f=re;U(e);const s=e.$$={fragment:null,ctx:[],props:r,update:P,not_equal:l,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ce(),dirty:o,skip_bound:!1,root:t.target||f.$$.root};u&&u(s.root);let d=!1;if(s.ctx=n?n(e,t.props||{},(c,a,...h)=>{const p=h.length?h[0]:a;return s.ctx&&l(s.ctx[c],s.ctx[c]=p)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](p),d&&Ge(e,c)),a}):[],s.update(),d=!0,F(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const c=De(t.target);s.fragment&&s.fragment.l(c),c.forEach(z)}else s.fragment&&s.fragment.c();t.intro&&H(e.$$.fragment),le(e,t.target,t.anchor),Se()}U(f)}class se{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){ue(this,1),this.$destroy=P}$on(t,n){if(!ke(n))return P;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Je);var Qe=Xe;function Xe(e,t,n){var i=null,l=null,r=function(){i&&(clearTimeout(i),l=null,i=null)},u=function(){var f=l;r(),f&&f()},o=function(){if(!t)return e.apply(this,arguments);var f=this,s=arguments,d=n&&!i;if(r(),l=function(){e.apply(f,s)},i=setTimeout(function(){if(i=null,!d){var c=l;return l=null,c()}},t),d)return l()};return o.cancel=r,o.flush=u,o}const I=[];function Ye(e,t=P){let n;const i=new Set;function l(o){if(Z(e,o)&&(e=o,n)){const f=!I.length;for(const s of i)s[1](),I.push(s,e);if(f){for(let s=0;s<I.length;s+=2)I[s][0](I[s+1]);I.length=0}}}function r(o){l(o(e))}function u(o,f=P){const s=[o,f];return i.add(s),i.size===1&&(n=t(l,r)||P),o(e),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:l,update:r,subscribe:u}}function he(e){return Object.prototype.toString.call(e)==="[object Date]"}function ie(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const i=t.map((l,r)=>ie(e[r],l));return l=>i.map(r=>r(l))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(he(e)&&he(t)){e=e.getTime(),t=t.getTime();const r=t-e;return u=>new Date(e+u*r)}const i=Object.keys(t),l={};return i.forEach(r=>{l[r]=ie(e[r],t[r])}),r=>{const u={};return i.forEach(o=>{u[o]=l[o](r)}),u}}if(n==="number"){const i=t-e;return l=>e+l*i}throw new Error(`Cannot interpolate ${n} values`)}function Ze(e,t={}){const n=Ye(e);let i,l=e;function r(u,o){if(e==null)return n.set(e=u),Promise.resolve();l=u;let f=i,s=!1,{delay:d=0,duration:c=400,easing:a=ze,interpolate:h=ie}=fe(fe({},t),o);if(c===0)return f&&(f.abort(),f=null),n.set(e=l),Promise.resolve();const p=Ie()+d;let C;return i=Re(m=>{if(m<p)return!0;s||(C=h(e,u),typeof c=="function"&&(c=c(e,u)),s=!0),f&&(f.abort(),f=null);const E=m-p;return E>c?(n.set(e=u),!1):(n.set(e=C(a(E/c))),!0)}),i.promise}return{set:r,update:(u,o)=>r(u(l,e),o),subscribe:n.subscribe}}const xe="/assets/block-a596561c.png";function me(e){let t;return{c(){t=w("div"),v(t,"class","gradient svelte-5fd1ly"),k(t,"height",(e[3]+e[0])*Math.min(e[1],80)+"px"),k(t,"width",Math.min(e[1],80)+"px")},m(n,i){K(n,t,i)},p(n,i){i&11&&k(t,"height",(n[3]+n[0])*Math.min(n[1],80)+"px"),i&2&&k(t,"width",Math.min(n[1],80)+"px")},d(n){n&&z(t)}}}function $e(e){let t,n,i,l,r=e[2]>0&&me(e);return{c(){t=w("div"),n=w("img"),l=O(),r&&r.c(),Te(n.src,i=xe)||v(n,"src",i),v(n,"alt","block"),v(n,"class","block svelte-5fd1ly"),k(n,"height",e[0]*Math.min(e[1],80)+"px"),k(n,"width",Math.min(e[1],80)+"px"),k(t,"height",(e[0]+e[2])*Math.min(e[1],80)+"px"),k(t,"width",Math.min(e[1],80)+"px"),k(t,"object-fit","fill")},m(u,o){K(u,t,o),g(t,n),g(t,l),r&&r.m(t,null)},p(u,[o]){o&3&&k(n,"height",u[0]*Math.min(u[1],80)+"px"),o&2&&k(n,"width",Math.min(u[1],80)+"px"),u[2]>0?r?r.p(u,o):(r=me(u),r.c(),r.m(t,null)):r&&(r.d(1),r=null),o&7&&k(t,"height",(u[0]+u[2])*Math.min(u[1],80)+"px"),o&2&&k(t,"width",Math.min(u[1],80)+"px")},i:P,o:P,d(u){u&&z(t),r&&r.d()}}}function et(e,t,n){let i,{height:l}=t,{base:r}=t,{fluidHeight:u}=t;const o=Ze(0,{duration:1e3});return Ne(e,o,f=>n(3,i=f)),e.$$set=f=>{"height"in f&&n(0,l=f.height),"base"in f&&n(1,r=f.base),"fluidHeight"in f&&n(2,u=f.fluidHeight)},e.$$.update=()=>{e.$$.dirty&4&&o.set(u)},[l,r,u,i,o]}class tt extends se{constructor(t){super(),oe(this,t,et,$e,Z,{height:0,base:1,fluidHeight:2})}}function ge(e,t,n){const i=e.slice();return i[13]=t[n],i}function pe(e){let t,n;return t=new tt({props:{height:e[13].height,base:e[4],fluidHeight:e[13].fluidHeight}}),{c(){Pe(t.$$.fragment)},m(i,l){le(t,i,l),n=!0},p(i,l){const r={};l&8&&(r.height=i[13].height),l&16&&(r.base=i[4]),l&8&&(r.fluidHeight=i[13].fluidHeight),t.$set(r)},i(i){n||(H(t.$$.fragment,i),n=!0)},o(i){W(t.$$.fragment,i),n=!1},d(i){ue(t,i)}}}function nt(e){let t,n,i,l=de(e[3]),r=[];for(let o=0;o<l.length;o+=1)r[o]=pe(ge(e,l,o));const u=o=>W(r[o],1,1,()=>{r[o]=null});return{c(){t=w("div");for(let o=0;o<r.length;o+=1)r[o].c();v(t,"class","blockContainer svelte-7r3shk"),k(t,"background-size",e[0].length*Math.min(e[4],80)*1.5+"px "+Math.max(...e[0])*Math.min(e[4],80)*1.45+"px"),Y(()=>e[12].call(t))},m(o,f){K(o,t,f);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(t,null);n=We(t,e[12].bind(t)),i=!0},p(o,[f]){if(f&24){l=de(o[3]);let s;for(s=0;s<l.length;s+=1){const d=ge(o,l,s);r[s]?(r[s].p(d,f),H(r[s],1)):(r[s]=pe(d),r[s].c(),H(r[s],1),r[s].m(t,null))}for(Ae(),s=l.length;s<r.length;s+=1)u(s);Ce()}(!i||f&17)&&k(t,"background-size",o[0].length*Math.min(o[4],80)*1.5+"px "+Math.max(...o[0])*Math.min(o[4],80)*1.45+"px")},i(o){if(!i){for(let f=0;f<l.length;f+=1)H(r[f]);i=!0}},o(o){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)W(r[f]);i=!1},d(o){o&&z(t),qe(r,o),n()}}}function it(e,t,n){let i,l,{input:r}=t,u=r.map(m=>0),o,f,{running:s=!1}=t,{left:d=0}=t,{right:c=0}=t,{result:a=0}=t;async function h(){p(),n(8,a=0),n(6,d=0),n(7,c=r.length-1);let m=0,E=0;for(n(5,s=!0);d<c;)r[d]<r[c]?(r[d]>=m?m=r[d]:(n(8,a+=m-r[d]),n(11,u[d]=m-r[d],u),await new Promise(A=>setTimeout(A,1e3))),n(6,d++,d),await new Promise(A=>setTimeout(A,1e3))):(r[c]>=E?E=r[c]:(n(8,a+=E-r[c]),n(11,u[c]=E-r[c],u),await new Promise(A=>setTimeout(A,1e3))),n(7,c--,c),await new Promise(A=>setTimeout(A,1e3)));n(5,s=!1)}function p(){n(11,u=r.map(m=>0))}function C(){f=this.clientHeight,o=this.clientWidth,n(2,f),n(1,o)}return e.$$set=m=>{"input"in m&&n(0,r=m.input),"running"in m&&n(5,s=m.running),"left"in m&&n(6,d=m.left),"right"in m&&n(7,c=m.right),"result"in m&&n(8,a=m.result)},e.$$.update=()=>{e.$$.dirty&7&&n(4,i=Math.min(f/Math.max(...r),o/r.length)*.6),e.$$.dirty&2049&&n(3,l=r.map((m,E)=>({height:m,fluidHeight:u[E]})))},[r,o,f,l,i,s,d,c,a,h,p,u,C]}class rt extends se{constructor(t){super(),oe(this,t,it,nt,Z,{input:0,running:5,left:6,right:7,result:8,runSimulation:9,cleanSimulation:10})}get runSimulation(){return this.$$.ctx[9]}get cleanSimulation(){return this.$$.ctx[10]}}function _e(e){let t;return{c(){t=w("p"),t.textContent="Input must be a comma separated list of numbers",k(t,"color","red"),v(t,"class","svelte-1oyalmy")},m(n,i){K(n,t,i)},d(n){n&&z(t)}}}function be(e){let t,n,i,l,r,u,o,f,s,d,c,a;return{c(){t=w("div"),n=w("p"),i=T("Left pointer: "),l=T(e[6]),r=O(),u=w("p"),o=T("Right pointer: "),f=T(e[5]),s=O(),d=w("p"),c=T("Result: "),a=T(e[7]),v(n,"class","svelte-1oyalmy"),v(u,"class","svelte-1oyalmy"),v(d,"class","svelte-1oyalmy")},m(h,p){K(h,t,p),g(t,n),g(n,i),g(n,l),g(t,r),g(t,u),g(u,o),g(u,f),g(t,s),g(t,d),g(d,c),g(d,a)},p(h,p){p&64&&$(l,h[6]),p&32&&$(f,h[5]),p&128&&$(a,h[7])},d(h){h&&z(t)}}}function ye(e){let t,n,i,l,r,u;function o(a){e[15](a)}function f(a){e[16](a)}function s(a){e[17](a)}function d(a){e[18](a)}let c={input:e[8]};return e[5]!==void 0&&(c.right=e[5]),e[6]!==void 0&&(c.left=e[6]),e[7]!==void 0&&(c.result=e[7]),e[1]!==void 0&&(c.running=e[1]),t=new rt({props:c}),e[14](t),j.push(()=>Q(t,"right",o)),j.push(()=>Q(t,"left",f)),j.push(()=>Q(t,"result",s)),j.push(()=>Q(t,"running",d)),{c(){Pe(t.$$.fragment)},m(a,h){le(t,a,h),u=!0},p(a,h){const p={};h&256&&(p.input=a[8]),!n&&h&32&&(n=!0,p.right=a[5],J(()=>n=!1)),!i&&h&64&&(i=!0,p.left=a[6],J(()=>i=!1)),!l&&h&128&&(l=!0,p.result=a[7],J(()=>l=!1)),!r&&h&2&&(r=!0,p.running=a[1],J(()=>r=!1)),t.$set(p)},i(a){u||(H(t.$$.fragment,a),u=!0)},o(a){W(t.$$.fragment,a),u=!1},d(a){e[14](null),ue(t,a)}}}function lt(e){let t,n,i,l,r,u,o,f,s,d,c,a,h,p,C=!e[2]&&e[0]!=""&&!e[9](),m,E,A,S=e[2]&&_e(),M=e[4]&&be(e),b=C&&ye(e);return{c(){t=w("main"),n=w("div"),i=w("div"),l=w("p"),l.textContent='Enter arguments for the "material" function:',r=O(),u=w("input"),o=O(),S&&S.c(),f=O(),s=w("div"),d=w("button"),d.textContent="Run!",c=O(),a=w("button"),a.textContent="Clean",h=O(),M&&M.c(),p=O(),b&&b.c(),v(l,"class","svelte-1oyalmy"),v(u,"type","text"),v(u,"name","functionInput"),v(u,"id","mainInput"),v(u,"class","svelte-1oyalmy"),k(i,"padding-right","min(10%, 100px)"),v(s,"class","buttonContainer svelte-1oyalmy"),v(n,"class","rowContainer svelte-1oyalmy"),v(t,"class","svelte-1oyalmy")},m(y,_){K(y,t,_),g(t,n),g(n,i),g(i,l),g(i,r),g(i,u),ae(u,e[0]),g(i,o),S&&S.m(i,null),g(n,f),g(n,s),g(s,d),g(s,c),g(s,a),g(n,h),M&&M.m(n,null),g(t,p),b&&b.m(t,null),m=!0,E||(A=[q(u,"input",e[11]),q(u,"keyup",e[10]),q(d,"click",e[12]),q(a,"click",e[13])],E=!0)},p(y,[_]){_&1&&u.value!==y[0]&&ae(u,y[0]),y[2]?S||(S=_e(),S.c(),S.m(i,null)):S&&(S.d(1),S=null),y[4]?M?M.p(y,_):(M=be(y),M.c(),M.m(n,null)):M&&(M.d(1),M=null),_&5&&(C=!y[2]&&y[0]!=""&&!y[9]()),C?b?(b.p(y,_),_&5&&H(b,1)):(b=ye(y),b.c(),H(b,1),b.m(t,null)):b&&(Ae(),W(b,1,1,()=>{b=null}),Ce())},i(y){m||(H(b),m=!0)},o(y){W(b),m=!1},d(y){y&&z(t),S&&S.d(),M&&M.d(),b&&b.d(),E=!1,F(A)}}}function ut(e,t,n){let i,l="",r=!1,u=Qe(()=>n(2,r=h()),1e3),o,f=!1,s=!1,d=0,c=0,a=0;function h(){const _=/^\d+(?:,\d+)*$/;return l!=""&&!_.test(l)}function p(){r&&n(2,r=!1),u()}function C(){l=this.value,n(0,l)}const m=()=>{!r&&l!=""&&!h()&&o.runSimulation()},E=()=>{!r&&l!=""&&!h()&&(o.cleanSimulation(),n(4,f=!1))};function A(_){j[_?"unshift":"push"](()=>{o=_,n(3,o)})}function S(_){d=_,n(5,d)}function M(_){c=_,n(6,c)}function b(_){a=_,n(7,a)}function y(_){s=_,n(1,s)}return e.$$.update=()=>{e.$$.dirty&1&&n(8,i=l.split(",").map(_=>Number(_))),e.$$.dirty&2&&s&&n(4,f=!0)},[l,s,r,o,f,d,c,a,i,h,p,C,m,E,A,S,M,b,y]}class ot extends se{constructor(t){super(),oe(this,t,ut,lt,Z,{})}}new ot({target:document.getElementById("app")});