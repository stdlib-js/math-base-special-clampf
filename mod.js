// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t!=t}function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=r();var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;function a(t,r){return null!=t&&e.call(t,r)}var i,f="function"==typeof Symbol?Symbol:void 0,l="function"==typeof f?f.toStringTag:"";i=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return o.call(t);n=t[l],r=a(t,l);try{t[l]=void 0}catch(r){return o.call(t)}return e=o.call(t),r?t[l]=n:delete t[l],e}:function(t){return o.call(t)};var u=i,c="function"==typeof Float32Array;var y=Number.POSITIVE_INFINITY,p="function"==typeof Float32Array?Float32Array:null;var v="function"==typeof Float32Array?Float32Array:void 0;var b=function(){var t,r,n;if("function"!=typeof p)return!1;try{r=new p([1,3.14,-3.14,5e40]),n=r,t=(c&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===y}catch(r){t=!1}return t}()?v:function(){throw new Error("not implemented")},m=r();var S=Object.prototype.toString;var A,d="function"==typeof Symbol?Symbol:void 0,g="function"==typeof d?d.toStringTag:"";A=m&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return S.call(t);n=t[g],r=a(t,g);try{t[g]=void 0}catch(r){return S.call(t)}return o=S.call(t),r?t[g]=n:delete t[g],o}:function(t){return S.call(t)};var w=A,F="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var s="function"==typeof Uint32Array?Uint32Array:void 0;var U=function(){var t,r,n;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(F&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?s:function(){throw new Error("not implemented")},T=new b(1);new U(T.buffer)[0]=4286578688;var j=T[0];function I(t){return 0===t&&1/t===j}function N(r,n,o){return t(r)||t(n)||t(o)?NaN:r<n?n:r>o?o:0===n&&I(r)?n:0===r&&I(o)?o:r}export{N as default};
//# sourceMappingURL=mod.js.map
