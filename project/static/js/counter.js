var counters = document.getElementsByClassName("counter");
var number;

for (var i = 0; i < counters.length; i++) {
    number = +counters[i].innerHTML;
    countNumbers(counters[i], number);
}

function countNumbers(counter, number) {
    var i = 0;
    var timerId = setInterval(function () {
      if (i > number) i = number;
      counter.innerHTML = parseInt(i);
      if (i == number) clearInterval(timerId);
      i += number / 200;
    }, 10);
}
