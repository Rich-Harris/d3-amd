define( function ( require ) {

	var assert = require( 'assert' ),
		runTests = require( 'runTests' ),

		values = require( 'd3/values' );

	return function () {
		
		module( 'd3/values' );

		var tests = {
			"enumerates every value": function(values) {
				assert.deepEqual(values({a: 1, b: 2}), [1, 2]);
			},
			"includes values defined on prototypes": function(values) {
				function abc() {
					this.a = 1;
					this.b = 2;
				}
				abc.prototype.c = 3;
				assert.deepEqual(values(new abc()), [1, 2, 3]);
			},
			"includes null or undefined values": function(values) {
				var v = values({a: undefined, b: null, c: NaN});
				assert.isUndefined(v[0]);
				assert.isNull(v[1]);
				assert.isNaN(v[2]);
				assert.equal(v.length, 3);
			}
		};

		runTests( tests, values );
	};
	
});