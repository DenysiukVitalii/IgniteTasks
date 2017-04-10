'use strict';

function howTypeOf(...args) {
  try {
    if (args.length > 1) throw new Error('Error: Too many arguments!');
  } catch (e) {
    console.log(e);
  }
  if (args[0] === null) return 'null';
  return typeof args[0];
}

/*
function howTypeOf() {
  try {
    if (arguments.length > 1) throw new Error('Error: Too many arguments!');
  } catch (e) {
    console.log(e);
  }
  if (arguments[0] === null) return 'null';
  return typeof arguments[0];
}
*/


console.log(howTypeOf(null));
console.log(howTypeOf([12,3,4]));
console.log(howTypeOf("hello"));
console.log(howTypeOf(25));
console.log(howTypeOf(25, "qwerty"));
