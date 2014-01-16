define( function ( require ) {

	var assert = require( 'assert' ),
		runTests = require( 'runTests' ),

		mean = require( 'd3/mean' );

	return function () {
		
		module( 'd3/mean' );

		var tests = {
			"returns the mean value for numbers": function(mean) {
				assert.equal(mean([1]), 1);
				assert.equal(mean([5, 1, 2, 3, 4]), 3);
				assert.equal(mean([20, 3]), 11.5);
				assert.equal(mean([3, 20]), 11.5);
			},
			"ignores null, undefined and NaN": function(mean) {
				assert.equal(mean([NaN, 1, 2, 3, 4, 5]), 3);
				assert.equal(mean([1, 2, 3, 4, 5, NaN]), 3);
				assert.equal(mean([10, null, 3, undefined, 5, NaN]), 6);
			},
			"can handle large numbers without overflowing": function(mean) {
				assert.equal(mean([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
				assert.equal(mean([-Number.MAX_VALUE, -Number.MAX_VALUE]), -Number.MAX_VALUE);
			},
			"returns undefined for empty array": function(mean) {
				assert.isUndefined(mean([]));
				assert.isUndefined(mean([null]));
				assert.isUndefined(mean([undefined]));
				assert.isUndefined(mean([NaN]));
				assert.isUndefined(mean([NaN, NaN]));
			},
			"applies the optional accessor function": function(mean) {
				assert.equal(mean([[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]], function(d) { return mean(d); }), 4.5);
				assert.equal(mean([1, 2, 3, 4, 5], function(d, i) { return i; }), 2);
			}
		};

		runTests( tests, mean );
	};
	
});