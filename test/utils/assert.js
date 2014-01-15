define( function () {

	'use strict';

	var assert;

	assert = {
		isTrue: ok,

		equal: equal,

		isNaN: function ( value ) {
			ok( isNaN( value ) );
		}
	};

	return assert;

});