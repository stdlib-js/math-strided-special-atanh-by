// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).atanhBy=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,l=function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r},y=t()?c:l;var v=function(r,t,n){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var p=function(r,t,n,e,o,a,i,u){var f,c,l,y;if(r<=0)return e;for(f=n<0?(1-r)*n:0,c=o<0?(1-r)*o:0,y=0;y<r;y++)void 0!==(l=i.call(u,t[f],y,f,c,t,e))&&(e[c]=a(l)),f+=n,c+=o;return e};v(p,"ndarray",(function(r,t,n,e,o,a,i,u,f,c){var l,y,v,p;if(r<=0)return o;for(l=e,y=i,p=0;p<r;p++)void 0!==(v=f.call(c,t[l],p,l,y,t,o))&&(o[y]=u(v)),l+=n,y+=a;return o}));var b=p;var d=function(r){return r!=r};var A=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return A&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var s=function(r){return w.call(r)},U=Object.prototype.hasOwnProperty;var h=function(r,t){return null!=r&&U.call(r,t)},j="function"==typeof Symbol?Symbol.toStringTag:"",g=h,N=j,S=m;var E=s,F=function(r){var t,n,e;if(null==r)return S.call(r);n=r[N],t=g(r,N);try{r[N]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[N]=n:delete r[N],e},T=_()?F:E,I=T,O="function"==typeof Uint32Array;var P="function"==typeof Uint32Array?Uint32Array:null,V=function(r){return O&&r instanceof Uint32Array||"[object Uint32Array]"===I(r)},x=P;var G=function(){var r,t;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,4294967296,4294967297]),r=V(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var k="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},B=G()?k:Y,C=T,q="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null,D=function(r){return q&&r instanceof Float64Array||"[object Float64Array]"===C(r)},H=z;var J=function(){var r,t;if("function"!=typeof H)return!1;try{t=new H([1,3.14,-3.14,NaN]),r=D(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var K="function"==typeof Float64Array?Float64Array:void 0,L=function(){throw new Error("not implemented")},M=J()?K:L,Q=T,R="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null,X=function(r){return R&&r instanceof Uint8Array||"[object Uint8Array]"===Q(r)},Z=W;var $=function(){var r,t;if("function"!=typeof Z)return!1;try{t=new Z(t=[1,3.14,-3.14,256,257]),r=X(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var rr="function"==typeof Uint8Array?Uint8Array:void 0,tr=function(){throw new Error("not implemented")},nr=$()?rr:tr,er=T,or="function"==typeof Uint16Array;var ar="function"==typeof Uint16Array?Uint16Array:null,ir=function(r){return or&&r instanceof Uint16Array||"[object Uint16Array]"===er(r)},ur=ar;var fr=function(){var r,t;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,65536,65537]),r=ir(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var cr,lr="function"==typeof Uint16Array?Uint16Array:void 0,yr=function(){throw new Error("not implemented")},vr={uint16:fr()?lr:yr,uint8:nr};(cr=new vr.uint16(1))[0]=4660;var pr=52===new vr.uint8(cr.buffer)[0],br=B,dr=!0===pr?1:0,Ar=new M(1),_r=new br(Ar.buffer);var mr=function(r){return Ar[0]=r,_r[dr]},wr=B,sr=!0===pr?1:0,Ur=new M(1),hr=new wr(Ur.buffer);var jr=function(r,t){return Ur[0]=r,hr[sr]=t>>>0,Ur[0]},gr=jr,Nr=Number.POSITIVE_INFINITY,Sr=Number.NEGATIVE_INFINITY;var Er=d,Fr=mr,Tr=gr,Ir=Nr,Or=Sr,Pr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Vr=.6931471803691238,xr=1.9082149292705877e-10;var Gr=d,kr=function(r){var t,n,e,o,a,i,u,f,c,l;if(r<-1||Er(r))return NaN;if(-1===r)return Or;if(r===Ir)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(a=(l=((n=Fr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(l=((n=Fr(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=Tr(c,1072693248|n):(l+=1,c=Tr(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?l*Vr+(a+=l*xr):l*Vr-((f=t*(1-.6666666666666666*o))-(l*xr+a)-o):(f=(u=(i=o/(2+o))*i)*Pr(u),0===l?o-(t-i*(t+f)):l*Vr-(t-(i*(t+f)+(l*xr+a))-o))},Yr=Nr,Br=Sr;var Cr=function(r){var t,n;return Gr(r)||r<-1||r>1?NaN:1===r?Yr:-1===r?Br:(r<0&&(t=!0,r=-r),r<3.725290298461914e-9?t?-r:r:(n=r<.5?.5*kr((n=r+r)+n*r/(1-r)):.5*kr((r+r)/(1-r)),t?-n:n))},qr=b,zr=Cr;var Dr=b.ndarray,Hr=Cr;var Jr=function(r,t,n,e,o,a,i){return qr(r,t,n,e,o,zr,a,i)};return v(Jr,"ndarray",(function(r,t,n,e,o,a,i,u,f){return Dr(r,t,n,e,o,a,i,Hr,u,f)})),Jr}));
//# sourceMappingURL=bundle.js.map
