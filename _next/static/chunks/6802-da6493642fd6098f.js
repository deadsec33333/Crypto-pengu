"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6802],{42309:function(t,e,r){r.d(e,{Z:function(){return p}});var i=r(11735),o=r(92),s=r(34739),n=r(47820),a=r(47737),u=r(52120),l=r(69159),c=r(47543),h=r(96530),f=r(98290),v=r(78771),p=function(){function t(t){var e=t.cache,r=t.client,i=t.resolvers,o=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=e,r&&(this.client=r),i&&this.addResolvers(i),o&&this.setFragmentMatcher(o)}return t.prototype.addResolvers=function(t){var e=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(t){e.resolvers=(0,a.Ee)(e.resolvers,t)}):this.resolvers=(0,a.Ee)(this.resolvers,t)},t.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},t.prototype.getResolvers=function(){return this.resolvers||{}},t.prototype.runResolvers=function(t){return(0,i.mG)(this,arguments,void 0,function(t){var e=t.document,r=t.remoteResult,o=t.context,s=t.variables,n=t.onlyRunForcedResolvers,a=void 0!==n&&n;return(0,i.Jh)(this,function(t){return e?[2,this.resolveDocument(e,r.data,o,s,this.fragmentMatcher,a).then(function(t){return(0,i.pi)((0,i.pi)({},r),{data:t.result})})]:[2,r]})})},t.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},t.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},t.prototype.clientQuery=function(t){return(0,u.FS)(["client"],t)&&this.resolvers?t:null},t.prototype.serverQuery=function(t){return(0,l.ob)(t)},t.prototype.prepareContext=function(t){var e=this.cache;return(0,i.pi)((0,i.pi)({},t),{cache:e,getCacheKey:function(t){return e.identify(t)}})},t.prototype.addExportedVariables=function(t){return(0,i.mG)(this,arguments,void 0,function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),(0,i.Jh)(this,function(o){return t?[2,this.resolveDocument(t,this.buildRootValueFromCache(t,e)||{},this.prepareContext(r),e).then(function(t){return(0,i.pi)((0,i.pi)({},e),t.exportedVariables)})]:[2,(0,i.pi)({},e)]})})},t.prototype.shouldForceResolvers=function(t){var e=!1;return(0,s.Vn)(t,{Directive:{enter:function(t){if("client"===t.name.value&&t.arguments&&(e=t.arguments.some(function(t){return"always"===t.name.value&&"BooleanValue"===t.value.kind&&!0===t.value.value})))return s.$_}}}),e},t.prototype.buildRootValueFromCache=function(t,e){return this.cache.diff({query:(0,l.aL)(t),variables:e,returnPartialData:!0,optimistic:!1}).result},t.prototype.resolveDocument=function(t,e){return(0,i.mG)(this,arguments,void 0,function(t,e,r,o,s,n){var a,u,l,f,v,p,d,y,m,b;return void 0===r&&(r={}),void 0===o&&(o={}),void 0===s&&(s=function(){return!0}),void 0===n&&(n=!1),(0,i.Jh)(this,function(g){return a=(0,c.p$)(t),u=(0,c.kU)(t),l=(0,h.F)(u),f=this.collectSelectionsToResolve(a,l),p=(v=a.operation)?v.charAt(0).toUpperCase()+v.slice(1):"Query",d=this,y=d.cache,m=d.client,b={fragmentMap:l,context:(0,i.pi)((0,i.pi)({},r),{cache:y,client:m}),variables:o,fragmentMatcher:s,defaultOperationType:p,exportedVariables:{},selectionsToResolve:f,onlyRunForcedResolvers:n},[2,this.resolveSelectionSet(a.selectionSet,!1,e,b).then(function(t){return{result:t,exportedVariables:b.exportedVariables}})]})})},t.prototype.resolveSelectionSet=function(t,e,r,s){return(0,i.mG)(this,void 0,void 0,function(){var n,l,c,h,v,p=this;return(0,i.Jh)(this,function(d){return n=s.fragmentMap,l=s.context,c=s.variables,h=[r],v=function(t){return(0,i.mG)(p,void 0,void 0,function(){var a,v;return(0,i.Jh)(this,function(i){return(e||s.selectionsToResolve.has(t))&&(0,u.LZ)(t,c)?(0,f.My)(t)?[2,this.resolveField(t,e,r,s).then(function(e){var r;void 0!==e&&h.push(((r={})[(0,f.u2)(t)]=e,r))})]:((0,f.Ao)(t)?a=t:(a=n[t.name.value],(0,o.kG)(a,18,t.name.value)),a&&a.typeCondition&&(v=a.typeCondition.name.value,s.fragmentMatcher(r,v,l)))?[2,this.resolveSelectionSet(a.selectionSet,e,r,s).then(function(t){h.push(t)})]:[2]:[2]})})},[2,Promise.all(t.selections.map(v)).then(function(){return(0,a.bw)(h)})]})})},t.prototype.resolveField=function(t,e,r,o){return(0,i.mG)(this,void 0,void 0,function(){var s,n,a,u,l,c,h,p,d,y=this;return(0,i.Jh)(this,function(i){return r?(s=o.variables,u=(n=t.name.value)!==(a=(0,f.u2)(t)),c=Promise.resolve(l=r[a]||r[n]),(!o.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(h=r.__typename||o.defaultOperationType,(p=this.resolvers&&this.resolvers[h])&&(d=p[u?n:a])&&(c=Promise.resolve(v.ab.withValue(this.cache,d,[r,(0,f.NC)(t,s),o.context,{field:t,fragmentMap:o.fragmentMap}])))),[2,c.then(function(r){if(void 0===r&&(r=l),t.directives&&t.directives.forEach(function(t){"export"===t.name.value&&t.arguments&&t.arguments.forEach(function(t){"as"===t.name.value&&"StringValue"===t.value.kind&&(o.exportedVariables[t.value.value]=r)})}),!t.selectionSet||null==r)return r;var i,s,n=null!==(s=null===(i=t.directives)||void 0===i?void 0:i.some(function(t){return"client"===t.name.value}))&&void 0!==s&&s;return Array.isArray(r)?y.resolveSubSelectedArray(t,e||n,r,o):t.selectionSet?y.resolveSelectionSet(t.selectionSet,e||n,r,o):void 0})]):[2,null]})})},t.prototype.resolveSubSelectedArray=function(t,e,r,i){var o=this;return Promise.all(r.map(function(r){return null===r?null:Array.isArray(r)?o.resolveSubSelectedArray(t,e,r,i):t.selectionSet?o.resolveSelectionSet(t.selectionSet,e,r,i):void 0}))},t.prototype.collectSelectionsToResolve=function(t,e){var r=function(t){return!Array.isArray(t)},i=this.selectionsToResolveCache;return function t(a){if(!i.has(a)){var u=new Set;i.set(a,u),(0,s.Vn)(a,{Directive:function(t,e,i,o,s){"client"===t.name.value&&s.forEach(function(t){r(t)&&(0,n.pO)(t)&&u.add(t)})},FragmentSpread:function(i,s,a,l,c){var h=e[i.name.value];(0,o.kG)(h,19,i.name.value);var f=t(h);f.size>0&&(c.forEach(function(t){r(t)&&(0,n.pO)(t)&&u.add(t)}),u.add(i),f.forEach(function(t){u.add(t)}))}})}return i.get(a)}(t)},t}()},63465:function(t,e,r){r.d(e,{c:function(){return y},e:function(){return d}});var i=r(11735),o=r(34511),s=r(47737),n=r(10244),a=r(20628),u=r(92511),l=r(91567),c=r(48416),h=r(43152),f=new(u.mr?WeakMap:Map);function v(t,e){var r=t[e];"function"==typeof r&&(t[e]=function(){return f.set(t,(f.get(t)+1)%1e15),r.apply(this,arguments)})}function p(t){t.notifyTimeout&&(clearTimeout(t.notifyTimeout),t.notifyTimeout=void 0)}var d=function(){function t(t,e){void 0===e&&(e=t.generateQueryId()),this.queryId=e,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=t.cache;f.has(r)||(f.set(r,0),v(r,"evict"),v(r,"modify"),v(r,"reset"))}return t.prototype.init=function(t){var e=t.networkStatus||h.Ie.loading;return this.variables&&this.networkStatus!==h.Ie.loading&&!(0,o.D)(this.variables,t.variables)&&(e=h.Ie.setVariables),(0,o.D)(t.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:e}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},t.prototype.reset=function(){p(this),this.dirty=!1},t.prototype.resetDiff=function(){this.lastDiff=void 0},t.prototype.getDiff=function(){var t=this.getDiffOptions();if(this.lastDiff&&(0,o.D)(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var e=this.observableQuery;if(e&&"no-cache"===e.options.fetchPolicy)return{complete:!1};var r=this.cache.diff(t);return this.updateLastDiff(r,t),r},t.prototype.updateLastDiff=function(t,e){this.lastDiff=t?{diff:t,options:e||this.getDiffOptions()}:void 0},t.prototype.getDiffOptions=function(t){var e;return void 0===t&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:null===(e=this.observableQuery)||void 0===e?void 0:e.options.canonizeResults}},t.prototype.setDiff=function(t){var e,r=this,i=this.lastDiff&&this.lastDiff.diff;!(t&&!t.complete&&(null===(e=this.observableQuery)||void 0===e?void 0:e.getLastError()))&&(this.updateLastDiff(t),this.dirty||(0,o.D)(i&&i.result,t&&t.result)||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return r.notify()},0))))},t.prototype.setObservableQuery=function(t){var e=this;t!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=t,t?(t.queryInfo=this,this.listeners.add(this.oqListener=function(){e.getDiff().fromOptimisticTransaction?t.observe():(0,a.vj)(t)})):delete this.oqListener)},t.prototype.notify=function(){var t=this;p(this),this.shouldNotify()&&this.listeners.forEach(function(e){return e(t)}),this.dirty=!1},t.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if((0,h.Oj)(this.networkStatus)&&this.observableQuery){var t=this.observableQuery.options.fetchPolicy;if("cache-only"!==t&&"cache-and-network"!==t)return!1}return!0},t.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=t.prototype.cancel;var e=this.observableQuery;e&&e.stopPolling()}},t.prototype.cancel=function(){},t.prototype.updateWatch=function(t){var e=this;void 0===t&&(t=this.variables);var r=this.observableQuery;if(!r||"no-cache"!==r.options.fetchPolicy){var s=(0,i.pi)((0,i.pi)({},this.getDiffOptions(t)),{watcher:this,callback:function(t){return e.setDiff(t)}});this.lastWatch&&(0,o.D)(s,this.lastWatch)||(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=s))}},t.prototype.resetLastWrite=function(){this.lastWrite=void 0},t.prototype.shouldWrite=function(t,e){var r=this.lastWrite;return!(r&&r.dmCount===f.get(this.cache)&&(0,o.D)(e,r.variables)&&(0,o.D)(t.data,r.result.data))},t.prototype.markResult=function(t,e,r,i){var a=this,u=new s.w0,c=(0,l.O)(t.errors)?t.errors.slice(0):[];if(this.reset(),"incremental"in t&&(0,l.O)(t.incremental)){var h=(0,n.mT)(this.getDiff().result,t);t.data=h}else if("hasNext"in t&&t.hasNext){var v=this.getDiff();t.data=u.merge(v.result,t.data)}this.graphQLErrors=c,"no-cache"===r.fetchPolicy?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(r.variables)):0!==i&&(y(t,r.errorPolicy)?this.cache.performTransaction(function(s){if(a.shouldWrite(t,r.variables))s.writeQuery({query:e,data:t.data,variables:r.variables,overwrite:1===i}),a.lastWrite={result:t,variables:r.variables,dmCount:f.get(a.cache)};else if(a.lastDiff&&a.lastDiff.diff.complete){t.data=a.lastDiff.diff.result;return}var n=a.getDiffOptions(r.variables),u=s.diff(n);!a.stopped&&(0,o.D)(a.variables,r.variables)&&a.updateWatch(r.variables),a.updateLastDiff(u,n),u.complete&&(t.data=u.result)}):this.lastWrite=void 0)},t.prototype.markReady=function(){return this.networkError=null,this.networkStatus=h.Ie.ready},t.prototype.markError=function(t){return this.networkStatus=h.Ie.error,this.lastWrite=void 0,this.reset(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},t}();function y(t,e){void 0===e&&(e="none");var r="ignore"===e||"all"===e,i=!(0,c.d)(t);return!i&&r&&t.data&&(i=!0),i}}}]);