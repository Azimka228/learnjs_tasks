// TASK 12
// Пусть arr – массив строк.
//
// 	Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//
// 	Например:
//
// function unique(arr) {
// 	/* ваш код */
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
// 	"харе", "харе", "кришна", "кришна", ":-O"
// ];


//answer

function unique(arr) {
	let result = [];

	for (let str of arr) {
		// @ts-ignore
		if (result.includes(str)) continue;
		result.push(str);
	}

	return result;
}
