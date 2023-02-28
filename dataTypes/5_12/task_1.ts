// TASK 1

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
//
// 	let user = {
// 	name: "Василий Иванович",
// 	age: 35
// };

let user = {
	name: "Василий Иванович",
	age: 35
};

let user2 = JSON.parse(JSON.stringify(user));