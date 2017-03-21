'use strict';
let arr = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];

// case #1
function findMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];
  arr.forEach((item) => {
    if (item > max) max = item;
  });
  arr.forEach((item) => {
    if (item < min) min = item;
  });
  return {max, min};
}

// case #2
/*function findMaxAndMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  }
}
*/

function positiveAndEvenNumbers(arr) {
  return arr.filter((item) => item > 0 && (item % 2 == 0));
}


console.log(findMaxAndMin(arr));
console.log(positiveAndEvenNumbers(arr));
