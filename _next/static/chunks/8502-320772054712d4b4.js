"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8502],{1883:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(2265);function a(e){var t=e.dropPosition,n=e.dropLevelOffset,a=e.indent,r={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(t){case -1:r.top=0,r.left=-n*a;break;case 1:r.bottom=0,r.left=-n*a;break;case 0:r.bottom=0,r.left=a}return o.createElement("div",{style:r})}},12889:function(e,t,n){n.d(t,{eo:function(){return N},_1:function(){return D},ZP:function(){return L}});var o=n(21605),a=n(36362),r=n(45673),c=n(5147),i=n(25701),s=n(61574),d=n(2265),l=n(9838),p=n.n(l),u=n(79750),f=n(87828),h=n(1153),v=n(10767),g=n(803),Z=["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"],m=function(e,t){var n=e.className,s=e.style,l=e.motion,m=e.motionNodes,y=e.motionType,k=e.onMotionStart,b=e.onMotionEnd,x=e.active,E=e.treeNodeRequiredProps,N=(0,c.Z)(e,Z),C=d.useState(!0),D=(0,r.Z)(C,2),S=D[0],K=D[1],M=d.useContext(f.k).prefixCls,w=m&&"hide"!==y;(0,i.Z)(function(){m&&w!==S&&K(w)},[m]);var L=d.useRef(!1),I=function(){m&&!L.current&&(L.current=!0,b())};return((0,v.Z)(function(){m&&k()},I),m)?d.createElement(u.ZP,(0,o.Z)({ref:t,visible:S},l,{motionAppear:"show"===y,onVisibleChanged:function(e){w===e&&I()}}),function(e,t){var n=e.className,r=e.style;return d.createElement("div",{ref:t,className:p()("".concat(M,"-treenode-motion"),n),style:r},m.map(function(e){var t=Object.assign({},((0,a.Z)(e.data),e.data)),n=e.title,r=e.key,c=e.isStart,i=e.isEnd;delete t.children;var s=(0,g.H8)(r,E);return d.createElement(h.Z,(0,o.Z)({},t,s,{title:n,active:x,data:e.data,key:r,isStart:c,isEnd:i}))}))}):d.createElement(h.Z,(0,o.Z)({domRef:t,className:n,style:s},N,{active:x}))};m.displayName="MotionTreeNode";var y=d.forwardRef(m),k=n(26833),b=["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"],x={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},E=function(){},N="RC_TREE_MOTION_".concat(Math.random()),C={key:N},D={key:N,level:0,index:0,pos:"0",node:C,nodes:[C]},S={parent:null,children:[],pos:D.pos,data:C,title:null,key:N,isStart:[],isEnd:[]};function K(e,t,n,o){return!1!==t&&n?e.slice(0,Math.ceil(n/o)+1):e}function M(e){var t=e.key,n=e.pos;return(0,g.km)(t,n)}var w=d.forwardRef(function(e,t){var n=e.prefixCls,l=e.data,p=(e.selectable,e.checkable,e.expandedKeys),u=e.selectedKeys,f=e.checkedKeys,h=e.loadedKeys,v=e.loadingKeys,Z=e.halfCheckedKeys,m=e.keyEntities,C=e.disabled,D=e.dragging,w=e.dragOverNodeKey,L=e.dropPosition,I=e.motion,O=e.height,H=e.itemHeight,P=e.virtual,R=e.focusable,T=e.activeItem,F=e.focused,_=e.tabIndex,B=e.onKeyDown,A=e.onFocus,G=e.onBlur,q=e.onActiveChange,j=e.onListChangeStart,U=e.onListChangeEnd,V=(0,c.Z)(e,b),W=d.useRef(null),z=d.useRef(null);d.useImperativeHandle(t,function(){return{scrollTo:function(e){W.current.scrollTo(e)},getIndentWidth:function(){return z.current.offsetWidth}}});var J=d.useState(p),Q=(0,r.Z)(J,2),X=Q[0],Y=Q[1],$=d.useState(l),ee=(0,r.Z)($,2),et=ee[0],en=ee[1],eo=d.useState(l),ea=(0,r.Z)(eo,2),er=ea[0],ec=ea[1],ei=d.useState([]),es=(0,r.Z)(ei,2),ed=es[0],el=es[1],ep=d.useState(null),eu=(0,r.Z)(ep,2),ef=eu[0],eh=eu[1],ev=d.useRef(l);function eg(){var e=ev.current;en(e),ec(e),el([]),eh(null),U()}ev.current=l,(0,i.Z)(function(){Y(p);var e=(0,k.U)(X,p);if(null!==e.key){if(e.add){var t=et.findIndex(function(t){return t.key===e.key}),n=K((0,k.l)(et,l,e.key),P,O,H),o=et.slice();o.splice(t+1,0,S),ec(o),el(n),eh("show")}else{var a=l.findIndex(function(t){return t.key===e.key}),r=K((0,k.l)(l,et,e.key),P,O,H),c=l.slice();c.splice(a+1,0,S),ec(c),el(r),eh("hide")}}else et!==l&&(en(l),ec(l))},[p,l]),d.useEffect(function(){D||eg()},[D]);var eZ=I?er:l,em={expandedKeys:p,selectedKeys:u,loadedKeys:h,loadingKeys:v,checkedKeys:f,halfCheckedKeys:Z,dragOverNodeKey:w,dropPosition:L,keyEntities:m};return d.createElement(d.Fragment,null,F&&T&&d.createElement("span",{style:x,"aria-live":"assertive"},function(e){for(var t=String(e.data.key),n=e;n.parent;)n=n.parent,t="".concat(n.data.key," > ").concat(t);return t}(T)),d.createElement("div",null,d.createElement("input",{style:x,disabled:!1===R||C,tabIndex:!1!==R?_:null,onKeyDown:B,onFocus:A,onBlur:G,value:"",onChange:E,"aria-label":"for screen reader"})),d.createElement("div",{className:"".concat(n,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden",border:0,padding:0}},d.createElement("div",{className:"".concat(n,"-indent")},d.createElement("div",{ref:z,className:"".concat(n,"-indent-unit")}))),d.createElement(s.Z,(0,o.Z)({},V,{data:eZ,itemKey:M,height:O,fullHeight:!1,virtual:P,itemHeight:H,prefixCls:"".concat(n,"-list"),ref:W,onVisibleChange:function(e,t){var n=new Set(e);t.filter(function(e){return!n.has(e)}).some(function(e){return M(e)===N})&&eg()}}),function(e){var t=e.pos,n=Object.assign({},((0,a.Z)(e.data),e.data)),r=e.title,c=e.key,i=e.isStart,s=e.isEnd,l=(0,g.km)(c,t);delete n.key,delete n.children;var p=(0,g.H8)(l,em);return d.createElement(y,(0,o.Z)({},n,p,{title:r,active:!!T&&c===T.key,pos:t,data:e.data,isStart:i,isEnd:s,motion:I,motionNodes:c===N?ed:null,motionType:ef,onMotionStart:j,onMotionEnd:eg,treeNodeRequiredProps:em,onMouseMove:function(){q(null)}}))}))});w.displayName="NodeList";var L=w},1153:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(21605),a=n(5147),r=n(65677),c=n(6134),i=n(52352),s=n(88492),d=n(66814),l=n(58982),p=n(23771),u=n(9838),f=n.n(u),h=n(51989),v=n(2265),g=n(87828),Z=v.memo(function(e){for(var t=e.prefixCls,n=e.level,o=e.isStart,a=e.isEnd,r="".concat(t,"-indent-unit"),c=[],i=0;i<n;i+=1)c.push(v.createElement("span",{key:i,className:f()(r,(0,p.Z)((0,p.Z)({},"".concat(r,"-start"),o[i]),"".concat(r,"-end"),a[i]))}));return v.createElement("span",{"aria-hidden":"true",className:"".concat(t,"-indent")},c)}),m=n(66097),y=n(803),k=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],b="open",x="close",E=function(e){(0,d.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),(0,p.Z)((0,s.Z)(e),"state",{dragNodeHighlight:!1}),(0,p.Z)((0,s.Z)(e),"selectHandle",void 0),(0,p.Z)((0,s.Z)(e),"cacheIndent",void 0),(0,p.Z)((0,s.Z)(e),"onSelectorClick",function(t){(0,e.props.context.onNodeClick)(t,(0,y.F)(e.props)),e.isSelectable()?e.onSelect(t):e.onCheck(t)}),(0,p.Z)((0,s.Z)(e),"onSelectorDoubleClick",function(t){(0,e.props.context.onNodeDoubleClick)(t,(0,y.F)(e.props))}),(0,p.Z)((0,s.Z)(e),"onSelect",function(t){e.isDisabled()||(0,e.props.context.onNodeSelect)(t,(0,y.F)(e.props))}),(0,p.Z)((0,s.Z)(e),"onCheck",function(t){if(!e.isDisabled()){var n=e.props,o=n.disableCheckbox,a=n.checked,r=e.props.context.onNodeCheck;e.isCheckable()&&!o&&r(t,(0,y.F)(e.props),!a)}}),(0,p.Z)((0,s.Z)(e),"onMouseEnter",function(t){(0,e.props.context.onNodeMouseEnter)(t,(0,y.F)(e.props))}),(0,p.Z)((0,s.Z)(e),"onMouseLeave",function(t){(0,e.props.context.onNodeMouseLeave)(t,(0,y.F)(e.props))}),(0,p.Z)((0,s.Z)(e),"onContextMenu",function(t){(0,e.props.context.onNodeContextMenu)(t,(0,y.F)(e.props))}),(0,p.Z)((0,s.Z)(e),"onDragStart",function(t){var n=e.props.context.onNodeDragStart;t.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(t,(0,s.Z)(e));try{t.dataTransfer.setData("text/plain","")}catch(e){}}),(0,p.Z)((0,s.Z)(e),"onDragEnter",function(t){var n=e.props.context.onNodeDragEnter;t.preventDefault(),t.stopPropagation(),n(t,(0,s.Z)(e))}),(0,p.Z)((0,s.Z)(e),"onDragOver",function(t){var n=e.props.context.onNodeDragOver;t.preventDefault(),t.stopPropagation(),n(t,(0,s.Z)(e))}),(0,p.Z)((0,s.Z)(e),"onDragLeave",function(t){var n=e.props.context.onNodeDragLeave;t.stopPropagation(),n(t,(0,s.Z)(e))}),(0,p.Z)((0,s.Z)(e),"onDragEnd",function(t){var n=e.props.context.onNodeDragEnd;t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,s.Z)(e))}),(0,p.Z)((0,s.Z)(e),"onDrop",function(t){var n=e.props.context.onNodeDrop;t.preventDefault(),t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,s.Z)(e))}),(0,p.Z)((0,s.Z)(e),"onExpand",function(t){var n=e.props,o=n.loading,a=n.context.onNodeExpand;o||a(t,(0,y.F)(e.props))}),(0,p.Z)((0,s.Z)(e),"setSelectHandle",function(t){e.selectHandle=t}),(0,p.Z)((0,s.Z)(e),"getNodeState",function(){var t=e.props.expanded;return e.isLeaf()?null:t?b:x}),(0,p.Z)((0,s.Z)(e),"hasChildren",function(){var t=e.props.eventKey,n=e.props.context.keyEntities;return!!(((0,m.Z)(n,t)||{}).children||[]).length}),(0,p.Z)((0,s.Z)(e),"isLeaf",function(){var t=e.props,n=t.isLeaf,o=t.loaded,a=e.props.context.loadData,r=e.hasChildren();return!1!==n&&(n||!a&&!r||a&&o&&!r)}),(0,p.Z)((0,s.Z)(e),"isDisabled",function(){var t=e.props.disabled;return!!(e.props.context.disabled||t)}),(0,p.Z)((0,s.Z)(e),"isCheckable",function(){var t=e.props.checkable,n=e.props.context.checkable;return!!n&&!1!==t&&n}),(0,p.Z)((0,s.Z)(e),"syncLoadData",function(t){var n=t.expanded,o=t.loading,a=t.loaded,r=e.props.context,c=r.loadData,i=r.onNodeLoad;o||!c||!n||e.isLeaf()||a||i((0,y.F)(e.props))}),(0,p.Z)((0,s.Z)(e),"isDraggable",function(){var t=e.props,n=t.data,o=t.context.draggable;return!!(o&&(!o.nodeDraggable||o.nodeDraggable(n)))}),(0,p.Z)((0,s.Z)(e),"renderDragHandler",function(){var t=e.props.context,n=t.draggable,o=t.prefixCls;return null!=n&&n.icon?v.createElement("span",{className:"".concat(o,"-draggable-icon")},n.icon):null}),(0,p.Z)((0,s.Z)(e),"renderSwitcherIconDom",function(t){var n=e.props.switcherIcon,o=e.props.context.switcherIcon,a=n||o;return"function"==typeof a?a((0,r.Z)((0,r.Z)({},e.props),{},{isLeaf:t})):a}),(0,p.Z)((0,s.Z)(e),"renderSwitcher",function(){var t=e.props.expanded,n=e.props.context.prefixCls;if(e.isLeaf()){var o=e.renderSwitcherIconDom(!0);return!1!==o?v.createElement("span",{className:f()("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},o):null}var a=f()("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(t?b:x)),r=e.renderSwitcherIconDom(!1);return!1!==r?v.createElement("span",{onClick:e.onExpand,className:a},r):null}),(0,p.Z)((0,s.Z)(e),"renderCheckbox",function(){var t=e.props,n=t.checked,o=t.halfChecked,a=t.disableCheckbox,r=e.props.context.prefixCls,c=e.isDisabled(),i=e.isCheckable();return i?v.createElement("span",{className:f()("".concat(r,"-checkbox"),n&&"".concat(r,"-checkbox-checked"),!n&&o&&"".concat(r,"-checkbox-indeterminate"),(c||a)&&"".concat(r,"-checkbox-disabled")),onClick:e.onCheck},"boolean"!=typeof i?i:null):null}),(0,p.Z)((0,s.Z)(e),"renderIcon",function(){var t=e.props.loading,n=e.props.context.prefixCls;return v.createElement("span",{className:f()("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),t&&"".concat(n,"-icon_loading"))})}),(0,p.Z)((0,s.Z)(e),"renderSelector",function(){var t,n,o=e.state.dragNodeHighlight,a=e.props,r=a.title,c=void 0===r?"---":r,i=a.selected,s=a.icon,d=a.loading,l=a.data,p=e.props.context,u=p.prefixCls,h=p.showIcon,g=p.icon,Z=p.loadData,m=p.titleRender,y=e.isDisabled(),k="".concat(u,"-node-content-wrapper");if(h){var b=s||g;t=b?v.createElement("span",{className:f()("".concat(u,"-iconEle"),"".concat(u,"-icon__customize"))},"function"==typeof b?b(e.props):b):e.renderIcon()}else Z&&d&&(t=e.renderIcon());n="function"==typeof c?c(l):m?m(l):c;var x=v.createElement("span",{className:"".concat(u,"-title")},n);return v.createElement("span",{ref:e.setSelectHandle,title:"string"==typeof c?c:"",className:f()("".concat(k),"".concat(k,"-").concat(e.getNodeState()||"normal"),!y&&(i||o)&&"".concat(u,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},t,x,e.renderDropIndicator())}),(0,p.Z)((0,s.Z)(e),"renderDropIndicator",function(){var t=e.props,n=t.disabled,o=t.eventKey,a=e.props.context,r=a.draggable,c=a.dropLevelOffset,i=a.dropPosition,s=a.prefixCls,d=a.indent,l=a.dropIndicatorRender,p=a.dragOverNodeKey,u=a.direction,f=null!=d?d:e.cacheIndent;return e.cacheIndent=d,!n&&r&&p===o?l({dropPosition:i,dropLevelOffset:c,indent:f,prefixCls:s,direction:u}):null}),e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var e=this.props.selectable,t=this.props.context.selectable;return"boolean"==typeof e?e:t}},{key:"render",value:function(){var e,t=this.props,n=t.eventKey,r=t.className,c=t.style,i=t.dragOver,s=t.dragOverGapTop,d=t.dragOverGapBottom,l=t.isLeaf,u=t.isStart,g=t.isEnd,b=t.expanded,x=t.selected,E=t.checked,N=t.halfChecked,C=t.loading,D=t.domRef,S=t.active,K=(t.data,t.onMouseMove),M=t.selectable,w=(0,a.Z)(t,k),L=this.props.context,I=L.prefixCls,O=L.filterTreeNode,H=L.keyEntities,P=L.dropContainerKey,R=L.dropTargetKey,T=L.draggingNodeKey,F=this.isDisabled(),_=(0,h.Z)(w,{aria:!0,data:!0}),B=((0,m.Z)(H,n)||{}).level,A=g[g.length-1],G=this.isDraggable(),q=!F&&G,j=T===n;return v.createElement("div",(0,o.Z)({ref:D,className:f()(r,"".concat(I,"-treenode"),(e={},(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)(e,"".concat(I,"-treenode-disabled"),F),"".concat(I,"-treenode-switcher-").concat(b?"open":"close"),!l),"".concat(I,"-treenode-checkbox-checked"),E),"".concat(I,"-treenode-checkbox-indeterminate"),N),"".concat(I,"-treenode-selected"),x),"".concat(I,"-treenode-loading"),C),"".concat(I,"-treenode-active"),S),"".concat(I,"-treenode-leaf-last"),A),"".concat(I,"-treenode-draggable"),G),"dragging",j),(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)(e,"drop-target",R===n),"drop-container",P===n),"drag-over",!F&&i),"drag-over-gap-top",!F&&s),"drag-over-gap-bottom",!F&&d),"filter-node",O&&O((0,y.F)(this.props))))),style:c,draggable:q,"aria-grabbed":j,onDragStart:q?this.onDragStart:void 0,onDragEnter:G?this.onDragEnter:void 0,onDragOver:G?this.onDragOver:void 0,onDragLeave:G?this.onDragLeave:void 0,onDrop:G?this.onDrop:void 0,onDragEnd:G?this.onDragEnd:void 0,onMouseMove:K},void 0!==M?{"aria-selected":!!M}:void 0,_),v.createElement(Z,{prefixCls:I,level:B,isStart:u,isEnd:g}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),n}(v.Component),N=function(e){return v.createElement(g.k.Consumer,null,function(t){return v.createElement(E,(0,o.Z)({},e,{context:t}))})};N.displayName="TreeNode",N.isTreeNode=1;var C=N},87828:function(e,t,n){n.d(t,{k:function(){return o}});var o=n(2265).createContext(null)}}]);