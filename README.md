<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cneg

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Negate a double-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-ops-cneg
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cneg = require( '@stdlib/math-base-ops-cneg' );
```

#### cneg( z )

Negates a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

var z = new Complex128( -4.2, 5.5 );

var out = cneg( z );
// returns <Complex128>

var re = real( out );
// returns 4.2

var im = imag( out );
// returns -5.5

z = new Complex128( 0.0, 0.0 );

out = cneg( z );
// returns <Complex128>

re = real( out );
// returns -0.0

im = imag( out );
// returns -0.0

z = new Complex128( NaN, NaN );

out = cneg( z );
// returns <Complex128>

re = real( out );
// returns NaN

im = imag( out );
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
var Complex128 = require( '@stdlib/complex-float64' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var cneg = require( '@stdlib/math-base-ops-cneg' );

function randomComplex() {
    var re = discreteUniform( -50, 50 );
    var im = discreteUniform( -50, 50 );
    return new Complex128( re, im );
}

var z;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    z = randomComplex();
    o = cneg( z );
    console.log( 'negate(%s) = %s', z.toString(), o.toString() );
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

<section class="usage">

### Usage

```c
#include "stdlib/math/base/ops/cneg.h"
```

#### stdlib_base_cneg( z )

Negates a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64.h"
#include "stdlib/complex/real.h"
#include "stdlib/complex/imag.h"

stdlib_complex128_t z = stdlib_complex128( 3.0, -2.0 );

stdlib_complex128_t out = stdlib_base_cneg( z );

double re = stdlib_real( out );
// returns -3.0

double im = stdlib_imag( out );
// returns 2.0
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_cneg( const stdlib_complex128_t z );
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
#include "stdlib/math/base/ops/cneg.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, 1.5 ),
        stdlib_complex128( 0.0, -0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re;
    double im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_reim( v, &re, &im );
        printf( "z = %lf + %lfi\n", re, im );

        y = stdlib_base_cneg( v );
        stdlib_reim( y, &re, &im );
        printf( "cneg(z) = %lf + %lfi\n", re, im );
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

-   <span class="package-name">[`@stdlib/math-base/special/cabs`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision complex floating-point number.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-cneg.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-cneg

[test-image]: https://github.com/stdlib-js/math-base-ops-cneg/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-ops-cneg/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-cneg/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-cneg?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-cneg.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-cneg/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-cneg/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-cneg/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-cneg/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-ops-cneg/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-cneg/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math-base-special-cabs

<!-- </related-links> -->

</section>

<!-- /.links -->
