"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8853],{90218:function(e,n,r){r.d(n,{O:function(){return o.Z}});var t=r(80039),o=r(1153);n.Z=t.Z},10767:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(45673),o=r(2265),i=r(25701);function d(e,n){var r=o.useState(!1),d=(0,t.Z)(r,2),a=d[0],c=d[1];(0,i.Z)(function(){if(a)return e(),function(){n()}},[a]),(0,i.Z)(function(){return c(!0),function(){c(!1)}},[])}},30317:function(e,n,r){r.d(n,{BT:function(){return s},E6:function(){return h},L0:function(){return c},OM:function(){return l},_5:function(){return a},r7:function(){return p},wA:function(){return f},yx:function(){return u}});var t=r(84366),o=r(9365),i=r(51397);r(2265),r(1153);var d=r(66097);function a(e,n){if(!e)return[];var r=e.slice(),t=r.indexOf(n);return t>=0&&r.splice(t,1),r}function c(e,n){var r=(e||[]).slice();return -1===r.indexOf(n)&&r.push(n),r}function u(e){return e.split("-")}function f(e,n){var r=[];return!function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach(function(n){var t=n.key,o=n.children;r.push(t),e(o)})}((0,d.Z)(n,e).children),r}function l(e,n,r,t,o,i,a,c,f,l){var s,h,p=e.clientX,v=e.clientY,y=e.target.getBoundingClientRect(),k=y.top,g=y.height,m=(("rtl"===l?-1:1)*(((null==o?void 0:o.x)||0)-p)-12)/t,Z=f.filter(function(e){var n;return null===(n=c[e])||void 0===n||null===(n=n.children)||void 0===n?void 0:n.length}),w=(0,d.Z)(c,r.props.eventKey);if(v<k+g/2){var K=a.findIndex(function(e){return e.key===w.key}),N=a[K<=0?0:K-1].key;w=(0,d.Z)(c,N)}var x=w.key,E=w,O=w.key,S=0,P=0;if(!Z.includes(x))for(var b=0;b<m;b+=1)if(function(e){if(e.parent){var n=u(e.pos);return Number(n[n.length-1])===e.parent.children.length-1}return!1}(w))w=w.parent,P+=1;else break;var C=n.props.data,A=w.node,T=!0;return 0===Number((s=u(w.pos))[s.length-1])&&0===w.level&&v<k+g/2&&i({dragNode:C,dropNode:A,dropPosition:-1})&&w.key===r.props.eventKey?S=-1:(E.children||[]).length&&Z.includes(O)?i({dragNode:C,dropNode:A,dropPosition:0})?S=0:T=!1:0===P?m>-1.5?i({dragNode:C,dropNode:A,dropPosition:1})?S=1:T=!1:i({dragNode:C,dropNode:A,dropPosition:0})?S=0:i({dragNode:C,dropNode:A,dropPosition:1})?S=1:T=!1:i({dragNode:C,dropNode:A,dropPosition:1})?S=1:T=!1,{dropPosition:S,dropLevelOffset:P,dropTargetKey:w.key,dropTargetPos:w.pos,dragOverNodeKey:O,dropContainerKey:0===S?null:(null===(h=w.parent)||void 0===h?void 0:h.key)||null,dropAllowed:T}}function s(e,n){if(e)return n.multiple?e.slice():e.length?[e[0]]:e}function h(e){var n;if(!e)return null;if(Array.isArray(e))n={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==(0,o.Z)(e))return(0,i.ZP)(!1,"`checkedKeys` is not an array or an object"),null;n={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return n}function p(e,n){var r=new Set;return(e||[]).forEach(function(e){!function e(t){if(!r.has(t)){var o=(0,d.Z)(n,t);if(o){r.add(t);var i=o.parent;!o.node.disabled&&i&&e(i.key)}}}(e)}),(0,t.Z)(r)}r(803)},25437:function(e,n,r){r.d(n,{S:function(){return a}});var t=r(51397),o=r(66097);function i(e,n){var r=new Set;return e.forEach(function(e){n.has(e)||r.add(e)}),r}function d(e){var n=e||{},r=n.disabled,t=n.disableCheckbox,o=n.checkable;return!!(r||t)||!1===o}function a(e,n,r,a){var c,u=[];c=a||d;var f=new Set(e.filter(function(e){var n=!!(0,o.Z)(r,e);return n||u.push(e),n})),l=new Map,s=0;return Object.keys(r).forEach(function(e){var n=r[e],t=n.level,o=l.get(t);o||(o=new Set,l.set(t,o)),o.add(n),s=Math.max(s,t)}),(0,t.ZP)(!u.length,"Tree missing follow keys: ".concat(u.slice(0,100).map(function(e){return"'".concat(e,"'")}).join(", "))),!0===n?function(e,n,r,t){for(var o=new Set(e),d=new Set,a=0;a<=r;a+=1)(n.get(a)||new Set).forEach(function(e){var n=e.key,r=e.node,i=e.children,d=void 0===i?[]:i;o.has(n)&&!t(r)&&d.filter(function(e){return!t(e.node)}).forEach(function(e){o.add(e.key)})});for(var c=new Set,u=r;u>=0;u-=1)(n.get(u)||new Set).forEach(function(e){var n=e.parent;if(!(t(e.node)||!e.parent||c.has(e.parent.key))){if(t(e.parent.node)){c.add(n.key);return}var r=!0,i=!1;(n.children||[]).filter(function(e){return!t(e.node)}).forEach(function(e){var n=e.key,t=o.has(n);r&&!t&&(r=!1),!i&&(t||d.has(n))&&(i=!0)}),r&&o.add(n.key),i&&d.add(n.key),c.add(n.key)}});return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(i(d,o))}}(f,l,s,c):function(e,n,r,t,o){for(var d=new Set(e),a=new Set(n),c=0;c<=t;c+=1)(r.get(c)||new Set).forEach(function(e){var n=e.key,r=e.node,t=e.children,i=void 0===t?[]:t;d.has(n)||a.has(n)||o(r)||i.filter(function(e){return!o(e.node)}).forEach(function(e){d.delete(e.key)})});a=new Set;for(var u=new Set,f=t;f>=0;f-=1)(r.get(f)||new Set).forEach(function(e){var n=e.parent;if(!(o(e.node)||!e.parent||u.has(e.parent.key))){if(o(e.parent.node)){u.add(n.key);return}var r=!0,t=!1;(n.children||[]).filter(function(e){return!o(e.node)}).forEach(function(e){var n=e.key,o=d.has(n);r&&!o&&(r=!1),!t&&(o||a.has(n))&&(t=!0)}),r||d.delete(n.key),t&&a.add(n.key),u.add(n.key)}});return{checkedKeys:Array.from(d),halfCheckedKeys:Array.from(i(a,d))}}(f,n.halfCheckedKeys,l,s,c)}},26833:function(e,n,r){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.length,t=n.length;if(1!==Math.abs(r-t))return{add:!1,key:null};function o(e,n){var r=new Map;e.forEach(function(e){r.set(e,!0)});var t=n.filter(function(e){return!r.has(e)});return 1===t.length?t[0]:null}return r<t?{add:!0,key:o(e,n)}:{add:!1,key:o(n,e)}}function o(e,n,r){var t=e.findIndex(function(e){return e.key===r}),o=e[t+1],i=n.findIndex(function(e){return e.key===r});if(o){var d=n.findIndex(function(e){return e.key===o.key});return n.slice(i+1,d)}return n.slice(i+1)}r.d(n,{U:function(){return t},l:function(){return o}})},66097:function(e,n,r){r.d(n,{Z:function(){return t}});function t(e,n){return e[n]}},803:function(e,n,r){r.d(n,{F:function(){return m},H8:function(){return g},I8:function(){return k},km:function(){return h},oH:function(){return y},w$:function(){return p},zn:function(){return v}});var t=r(9365),o=r(84366),i=r(65677),d=r(5147),a=r(93059),c=r(91127),u=r(51397),f=r(66097),l=["children"];function s(e,n){return"".concat(e,"-").concat(n)}function h(e,n){return null!=e?e:n}function p(e){var n=e||{},r=n.title,t=n._title,o=n.key,i=n.children,d=r||"title";return{title:d,_title:t||[d],key:o||"key",children:i||"children"}}function v(e){return function e(n){return(0,a.Z)(n).map(function(n){if(!(n&&n.type&&n.type.isTreeNode))return(0,u.ZP)(!n,"Tree/TreeNode can only accept TreeNode as children."),null;var r=n.key,t=n.props,o=t.children,a=(0,d.Z)(t,l),c=(0,i.Z)({key:r},a),f=e(o);return f.length&&(c.children=f),c}).filter(function(e){return e})}(e)}function y(e,n,r){var t=p(r),i=t._title,d=t.key,a=t.children,u=new Set(!0===n?[]:n),f=[];return!function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.map(function(l,p){for(var v,y=s(t?t.pos:"0",p),k=h(l[d],y),g=0;g<i.length;g+=1){var m=i[g];if(void 0!==l[m]){v=l[m];break}}var Z=Object.assign((0,c.Z)(l,[].concat((0,o.Z)(i),[d,a])),{title:v,key:k,parent:t,pos:y,children:null,data:l,isStart:[].concat((0,o.Z)(t?t.isStart:[]),[0===p]),isEnd:[].concat((0,o.Z)(t?t.isEnd:[]),[p===r.length-1])});return f.push(Z),!0===n||u.has(k)?Z.children=e(l[a]||[],Z):Z.children=[],Z})}(e),f}function k(e){var n,r,i,d,a,c,u,f,l,v,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},k=y.initWrapper,g=y.processEntity,m=y.onProcessFinished,Z=y.externalGetKey,w=y.childrenPropName,K=y.fieldNames,N=arguments.length>2?arguments[2]:void 0,x={},E={},O={posEntities:x,keyEntities:E};return k&&(O=k(O)||O),n=function(e){var n=e.node,r=e.index,t=e.pos,o=e.key,i=e.parentPos,d=e.level,a={node:n,nodes:e.nodes,index:r,key:o,pos:t,level:d},c=h(o,t);x[t]=a,E[c]=a,a.parent=x[i],a.parent&&(a.parent.children=a.parent.children||[],a.parent.children.push(a)),g&&g(a,O)},r={externalGetKey:Z||N,childrenPropName:w,fieldNames:K},a=(d=("object"===(0,t.Z)(r)?r:{externalGetKey:r})||{}).childrenPropName,c=d.externalGetKey,f=(u=p(d.fieldNames)).key,l=u.children,v=a||l,c?"string"==typeof c?i=function(e){return e[c]}:"function"==typeof c&&(i=function(e){return c(e)}):i=function(e,n){return h(e[f],n)},function r(t,d,a,c){var u=t?t[v]:e,f=t?s(a.pos,d):"0",l=t?[].concat((0,o.Z)(c),[t]):[];if(t){var h=i(t,f);n({node:t,index:d,pos:f,key:h,parentPos:a.node?a.pos:null,level:a.level+1,nodes:l})}u&&u.forEach(function(e,n){r(e,n,{node:t,pos:f,level:a?a.level+1:-1},l)})}(null),m&&m(O),O}function g(e,n){var r=n.expandedKeys,t=n.selectedKeys,o=n.loadedKeys,i=n.loadingKeys,d=n.checkedKeys,a=n.halfCheckedKeys,c=n.dragOverNodeKey,u=n.dropPosition,l=n.keyEntities,s=(0,f.Z)(l,e);return{eventKey:e,expanded:-1!==r.indexOf(e),selected:-1!==t.indexOf(e),loaded:-1!==o.indexOf(e),loading:-1!==i.indexOf(e),checked:-1!==d.indexOf(e),halfChecked:-1!==a.indexOf(e),pos:String(s?s.pos:""),dragOver:c===e&&0===u,dragOverGapTop:c===e&&-1===u,dragOverGapBottom:c===e&&1===u}}function m(e){var n=e.data,r=e.expanded,t=e.selected,o=e.checked,d=e.loaded,a=e.loading,c=e.halfChecked,f=e.dragOver,l=e.dragOverGapTop,s=e.dragOverGapBottom,h=e.pos,p=e.active,v=e.eventKey,y=(0,i.Z)((0,i.Z)({},n),{},{expanded:r,selected:t,checked:o,loaded:d,loading:a,halfChecked:c,dragOver:f,dragOverGapTop:l,dragOverGapBottom:s,pos:h,active:p,key:v});return"props"in y||Object.defineProperty(y,"props",{get:function(){return(0,u.ZP)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),e}}),y}},10038:function(e,n,r){r.d(n,{G:function(){return d}});var t=r(15480),o=function(e){if((0,t.Z)()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],r=window.document.documentElement;return n.some(function(e){return e in r.style})}return!1},i=function(e,n){if(!o(e))return!1;var r=document.createElement("div"),t=r.style[e];return r.style[e]=n,r.style[e]!==t};function d(e,n){return Array.isArray(e)||void 0===n?o(e):i(e,n)}}}]);