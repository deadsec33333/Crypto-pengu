"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9771],{80347:function(e,n,r){r.d(n,{O:function(){return o.Z}});var t=r(86998),o=r(35979);n.Z=t.Z},33606:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(39428),o=r(2265),i=r(89534);function a(e,n){var r=o.useState(!1),a=(0,t.Z)(r,2),u=a[0],d=a[1];(0,i.Z)(function(){if(u)return e(),function(){n()}},[u]),(0,i.Z)(function(){return d(!0),function(){d(!1)}},[])}},12916:function(e,n,r){r.d(n,{BT:function(){return h},E6:function(){return s},L0:function(){return d},OM:function(){return l},_5:function(){return u},r7:function(){return v},wA:function(){return f},yx:function(){return c}});var t=r(57111),o=r(8620),i=r(67638);r(2265),r(35979);var a=r(91812);function u(e,n){if(!e)return[];var r=e.slice(),t=r.indexOf(n);return t>=0&&r.splice(t,1),r}function d(e,n){var r=(e||[]).slice();return -1===r.indexOf(n)&&r.push(n),r}function c(e){return e.split("-")}function f(e,n){var r=[];return!function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach(function(n){var t=n.key,o=n.children;r.push(t),e(o)})}((0,a.Z)(n,e).children),r}function l(e,n,r,t,o,i,u,d,f,l){var h,s,v=e.clientX,y=e.clientY,k=e.target.getBoundingClientRect(),p=k.top,g=k.height,w=(("rtl"===l?-1:1)*(((null==o?void 0:o.x)||0)-v)-12)/t,N=f.filter(function(e){var n;return null===(n=d[e])||void 0===n||null===(n=n.children)||void 0===n?void 0:n.length}),S=(0,a.Z)(d,r.props.eventKey);if(y<p+g/2){var E=u.findIndex(function(e){return e.key===S.key}),Z=u[E<=0?0:E-1].key;S=(0,a.Z)(d,Z)}var K=S.key,b=S,C=S.key,m=0,x=0;if(!N.includes(K))for(var P=0;P<w;P+=1)if(function(e){if(e.parent){var n=c(e.pos);return Number(n[n.length-1])===e.parent.children.length-1}return!1}(S))S=S.parent,x+=1;else break;var A=n.props.data,O=S.node,M=!0;return 0===Number((h=c(S.pos))[h.length-1])&&0===S.level&&y<p+g/2&&i({dragNode:A,dropNode:O,dropPosition:-1})&&S.key===r.props.eventKey?m=-1:(b.children||[]).length&&N.includes(C)?i({dragNode:A,dropNode:O,dropPosition:0})?m=0:M=!1:0===x?w>-1.5?i({dragNode:A,dropNode:O,dropPosition:1})?m=1:M=!1:i({dragNode:A,dropNode:O,dropPosition:0})?m=0:i({dragNode:A,dropNode:O,dropPosition:1})?m=1:M=!1:i({dragNode:A,dropNode:O,dropPosition:1})?m=1:M=!1,{dropPosition:m,dropLevelOffset:x,dropTargetKey:S.key,dropTargetPos:S.pos,dragOverNodeKey:C,dropContainerKey:0===m?null:(null===(s=S.parent)||void 0===s?void 0:s.key)||null,dropAllowed:M}}function h(e,n){if(e)return n.multiple?e.slice():e.length?[e[0]]:e}function s(e){var n;if(!e)return null;if(Array.isArray(e))n={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==(0,o.Z)(e))return(0,i.ZP)(!1,"`checkedKeys` is not an array or an object"),null;n={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return n}function v(e,n){var r=new Set;return(e||[]).forEach(function(e){!function e(t){if(!r.has(t)){var o=(0,a.Z)(n,t);if(o){r.add(t);var i=o.parent;!o.node.disabled&&i&&e(i.key)}}}(e)}),(0,t.Z)(r)}r(69711)},42317:function(e,n,r){r.d(n,{S:function(){return u}});var t=r(67638),o=r(91812);function i(e,n){var r=new Set;return e.forEach(function(e){n.has(e)||r.add(e)}),r}function a(e){var n=e||{},r=n.disabled,t=n.disableCheckbox,o=n.checkable;return!!(r||t)||!1===o}function u(e,n,r,u){var d,c=[];d=u||a;var f=new Set(e.filter(function(e){var n=!!(0,o.Z)(r,e);return n||c.push(e),n})),l=new Map,h=0;return Object.keys(r).forEach(function(e){var n=r[e],t=n.level,o=l.get(t);o||(o=new Set,l.set(t,o)),o.add(n),h=Math.max(h,t)}),(0,t.ZP)(!c.length,"Tree missing follow keys: ".concat(c.slice(0,100).map(function(e){return"'".concat(e,"'")}).join(", "))),!0===n?function(e,n,r,t){for(var o=new Set(e),a=new Set,u=0;u<=r;u+=1)(n.get(u)||new Set).forEach(function(e){var n=e.key,r=e.node,i=e.children,a=void 0===i?[]:i;o.has(n)&&!t(r)&&a.filter(function(e){return!t(e.node)}).forEach(function(e){o.add(e.key)})});for(var d=new Set,c=r;c>=0;c-=1)(n.get(c)||new Set).forEach(function(e){var n=e.parent;if(!(t(e.node)||!e.parent||d.has(e.parent.key))){if(t(e.parent.node)){d.add(n.key);return}var r=!0,i=!1;(n.children||[]).filter(function(e){return!t(e.node)}).forEach(function(e){var n=e.key,t=o.has(n);r&&!t&&(r=!1),!i&&(t||a.has(n))&&(i=!0)}),r&&o.add(n.key),i&&a.add(n.key),d.add(n.key)}});return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(i(a,o))}}(f,l,h,d):function(e,n,r,t,o){for(var a=new Set(e),u=new Set(n),d=0;d<=t;d+=1)(r.get(d)||new Set).forEach(function(e){var n=e.key,r=e.node,t=e.children,i=void 0===t?[]:t;a.has(n)||u.has(n)||o(r)||i.filter(function(e){return!o(e.node)}).forEach(function(e){a.delete(e.key)})});u=new Set;for(var c=new Set,f=t;f>=0;f-=1)(r.get(f)||new Set).forEach(function(e){var n=e.parent;if(!(o(e.node)||!e.parent||c.has(e.parent.key))){if(o(e.parent.node)){c.add(n.key);return}var r=!0,t=!1;(n.children||[]).filter(function(e){return!o(e.node)}).forEach(function(e){var n=e.key,o=a.has(n);r&&!o&&(r=!1),!t&&(o||u.has(n))&&(t=!0)}),r||a.delete(n.key),t&&u.add(n.key),c.add(n.key)}});return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(i(u,a))}}(f,n.halfCheckedKeys,l,h,d)}},65056:function(e,n,r){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.length,t=n.length;if(1!==Math.abs(r-t))return{add:!1,key:null};function o(e,n){var r=new Map;e.forEach(function(e){r.set(e,!0)});var t=n.filter(function(e){return!r.has(e)});return 1===t.length?t[0]:null}return r<t?{add:!0,key:o(e,n)}:{add:!1,key:o(n,e)}}function o(e,n,r){var t=e.findIndex(function(e){return e.key===r}),o=e[t+1],i=n.findIndex(function(e){return e.key===r});if(o){var a=n.findIndex(function(e){return e.key===o.key});return n.slice(i+1,a)}return n.slice(i+1)}r.d(n,{U:function(){return t},l:function(){return o}})}}]);