"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5597],{75597:function(e,t,n){function r(e,t,n,o){var c=Error.call(this,e);return Object.setPrototypeOf&&Object.setPrototypeOf(c,r.prototype),c.expected=t,c.found=n,c.location=o,c.name="SyntaxError",c}function o(e,t,n){return(n=n||" ",e.length>t)?e:(t-=e.length,e+(n+=n.repeat(t)).slice(0,t))}!function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(r,Error),r.prototype.format=function(e){var t="Error: "+this.message;if(this.location){var n,r=null;for(n=0;n<e.length;n++)if(e[n].source===this.location.source){r=e[n].text.split(/\r\n|\n|\r/g);break}var c=this.location.start,i=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(c):c,u=this.location.source+":"+i.line+":"+i.column;if(r){var a=this.location.end,l=o("",i.line.toString().length," "),p=r[c.line-1],s=(c.line===a.line?a.column:p.length+1)-c.column||1;t+="\n --> "+u+"\n"+l+" |\n"+i.line+" | "+p+"\n"+l+" | "+o("",c.column-1," ")+o("",s,"^")}else t+="\n at "+u}return t},r.buildMessage=function(e,t){var n={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var t=e.parts.map(function(e){return Array.isArray(e)?c(e[0])+"-"+c(e[1]):c(e)});return"["+(e.inverted?"^":"")+t.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}};function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function c(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function i(e){return n[e.type](e)}return"Expected "+function(e){var t,n,r=e.map(i);if(r.sort(),r.length>0){for(t=1,n=1;t<r.length;t++)r[t-1]!==r[t]&&(r[n]=r[t],n++);r.length=n}switch(r.length){case 1:return r[0];case 2:return r[0]+" or "+r[1];default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1]}}(e)+" but "+(t?'"'+o(t)+'"':"end of input")+" found."}}}]);