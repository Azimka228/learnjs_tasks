// TASK 2
// Создайте объект calculator (калькулятор) с тремя методами:
//
// 	read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// 	let calculator = {
// 	// ... ваш код ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//answer
let calculator = {
	sum() {
		return this._firstNum + this._secondNum
	},
	mul() {
		return this._firstNum * this._secondNum
	},
	read() {
		this._firstNum = Number(prompt("Первое число?", "0"))
		this._secondNum = Number(prompt("Второе?", "0"))
	}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());