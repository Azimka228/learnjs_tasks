// TASK 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
// 	Функция должна быть нечувствительна к регистру:
//
// 	checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

//answer
function checkSpam (str) {
		let currentStr = str.toLowerCase()
		return currentStr.includes('viagra') || currentStr.includes('xxx');
}