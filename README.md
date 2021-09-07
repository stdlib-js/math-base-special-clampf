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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Restrict a single-precision floating-point number to a specified range.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-clampf
```

</section>

<section class="usage">

## Usage

```javascript
var clampf = require( '@stdlib/math-base-special-clampf' );
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

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var clampf = require( '@stdlib/math-base-special-clampf' );

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
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-clampf
```

</section>

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/clampf.h"
```

#### stdlib_base_clampf( v, min, max )

Restricts a single-precision floating-point number to a specified range.

```c
float y = stdlib_base_clampf( -3.14f, 0.0f, 5.0f );
// returns 0.0f
```

The function accepts the following arguments:

-   **v**: `[in] float` input value.
-   **min**: `[in] float` minimum value.
-   **max**: `[in] float` maximum value.

```c
float stdlib_base_clampf( const float v, const float min, const float max );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/clampf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_clampf( x[ i ], -3.0f, 3.0f );
        printf( "clamp(%f, %f, %f) = %f\n", x[ i ], -3.0f, 3.0f, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/math/base/special/clamp`][@stdlib/math/base/special/clamp]: restrict a double-precision floating-point number to a specified range.

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-clampf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-clampf

[test-image]: https://github.com/stdlib-js/math-base-special-clampf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-clampf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-clampf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-clampf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-clampf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-clampf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-clampf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/clamp]: https://github.com/stdlib-js/math-base-special-clamp

<!-- </related-links> -->

</section>

<!-- /.links -->
