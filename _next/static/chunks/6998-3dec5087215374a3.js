"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6998],{86998:function(e,t,n){var o=n(22988),d=n(8620),a=n(42897),r=n(57111),s=n(82546),l=n(84179),i=n(41088),c=n(71227),p=n(87648),u=n(12475),y=n(56800),f=n.n(y),v=n(40882),g=n(28884),h=n(67638),K=n(2265),N=n(87515),k=n(61013),Z=n(57474),E=n(35979),x=n(12916),C=n(42317),D=n(91812),S=n(69711),P=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,s.Z)(this,n);for(var o=arguments.length,d=Array(o),l=0;l<o;l++)d[l]=arguments[l];return e=t.call.apply(t,[this].concat(d)),(0,u.Z)((0,i.Z)(e),"destroyed",!1),(0,u.Z)((0,i.Z)(e),"delayedDragEnterLogic",void 0),(0,u.Z)((0,i.Z)(e),"loadingRetryTimes",{}),(0,u.Z)((0,i.Z)(e),"state",{keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null,fieldNames:(0,S.w$)()}),(0,u.Z)((0,i.Z)(e),"dragStartMousePosition",null),(0,u.Z)((0,i.Z)(e),"dragNode",void 0),(0,u.Z)((0,i.Z)(e),"currentMouseOverDroppableNodeKey",null),(0,u.Z)((0,i.Z)(e),"listRef",K.createRef()),(0,u.Z)((0,i.Z)(e),"onNodeDragStart",function(t,n){var o=e.state,d=o.expandedKeys,a=o.keyEntities,r=e.props.onDragStart,s=n.props.eventKey;e.dragNode=n,e.dragStartMousePosition={x:t.clientX,y:t.clientY};var l=(0,x._5)(d,s);e.setState({draggingNodeKey:s,dragChildrenKeys:(0,x.wA)(s,a),indent:e.listRef.current.getIndentWidth()}),e.setExpandedKeys(l),window.addEventListener("dragend",e.onWindowDragEnd),null==r||r({event:t,node:(0,S.F)(n.props)})}),(0,u.Z)((0,i.Z)(e),"onNodeDragEnter",function(t,n){var o=e.state,d=o.expandedKeys,a=o.keyEntities,s=o.dragChildrenKeys,l=o.flattenNodes,c=o.indent,p=e.props,u=p.onDragEnter,y=p.onExpand,f=p.allowDrop,v=p.direction,g=n.props,h=g.pos,K=g.eventKey,N=(0,i.Z)(e).dragNode;if(e.currentMouseOverDroppableNodeKey!==K&&(e.currentMouseOverDroppableNodeKey=K),!N){e.resetDragState();return}var k=(0,x.OM)(t,N,n,c,e.dragStartMousePosition,f,l,a,d,v),Z=k.dropPosition,E=k.dropLevelOffset,C=k.dropTargetKey,P=k.dropContainerKey,m=k.dropTargetPos,b=k.dropAllowed,L=k.dragOverNodeKey;if(-1!==s.indexOf(C)||!b||(e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach(function(t){clearTimeout(e.delayedDragEnterLogic[t])}),N.props.eventKey!==n.props.eventKey&&(t.persist(),e.delayedDragEnterLogic[h]=window.setTimeout(function(){if(null!==e.state.draggingNodeKey){var o=(0,r.Z)(d),s=(0,D.Z)(a,n.props.eventKey);s&&(s.children||[]).length&&(o=(0,x.L0)(d,n.props.eventKey)),"expandedKeys"in e.props||e.setExpandedKeys(o),null==y||y(o,{node:(0,S.F)(n.props),expanded:!0,nativeEvent:t.nativeEvent})}},800)),N.props.eventKey===C&&0===E)){e.resetDragState();return}e.setState({dragOverNodeKey:L,dropPosition:Z,dropLevelOffset:E,dropTargetKey:C,dropContainerKey:P,dropTargetPos:m,dropAllowed:b}),null==u||u({event:t,node:(0,S.F)(n.props),expandedKeys:d})}),(0,u.Z)((0,i.Z)(e),"onNodeDragOver",function(t,n){var o=e.state,d=o.dragChildrenKeys,a=o.flattenNodes,r=o.keyEntities,s=o.expandedKeys,l=o.indent,c=e.props,p=c.onDragOver,u=c.allowDrop,y=c.direction,f=(0,i.Z)(e).dragNode;if(f){var v=(0,x.OM)(t,f,n,l,e.dragStartMousePosition,u,a,r,s,y),g=v.dropPosition,h=v.dropLevelOffset,K=v.dropTargetKey,N=v.dropContainerKey,k=v.dropAllowed,Z=v.dropTargetPos,E=v.dragOverNodeKey;-1===d.indexOf(K)&&k&&(f.props.eventKey===K&&0===h?null===e.state.dropPosition&&null===e.state.dropLevelOffset&&null===e.state.dropTargetKey&&null===e.state.dropContainerKey&&null===e.state.dropTargetPos&&!1===e.state.dropAllowed&&null===e.state.dragOverNodeKey||e.resetDragState():g===e.state.dropPosition&&h===e.state.dropLevelOffset&&K===e.state.dropTargetKey&&N===e.state.dropContainerKey&&Z===e.state.dropTargetPos&&k===e.state.dropAllowed&&E===e.state.dragOverNodeKey||e.setState({dropPosition:g,dropLevelOffset:h,dropTargetKey:K,dropContainerKey:N,dropTargetPos:Z,dropAllowed:k,dragOverNodeKey:E}),null==p||p({event:t,node:(0,S.F)(n.props)}))}}),(0,u.Z)((0,i.Z)(e),"onNodeDragLeave",function(t,n){e.currentMouseOverDroppableNodeKey!==n.props.eventKey||t.currentTarget.contains(t.relatedTarget)||(e.resetDragState(),e.currentMouseOverDroppableNodeKey=null);var o=e.props.onDragLeave;null==o||o({event:t,node:(0,S.F)(n.props)})}),(0,u.Z)((0,i.Z)(e),"onWindowDragEnd",function(t){e.onNodeDragEnd(t,null,!0),window.removeEventListener("dragend",e.onWindowDragEnd)}),(0,u.Z)((0,i.Z)(e),"onNodeDragEnd",function(t,n){var o=e.props.onDragEnd;e.setState({dragOverNodeKey:null}),e.cleanDragState(),null==o||o({event:t,node:(0,S.F)(n.props)}),e.dragNode=null,window.removeEventListener("dragend",e.onWindowDragEnd)}),(0,u.Z)((0,i.Z)(e),"onNodeDrop",function(t,n){var o,d=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.state,s=r.dragChildrenKeys,l=r.dropPosition,i=r.dropTargetKey,c=r.dropTargetPos;if(r.dropAllowed){var p=e.props.onDrop;if(e.setState({dragOverNodeKey:null}),e.cleanDragState(),null!==i){var u=(0,a.Z)((0,a.Z)({},(0,S.H8)(i,e.getTreeNodeRequiredProps())),{},{active:(null===(o=e.getActiveItem())||void 0===o?void 0:o.key)===i,data:(0,D.Z)(e.state.keyEntities,i).node}),y=-1!==s.indexOf(i);(0,h.ZP)(!y,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var f=(0,x.yx)(c),v={event:t,node:(0,S.F)(u),dragNode:e.dragNode?(0,S.F)(e.dragNode.props):null,dragNodesKeys:[e.dragNode.props.eventKey].concat(s),dropToGap:0!==l,dropPosition:l+Number(f[f.length-1])};d||null==p||p(v),e.dragNode=null}}}),(0,u.Z)((0,i.Z)(e),"cleanDragState",function(){null!==e.state.draggingNodeKey&&e.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),e.dragStartMousePosition=null,e.currentMouseOverDroppableNodeKey=null}),(0,u.Z)((0,i.Z)(e),"triggerExpandActionExpand",function(t,n){var o=e.state,d=o.expandedKeys,r=o.flattenNodes,s=n.expanded,l=n.key;if(!n.isLeaf&&!t.shiftKey&&!t.metaKey&&!t.ctrlKey){var i=r.filter(function(e){return e.key===l})[0],c=(0,S.F)((0,a.Z)((0,a.Z)({},(0,S.H8)(l,e.getTreeNodeRequiredProps())),{},{data:i.data}));e.setExpandedKeys(s?(0,x._5)(d,l):(0,x.L0)(d,l)),e.onNodeExpand(t,c)}}),(0,u.Z)((0,i.Z)(e),"onNodeClick",function(t,n){var o=e.props,d=o.onClick;"click"===o.expandAction&&e.triggerExpandActionExpand(t,n),null==d||d(t,n)}),(0,u.Z)((0,i.Z)(e),"onNodeDoubleClick",function(t,n){var o=e.props,d=o.onDoubleClick;"doubleClick"===o.expandAction&&e.triggerExpandActionExpand(t,n),null==d||d(t,n)}),(0,u.Z)((0,i.Z)(e),"onNodeSelect",function(t,n){var o=e.state.selectedKeys,d=e.state,a=d.keyEntities,r=d.fieldNames,s=e.props,l=s.onSelect,i=s.multiple,c=n.selected,p=n[r.key],u=!c,y=(o=u?i?(0,x.L0)(o,p):[p]:(0,x._5)(o,p)).map(function(e){var t=(0,D.Z)(a,e);return t?t.node:null}).filter(function(e){return e});e.setUncontrolledState({selectedKeys:o}),null==l||l(o,{event:"select",selected:u,node:n,selectedNodes:y,nativeEvent:t.nativeEvent})}),(0,u.Z)((0,i.Z)(e),"onNodeCheck",function(t,n,o){var d,a=e.state,s=a.keyEntities,l=a.checkedKeys,i=a.halfCheckedKeys,c=e.props,p=c.checkStrictly,u=c.onCheck,y=n.key,f={event:"check",node:n,checked:o,nativeEvent:t.nativeEvent};if(p){var v=o?(0,x.L0)(l,y):(0,x._5)(l,y);d={checked:v,halfChecked:(0,x._5)(i,y)},f.checkedNodes=v.map(function(e){return(0,D.Z)(s,e)}).filter(function(e){return e}).map(function(e){return e.node}),e.setUncontrolledState({checkedKeys:v})}else{var g=(0,C.S)([].concat((0,r.Z)(l),[y]),!0,s),h=g.checkedKeys,K=g.halfCheckedKeys;if(!o){var N=new Set(h);N.delete(y);var k=(0,C.S)(Array.from(N),{checked:!1,halfCheckedKeys:K},s);h=k.checkedKeys,K=k.halfCheckedKeys}d=h,f.checkedNodes=[],f.checkedNodesPositions=[],f.halfCheckedKeys=K,h.forEach(function(e){var t=(0,D.Z)(s,e);if(t){var n=t.node,o=t.pos;f.checkedNodes.push(n),f.checkedNodesPositions.push({node:n,pos:o})}}),e.setUncontrolledState({checkedKeys:h},!1,{halfCheckedKeys:K})}null==u||u(d,f)}),(0,u.Z)((0,i.Z)(e),"onNodeLoad",function(t){var n,o=t.key,d=e.state.keyEntities,a=(0,D.Z)(d,o);if(null==a||null===(n=a.children)||void 0===n||!n.length){var r=new Promise(function(n,d){e.setState(function(a){var r=a.loadedKeys,s=a.loadingKeys,l=void 0===s?[]:s,i=e.props,c=i.loadData,p=i.onLoad;return c&&-1===(void 0===r?[]:r).indexOf(o)&&-1===l.indexOf(o)?(c(t).then(function(){var d=e.state.loadedKeys,a=(0,x.L0)(d,o);null==p||p(a,{event:"load",node:t}),e.setUncontrolledState({loadedKeys:a}),e.setState(function(e){return{loadingKeys:(0,x._5)(e.loadingKeys,o)}}),n()}).catch(function(t){if(e.setState(function(e){return{loadingKeys:(0,x._5)(e.loadingKeys,o)}}),e.loadingRetryTimes[o]=(e.loadingRetryTimes[o]||0)+1,e.loadingRetryTimes[o]>=10){var a=e.state.loadedKeys;(0,h.ZP)(!1,"Retry for `loadData` many times but still failed. No more retry."),e.setUncontrolledState({loadedKeys:(0,x.L0)(a,o)}),n()}d(t)}),{loadingKeys:(0,x.L0)(l,o)}):null})});return r.catch(function(){}),r}}),(0,u.Z)((0,i.Z)(e),"onNodeMouseEnter",function(t,n){var o=e.props.onMouseEnter;null==o||o({event:t,node:n})}),(0,u.Z)((0,i.Z)(e),"onNodeMouseLeave",function(t,n){var o=e.props.onMouseLeave;null==o||o({event:t,node:n})}),(0,u.Z)((0,i.Z)(e),"onNodeContextMenu",function(t,n){var o=e.props.onRightClick;o&&(t.preventDefault(),o({event:t,node:n}))}),(0,u.Z)((0,i.Z)(e),"onFocus",function(){var t=e.props.onFocus;e.setState({focused:!0});for(var n=arguments.length,o=Array(n),d=0;d<n;d++)o[d]=arguments[d];null==t||t.apply(void 0,o)}),(0,u.Z)((0,i.Z)(e),"onBlur",function(){var t=e.props.onBlur;e.setState({focused:!1}),e.onActiveChange(null);for(var n=arguments.length,o=Array(n),d=0;d<n;d++)o[d]=arguments[d];null==t||t.apply(void 0,o)}),(0,u.Z)((0,i.Z)(e),"getTreeNodeRequiredProps",function(){var t=e.state;return{expandedKeys:t.expandedKeys||[],selectedKeys:t.selectedKeys||[],loadedKeys:t.loadedKeys||[],loadingKeys:t.loadingKeys||[],checkedKeys:t.checkedKeys||[],halfCheckedKeys:t.halfCheckedKeys||[],dragOverNodeKey:t.dragOverNodeKey,dropPosition:t.dropPosition,keyEntities:t.keyEntities}}),(0,u.Z)((0,i.Z)(e),"setExpandedKeys",function(t){var n=e.state,o=n.treeData,d=n.fieldNames,a=(0,S.oH)(o,t,d);e.setUncontrolledState({expandedKeys:t,flattenNodes:a},!0)}),(0,u.Z)((0,i.Z)(e),"onNodeExpand",function(t,n){var o=e.state.expandedKeys,d=e.state,a=d.listChanging,r=d.fieldNames,s=e.props,l=s.onExpand,i=s.loadData,c=n.expanded,p=n[r.key];if(!a){var u=o.indexOf(p),y=!c;if((0,h.ZP)(c&&-1!==u||!c&&-1===u,"Expand state not sync with index check"),o=y?(0,x.L0)(o,p):(0,x._5)(o,p),e.setExpandedKeys(o),null==l||l(o,{node:n,expanded:y,nativeEvent:t.nativeEvent}),y&&i){var f=e.onNodeLoad(n);f&&f.then(function(){var t=(0,S.oH)(e.state.treeData,o,r);e.setUncontrolledState({flattenNodes:t})}).catch(function(){var t=e.state.expandedKeys,n=(0,x._5)(t,p);e.setExpandedKeys(n)})}}}),(0,u.Z)((0,i.Z)(e),"onListChangeStart",function(){e.setUncontrolledState({listChanging:!0})}),(0,u.Z)((0,i.Z)(e),"onListChangeEnd",function(){setTimeout(function(){e.setUncontrolledState({listChanging:!1})})}),(0,u.Z)((0,i.Z)(e),"onActiveChange",function(t){var n=e.state.activeKey,o=e.props,d=o.onActiveChange,a=o.itemScrollOffset;n!==t&&(e.setState({activeKey:t}),null!==t&&e.scrollTo({key:t,offset:void 0===a?0:a}),null==d||d(t))}),(0,u.Z)((0,i.Z)(e),"getActiveItem",function(){var t=e.state,n=t.activeKey,o=t.flattenNodes;return null===n?null:o.find(function(e){return e.key===n})||null}),(0,u.Z)((0,i.Z)(e),"offsetActiveKey",function(t){var n=e.state,o=n.flattenNodes,d=n.activeKey,a=o.findIndex(function(e){return e.key===d});-1===a&&t<0&&(a=o.length),a=(a+t+o.length)%o.length;var r=o[a];if(r){var s=r.key;e.onActiveChange(s)}else e.onActiveChange(null)}),(0,u.Z)((0,i.Z)(e),"onKeyDown",function(t){var n=e.state,o=n.activeKey,d=n.expandedKeys,r=n.checkedKeys,s=n.fieldNames,l=e.props,i=l.onKeyDown,c=l.checkable,p=l.selectable;switch(t.which){case v.Z.UP:e.offsetActiveKey(-1),t.preventDefault();break;case v.Z.DOWN:e.offsetActiveKey(1),t.preventDefault()}var u=e.getActiveItem();if(u&&u.data){var y=e.getTreeNodeRequiredProps(),f=!1===u.data.isLeaf||!!(u.data[s.children]||[]).length,g=(0,S.F)((0,a.Z)((0,a.Z)({},(0,S.H8)(o,y)),{},{data:u.data,active:!0}));switch(t.which){case v.Z.LEFT:f&&d.includes(o)?e.onNodeExpand({},g):u.parent&&e.onActiveChange(u.parent.key),t.preventDefault();break;case v.Z.RIGHT:f&&!d.includes(o)?e.onNodeExpand({},g):u.children&&u.children.length&&e.onActiveChange(u.children[0].key),t.preventDefault();break;case v.Z.ENTER:case v.Z.SPACE:!c||g.disabled||!1===g.checkable||g.disableCheckbox?c||!p||g.disabled||!1===g.selectable||e.onNodeSelect({},g):e.onNodeCheck({},g,!r.includes(o))}}null==i||i(t)}),(0,u.Z)((0,i.Z)(e),"setUncontrolledState",function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e.destroyed){var d=!1,r=!0,s={};Object.keys(t).forEach(function(n){if(n in e.props){r=!1;return}d=!0,s[n]=t[n]}),d&&(!n||r)&&e.setState((0,a.Z)((0,a.Z)({},s),o))}}),(0,u.Z)((0,i.Z)(e),"scrollTo",function(t){e.listRef.current.scrollTo(t)}),e}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){this.destroyed=!1,this.onUpdated()}},{key:"componentDidUpdate",value:function(){this.onUpdated()}},{key:"onUpdated",value:function(){var e=this.props,t=e.activeKey,n=e.itemScrollOffset;void 0!==t&&t!==this.state.activeKey&&(this.setState({activeKey:t}),null!==t&&this.scrollTo({key:t,offset:void 0===n?0:n}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"resetDragState",value:function(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}},{key:"render",value:function(){var e,t=this.state,n=t.focused,a=t.flattenNodes,r=t.keyEntities,s=t.draggingNodeKey,l=t.activeKey,i=t.dropLevelOffset,c=t.dropContainerKey,p=t.dropTargetKey,y=t.dropPosition,v=t.dragOverNodeKey,h=t.indent,k=this.props,E=k.prefixCls,x=k.className,C=k.style,D=k.showLine,S=k.focusable,P=k.tabIndex,m=k.selectable,b=k.showIcon,L=k.icon,w=k.switcherIcon,O=k.draggable,T=k.checkable,A=k.checkStrictly,M=k.disabled,R=k.motion,I=k.loadData,F=k.filterTreeNode,U=k.height,_=k.itemHeight,H=k.virtual,W=k.titleRender,B=k.dropIndicatorRender,q=k.onContextMenu,j=k.onScroll,G=k.direction,$=k.rootClassName,z=k.rootStyle,X=(0,g.Z)(this.props,{aria:!0,data:!0});return O&&(e="object"===(0,d.Z)(O)?O:"function"==typeof O?{nodeDraggable:O}:{}),K.createElement(N.k.Provider,{value:{prefixCls:E,selectable:m,showIcon:b,icon:L,switcherIcon:w,draggable:e,draggingNodeKey:s,checkable:T,checkStrictly:A,disabled:M,keyEntities:r,dropLevelOffset:i,dropContainerKey:c,dropTargetKey:p,dropPosition:y,dragOverNodeKey:v,indent:h,direction:G,dropIndicatorRender:B,loadData:I,filterTreeNode:F,titleRender:W,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop}},K.createElement("div",{role:"tree",className:f()(E,x,$,(0,u.Z)((0,u.Z)((0,u.Z)({},"".concat(E,"-show-line"),D),"".concat(E,"-focused"),n),"".concat(E,"-active-focused"),null!==l)),style:z},K.createElement(Z.ZP,(0,o.Z)({ref:this.listRef,prefixCls:E,style:C,data:a,disabled:M,selectable:m,checkable:!!T,motion:R,dragging:null!==s,height:U,itemHeight:_,virtual:H,focusable:S,focused:n,tabIndex:void 0===P?0:P,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:q,onScroll:j},this.getTreeNodeRequiredProps(),X))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,o,d=t.prevProps,r={prevProps:e};function s(t){return!d&&t in e||d&&d[t]!==e[t]}var l=t.fieldNames;if(s("fieldNames")&&(l=(0,S.w$)(e.fieldNames),r.fieldNames=l),s("treeData")?n=e.treeData:s("children")&&((0,h.ZP)(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),n=(0,S.zn)(e.children)),n){r.treeData=n;var i=(0,S.I8)(n,{fieldNames:l});r.keyEntities=(0,a.Z)((0,u.Z)({},Z.eo,Z._1),i.keyEntities)}var c=r.keyEntities||t.keyEntities;if(s("expandedKeys")||d&&s("autoExpandParent"))r.expandedKeys=e.autoExpandParent||!d&&e.defaultExpandParent?(0,x.r7)(e.expandedKeys,c):e.expandedKeys;else if(!d&&e.defaultExpandAll){var p=(0,a.Z)({},c);delete p[Z.eo],r.expandedKeys=Object.keys(p).map(function(e){return p[e].key})}else!d&&e.defaultExpandedKeys&&(r.expandedKeys=e.autoExpandParent||e.defaultExpandParent?(0,x.r7)(e.defaultExpandedKeys,c):e.defaultExpandedKeys);if(r.expandedKeys||delete r.expandedKeys,n||r.expandedKeys){var y=(0,S.oH)(n||t.treeData,r.expandedKeys||t.expandedKeys,l);r.flattenNodes=y}if(e.selectable&&(s("selectedKeys")?r.selectedKeys=(0,x.BT)(e.selectedKeys,e):!d&&e.defaultSelectedKeys&&(r.selectedKeys=(0,x.BT)(e.defaultSelectedKeys,e))),e.checkable&&(s("checkedKeys")?o=(0,x.E6)(e.checkedKeys)||{}:!d&&e.defaultCheckedKeys?o=(0,x.E6)(e.defaultCheckedKeys)||{}:n&&(o=(0,x.E6)(e.checkedKeys)||{checkedKeys:t.checkedKeys,halfCheckedKeys:t.halfCheckedKeys}),o)){var f=o,v=f.checkedKeys,g=void 0===v?[]:v,K=f.halfCheckedKeys,N=void 0===K?[]:K;if(!e.checkStrictly){var k=(0,C.S)(g,!0,c);g=k.checkedKeys,N=k.halfCheckedKeys}r.checkedKeys=g,r.halfCheckedKeys=N}return s("loadedKeys")&&(r.loadedKeys=e.loadedKeys),r}}]),n}(K.Component);(0,u.Z)(P,"defaultProps",{prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:k.Z,allowDrop:function(){return!0},expandAction:!1}),(0,u.Z)(P,"TreeNode",E.Z),t.Z=P}}]);