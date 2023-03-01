<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# clampf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Restrict a single-precision floating-point number to a specified range.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
clampf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-clampf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var clampf = require( 'path/to/vendor/umd/math-base-special-clampf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-clampf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.clampf;
})();
</script>
```

#### clampf( v, min, max )

Restricts a single-precision floating-point number to a specified range.

```javascript
var v = clampf( 3.0, 0.0, 5.0 );
// returns 3.0

v = clampf( -3.0, 0.0, 5.0 );
// returns 0.0

v = clampf( 10.0, 0.0, 5.0 );
// returns 5.0

v = clampf( -0.0, 0.0, 5.0 );
// returns 0.0

v = clampf( 0.0, -3.0, -0.0 );
// returns -0.0
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var v = clampf( NaN, 0.0, 5.0 );
// returns NaN

v = clampf( 0.0, NaN, 5.0 );
// returns NaN

v = clampf( 3.14, 0.0, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-clampf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var min;
var max;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    min = discreteUniform( 0.0, 10.0 );
    max = discreteUniform( 5.0, 15.0 );
    v = discreteUniform( -20.0, 20.0 );
    console.log( 'clampf(%d,%d,%d) => %d', v, min, max, clampf( v, min, max ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/clamp`][@stdlib/math/base/special/clamp]</span><span class="delimiter">: </span><span class="description">restrict a double-precision floating-point number to a specified range.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-clampf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-clampf

[test-image]: https://github.com/stdlib-js/math-base-special-clampf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-clampf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-clampf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-clampf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-clampf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-clampf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-clampf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-clampf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-clampf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-clampf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-clampf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/clamp]: https://github.com/stdlib-js/math-base-special-clamp/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
