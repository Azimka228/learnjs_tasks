// TASK 1
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
// 	Сделайте два варианта решения.
//
// 	Используя setInterval.
// 	Используя рекурсивный setTimeout.

//answer
function printNumbers(from, to) {
	let current = from;

	setTimeout(function go() {
		alert(current);
		if (current < to) {
			setTimeout(go, 1000);
		}
		current++;
	}, 1000);
}

function printNumbers2(from, to) {
	let current = from;

	function go() {
		alert(current);
		if (current == to) {
			clearInterval(timerId);
		}
		current++;
	}

	go();
	let timerId = setInterval(go, 1000);
}
