"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2734],{82734:function(t,e,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function r(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==o(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}var s=n(2265),u=n(40833),l=n(99468).createFocusTrap,p=n(45505).isFocusable,f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,u=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=a(l);return t=e?Reflect.construct(n,arguments,a(this).constructor):n.apply(this,arguments),function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return r(t)}(this,t)});function l(t){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,l),e=r(i=u.call(this,t)),n="getNodeForOption",o=function(t){var e,n,o=null!==(e=this.internalOptions[t])&&void 0!==e?e:this.originalOptions[t];if("function"==typeof o){for(var i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];o=o.apply(void 0,r)}if(!0===o&&(o=void 0),!o){if(void 0===o||!1===o)return o;throw Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var c=o;if("string"==typeof o&&!(c=null===(n=this.getDocument())||void 0===n?void 0:n.querySelector(o)))throw Error("`".concat(t,"` as selector refers to no known node"));return c},(n=c(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,i.handleDeactivate=i.handleDeactivate.bind(r(i)),i.handlePostDeactivate=i.handlePostDeactivate.bind(r(i)),i.handleClickOutsideDeactivates=i.handleClickOutsideDeactivates.bind(r(i)),i.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:i.handleDeactivate,onPostDeactivate:i.handlePostDeactivate,clickOutsideDeactivates:i.handleClickOutsideDeactivates},i.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var e,n,o,i,a=t.focusTrapOptions;for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){if("returnFocusOnDeactivate"===s||"onDeactivate"===s||"onPostDeactivate"===s||"checkCanReturnFocus"===s||"clickOutsideDeactivates"===s){i.originalOptions[s]=a[s];continue}i.internalOptions[s]=a[s]}return i.outsideClick=null,i.focusTrapElements=t.containerElements||[],i.updatePreviousElement(),i}return n=[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0)}},{key:"getReturnFocusNode",value:function(){var t=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return t||!1!==t&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var t=this.getDocument();t&&(this.previouslyFocusedElement=t.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(t){var e="function"==typeof this.originalOptions.clickOutsideDeactivates?this.originalOptions.clickOutsideDeactivates.call(null,t):this.originalOptions.clickOutsideDeactivates;return e&&(this.outsideClick={target:t.target,allowDeactivation:e}),e}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var t=this,e=function(){var e=t.getReturnFocusNode(),n=!!(t.originalOptions.returnFocusOnDeactivate&&null!=e&&e.focus&&(!t.outsideClick||t.outsideClick.allowDeactivation&&!p(t.outsideClick.target,t.internalOptions.tabbableOptions))),o=t.internalOptions.preventScroll;n&&e.focus({preventScroll:void 0!==o&&o}),t.originalOptions.onPostDeactivate&&t.originalOptions.onPostDeactivate.call(null),t.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(e,e):e()}},{key:"setupFocusTrap",value:function(){this.focusTrap?this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()):this.focusTrapElements.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(t){if(this.focusTrap){t.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var e=!t.active&&this.props.active,n=t.active&&!this.props.active,o=!t.paused&&this.props.paused,i=t.paused&&!this.props.paused;if(e&&(this.updatePreviousElement(),this.focusTrap.activate()),n){this.deactivateTrap();return}o&&this.focusTrap.pause(),i&&this.focusTrap.unpause()}else t.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var t=this,e=this.props.children?s.Children.only(this.props.children):void 0;if(e){if(e.type&&e.type===s.Fragment)throw Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return s.cloneElement(e,{ref:function(n){var o=t.props.containerElements;e&&("function"==typeof e.ref?e.ref(n):e.ref&&(e.ref.current=n)),t.focusTrapElements=o||[n]}})}return null}}],function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,c(o.key),o)}}(l.prototype,n),Object.defineProperty(l,"prototype",{writable:!1}),l}(s.Component),v="undefined"==typeof Element?Function:Element;f.propTypes={active:u.bool,paused:u.bool,focusTrapOptions:u.shape({document:u.object,onActivate:u.func,onPostActivate:u.func,checkCanFocusTrap:u.func,onPause:u.func,onPostPause:u.func,onUnpause:u.func,onPostUnpause:u.func,onDeactivate:u.func,onPostDeactivate:u.func,checkCanReturnFocus:u.func,initialFocus:u.oneOfType([u.instanceOf(v),u.string,u.bool,u.func]),fallbackFocus:u.oneOfType([u.instanceOf(v),u.string,u.func]),escapeDeactivates:u.oneOfType([u.bool,u.func]),clickOutsideDeactivates:u.oneOfType([u.bool,u.func]),returnFocusOnDeactivate:u.bool,setReturnFocus:u.oneOfType([u.instanceOf(v),u.string,u.bool,u.func]),allowOutsideClick:u.oneOfType([u.bool,u.func]),preventScroll:u.bool,tabbableOptions:u.shape({displayCheck:u.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:u.oneOfType([u.bool,u.func])}),trapStack:u.array,isKeyForward:u.func,isKeyBackward:u.func}),containerElements:u.arrayOf(u.instanceOf(v)),children:u.oneOfType([u.element,u.instanceOf(v)])},f.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:l},t.exports=f}}]);