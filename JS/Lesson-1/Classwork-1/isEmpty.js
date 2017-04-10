'use strict';
function isEmpty(obj) {
 return !Object.keys(obj).length;
}

let obj1 = {};
let obj2 = {
  name: 'Ivan'
};

console.log(isEmpty(obj1));
console.log(isEmpty(obj2));
