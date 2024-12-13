"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8403],{88403:function(e,t,n){let i;n.d(t,{g7:function(){return o.g7},dP:function(){return M},re:function(){return _}});let r=()=>Object.create(null),{forEach:l,slice:s}=Array.prototype,{hasOwnProperty:u}=Object.prototype;class a{constructor(e=!0,t=r){this.weakness=e,this.makeData=t}lookup(...e){return this.lookupArray(e)}lookupArray(e){let t=this;return l.call(e,e=>t=t.getChildTrie(e)),u.call(t,"data")?t.data:t.data=this.makeData(s.call(e))}peek(...e){return this.peekArray(e)}peekArray(e){let t=this;for(let n=0,i=e.length;t&&n<i;++n){let i=this.weakness&&c(e[n])?t.weak:t.strong;t=i&&i.get(e[n])}return t&&t.data}getChildTrie(e){let t=this.weakness&&c(e)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),n=t.get(e);return n||t.set(e,n=new a(this.weakness,this.makeData)),n}}function c(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}var h=n(32997),o=n(4686);let p=new o.g7,{hasOwnProperty:d}=Object.prototype,f=Array.from||function(e){let t=[];return e.forEach(e=>t.push(e)),t};function y(e){let{unsubscribe:t}=e;"function"==typeof t&&(e.unsubscribe=void 0,t())}let g=[];function w(e,t){if(!e)throw Error(t||"assertion failure")}function k(e,t){let n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function b(e){switch(e.length){case 0:throw Error("unknown value");case 1:return e[0];case 2:throw e[1]}}class v{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++v.count}peek(){if(1===this.value.length&&!V(this))return C(this),this.value[0]}recompute(e){var t;return w(!this.recomputing,"already recomputing"),C(this),V(this)&&(j(this),p.withValue(this,m,[this,e]),function(e,t){if("function"==typeof e.subscribe)try{y(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(t){return e.setDirty(),!1}return!0}(this,e)&&(this.dirty=!1,V(this)||(t=this,D(t,z)))),b(this.value)}setDirty(){this.dirty||(this.dirty=!0,D(this,O),y(this))}dispose(){this.setDirty(),j(this),D(this,(e,t)=>{e.setDirty(),A(e,this)})}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=g.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(f(this.deps).forEach(e=>e.delete(this)),this.deps.clear(),g.push(this.deps),this.deps=null)}}function C(e){let t=p.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),V(e)?O(t,e):z(t,e),t}function m(e,t){let n;e.recomputing=!0;let{normalizeResult:i}=e;i&&1===e.value.length&&(n=e.value.slice(0)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),i&&n&&!k(n,e.value))try{e.value[0]=i(e.value[0],n[0])}catch(e){}}catch(t){e.value[1]=t}e.recomputing=!1}function V(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function D(e,t){let n=e.parents.size;if(n){let i=f(e.parents);for(let r=0;r<n;++r)t(i[r],e)}}function O(e,t){w(e.childValues.has(t)),w(V(t));let n=!V(e);if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=g.pop()||new Set;e.dirtyChildren.add(t),n&&D(e,O)}function z(e,t){w(e.childValues.has(t)),w(!V(t));let n=e.childValues.get(t);0===n.length?e.childValues.set(t,t.value.slice(0)):k(n,t.value)||e.setDirty(),E(e,t),V(e)||D(e,z)}function E(e,t){let n=e.dirtyChildren;n&&(n.delete(t),0===n.size&&(g.length<100&&g.push(n),e.dirtyChildren=null))}function j(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{A(e,n)}),e.forgetDeps(),w(null===e.dirtyChildren)}function A(e,t){t.parents.delete(e),e.childValues.delete(t),E(e,t)}v.count=0;let K={setDirty:!0,dispose:!0,forget:!0};function M(e){let t=new Map,n=e&&e.subscribe;function i(e){let i=p.getValue();if(i){let r=t.get(e);r||t.set(e,r=new Set),i.dependOn(r),"function"==typeof n&&(y(r),r.unsubscribe=n(e))}}return i.dirty=function(e,n){let i=t.get(e);if(i){let r=n&&d.call(K,n)?n:"setDirty";f(i).forEach(e=>e[r]()),t.delete(e),y(i)}},i}function S(...e){return(i||(i=new a("function"==typeof WeakMap))).lookupArray(e)}let P=new Set;function _(e,{max:t=65536,keyArgs:n,makeCacheKey:i=S,normalizeResult:r,subscribe:l,cache:s=h.e}=Object.create(null)){let u="function"==typeof s?new s(t,e=>e.dispose()):s,a=function(){let t=i.apply(null,n?n.apply(null,arguments):arguments);if(void 0===t)return e.apply(null,arguments);let s=u.get(t);s||(u.set(t,s=new v(e)),s.normalizeResult=r,s.subscribe=l,s.forget=()=>u.delete(t));let a=s.recompute(Array.prototype.slice.call(arguments));return u.set(t,s),P.add(u),p.hasValue()||(P.forEach(e=>e.clean()),P.clear()),a};function c(e){let t=e&&u.get(e);t&&t.setDirty()}function o(e){let t=e&&u.get(e);if(t)return t.peek()}function d(e){return!!e&&u.delete(e)}return Object.defineProperty(a,"size",{get:()=>u.size,configurable:!1,enumerable:!1}),Object.freeze(a.options={max:t,keyArgs:n,makeCacheKey:i,normalizeResult:r,subscribe:l,cache:u}),a.dirtyKey=c,a.dirty=function(){c(i.apply(null,arguments))},a.peekKey=o,a.peek=function(){return o(i.apply(null,arguments))},a.forgetKey=d,a.forget=function(){return d(i.apply(null,arguments))},a.makeCacheKey=i,a.getKey=n?function(){return i.apply(null,n.apply(null,arguments))}:i,Object.freeze(a)}}}]);