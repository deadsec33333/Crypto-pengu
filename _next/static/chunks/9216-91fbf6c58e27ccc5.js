"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9216],{9216:function(t,e,i){i.d(e,{RR:function(){return r},cv:function(){return f},dp:function(){return m},dr:function(){return u},oo:function(){return o},uY:function(){return c}});var n=i(19429);function l(t,e,i){let l,{reference:o,floating:a}=t,r=(0,n.Qq)(e),s=(0,n.Wh)(e),f=(0,n.I4)(s),c=(0,n.k3)(e),u="y"===r,m=o.x+o.width/2-a.width/2,p=o.y+o.height/2-a.height/2,h=o[f]/2-a[f]/2;switch(c){case"top":l={x:m,y:o.y-a.height};break;case"bottom":l={x:m,y:o.y+o.height};break;case"right":l={x:o.x+o.width,y:p};break;case"left":l={x:o.x-a.width,y:p};break;default:l={x:o.x,y:o.y}}switch((0,n.hp)(e)){case"start":l[s]-=h*(i&&u?-1:1);break;case"end":l[s]+=h*(i&&u?-1:1)}return l}let o=async(t,e,i)=>{let{placement:n="bottom",strategy:o="absolute",middleware:a=[],platform:r}=i,s=a.filter(Boolean),f=await (null==r.isRTL?void 0:r.isRTL(e)),c=await r.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:m}=l(c,n,f),p=n,h={},g=0;for(let i=0;i<s.length;i++){let{name:a,fn:d}=s[i],{x:w,y:y,data:v,reset:x}=await d({x:u,y:m,initialPlacement:n,placement:p,strategy:o,middlewareData:h,rects:c,platform:r,elements:{reference:t,floating:e}});u=null!=w?w:u,m=null!=y?y:m,h={...h,[a]:{...h[a],...v}},x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await r.getElementRects({reference:t,floating:e,strategy:o}):x.rects),{x:u,y:m}=l(c,p,f)),i=-1)}return{x:u,y:m,placement:p,strategy:o,middlewareData:h}};async function a(t,e){var i;void 0===e&&(e={});let{x:l,y:o,platform:a,rects:r,elements:s,strategy:f}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:p=!1,padding:h=0}=(0,n.ku)(e,t),g=(0,n.yd)(h),d=s[p?"floating"===m?"reference":"floating":m],w=(0,n.JB)(await a.getClippingRect({element:null==(i=await (null==a.isElement?void 0:a.isElement(d)))||i?d:d.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:f})),y="floating"===m?{x:l,y:o,width:r.floating.width,height:r.floating.height}:r.reference,v=await (null==a.getOffsetParent?void 0:a.getOffsetParent(s.floating)),x=await (null==a.isElement?void 0:a.isElement(v))&&await (null==a.getScale?void 0:a.getScale(v))||{x:1,y:1},b=(0,n.JB)(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:v,strategy:f}):y);return{top:(w.top-b.top+g.top)/x.y,bottom:(b.bottom-w.bottom+g.bottom)/x.y,left:(w.left-b.left+g.left)/x.x,right:(b.right-w.right+g.right)/x.x}}let r=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,l,o,r,s;let{placement:f,middlewareData:c,rects:u,initialPlacement:m,platform:p,elements:h}=e,{mainAxis:g=!0,crossAxis:d=!0,fallbackPlacements:w,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...b}=(0,n.ku)(t,e);if(null!=(i=c.arrow)&&i.alignmentOffset)return{};let k=(0,n.k3)(f),R=(0,n.Qq)(m),A=(0,n.k3)(m)===m,E=await (null==p.isRTL?void 0:p.isRTL(h.floating)),T=w||(A||!x?[(0,n.pw)(m)]:(0,n.gy)(m)),V="none"!==v;!w&&V&&T.push(...(0,n.KX)(m,x,v,E));let F=[m,...T],L=await a(e,b),q=[],P=(null==(l=c.flip)?void 0:l.overflows)||[];if(g&&q.push(L[k]),d){let t=(0,n.i8)(f,u,E);q.push(L[t[0]],L[t[1]])}if(P=[...P,{placement:f,overflows:q}],!q.every(t=>t<=0)){let t=((null==(o=c.flip)?void 0:o.index)||0)+1,e=F[t];if(e)return{data:{index:t,overflows:P},reset:{placement:e}};let i=null==(r=P.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:r.placement;if(!i)switch(y){case"bestFit":{let t=null==(s=P.filter(t=>{if(V){let e=(0,n.Qq)(t.placement);return e===R||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:s[0];t&&(i=t);break}case"initialPlacement":i=m}if(f!==i)return{reset:{placement:i}}}return{}}}};async function s(t,e){let{placement:i,platform:l,elements:o}=t,a=await (null==l.isRTL?void 0:l.isRTL(o.floating)),r=(0,n.k3)(i),s=(0,n.hp)(i),f="y"===(0,n.Qq)(i),c=["left","top"].includes(r)?-1:1,u=a&&f?-1:1,m=(0,n.ku)(e,t),{mainAxis:p,crossAxis:h,alignmentAxis:g}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return s&&"number"==typeof g&&(h="end"===s?-1*g:g),f?{x:h*u,y:p*c}:{x:p*c,y:h*u}}let f=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,n;let{x:l,y:o,placement:a,middlewareData:r}=e,f=await s(e,t);return a===(null==(i=r.offset)?void 0:i.placement)&&null!=(n=r.arrow)&&n.alignmentOffset?{}:{x:l+f.x,y:o+f.y,data:{...f,placement:a}}}}},c=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:i,y:l,placement:o}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...c}=(0,n.ku)(t,e),u={x:i,y:l},m=await a(e,c),p=(0,n.Qq)((0,n.k3)(o)),h=(0,n.Rn)(p),g=u[h],d=u[p];if(r){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",i=g+m[t],l=g-m[e];g=(0,n.uZ)(i,g,l)}if(s){let t="y"===p?"top":"left",e="y"===p?"bottom":"right",i=d+m[t],l=d-m[e];d=(0,n.uZ)(i,d,l)}let w=f.fn({...e,[h]:g,[p]:d});return{...w,data:{x:w.x-i,y:w.y-l}}}}},u=function(t){return void 0===t&&(t={}),{options:t,fn(e){let{x:i,y:l,placement:o,rects:a,middlewareData:r}=e,{offset:s=0,mainAxis:f=!0,crossAxis:c=!0}=(0,n.ku)(t,e),u={x:i,y:l},m=(0,n.Qq)(o),p=(0,n.Rn)(m),h=u[p],g=u[m],d=(0,n.ku)(s,e),w="number"==typeof d?{mainAxis:d,crossAxis:0}:{mainAxis:0,crossAxis:0,...d};if(f){let t="y"===p?"height":"width",e=a.reference[p]-a.floating[t]+w.mainAxis,i=a.reference[p]+a.reference[t]-w.mainAxis;h<e?h=e:h>i&&(h=i)}if(c){var y,v;let t="y"===p?"width":"height",e=["top","left"].includes((0,n.k3)(o)),i=a.reference[m]-a.floating[t]+(e&&(null==(y=r.offset)?void 0:y[m])||0)+(e?0:w.crossAxis),l=a.reference[m]+a.reference[t]+(e?0:(null==(v=r.offset)?void 0:v[m])||0)-(e?w.crossAxis:0);g<i?g=i:g>l&&(g=l)}return{[p]:h,[m]:g}}}},m=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){let i,l;let{placement:o,rects:r,platform:s,elements:f}=e,{apply:c=()=>{},...u}=(0,n.ku)(t,e),m=await a(e,u),p=(0,n.k3)(o),h=(0,n.hp)(o),g="y"===(0,n.Qq)(o),{width:d,height:w}=r.floating;"top"===p||"bottom"===p?(i=p,l=h===(await (null==s.isRTL?void 0:s.isRTL(f.floating))?"start":"end")?"left":"right"):(l=p,i="end"===h?"top":"bottom");let y=w-m.top-m.bottom,v=d-m.left-m.right,x=(0,n.VV)(w-m[i],y),b=(0,n.VV)(d-m[l],v),k=!e.middlewareData.shift,R=x,A=b;if(g?A=h||k?(0,n.VV)(b,v):v:R=h||k?(0,n.VV)(x,y):y,k&&!h){let t=(0,n.Fp)(m.left,0),e=(0,n.Fp)(m.right,0),i=(0,n.Fp)(m.top,0),l=(0,n.Fp)(m.bottom,0);g?A=d-2*(0!==t||0!==e?t+e:(0,n.Fp)(m.left,m.right)):R=w-2*(0!==i||0!==l?i+l:(0,n.Fp)(m.top,m.bottom))}await c({...e,availableWidth:A,availableHeight:R});let E=await s.getDimensions(f.floating);return d!==E.width||w!==E.height?{reset:{rects:!0}}:{}}}}}}]);