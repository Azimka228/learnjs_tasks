// TASK 1
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
// 	Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


//answer
function camelize(str: string) {
	let arr = str.split("-")
	return arr.map((el,index) => {
		if (index === 0) {
			return `${el.slice(0)}`
		} else {
			return  `${el[0].toUpperCase()}${el.slice(1)}`
		}
	}).join('')

}