define( function () {

	'use strict';

	var assert;

	assert = {
		isTrue: ok,

		equal: equal,
		strictEqual: strictEqual,
		deepEqual: deepEqual,

		isNaN: function ( value ) {
			ok( isNaN( value ) );
		},
		
		isUndefined: function ( value ) {
			equal( value, undefined );
		},
		
		isNull: function ( value ) {
			equal( value, null );
		}
	};

	return assert;

});