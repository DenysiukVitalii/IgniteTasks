var data1 = document.getElementById('field-1');
var data2 = document.getElementById('field-2');
var operations = document.querySelectorAll('.operations input[type=button]');
var res = document.getElementById('result');

// DOM Level 0
for (var i = 0; i < operations.length; i++) {
  operations[i].onclick = function() {
    if (this.value === 'C') {
      data1.value = '';
      data2.value = '';
      res.innerHTML = 'Result';
    } else
    res.innerHTML = eval(data1.value + this.value + data2.value);
  }
}

// DOM Level 2
for (var i = 0; i < operations.length; i++) {
  operations[i].addEventListener('click', function() {
    if (this.value === 'C') {
      data1.value = '';
      data2.value = '';
      res.innerHTML = 'Result';
    } else
    res.innerHTML = eval(data1.value + this.value + data2.value);
  });
}
