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
var Float64Array = require( '@stdlib/array-float64' );
var cneg = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cneg, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function negates real and imaginary components', function test( t ) {
	var expected;
	var actual;

	actual = cneg( -4.2, 5.5 );
	expected = [ 4.2, -5.5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cneg( 9.99999, 0.1 );
	expected = [ -9.99999, -0.1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cneg( 4.0, 7.0 );
	expected = [ -4.0, -7.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = cneg( -4.0, -7.0 );
	expected = [ 4.0, 7.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function negates real and imaginary components (output array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Array( 2 );
	actual = cneg( out, -4.2, 5.5 );

	expected = [ 4.2, -5.5 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function negates real and imaginary components (output typed array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Float64Array( 2 );
	actual = cneg( out, 9.99999, 0.1 );

	expected = new Float64Array( [ -9.99999, -0.1 ] );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function negates real and imaginary components (output object)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = {};
	actual = cneg( out, 4.2, -5.5 );

	expected = {
		'0': -4.2,
		'1': 5.5
	};

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', function test( t ) {
	var val = cneg( NaN, NaN );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `-0`', function test( t ) {
	var val = cneg( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `+0`', function test( t ) {
	var val = cneg( +0.0, +0.0 );
	t.strictEqual( isNegativeZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `+infinity`', function test( t ) {
	var val = cneg( PINF, PINF );
	t.strictEqual( val[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( val[ 1 ], NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `-infinity`', function test( t ) {
	var val = cneg( NINF, NINF );
	t.strictEqual( val[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( val[ 1 ], PINF, 'returns expected value' );
	t.end();
});
