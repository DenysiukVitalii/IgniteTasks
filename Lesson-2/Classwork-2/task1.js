var value = 0;

function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }
  console.log( value );
}
f();
// Відповідь: true. Змінна value - локальна змінна функції "f". На початку функції value = undefined
//                  Потім за допомогою умови змінна value набуде значення true



function f() {
  if (1) {
    value = true;
  } else {
    value = false; // без var
  }
  console.log( value );
}
f();

// Відповідь: true. Функція не має локальних змінних, тому змінна value візьметься з замикання.
//                  Потім за допомогою умови змінна value набуде значення true
