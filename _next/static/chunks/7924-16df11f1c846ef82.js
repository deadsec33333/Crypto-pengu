"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7924],{8471:function(n,t,i){i.d(t,{BZ:function(){return f},Ho:function(){return r},Kh:function(){return E},O$:function(){return Z},OR:function(){return y},Qq:function(){return v},RW:function(){return l},Wn:function(){return s},Xx:function(){return _},ZR:function(){return m},_b:function(){return R},aW:function(){return u},cM:function(){return g},fv:function(){return h},mC:function(){return d},ou:function(){return e},pi:function(){return o},pu:function(){return c},uR:function(){return a},z4:function(){return p}});var r=1e-6,u=1e-12,o=Math.PI,e=o/2,c=o/4,f=2*o,l=180/o,a=o/180,s=Math.abs,p=Math.atan,h=Math.atan2,d=Math.cos,v=Math.exp,g=Math.log,Z=Math.sin,_=Math.sign||function(n){return n>0?1:n<0?-1:0},R=Math.sqrt,y=Math.tan;function E(n){return n>1?0:n<-1?o:Math.acos(n)}function m(n){return n>1?e:n<-1?-e:Math.asin(n)}},66835:function(n,t,i){i.d(t,{Z:function(){return r}});function r(){}},60876:function(n,t,i){var r=i(66835),u=1/0,o=1/0,e=-1/0,c=e,f={point:function(n,t){n<u&&(u=n),n>e&&(e=n),t<o&&(o=t),t>c&&(c=t)},lineStart:r.Z,lineEnd:r.Z,polygonStart:r.Z,polygonEnd:r.Z,result:function(){var n=[[u,o],[e,c]];return e=c=-(o=u=1/0),n}};t.Z=f},14844:function(n,t,i){let r,u,o,e;i.d(t,{Z:function(){return no}});var c,f,l,a,s=i(66647),p=i(34190),h=i(33537),d=i(8471),v=i(66835),g=new h.dU,Z=new h.dU,_={point:v.Z,lineStart:v.Z,lineEnd:v.Z,polygonStart:function(){_.lineStart=R,_.lineEnd=m},polygonEnd:function(){_.lineStart=_.lineEnd=_.point=v.Z,g.add((0,d.Wn)(Z)),Z=new h.dU},result:function(){var n=g/2;return g=new h.dU,n}};function R(){_.point=y}function y(n,t){_.point=E,c=l=n,f=a=t}function E(n,t){Z.add(a*n-l*t),l=n,a=t}function m(){E(c,f)}var S,M,W,$,x=i(60876),w=0,O=0,C=0,N=0,b=0,H=0,B=0,P=0,k=0,U={point:T,lineStart:z,lineEnd:L,polygonStart:function(){U.lineStart=X,U.lineEnd=j},polygonEnd:function(){U.point=T,U.lineStart=z,U.lineEnd=L},result:function(){var n=k?[B/k,P/k]:H?[N/H,b/H]:C?[w/C,O/C]:[NaN,NaN];return w=O=C=N=b=H=B=P=k=0,n}};function T(n,t){w+=n,O+=t,++C}function z(){U.point=q}function q(n,t){U.point=I,T(W=n,$=t)}function I(n,t){var i=n-W,r=t-$,u=(0,d._b)(i*i+r*r);N+=u*(W+n)/2,b+=u*($+t)/2,H+=u,T(W=n,$=t)}function L(){U.point=T}function X(){U.point=F}function j(){J(S,M)}function F(n,t){U.point=J,T(S=W=n,M=$=t)}function J(n,t){var i=n-W,r=t-$,u=(0,d._b)(i*i+r*r);N+=u*(W+n)/2,b+=u*($+t)/2,H+=u,B+=(u=$*n-W*t)*(W+n),P+=u*($+t),k+=3*u,T(W=n,$=t)}function Q(n){this._context=n}Q.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,d.BZ)}},result:v.Z};var A,G,K,Y,D,V=new h.dU,nn={point:v.Z,lineStart:function(){nn.point=nt},lineEnd:function(){A&&ni(G,K),nn.point=v.Z},polygonStart:function(){A=!0},polygonEnd:function(){A=null},result:function(){var n=+V;return V=new h.dU,n}};function nt(n,t){nn.point=ni,G=Y=n,K=D=t}function ni(n,t){Y-=n,D-=t,V.add((0,d._b)(Y*Y+D*D)),Y=n,D=t}class nr{constructor(n){this._append=null==n?nu:function(n){let t=Math.floor(n);if(!(t>=0))throw RangeError(`invalid digits: ${n}`);if(t>15)return nu;if(t!==r){let n=10**t;r=t,u=function(t){let i=1;this._+=t[0];for(let r=t.length;i<r;++i)this._+=Math.round(arguments[i]*n)/n+t[i]}}return u}(n),this._radius=4.5,this._=""}pointRadius(n){return this._radius=+n,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(n,t){switch(this._point){case 0:this._append`M${n},${t}`,this._point=1;break;case 1:this._append`L${n},${t}`;break;default:if(this._append`M${n},${t}`,this._radius!==o||this._append!==u){let n=this._radius,t=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,o=n,u=this._append,e=this._,this._=t}this._+=e}}result(){let n=this._;return this._="",n.length?n:null}}function nu(n){let t=1;this._+=n[0];for(let i=n.length;t<i;++t)this._+=arguments[t]+n[t]}function no(n,t){let i=3,r=4.5,u,o;function e(n){return n&&("function"==typeof r&&o.pointRadius(+r.apply(this,arguments)),(0,p.Z)(n,u(o))),o.result()}return e.area=function(n){return(0,p.Z)(n,u(_)),_.result()},e.measure=function(n){return(0,p.Z)(n,u(nn)),nn.result()},e.bounds=function(n){return(0,p.Z)(n,u(x.Z)),x.Z.result()},e.centroid=function(n){return(0,p.Z)(n,u(U)),U.result()},e.projection=function(t){return arguments.length?(u=null==t?(n=null,s.Z):(n=t).stream,e):n},e.context=function(n){return arguments.length?(o=null==n?(t=null,new nr(i)):new Q(t=n),"function"!=typeof r&&o.pointRadius(r),e):t},e.pointRadius=function(n){return arguments.length?(r="function"==typeof n?n:(o.pointRadius(+n),+n),e):r},e.digits=function(n){if(!arguments.length)return i;if(null==n)i=null;else{let t=Math.floor(n);if(!(t>=0))throw RangeError(`invalid digits: ${n}`);i=t}return null===t&&(o=new nr(i)),e},e.projection(n).digits(i).context(t)}},45420:function(n,t,i){i.d(t,{Z:function(){return u}});var r=i(8471);function u(n,t){return(0,r.Wn)(n[0]-t[0])<r.Ho&&(0,r.Wn)(n[1]-t[1])<r.Ho}},46196:function(n,t,i){i.d(t,{Z:function(){return c}});var r=i(33537),u=i(81407),o=i(8471);function e(n){return(0,o.Wn)(n[0])<=o.pi?n[0]:(0,o.Xx)(n[0])*(((0,o.Wn)(n[0])+o.pi)%o.BZ-o.pi)}function c(n,t){var i=e(t),c=t[1],f=(0,o.O$)(c),l=[(0,o.O$)(i),-(0,o.mC)(i),0],a=0,s=0,p=new r.dU;1===f?c=o.ou+o.Ho:-1===f&&(c=-o.ou-o.Ho);for(var h=0,d=n.length;h<d;++h)if(g=(v=n[h]).length)for(var v,g,Z=v[g-1],_=e(Z),R=Z[1]/2+o.pu,y=(0,o.O$)(R),E=(0,o.mC)(R),m=0;m<g;++m,_=M,y=$,E=x,Z=S){var S=v[m],M=e(S),W=S[1]/2+o.pu,$=(0,o.O$)(W),x=(0,o.mC)(W),w=M-_,O=w>=0?1:-1,C=O*w,N=C>o.pi,b=y*$;if(p.add((0,o.fv)(b*O*(0,o.O$)(C),E*x+b*(0,o.mC)(C))),a+=N?w+O*o.BZ:w,N^_>=i^M>=i){var H=(0,u.T5)((0,u.Og)(Z),(0,u.Og)(S));(0,u.iJ)(H);var B=(0,u.T5)(l,H);(0,u.iJ)(B);var P=(N^w>=0?-1:1)*(0,o.ZR)(B[2]);(c>P||c===P&&(H[0]||H[1]))&&(s+=N^w>=0?1:-1)}}return(a<-o.Ho||a<o.Ho&&p<-o.aW)^1&s}},28025:function(n,t,i){i.d(t,{Z:function(){return E}});var r=i(83869),u=i(62797),o=i(60899),e=i(30427),c=i(66647),f=i(8471),l=i(69983);function a(n){return function(t){var i=new s;for(var r in n)i[r]=n[r];return i.stream=t,i}}function s(){}s.prototype={constructor:s,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var p=i(34190),h=i(60876);function d(n,t,i){var r=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=r&&n.clipExtent(null),(0,p.Z)(i,n.stream(h.Z)),t(h.Z.result()),null!=r&&n.clipExtent(r),n}function v(n,t,i){return d(n,function(i){var r=t[1][0]-t[0][0],u=t[1][1]-t[0][1],o=Math.min(r/(i[1][0]-i[0][0]),u/(i[1][1]-i[0][1])),e=+t[0][0]+(r-o*(i[1][0]+i[0][0]))/2,c=+t[0][1]+(u-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([e,c])},i)}var g=i(81407),Z=(0,f.mC)(30*f.uR);function _(n,t){return+t?function(n,t){function i(r,u,o,e,c,l,a,s,p,h,d,v,g,_){var R=a-r,y=s-u,E=R*R+y*y;if(E>4*t&&g--){var m=e+h,S=c+d,M=l+v,W=(0,f._b)(m*m+S*S+M*M),$=(0,f.ZR)(M/=W),x=(0,f.Wn)((0,f.Wn)(M)-1)<f.Ho||(0,f.Wn)(o-p)<f.Ho?(o+p)/2:(0,f.fv)(S,m),w=n(x,$),O=w[0],C=w[1],N=O-r,b=C-u,H=y*N-R*b;(H*H/E>t||(0,f.Wn)((R*N+y*b)/E-.5)>.3||e*h+c*d+l*v<Z)&&(i(r,u,o,e,c,l,O,C,x,m/=W,S/=W,M,g,_),_.point(O,C),i(O,C,x,m,S,M,a,s,p,h,d,v,g,_))}}return function(t){var r,u,o,e,c,f,l,a,s,p,h,d,v={point:Z,lineStart:_,lineEnd:y,polygonStart:function(){t.polygonStart(),v.lineStart=E},polygonEnd:function(){t.polygonEnd(),v.lineStart=_}};function Z(i,r){i=n(i,r),t.point(i[0],i[1])}function _(){a=NaN,v.point=R,t.lineStart()}function R(r,u){var o=(0,g.Og)([r,u]),e=n(r,u);i(a,s,l,p,h,d,a=e[0],s=e[1],l=r,p=o[0],h=o[1],d=o[2],16,t),t.point(a,s)}function y(){v.point=Z,t.lineEnd()}function E(){_(),v.point=m,v.lineEnd=S}function m(n,t){R(r=n,t),u=a,o=s,e=p,c=h,f=d,v.point=R}function S(){i(a,s,l,p,h,d,u,o,r,e,c,f,16,t),v.lineEnd=y,y()}return v}}(n,t):a({point:function(t,i){t=n(t,i),this.stream.point(t[0],t[1])}})}var R=a({point:function(n,t){this.stream.point(n*f.uR,t*f.uR)}});function y(n,t,i,r,u,o){if(!o)return function(n,t,i,r,u){function o(o,e){return[t+n*(o*=r),i-n*(e*=u)]}return o.invert=function(o,e){return[(o-t)/n*r,(i-e)/n*u]},o}(n,t,i,r,u);var e=(0,f.mC)(o),c=(0,f.O$)(o),l=e*n,a=c*n,s=e/n,p=c/n,h=(c*i-e*t)/n,d=(c*t+e*i)/n;function v(n,o){return[l*(n*=r)-a*(o*=u)+t,i-a*n-l*o]}return v.invert=function(n,t){return[r*(s*n-p*t+h),u*(d-p*n-s*t)]},v}function E(n){return(function(n){var t,i,s,p,h,g,Z,E,m,S,M=150,W=480,$=250,x=0,w=0,O=0,C=0,N=0,b=0,H=1,B=1,P=null,k=r.Z,U=null,T=c.Z,z=.5;function q(n){return E(n[0]*f.uR,n[1]*f.uR)}function I(n){return(n=E.invert(n[0],n[1]))&&[n[0]*f.RW,n[1]*f.RW]}function L(){var n=y(M,0,0,H,B,b).apply(null,t(x,w)),r=y(M,W-n[0],$-n[1],H,B,b);return i=(0,l.I)(O,C,N),Z=(0,e.Z)(t,r),E=(0,e.Z)(i,Z),g=_(Z,z),X()}function X(){return m=S=null,q}return q.stream=function(n){var t;return m&&S===n?m:m=R((t=i,a({point:function(n,i){var r=t(n,i);return this.stream.point(r[0],r[1])}}))(k(g(T(S=n)))))},q.preclip=function(n){return arguments.length?(k=n,P=void 0,X()):k},q.postclip=function(n){return arguments.length?(T=n,U=s=p=h=null,X()):T},q.clipAngle=function(n){return arguments.length?(k=+n?(0,u.Z)(P=n*f.uR):(P=null,r.Z),X()):P*f.RW},q.clipExtent=function(n){return arguments.length?(T=null==n?(U=s=p=h=null,c.Z):(0,o.Z)(U=+n[0][0],s=+n[0][1],p=+n[1][0],h=+n[1][1]),X()):null==U?null:[[U,s],[p,h]]},q.scale=function(n){return arguments.length?(M=+n,L()):M},q.translate=function(n){return arguments.length?(W=+n[0],$=+n[1],L()):[W,$]},q.center=function(n){return arguments.length?(x=n[0]%360*f.uR,w=n[1]%360*f.uR,L()):[x*f.RW,w*f.RW]},q.rotate=function(n){return arguments.length?(O=n[0]%360*f.uR,C=n[1]%360*f.uR,N=n.length>2?n[2]%360*f.uR:0,L()):[O*f.RW,C*f.RW,N*f.RW]},q.angle=function(n){return arguments.length?(b=n%360*f.uR,L()):b*f.RW},q.reflectX=function(n){return arguments.length?(H=n?-1:1,L()):H<0},q.reflectY=function(n){return arguments.length?(B=n?-1:1,L()):B<0},q.precision=function(n){return arguments.length?(g=_(Z,z=n*n),X()):(0,f._b)(z)},q.fitExtent=function(n,t){return v(q,n,t)},q.fitSize=function(n,t){return v(q,[[0,0],n],t)},q.fitWidth=function(n,t){return d(q,function(t){var i=+n,r=i/(t[1][0]-t[0][0]),u=(i-r*(t[1][0]+t[0][0]))/2,o=-r*t[0][1];q.scale(150*r).translate([u,o])},t)},q.fitHeight=function(n,t){return d(q,function(t){var i=+n,r=i/(t[1][1]-t[0][1]),u=-r*t[0][0],o=(i-r*(t[1][1]+t[0][1]))/2;q.scale(150*r).translate([u,o])},t)},function(){return t=n.apply(this,arguments),q.invert=t.invert&&I,L()}})(function(){return n})()}},16315:function(n,t,i){i.d(t,{ZP:function(){return c}});var r=i(8471),u=i(69983),o=i(28025);function e(n,t){return[n,(0,r.cM)((0,r.OR)((r.ou+t)/2))]}function c(){return(function(n){var t,i,c,f=(0,o.Z)(n),l=f.center,a=f.scale,s=f.translate,p=f.clipExtent,h=null;function d(){var o=r.pi*a(),l=f((0,u.Z)(f.rotate()).invert([0,0]));return p(null==h?[[l[0]-o,l[1]-o],[l[0]+o,l[1]+o]]:n===e?[[Math.max(l[0]-o,h),t],[Math.min(l[0]+o,i),c]]:[[h,Math.max(l[1]-o,t)],[i,Math.min(l[1]+o,c)]])}return f.scale=function(n){return arguments.length?(a(n),d()):a()},f.translate=function(n){return arguments.length?(s(n),d()):s()},f.center=function(n){return arguments.length?(l(n),d()):l()},f.clipExtent=function(n){return arguments.length?(null==n?h=t=i=c=null:(h=+n[0][0],t=+n[0][1],i=+n[1][0],c=+n[1][1]),d()):null==h?null:[[h,t],[i,c]]},d()})(e).scale(961/r.BZ)}e.invert=function(n,t){return[n,2*(0,r.z4)((0,r.Qq)(t))-r.ou]}},5486:function(n,t,i){i.d(t,{Z:function(){return e}});var r=i(28025),u=i(8471);function o(n,t){var i=t*t,r=i*i;return[n*(.8707-.131979*i+r*(-.013791+r*(.003971*i-.001529*r))),t*(1.007226+i*(.015085+r*(-.044475+.028874*i-.005916*r)))]}function e(){return(0,r.Z)(o).scale(175.295)}o.invert=function(n,t){var i,r=t,o=25;do{var e=r*r,c=e*e;r-=i=(r*(1.007226+e*(.015085+c*(-.044475+.028874*e-.005916*c)))-t)/(1.007226+e*(.045255+c*(-.311325+.259866*e-.005916*11*c)))}while((0,u.Wn)(i)>u.Ho&&--o>0);return[n/(.8707+(e=r*r)*(-.131979+e*(-.013791+e*e*e*(.003971-.001529*e)))),r]}},69983:function(n,t,i){i.d(t,{I:function(){return e},Z:function(){return a}});var r=i(30427),u=i(8471);function o(n,t){return(0,u.Wn)(n)>u.pi&&(n-=Math.round(n/u.BZ)*u.BZ),[n,t]}function e(n,t,i){return(n%=u.BZ)?t||i?(0,r.Z)(f(n),l(t,i)):f(n):t||i?l(t,i):o}function c(n){return function(t,i){return t+=n,(0,u.Wn)(t)>u.pi&&(t-=Math.round(t/u.BZ)*u.BZ),[t,i]}}function f(n){var t=c(n);return t.invert=c(-n),t}function l(n,t){var i=(0,u.mC)(n),r=(0,u.O$)(n),o=(0,u.mC)(t),e=(0,u.O$)(t);function c(n,t){var c=(0,u.mC)(t),f=(0,u.mC)(n)*c,l=(0,u.O$)(n)*c,a=(0,u.O$)(t),s=a*i+f*r;return[(0,u.fv)(l*o-s*e,f*i-a*r),(0,u.ZR)(s*o+l*e)]}return c.invert=function(n,t){var c=(0,u.mC)(t),f=(0,u.mC)(n)*c,l=(0,u.O$)(n)*c,a=(0,u.O$)(t),s=a*o-l*e;return[(0,u.fv)(l*o+a*e,f*i+s*r),(0,u.ZR)(s*i-f*r)]},c}function a(n){function t(t){return t=n(t[0]*u.uR,t[1]*u.uR),t[0]*=u.RW,t[1]*=u.RW,t}return n=e(n[0]*u.uR,n[1]*u.uR,n.length>2?n[2]*u.uR:0),t.invert=function(t){return t=n.invert(t[0]*u.uR,t[1]*u.uR),t[0]*=u.RW,t[1]*=u.RW,t},t}o.invert=o},34190:function(n,t,i){function r(n,t){n&&o.hasOwnProperty(n.type)&&o[n.type](n,t)}i.d(t,{Z:function(){return f}});var u={Feature:function(n,t){r(n.geometry,t)},FeatureCollection:function(n,t){for(var i=n.features,u=-1,o=i.length;++u<o;)r(i[u].geometry,t)}},o={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var i=n.coordinates,r=-1,u=i.length;++r<u;)n=i[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){e(n.coordinates,t,0)},MultiLineString:function(n,t){for(var i=n.coordinates,r=-1,u=i.length;++r<u;)e(i[r],t,0)},Polygon:function(n,t){c(n.coordinates,t)},MultiPolygon:function(n,t){for(var i=n.coordinates,r=-1,u=i.length;++r<u;)c(i[r],t)},GeometryCollection:function(n,t){for(var i=n.geometries,u=-1,o=i.length;++u<o;)r(i[u],t)}};function e(n,t,i){var r,u=-1,o=n.length-i;for(t.lineStart();++u<o;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function c(n,t){var i=-1,r=n.length;for(t.polygonStart();++i<r;)e(n[i],t,1);t.polygonEnd()}function f(n,t){n&&u.hasOwnProperty(n.type)?u[n.type](n,t):r(n,t)}}}]);