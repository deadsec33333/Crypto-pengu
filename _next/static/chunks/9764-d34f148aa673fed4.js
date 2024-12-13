"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9764],{88491:function(e,n,t){var o=t(2265),r=t(9838),i=t.n(r),a=t(24606),c=t(21196),l=t(27254),s=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};let d=o.forwardRef((e,n)=>{let{prefixCls:t,component:r="article",className:d,rootClassName:p,setContentRef:u,children:f,direction:g,style:m}=e,b=s(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:y,direction:h,typography:v}=o.useContext(c.E_),O=n;u&&(O=(0,a.sQ)(n,u));let x=y("typography",t),[w,j,k]=(0,l.Z)(x),S=i()(x,null==v?void 0:v.className,{["".concat(x,"-rtl")]:"rtl"===(null!=g?g:h)},d,p,j,k),E=Object.assign(Object.assign({},null==v?void 0:v.style),m);return w(o.createElement(r,Object.assign({className:S,style:E,ref:O},b),f))});n.Z=d},21505:function(e,n,t){var o=t(2265),r=t(72739),i=t.n(r),a=t(98578);n.Z=e=>{let{copyConfig:n,children:t}=e,[r,c]=o.useState(!1),[l,s]=o.useState(!1),d=o.useRef(null),p=()=>{d.current&&clearTimeout(d.current)},u={};return n.format&&(u.format=n.format),o.useEffect(()=>p,[]),{copied:r,copyLoading:l,onClick:(0,a.zX)(e=>{var o,r,a,l;return o=void 0,r=void 0,a=void 0,l=function*(){var o;null==e||e.preventDefault(),null==e||e.stopPropagation(),s(!0);try{let r="function"==typeof n.text?yield n.text():n.text;i()(r||String(t)||"",u),s(!1),c(!0),p(),d.current=setTimeout(()=>{c(!1)},3e3),null===(o=n.onCopy)||void 0===o||o.call(n,e)}catch(e){throw s(!1),e}},new(a||(a=Promise))(function(e,n){function t(e){try{c(l.next(e))}catch(e){n(e)}}function i(e){try{c(l.throw(e))}catch(e){n(e)}}function c(n){var o;n.done?e(n.value):((o=n.value)instanceof a?o:new a(function(e){e(o)})).then(t,i)}c((l=l.apply(o,r||[])).next())})})}}},56743:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(2265);function r(e,n){return o.useMemo(()=>{let t=!!e;return[t,Object.assign(Object.assign({},n),t&&"object"==typeof e?e:null)]},[e])}},65638:function(e,n,t){var o=t(2265);n.Z=e=>{let n=(0,o.useRef)();return(0,o.useEffect)(()=>{n.current=e}),n.current}},72487:function(e,n,t){var o=t(2265);n.Z=(e,n)=>{let t=o.useRef(!1);o.useEffect(()=>{t.current?e():t.current=!0},n)}},9712:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(10653),r=t(2265),i=t(94382);let a=r.forwardRef((e,n)=>r.createElement(i.Z,Object.assign({ref:n},e,{component:"div"})));var c=t(91127),l=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t},s=r.forwardRef((e,n)=>{var{ellipsis:t}=e,o=l(e,["ellipsis"]);let a=r.useMemo(()=>t&&"object"==typeof t?(0,c.Z)(t,["expandable","rows"]):t,[t]);return r.createElement(i.Z,Object.assign({ref:n},o,{ellipsis:a,component:"span"}))}),d=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};let p=[1,2,3,4,5],u=r.forwardRef((e,n)=>{let t;let{level:o=1}=e,a=d(e,["level"]);return t=p.includes(o)?"h".concat(o):"h1",r.createElement(i.Z,Object.assign({ref:n},a,{component:t}))}),f=t(88491).Z;f.Text=s,f.Link=o.Z,f.Title=u,f.Paragraph=a;var g=f},27254:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(90708),r=t(56286),i=t(10881),a=t(43754);let c=(e,n,t,o)=>{let{titleMarginBottom:r,fontWeightStrong:i}=o;return{marginBottom:r,color:t,fontWeight:i,fontSize:e,lineHeight:n}},l=e=>{let n={};return[1,2,3,4,5].forEach(t=>{n["\n      h".concat(t,"&,\n      div&-h").concat(t,",\n      div&-h").concat(t," > textarea,\n      h").concat(t,"\n    ")]=c(e["fontSizeHeading".concat(t)],e["lineHeightHeading".concat(t)],e.colorTextHeading,e)}),n},s=e=>{let{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},(0,o.N)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},["&[disabled], &".concat(n,"-disabled")]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},d=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:i.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),p=e=>{let{componentCls:n,paddingSM:t}=e;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(t).mul(-1).equal(),marginBottom:"calc(1em - ".concat((0,a.bf)(t),")")},["".concat(n,"-edit-content-confirm")]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},u=e=>({["".concat(e.componentCls,"-copy-success")]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},["".concat(e.componentCls,"-copy-icon-only")]:{marginInlineStart:0}}),f=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),g=e=>{let{componentCls:n,titleMarginTop:t}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,["&".concat(n,"-secondary")]:{color:e.colorTextDescription},["&".concat(n,"-success")]:{color:e.colorSuccess},["&".concat(n,"-warning")]:{color:e.colorWarning},["&".concat(n,"-danger")]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},["&".concat(n,"-disabled")]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},l(e)),{["\n      & + h1".concat(n,",\n      & + h2").concat(n,",\n      & + h3").concat(n,",\n      & + h4").concat(n,",\n      & + h5").concat(n,"\n      ")]:{marginTop:t},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:t}}}),d(e)),s(e)),{["\n        ".concat(n,"-expand,\n        ").concat(n,"-collapse,\n        ").concat(n,"-edit,\n        ").concat(n,"-copy\n      ")]:Object.assign(Object.assign({},(0,o.N)(e)),{marginInlineStart:e.marginXXS})}),p(e)),u(e)),f()),{"&-rtl":{direction:"rtl"}})}};var m=(0,r.I$)("Typography",e=>[g(e)],()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}))},36362:function(e,n,t){t.d(n,{Z:function(){return o}});function o(e){if(null==e)throw TypeError("Cannot destructure "+e)}}}]);