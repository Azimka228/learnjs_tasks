// TASK 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
//
// ucFirst("вася") == "Вася";


//answer
function ucFirst (str) {

	if (str) {
		let newStr = str[0].toUpperCase() + str.slice(1)
		return newStr
	} else {
		return 'enter normall value'
	}

}