/*'use strict';

Function.prototype.Call = function(context, ...args) {
  return this.apply(context, args);
}
*/

Function.prototype.Call = function() {
  var args = [].slice.apply(arguments);
  return this.apply(arguments[0], args.slice(1));
}

function f(a, b) {
	console.log('this: ', this);
	console.log('a: ', a);
	console.log('b: ', b);
}

f.apply('THIS', [1, 2]);
f.Call('THIS', 1, 2);
