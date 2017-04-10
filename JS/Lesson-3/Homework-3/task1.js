
function sum(a) {
  var currentSum = a;

  function internalSum(b) {
    currentSum += b;
    return internalSum;
  }

  internalSum.toString = function() {
    return currentSum;
  };

  return internalSum;
}

console.log( sum(1)(2) == 3 ); // 3
console.log( sum(5)(-1)(2) == 6 ); // 6
console.log( sum(6)(-1)(-2)(-3) == 0 ); // 0
console.log( sum(0)(1)(2)(3)(4)(5) == 15 ); // 15
