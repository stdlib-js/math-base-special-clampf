// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@esm/index.mjs";var e=s,r=t;var a=function(s,t,a){return e(s)||e(t)||e(a)?NaN:s<t?t:s>a?a:0===t&&r(s)?t:0===s&&r(a)?a:s};export{a as default};
//# sourceMappingURL=index.mjs.map
