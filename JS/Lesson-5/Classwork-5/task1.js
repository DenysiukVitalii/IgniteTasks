'use strict';

function printNumber() {
  let counter = 1;
  let timer = setInterval(function() {
    console.log(counter);
    if (counter == 20) clearInterval(timer);
    counter++;
  }, 100);
}

printNumber();
