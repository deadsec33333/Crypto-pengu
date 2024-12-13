"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3487],{49547:function(t,n,e){var r=e(2265).createContext({});n.Z=r},19887:function(t,n,e){e.d(n,{D9:function(){return y},GO:function(){return g},H6:function(){return k}});var r=e(23771),u=e(24829),o=e(96544),i=e(48683),c=e(2265),l=e(59133),f=o.Z.LEFT,a=o.Z.RIGHT,s=o.Z.UP,v=o.Z.DOWN,d=o.Z.ENTER,p=o.Z.ESC,Z=o.Z.HOME,m=o.Z.END,b=[s,v,f,a];function g(t,n){return(0,u.tS)(t,!0).filter(function(t){return n.has(t)})}function h(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!t)return null;var u=g(t,n),o=u.length,i=u.findIndex(function(t){return e===t});return r<0?-1===i?i=o-1:i-=1:r>0&&(i+=1),u[i=(i+o)%o]}var y=function(t,n){var e=new Set,r=new Map,u=new Map;return t.forEach(function(t){var o=document.querySelector("[data-menu-id='".concat((0,l.E4)(n,t),"']"));o&&(e.add(o),u.set(o,t),r.set(t,o))}),{elements:e,key2element:r,element2key:u}};function k(t,n,e,u,o,l,k,w,E,S){var R=c.useRef(),C=c.useRef();C.current=n;var P=function(){i.Z.cancel(R.current)};return c.useEffect(function(){return function(){P()}},[]),function(c){var T=c.which;if([].concat(b,[d,p,Z,m]).includes(T)){var _=l(),I=y(_,u),L=I,M=L.elements,A=L.key2element,K=L.element2key,N=function(t,n){for(var e=t||document.activeElement;e;){if(n.has(e))return e;e=e.parentElement}return null}(A.get(n),M),j=K.get(N),x=function(t,n,e,u){var o,i="prev",c="next",l="children",Z="parent";if("inline"===t&&u===d)return{inlineTrigger:!0};var m=(0,r.Z)((0,r.Z)({},s,i),v,c),b=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},f,e?c:i),a,e?i:c),v,l),d,l),g=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},s,i),v,c),d,l),p,Z),f,e?l:Z),a,e?Z:l);switch(null===(o=({inline:m,horizontal:b,vertical:g,inlineSub:m,horizontalSub:g,verticalSub:g})["".concat(t).concat(n?"":"Sub")])||void 0===o?void 0:o[u]){case i:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case Z:return{offset:-1,sibling:!1};case l:return{offset:1,sibling:!1};default:return null}}(t,1===k(j,!0).length,e,T);if(!x&&T!==Z&&T!==m)return;(b.includes(T)||[Z,m].includes(T))&&c.preventDefault();var B=function(t){if(t){var n=t,e=t.querySelector("a");null!=e&&e.getAttribute("href")&&(n=e);var r=K.get(t);w(r),P(),R.current=(0,i.Z)(function(){C.current===r&&n.focus()})}};if([Z,m].includes(T)||x.sibling||!N){var D,O=g(D=N&&"inline"!==t?function(t){for(var n=t;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(N):o.current,M);B(T===Z?O[0]:T===m?O[O.length-1]:h(D,M,N,x.offset))}else if(x.inlineTrigger)E(j);else if(x.offset>0)E(j,!0),P(),R.current=(0,i.Z)(function(){I=y(_,u);var t=N.getAttribute("aria-controls");B(h(document.getElementById(t),I.elements))},5);else if(x.offset<0){var W=k(j,!0),H=W[W.length-2],X=A.get(H);E(H,!1),B(X)}}null==S||S(c)}}},96099:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(2265),u=e(27896);function o(t,n,e,o){var i=r.useContext(u.p),c=i.activeKey,l=i.onActive,f=i.onInactive,a={active:c===t};return n||(a.onMouseEnter=function(n){null==e||e({key:t,domEvent:n}),l(t)},a.onMouseLeave=function(n){null==o||o({key:t,domEvent:n}),f(t)}),a}},81540:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(2265),u=e(27896);function o(t){var n=r.useContext(u.p),e=n.mode,o=n.rtl,i=n.inlineIndent;return"inline"!==e?null:o?{paddingRight:t*i}:{paddingLeft:t*i}}},5605:function(t,n,e){e.d(n,{X:function(){return l},Z:function(){return f}});var r=e(84366),u=e(45673),o=e(2265);e(51397);var i="__RC_UTIL_PATH_SPLIT__",c=function(t){return t.join(i)},l="rc-menu-more";function f(){var t=o.useState({}),n=(0,u.Z)(t,2)[1],e=(0,o.useRef)(new Map),f=(0,o.useRef)(new Map),a=o.useState([]),s=(0,u.Z)(a,2),v=s[0],d=s[1],p=(0,o.useRef)(0),Z=(0,o.useRef)(!1),m=function(){Z.current||n({})},b=(0,o.useCallback)(function(t,n){var r,u=c(n);f.current.set(u,t),e.current.set(t,u),p.current+=1;var o=p.current;r=function(){o===p.current&&m()},Promise.resolve().then(r)},[]),g=(0,o.useCallback)(function(t,n){var r=c(n);f.current.delete(r),e.current.delete(t)},[]),h=(0,o.useCallback)(function(t){d(t)},[]),y=(0,o.useCallback)(function(t,n){var r=(e.current.get(t)||"").split(i);return n&&v.includes(r[0])&&r.unshift(l),r},[v]),k=(0,o.useCallback)(function(t,n){return t.some(function(t){return y(t,!0).includes(n)})},[y]),w=(0,o.useCallback)(function(t){var n="".concat(e.current.get(t)).concat(i),u=new Set;return(0,r.Z)(f.current.keys()).forEach(function(t){t.startsWith(n)&&u.add(f.current.get(t))}),u},[]);return o.useEffect(function(){return function(){Z.current=!0}},[]),{registerPath:b,unregisterPath:g,refreshOverflowKeys:h,isSubPathKey:k,getKeyPath:y,getKeys:function(){var t=(0,r.Z)(e.current.keys());return v.length&&t.push(l),t},getSubPathKeys:w}}},80123:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(2265);function u(t){var n=r.useRef(t);n.current=t;var e=r.useCallback(function(){for(var t,e=arguments.length,r=Array(e),u=0;u<e;u++)r[u]=arguments[u];return null===(t=n.current)||void 0===t?void 0:t.call.apply(t,[n].concat(r))},[]);return t?e:void 0}},84342:function(t,n,e){e.d(n,{Z:function(){return l}});var r=e(45673),u=e(2265),o=e(68506),i=Math.random().toFixed(5).toString().slice(2),c=0;function l(t){var n=(0,o.Z)(t,{value:t}),e=(0,r.Z)(n,2),l=e[0],f=e[1];return u.useEffect(function(){c+=1;var t="".concat(i,"-").concat(c);f("rc-menu-uuid-".concat(t))},[]),l}},41127:function(t,n,e){e.d(n,{BW:function(){return i.Z},Wd:function(){return o.Z},Xl:function(){return c.Xl},ck:function(){return u.Z},iz:function(){return l.Z},sN:function(){return u.Z}});var r=e(36117),u=e(17517),o=e(83079),i=e(29209),c=e(48966),l=e(72700),f=r.Z;f.Item=u.Z,f.SubMenu=o.Z,f.ItemGroup=i.Z,f.Divider=l.Z,n.ZP=f},95138:function(t,n,e){e.d(n,{Ct:function(){return u},lU:function(){return o}});var r={adjustX:1,adjustY:1},u={topLeft:{points:["bl","tl"],overflow:r},topRight:{points:["br","tr"],overflow:r},bottomLeft:{points:["tl","bl"],overflow:r},bottomRight:{points:["tr","br"],overflow:r},leftTop:{points:["tr","tl"],overflow:r},leftBottom:{points:["br","bl"],overflow:r},rightTop:{points:["tl","tr"],overflow:r},rightBottom:{points:["bl","br"],overflow:r}},o={topLeft:{points:["bl","tl"],overflow:r},topRight:{points:["br","tr"],overflow:r},bottomLeft:{points:["tl","bl"],overflow:r},bottomRight:{points:["tr","br"],overflow:r},rightTop:{points:["tr","tl"],overflow:r},rightBottom:{points:["br","bl"],overflow:r},leftTop:{points:["tl","tr"],overflow:r},leftBottom:{points:["bl","br"],overflow:r}}},6824:function(t,n,e){e.d(n,{A:function(){return i}});var r=e(84366),u=e(93059),o=e(2265);function i(t,n){return(0,u.Z)(t).map(function(t,e){if(o.isValidElement(t)){var u,i,c=t.key,l=null!==(u=null===(i=t.props)||void 0===i?void 0:i.eventKey)&&void 0!==u?u:c;null==l&&(l="tmp_key-".concat([].concat((0,r.Z)(n),[e]).join("-")));var f={key:l,eventKey:l};return o.cloneElement(t,f)}return t})}},11776:function(t,n,e){e.d(n,{g:function(){return r}});function r(t,n,e){return n||(e?e[t]||e.other:void 0)}},47674:function(t,n,e){e.d(n,{S:function(){return p}});var r=e(65677),u=e(21605),o=e(5147),i=e(9365),c=e(2265),l=e(72700),f=e(17517),a=e(29209),s=e(83079),v=e(6824),d=["label","children","key","type"];function p(t,n,e,p){var Z=t,m=(0,r.Z)({divider:l.Z,item:f.Z,group:a.Z,submenu:s.Z},p);return n&&(Z=function t(n,e){var r=e.item,l=e.group,f=e.submenu,a=e.divider;return(n||[]).map(function(n,s){if(n&&"object"===(0,i.Z)(n)){var v=n.label,p=n.children,Z=n.key,m=n.type,b=(0,o.Z)(n,d),g=null!=Z?Z:"tmp-".concat(s);return p||"group"===m?"group"===m?c.createElement(l,(0,u.Z)({key:g},b,{title:v}),t(p,e)):c.createElement(f,(0,u.Z)({key:g},b,{title:v}),t(p,e)):"divider"===m?c.createElement(a,(0,u.Z)({key:g},b)):c.createElement(r,(0,u.Z)({key:g},b),v)}return null}).filter(function(t){return t})}(n,m)),(0,v.A)(Z,e)}},30600:function(t,n,e){e.d(n,{W:function(){return i}});var r=e(5147),u=e(51397),o=["item"];function i(t){var n=t.item,e=(0,r.Z)(t,o);return Object.defineProperty(e,"item",{get:function(){return(0,u.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),e}}}]);