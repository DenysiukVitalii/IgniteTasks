'use strict';
/*
// case #1 - with closure
function makeArmy() {
var shooters = [];

for (var i = 0; i < 10; i++) {
  var shooter = (function(i) {
      return function(){
        console.log(i);
      };
  })(i);
  shooters.push(shooter);
}
  return shooters;
}
*/

// case #2 - use let or const
function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
 	  let shooter = function() { // функция-стрелок
 	    console.log(i); // выводит свой номер
 	  };
 	  shooters.push(shooter);
 	}
   return shooters;
 }



var army = makeArmy();
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10, а должен 5.
