// TASK 11
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//
// 	Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
//
// 	Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(users) {
	let sumAge = 0

	for (let i = 0; i < users.length; i++) {
		sumAge = sumAge + users[i].age
	}

	return sumAge / users.length
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) );