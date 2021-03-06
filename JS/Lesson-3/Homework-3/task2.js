function runString(arg, obj) {
    return new Function(obj.param, obj.func)(arg);
}

var arg = 4,                         // аргумент для функции runString
    obj = {
      param: 'num',                  // имя параметра для функции в свойстве func
      func: 'return Math.sqrt(num)'  // функция, которая должна быть вызван с  агрументом arg
    };

console.log(runString(arg, obj));
