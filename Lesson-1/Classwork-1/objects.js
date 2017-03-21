'use strict';

let user = {};

user.name = "Вася";
console.log(user.name);

user.surname = "Петров";

user.name = "Сергей";
console.log(user.name);

delete user.name;
console.log(user.name);
