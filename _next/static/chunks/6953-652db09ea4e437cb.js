(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6953],{37310:function(e,t,_){"use strict";_.d(t,{Z:function(){return i}});var n=_(22988),o=_(2265),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},a=_(84984),i=o.forwardRef(function(e,t){return o.createElement(a.Z,(0,n.Z)({},e,{ref:t,icon:r}))})},47e3:function(e,t,_){"use strict";if("undefined"!=typeof window){let e={get passive(){return}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}"undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints)},8535:function(e){"use strict";e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t.char=t.char||"*",t.keepLeft=t.keepLeft||0,t.keepRight=t.keepRight||0,t.compactTo=t.compactTo||0,t.keepSymbols=t.keepSymbols||!1,!e)return e;if(t.compactTo&&t.keepSymbols)throw Error("you cannot define both compactTo and keepSymbols");e=String(e),t.char=String(t.char),t.keepLeft=Math.floor(parseInt(t.keepLeft,10)),t.keepRight=Math.floor(parseInt(t.keepRight,10)),t.compactTo=Math.floor(parseInt(t.compactTo,10)),t.keepSymbols=!!t.keepSymbols;var _=t.keepSymbols?/[a-zA-Z0-9]/g:/(.)/g,n=e.replace(_,t.char);return t.keepLeft>0&&(n=e.substring(0,t.keepLeft)+n.substring(t.keepLeft)),t.keepRight>0&&(n=n.slice(0,-1*t.keepRight)+e.substring(e.length-t.keepRight)),t.compactTo>0&&(n=n.replace(RegExp("\\"+t.char+"+","g"),Array(t.compactTo+1).join(t.char))),n}},99706:function(e,t,_){let{useState:n,useCallback:o,useEffect:r}=_(2265);e.exports=function(e){let t=[],_=()=>t.forEach(e=>e()),a=e instanceof Function?e():e;return function(){let e=n({})[1],i=o(()=>e({}),[e]);r(()=>(t.push(i),()=>{t.splice(t.findIndex(i),1)}),[i]);let c=o(e=>{a=e instanceof Function?e(a):e,_()},[i]);return[a,c]}}},37231:function(e,t,_){"use strict";let n="__0_1_2_3_4_5_6_7_8_9_a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z_ _`_'_\"_~_!_@_#_$_%_^_&_*_(_)_._-_+_=_[_]_{_}_<_>_,_/_?_;_:_\\_|_capslock_numlock_enter_tab_arrowdown_arrowleft_arrowright_arrowup_end_home_pagedown_pageup_backspace_delete_insert_escape_f1_f2_f3_f4_f5_f6_f7_f8_f9_f10_f11_f12_f13_f14_f15_f16_f17_f18_f19_f20_f21_f22_f23".split("_");n[1]="_";let o={};for(let[e,t]of n.entries())o[t]=e}}]);