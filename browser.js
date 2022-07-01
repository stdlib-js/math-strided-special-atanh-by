// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=n,l=function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t},y=r()?c:l,p=function(t,r,n){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=function(t,r,n,e,o,i,u,f){var a,c,l,y;if(t<=0)return e;for(a=n<0?(1-t)*n:0,c=o<0?(1-t)*o:0,y=0;y<t;y++)void 0!==(l=u.call(f,r[a],y,a,c,r,e))&&(e[c]=i(l)),a+=n,c+=o;return e};p(b,"ndarray",(function(t,r,n,e,o,i,u,f,a,c){var l,y,p,b;if(t<=0)return o;for(l=e,y=u,b=0;b<t;b++)void 0!==(p=a.call(c,r[l],b,l,y,r,o))&&(o[y]=f(p)),l+=n,y+=i;return o}));var d,A=b,_=function(t){return t!=t},v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,w=m,s=function(t){return w.call(t)},U=Object.prototype.hasOwnProperty,h=function(t,r){return null!=t&&U.call(t,r)},j="function"==typeof Symbol?Symbol.toStringTag:"",g=h,N=j,S=m,E=s,F=function(t){var r,n,e;if(null==t)return S.call(t);n=t[N],r=g(t,N);try{t[N]=void 0}catch(r){return S.call(t)}return e=S.call(t),r?t[N]=n:delete t[N],e},T=v&&"symbol"==typeof Symbol.toStringTag?F:E,I=T,O="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,V=function(t){return O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t)},x=P,G=function(){var t,r;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,4294967296,4294967297]),t=V(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t},k="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},B=G()?k:Y,C=T,q="function"==typeof Float64Array,z="function"==typeof Float64Array?Float64Array:null,D=function(t){return q&&t instanceof Float64Array||"[object Float64Array]"===C(t)},H=z,J=function(){var t,r;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,NaN]),t=D(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t},K="function"==typeof Float64Array?Float64Array:void 0,L=function(){throw new Error("not implemented")},M=J()?K:L,Q=T,R="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,X=function(t){return R&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t)},Z=W,$=function(){var t,r;if("function"!=typeof Z)return!1;try{r=new Z(r=[1,3.14,-3.14,256,257]),t=X(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t},tt="function"==typeof Uint8Array?Uint8Array:void 0,rt=function(){throw new Error("not implemented")},nt=$()?tt:rt,et=T,ot="function"==typeof Uint16Array,it="function"==typeof Uint16Array?Uint16Array:null,ut=function(t){return ot&&t instanceof Uint16Array||"[object Uint16Array]"===et(t)},ft=it,at=function(){var t,r;if("function"!=typeof ft)return!1;try{r=new ft(r=[1,3.14,-3.14,65536,65537]),t=ut(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t},ct="function"==typeof Uint16Array?Uint16Array:void 0,lt=function(){throw new Error("not implemented")},yt={uint16:at()?ct:lt,uint8:nt};(d=new yt.uint16(1))[0]=4660;var pt=52===new yt.uint8(d.buffer)[0],bt=B,dt=!0===pt?1:0,At=new M(1),_t=new bt(At.buffer),vt=function(t){return At[0]=t,_t[dt]},mt=B,wt=!0===pt?1:0,st=new M(1),Ut=new mt(st.buffer),ht=function(t,r){return st[0]=t,Ut[wt]=r>>>0,st[0]},jt=ht,gt=Number.POSITIVE_INFINITY,Nt=Number.NEGATIVE_INFINITY,St=_,Et=vt,Ft=jt,Tt=gt,It=Nt,Ot=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))},Pt=.6931471803691238,Vt=1.9082149292705877e-10,xt=_,Gt=function(t){var r,n,e,o,i,u,f,a,c,l;if(t<-1||St(t))return NaN;if(-1===t)return It;if(t===Tt)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=Et(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),i/=c):(l=((n=Et(c=t))>>20)-1023,i=0),(n&=1048575)<434334?c=Ft(c,1072693248|n):(l+=1,c=Ft(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*Pt+(i+=l*Vt):l*Pt-((a=r*(1-.6666666666666666*o))-(l*Vt+i)-o):(a=(f=(u=o/(2+o))*u)*Ot(f),0===l?o-(r-u*(r+a)):l*Pt-(r-(u*(r+a)+(l*Vt+i))-o))},kt=gt,Yt=Nt,Bt=function(t){var r,n;return xt(t)||t<-1||t>1?NaN:1===t?kt:-1===t?Yt:(t<0&&(r=!0,t=-t),t<3.725290298461914e-9?r?-t:t:(n=t<.5?.5*Gt((n=t+t)+n*t/(1-t)):.5*Gt((t+t)/(1-t)),r?-n:n))};function Ct(t,r,n,e,o,i,u){return A(t,r,n,e,o,Bt,i,u)}return p(Ct,"ndarray",(function(t,r,n,e,o,i,u,f,a){return A.ndarray(t,r,n,e,o,i,u,Bt,f,a)})),Ct},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).atanhBy=r();
//# sourceMappingURL=browser.js.map
