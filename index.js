// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,i="function"==typeof f?f.toStringTag:"";n=o&&"symbol"==typeof Symbol.toStringTag?function(t){var n,o,f,a,u;if(null==t)return r.call(t);o=t[i],u=i,n=null!=(a=t)&&e.call(a,u);try{t[i]=void 0}catch(n){return r.call(t)}return f=r.call(t),n?t[i]=o:delete t[i],f}:function(t){return r.call(t)};var a=n,u="function"==typeof Float32Array,y=Number.POSITIVE_INFINITY,l="function"==typeof Float32Array?Float32Array:null,c="function"==typeof Float32Array?Float32Array:void 0,p=function(){var t,n,o;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,5e40]),o=n,t=(u&&o instanceof Float32Array||"[object Float32Array]"===a(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===y}catch(n){t=!1}return t}()?c:function(){throw new Error("not implemented")},d="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0,A=function(){var t,n,o;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(d&&o instanceof Uint32Array||"[object Uint32Array]"===a(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?m:function(){throw new Error("not implemented")},s=new p(1);new A(s.buffer)[0]=4286578688;var v=s[0];function h(t){return 0===t&&1/t===v}return function(n,o,r){return t(n)||t(o)||t(r)?NaN:n<o?o:n>r?r:0===o&&h(n)?o:0===n&&h(r)?r:n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).clampf=n();
//# sourceMappingURL=index.js.map
