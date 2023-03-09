// TASK 9
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
//
// 	Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

//answer
function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);


alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);