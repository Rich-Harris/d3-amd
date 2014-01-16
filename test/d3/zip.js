define( function ( require ) {

	var assert = require( 'assert' ),
		runTests = require( 'runTests' ),

		zip = require( 'd3/zip' );

	return function () {
		
		module( 'd3/zip' );

		var tests = {
			"transposes a square matrix": function(zip) {
				assert.deepEqual(zip([1, 2], [3, 4]), [[1, 3], [2, 4]]);
			},
			"transposes a non-square matrix": function(zip) {
				assert.deepEqual(zip([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]), [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]]);
			},
			"transposes a single-row matrix": function(zip) {
				assert.deepEqual(zip([1, 2, 3, 4, 5]), [[1], [2], [3], [4], [5]]);
			},
			"transposes an empty matrix": function(zip) {
				assert.deepEqual(zip(), []);
			},
			"ignores extra elements given an irregular matrix": function(zip) {
				assert.deepEqual(zip([1, 2], [3, 4], [5, 6, 7]), [[1, 3, 5], [2, 4, 6]]);
			}
		};

		runTests( tests, zip );
	};
	
});