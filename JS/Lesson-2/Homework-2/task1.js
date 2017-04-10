function makeCounter() {
  function counter(i) {
    return counter.currentCount += i;
  };
  counter.currentCount = 0;
  return counter;
}

var counter = makeCounter();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));
