// TASK 2
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
// 	read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// 	Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {

	this.read = () => {
		this._firstNum = +prompt("first Number?", "0");
		this._secondNum = +prompt("second Number?", "0");
	};

	this.sum = () => {
		return this._firstNum + this._secondNum;
	};

	this.mul = () => {
		return this._firstNum * this._secondNum;
	};

}

let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());