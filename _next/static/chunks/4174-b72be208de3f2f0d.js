"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4174],{4903:function(n,r,e){e.d(r,{Ps:function(){return s}});var t,o=e(11735),i=e(17263),a=new Map,u=new Map,c=!0,f=!1;function l(n){return n.replace(/[\s,]+/g," ").trim()}function s(n){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];"string"==typeof n&&(n=[n]);var t=n[0];return r.forEach(function(r,e){r&&"Document"===r.kind?t+=r.loc.source.body:t+=r,t+=n[e+1]}),function(n){var r=l(n);if(!a.has(r)){var e,t,s,d,v,m=(0,i.Qc)(n,{experimentalFragmentVariables:f,allowLegacyFragmentVariables:f});if(!m||"Document"!==m.kind)throw Error("Not a valid GraphQL document.");a.set(r,((d=new Set((e=new Set,t=[],m.definitions.forEach(function(n){if("FragmentDefinition"===n.kind){var r,o=n.name.value,i=l((r=n.loc).source.body.substring(r.start,r.end)),a=u.get(o);a&&!a.has(i)?c&&console.warn("Warning: fragment with name "+o+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):a||u.set(o,a=new Set),a.add(i),e.has(i)||(e.add(i),t.push(n))}else t.push(n)}),s=(0,o.pi)((0,o.pi)({},m),{definitions:t})).definitions)).forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(r){var e=n[r];e&&"object"==typeof e&&d.add(e)})}),(v=s.loc)&&(delete v.startToken,delete v.endToken),s))}return a.get(r)}(t)}var d=s;(t=s||(s={})).gql=d,t.resetCaches=function(){a.clear(),u.clear()},t.disableFragmentWarnings=function(){c=!1},t.enableExperimentalFragmentVariables=function(){f=!0},t.disableExperimentalFragmentVariables=function(){f=!1},s.default=s},43152:function(n,r,e){var t,o;function i(n){return!!n&&n<7}e.d(r,{Ie:function(){return t},Oj:function(){return i}}),(o=t||(t={}))[o.loading=1]="loading",o[o.setVariables=2]="setVariables",o[o.fetchMore=3]="fetchMore",o[o.refetch=4]="refetch",o[o.poll=6]="poll",o[o.ready=7]="ready",o[o.error=8]="error"},41288:function(n,r,e){e.d(r,{MS:function(){return u},YG:function(){return i},cA:function(){return f},ls:function(){return a}});var t=e(11735);e(92);var o=e(81167),i=Symbol();function a(n){return!!n.extensions&&Array.isArray(n.extensions[i])}function u(n){return n.hasOwnProperty("graphQLErrors")}var c=function(n){var r=(0,t.ev)((0,t.ev)((0,t.ev)([],n.graphQLErrors,!0),n.clientErrors,!0),n.protocolErrors,!0);return n.networkError&&r.push(n.networkError),r.map(function(n){return(0,o.s)(n)&&n.message||"Error message not found."}).join("\n")},f=function(n){function r(e){var o=e.graphQLErrors,i=e.protocolErrors,a=e.clientErrors,u=e.networkError,f=e.errorMessage,l=e.extraInfo,s=n.call(this,f)||this;return s.name="ApolloError",s.graphQLErrors=o||[],s.protocolErrors=i||[],s.clientErrors=a||[],s.networkError=u||null,s.message=f||c(s),s.extraInfo=l,s.cause=(0,t.ev)((0,t.ev)((0,t.ev)([u],o||[],!0),i||[],!0),a||[],!0).find(function(n){return!!n})||null,s.__proto__=r.prototype,s}return(0,t.ZT)(r,n),r}(Error)},75536:function(n,r,e){e.d(r,{K:function(){return c}});var t,o=e(2474),i=e(92511),a=e(92),u=i.aS?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function c(){(0,a.kG)("createContext"in(t||(t=e.t(o,2))),46);var n=o.createContext[u];return n||(Object.defineProperty(o.createContext,u,{value:n=o.createContext({}),enumerable:!1,writable:!1,configurable:!0}),n.displayName="ApolloContext"),n}},12471:function(n,r,e){e.d(r,{x:function(){return a}});var t=e(92),o=e(2474),i=e(75536);function a(n){var r=o.useContext((0,i.K)()),e=n||r.client;return(0,t.kG)(!!e,50),e}},88288:function(n,r,e){e.d(r,{L:function(){return c},s:function(){return u}});var t=e(3754),o=e(32997),i=new WeakSet;function a(n){!(n.size<=(n.max||-1))&&(i.has(n)||(i.add(n),setTimeout(function(){n.clean(),i.delete(n)},100)))}var u=function(n,r){var e=new t.k(n,r);return e.set=function(n,r){var e=t.k.prototype.set.call(this,n,r);return a(this),e},e},c=function(n,r){var e=new o.e(n,r);return e.set=function(n,r){var e=o.e.prototype.set.call(this,n,r);return a(this),e},e}},91568:function(n,r,e){e.d(r,{Kb:function(){return f},q4:function(){return c},su:function(){return u},zP:function(){return a}});var t=e(11735),o=e(71531),i={};function a(n,r){i[n]=r}var u=!1!==globalThis.__DEV__?function(){var n,r,e,a,u;if(!(!1!==globalThis.__DEV__))throw Error("only supported in development mode");return{limits:Object.fromEntries(Object.entries({parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4}).map(function(n){var r=n[0],e=n[1];return[r,o.Q[r]||e]})),sizes:(0,t.pi)({print:null===(n=i.print)||void 0===n?void 0:n.call(i),parser:null===(r=i.parser)||void 0===r?void 0:r.call(i),canonicalStringify:null===(e=i.canonicalStringify)||void 0===e?void 0:e.call(i),links:function n(r){var e;return r?(0,t.ev)((0,t.ev)([null===(e=null==r?void 0:r.getMemoryInternals)||void 0===e?void 0:e.call(r)],n(null==r?void 0:r.left),!0),n(null==r?void 0:r.right),!0).filter(d):[]}(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:v(this.queryManager.documentTransform)}},null===(u=(a=this.cache).getMemoryInternals)||void 0===u?void 0:u.call(a))}}:void 0,c=!1!==globalThis.__DEV__?function(){var n=this.config.fragments;return(0,t.pi)((0,t.pi)({},l.apply(this)),{addTypenameDocumentTransform:v(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:s(this.storeReader.executeSelectionSet),executeSubSelectedArray:s(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:s(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:s(null==n?void 0:n.findFragmentSpreads),lookup:s(null==n?void 0:n.lookup),transform:s(null==n?void 0:n.transform)}})}:void 0,f=!1!==globalThis.__DEV__?l:void 0;function l(){return{cache:{fragmentQueryDocuments:s(this.getFragmentDoc)}}}function s(n){return n&&"dirtyKey"in n?n.size:void 0}function d(n){return null!=n}function v(n){return(function n(r){return r?(0,t.ev)((0,t.ev)([s(null==r?void 0:r.performWork)],n(null==r?void 0:r.left),!0),n(null==r?void 0:r.right),!0).filter(d):[]})(n).map(function(n){return{cache:n}})}},71531:function(n,r,e){e.d(r,{Q:function(){return a}});var t=e(11735),o=e(92),i=Symbol.for("apollo.cacheSize"),a=(0,t.pi)({},o.CO[i])},91567:function(n,r,e){e.d(r,{O:function(){return o},k:function(){return t}});var t=Array.isArray;function o(n){return Array.isArray(n)&&n.length>0}},92511:function(n,r,e){e.d(r,{DN:function(){return c},JC:function(){return s},Nq:function(){return f},aS:function(){return u},mr:function(){return i},sy:function(){return a}});var t=e(92),o="ReactNative"==(0,t.wY)(function(){return navigator.product}),i="function"==typeof WeakMap&&!(o&&!global.HermesInternal),a="function"==typeof WeakSet,u="function"==typeof Symbol&&"function"==typeof Symbol.for,c=u&&Symbol.asyncIterator,f="function"==typeof(0,t.wY)(function(){return window.document.createElement}),l=(0,t.wY)(function(){return navigator.userAgent.indexOf("jsdom")>=0})||!1,s=(f||o)&&!l},40055:function(n,r,e){e.d(r,{o:function(){return t}});function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var e=Object.create(null);return n.forEach(function(n){n&&Object.keys(n).forEach(function(r){var t=n[r];void 0!==t&&(e[r]=t)})}),e}},31756:function(n,r,e){e.d(r,{X:function(){return o}});var t=new Map;function o(n){var r=t.get(n)||1;return t.set(n,r+1),"".concat(n,":").concat(r,":").concat(Math.random().toString(36).slice(2))}},72018:function(n,r,e){e.d(r,{J:function(){return o}});var t=e(81167);function o(n){if(!1!==globalThis.__DEV__){var r;(r=new Set([n])).forEach(function(n){(0,t.s)(n)&&function(n){if(!1!==globalThis.__DEV__&&!Object.isFrozen(n))try{Object.freeze(n)}catch(n){if(n instanceof TypeError)return null;throw n}return n}(n)===n&&Object.getOwnPropertyNames(n).forEach(function(e){(0,t.s)(n[e])&&r.add(n[e])})})}return n}},1135:function(n,r,e){e.d(r,{J:function(){return i}});var t=e(11735),o=e(40055);function i(n,r){return(0,o.o)(n,r,r.variables&&{variables:(0,o.o)((0,t.pi)((0,t.pi)({},n&&n.variables),r.variables))})}},81167:function(n,r,e){e.d(r,{s:function(){return t}});function t(n){return null!==n&&"object"==typeof n}},48142:function(n,r,e){e.d(r,{v:function(){return o}});var t=e(31756);function o(n,r){void 0===r&&(r=0);var e=(0,t.X)("stringifyForDisplay");return JSON.stringify(n,function(n,r){return void 0===r?e:r},r).split(JSON.stringify(e)).join("<undefined>")}},82658:function(n,r,e){var t=e(89791);r.Z=(0,t.w)(function(){return globalThis})||(0,t.w)(function(){return window})||(0,t.w)(function(){return self})||(0,t.w)(function(){return global})||(0,t.w)(function(){return t.w.constructor("return this")()})},92:function(n,r,e){e.d(r,{CO:function(){return i.Z},_K:function(){return t._K},kG:function(){return t.kG},wY:function(){return o.w}});var t=e(68876),o=e(89791),i=e(82658)},68876:function(n,r,e){e.d(r,{_K:function(){return f},kG:function(){return c}});var t=e(22884),o=e(42635),i=e(82658),a=e(48142);function u(n){return function(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if("number"==typeof r){var o=r;(r=d(o))||(r=v(o,e),e=[])}n.apply(void 0,[r].concat(e))}}var c=Object.assign(function(n,r){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];n||(0,t.kG)(n,d(r,e)||v(r,e))},{debug:u(t.kG.debug),log:u(t.kG.log),warn:u(t.kG.warn),error:u(t.kG.error)});function f(n){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return new t.ej(d(n,r)||v(n,r))}var l=Symbol.for("ApolloErrorMessageHandler_"+o.i);function s(n){if("string"==typeof n)return n;try{return(0,a.v)(n,2).slice(0,1e3)}catch(n){return"<non-serializable>"}}function d(n,r){if(void 0===r&&(r=[]),n)return i.Z[l]&&i.Z[l](n,r.map(s))}function v(n,r){if(void 0===r&&(r=[]),n)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:o.i,message:n,args:r.map(s)})))}},89791:function(n,r,e){e.d(r,{w:function(){return t}});function t(n){try{return n()}catch(n){}}},42635:function(n,r,e){e.d(r,{i:function(){return t}});var t="3.11.5"}}]);