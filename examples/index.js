/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var clampf = require( './../lib' );

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
