// TASK 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
// 	Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//
// 	Например:
//
// alert( extractCurrencyValue('$120') === 120 ); // true

//answer

function extractCurrencyValue (str) {
	return Number(str.slice(1))
}