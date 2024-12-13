"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9455],{9455:function(e,n,r){r.d(n,{Z:function(){return I}});var t=r(21605),a=r(23771),u=r(9365),o=r(45673),c=r(5147),i=r(26238),s=r(5862),l=r(62561),f=r(9838),d=r.n(f),p=r(8278),v=r(25701),m=r(46575),b=r(24606),g=r(2265),N=r(51397),Z=r(20667),E=r(48683);function h(e){var n=e.prefixCls,r=e.upNode,u=e.downNode,o=e.upDisabled,c=e.downDisabled,i=e.onStep,s=g.useRef(),l=g.useRef([]),f=g.useRef();f.current=i;var p=function(){clearTimeout(s.current)},v=function(e,n){e.preventDefault(),p(),f.current(n),s.current=setTimeout(function e(){f.current(n),s.current=setTimeout(e,200)},600)};if(g.useEffect(function(){return function(){p(),l.current.forEach(function(e){return E.Z.cancel(e)})}},[]),(0,Z.Z)())return null;var m="".concat(n,"-handler"),b=d()(m,"".concat(m,"-up"),(0,a.Z)({},"".concat(m,"-up-disabled"),o)),N=d()(m,"".concat(m,"-down"),(0,a.Z)({},"".concat(m,"-down-disabled"),c)),h=function(){return l.current.push((0,E.Z)(p))},w={unselectable:"on",role:"button",onMouseUp:h,onMouseLeave:h};return g.createElement("div",{className:"".concat(m,"-wrap")},g.createElement("span",(0,t.Z)({},w,{onMouseDown:function(e){v(e,!0)},"aria-label":"Increase Value","aria-disabled":o,className:b}),r||g.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-up-inner")})),g.createElement("span",(0,t.Z)({},w,{onMouseDown:function(e){v(e,!1)},"aria-label":"Decrease Value","aria-disabled":c,className:N}),u||g.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-down-inner")})))}function w(e){var n="number"==typeof e?(0,s.vP)(e):(0,s._V)(e).fullStr;return n.includes(".")?(0,s._V)(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var y=r(9758),x=function(){var e=(0,g.useRef)(0),n=function(){E.Z.cancel(e.current)};return(0,g.useEffect)(function(){return n},[]),function(r){n(),e.current=(0,E.Z)(function(){r()})}},S=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","changeOnWheel","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur","domRef"],C=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","className","classNames"],R=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},P=function(e){var n=(0,i.ZP)(e);return n.isInvalidate()?null:n},D=g.forwardRef(function(e,n){var r,f,p=e.prefixCls,m=e.className,Z=e.style,E=e.min,y=e.max,C=e.step,D=void 0===C?1:C,I=e.defaultValue,M=e.value,k=e.disabled,H=e.readOnly,T=e.upHandler,O=e.downHandler,A=e.keyboard,B=e.changeOnWheel,q=void 0!==B&&B,U=e.controls,V=(e.classNames,e.stringMode),W=e.parser,_=e.formatter,F=e.precision,K=e.decimalSeparator,L=e.onChange,Q=e.onInput,X=e.onPressEnter,$=e.onStep,Y=e.changeOnBlur,j=void 0===Y||Y,z=e.domRef,G=(0,c.Z)(e,S),J="".concat(p,"-input"),ee=g.useRef(null),en=g.useState(!1),er=(0,o.Z)(en,2),et=er[0],ea=er[1],eu=g.useRef(!1),eo=g.useRef(!1),ec=g.useRef(!1),ei=g.useState(function(){return(0,i.ZP)(null!=M?M:I)}),es=(0,o.Z)(ei,2),el=es[0],ef=es[1],ed=g.useCallback(function(e,n){return n?void 0:F>=0?F:Math.max((0,s.NX)(e),(0,s.NX)(D))},[F,D]),ep=g.useCallback(function(e){var n=String(e);if(W)return W(n);var r=n;return K&&(r=r.replace(K,".")),r.replace(/[^\w.-]+/g,"")},[W,K]),ev=g.useRef(""),em=g.useCallback(function(e,n){if(_)return _(e,{userTyping:n,input:String(ev.current)});var r="number"==typeof e?(0,s.vP)(e):e;if(!n){var t=ed(r,n);if((0,s.mE)(r)&&(K||t>=0)){var a=K||".";r=(0,l.FH)(r,a,t)}}return r},[_,ed,K]),eb=g.useState(function(){var e=null!=I?I:M;return el.isInvalidate()&&["string","number"].includes((0,u.Z)(e))?Number.isNaN(e)?"":e:em(el.toString(),!1)}),eg=(0,o.Z)(eb,2),eN=eg[0],eZ=eg[1];function eE(e,n){eZ(em(e.isInvalidate()?e.toString(!1):e.toString(!n),n))}ev.current=eN;var eh=g.useMemo(function(){return P(y)},[y,F]),ew=g.useMemo(function(){return P(E)},[E,F]),ey=g.useMemo(function(){return!(!eh||!el||el.isInvalidate())&&eh.lessEquals(el)},[eh,el]),ex=g.useMemo(function(){return!(!ew||!el||el.isInvalidate())&&el.lessEquals(ew)},[ew,el]),eS=(r=ee.current,f=(0,g.useRef)(null),[function(){try{var e=r.selectionStart,n=r.selectionEnd,t=r.value,a=t.substring(0,e),u=t.substring(n);f.current={start:e,end:n,value:t,beforeTxt:a,afterTxt:u}}catch(e){}},function(){if(r&&f.current&&et)try{var e=r.value,n=f.current,t=n.beforeTxt,a=n.afterTxt,u=n.start,o=e.length;if(e.endsWith(a))o=e.length-f.current.afterTxt.length;else if(e.startsWith(t))o=t.length;else{var c=t[u-1],i=e.indexOf(c,u-1);-1!==i&&(o=i+1)}r.setSelectionRange(o,o)}catch(e){(0,N.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(e.message))}}]),eC=(0,o.Z)(eS,2),eR=eC[0],eP=eC[1],eD=function(e){return eh&&!e.lessEquals(eh)?eh:ew&&!ew.lessEquals(e)?ew:null},eI=function(e){return!eD(e)},eM=function(e,n){var r=e,t=eI(r)||r.isEmpty();if(r.isEmpty()||n||(r=eD(r)||r,t=!0),!H&&!k&&t){var a,u=r.toString(),o=ed(u,n);return o>=0&&!eI(r=(0,i.ZP)((0,l.FH)(u,".",o)))&&(r=(0,i.ZP)((0,l.FH)(u,".",o,!0))),r.equals(el)||(a=r,void 0===M&&ef(a),null==L||L(r.isEmpty()?null:R(V,r)),void 0===M&&eE(r,n)),r}return el},ek=x(),eH=function e(n){if(eR(),ev.current=n,eZ(n),!eo.current){var r=ep(n),t=(0,i.ZP)(r);t.isNaN()||eM(t,!0)}null==Q||Q(n),ek(function(){var r=n;W||(r=n.replace(/。/g,".")),r!==n&&e(r)})},eT=function(e){if((!e||!ey)&&(e||!ex)){eu.current=!1;var n,r=(0,i.ZP)(ec.current?w(D):D);e||(r=r.negate());var t=eM((el||(0,i.ZP)(0)).add(r.toString()),!1);null==$||$(R(V,t),{offset:ec.current?w(D):D,type:e?"up":"down"}),null===(n=ee.current)||void 0===n||n.focus()}},eO=function(e){var n,r=(0,i.ZP)(ep(eN));n=r.isNaN()?eM(el,e):eM(r,e),void 0!==M?eE(el,!1):n.isNaN()||eE(n,!1)};return g.useEffect(function(){if(q&&et){var e=function(e){eT(e.deltaY<0),e.preventDefault()},n=ee.current;if(n)return n.addEventListener("wheel",e,{passive:!1}),function(){return n.removeEventListener("wheel",e)}}}),(0,v.o)(function(){el.isInvalidate()||eE(el,!1)},[F,_]),(0,v.o)(function(){var e=(0,i.ZP)(M);ef(e);var n=(0,i.ZP)(ep(eN));e.equals(n)&&eu.current&&!_||eE(e,eu.current)},[M]),(0,v.o)(function(){_&&eP()},[eN]),g.createElement("div",{ref:z,className:d()(p,m,(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(p,"-focused"),et),"".concat(p,"-disabled"),k),"".concat(p,"-readonly"),H),"".concat(p,"-not-a-number"),el.isNaN()),"".concat(p,"-out-of-range"),!el.isInvalidate()&&!eI(el))),style:Z,onFocus:function(){ea(!0)},onBlur:function(){j&&eO(!1),ea(!1),eu.current=!1},onKeyDown:function(e){var n=e.key,r=e.shiftKey;eu.current=!0,ec.current=r,"Enter"===n&&(eo.current||(eu.current=!1),eO(!1),null==X||X(e)),!1!==A&&!eo.current&&["Up","ArrowUp","Down","ArrowDown"].includes(n)&&(eT("Up"===n||"ArrowUp"===n),e.preventDefault())},onKeyUp:function(){eu.current=!1,ec.current=!1},onCompositionStart:function(){eo.current=!0},onCompositionEnd:function(){eo.current=!1,eH(ee.current.value)},onBeforeInput:function(){eu.current=!0}},(void 0===U||U)&&g.createElement(h,{prefixCls:p,upNode:T,downNode:O,upDisabled:ey,downDisabled:ex,onStep:eT}),g.createElement("div",{className:"".concat(J,"-wrap")},g.createElement("input",(0,t.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":E,"aria-valuemax":y,"aria-valuenow":el.isInvalidate()?null:el.toString(),step:D},G,{ref:(0,b.sQ)(ee,n),className:J,value:eN,onChange:function(e){eH(e.target.value)},disabled:k,readOnly:H}))))}),I=g.forwardRef(function(e,n){var r=e.disabled,a=e.style,u=e.prefixCls,o=void 0===u?"rc-input-number":u,i=e.value,s=e.prefix,l=e.suffix,f=e.addonBefore,d=e.addonAfter,v=e.className,b=e.classNames,N=(0,c.Z)(e,C),Z=g.useRef(null),E=g.useRef(null),h=g.useRef(null);return g.useImperativeHandle(n,function(){return(0,m.Z)(h.current,{nativeElement:Z.current.nativeElement||E.current})}),g.createElement(p.Q,{className:v,triggerFocus:function(e){h.current&&(0,y.nH)(h.current,e)},prefixCls:o,value:i,disabled:r,style:a,prefix:s,suffix:l,addonAfter:d,addonBefore:f,classNames:b,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"},ref:Z},g.createElement(D,(0,t.Z)({prefixCls:o,disabled:r,ref:h,domRef:E,className:null==b?void 0:b.input},N)))})}}]);