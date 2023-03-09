// TASK 3
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

//answer
function Accumulator(startingValue:number) {

	this.value = startingValue

	this.read = function () {
		this._currentValue = +prompt("Какое число добавить?", "0");
		this.value = this.value + this._currentValue
	};


}


let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);