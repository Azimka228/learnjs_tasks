// TASK 4
// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// 	Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// 	P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

//answer
function sumInput() {
	let result = []
	let isActive = true
	do {
		let currentNum = prompt('Введите число?', '0')
		if (currentNum === null || currentNum === '' || !isFinite(Number(currentNum)) ){
			isActive = false
		} else {
			result.push(currentNum)
		}
	} while (isActive)
	return result

}