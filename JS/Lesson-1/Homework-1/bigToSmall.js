'use strict';

let array = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]
];

function bigToSmall(arr) {
  let oneArr = [];
  arr.forEach((item) => {
    item.forEach( (i) => { oneArr.push(i); } );
  });
  return oneArr.sort((a, b) => b - a).join('>');
}

console.log(bigToSmall(array));
console.log(bigToSmall([[1,2],[3,4],[5,6]]));
console.log(bigToSmall([[1,3,5],[2,4,6]]));
console.log(bigToSmall([[1,1],[1],[1,1]]));
