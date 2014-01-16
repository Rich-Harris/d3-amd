define( function ( require ) {

	var assert = require( 'assert' ),
		runTests = require( 'runTests' ),

		pairs = require( 'd3/pairs' );

	return function () {
		
		module( 'd3/pairs' );

		var tests = {
			"returns the empty array if input array has length less than two": function(pairs) {
				assert.deepEqual(pairs([]), []);
				assert.deepEqual(pairs([1]), []);
			},
			"returns pairs of adjacent elements in the given array": function(pairs) {
				assert.deepEqual(pairs([1, 2]), [[1, 2]]);
				assert.deepEqual(pairs([1, 2, 3]), [[1, 2], [2, 3]]);
				var a = {}, b = {}, c = {}, d = {};
				assert.deepEqual(pairs([a, b, c, d]), [[a, b], [b, c], [c, d]]);
			},
			"includes null or undefined elements in pairs": function(pairs) {
				assert.deepEqual(pairs([1, null, 2]), [[1, null], [null, 2]]);
				assert.deepEqual(pairs([1, 2, undefined]), [[1, 2], [2, undefined]]);
			}
		};

		runTests( tests, pairs );
	};
	
});