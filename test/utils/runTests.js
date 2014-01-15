define( function () {

	'use strict';

	var bind = Function.prototype.bind;

	var runTests = function ( tests ) {
		var args;

		args = [ null ].concat( Array.prototype.slice.call( arguments, 1 ) );
		_runTests( tests, args );
	};

	function _runTests ( tests, args ) {
		var key;

		for ( key in tests ) {
			if ( tests.hasOwnProperty( key ) ) {
				if ( typeof tests[ key ] === 'object' ) {
					_runTests( tests[ key ], args );
				}

				else {
					test( key, bind.apply( tests[ key ], args ) );
				}
			}
		}
	}

	return runTests;

});