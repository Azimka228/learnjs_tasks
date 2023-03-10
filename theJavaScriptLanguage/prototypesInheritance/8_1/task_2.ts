// TASK 2
// Задача состоит из двух частей.
//
// 	У нас есть объекты:
//
// 	let head = {
// 		glasses: 1
// 	};
//
// let table = {
// 	pen: 3
// };
//
// let bed = {
// 	sheet: 1,
// 	pillow: 2
// };
//
// let pockets = {
// 	money: 2000
// };
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.


// answer

let head = {
	glasses: 1
};

let table2 = {
	pen: 3,
	__proto__: head
};

let bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table2
};

let pockets = {
	money: 2000,
	__proto__: bed
};