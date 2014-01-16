define( function ( require ) {

	var assert = require( 'assert' ),
		runTests = require( 'runTests' ),

		transpose = require( 'd3/transpose' );

	return function () {
		
		module( 'd3/transpose' );

		var tests = {
			"transposes a square matrix": function(transpose) {
				assert.deepEqual(transpose([[1, 2], [3, 4]]), [[1, 3], [2, 4]]);
			},
			"transposes a non-square matrix": function(transpose) {
				assert.deepEqual(transpose([[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]]), [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]]);
			},
			"transposes a single-row matrix": function(transpose) {
				assert.deepEqual(transpose([[1, 2, 3, 4, 5]]), [[1], [2], [3], [4], [5]]);
			},
			"transposes an empty matrix": function(transpose) {
				assert.deepEqual(transpose([]), []);
			},
			"ignores extra elements given an irregular matrix": function(transpose) {
				assert.deepEqual(transpose([[1, 2], [3, 4], [5, 6, 7]]), [[1, 3, 5], [2, 4, 6]]);
			}
		};

		runTests( tests, transpose );
	};
	
});