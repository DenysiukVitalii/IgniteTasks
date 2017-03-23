
function compose() {
  var args = [].slice.call(arguments);
  var first = args[0];
  return args.slice(1).reduce( function(first, func) {
    return func(first);
  }, first);
}

// 'use strict';
//const compose = (arg, ...funcs) => funcs.reduce((arg, f) => f(arg), arg);


var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }
console.log(compose(5, doubleTheValue)); //должно вернуться значение 10
console.log(compose(5, doubleTheValue, addOneToTheValue)); // должно вернуться значение  11
