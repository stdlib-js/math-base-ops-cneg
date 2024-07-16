/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cneg = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cneg, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function negates real and imaginary components', function test( t ) {
	var actual;
	var z;

	z = new Complex128( -4.2, 5.5 );
	actual = cneg( z );

	t.strictEqual( real( actual ), 4.2, 'returns expected value' );
	t.strictEqual( imag( actual ), -5.5, 'returns expected value' );

	z = new Complex128( 9.99999, 0.1 );
	actual = cneg( z );

	t.strictEqual( real( actual ), -9.99999, 'returns expected value' );
	t.strictEqual( imag( actual ), -0.1, 'returns expected value' );

	z = new Complex128( 4.0, 7.0 );
	actual = cneg( z );

	t.strictEqual( real( actual ), -4.0, 'returns expected value' );
	t.strictEqual( imag( actual ), -7.0, 'returns expected value' );

	z = new Complex128( -4.0, -7.0 );
	actual = cneg( z );

	t.strictEqual( real( actual ), 4.0, 'returns expected value' );
	t.strictEqual( imag( actual ), 7.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var actual;
	var z;

	z = new Complex128( NaN, NaN );
	actual = cneg( z );

	t.strictEqual( isnan( real( actual ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( actual ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `-0`', function test( t ) {
	var actual;
	var z;

	z = new Complex128( -0.0, -0.0 );
	actual = cneg( z );

	t.strictEqual( isPositiveZero( real( actual ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( actual ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `+0`', function test( t ) {
	var actual;
	var z;

	z = new Complex128( +0.0, +0.0 );
	actual = cneg( z );

	t.strictEqual( isNegativeZero( real( actual ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( actual ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-infinity` if provided `+infinity`', function test( t ) {
	var actual;
	var z;

	z = new Complex128( PINF, PINF );
	actual = cneg( z );

	t.strictEqual( real( actual ), NINF, 'returns expected value' );
	t.strictEqual( imag( actual ), NINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `-infinity`', function test( t ) {
	var actual;
	var z;

	z = new Complex128( NINF, NINF );
	actual = cneg( z );

	t.strictEqual( real( actual ), PINF, 'returns expected value' );
	t.strictEqual( imag( actual ), PINF, 'returns expected value' );

	t.end();
});
