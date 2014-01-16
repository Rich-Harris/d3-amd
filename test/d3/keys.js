define( function ( require ) {

	var assert = require( 'assert' ),
		runTests = require( 'runTests' ),

		keys = require( 'd3/keys' );

	return function () {
		
		module( 'd3/keys' );

		var tests = {
			"enumerates every defined key": function(keys) {
				assert.deepEqual(keys({a: 1, b: 1}), ["a", "b"]);
			},
			"includes keys defined on prototypes": function(keys) {
				function abc() {
					this.a = 1;
					this.b = 2;
				}
				abc.prototype.c = 3;
				assert.deepEqual(keys(new abc()), ["a", "b", "c"]);
			},
			"includes keys with null or undefined values": function(keys) {
				assert.deepEqual(keys({a: undefined, b: null, c: NaN}), ["a", "b", "c"]);
			}
		};

		runTests( tests, keys );
	};
	
});