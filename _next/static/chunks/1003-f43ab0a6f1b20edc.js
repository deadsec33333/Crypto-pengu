"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1003],{70382:function(t,e,i){i.d(e,{qZ:function(){return d},jo:function(){return h},fA:function(){return f},k$:function(){return l},JO:function(){return a}});var s=i(11735),r=i(34511);function n(t){var e=Promise.resolve(t);return e.status="fulfilled",e.value=t,e}var o=i(68876),u=Symbol(),c=Symbol();function a(t){var e,i=((e={toPromise:function(){var t;return("fulfilled"===(t=i[u]).promise.status?t.promise:i[c]).then(function(){return i})}})[u]=t,e[c]=t.promise,e);return i}function h(t){(0,o.kG)(!t||u in t,61)}function f(t){return t[u]}function l(t,e){t[c]=e}var p=["canonizeResults","context","errorPolicy","fetchPolicy","refetchWritePolicy","returnPartialData"],d=function(){function t(t,e){var i=this;this.key={},this.listeners=new Set,this.references=0,this.softReferences=0,this.handleNext=this.handleNext.bind(this),this.handleError=this.handleError.bind(this),this.dispose=this.dispose.bind(this),this.observable=t,e.onDispose&&(this.onDispose=e.onDispose),this.setResult(),this.subscribeToQuery();var s=function(){var t;i.references||(i.autoDisposeTimeoutId=setTimeout(i.dispose,null!==(t=e.autoDisposeTimeoutMs)&&void 0!==t?t:3e4))};this.promise.then(s,s)}return Object.defineProperty(t.prototype,"disposed",{get:function(){return this.subscription.closed},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"watchQueryOptions",{get:function(){return this.observable.options},enumerable:!1,configurable:!0}),t.prototype.reinitialize=function(){var t=this.observable,e=this.watchQueryOptions.fetchPolicy,i="no-cache"===e||"standby"===e;try{if(i?t.silentSetOptions({fetchPolicy:"standby"}):(t.resetLastResults(),t.silentSetOptions({fetchPolicy:"cache-first"})),this.subscribeToQuery(),i)return;t.resetDiff(),this.setResult()}finally{t.silentSetOptions({fetchPolicy:e})}},t.prototype.retain=function(){var t=this;this.references++,clearTimeout(this.autoDisposeTimeoutId);var e=!1;return function(){e||(e=!0,t.references--,setTimeout(function(){t.references||t.dispose()}))}},t.prototype.softRetain=function(){var t=this;this.softReferences++;var e=!1;return function(){e||(e=!0,t.softReferences--,setTimeout(function(){t.softReferences||t.references||t.dispose()}))}},t.prototype.didChangeOptions=function(t){var e=this;return p.some(function(i){return i in t&&!(0,r.D)(e.watchQueryOptions[i],t[i])})},t.prototype.applyOptions=function(t){var e=this.watchQueryOptions,i=e.fetchPolicy,r=e.canonizeResults;return"standby"===i&&i!==t.fetchPolicy?this.initiateFetch(this.observable.reobserve(t)):(this.observable.silentSetOptions(t),r!==t.canonizeResults&&(this.result=(0,s.pi)((0,s.pi)({},this.result),this.observable.getCurrentResult()),this.promise=n(this.result))),this.promise},t.prototype.listen=function(t){var e=this;return this.listeners.add(t),function(){e.listeners.delete(t)}},t.prototype.refetch=function(t){return this.initiateFetch(this.observable.refetch(t))},t.prototype.fetchMore=function(t){return this.initiateFetch(this.observable.fetchMore(t))},t.prototype.dispose=function(){this.subscription.unsubscribe(),this.onDispose()},t.prototype.onDispose=function(){},t.prototype.handleNext=function(t){var e;if("pending"===this.promise.status)void 0===t.data&&(t.data=this.result.data),this.result=t,null===(e=this.resolve)||void 0===e||e.call(this,t);else{if(t.data===this.result.data&&t.networkStatus===this.result.networkStatus)return;void 0===t.data&&(t.data=this.result.data),this.result=t,this.promise=n(t),this.deliver(this.promise)}},t.prototype.handleError=function(t){var e,i;(this.subscription.unsubscribe(),this.subscription=this.observable.resubscribeAfterError(this.handleNext,this.handleError),"pending"===this.promise.status)?null===(e=this.reject)||void 0===e||e.call(this,t):(this.promise=((i=Promise.reject(t)).catch(function(){}),i.status="rejected",i.reason=t,i),this.deliver(this.promise))},t.prototype.deliver=function(t){this.listeners.forEach(function(e){return e(t)})},t.prototype.initiateFetch=function(t){var e=this;return this.promise=this.createPendingPromise(),this.promise.catch(function(){}),t.then(function(){setTimeout(function(){var t;"pending"===e.promise.status&&(e.result=e.observable.getCurrentResult(),null===(t=e.resolve)||void 0===t||t.call(e,e.result))})}).catch(function(){}),t},t.prototype.subscribeToQuery=function(){var t=this;this.subscription=this.observable.filter(function(e){return!(0,r.D)(e.data,{})&&!(0,r.D)(e,t.result)}).subscribe(this.handleNext,this.handleError)},t.prototype.setResult=function(){var t=this.observable.getCurrentResult(!1);(0,r.D)(t,this.result)||(this.result=t,this.promise=t.data&&(!t.partial||this.watchQueryOptions.returnPartialData)?n(t):this.createPendingPromise())},t.prototype.createPendingPromise=function(){var t,e=this;return"status"in(t=new Promise(function(t,i){e.resolve=t,e.reject=i}))||(t.status="pending",t.then(function(e){"pending"===t.status&&(t.status="fulfilled",t.value=e)},function(e){"pending"===t.status&&(t.status="rejected",t.reason=e)})),t},t}()},40094:function(t,e,i){i.d(e,{Y:function(){return c}});var s=i(47637),r=i(92511),n=i(70382),o=function(){function t(t){void 0===t&&(t=Object.create(null)),this.queryRefs=new s.B(r.mr),this.options=t}return t.prototype.getQueryRef=function(t,e){var i=this.queryRefs.lookupArray(t);return i.current||(i.current=new n.qZ(e(),{autoDisposeTimeoutMs:this.options.autoDisposeTimeoutMs,onDispose:function(){delete i.current}})),i.current},t.prototype.add=function(t,e){this.queryRefs.lookupArray(t).current=e},t}(),u=Symbol.for("apollo.suspenseCache");function c(t){var e;return t[u]||(t[u]=new o(null===(e=t.defaultOptions.react)||void 0===e?void 0:e.suspense)),t[u]}},79045:function(t,e,i){i.d(e,{B:function(){return u}});var s,r=i(88288),n=i(71531),o=i(91568),u=Object.assign(function(t){return JSON.stringify(t,c)},{reset:function(){s=new r.L(n.Q.canonicalStringify||1e3)}});function c(t,e){if(e&&"object"==typeof e){var i=Object.getPrototypeOf(e);if(i===Object.prototype||null===i){var r=Object.keys(e);if(r.every(a))return e;var n=JSON.stringify(r),o=s.get(n);if(!o){r.sort();var u=JSON.stringify(r);o=s.get(u)||r,s.set(n,o),s.set(u,o)}var c=Object.create(i);return o.forEach(function(t){c[t]=e[t]}),c}}return e}function a(t,e,i){return 0===e||i[e-1]<=t}!1!==globalThis.__DEV__&&(0,o.zP)("canonicalStringify",function(){return s.size}),u.reset()},71710:function(t,e,i){i.d(e,{S:function(){return c}});var s,r=i(50834),n=i(88288),o=i(71531),u=i(91568),c=Object.assign(function(t){var e=s.get(t);return e||(e=(0,r.S)(t),s.set(t,e)),e},{reset:function(){s=new n.s(o.Q.print||2e3)}});c.reset(),!1!==globalThis.__DEV__&&(0,u.zP)("print",function(){return s?s.size:0})}}]);