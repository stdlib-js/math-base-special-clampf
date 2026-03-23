"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(p,f){
var u=require('@stdlib/math-base-assert-is-nanf/dist'),i=require('@stdlib/math-base-assert-is-negative-zerof/dist');function a(e,r,t){return u(e)||u(r)||u(t)?NaN:e<r?r:e>t?t:r===0&&i(e)?r:e===0&&i(t)?t:e}f.exports=a
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
