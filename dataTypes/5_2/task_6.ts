// TASK 6
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//
// 	Любое число из интервала min..max должно появляться с одинаковой вероятностью.
//
// 	Пример работы функции:

function randomInteger(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}