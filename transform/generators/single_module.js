var estraverse, escodegen, write_module, paths;

estraverse = require( 'estraverse' );
escodegen = require( 'escodegen' );
write_module = require( '../write_module' );

paths = require( '../paths' );

module.exports = function ( ast, node ) {
	var path, definition, code;

	path = 'd3/' + node.expression.left.property.name + '.js';

	// replace with a define call
	estraverse.replace( ast, {
		enter: function ( candidate ) {
			if ( candidate === node ) {
				console.log( 'candidate === node' );
				return {
					type: 'ExpressionStatement',
					expression: {
						type: 'CallExpression',
						callee: {
							type: 'Identifier',
							name: 'define'
						},
						arguments: [
							{
								type: 'FunctionExpression',
								id: null,
								params: [],
								defaults: [],
								body: {
									type: 'BlockStatement',
									body: [
										{
											type: 'ReturnStatement',
											argument: node.expression.right
										}
									]
								},
								rest: null,
								generator: false,
								expression: false
							}
						]
					}
				};
			}
		}
	});

	code = escodegen.generate( ast );
	write_module( paths.OUTPUT, path, code );
};