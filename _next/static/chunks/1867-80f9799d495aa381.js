"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1867],{15055:function(e,t,n){var a=n(21605),c=n(23771),r=n(45673),o=n(5147),i=n(2265),l=n(9838),s=n.n(l),u=n(68506),d=n(96544),f=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=i.forwardRef(function(e,t){var n,l=e.prefixCls,v=void 0===l?"rc-switch":l,m=e.className,b=e.checked,p=e.defaultChecked,h=e.disabled,Z=e.loadingIcon,y=e.checkedChildren,E=e.unCheckedChildren,g=e.onClick,C=e.onChange,k=e.onKeyDown,x=(0,o.Z)(e,f),N=(0,u.Z)(!1,{value:b,defaultValue:p}),w=(0,r.Z)(N,2),R=w[0],P=w[1];function I(e,t){var n=R;return h||(P(n=e),null==C||C(n,t)),n}var T=s()(v,m,(n={},(0,c.Z)(n,"".concat(v,"-checked"),R),(0,c.Z)(n,"".concat(v,"-disabled"),h),n));return i.createElement("button",(0,a.Z)({},x,{type:"button",role:"switch","aria-checked":R,disabled:h,className:T,ref:t,onKeyDown:function(e){e.which===d.Z.LEFT?I(!1,e):e.which===d.Z.RIGHT&&I(!0,e),null==k||k(e)},onClick:function(e){var t=I(!R,e);null==g||g(t,e)}}),Z,i.createElement("span",{className:"".concat(v,"-inner")},i.createElement("span",{className:"".concat(v,"-inner-checked")},y),i.createElement("span",{className:"".concat(v,"-inner-unchecked")},E)))});v.displayName="Switch",t.Z=v},53396:function(e,t,n){var a=n(2265);t.Z=(0,a.createContext)(null)},28817:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(21605),c=n(65677),r=n(5147),o=n(2265),i=n(23771),l=n(84366),s=n(45673),u=n(9838),d=n.n(u),f=n(30785),v=n(8692),m=n(24606),b=n(53396),p=n(31583),h=n(56993),Z=n(78964),y=n(17675),E=n(7768),g=n(90528),C=n(11712),k=o.forwardRef(function(e,t){var n=e.prefixCls,a=e.editable,c=e.locale,r=e.style;return a&&!1!==a.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:r,"aria-label":(null==c?void 0:c.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}),x=n(9365),N=o.forwardRef(function(e,t){var n,a=e.position,c=e.prefixCls,r=e.extra;if(!r)return null;var i={};return"object"!==(0,x.Z)(r)||o.isValidElement(r)?i.right=r:i=r,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?o.createElement("div",{className:"".concat(c,"-extra-content"),ref:t},n):null}),w=n(68245),R=n(41127),P=n(96544),I=o.forwardRef(function(e,t){var n=e.prefixCls,c=e.id,r=e.tabs,l=e.locale,u=e.mobile,f=e.more,v=void 0===f?{}:f,m=e.style,b=e.className,p=e.editable,h=e.tabBarGutter,Z=e.rtl,y=e.removeAriaLabel,E=e.onTabClick,g=e.getPopupContainer,x=e.popupClassName,N=(0,o.useState)(!1),I=(0,s.Z)(N,2),T=I[0],D=I[1],L=(0,o.useState)(null),S=(0,s.Z)(L,2),A=S[0],M=S[1],K=v.icon,B="".concat(c,"-more-popup"),W="".concat(n,"-dropdown"),_=null!==A?"".concat(B,"-").concat(A):null,z=null==l?void 0:l.dropdownAriaLabel,V=o.createElement(R.ZP,{onClick:function(e){E(e.key,e.domEvent),D(!1)},prefixCls:"".concat(W,"-menu"),id:B,tabIndex:-1,role:"listbox","aria-activedescendant":_,selectedKeys:[A],"aria-label":void 0!==z?z:"expanded dropdown"},r.map(function(e){var t=e.closable,n=e.disabled,a=e.closeIcon,r=e.key,i=e.label,l=(0,C.WM)(t,a,p,n);return o.createElement(R.sN,{key:r,id:"".concat(B,"-").concat(r),role:"option","aria-controls":c&&"".concat(c,"-panel-").concat(r),disabled:n},o.createElement("span",null,i),l&&o.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(W,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:r,event:e})}},a||p.removeIcon||"\xd7"))}));function F(e){for(var t=r.filter(function(e){return!e.disabled}),n=t.findIndex(function(e){return e.key===A})||0,a=t.length,c=0;c<a;c+=1){var o=t[n=(n+e+a)%a];if(!o.disabled){M(o.key);return}}}(0,o.useEffect)(function(){var e=document.getElementById(_);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[A]),(0,o.useEffect)(function(){T||M(null)},[T]);var O=(0,i.Z)({},Z?"marginRight":"marginLeft",h);r.length||(O.visibility="hidden",O.order=1);var G=d()((0,i.Z)({},"".concat(W,"-rtl"),Z)),H=u?null:o.createElement(w.Z,(0,a.Z)({prefixCls:W,overlay:V,visible:!!r.length&&T,onVisibleChange:D,overlayClassName:d()(G,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:g},v),o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:O,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":B,id:"".concat(c,"-more"),"aria-expanded":T,onKeyDown:function(e){var t=e.which;if(!T){[P.Z.DOWN,P.Z.SPACE,P.Z.ENTER].includes(t)&&(D(!0),e.preventDefault());return}switch(t){case P.Z.UP:F(-1),e.preventDefault();break;case P.Z.DOWN:F(1),e.preventDefault();break;case P.Z.ESC:D(!1);break;case P.Z.SPACE:case P.Z.ENTER:null!==A&&E(A,e)}}},void 0===K?"More":K));return o.createElement("div",{className:d()("".concat(n,"-nav-operations"),b),style:m,ref:t},H,o.createElement(k,{prefixCls:n,locale:l,editable:p}))}),T=o.memo(I,function(e,t){return t.tabMoving}),D=function(e){var t=e.prefixCls,n=e.id,a=e.active,c=e.tab,r=c.key,l=c.label,s=c.disabled,u=c.closeIcon,f=c.icon,v=e.closable,m=e.renderWrapper,b=e.removeAriaLabel,p=e.editable,h=e.onClick,Z=e.onFocus,y=e.style,E="".concat(t,"-tab"),g=(0,C.WM)(v,u,p,s);function k(e){s||h(e)}var x=o.useMemo(function(){return f&&"string"==typeof l?o.createElement("span",null,l):l},[l,f]),N=o.createElement("div",{key:r,"data-node-key":(0,C._Q)(r),className:d()(E,(0,i.Z)((0,i.Z)((0,i.Z)({},"".concat(E,"-with-remove"),g),"".concat(E,"-active"),a),"".concat(E,"-disabled"),s)),style:y,onClick:k},o.createElement("div",{role:"tab","aria-selected":a,id:n&&"".concat(n,"-tab-").concat(r),className:"".concat(E,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(r),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),k(e)},onKeyDown:function(e){[P.Z.SPACE,P.Z.ENTER].includes(e.which)&&(e.preventDefault(),k(e))},onFocus:Z},f&&o.createElement("span",{className:"".concat(E,"-icon")},f),l&&x),g&&o.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(E,"-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:r,event:e})}},u||p.removeIcon||"\xd7"));return m?m(N):N},L=function(e,t){var n=e.offsetWidth,a=e.offsetHeight,c=e.offsetTop,r=e.offsetLeft,o=e.getBoundingClientRect(),i=o.width,l=o.height,s=o.x,u=o.y;return 1>Math.abs(i-n)?[i,l,s-t.x,u-t.y]:[n,a,r,c]},S=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,c=t.offsetHeight;if(e.current){var r=e.current.getBoundingClientRect(),o=r.width,i=r.height;if(1>Math.abs(o-a))return[o,i]}return[a,void 0===c?0:c]},A=function(e,t){return e[t?0:1]},M=o.forwardRef(function(e,t){var n,r,u,x,w=e.className,R=e.style,P=e.id,I=e.animated,M=e.activeKey,K=e.rtl,B=e.extra,W=e.editable,_=e.locale,z=e.tabPosition,V=e.tabBarGutter,F=e.children,O=e.onTabClick,G=e.onTabScroll,H=e.indicator,j=o.useContext(b.Z),Q=j.prefixCls,q=j.tabs,U=(0,o.useRef)(null),J=(0,o.useRef)(null),X=(0,o.useRef)(null),Y=(0,o.useRef)(null),$=(0,o.useRef)(null),ee=(0,o.useRef)(null),et=(0,o.useRef)(null),en="top"===z||"bottom"===z,ea=(0,Z.Z)(0,function(e,t){en&&G&&G({direction:e>t?"left":"right"})}),ec=(0,s.Z)(ea,2),er=ec[0],eo=ec[1],ei=(0,Z.Z)(0,function(e,t){!en&&G&&G({direction:e>t?"top":"bottom"})}),el=(0,s.Z)(ei,2),es=el[0],eu=el[1],ed=(0,o.useState)([0,0]),ef=(0,s.Z)(ed,2),ev=ef[0],em=ef[1],eb=(0,o.useState)([0,0]),ep=(0,s.Z)(eb,2),eh=ep[0],eZ=ep[1],ey=(0,o.useState)([0,0]),eE=(0,s.Z)(ey,2),eg=eE[0],eC=eE[1],ek=(0,o.useState)([0,0]),ex=(0,s.Z)(ek,2),eN=ex[0],ew=ex[1],eR=(0,E.y)(new Map),eP=(0,s.Z)(eR,2),eI=eP[0],eT=eP[1],eD=(0,h.Z)(q,eI,eh[0]),eL=A(ev,en),eS=A(eh,en),eA=A(eg,en),eM=A(eN,en),eK=eL<eS+eA,eB=eK?eL-eM:eL-eA,eW="".concat(Q,"-nav-operations-hidden"),e_=0,ez=0;function eV(e){return e<e_?e_:e>ez?ez:e}en&&K?(e_=0,ez=Math.max(0,eS-eB)):(e_=Math.min(0,eB-eS),ez=0);var eF=(0,o.useRef)(null),eO=(0,o.useState)(),eG=(0,s.Z)(eO,2),eH=eG[0],ej=eG[1];function eQ(){ej(Date.now())}function eq(){eF.current&&clearTimeout(eF.current)}(0,y.Z)(Y,function(e,t){function n(e,t){e(function(e){return eV(e+t)})}return!!eK&&(en?n(eo,e):n(eu,t),eq(),eQ(),!0)}),(0,o.useEffect)(function(){return eq(),eH&&(eF.current=setTimeout(function(){ej(0)},100)),eq},[eH]);var eU=(0,g.Z)(eD,eB,en?er:es,eS,eA,eM,(0,c.Z)((0,c.Z)({},e),{},{tabs:q})),eJ=(0,s.Z)(eU,2),eX=eJ[0],eY=eJ[1],e$=(0,v.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=eD.get(e)||{width:0,height:0,left:0,right:0,top:0};if(en){var n=er;K?t.right<er?n=t.right:t.right+t.width>er+eB&&(n=t.right+t.width-eB):t.left<-er?n=-t.left:t.left+t.width>-er+eB&&(n=-(t.left+t.width-eB)),eu(0),eo(eV(n))}else{var a=es;t.top<-es?a=-t.top:t.top+t.height>-es+eB&&(a=-(t.top+t.height-eB)),eo(0),eu(eV(a))}}),e0={};"top"===z||"bottom"===z?e0[K?"marginRight":"marginLeft"]=V:e0.marginTop=V;var e1=q.map(function(e,t){var n=e.key;return o.createElement(D,{id:P,prefixCls:Q,key:n,tab:e,style:0===t?void 0:e0,closable:e.closable,editable:W,active:n===M,renderWrapper:F,removeAriaLabel:null==_?void 0:_.removeAriaLabel,onClick:function(e){O(n,e)},onFocus:function(){e$(n),eQ(),Y.current&&(K||(Y.current.scrollLeft=0),Y.current.scrollTop=0)}})}),e2=function(){return eT(function(){var e,t=new Map,n=null===(e=$.current)||void 0===e?void 0:e.getBoundingClientRect();return q.forEach(function(e){var a,c=e.key,r=null===(a=$.current)||void 0===a?void 0:a.querySelector('[data-node-key="'.concat((0,C._Q)(c),'"]'));if(r){var o=L(r,n),i=(0,s.Z)(o,4),l=i[0],u=i[1],d=i[2],f=i[3];t.set(c,{width:l,height:u,left:d,top:f})}}),t})};(0,o.useEffect)(function(){e2()},[q.map(function(e){return e.key}).join("_")]);var e6=(0,E.Z)(function(){var e=S(U),t=S(J),n=S(X);em([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=S(et);eC(a),ew(S(ee));var c=S($);eZ([c[0]-a[0],c[1]-a[1]]),e2()}),e5=q.slice(0,eX),e3=q.slice(eY+1),e7=[].concat((0,l.Z)(e5),(0,l.Z)(e3)),e8=eD.get(M),e9=(0,p.Z)({activeTabOffset:e8,horizontal:en,indicator:H,rtl:K}).style;(0,o.useEffect)(function(){e$()},[M,e_,ez,(0,C.Pz)(e8),(0,C.Pz)(eD),en]),(0,o.useEffect)(function(){e6()},[K]);var e4=!!e7.length,te="".concat(Q,"-nav-wrap");return en?K?(r=er>0,n=er!==ez):(n=er<0,r=er!==e_):(u=es<0,x=es!==e_),o.createElement(f.Z,{onResize:e6},o.createElement("div",{ref:(0,m.x1)(t,U),role:"tablist",className:d()("".concat(Q,"-nav"),w),style:R,onKeyDown:function(){eQ()}},o.createElement(N,{ref:J,position:"left",extra:B,prefixCls:Q}),o.createElement(f.Z,{onResize:e6},o.createElement("div",{className:d()(te,(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},"".concat(te,"-ping-left"),n),"".concat(te,"-ping-right"),r),"".concat(te,"-ping-top"),u),"".concat(te,"-ping-bottom"),x)),ref:Y},o.createElement(f.Z,{onResize:e6},o.createElement("div",{ref:$,className:"".concat(Q,"-nav-list"),style:{transform:"translate(".concat(er,"px, ").concat(es,"px)"),transition:eH?"none":void 0}},e1,o.createElement(k,{ref:et,prefixCls:Q,locale:_,editable:W,style:(0,c.Z)((0,c.Z)({},0===e1.length?void 0:e0),{},{visibility:e4?"hidden":null})}),o.createElement("div",{className:d()("".concat(Q,"-ink-bar"),(0,i.Z)({},"".concat(Q,"-ink-bar-animated"),I.inkBar)),style:e9}))))),o.createElement(T,(0,a.Z)({},e,{removeAriaLabel:null==_?void 0:_.removeAriaLabel,ref:ee,prefixCls:Q,tabs:e7,className:!e4&&eW,tabMoving:!!eH})),o.createElement(N,{ref:X,position:"right",extra:B,prefixCls:Q})))}),K=n(98336),B=["renderTabBar"],W=["label","key"],_=function(e){var t=e.renderTabBar,n=(0,r.Z)(e,B),i=o.useContext(b.Z).tabs;return t?t((0,c.Z)((0,c.Z)({},n),{},{panes:i.map(function(e){var t=e.label,n=e.key,c=(0,r.Z)(e,W);return o.createElement(K.Z,(0,a.Z)({tab:t,key:n,tabKey:n},c))})}),M):o.createElement(M,n)}},98336:function(e,t,n){var a=n(9838),c=n.n(a),r=n(2265),o=r.forwardRef(function(e,t){var n=e.prefixCls,a=e.className,o=e.style,i=e.id,l=e.active,s=e.tabKey,u=e.children;return r.createElement("div",{id:i&&"".concat(i,"-panel-").concat(s),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(s),"aria-hidden":!l,style:o,className:c()(n,l&&"".concat(n,"-active"),a),ref:t},u)});t.Z=o},82073:function(e,t,n){var a=n(21605),c=n(65677),r=n(5147),o=n(23771),i=n(9838),l=n.n(i),s=n(79750),u=n(2265),d=n(53396),f=n(98336),v=["key","forceRender","style","className","destroyInactiveTabPane"];t.Z=function(e){var t=e.id,n=e.activeKey,i=e.animated,m=e.tabPosition,b=e.destroyInactiveTabPane,p=u.useContext(d.Z),h=p.prefixCls,Z=p.tabs,y=i.tabPane,E="".concat(h,"-tabpane");return u.createElement("div",{className:l()("".concat(h,"-content-holder"))},u.createElement("div",{className:l()("".concat(h,"-content"),"".concat(h,"-content-").concat(m),(0,o.Z)({},"".concat(h,"-content-animated"),y))},Z.map(function(e){var o=e.key,d=e.forceRender,m=e.style,p=e.className,h=e.destroyInactiveTabPane,Z=(0,r.Z)(e,v),g=o===n;return u.createElement(s.ZP,(0,a.Z)({key:o,visible:g,forceRender:d,removeOnLeave:!!(b||h),leavedClassName:"".concat(E,"-hidden")},i.tabPaneMotion),function(e,n){var r=e.style,i=e.className;return u.createElement(f.Z,(0,a.Z)({},Z,{prefixCls:E,id:t,tabKey:o,animated:y,active:g,style:(0,c.Z)((0,c.Z)({},m),r),className:l()(p,i),ref:n}))})})))}}}]);