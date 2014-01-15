define( function ( require ) {

	var assert = require( 'assert' ),
		runTests = require( 'runTests' ),

		ascending = require( 'd3/ascending' );

	return function () {
		
		module( 'd3/ascending' );

		var tests = {
			"numbers": {
				"returns a negative number if a < b": function(ascending) {
					console.log( assert, ascending );
					assert.isTrue(ascending(0, 1) < 0);
				},
				"returns a positive number if a > b": function(ascending) {
					assert.isTrue(ascending(1, 0) > 0);
				},
				"returns zero if a == b": function(ascending) {
					assert.equal(ascending(0, 0), 0);
				},
				"returns NaN if a or b is undefined": function(ascending) {
					assert.isNaN(ascending(0, undefined));
					assert.isNaN(ascending(undefined, 0));
					assert.isNaN(ascending(undefined, undefined));
				},
				"returns NaN if a or b is NaN": function(ascending) {
					assert.isNaN(ascending(0, NaN));
					assert.isNaN(ascending(NaN, 0));
					assert.isNaN(ascending(NaN, NaN));
				}
			},
			"strings": {
				"returns a negative number if a < b": function(ascending) {
					assert.isTrue(ascending("a", "b") < 0);
				},
				"returns a positive number if a > b": function(ascending) {
					assert.isTrue(ascending("b", "a") > 0);
				},
				"returns zero if a == b": function(ascending) {
					assert.equal(ascending("a", "a"), 0);
				}
			}
		};

		runTests( tests, ascending );

		// test( 'returns a negative number if a < b', function ( t ) {
		// 	t.equal( ascending( 0, 1 ) < 0, true );
		// });


		/*"numbers": {
			"returns a negative number if a < b": function(ascending) {
				assert.isTrue(ascending(0, 1) < 0);
			},
			"returns a positive number if a > b": function(ascending) {
				assert.isTrue(ascending(1, 0) > 0);
			},
			"returns zero if a == b": function(ascending) {
				assert.equal(ascending(0, 0), 0);
			},
			"returns NaN if a or b is undefined": function(ascending) {
				assert.isNaN(ascending(0, undefined));
				assert.isNaN(ascending(undefined, 0));
				assert.isNaN(ascending(undefined, undefined));
			},
			"returns NaN if a or b is NaN": function(ascending) {
				assert.isNaN(ascending(0, NaN));
				assert.isNaN(ascending(NaN, 0));
				assert.isNaN(ascending(NaN, NaN));
			}
		},
		"strings": {
			"returns a negative number if a < b": function(ascending) {
				assert.isTrue(ascending("a", "b") < 0);
			},
			"returns a positive number if a > b": function(ascending) {
				assert.isTrue(ascending("b", "a") > 0);
			},
			"returns zero if a == b": function(ascending) {
				assert.equal(ascending("a", "a"), 0);
			}
		}*/
	};
	
});