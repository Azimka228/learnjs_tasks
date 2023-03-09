// TASK 7

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
//
// 	Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = /* ... ваш код */
//
// 	alert( names );

//answer
let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 28 };

let users4 = [ vasya4, petya4, masha4 ];

let names = users4.map(item => item.name);

alert( names );