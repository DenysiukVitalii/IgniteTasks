'use strict';

function find(arr, value) {
  let indexes = [];
  arr.forEach((item, index) => {
    if (item === value) indexes.push(index);
  });
  return (!indexes.length) ? -1 : indexes.join(', ');
}

console.log(find([1,2,3,4,5,6,7,8,9,10], 10));
console.log(find([1,2,10,4,5,10,7,8,9,10], 10));
console.log(find([1,2,10,4,5,10,7,8,9,10], 100));
