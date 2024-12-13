"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3674],{86004:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{createPrefetchCacheEntryForInitialLoad:function(){return o},getOrCreatePrefetchCacheEntry:function(){return c},prunePrefetchCache:function(){return d}});let n=r(53174),u=r(41283),l=r(51507),a=r(59218);function f(e,t){let r=(0,n.createHrefFromUrl)(e,!1);return t?t+"%"+r:r}function c(e){let t,{url:r,nextUrl:n,tree:u,buildId:a,prefetchCache:c,kind:o}=e,d=f(r,n),s=c.get(d);if(s)t=s;else{let e=f(r),n=c.get(e);n&&(t=n)}return t?(t.status=p(t),t.kind!==l.PrefetchKind.FULL&&o===l.PrefetchKind.FULL)?i({tree:u,url:r,buildId:a,nextUrl:n,prefetchCache:c,kind:null!=o?o:l.PrefetchKind.TEMPORARY}):(o&&t.kind===l.PrefetchKind.TEMPORARY&&(t.kind=o),t):i({tree:u,url:r,buildId:a,nextUrl:n,prefetchCache:c,kind:o||l.PrefetchKind.TEMPORARY})}function o(e){let{nextUrl:t,tree:r,prefetchCache:n,url:u,kind:a,data:c}=e,[,,,o]=c,i=o?f(u,t):f(u),d={treeAtTimeOfPrefetch:r,data:Promise.resolve(c),kind:a,prefetchTime:Date.now(),lastUsedTime:Date.now(),key:i,status:l.PrefetchCacheEntryStatus.fresh};return n.set(i,d),d}function i(e){let{url:t,kind:r,tree:n,nextUrl:c,buildId:o,prefetchCache:i}=e,d=f(t),s=a.prefetchQueue.enqueue(()=>(0,u.fetchServerResponse)(t,n,c,o,r).then(e=>{let[,,,r]=e;return r&&function(e){let{url:t,nextUrl:r,prefetchCache:n}=e,u=f(t),l=n.get(u);if(!l)return;let a=f(t,r);n.set(a,l),n.delete(u)}({url:t,nextUrl:c,prefetchCache:i}),e})),h={treeAtTimeOfPrefetch:n,data:s,kind:r,prefetchTime:Date.now(),lastUsedTime:null,key:d,status:l.PrefetchCacheEntryStatus.fresh};return i.set(d,h),h}function d(e){for(let[t,r]of e)p(r)===l.PrefetchCacheEntryStatus.expired&&e.delete(t)}let s=1e3*Number("30"),h=1e3*Number("300");function p(e){let{kind:t,prefetchTime:r,lastUsedTime:n}=e;return Date.now()<(null!=n?n:r)+s?n?l.PrefetchCacheEntryStatus.reusable:l.PrefetchCacheEntryStatus.fresh:"auto"===t&&Date.now()<r+h?l.PrefetchCacheEntryStatus.stale:"full"===t&&Date.now()<r+h?l.PrefetchCacheEntryStatus.reusable:l.PrefetchCacheEntryStatus.expired}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},51129:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fastRefreshReducer",{enumerable:!0,get:function(){return n}}),r(41283),r(53174),r(69684),r(10139),r(51294),r(36416),r(39607),r(95751),r(40774),r(35914);let n=function(e,t){return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30315:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"findHeadInCache",{enumerable:!0,get:function(){return u}});let n=r(81784);function u(e,t){return function e(t,r,u){if(0===Object.keys(r).length)return[t,u];for(let l in r){let[a,f]=r[l],c=t.parallelRoutes.get(l);if(!c)continue;let o=(0,n.createRouterCacheKey)(a),i=c.get(o);if(!i)continue;let d=e(i,f,u+"/"+o);if(d)return d}return null}(e,t,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},44640:function(e,t){function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},35914:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasInterceptionRouteInCurrentTree",{enumerable:!0,get:function(){return function e(t){let[r,u]=t;if(Array.isArray(r)&&("di"===r[2]||"ci"===r[2])||"string"==typeof r&&(0,n.isInterceptionRouteAppPath)(r))return!0;if(u){for(let t in u)if(e(u[t]))return!0}return!1}}});let n=r(82269);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},51294:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleExternalUrl:function(){return b},navigateReducer:function(){return _}}),r(41283);let n=r(53174),u=r(9863),l=r(69684),a=r(54740),f=r(10139),c=r(51507),o=r(36416),i=r(39607),d=r(59218),s=r(95751),h=r(8e4);r(93060);let p=r(86004),y=r(99559);function b(e,t,r,n){return t.mpaNavigation=!0,t.canonicalUrl=r,t.pendingPush=n,t.scrollableSegments=void 0,(0,o.handleMutable)(e,t)}function P(e){let t=[],[r,n]=e;if(0===Object.keys(n).length)return[[r]];for(let[e,u]of Object.entries(n))for(let n of P(u))""===r?t.push([e,...n]):t.push([r,e,...n]);return t}let _=function(e,t){let{url:r,isExternalUrl:_,navigateType:g,shouldScroll:O}=t,j={},{hash:m}=r,C=(0,n.createHrefFromUrl)(r),v="push"===g;if((0,p.prunePrefetchCache)(e.prefetchCache),j.preserveCustomHistoryState=!1,_)return b(e,j,r.toString(),v);let M=(0,p.getOrCreatePrefetchCacheEntry)({url:r,nextUrl:e.nextUrl,tree:e.tree,buildId:e.buildId,prefetchCache:e.prefetchCache}),{treeAtTimeOfPrefetch:E,data:R}=M;return d.prefetchQueue.bump(R),R.then(t=>{let[r,d]=t,p=!1;if(M.lastUsedTime||(M.lastUsedTime=Date.now(),p=!0),"string"==typeof r)return b(e,j,r,v);if(document.getElementById("__next-page-redirect"))return b(e,j,C,v);let _=e.tree,g=e.cache,R=[];for(let t of r){let r=t.slice(0,-4),n=t.slice(-3)[0],o=["",...r],d=(0,l.applyRouterStatePatchToTree)(o,_,n,C);if(null===d&&(d=(0,l.applyRouterStatePatchToTree)(o,E,n,C)),null!==d){if((0,f.isNavigatingToNewRootLayout)(_,d))return b(e,j,C,v);let l=(0,s.createEmptyCacheNode)(),O=!1;for(let e of(M.status!==c.PrefetchCacheEntryStatus.stale||p?O=(0,i.applyFlightData)(g,l,t,M):(O=function(e,t,r,n){let u=!1;for(let l of(e.rsc=t.rsc,e.prefetchRsc=t.prefetchRsc,e.loading=t.loading,e.parallelRoutes=new Map(t.parallelRoutes),P(n).map(e=>[...r,...e])))(0,y.clearCacheNodeDataForSegmentPath)(e,t,l),u=!0;return u}(l,g,r,n),M.lastUsedTime=Date.now()),(0,a.shouldHardNavigate)(o,_)?(l.rsc=g.rsc,l.prefetchRsc=g.prefetchRsc,(0,u.invalidateCacheBelowFlightSegmentPath)(l,g,r),j.cache=l):O&&(j.cache=l,g=l),_=d,P(n))){let t=[...r,...e];t[t.length-1]!==h.DEFAULT_SEGMENT_KEY&&R.push(t)}}}return j.patchedTree=_,j.canonicalUrl=d?(0,n.createHrefFromUrl)(d):C,j.pendingPush=v,j.scrollableSegments=R,j.hashFragment=m,j.shouldScroll=O,(0,o.handleMutable)(e,j)},()=>e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},59218:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{prefetchQueue:function(){return a},prefetchReducer:function(){return f}});let n=r(77325),u=r(43858),l=r(86004),a=new u.PromiseQueue(5);function f(e,t){(0,l.prunePrefetchCache)(e.prefetchCache);let{url:r}=t;return r.searchParams.delete(n.NEXT_RSC_UNION_QUERY),(0,l.getOrCreatePrefetchCacheEntry)({url:r,nextUrl:e.nextUrl,prefetchCache:e.prefetchCache,kind:t.kind,tree:e.tree,buildId:e.buildId}),e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);