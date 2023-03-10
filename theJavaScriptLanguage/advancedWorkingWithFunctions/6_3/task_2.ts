// TASK 2
//
// Здесь объект счётчика создан с помощью функции-конструктора.
//
// 	Будет ли он работать? Что покажет?
//
// 	function Counter() {
// 		let count = 0;
//
// 		this.up = function() {
// 			return ++count;
// 		};
// 		this.down = function() {
// 			return --count;
// 		};
// 	}
//
// 	let counter = new Counter();
//
// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?


//answer
// Будет работать, так как лексическое окружение одно и то же