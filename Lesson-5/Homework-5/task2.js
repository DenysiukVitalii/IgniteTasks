function smartSum() {
  var args = [].slice.apply(arguments);
	args = args.map((arg) => arg || 0);
	var prevSum = args.reduce((sum, arg) => sum + arg);

  function innerSum() {
    var args = [].slice.apply(arguments);
  	args = args.map((arg) => arg || 0);
    prevSum += args.reduce((sum, arg) => sum + arg);
    return innerSum;
  }

  innerSum.valueOf = function() {
  	return prevSum;
  }

  return innerSum;
}

console.log(+smartSum(1, 3)(2, NaN)); // 6;

console.log(+smartSum(1, 2)(3, 4, 5, null)(6)(7, 10)); // 38;
